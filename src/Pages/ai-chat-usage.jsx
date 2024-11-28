"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { useHandleStreamResponse } from "../utilities/runtime-helpers";

function MainComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [streamingMessage, setStreamingMessage] = useState("");
  const [sessionStartTime, setSessionStartTime] = useState(Date.now());
  const [usage, setUsage] = useState({
    promptTokens: 0,
    completionTokens: 0,
    totalTokens: 0,
    detailedUsage: [],
    userMetrics: {
      totalQueries: 0,
      uniqueUsers: new Set(),
      sessionsStarted: 0,
      sessionLengths: [],
      dailyActiveUsers: new Set(),
      weeklyActiveUsers: new Set(),
      monthlyActiveUsers: new Set(),
      frequencyMetrics: {
        daily: 0,
        weekly: 0,
        monthly: 0,
      },
      responseMetrics: {
        totalResponseTime: 0,
        responseCount: 0,
        errorCount: 0,
      },
      interactionPatterns: {
        timeOfDayUsage: Array.from({ length: 24 }).fill(0),
        dayOfWeekUsage: Array.from({ length: 7 }).fill(0),
        consecutiveQueries: 0,
        maxConsecutiveQueries: 0,
      },
      contentAnalysis: {
        topicFrequency: {},
        sentimentScores: [],
        complexityScores: [],
      },
    },
  });
  const chatContainerRef = useRef(null);
  const mockUserId = "user-123";

  useEffect(() => {
    setSessionStartTime(Date.now());
    setUsage((prev) => ({
      ...prev,
      userMetrics: {
        ...prev.userMetrics,
        sessionsStarted: prev.userMetrics.sessionsStarted + 1,
        uniqueUsers: prev.userMetrics.uniqueUsers.add(mockUserId),
        dailyActiveUsers: prev.userMetrics.dailyActiveUsers.add(mockUserId),
        weeklyActiveUsers: prev.userMetrics.weeklyActiveUsers.add(mockUserId),
        monthlyActiveUsers: prev.userMetrics.monthlyActiveUsers.add(mockUserId),
        frequencyMetrics: {
          ...prev.userMetrics.frequencyMetrics,
          daily: prev.userMetrics.frequencyMetrics.daily + 1,
        },
      },
    }));
  }, []);

  const handleFinish = useCallback(
    (message, response) => {
      // Don't return the token count as it was causing the "0" to appear
      const currentPromptTokens = response?.usage?.prompt_tokens ?? 0;
      const currentCompletionTokens = response?.usage?.completion_tokens ?? 0;
      const currentTotalTokens = response?.usage?.total_tokens ?? 0;
      const timestamp = new Date().toISOString();
      const responseTime = Date.now() - new Date(timestamp).getTime();
      const hour = new Date().getHours();
      const day = new Date().getDay();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: message,
          // Remove tokens from the message object as it's being rendered
          timestamp,
        },
      ]);
      setStreamingMessage("");

      if (response?.usage) {
        setUsage((prev) => ({
          ...prev,
          promptTokens: prev.promptTokens + currentPromptTokens,
          completionTokens: prev.completionTokens + currentCompletionTokens,
          totalTokens: prev.totalTokens + currentTotalTokens,
          detailedUsage: [
            ...prev.detailedUsage,
            {
              userTokens: currentPromptTokens,
              assistantTokens: currentCompletionTokens,
              total: currentTotalTokens,
              timestamp,
              input_length: input.length,
              output_length: message.length,
              responseTime,
            },
          ],
          userMetrics: {
            ...prev.userMetrics,
            totalQueries: prev.userMetrics.totalQueries + 1,
            responseMetrics: {
              ...prev.userMetrics.responseMetrics,
              totalResponseTime:
                prev.userMetrics.responseMetrics.totalResponseTime +
                responseTime,
              responseCount: prev.userMetrics.responseMetrics.responseCount + 1,
            },
            interactionPatterns: {
              ...prev.userMetrics.interactionPatterns,
              timeOfDayUsage:
                prev.userMetrics.interactionPatterns.timeOfDayUsage.map(
                  (count, index) => (index === hour ? count + 1 : count)
                ),
              dayOfWeekUsage:
                prev.userMetrics.interactionPatterns.dayOfWeekUsage.map(
                  (count, index) => (index === day ? count + 1 : count)
                ),
              consecutiveQueries:
                prev.userMetrics.interactionPatterns.consecutiveQueries + 1,
              maxConsecutiveQueries: Math.max(
                prev.userMetrics.interactionPatterns.consecutiveQueries + 1,
                prev.userMetrics.interactionPatterns.maxConsecutiveQueries
              ),
            },
          },
        }));
      }
    },
    [input]
  );

  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: handleFinish,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const timestamp = new Date().toISOString();
    const userMessage = {
      role: "user",
      content: input,
      timestamp,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await fetch("/integrations/chat-gpt/conversationgpt4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          stream: true,
        }),
      });

      if (!response.ok) {
        throw new Error("API request failed");
      }

      handleStreamResponse(response);
    } catch (error) {
      setUsage((prev) => ({
        ...prev,
        userMetrics: {
          ...prev.userMetrics,
          responseMetrics: {
            ...prev.userMetrics.responseMetrics,
            errorCount: prev.userMetrics.responseMetrics.errorCount + 1,
          },
        },
      }));
      setMessages((prev) => [
        ...prev,
        {
          role: "system",
          content:
            "Sorry, there was an error processing your request. Please try again.",
          timestamp: new Date().toISOString(),
        },
      ]);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [messages, streamingMessage]);

  const calculateMetrics = () => {
    const currentSessionLength = (Date.now() - sessionStartTime) / 1000;
    const averageQueriesPerUser =
      usage.userMetrics.totalQueries / usage.userMetrics.uniqueUsers.size;
    const averageSessionLength =
      [...usage.userMetrics.sessionLengths, currentSessionLength].reduce(
        (a, b) => a + b,
        0
      ) / usage.userMetrics.sessionsStarted;

    const lastDay = new Date();
    lastDay.setDate(lastDay.getDate() - 1);
    const dailyUsage = usage.detailedUsage.filter(
      (u) => new Date(u.timestamp) > lastDay
    );

    const lastWeek = new Date();
    lastWeek.setDate(lastWeek.getDate() - 7);
    const weeklyUsage = usage.detailedUsage.filter(
      (u) => new Date(u.timestamp) > lastWeek
    );

    const avgInputLength =
      usage.detailedUsage.reduce((acc, curr) => acc + curr.input_length, 0) /
        usage.detailedUsage.length || 0;
    const avgOutputLength =
      usage.detailedUsage.reduce((acc, curr) => acc + curr.output_length, 0) /
        usage.detailedUsage.length || 0;

    const avgResponseTime =
      usage.userMetrics.responseMetrics.totalResponseTime /
        usage.userMetrics.responseMetrics.responseCount || 0;

    const peakHour =
      usage.userMetrics.interactionPatterns.timeOfDayUsage.indexOf(
        Math.max(...usage.userMetrics.interactionPatterns.timeOfDayUsage)
      );

    const peakDay =
      usage.userMetrics.interactionPatterns.dayOfWeekUsage.indexOf(
        Math.max(...usage.userMetrics.interactionPatterns.dayOfWeekUsage)
      );

    const errorRate =
      (usage.userMetrics.responseMetrics.errorCount /
        usage.userMetrics.totalQueries) *
        100 || 0;

    return {
      averageQueriesPerUser: averageQueriesPerUser.toFixed(2),
      averageSessionLength: averageSessionLength.toFixed(2),
      currentSessionLength: currentSessionLength.toFixed(2),
      dailyUsage: dailyUsage.length,
      weeklyUsage: weeklyUsage.length,
      averageInputLength: avgInputLength.toFixed(2),
      averageOutputLength: avgOutputLength.toFixed(2),
      totalInputOutputRatio: avgOutputLength
        ? (avgInputLength / avgOutputLength).toFixed(2)
        : "0.00",
      dailyActiveUsers: usage.userMetrics.dailyActiveUsers.size,
      weeklyActiveUsers: usage.userMetrics.weeklyActiveUsers.size,
      monthlyActiveUsers: usage.userMetrics.monthlyActiveUsers.size,
      avgResponseTime: avgResponseTime.toFixed(2),
      errorRate: errorRate.toFixed(2),
      peakHour,
      peakDay,
      consecutiveQueries:
        usage.userMetrics.interactionPatterns.consecutiveQueries,
      maxConsecutiveQueries:
        usage.userMetrics.interactionPatterns.maxConsecutiveQueries,
    };
  };
  const metrics = calculateMetrics();

  return (
    <div className="flex flex-col h-screen bg-gray-100 p-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        <div className="md:col-span-3 flex flex-col">
          <div className="flex-1 bg-white rounded-lg shadow-lg p-6 mb-4 overflow-hidden flex flex-col">
            <div ref={chatContainerRef} className="flex-1 overflow-y-auto mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`mb-4 ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <div
                    className={`inline-block p-4 rounded-lg ${
                      message.role === "user"
                        ? "bg-blue-500 text-white"
                        : message.role === "system"
                        ? "bg-red-500 text-white"
                        : "bg-gray-200 text-gray-800"
                    }`}
                  >
                    <p className="font-roboto">{message.content}</p>
                    <div className="mt-2 text-sm opacity-75">
                      <p>
                        Time:{" "}
                        {new Date(message.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {streamingMessage && (
                <div className="mb-4 text-left">
                  <div className="inline-block p-4 rounded-lg bg-gray-200 text-gray-800">
                    <p className="font-roboto">{streamingMessage}</p>
                  </div>
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                name="message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 font-roboto"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors font-roboto"
              >
                <i className="fas fa-paper-plane mr-2"></i>Send
              </button>
            </form>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 overflow-y-auto">
          <h2 className="text-xl font-roboto font-bold mb-4">
            Usage Analytics
          </h2>

          <div className="space-y-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-roboto font-semibold text-gray-700 mb-2">
                Current Token Usage
              </h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div>
                  <p className="text-sm text-gray-600">Prompt</p>
                  <p className="text-xl font-bold text-blue-500">
                    {usage.promptTokens}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Completion</p>
                  <p className="text-xl font-bold text-green-500">
                    {usage.completionTokens}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Total</p>
                  <p className="text-xl font-bold text-purple-500">
                    {usage.totalTokens}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg">
              <h3 className="font-roboto font-semibold text-gray-700 mb-2">
                Active Users
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Daily Active:</span>
                  <span className="font-bold">{metrics.dailyActiveUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Active:</span>
                  <span className="font-bold">{metrics.weeklyActiveUsers}</span>
                </div>
                <div className="flex justify-between">
                  <span>Monthly Active:</span>
                  <span className="font-bold">
                    {metrics.monthlyActiveUsers}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="font-roboto font-semibold text-gray-700 mb-2">
                Usage Stats
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Total Queries:</span>
                  <span className="font-bold">
                    {usage.userMetrics.totalQueries}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Queries/User:</span>
                  <span className="font-bold">
                    {metrics.averageQueriesPerUser}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Daily Usage:</span>
                  <span className="font-bold">{metrics.dailyUsage}</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekly Usage:</span>
                  <span className="font-bold">{metrics.weeklyUsage}</span>
                </div>
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="font-roboto font-semibold text-gray-700 mb-2">
                Session Metrics
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Current Duration:</span>
                  <span className="font-bold">
                    {metrics.currentSessionLength}s
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Session:</span>
                  <span className="font-bold">
                    {metrics.averageSessionLength}s
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Total Sessions:</span>
                  <span className="font-bold">
                    {usage.userMetrics.sessionsStarted}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="font-roboto font-semibold text-gray-700 mb-2">
                Message Analysis
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Avg Input Length:</span>
                  <span className="font-bold">
                    {metrics.averageInputLength}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Output Length:</span>
                  <span className="font-bold">
                    {metrics.averageOutputLength}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Input/Output Ratio:</span>
                  <span className="font-bold">
                    {metrics.totalInputOutputRatio}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Avg Response Time:</span>
                  <span className="font-bold">{metrics.avgResponseTime}ms</span>
                </div>
                <div className="flex justify-between">
                  <span>Error Rate:</span>
                  <span className="font-bold">{metrics.errorRate}%</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak Hour:</span>
                  <span className="font-bold">{metrics.peakHour}:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Peak Day:</span>
                  <span className="font-bold">
                    {
                      ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
                        metrics.peakDay
                      ]
                    }
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Consecutive Queries:</span>
                  <span className="font-bold">
                    {metrics.consecutiveQueries}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Max Consecutive:</span>
                  <span className="font-bold">
                    {metrics.maxConsecutiveQueries}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";

import { useUpload } from "../utilities/runtime-helpers";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useHandleStreamResponse } from "../utilities/runtime-helpers";

function MainComponent() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState("");
  const [theme, setTheme] = useState("light");
  const [fontSize, setFontSize] = useState("medium");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [autoScroll, setAutoScroll] = useState(true);
  const [isMarkdown, setIsMarkdown] = useState(true);
  const [voiceInput, setVoiceInput] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const [suggestions] = useState([
    "Tell me a story",
    "Write a poem",
    "Explain quantum physics",
    "Help me debug code",
    "Plan my vacation",
  ]);
  const scrollToBottom = () => {
    if (autoScroll) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, streamingMessage, autoScroll]);

  const handleFinish = useCallback(
    (message) => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: message,
          timestamp: new Date().toISOString(),
        },
      ]);
      setStreamingMessage("");
      setIsLoading(false);

      if (isSpeaking) {
        const utterance = new SpeechSynthesisUtterance(message);
        speechSynthesis.speak(utterance);
      }
    },
    [isSpeaking]
  );
  const handleStreamResponse = useHandleStreamResponse({
    onChunk: setStreamingMessage,
    onFinish: handleFinish,
  });
  const handleSubmit = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      role: "user",
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await fetch("/integrations/chat-gpt/conversationgpt4", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          stream: true,
        }),
      });
      handleStreamResponse(response);
    } catch (error) {
      setIsLoading(false);
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };
  const clearChat = () => {
    setMessages([]);
    setStreamingMessage("");
  };
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, 200)}px`;
  };
  const exportChat = () => {
    const chatContent = messages
      .map(
        (m) =>
          `[${new Date(m.timestamp).toLocaleString()}] ${m.role}: ${m.content}`
      )
      .join("\n\n");
    const blob = new Blob([chatContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chat-export-${new Date().toISOString()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };
  const getThemeClasses = () => {
    return theme === "dark"
      ? {
          bg: "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900",
          text: "text-white",
          secondary: "bg-gray-800/50 backdrop-blur-lg",
          accent: "bg-gray-700/50",
          hover: "hover:bg-gray-600/50",
          border: "border-gray-600",
          glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
        }
      : {
          bg: "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50",
          text: "text-gray-900",
          secondary: "bg-white/70 backdrop-blur-lg",
          accent: "bg-gray-50/70",
          hover: "hover:bg-gray-100/70",
          border: "border-gray-200",
          glow: "shadow-[0_0_15px_rgba(59,130,246,0.2)]",
        };
  };
  const themeClasses = getThemeClasses();
  const startVoiceInput = () => {
    if ("webkitSpeechRecognition" in window) {
      const recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.start();
      setVoiceInput(true);
    }
  };

  return (
    <div
      className={`flex flex-col h-screen ${themeClasses.bg} transition-colors duration-200 font-inter`}
    >
      <div className="flex-1 max-w-[1600px] w-full mx-auto p-4 md:p-6 flex flex-col gap-6">
        <div className="relative">
          <div className="relative">
            <div
              className={`${themeClasses.secondary} rounded-3xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center backdrop-blur-lg border-2 ${themeClasses.border} relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 animate-gradient"></div>
              <div className="flex items-center space-x-4 z-10">
                <h1
                  className={`text-3xl md:text-4xl font-black ${themeClasses.text} font-inter flex items-center tracking-tight`}
                >
                  <span className="mr-3 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
                    AI Chat Assistant
                  </span>
                  <i className="fas fa-robot text-blue-500 text-2xl md:text-3xl animate-pulse"></i>
                </h1>
              </div>

              <div className="flex items-center space-x-6 z-10 mt-4 md:mt-0">
                <button
                  onClick={() => setIsSpeaking(!isSpeaking)}
                  className={`p-3 rounded-xl ${themeClasses.accent} ${
                    themeClasses.hover
                  } transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isSpeaking ? "ring-2 ring-blue-500 text-blue-500" : ""
                  }`}
                  title={
                    isSpeaking
                      ? "Disable text-to-speech"
                      : "Enable text-to-speech"
                  }
                >
                  <i className="fas fa-volume-up text-xl"></i>
                </button>

                <button
                  onClick={() => setIsMarkdown(!isMarkdown)}
                  className={`p-3 rounded-xl ${themeClasses.accent} ${
                    themeClasses.hover
                  } transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isMarkdown ? "ring-2 ring-blue-500 text-blue-500" : ""
                  }`}
                  title={isMarkdown ? "Disable markdown" : "Enable markdown"}
                >
                  <i className="fas fa-code text-xl"></i>
                </button>

                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className={`p-3 rounded-xl ${themeClasses.accent} ${
                    themeClasses.hover
                  } transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isMenuOpen ? "ring-2 ring-blue-500" : ""
                  }`}
                >
                  <i className="fas fa-cog text-xl animate-spin-slow"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex-1 ${themeClasses.secondary} overflow-y-auto p-8 md:p-12 space-y-10 rounded-3xl border-2 ${themeClasses.border} backdrop-blur-lg relative`}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none"></div>

          {isMenuOpen ? (
            <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
              <div className="w-full max-w-md space-y-6">
                <div>
                  <label
                    className={`block text-lg font-semibold mb-2 ${themeClasses.text}`}
                  >
                    Theme
                  </label>
                  <select
                    value={theme}
                    onChange={(e) => setTheme(e.target.value)}
                    className={`w-full rounded-lg p-3 ${themeClasses.accent} border ${themeClasses.border} focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-200`}
                  >
                    <option value="light">Light Mode</option>
                    <option value="dark">Dark Mode</option>
                  </select>
                </div>

                <div>
                  <label
                    className={`block text-lg font-semibold mb-2 ${themeClasses.text}`}
                  >
                    Font Size
                  </label>
                  <select
                    value={fontSize}
                    onChange={(e) => setFontSize(e.target.value)}
                    className={`w-full rounded-lg p-3 ${themeClasses.accent} border ${themeClasses.border} focus:ring-2 focus:ring-blue-500/50 focus:outline-none transition-all duration-200`}
                  >
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                </div>

                <div
                  className={`flex items-center justify-between p-3 rounded-lg border ${themeClasses.border}`}
                >
                  <span
                    className={`text-lg font-semibold ${themeClasses.text}`}
                  >
                    Auto-scroll
                  </span>
                  <button
                    onClick={() => setAutoScroll(!autoScroll)}
                    className={`${
                      autoScroll ? "bg-blue-500" : themeClasses.accent
                    } relative inline-flex h-8 w-14 items-center rounded-full transition-all duration-200 shadow-md`}
                  >
                    <span
                      className={`${
                        autoScroll ? "translate-x-8" : "translate-x-1"
                      } inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform duration-200`}
                    />
                  </button>
                </div>

                <button
                  onClick={clearChat}
                  className="w-full flex items-center justify-center space-x-2 text-red-500 hover:text-red-600 transition-colors p-3 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 font-semibold border border-red-200 dark:border-red-500/20"
                >
                  <i className="fas fa-trash-alt"></i>
                  <span>Clear Chat</span>
                </button>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-colors font-semibold"
                >
                  Return to Chat
                </button>
              </div>
            </div>
          ) : (
            <>
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
                  <i className="fas fa-comments text-7xl text-blue-500/50 animate-bounce-slow"></i>
                  <h2
                    className={`text-2xl ${themeClasses.text} font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text`}
                  >
                    Start Your Conversation
                  </h2>
                  <div className="flex flex-wrap justify-center gap-3 max-w-xl">
                    {suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => setInputMessage(suggestion)}
                        className={`${themeClasses.accent} ${themeClasses.hover} px-6 py-3 rounded-xl text-base transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border ${themeClasses.border}`}
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  } group animate-message-slide-in`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-6 shadow-xl backdrop-blur-sm transform transition-all duration-300 hover:scale-[1.02] ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white"
                        : `${themeClasses.accent} ${themeClasses.text}`
                    } ${themeClasses.glow} border-2 ${
                      message.role === "user"
                        ? "border-blue-500/20"
                        : themeClasses.border
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`p-2 rounded-lg ${
                          message.role === "user"
                            ? "bg-blue-500/20"
                            : themeClasses.accent
                        }`}
                      >
                        <i
                          className={`fas ${
                            message.role === "user" ? "fa-user" : "fa-robot"
                          } text-lg`}
                        ></i>
                      </div>
                      <span className="text-sm opacity-75 font-medium">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    </div>
                    <p
                      className={`whitespace-pre-wrap font-inter select-text text-${fontSize} leading-relaxed`}
                    >
                      {message.content}
                    </p>
                  </div>
                </div>
              ))}

              {streamingMessage && (
                <div className="flex justify-start animate-fade-in">
                  <div
                    className={`max-w-[85%] rounded-2xl p-6 ${themeClasses.accent} shadow-xl backdrop-blur-sm ${themeClasses.glow} border-2 ${themeClasses.border}`}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className={`p-2 rounded-lg ${themeClasses.accent}`}>
                        <i className="fas fa-robot text-lg"></i>
                      </div>
                      <span className="text-sm opacity-75 font-medium">
                        Typing...
                      </span>
                    </div>
                    <p
                      className={`whitespace-pre-wrap font-inter text-${fontSize} leading-relaxed`}
                    >
                      {streamingMessage}
                    </p>
                  </div>
                </div>
              )}

              {isLoading && !streamingMessage && (
                <div className="flex justify-start">
                  <div
                    className={`max-w-[85%] rounded-2xl p-6 ${themeClasses.accent} shadow-xl backdrop-blur-sm ${themeClasses.glow} border-2 ${themeClasses.border}`}
                  >
                    <div className="flex space-x-3">
                      <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
                      <div
                        className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      ></div>
                      <div
                        className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={messagesEndRef} />
        </div>
        <div
          className={`${themeClasses.secondary} rounded-3xl p-8 md:p-10 shadow-2xl border-2 ${themeClasses.border} backdrop-blur-lg relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-blue-500/5 animate-gradient"></div>

          <div className="flex flex-col space-y-6 relative z-10">
            <div className="flex items-end space-x-6">
              <div className="flex-1 relative">
                <textarea
                  ref={textareaRef}
                  value={inputMessage}
                  onChange={(e) => {
                    setInputMessage(e.target.value);
                    adjustTextareaHeight();
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className={`w-full resize-none rounded-2xl border-2 ${themeClasses.border} p-6 focus:outline-none focus:ring-4 focus:ring-blue-500/50 font-inter text-${fontSize} max-h-[200px] ${themeClasses.accent} shadow-inner transition-all duration-300`}
                  rows={1}
                  name="message"
                />
                <div className="absolute right-6 bottom-6 flex space-x-4">
                  <button
                    onClick={startVoiceInput}
                    className={`p-4 rounded-xl ${
                      themeClasses.hover
                    } transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                      voiceInput
                        ? "text-red-500 bg-red-50 dark:bg-red-500/10"
                        : `${themeClasses.accent} text-gray-400`
                    }`}
                    title="Voice input"
                  >
                    <i className="fas fa-microphone text-xl"></i>
                  </button>
                </div>
              </div>

              <div className="flex space-x-6">
                <button
                  onClick={exportChat}
                  className={`p-5 rounded-xl ${themeClasses.accent} ${themeClasses.hover} transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1`}
                  title="Export chat"
                >
                  <i className="fas fa-download text-2xl"></i>
                </button>

                <button
                  onClick={handleSubmit}
                  disabled={isLoading || !inputMessage.trim()}
                  className={`p-5 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                    isLoading || !inputMessage.trim()
                      ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800"
                  } ${themeClasses.glow}`}
                >
                  <i className="fas fa-paper-plane text-2xl"></i>
                </button>
              </div>
            </div>

            <div className="flex justify-between text-sm text-gray-500 font-medium px-3">
              <span>Press Enter to send • Shift + Enter for new line</span>
              <span>{inputMessage.length} characters</span>
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-12px);}
    60% {transform: translateY(-6px);}
  }
  
  @keyframes bounce-slow {
    0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
    40% {transform: translateY(-30px);}
    60% {transform: translateY(-15px);}
  }
  
  @keyframes message-slide-in {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fade-in {
    from {opacity: 0;}
    to {opacity: 1;}
  }
  
  @keyframes gradient {
    0% {background-position: 0% 50%;}
    50% {background-position: 100% 50%;}
    100% {background-position: 0% 50%;}
  }
  
  @keyframes spin-slow {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }
  
  .animate-spin-slow {
    animation: spin-slow 4s linear infinite;
  }
  
  .animate-bounce-slow {
    animation: bounce-slow 3s infinite;
  }
  
  .animate-message-slide-in {
    animation: message-slide-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
  
  .animate-gradient {
    animation: gradient 8s ease infinite;
    background-size: 200% 200%;
  }
`}</style>
    </div>
  );
}

export default MainComponent;

"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [showCode, setShowCode] = React.useState({});

  const codeSamples = {
    badge: `<div className="flex gap-4">
  <ShadcnUI.Badge>Default</ShadcnUI.Badge>
  <ShadcnUI.Badge variant="secondary">Secondary</ShadcnUI.Badge>
  <ShadcnUI.Badge variant="destructive">Destructive</ShadcnUI.Badge>
</div>`,
    label: `<div className="flex flex-col gap-2">
  <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
  <ShadcnUI.Input type="email" id="email" placeholder="Enter email" />
</div>`,
    status: `<div className="flex items-center gap-2">
  <ShadcnUI.Badge 
    variant="outline" 
    className="bg-green-100 text-green-800"
  >
    Active
  </ShadcnUI.Badge>
  <ShadcnUI.Badge 
    variant="outline"
    className="bg-yellow-100 text-yellow-800" 
  >
    Pending
  </ShadcnUI.Badge>
  <ShadcnUI.Badge 
    variant="outline"
    className="bg-red-100 text-red-800"
  >
    Inactive
  </ShadcnUI.Badge>
</div>`,
    notification: `<div className="flex items-center gap-4">
  <div className="relative">
    <ShadcnUI.Button variant="outline">
      <i className="fas fa-bell"></i>
    </ShadcnUI.Button>
    <ShadcnUI.Badge 
      className="absolute -top-2 -right-2 h-5 w-5"
      variant="destructive"
    >
      5
    </ShadcnUI.Badge>
  </div>
  <div className="relative">
    <ShadcnUI.Button variant="outline">
      <i className="fas fa-envelope"></i>
    </ShadcnUI.Button>
    <ShadcnUI.Badge 
      className="absolute -top-2 -right-2 h-5 w-5"
      variant="destructive"
    >
      3
    </ShadcnUI.Badge>
  </div>
</div>`,
  };

  const toggleCode = (component) => {
    setShowCode((prev) => ({
      ...prev,
      [component]: !prev[component],
    }));
  };

  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Basic Badges</h2>
            <div className="flex gap-4">
              <ShadcnUI.Badge>Default</ShadcnUI.Badge>
              <ShadcnUI.Badge variant="secondary">Secondary</ShadcnUI.Badge>
              <ShadcnUI.Badge variant="destructive">Destructive</ShadcnUI.Badge>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCode("badge")}
            >
              {showCode.badge ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.badge && (
              <pre className="mt-2 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <code>{codeSamples.badge}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Form Labels</h2>
            <div className="flex flex-col gap-2">
              <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
              <ShadcnUI.Input
                type="email"
                id="email"
                placeholder="Enter email"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCode("label")}
            >
              {showCode.label ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.label && (
              <pre className="mt-2 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <code>{codeSamples.label}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Status Indicators</h2>
            <div className="flex items-center gap-2">
              <ShadcnUI.Badge
                variant="outline"
                className="bg-green-100 text-green-800"
              >
                Active
              </ShadcnUI.Badge>
              <ShadcnUI.Badge
                variant="outline"
                className="bg-yellow-100 text-yellow-800"
              >
                Pending
              </ShadcnUI.Badge>
              <ShadcnUI.Badge
                variant="outline"
                className="bg-red-100 text-red-800"
              >
                Inactive
              </ShadcnUI.Badge>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCode("status")}
            >
              {showCode.status ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.status && (
              <pre className="mt-2 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <code>{codeSamples.status}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-xl font-semibold mb-4">Notification Badges</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <ShadcnUI.Button variant="outline">
                  <i className="fas fa-bell"></i>
                </ShadcnUI.Button>
                <ShadcnUI.Badge
                  className="absolute -top-2 -right-2 h-5 w-5"
                  variant="destructive"
                >
                  5
                </ShadcnUI.Badge>
              </div>
              <div className="relative">
                <ShadcnUI.Button variant="outline">
                  <i className="fas fa-envelope"></i>
                </ShadcnUI.Button>
                <ShadcnUI.Badge
                  className="absolute -top-2 -right-2 h-5 w-5"
                  variant="destructive"
                >
                  3
                </ShadcnUI.Badge>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCode("notification")}
            >
              {showCode.notification ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.notification && (
              <pre className="mt-2 p-4 bg-gray-100 rounded-lg overflow-x-auto">
                <code>{codeSamples.notification}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const { toast } = ShadcnUI.useToast();
  const [showCode, setShowCode] = React.useState({});

  const toggleCode = (section) => {
    setShowCode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const codeSections = {
    alerts: `
<ShadcnUI.CustomAlert 
  variant="default" 
  title="Success!" 
  description="Data saved successfully"
/>`,

    error: `
<ShadcnUI.CustomAlert 
  variant="destructive" 
  title="Error!" 
  description="Failed to save data"
/>`,

    warning: `
<ShadcnUI.CustomAlert
  variant="default"
  icon={<i className="fas fa-exclamation-triangle" />}
  title="Warning!"
  description="You have unsaved changes"
/>`,

    info: `
<ShadcnUI.CustomAlert
  variant="default" 
  icon={<i className="fas fa-info-circle" />}
  title="New Feature"
  description="Check out our latest updates"
/>`,

    toast: `
toast({
  title: "Scheduled: Catch up",
  description: "Friday, February 10, 2024 at 5:57 PM",
})`,

    stickyToast: `
toast({
  title: "Important Update",
  description: "This message will remain until dismissed",
  duration: Infinity,
})`,

    actionToast: `
toast({
  title: "File deleted",
  description: "Click undo to restore",
  action: <ShadcnUI.Button onClick={() => console.log("Undo")}>Undo</ShadcnUI.Button>,
})`,
  };

  return (
    <div className="p-8 bg-[#f9fafb] min-h-screen">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 font-crimson-text">
            Feedback Components Showcase
          </h1>
          <p className="text-gray-600">
            A comprehensive collection of notification and alert components
          </p>
        </div>

        <div className="grid gap-8">
          {/* Alerts Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 font-crimson-text">
              Alerts
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.CustomAlert
                  variant="default"
                  title="Success!"
                  description="Data saved successfully"
                />
                <button
                  onClick={() => toggleCode("alerts")}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  {showCode.alerts ? "Hide Code" : "Show Code"}
                </button>
                {showCode.alerts && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.alerts}</code>
                  </pre>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.CustomAlert
                  variant="destructive"
                  title="Error!"
                  description="Failed to save data"
                />
                <button
                  onClick={() => toggleCode("error")}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  {showCode.error ? "Hide Code" : "Show Code"}
                </button>
                {showCode.error && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.error}</code>
                  </pre>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.CustomAlert
                  variant="default"
                  icon={<i className="fas fa-exclamation-triangle" />}
                  title="Warning!"
                  description="You have unsaved changes"
                />
                <button
                  onClick={() => toggleCode("warning")}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  {showCode.warning ? "Hide Code" : "Show Code"}
                </button>
                {showCode.warning && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.warning}</code>
                  </pre>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.CustomAlert
                  variant="default"
                  icon={<i className="fas fa-info-circle" />}
                  title="New Feature"
                  description="Check out our latest updates"
                />
                <button
                  onClick={() => toggleCode("info")}
                  className="mt-4 text-sm text-blue-600 hover:underline"
                >
                  {showCode.info ? "Hide Code" : "Show Code"}
                </button>
                {showCode.info && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.info}</code>
                  </pre>
                )}
              </div>
            </div>
          </section>

          {/* Toast Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold mb-4 font-crimson-text">
              Toast Notifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.Button
                  onClick={() => {
                    toast({
                      title: "Scheduled: Catch up",
                      description: "Friday, February 10, 2024 at 5:57 PM",
                    });
                  }}
                >
                  Show Toast
                </ShadcnUI.Button>
                <button
                  onClick={() => toggleCode("toast")}
                  className="mt-4 text-sm text-blue-600 hover:underline block"
                >
                  {showCode.toast ? "Hide Code" : "Show Code"}
                </button>
                {showCode.toast && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.toast}</code>
                  </pre>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.Button
                  onClick={() => {
                    toast({
                      title: "Important Update",
                      description: "This message will remain until dismissed",
                      duration: Infinity,
                    });
                  }}
                >
                  Show Sticky Toast
                </ShadcnUI.Button>
                <button
                  onClick={() => toggleCode("stickyToast")}
                  className="mt-4 text-sm text-blue-600 hover:underline block"
                >
                  {showCode.stickyToast ? "Hide Code" : "Show Code"}
                </button>
                {showCode.stickyToast && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.stickyToast}</code>
                  </pre>
                )}
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <ShadcnUI.Button
                  onClick={() => {
                    toast({
                      title: "File deleted",
                      description: "Click undo to restore",
                      action: (
                        <ShadcnUI.Button onClick={() => console.log("Undo")}>
                          Undo
                        </ShadcnUI.Button>
                      ),
                    });
                  }}
                >
                  Show Action Toast
                </ShadcnUI.Button>
                <button
                  onClick={() => toggleCode("actionToast")}
                  className="mt-4 text-sm text-blue-600 hover:underline block"
                >
                  {showCode.actionToast ? "Hide Code" : "Show Code"}
                </button>
                {showCode.actionToast && (
                  <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                    <code>{codeSections.actionToast}</code>
                  </pre>
                )}
              </div>
            </div>
          </section>
        </div>
      </div>
      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
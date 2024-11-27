"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [showBasicModal, setShowBasicModal] = React.useState(false);
  const [showFooterModal, setShowFooterModal] = React.useState(false);
  const [showFullscreenModal, setShowFullscreenModal] = React.useState(false);
  const [showNestedModal, setShowNestedModal] = React.useState(false);
  const [showInnerNestedModal, setShowInnerNestedModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);
  const [countdown, setCountdown] = React.useState(60);
  const [stopwatchTime, setStopwatchTime] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [timer, setTimer] = React.useState(300);
  const [timerRunning, setTimerRunning] = React.useState(false);

  React.useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setStopwatchTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  React.useEffect(() => {
    let interval;
    if (timerRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timer]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Display Components Showcase</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Modal Components</h2>

            <div className="space-y-4">
              <div>
                <ShadcnUI.Button onClick={() => setShowBasicModal(true)}>
                  Show Basic Modal
                </ShadcnUI.Button>
                <ShadcnUI.CustomDialog
                  open={showBasicModal}
                  onOpenChange={setShowBasicModal}
                  triggerButtonText=""
                  title="Basic Modal Example"
                  description="This is a simple modal dialog for basic interactions"
                  footer={
                    <ShadcnUI.Button onClick={() => setShowBasicModal(false)}>
                      Close
                    </ShadcnUI.Button>
                  }
                >
                  <div className="py-4">
                    <p>
                      This is the content of the basic modal. It can contain any
                      React components.
                    </p>
                  </div>
                </ShadcnUI.CustomDialog>
              </div>

              <div>
                <ShadcnUI.CustomDialog
                  open={showFooterModal}
                  onOpenChange={setShowFooterModal}
                  triggerButtonText="Show Footer Modal"
                  title="Modal with Footer Actions"
                  description="This modal includes action buttons in the footer area"
                  footer={
                    <div className="flex justify-end gap-2">
                      <ShadcnUI.Button
                        variant="outline"
                        onClick={() => setShowFooterModal(false)}
                      >
                        Cancel
                      </ShadcnUI.Button>
                      <ShadcnUI.Button
                        onClick={() => setShowFooterModal(false)}
                      >
                        Confirm
                      </ShadcnUI.Button>
                    </div>
                  }
                >
                  <div className="py-4">
                    <p>
                      This modal demonstrates footer actions for user
                      interaction.
                    </p>
                  </div>
                </ShadcnUI.CustomDialog>
              </div>

              <div>
                <ShadcnUI.CustomSheet
                  open={showFullscreenModal}
                  onOpenChange={setShowFullscreenModal}
                  title="Fullscreen Modal"
                  description="A fullscreen modal for immersive content"
                  buttonLabel="Show Fullscreen Modal"
                  footer={
                    <ShadcnUI.Button
                      onClick={() => setShowFullscreenModal(false)}
                    >
                      Close Fullscreen
                    </ShadcnUI.Button>
                  }
                >
                  <div className="min-h-[50vh] flex items-center justify-center">
                    <p>Fullscreen modal content area</p>
                  </div>
                </ShadcnUI.CustomSheet>
              </div>

              <div>
                <ShadcnUI.CustomDialog
                  open={showNestedModal}
                  onOpenChange={setShowNestedModal}
                  triggerButtonText="Show Nested Modal"
                  title="Nested Modal Example"
                  description="This modal contains another modal inside"
                  footer={
                    <ShadcnUI.Button onClick={() => setShowNestedModal(false)}>
                      Close Parent
                    </ShadcnUI.Button>
                  }
                >
                  <div className="py-4">
                    <p>Parent modal content</p>
                    <ShadcnUI.Button
                      className="mt-4"
                      onClick={() => setShowInnerNestedModal(true)}
                    >
                      Open Child Modal
                    </ShadcnUI.Button>

                    <ShadcnUI.CustomDialog
                      open={showInnerNestedModal}
                      onOpenChange={setShowInnerNestedModal}
                      triggerButtonText=""
                      title="Child Modal"
                      description="A nested modal example"
                      footer={
                        <ShadcnUI.Button
                          onClick={() => setShowInnerNestedModal(false)}
                        >
                          Close Child
                        </ShadcnUI.Button>
                      }
                    >
                      <p>Child modal content</p>
                    </ShadcnUI.CustomDialog>
                  </div>
                </ShadcnUI.CustomDialog>
              </div>

              <div>
                <ShadcnUI.CustomAlertDialog
                  triggerLabel="Show Confirmation Modal"
                  title="Confirm Action"
                  description="Are you sure you want to perform this action? This cannot be undone."
                  cancelLabel="Cancel"
                  actionLabel="Confirm"
                />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Time Components</h2>

            <div className="space-y-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Countdown Timer</h3>
                <div className="text-4xl font-bold mb-2">{countdown}s</div>
                <ShadcnUI.Progress
                  value={(countdown / 60) * 100}
                  className="w-full"
                />
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Stopwatch</h3>
                <div className="text-4xl font-bold mb-4">
                  {formatTime(stopwatchTime)}
                </div>
                <div className="flex gap-2">
                  <ShadcnUI.Button
                    onClick={() => setIsRunning(!isRunning)}
                    variant={isRunning ? "destructive" : "default"}
                  >
                    {isRunning ? "Stop" : "Start"}
                  </ShadcnUI.Button>
                  <ShadcnUI.Button
                    onClick={() => {
                      setStopwatchTime(0);
                      setIsRunning(false);
                    }}
                    variant="outline"
                  >
                    Reset
                  </ShadcnUI.Button>
                </div>
              </div>

              <div className="p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium mb-2">Timer</h3>
                <div className="text-4xl font-bold mb-4">
                  {formatTime(timer)}
                </div>
                <div className="flex gap-2">
                  <ShadcnUI.Button
                    onClick={() => setTimerRunning(!timerRunning)}
                    variant={timerRunning ? "destructive" : "default"}
                  >
                    {timerRunning ? "Pause" : "Start"}
                  </ShadcnUI.Button>
                  <ShadcnUI.Button
                    onClick={() => {
                      setTimer(300);
                      setTimerRunning(false);
                    }}
                    variant="outline"
                  >
                    Reset
                  </ShadcnUI.Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border">
            <h2 className="text-xl font-semibold mb-4">Component Code</h2>
            <ShadcnUI.Tabs
              className="w-full"
              defaultValue="basic-modal"
              tabs={[
                {
                  label: "Basic Modal",
                  value: "basic-modal",
                  content: (
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                      {`<ShadcnUI.CustomDialog
  open={showBasicModal}
  onOpenChange={setShowBasicModal}
  title="Basic Modal Example"
  description="This is a simple modal dialog"
  footer={
    <ShadcnUI.Button onClick={() => setShowBasicModal(false)}>
      Close
    </ShadcnUI.Button>
  }
>
  <div className="py-4">
    <p>Modal content here</p>
  </div>
</ShadcnUI.CustomDialog>`}
                    </pre>
                  ),
                },
                {
                  label: "Footer Modal",
                  value: "footer-modal",
                  content: (
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                      {`<ShadcnUI.CustomDialog
  open={showFooterModal}
  onOpenChange={setShowFooterModal}
  title="Modal with Footer"
  description="Modal with action buttons"
  footer={
    <div className="flex justify-end gap-2">
      <ShadcnUI.Button variant="outline">
        Cancel
      </ShadcnUI.Button>
      <ShadcnUI.Button>
        Confirm
      </ShadcnUI.Button>
    </div>
  }
/>`}
                    </pre>
                  ),
                },
                {
                  label: "Timer",
                  value: "timer",
                  content: (
                    <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto text-sm">
                      {`const [timer, setTimer] = useState(300);
const [timerRunning, setTimerRunning] = useState(false);

useEffect(() => {
  let interval;
  if (timerRunning && timer > 0) {
    interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
  }
  return () => clearInterval(interval);
}, [timerRunning, timer]);

return (
  <div>
    <div className="text-4xl font-bold">
      {formatTime(timer)}
    </div>
    <div className="flex gap-2">
      <ShadcnUI.Button
        onClick={() => setTimerRunning(!timerRunning)}
      >
        {timerRunning ? "Pause" : "Start"}
      </ShadcnUI.Button>
      <ShadcnUI.Button
        onClick={() => {
          setTimer(300);
          setTimerRunning(false);
        }}
      >
        Reset
      </ShadcnUI.Button>
    </div>
  </div>
)`}
                    </pre>
                  ),
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [stateMachine, setStateMachine] = React.useState("idle");
  const [panelOpen, setPanelOpen] = React.useState(false);
  const [codeVisible, setCodeVisible] = React.useState({});
  const [airplaneMode, setAirplaneMode] = React.useState(false);
  const [alignment, setAlignment] = React.useState("center");

  const { toast } = ShadcnUI.useToast();

  const toggleCodeVisibility = (section) => {
    setCodeVisible((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  const states = {
    idle: {
      onSubmit: () => {
        setStateMachine("loading");
        setTimeout(() => setStateMachine("success"), 2000);
      },
    },
    loading: {},
    success: {
      onReset: () => setStateMachine("idle"),
    },
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied to clipboard",
      description: "Code has been copied to your clipboard",
    });
  };

  const renderStateMachineContent = () => {
    switch (stateMachine) {
      case "loading":
        return <ShadcnUI.Progress value={66} />;
      case "success":
        return (
          <div className="space-y-4">
            <ShadcnUI.Alert
              title="Success!"
              description="Form submitted successfully"
            >
              <i className="fas fa-check mr-2"></i>
            </ShadcnUI.Alert>
            <ShadcnUI.Button onClick={states.success.onReset}>
              Reset
            </ShadcnUI.Button>
          </div>
        );
      default:
        return (
          <ShadcnUI.Button
            onClick={states.idle.onSubmit}
            disabled={stateMachine === "loading"}
          >
            Submit Form
          </ShadcnUI.Button>
        );
    }
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <ShadcnUI.Toaster />

      <h1 className="text-3xl font-bold mb-8">State Management Components</h1>

      <div className="space-y-12">
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">State Machine</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => toggleCodeVisibility("stateMachine")}
            >
              {codeVisible.stateMachine ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              {renderStateMachineContent()}
            </div>

            {codeVisible.stateMachine && (
              <div className="relative">
                <pre className="p-4 bg-gray-100 rounded-lg overflow-auto max-h-[300px]">
                  <code>
                    {`const [stateMachine, setStateMachine] = React.useState('idle');

const states = {
  idle: {
    onSubmit: () => {
      setStateMachine('loading');
      setTimeout(() => setStateMachine('success'), 2000);
    }
  },
  loading: {},
  success: {
    onReset: () => setStateMachine('idle')
  }
};`}
                  </code>
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `const [stateMachine, setStateMachine] = React.useState('idle');`
                    )
                  }
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">State Transition Button</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => toggleCodeVisibility("transitionButton")}
            >
              {codeVisible.transitionButton ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <ShadcnUI.CustomDialog
                triggerButtonText="Open Panel"
                title="Transition Example"
                description="Click button to trigger state transition"
                footer={
                  <ShadcnUI.Button onClick={() => setPanelOpen(false)}>
                    Close Panel
                  </ShadcnUI.Button>
                }
              >
                <div className="p-4 space-y-4">
                  <ShadcnUI.Label htmlFor="content">
                    Panel Content
                  </ShadcnUI.Label>
                  <ShadcnUI.Input
                    id="content"
                    name="content"
                    placeholder="Type something..."
                  />
                </div>
              </ShadcnUI.CustomDialog>
            </div>

            {codeVisible.transitionButton && (
              <div className="relative">
                <pre className="p-4 bg-gray-100 rounded-lg overflow-auto max-h-[300px]">
                  <code>
                    {`<ShadcnUI.CustomDialog
  triggerButtonText="Open Panel"
  title="Transition Example"
  description="Click button to trigger state transition"
  footer={
    <ShadcnUI.Button onClick={() => setPanelOpen(false)}>
      Close Panel
    </ShadcnUI.Button>
  }
>
  <div className="p-4 space-y-4">
    <ShadcnUI.Label htmlFor="content">Panel Content</ShadcnUI.Label>
    <ShadcnUI.Input id="content" name="content" placeholder="Type something..." />
  </div>
</ShadcnUI.CustomDialog>`}
                  </code>
                </pre>
                <button
                  onClick={() => copyToClipboard(`<ShadcnUI.CustomDialog ...`)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">Stateful Toggle</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => toggleCodeVisibility("statefulToggle")}
            >
              {codeVisible.statefulToggle ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg space-y-6">
              <div className="flex items-center space-x-4">
                <ShadcnUI.Switch
                  id="airplane-mode"
                  checked={airplaneMode}
                  onCheckedChange={setAirplaneMode}
                />
                <ShadcnUI.Label htmlFor="airplane-mode">
                  Airplane Mode {airplaneMode ? "On" : "Off"}
                </ShadcnUI.Label>
              </div>

              <ShadcnUI.RadioGroup
                value={alignment}
                onValueChange={setAlignment}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <ShadcnUI.RadioGroupItem value="left" id="left" />
                    <ShadcnUI.Label htmlFor="left">Left</ShadcnUI.Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShadcnUI.RadioGroupItem value="center" id="center" />
                    <ShadcnUI.Label htmlFor="center">Center</ShadcnUI.Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShadcnUI.RadioGroupItem value="right" id="right" />
                    <ShadcnUI.Label htmlFor="right">Right</ShadcnUI.Label>
                  </div>
                </div>
              </ShadcnUI.RadioGroup>
            </div>

            {codeVisible.statefulToggle && (
              <div className="relative">
                <pre className="p-4 bg-gray-100 rounded-lg overflow-auto max-h-[300px]">
                  <code>
                    {`const [airplaneMode, setAirplaneMode] = React.useState(false);
const [alignment, setAlignment] = React.useState("center");

<div className="space-y-6">
  <div className="flex items-center space-x-4">
    <ShadcnUI.Switch
      id="airplane-mode"
      checked={airplaneMode}
      onCheckedChange={setAirplaneMode}
    />
    <ShadcnUI.Label htmlFor="airplane-mode">
      Airplane Mode {airplaneMode ? "On" : "Off"}
    </ShadcnUI.Label>
  </div>

  <ShadcnUI.RadioGroup value={alignment} onValueChange={setAlignment}>
    <div className="flex items-center space-x-4">
      <div className="flex items-center space-x-2">
        <ShadcnUI.RadioGroupItem value="left" id="left"/>
        <ShadcnUI.Label htmlFor="left">Left</ShadcnUI.Label>
      </div>
      <div className="flex items-center space-x-2">
        <ShadcnUI.RadioGroupItem value="center" id="center"/>
        <ShadcnUI.Label htmlFor="center">Center</ShadcnUI.Label>
      </div>
      <div className="flex items-center space-x-2">
        <ShadcnUI.RadioGroupItem value="right" id="right"/>
        <ShadcnUI.Label htmlFor="right">Right</ShadcnUI.Label>
      </div>
    </div>
  </ShadcnUI.RadioGroup>
</div>`}
                  </code>
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(
                      `const [airplaneMode, setAirplaneMode] = React.useState(false);`
                    )
                  }
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-semibold">
              State Transition Animation
            </h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => toggleCodeVisibility("transitionAnimation")}
            >
              {codeVisible.transitionAnimation ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="p-6 border rounded-lg">
              <ShadcnUI.CustomAccordion
                type="single"
                data={[
                  {
                    value: "item-1",
                    trigger: "Animated Section 1",
                    content: "This is the first animated section content",
                  },
                  {
                    value: "item-2",
                    trigger: "Animated Section 2",
                    content: "This is the second animated section content",
                  },
                ]}
              />
            </div>

            {codeVisible.transitionAnimation && (
              <div className="relative">
                <pre className="p-4 bg-gray-100 rounded-lg overflow-auto max-h-[300px]">
                  <code>
                    {`<ShadcnUI.CustomAccordion
  type="single"
  data={[
    {
      value: "item-1",
      trigger: "Animated Section 1", 
      content: "This is the first animated section content"
    },
    {
      value: "item-2",
      trigger: "Animated Section 2",
      content: "This is the second animated section content" 
    }
  ]}
/>`}
                  </code>
                </pre>
                <button
                  onClick={() =>
                    copyToClipboard(`<ShadcnUI.CustomAccordion...`)
                  }
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-copy"></i>
                </button>
              </div>
            )}
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .animate-slide-in {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
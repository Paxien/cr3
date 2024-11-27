"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [copied, setCopied] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("fixed");
  const { toast } = ShadcnUI.useToast();

  const copyToClipboard = (text, section) => {
    navigator.clipboard.writeText(text);
    setCopied(section);
    toast({
      title: "Copied!",
      description: "Code copied to clipboard",
    });
    setTimeout(() => setCopied(""), 2000);
  };

  const components = {
    fixed: `const FixedContainer = () => (
  <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-4">Fixed Width Container</h2>
    <p>This container maintains a consistent width across screen sizes.</p>
  </div>
)`,

    fluid: `const FluidContainer = () => (
  <div className="w-full bg-white rounded-lg shadow-md p-6">
    <h2 className="text-2xl font-bold mb-4">Fluid Width Container</h2>
    <p>This container expands to fill available width.</p>
  </div>
)`,

    centered: `const CenteredContainer = () => (
  <div className="flex items-center justify-center min-h-[300px] bg-white rounded-lg shadow-md p-6">
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Centered Content</h2>
      <p>Vertically and horizontally centered content.</p>
    </div>
  </div>
)`,

    box: `const BoxContainer = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div className="bg-white rounded-lg shadow-md p-6">Box 1</div>
    <div className="bg-white rounded-lg shadow-md p-6">Box 2</div>
    <div className="bg-white rounded-lg shadow-md p-6">Box 3</div>
  </div>
)`,

    padding: `const PaddingContainer = () => (
  <div className="p-8 bg-white rounded-lg shadow-md">
    <h2 className="text-2xl font-bold mb-4">Container with Padding</h2>
    <p>Consistent internal spacing around content.</p>
  </div>
)`,
  };

  const examples = {
    fixed: (
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6">
        <ShadcnUI.CustomAlert
          title="Fixed Width Container"
          description="This container maintains a consistent width across screen sizes"
        />
        <div className="mt-4">
          <p>Content in fixed width container</p>
        </div>
      </div>
    ),

    fluid: (
      <div className="w-full bg-white rounded-lg shadow-md p-6">
        <ShadcnUI.CustomAlert
          title="Fluid Width Container"
          description="This container expands to fill available width"
        />
        <div className="mt-4">
          <p>Full width fluid container that grows with viewport</p>
        </div>
      </div>
    ),

    centered: (
      <div className="flex items-center justify-center min-h-[300px] bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <ShadcnUI.CustomAlert
            title="Centered Content"
            description="Content centered both vertically and horizontally"
          />
        </div>
      </div>
    ),

    box: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3].map((num) => (
          <div key={num} className="bg-white rounded-lg shadow-md p-6">
            <ShadcnUI.CustomAlert
              title={`Box ${num}`}
              description="Flexible grid/flexbox layout"
            />
          </div>
        ))}
      </div>
    ),

    padding: (
      <div className="p-8 bg-white rounded-lg shadow-md">
        <ShadcnUI.CustomAlert
          title="Container with Padding"
          description="Consistent internal spacing around content"
        />
        <div className="mt-4">
          <p>Even spacing on all sides using p-8</p>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <ShadcnUI.CustomAlert
        title="Container Components"
        description="A showcase of different container layout patterns"
      />

      <div className="mt-8">
        <ShadcnUI.CustomTabs
          defaultValue="fixed"
          tabs={[
            {
              label: "Fixed Container",
              value: "fixed",
              content: (
                <div className="space-y-8 mt-4">
                  {examples.fixed}
                  <ShadcnUI.CollapsibleSection
                    title="View Code"
                    nonCollapsedItems={
                      <div className="relative">
                        <pre className="p-4 rounded-lg bg-gray-900 text-white overflow-x-auto">
                          <code>{components.fixed}</code>
                        </pre>
                        <ShadcnUI.Button
                          className="absolute top-2 right-2"
                          onClick={() =>
                            copyToClipboard(components.fixed, "fixed")
                          }
                        >
                          {copied === "fixed" ? "Copied!" : "Copy"}
                        </ShadcnUI.Button>
                      </div>
                    }
                    collapsedItems={<div />}
                  />
                </div>
              ),
            },
            {
              label: "Fluid Container",
              value: "fluid",
              content: (
                <div className="space-y-8 mt-4">
                  {examples.fluid}
                  <ShadcnUI.CollapsibleSection
                    title="View Code"
                    nonCollapsedItems={
                      <div className="relative">
                        <pre className="p-4 rounded-lg bg-gray-900 text-white overflow-x-auto">
                          <code>{components.fluid}</code>
                        </pre>
                        <ShadcnUI.Button
                          className="absolute top-2 right-2"
                          onClick={() =>
                            copyToClipboard(components.fluid, "fluid")
                          }
                        >
                          {copied === "fluid" ? "Copied!" : "Copy"}
                        </ShadcnUI.Button>
                      </div>
                    }
                    collapsedItems={<div />}
                  />
                </div>
              ),
            },
            {
              label: "Centered Container",
              value: "centered",
              content: (
                <div className="space-y-8 mt-4">
                  {examples.centered}
                  <ShadcnUI.CollapsibleSection
                    title="View Code"
                    nonCollapsedItems={
                      <div className="relative">
                        <pre className="p-4 rounded-lg bg-gray-900 text-white overflow-x-auto">
                          <code>{components.centered}</code>
                        </pre>
                        <ShadcnUI.Button
                          className="absolute top-2 right-2"
                          onClick={() =>
                            copyToClipboard(components.centered, "centered")
                          }
                        >
                          {copied === "centered" ? "Copied!" : "Copy"}
                        </ShadcnUI.Button>
                      </div>
                    }
                    collapsedItems={<div />}
                  />
                </div>
              ),
            },
            {
              label: "Box Layout",
              value: "box",
              content: (
                <div className="space-y-8 mt-4">
                  {examples.box}
                  <ShadcnUI.CollapsibleSection
                    title="View Code"
                    nonCollapsedItems={
                      <div className="relative">
                        <pre className="p-4 rounded-lg bg-gray-900 text-white overflow-x-auto">
                          <code>{components.box}</code>
                        </pre>
                        <ShadcnUI.Button
                          className="absolute top-2 right-2"
                          onClick={() => copyToClipboard(components.box, "box")}
                        >
                          {copied === "box" ? "Copied!" : "Copy"}
                        </ShadcnUI.Button>
                      </div>
                    }
                    collapsedItems={<div />}
                  />
                </div>
              ),
            },
            {
              label: "Padding Container",
              value: "padding",
              content: (
                <div className="space-y-8 mt-4">
                  {examples.padding}
                  <ShadcnUI.CollapsibleSection
                    title="View Code"
                    nonCollapsedItems={
                      <div className="relative">
                        <pre className="p-4 rounded-lg bg-gray-900 text-white overflow-x-auto">
                          <code>{components.padding}</code>
                        </pre>
                        <ShadcnUI.Button
                          className="absolute top-2 right-2"
                          onClick={() =>
                            copyToClipboard(components.padding, "padding")
                          }
                        >
                          {copied === "padding" ? "Copied!" : "Copy"}
                        </ShadcnUI.Button>
                      </div>
                    }
                    collapsedItems={<div />}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
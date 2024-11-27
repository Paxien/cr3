"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [loading1, setLoading1] = React.useState(false);
  const [loading2, setLoading2] = React.useState(false);
  const [pressed, setPressed] = React.useState(false);
  const { toast } = ShadcnUI.useToast();

  const handleLoadingClick = async (buttonNum) => {
    if (buttonNum === 1) {
      setLoading1(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading1(false);
    } else {
      setLoading2(true);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading2(false);
    }
    toast({
      title: "Action completed",
      description: `Loading ${buttonNum} finished`,
    });
  };

  const codeExamples = {
    primaryButton: `<ShadcnUI.Button>Submit</ShadcnUI.Button>`,
    secondaryButton: `<ShadcnUI.Button variant="secondary">Cancel</ShadcnUI.Button>`,
    tertiaryButton: `<ShadcnUI.Button variant="ghost">Learn More</ShadcnUI.Button>`,
    iconButton: `<ShadcnUI.Button variant="outline" size="icon">
  <i className="fas fa-edit" />
</ShadcnUI.Button>`,
    loadingButton: `<ShadcnUI.Button disabled={loading}>
  {loading ? (
    <>
      <i className="fas fa-spinner fa-spin mr-2" />
      Loading...
    </>
  ) : (
    "Click me"
  )}
</ShadcnUI.Button>`,
    toggleButton: `<ShadcnUI.Toggle pressed={pressed} onPressedChange={setPressed}>
  {pressed ? "On" : "Off"}
</ShadcnUI.Toggle>`,
    iconTextButton: `<ShadcnUI.Button>
  <i className="fas fa-save mr-2" />
  Save
</ShadcnUI.Button>`,
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <h2 className="text-2xl font-bold">Button Components</h2>

            <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium mb-2">Primary Button</h3>
                  <div className="flex items-center justify-between">
                    <ShadcnUI.Button
                      onClick={() =>
                        toast({ title: "Primary action triggered" })
                      }
                    >
                      Submit
                    </ShadcnUI.Button>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.primaryButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Secondary Button</h3>
                  <div className="flex items-center justify-between">
                    <ShadcnUI.Button
                      variant="secondary"
                      onClick={() =>
                        toast({ title: "Secondary action triggered" })
                      }
                    >
                      Cancel
                    </ShadcnUI.Button>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.secondaryButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Tertiary Button</h3>
                  <div className="flex items-center justify-between">
                    <ShadcnUI.Button
                      variant="ghost"
                      onClick={() =>
                        toast({ title: "Tertiary action triggered" })
                      }
                    >
                      Learn More
                    </ShadcnUI.Button>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.tertiaryButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Icon Buttons</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <ShadcnUI.Button variant="outline" size="icon">
                        <i className="fas fa-trash" />
                      </ShadcnUI.Button>
                      <ShadcnUI.Button variant="outline" size="icon">
                        <i className="fas fa-edit" />
                      </ShadcnUI.Button>
                      <ShadcnUI.Button variant="outline" size="icon">
                        <i className="fas fa-ellipsis-v" />
                      </ShadcnUI.Button>
                    </div>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.iconButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Loading Buttons</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <ShadcnUI.Button
                        disabled={loading1}
                        onClick={() => handleLoadingClick(1)}
                      >
                        {loading1 ? (
                          <>
                            <i className="fas fa-spinner fa-spin mr-2" />
                            Loading...
                          </>
                        ) : (
                          "Click me"
                        )}
                      </ShadcnUI.Button>

                      <ShadcnUI.Button
                        variant="secondary"
                        disabled={loading2}
                        onClick={() => handleLoadingClick(2)}
                      >
                        {loading2 ? (
                          <>
                            <i className="fas fa-circle-notch fa-spin mr-2" />
                            Processing
                          </>
                        ) : (
                          "Process"
                        )}
                      </ShadcnUI.Button>
                    </div>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.loadingButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Toggle Button</h3>
                  <div className="flex items-center justify-between">
                    <ShadcnUI.Toggle
                      pressed={pressed}
                      onPressedChange={setPressed}
                    >
                      {pressed ? "On" : "Off"}
                    </ShadcnUI.Toggle>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.toggleButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    Icon + Text Buttons
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      <ShadcnUI.Button>
                        <i className="fas fa-save mr-2" />
                        Save
                      </ShadcnUI.Button>

                      <ShadcnUI.Button variant="secondary">
                        <i className="fas fa-download mr-2" />
                        Download
                      </ShadcnUI.Button>

                      <ShadcnUI.Button variant="outline">
                        <i className="fas fa-share mr-2" />
                        Share
                      </ShadcnUI.Button>
                    </div>
                    <ShadcnUI.CustomPopover triggerLabel="View Code">
                      <pre className="bg-gray-100 p-2 rounded text-sm">
                        {codeExamples.iconTextButton}
                      </pre>
                    </ShadcnUI.CustomPopover>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <ShadcnUI.CustomAccordion
                type="single"
                data={[
                  {
                    value: "usage",
                    trigger: "Usage Guidelines",
                    content: `Primary buttons should be used for main actions
Secondary buttons for alternative actions
Tertiary buttons for less important actions
Icon buttons work best for common actions with clear meanings
Loading states provide user feedback
Toggle buttons for binary states
Icon + Text for clearer action meanings`,
                  },
                  {
                    value: "accessibility",
                    trigger: "Accessibility Features",
                    content: `All buttons are keyboard accessible
Loading states announce their status
Icons have appropriate aria-labels
Color contrast meets WCAG standards
Focus states are clearly visible`,
                  },
                  {
                    value: "customization",
                    trigger: "Customization Options",
                    content: `Buttons can be customized with variants
Sizes can be adjusted as needed
Icons can be changed
Colors follow theme settings
Loading animations can be modified`,
                  },
                ]}
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Interactive Preview</h3>
              <ShadcnUI.CustomTabs
                defaultValue="preview"
                tabs={[
                  {
                    label: "Preview",
                    value: "preview",
                    content: (
                      <div className="p-4 space-y-4">
                        <p>Click the buttons above to see them in action!</p>
                        <p>
                          Each button will show a toast notification when
                          clicked.
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: "Documentation",
                    value: "docs",
                    content: (
                      <div className="p-4 space-y-4">
                        <p>
                          Buttons use the ShadcnUI.Button component as their
                          base.
                        </p>
                        <p>
                          Different variants are available: default, secondary,
                          ghost, etc.
                        </p>
                        <p>Icons can be added using Font Awesome classes.</p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>

        <ShadcnUI.Toaster />
      </div>
    </div>
  );
}

export default MainComponent;
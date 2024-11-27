"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("alerts");
  const { toast } = ShadcnUI.useToast();

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied",
      description: "Code snippet copied to clipboard",
    });
  };

  return (
    <div className="p-6 font-roboto">
      <h1 className="text-3xl font-bold mb-6">Component Showcase</h1>

      <ShadcnUI.CustomTabs
        defaultValue="alerts"
        tabs={[
          {
            label: "Alerts & Notifications",
            value: "alerts",
            content: (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Alert</h3>
                    <ShadcnUI.CustomAlert
                      variant="destructive"
                      title="Warning"
                      description="This action cannot be undone."
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Code</span>
                      <ShadcnUI.Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyCode(`<ShadcnUI.CustomAlert
  variant="destructive"
  title="Warning"
  description="This action cannot be undone."
/>`)
                        }
                      >
                        Copy
                      </ShadcnUI.Button>
                    </div>
                    <pre className="text-sm">
                      {`<ShadcnUI.CustomAlert
  variant="destructive"
  title="Warning" 
  description="This action cannot be undone."
/>`}
                    </pre>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Toast Notification
                    </h3>
                    <ShadcnUI.Button
                      onClick={() => {
                        toast({
                          title: "Success",
                          description: "Changes have been saved",
                        });
                      }}
                    >
                      Show Toast
                    </ShadcnUI.Button>
                    <ShadcnUI.Toaster />
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Code</span>
                      <ShadcnUI.Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyCode(`const { toast } = ShadcnUI.useToast()
toast({
  title: "Success",
  description: "Changes have been saved"
})`)
                        }
                      >
                        Copy
                      </ShadcnUI.Button>
                    </div>
                    <pre className="text-sm">
                      {`const { toast } = ShadcnUI.useToast()
toast({
  title: "Success",
  description: "Changes have been saved"
})`}
                    </pre>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Alert Dialog</h3>
                    <ShadcnUI.CustomAlertDialog
                      triggerLabel="Open Dialog"
                      title="Are you sure?"
                      description="This action cannot be undone"
                      cancelLabel="Cancel"
                      actionLabel="Continue"
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Code</span>
                      <ShadcnUI.Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyCode(`<ShadcnUI.CustomAlertDialog
  triggerLabel="Open Dialog"
  title="Are you sure?"
  description="This action cannot be undone"
  cancelLabel="Cancel"
  actionLabel="Continue"
/>`)
                        }
                      >
                        Copy
                      </ShadcnUI.Button>
                    </div>
                    <pre className="text-sm">
                      {`<ShadcnUI.CustomAlertDialog
  triggerLabel="Open Dialog"
  title="Are you sure?"
  description="This action cannot be undone"
  cancelLabel="Cancel"
  actionLabel="Continue"
/>`}
                    </pre>
                  </div>
                </div>
              </div>
            ),
          },
          {
            label: "Accordions & Collapsibles",
            value: "accordions",
            content: (
              <div className="space-y-8">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Accordion</h3>
                    <ShadcnUI.CustomAccordion
                      type="single"
                      data={[
                        {
                          value: "item-1",
                          trigger: "Is it accessible?",
                          content:
                            "Yes. It adheres to the WAI-ARIA design pattern.",
                        },
                        {
                          value: "item-2",
                          trigger: "Is it styled?",
                          content:
                            "Yes. It comes with default styles that matches the other components.",
                        },
                      ]}
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Code</span>
                      <ShadcnUI.Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyCode(`<ShadcnUI.CustomAccordion
  type="single"
  data={[
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      value: "item-2",
      trigger: "Is it styled?",
      content: "Yes. It comes with default styles that matches the other components."
    }
  ]}
/>`)
                        }
                      >
                        Copy
                      </ShadcnUI.Button>
                    </div>
                    <pre className="text-sm">
                      {`<ShadcnUI.CustomAccordion
  type="single"
  data={[
    {
      value: "item-1",
      trigger: "Is it accessible?",
      content: "Yes. It adheres to the WAI-ARIA design pattern."
    },
    {
      value: "item-2",
      trigger: "Is it styled?",
      content: "Yes. It comes with default styles that matches the other components."
    }
  ]}
/>`}
                    </pre>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Collapsible Section
                    </h3>
                    <ShadcnUI.CollapsibleSection
                      title="Expandable Content"
                      nonCollapsedItems={
                        <div className="p-4 border rounded">
                          This content is always visible
                        </div>
                      }
                      collapsedItems={
                        <div className="p-4 border rounded mt-2">
                          This content can be toggled
                        </div>
                      }
                    />
                  </div>
                  <div className="bg-gray-50 p-4 rounded">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Code</span>
                      <ShadcnUI.Button
                        variant="ghost"
                        size="sm"
                        onClick={() =>
                          copyCode(`<ShadcnUI.CollapsibleSection
  title="Expandable Content"
  nonCollapsedItems={
    <div className="p-4 border rounded">
      This content is always visible
    </div>
  }
  collapsedItems={
    <div className="p-4 border rounded mt-2">
      This content can be toggled
    </div>
  }
/>`)
                        }
                      >
                        Copy
                      </ShadcnUI.Button>
                    </div>
                    <pre className="text-sm">
                      {`<ShadcnUI.CollapsibleSection
  title="Expandable Content"
  nonCollapsedItems={
    <div className="p-4 border rounded">
      This content is always visible
    </div>
  }
  collapsedItems={
    <div className="p-4 border rounded mt-2">
      This content can be toggled
    </div>
  }
/>`}
                    </pre>
                  </div>
                </div>
              </div>
            ),
          },
        ]}
      />

      <div className="fixed bottom-4 right-4">
        <ShadcnUI.CustomTooltip content="Back to top">
          <ShadcnUI.Button
            variant="outline"
            size="icon"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            ↑
          </ShadcnUI.Button>
        </ShadcnUI.CustomTooltip>
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [currentCode, setCurrentCode] = React.useState("");
  const [copiedIndex, setCopiedIndex] = React.useState(null);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const codeExamples = {
    landmarks: `{/* ARIA Landmarks Example */}
<header role="banner" aria-label="Site header">
  <ShadcnUI.CustomNavigation 
    sections={[{
      trigger: "Main Navigation",
      items: [
        {
          href: "#main-content",
          title: "Skip to Main Content",
          description: "Skip navigation" 
        }
      ]
    }]}
  />
</header>`,

    screenReader: `{/* Screen Reader Components */}
<ShadcnUI.CustomDialog
  triggerButtonText="Open Dialog" 
  title="Screen Reader Friendly Dialog"
  description="This dialog has proper ARIA attributes"
  footer={
    <ShadcnUI.Button aria-label="Close dialog">
      Close
    </ShadcnUI.Button>
  }
>
  <div role="region" aria-live="polite">
    Content that updates will be announced
  </div>
</ShadcnUI.CustomDialog>`,

    liveRegions: `{/* Live Regions Example */}
<div role="status" aria-live="polite">
  <ShadcnUI.CustomAlert
    variant="default"
    title="Status Update"
    description="This alert will be announced to screen readers"
  />
</div>`,

    forms: `{/* Accessible Form */}
<ShadcnUI.CustomDialog
  triggerButtonText="Open Form"
  title="Accessible Form"
  description="Form with proper ARIA attributes"
  footer={
    <ShadcnUI.Button type="submit">
      Submit Form
    </ShadcnUI.Button>
  }
>
  <form>
    <div className="space-y-4">
      <div>
        <ShadcnUI.Label htmlFor="name">
          Name (Required)
        </ShadcnUI.Label>
        <ShadcnUI.Input
          id="name"
          name="name" 
          aria-required="true"
          aria-invalid="false"
        />
      </div>

      <div>
        <ShadcnUI.Label htmlFor="email">
          Email (Required)
        </ShadcnUI.Label>
        <ShadcnUI.Input
          id="email"
          name="email"
          type="email"
          aria-required="true"
          aria-describedby="email-hint"
        />
        <div id="email-hint" className="text-sm text-gray-500">
          Enter your email address
        </div>
      </div>

      <ShadcnUI.CustomSelect
        label="Preferences"
        placeholder="Select your preferences"
        groups={[
          {
            items: [
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" }
            ]
          }
        ]}
      />

      <fieldset>
        <legend className="text-sm font-medium">
          Notification Preferences
        </legend>
        <div className="space-y-2">
          <div className="flex items-center">
            <ShadcnUI.Checkbox 
              id="email-notifications"
              name="notifications"
            />
            <ShadcnUI.Label 
              htmlFor="email-notifications"
              className="ml-2"
            >
              Email Notifications
            </ShadcnUI.Label>
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</ShadcnUI.CustomDialog>`,

    keyboardNav: `{/* Keyboard Navigation Example */}
<ShadcnUI.CustomAccordion
  type="single"
  data={[
    {
      value: "item-1",
      trigger: "Keyboard Navigation Section",
      content: "Navigate with arrow keys and space/enter"
    }
  ]}
/>

<ShadcnUI.CustomTabs
  tabs={[
    {
      label: "Tab 1",
      value: "tab1",
      content: "Content 1"
    },
    {
      label: "Tab 2", 
      value: "tab2",
      content: "Content 2"
    }
  ]}
/>`,
  };

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <header role="banner" className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Accessibility Components</h1>
          <p className="text-gray-600">WCAG 2.1 Compliant Component Examples</p>
        </div>
      </header>

      <main
        id="main-content"
        role="main"
        className="container mx-auto px-4 py-8"
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="space-y-12">
            <section aria-labelledby="landmarks-heading">
              <h2
                id="landmarks-heading"
                className="text-2xl font-semibold mb-4"
              >
                ARIA Landmarks
              </h2>
              <div className="space-y-4">
                <header role="banner" aria-label="Section header">
                  <ShadcnUI.CustomNavigation
                    sections={[
                      {
                        trigger: "Main Navigation",
                        items: [
                          {
                            href: "#main-content",
                            title: "Skip to Main Content",
                            description: "Skip navigation",
                          },
                        ],
                      },
                    ]}
                  />
                </header>
                <ShadcnUI.Button
                  onClick={() => setCurrentCode(codeExamples.landmarks)}
                  variant="outline"
                  size="sm"
                >
                  View Code
                </ShadcnUI.Button>
              </div>
            </section>

            <section aria-labelledby="screen-reader-heading">
              <h2
                id="screen-reader-heading"
                className="text-2xl font-semibold mb-4"
              >
                Screen Reader Components
              </h2>
              <div className="space-y-4">
                <ShadcnUI.CustomDialog
                  triggerButtonText="Open Dialog"
                  title="Screen Reader Friendly Dialog"
                  description="This dialog has proper ARIA attributes"
                  footer={
                    <ShadcnUI.Button aria-label="Close dialog">
                      Close
                    </ShadcnUI.Button>
                  }
                >
                  <div role="region" aria-live="polite">
                    Content that updates will be announced
                  </div>
                </ShadcnUI.CustomDialog>
                <ShadcnUI.Button
                  onClick={() => setCurrentCode(codeExamples.screenReader)}
                  variant="outline"
                  size="sm"
                >
                  View Code
                </ShadcnUI.Button>
              </div>
            </section>

            <section aria-labelledby="live-regions-heading">
              <h2
                id="live-regions-heading"
                className="text-2xl font-semibold mb-4"
              >
                Live Regions
              </h2>
              <div className="space-y-4">
                <div role="status" aria-live="polite">
                  <ShadcnUI.CustomAlert
                    variant="default"
                    title="Status Update"
                    description="This alert will be announced to screen readers"
                  />
                </div>
                <ShadcnUI.Button
                  onClick={() => setCurrentCode(codeExamples.liveRegions)}
                  variant="outline"
                  size="sm"
                >
                  View Code
                </ShadcnUI.Button>
              </div>
            </section>

            <section aria-labelledby="forms-heading">
              <h2 id="forms-heading" className="text-2xl font-semibold mb-4">
                Accessible Forms
              </h2>
              <div className="space-y-4">
                <ShadcnUI.CustomDialog
                  triggerButtonText="Open Form"
                  title="Accessible Form"
                  description="Form with proper ARIA attributes"
                  footer={
                    <ShadcnUI.Button type="submit">Submit Form</ShadcnUI.Button>
                  }
                >
                  <form>
                    <div className="space-y-4">
                      <div>
                        <ShadcnUI.Label htmlFor="name">
                          Name (Required)
                        </ShadcnUI.Label>
                        <ShadcnUI.Input
                          id="name"
                          name="name"
                          aria-required="true"
                          aria-invalid="false"
                        />
                      </div>

                      <div>
                        <ShadcnUI.Label htmlFor="email">
                          Email (Required)
                        </ShadcnUI.Label>
                        <ShadcnUI.Input
                          id="email"
                          name="email"
                          type="email"
                          aria-required="true"
                          aria-describedby="email-hint"
                        />
                        <div id="email-hint" className="text-sm text-gray-500">
                          Enter your email address
                        </div>
                      </div>

                      <ShadcnUI.CustomSelect
                        label="Preferences"
                        placeholder="Select your preferences"
                        groups={[
                          {
                            items: [
                              { value: "1", label: "Option 1" },
                              { value: "2", label: "Option 2" },
                            ],
                          },
                        ]}
                      />

                      <fieldset>
                        <legend className="text-sm font-medium">
                          Notification Preferences
                        </legend>
                        <div className="space-y-2">
                          <div className="flex items-center">
                            <ShadcnUI.Checkbox
                              id="email-notifications"
                              name="notifications"
                            />
                            <ShadcnUI.Label
                              htmlFor="email-notifications"
                              className="ml-2"
                            >
                              Email Notifications
                            </ShadcnUI.Label>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </form>
                </ShadcnUI.CustomDialog>
                <ShadcnUI.Button
                  onClick={() => setCurrentCode(codeExamples.forms)}
                  variant="outline"
                  size="sm"
                >
                  View Code
                </ShadcnUI.Button>
              </div>
            </section>

            <section aria-labelledby="keyboard-nav-heading">
              <h2
                id="keyboard-nav-heading"
                className="text-2xl font-semibold mb-4"
              >
                Keyboard Navigation
              </h2>
              <div className="space-y-4">
                <ShadcnUI.CustomAccordion
                  type="single"
                  data={[
                    {
                      value: "item-1",
                      trigger: "Keyboard Navigation Section",
                      content: "Navigate with arrow keys and space/enter",
                    },
                  ]}
                />

                <ShadcnUI.CustomTabs
                  tabs={[
                    {
                      label: "Tab 1",
                      value: "tab1",
                      content: "Content 1",
                    },
                    {
                      label: "Tab 2",
                      value: "tab2",
                      content: "Content 2",
                    },
                  ]}
                />
                <ShadcnUI.Button
                  onClick={() => setCurrentCode(codeExamples.keyboardNav)}
                  variant="outline"
                  size="sm"
                >
                  View Code
                </ShadcnUI.Button>
              </div>
            </section>
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-8 space-y-4 bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">Code Example</h3>
                {currentCode && (
                  <ShadcnUI.Button
                    variant="outline"
                    size="sm"
                    onClick={() => copyToClipboard(currentCode)}
                  >
                    {copiedIndex !== null ? "Copied!" : "Copy"}
                  </ShadcnUI.Button>
                )}
              </div>
              <pre className="bg-white p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
                  {currentCode || "Click 'View Code' to see component code"}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </main>

      <footer role="contentinfo" className="border-t">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600">
          <p>Accessibility Components Showcase</p>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
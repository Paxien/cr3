"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [collapsibleOpen, setCollapsibleOpen] = React.useState(false);
  const [overlayOpen, setOverlayOpen] = React.useState(false);
  const [slidingOpen, setSlidingOpen] = React.useState(false);

  const codeExamples = {
    collapsible: `<ShadcnUI.CollapsibleSection
  title="Collapsible Sidebar"
  nonCollapsedItems={<div>Main Content</div>}
  collapsedItems={<div>More Content</div>} 
/>`,
    fixed: `<div className="fixed left-0 top-0 h-screen w-64 bg-gray-800 p-4">
  Fixed Sidebar Content
</div>`,
    overlay: `<ShadcnUI.CustomSheet
  title="Overlay Sidebar" 
  description="Full screen overlay sidebar"
  buttonLabel="Open Overlay"
  open={overlayOpen}
  onOpenChange={setOverlayOpen}
  footer={<button>Close</button>}
>
  Overlay Content
</ShadcnUI.CustomSheet>`,
    sliding: `<ShadcnUI.CustomDrawer
  title="Sliding Sidebar"
  description="Slides in from the side"
  openButtonText="Open Sliding"
  footer={<button>Close</button>}
>
  Sliding Content  
</ShadcnUI.CustomDrawer>`,
    sticky: `<div className="relative">
  <div className="sticky top-0">
    Sticky Sidebar Content
  </div>
</div>`,
  };

  return (
    <div className="flex min-h-screen flex-col gap-8 p-8">
      <h1 className="text-3xl font-bold">Sidebar Component Examples</h1>

      <div className="grid gap-8">
        <section>
          <h2 className="mb-4 text-2xl font-semibold">Collapsible Sidebar</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="Collapsible Sidebar"
                nonCollapsedItems={
                  <div className="rounded-lg bg-gray-100 p-4">
                    <p>Main sidebar content</p>
                    <ShadcnUI.Button
                      className="mt-2"
                      onClick={() => setCollapsibleOpen(!collapsibleOpen)}
                    >
                      Toggle Content
                    </ShadcnUI.Button>
                  </div>
                }
                collapsedItems={
                  <div className="rounded-lg bg-gray-200 p-4">
                    <p>Additional collapsed content</p>
                    <ul className="mt-2 space-y-2">
                      <li>
                        <ShadcnUI.Button variant="link">Home</ShadcnUI.Button>
                      </li>
                      <li>
                        <ShadcnUI.Button variant="link">About</ShadcnUI.Button>
                      </li>
                    </ul>
                  </div>
                }
              />
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomAlert
                title="Code Example"
                description={codeExamples.collapsible}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Fixed Sidebar</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 relative h-[400px] overflow-hidden border rounded-lg">
              <div className="absolute left-0 w-64 h-full bg-gray-800 p-4 text-white">
                <h3 className="text-xl font-bold mb-4">Fixed Sidebar</h3>
                <ul className="space-y-2">
                  <li>
                    <ShadcnUI.Button
                      variant="ghost"
                      className="w-full justify-start text-white"
                    >
                      Dashboard
                    </ShadcnUI.Button>
                  </li>
                  <li>
                    <ShadcnUI.Button
                      variant="ghost"
                      className="w-full justify-start text-white"
                    >
                      Profile
                    </ShadcnUI.Button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomAlert
                title="Code Example"
                description={codeExamples.fixed}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Overlay Sidebar</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomSheet
                title="Overlay Sidebar"
                description="Full screen overlay sidebar example"
                buttonLabel="Open Overlay Sidebar"
                open={overlayOpen}
                onOpenChange={setOverlayOpen}
                footer={
                  <ShadcnUI.Button onClick={() => setOverlayOpen(false)}>
                    Close
                  </ShadcnUI.Button>
                }
              >
                <div className="flex flex-col gap-4">
                  <ShadcnUI.Button variant="ghost">Settings</ShadcnUI.Button>
                  <ShadcnUI.Button variant="ghost">Help</ShadcnUI.Button>
                </div>
              </ShadcnUI.CustomSheet>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomAlert
                title="Code Example"
                description={codeExamples.overlay}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Sliding Sidebar</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomDrawer
                title="Sliding Sidebar"
                description="Slides in from the side of the screen"
                openButtonText="Open Sliding Sidebar"
                footer={
                  <ShadcnUI.Button onClick={() => setSlidingOpen(false)}>
                    Close
                  </ShadcnUI.Button>
                }
              >
                <div className="flex flex-col gap-4">
                  <ShadcnUI.Button variant="ghost">Messages</ShadcnUI.Button>
                  <ShadcnUI.Button variant="ghost">Tasks</ShadcnUI.Button>
                </div>
              </ShadcnUI.CustomDrawer>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomAlert
                title="Code Example"
                description={codeExamples.sliding}
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="mb-4 text-2xl font-semibold">Sticky Sidebar</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 relative h-[400px] overflow-auto border rounded-lg">
              <div className="sticky top-0 w-64 bg-gray-100 p-4 border-r">
                <h3 className="text-xl font-bold mb-4">Sticky Sidebar</h3>
                <ul className="space-y-2">
                  <li>
                    <ShadcnUI.Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      Products
                    </ShadcnUI.Button>
                  </li>
                  <li>
                    <ShadcnUI.Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      Services
                    </ShadcnUI.Button>
                  </li>
                </ul>
              </div>
              <div className="ml-64 p-4">
                <div className="h-[800px] bg-gray-50 p-4">
                  Scroll to see sticky behavior
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CustomAlert
                title="Code Example"
                description={codeExamples.sticky}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;
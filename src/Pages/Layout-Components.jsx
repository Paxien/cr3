"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Layout Components</h1>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col">
            <h2 className="text-xl font-semibold mb-4">Container Example</h2>
            <div className="container mx-auto bg-white p-6 rounded-lg shadow">
              <p className="text-gray-600">
                Constrained width content container
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Grid Layout</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded shadow">Grid Item 1</div>
              <div className="bg-white p-4 rounded shadow">Grid Item 2</div>
              <div className="bg-white p-4 rounded shadow">Grid Item 3</div>
              <div className="bg-white p-4 rounded shadow">Grid Item 4</div>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Flexbox Layout</h2>
            <div className="flex flex-col space-y-4">
              <div className="flex justify-between items-center bg-white p-4 rounded shadow">
                <span>Left</span>
                <span>Right</span>
              </div>
              <div className="flex justify-center items-center bg-white p-4 rounded shadow">
                <span>Centered</span>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Card Components</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <ShadcnUI.Button
                onClick={() => setIsOpen(true)}
                variant="ghost"
                className="w-full p-4 text-left"
              >
                Open Card Dialog
              </ShadcnUI.Button>

              <ShadcnUI.CustomDialog
                open={isOpen}
                onOpenChange={setIsOpen}
                title="Card Details"
                description="View extended card information"
                footer={
                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </ShadcnUI.Button>
                }
              >
                <div className="space-y-4">
                  <div className="rounded border p-4">
                    <h4 className="font-medium">Card Content</h4>
                    <p>Detailed information goes here</p>
                  </div>
                </div>
              </ShadcnUI.CustomDialog>
            </div>

            <ShadcnUI.CollapsibleSection
              title="Expandable Card"
              nonCollapsedItems={
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Main Content</h3>
                  <p className="text-gray-600">Visible content area</p>
                </div>
              }
              collapsedItems={
                <div className="space-y-2 mt-4">
                  <p className="text-gray-600">Additional hidden content</p>
                </div>
              }
            />

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <h3 className="font-semibold">Static Card</h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600">Card content here</p>
              </div>
              <div className="p-4 bg-gray-50 border-t">
                <ShadcnUI.Button variant="outline" className="w-full">
                  Card Action
                </ShadcnUI.Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-6">
            Panel & Drawer Examples
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <ShadcnUI.CustomTabs
                defaultValue="tab1"
                tabs={[
                  {
                    label: "Panel 1",
                    value: "tab1",
                    content: (
                      <div className="p-4">
                        <h4 className="font-medium mb-2">Panel Content</h4>
                        <p className="text-gray-600">
                          Tab panel content example
                        </p>
                      </div>
                    ),
                  },
                  {
                    label: "Panel 2",
                    value: "tab2",
                    content: (
                      <div className="p-4">
                        <h4 className="font-medium mb-2">More Content</h4>
                        <p className="text-gray-600">Additional tab content</p>
                      </div>
                    ),
                  },
                ]}
              />
            </div>

            <div>
              <ShadcnUI.Button
                onClick={() => setDrawerOpen(true)}
                variant="outline"
                className="w-full"
              >
                Open Sidebar
              </ShadcnUI.Button>

              <ShadcnUI.CustomSheet
                open={drawerOpen}
                onOpenChange={setDrawerOpen}
                title="Sidebar Navigation"
                description="Access quick navigation links"
                buttonLabel="Open Sidebar"
                footer={
                  <ShadcnUI.Button
                    className="w-full"
                    variant="outline"
                    onClick={() => setDrawerOpen(false)}
                  >
                    Close Sidebar
                  </ShadcnUI.Button>
                }
              >
                <div className="space-y-4">
                  <ShadcnUI.CustomAccordion
                    type="single"
                    data={[
                      {
                        value: "item-1",
                        trigger: "Navigation",
                        content: (
                          <div className="space-y-2">
                            <ShadcnUI.Button
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              Home
                            </ShadcnUI.Button>
                            <ShadcnUI.Button
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              About
                            </ShadcnUI.Button>
                            <ShadcnUI.Button
                              variant="ghost"
                              className="w-full justify-start"
                            >
                              Contact
                            </ShadcnUI.Button>
                          </div>
                        ),
                      },
                      {
                        value: "item-2",
                        trigger: "Settings",
                        content: (
                          <div className="space-y-4">
                            <div className="flex items-center justify-between">
                              <span>Dark Mode</span>
                              <ShadcnUI.Switch id="dark-mode" />
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Notifications</span>
                              <ShadcnUI.Switch id="notifications" />
                            </div>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              </ShadcnUI.CustomSheet>
            </div>
          </div>
        </section>

        <div className="fixed bottom-4 right-4">
          <ShadcnUI.CustomTooltip content="Back to top">
            <ShadcnUI.Button
              variant="outline"
              className="rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              ↑
            </ShadcnUI.Button>
          </ShadcnUI.CustomTooltip>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
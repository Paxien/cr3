"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [page, setPage] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Navigation Components Showcase</h2>

          <div className="space-y-8 rounded-lg bg-white p-6 shadow-lg">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Navbar/TopBar Example</h3>
              <ShadcnUI.CustomNavigation
                sections={[
                  {
                    trigger: "Getting Started",
                    items: [
                      {
                        href: "/docs",
                        title: "Introduction",
                        description:
                          "Re-usable components built using Radix UI and Tailwind CSS.",
                      },
                      {
                        href: "/docs/installation",
                        title: "Installation",
                        description:
                          "How to install dependencies and structure your app.",
                      },
                    ],
                  },
                  {
                    trigger: "Components",
                    items: [
                      {
                        href: "/components",
                        title: "Overview",
                        description: "Explore all available components",
                      },
                    ],
                  },
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Sidebar Example</h3>
              <ShadcnUI.CustomSheet
                title="Navigation"
                description="Main navigation menu"
                buttonLabel="Open Sidebar"
                footer={
                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </ShadcnUI.Button>
                }
                open={isOpen}
                onOpenChange={setIsOpen}
              >
                <div className="space-y-4">
                  <ShadcnUI.CollapsibleSection
                    title="Dashboard"
                    nonCollapsedItems={
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Overview
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Analytics
                        </a>
                      </div>
                    }
                    collapsedItems={
                      <div className="space-y-2">
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Reports
                        </a>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </div>
                    }
                  />
                </div>
              </ShadcnUI.CustomSheet>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tabs Example</h3>
              <ShadcnUI.CustomTabs
                defaultValue="overview"
                tabs={[
                  {
                    label: "Overview",
                    value: "overview",
                    content: <div className="p-4">Overview content here</div>,
                  },
                  {
                    label: "Analytics",
                    value: "analytics",
                    content: <div className="p-4">Analytics content here</div>,
                  },
                  {
                    label: "Reports",
                    value: "reports",
                    content: <div className="p-4">Reports content here</div>,
                  },
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Breadcrumbs Example</h3>
              <ShadcnUI.CustomBreadcrumb
                homeLink="/"
                dropdownMenuItems={[
                  {
                    label: "Documentation",
                    onClick: () => console.log("Documentation clicked"),
                  },
                  {
                    label: "Components",
                    onClick: () => console.log("Components clicked"),
                  },
                ]}
                componentLink="/components/navigation"
                componentName="Navigation"
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Pagination Example</h3>
              <ShadcnUI.CustomPagination
                currentPage={page}
                totalPages={10}
                onPageChange={setPage}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Menu/Dropdown Example</h3>
              <ShadcnUI.CustomDropdown
                triggerLabel="Menu"
                menuLabel="Navigation"
                items={[
                  {
                    content: "🏠",
                    label: "Home",
                    shortcut: "⌘H",
                    onSelect: () => console.log("Home clicked"),
                  },
                  {
                    content: "📊",
                    label: "Dashboard",
                    shortcut: "⌘D",
                    onSelect: () => console.log("Dashboard clicked"),
                  },
                  {
                    content: "⚙️",
                    label: "Settings",
                    shortcut: "⌘S",
                    onSelect: () => console.log("Settings clicked"),
                  },
                ]}
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Link Examples</h3>
              <div className="space-x-4">
                <ShadcnUI.Button variant="link">Primary Link</ShadcnUI.Button>
                <ShadcnUI.Button variant="link" className="text-gray-500">
                  Secondary Link
                </ShadcnUI.Button>
                <ShadcnUI.Button variant="link" className="text-blue-500">
                  Accent Link
                </ShadcnUI.Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MainComponent;
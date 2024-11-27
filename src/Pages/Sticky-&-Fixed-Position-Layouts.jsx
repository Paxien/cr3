"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedLayout, setSelectedLayout] = React.useState("header");

  const tabs = [
    {
      label: "Sticky Header",
      value: "header",
      content: (
        <div className="space-y-8">
          <div className="relative h-[500px] overflow-auto rounded-lg border">
            <header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                <ShadcnUI.CustomPopover triggerLabel="Menu">
                  <div className="flex flex-col space-y-2 p-4">
                    <ShadcnUI.Button variant="ghost">Home</ShadcnUI.Button>
                    <ShadcnUI.Button variant="ghost">About</ShadcnUI.Button>
                  </div>
                </ShadcnUI.CustomPopover>
              </div>
            </header>
            <div className="p-4">
              {Array.from({ length: 20 })
                .fill()
                .map((_, i) => (
                  <p key={i} className="mb-4">
                    Scroll content {i + 1}
                  </p>
                ))}
            </div>
          </div>
          <ShadcnUI.CollapsibleSection
            title="View Code"
            nonCollapsedItems={
              <div className="rounded-lg bg-muted p-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {`<header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur">
  <div className="container flex h-14 items-center">
    <ShadcnUI.CustomPopover triggerLabel="Menu">
      <div className="flex flex-col space-y-2 p-4">
        <ShadcnUI.Button variant="ghost">Home</ShadcnUI.Button>
        <ShadcnUI.Button variant="ghost">About</ShadcnUI.Button>
      </div>
    </ShadcnUI.CustomPopover>
  </div>
</header>`}
                </pre>
                <ShadcnUI.Button
                  onClick={() =>
                    navigator.clipboard
                      .writeText(`<header className="sticky top-0 w-full border-b bg-background/95 backdrop-blur">
  <div className="container flex h-14 items-center">
    <ShadcnUI.CustomPopover triggerLabel="Menu">
      <div className="flex flex-col space-y-2 p-4">
        <ShadcnUI.Button variant="ghost">Home</ShadcnUI.Button>
        <ShadcnUI.Button variant="ghost">About</ShadcnUI.Button>
      </div>
    </ShadcnUI.CustomPopover>
  </div>
</header>`)
                  }
                  className="mt-2"
                  variant="outline"
                >
                  Copy Code
                </ShadcnUI.Button>
              </div>
            }
            collapsedItems={<></>}
          />
        </div>
      ),
    },
    {
      label: "Sticky Footer",
      value: "footer",
      content: (
        <div className="space-y-8">
          <div className="relative h-[500px] overflow-auto rounded-lg border">
            <div className="p-4">
              {Array.from({ length: 20 })
                .fill()
                .map((_, i) => (
                  <p key={i} className="mb-4">
                    Scroll content {i + 1}
                  </p>
                ))}
            </div>
            <footer className="sticky bottom-0 w-full border-t bg-background">
              <div className="container flex h-16 items-center justify-between py-4">
                <p>© 2024</p>
                <ShadcnUI.Button variant="ghost">Back to top</ShadcnUI.Button>
              </div>
            </footer>
          </div>
          <ShadcnUI.CollapsibleSection
            title="View Code"
            nonCollapsedItems={
              <div className="rounded-lg bg-muted p-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {`<footer className="sticky bottom-0 w-full border-t bg-background">
  <div className="container flex h-16 items-center justify-between py-4">
    <p>© 2024</p>
    <ShadcnUI.Button variant="ghost">Back to top</ShadcnUI.Button>
  </div>
</footer>`}
                </pre>
                <ShadcnUI.Button
                  onClick={() =>
                    navigator.clipboard
                      .writeText(`<footer className="sticky bottom-0 w-full border-t bg-background">
  <div className="container flex h-16 items-center justify-between py-4">
    <p>© 2024</p>
    <ShadcnUI.Button variant="ghost">Back to top</ShadcnUI.Button>
  </div>
</footer>`)
                  }
                  className="mt-2"
                  variant="outline"
                >
                  Copy Code
                </ShadcnUI.Button>
              </div>
            }
            collapsedItems={<></>}
          />
        </div>
      ),
    },
    {
      label: "Fixed Sidebar",
      value: "sidebar",
      content: (
        <div className="space-y-8">
          <div className="relative h-[500px] overflow-auto rounded-lg border">
            <div className="flex">
              <aside className="fixed left-0 top-0 z-30 h-screen w-[300px] border-r bg-background">
                <div className="flex h-[60px] items-center border-b px-6">
                  <strong>Fixed Sidebar</strong>
                </div>
                <div className="px-4 py-6">
                  <ShadcnUI.CustomAccordion
                    type="single"
                    data={[
                      {
                        value: "item-1",
                        trigger: "Navigation",
                        content: "Menu items here",
                      },
                    ]}
                  />
                </div>
              </aside>
              <div className="ml-[300px] p-4">
                {Array.from({ length: 20 })
                  .fill()
                  .map((_, i) => (
                    <p key={i} className="mb-4">
                      Main content {i + 1}
                    </p>
                  ))}
              </div>
            </div>
          </div>
          <ShadcnUI.CollapsibleSection
            title="View Code"
            nonCollapsedItems={
              <div className="rounded-lg bg-muted p-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {`<aside className="fixed left-0 top-0 z-30 h-screen w-[300px] border-r bg-background">
  <div className="flex h-[60px] items-center border-b px-6">
    <strong>Fixed Sidebar</strong>
  </div>
  <div className="px-4 py-6">
    <ShadcnUI.CustomAccordion
      type="single"
      data={[{
        value: 'item-1',
        trigger: 'Navigation',
        content: 'Menu items here'
      }]}
    />
  </div>
</aside>`}
                </pre>
                <ShadcnUI.Button
                  onClick={() =>
                    navigator.clipboard
                      .writeText(`<aside className="fixed left-0 top-0 z-30 h-screen w-[300px] border-r bg-background">
  <div className="flex h-[60px] items-center border-b px-6">
    <strong>Fixed Sidebar</strong>
  </div>
  <div className="px-4 py-6">
    <ShadcnUI.CustomAccordion
      type="single"
      data={[{
        value: 'item-1',
        trigger: 'Navigation',
        content: 'Menu items here'
      }]}
    />
  </div>
</aside>`)
                  }
                  className="mt-2"
                  variant="outline"
                >
                  Copy Code
                </ShadcnUI.Button>
              </div>
            }
            collapsedItems={<></>}
          />
        </div>
      ),
    },
    {
      label: "Fixed Header/Footer",
      value: "both",
      content: (
        <div className="space-y-8">
          <div className="relative h-[500px] overflow-auto rounded-lg border">
            <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur">
              <div className="container flex h-14 items-center">
                <ShadcnUI.CustomPopover triggerLabel="Menu">
                  <div className="flex flex-col space-y-2 p-4">
                    <ShadcnUI.Button variant="ghost">Home</ShadcnUI.Button>
                    <ShadcnUI.Button variant="ghost">About</ShadcnUI.Button>
                  </div>
                </ShadcnUI.CustomPopover>
              </div>
            </header>

            <main className="mt-14 mb-16 p-4">
              {Array.from({ length: 20 })
                .fill()
                .map((_, i) => (
                  <p key={i} className="mb-4">
                    Main content {i + 1}
                  </p>
                ))}
            </main>

            <footer className="fixed bottom-0 w-full border-t bg-background">
              <div className="container flex h-16 items-center justify-between">
                <p>© 2024</p>
                <ShadcnUI.Button variant="ghost">Back to top</ShadcnUI.Button>
              </div>
            </footer>
          </div>
          <ShadcnUI.CollapsibleSection
            title="View Code"
            nonCollapsedItems={
              <div className="rounded-lg bg-muted p-4">
                <pre className="whitespace-pre-wrap font-mono text-sm">
                  {`<>
  <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur">
    <div className="container flex h-14 items-center">
      <ShadcnUI.CustomPopover triggerLabel="Menu">
        <div className="flex flex-col space-y-2 p-4">
          <ShadcnUI.Button variant="ghost">Home</ShadcnUI.Button>
          <ShadcnUI.Button variant="ghost">About</ShadcnUI.Button>
        </div>
      </ShadcnUI.CustomPopover>
    </div>
  </header>
  <footer className="fixed bottom-0 w-full border-t bg-background">
    <div className="container flex h-16 items-center justify-between">
      <p>© 2024</p>
      <ShadcnUI.Button variant="ghost">Back to top</ShadcnUI.Button>
    </div>
  </footer>
</>`}
                </pre>
                <ShadcnUI.Button
                  onClick={() =>
                    navigator.clipboard.writeText(`<>
  <header className="fixed top-0 w-full border-b bg-background/95 backdrop-blur">
    <div className="container flex h-14 items-center">
      <ShadcnUI.CustomPopover triggerLabel="Menu">
        <div className="flex flex-col space-y-2 p-4">
          <ShadcnUI.Button variant="ghost">Home</ShadcnUI.Button>
          <ShadcnUI.Button variant="ghost">About</ShadcnUI.Button>
        </div>
      </ShadcnUI.CustomPopover>
    </div>
  </header>
  <footer className="fixed bottom-0 w-full border-t bg-background">
    <div className="container flex h-16 items-center justify-between">
      <p>© 2024</p>
      <ShadcnUI.Button variant="ghost">Back to top</ShadcnUI.Button>
    </div>
  </footer>
</>`)
                  }
                  className="mt-2"
                  variant="outline"
                >
                  Copy Code
                </ShadcnUI.Button>
              </div>
            }
            collapsedItems={<></>}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="mb-8 text-3xl font-bold">
          Sticky & Fixed Position Layout Examples
        </h1>
        <ShadcnUI.CustomTabs defaultValue="header" tabs={tabs} />
      </div>
    </div>
  );
}

export default MainComponent;
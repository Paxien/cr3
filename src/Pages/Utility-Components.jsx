"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [collapse1Open, setCollapse1Open] = useState(false);
  const [collapse2Open, setCollapse2Open] = useState(false);

  return (
    <div className="w-full h-full bg-white p-8 space-y-12">
      <div className="text-4xl font-semibold mb-8 text-[#111] font-crimson-text">
        ShadcnUI Component Showcase
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Divider Examples</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span>Left Content</span>
              <div className="h-[1px] flex-1 bg-gray-200" />
              <span>Right Content</span>
            </div>

            <div className="flex space-x-4">
              <div>Section 1</div>
              <div className="w-[1px] h-20 bg-gray-200" />
              <div>Section 2</div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Scroll Area Example</h2>
          <div className="border rounded-md">
            <ShadcnUI.ScrollArea className="h-[200px] w-full rounded-md p-4">
              <div className="space-y-4">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Scrollable Content Item {i + 1}
                  </div>
                ))}
              </div>
            </ShadcnUI.ScrollArea>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Collapse Examples</h2>
          <div className="space-y-4">
            <ShadcnUI.CollapsibleSection
              title="Basic Collapse Example"
              nonCollapsedItems={
                <div className="rounded-md border px-4 py-3">
                  Always visible content
                </div>
              }
              collapsedItems={
                <div className="space-y-2">
                  <div className="rounded-md border px-4 py-3">
                    Hidden content 1
                  </div>
                  <div className="rounded-md border px-4 py-3">
                    Hidden content 2
                  </div>
                </div>
              }
            />
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Skeleton Loader Examples
          </h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="animate-pulse w-12 h-12 bg-gray-200 rounded-full" />
              <div className="space-y-2">
                <div className="animate-pulse w-[200px] h-4 bg-gray-200 rounded" />
                <div className="animate-pulse w-[150px] h-4 bg-gray-200 rounded" />
              </div>
            </div>

            <div className="space-y-2">
              <div className="animate-pulse w-full h-4 bg-gray-200 rounded" />
              <div className="animate-pulse w-[80%] h-4 bg-gray-200 rounded" />
              <div className="animate-pulse w-[90%] h-4 bg-gray-200 rounded" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">
            Tooltip/Popover Examples
          </h2>
          <div className="flex space-x-8">
            <ShadcnUI.CustomTooltip
              content={
                <div className="p-2">
                  <p>Tooltip content here</p>
                </div>
              }
            >
              <ShadcnUI.Button variant="outline">
                Hover for Tooltip
              </ShadcnUI.Button>
            </ShadcnUI.CustomTooltip>

            <ShadcnUI.CustomPopover triggerLabel="Click for Popover">
              <div className="p-4 space-y-2">
                <h4 className="font-medium">Popover Title</h4>
                <p className="text-sm text-gray-500">
                  This is some popover content that appears in a floating panel.
                </p>
              </div>
            </ShadcnUI.CustomPopover>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Other Examples</h2>
          <div className="flex flex-wrap gap-4">
            <ShadcnUI.CustomHoverCard
              trigger={
                <ShadcnUI.Button variant="outline">Hover Card</ShadcnUI.Button>
              }
            >
              <div className="p-4">
                <h4 className="font-medium mb-2">Hover Card Content</h4>
                <p className="text-sm text-gray-500">
                  This content appears when you hover over the trigger.
                </p>
              </div>
            </ShadcnUI.CustomHoverCard>

            <ShadcnUI.CustomDrawer
              title="Drawer Example"
              description="This is a drawer that slides in from the side"
              openButtonText="Open Drawer"
              footer={
                <div className="flex justify-end">
                  <ShadcnUI.Button variant="outline">Close</ShadcnUI.Button>
                </div>
              }
            >
              <div className="p-4">
                <p>Drawer content goes here</p>
              </div>
            </ShadcnUI.CustomDrawer>

            <ShadcnUI.CustomAlert
              title="Alert Example"
              description="This is an example alert message"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
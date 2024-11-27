"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isFullScreenOpen, setIsFullScreenOpen] = React.useState(false);
  const [isCenteredOpen, setIsCenteredOpen] = React.useState(false);
  const [isSlideOpen, setIsSlideOpen] = React.useState(false);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-8">
        ShadCN UI Components Showcase
      </h1>

      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Full Screen Modal</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <ShadcnUI.CustomDialog
              open={isFullScreenOpen}
              onOpenChange={setIsFullScreenOpen}
              triggerButtonText="Open Full Screen Modal"
              title="Full Screen Modal"
              description="This modal takes up the entire viewport"
              footer={
                <ShadcnUI.Button onClick={() => setIsFullScreenOpen(false)}>
                  Close
                </ShadcnUI.Button>
              }
            >
              <div className="min-h-[80vh] flex items-center justify-center">
                <p className="text-xl">Full Screen Content Here</p>
              </div>
            </ShadcnUI.CustomDialog>

            <ShadcnUI.Collapsible>
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="outline">View Code</ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <div className="rounded-md bg-slate-950 p-4 mt-4">
                  <pre className="text-white whitespace-pre-wrap">
                    {`<ShadcnUI.CustomDialog
  open={isFullScreenOpen}
  onOpenChange={setIsFullScreenOpen}
  triggerButtonText="Open Full Screen Modal" 
  title="Full Screen Modal"
  description="This modal takes up the entire viewport"
  footer={<Button>Close</Button>}
>
  <div className="min-h-[80vh] flex items-center justify-center">
    <p className="text-xl">Full Screen Content Here</p>
  </div>
</ShadcnUI.CustomDialog>`}
                  </pre>
                </div>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Centered Modal</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <ShadcnUI.CustomDialog
              open={isCenteredOpen}
              onOpenChange={setIsCenteredOpen}
              triggerButtonText="Open Centered Modal"
              title="Centered Modal Example"
              description="This modal is centered in the viewport"
              footer={
                <ShadcnUI.Button onClick={() => setIsCenteredOpen(false)}>
                  Close
                </ShadcnUI.Button>
              }
            >
              <div className="p-4">
                <p>Centered modal content here</p>
              </div>
            </ShadcnUI.CustomDialog>

            <ShadcnUI.Collapsible>
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="outline">View Code</ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <div className="rounded-md bg-slate-950 p-4 mt-4">
                  <pre className="text-white whitespace-pre-wrap">
                    {`<ShadcnUI.CustomDialog
  open={isCenteredOpen}
  onOpenChange={setIsCenteredOpen}
  triggerButtonText="Open Centered Modal"
  title="Centered Modal Example" 
  description="This modal is centered in the viewport"
  footer={<Button>Close</Button>}
>
  <div className="p-4">
    <p>Centered modal content here</p>
  </div>
</ShadcnUI.CustomDialog>`}
                  </pre>
                </div>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Slide-in Modal</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <ShadcnUI.CustomDrawer
              title="Slide-in Sheet"
              description="This slides in from the side"
              openButtonText="Open Slide-in"
              footer={
                <ShadcnUI.Button onClick={() => setIsSlideOpen(false)}>
                  Close Sheet
                </ShadcnUI.Button>
              }
            >
              <div className="py-4">
                <p>Slide-in sheet content goes here</p>
              </div>
            </ShadcnUI.CustomDrawer>

            <ShadcnUI.Collapsible>
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="outline">View Code</ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <div className="rounded-md bg-slate-950 p-4 mt-4">
                  <pre className="text-white whitespace-pre-wrap">
                    {`<ShadcnUI.CustomDrawer
  title="Slide-in Sheet"
  description="This slides in from the side"
  openButtonText="Open Slide-in"
  footer={<Button>Close Sheet</Button>}
>
  <div className="py-4">
    <p>Slide-in sheet content goes here</p>
  </div>
</ShadcnUI.CustomDrawer>`}
                  </pre>
                </div>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Popup Tooltip</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <ShadcnUI.CustomTooltip
              content={
                <div className="max-w-[300px] p-2">
                  <p>
                    This is a helpful tooltip that provides additional context
                  </p>
                </div>
              }
            >
              <ShadcnUI.Button>Hover Me</ShadcnUI.Button>
            </ShadcnUI.CustomTooltip>

            <ShadcnUI.Collapsible>
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="outline">View Code</ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <div className="rounded-md bg-slate-950 p-4 mt-4">
                  <pre className="text-white whitespace-pre-wrap">
                    {`<ShadcnUI.CustomTooltip
  content={
    <div className="max-w-[300px] p-2">
      <p>This is a helpful tooltip that provides additional context</p>
    </div>
  }
>
  <Button>Hover Me</Button>
</ShadcnUI.CustomTooltip>`}
                  </pre>
                </div>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </div>
        </section>

        <ShadcnUI.Toaster />
      </div>
    </div>
  );
}

export default MainComponent;
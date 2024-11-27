"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [showCode, setShowCode] = React.useState(null);
  const [showDrawer, setShowDrawer] = React.useState(false);

  const codeSnippets = {
    vertical: `<div className="flex flex-col gap-4 w-full">
  <ShadcnUI.Button>Item 1</ShadcnUI.Button>
  <ShadcnUI.Button variant="secondary">Item 2</ShadcnUI.Button>
  <ShadcnUI.Button variant="outline">Item 3</ShadcnUI.Button>
</div>`,
    horizontal: `<div className="flex flex-row gap-4 w-full">
  <ShadcnUI.Button>Item 1</ShadcnUI.Button>
  <ShadcnUI.Button variant="secondary">Item 2</ShadcnUI.Button>
  <ShadcnUI.Button variant="outline">Item 3</ShadcnUI.Button>
</div>`,
    equalHeight: `<div className="flex flex-row gap-4 w-full h-[200px]">
  <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
    <ShadcnUI.Badge>Equal Height 1</ShadcnUI.Badge>
  </div>
  <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
    <ShadcnUI.Badge variant="secondary">Equal Height 2</ShadcnUI.Badge>
  </div>
  <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
    <ShadcnUI.Badge variant="outline">Equal Height 3</ShadcnUI.Badge>
  </div>
</div>`,
    gap: `<div className="flex flex-col gap-8 w-full">
  <div className="flex gap-2">
    <ShadcnUI.Button size="sm">Small Gap</ShadcnUI.Button>
    <ShadcnUI.Button size="sm" variant="secondary">Small Gap</ShadcnUI.Button>
  </div>
  <div className="flex gap-4">
    <ShadcnUI.Button>Medium Gap</ShadcnUI.Button>
    <ShadcnUI.Button variant="secondary">Medium Gap</ShadcnUI.Button>
  </div>
  <div className="flex gap-8">
    <ShadcnUI.Button size="lg">Large Gap</ShadcnUI.Button>
    <ShadcnUI.Button size="lg" variant="secondary">Large Gap</ShadcnUI.Button>
  </div>
</div>`,
    alignJustify: `<div className="flex flex-col gap-4 w-full">
  <div className="flex justify-start gap-2">
    <ShadcnUI.Badge>Start</ShadcnUI.Badge>
  </div>
  <div className="flex justify-center gap-2">
    <ShadcnUI.Badge variant="secondary">Center</ShadcnUI.Badge>
  </div>
  <div className="flex justify-end gap-2">
    <ShadcnUI.Badge variant="outline">End</ShadcnUI.Badge>
  </div>
</div>`,
    wrap: `<div className="flex flex-wrap gap-2 w-full">
  <ShadcnUI.Button>Wrap 1</ShadcnUI.Button>
  <ShadcnUI.Button variant="secondary">Wrap 2</ShadcnUI.Button>
  <ShadcnUI.Button variant="outline">Wrap 3</ShadcnUI.Button>
  <ShadcnUI.Button>Wrap 4</ShadcnUI.Button>
  <ShadcnUI.Button variant="secondary">Wrap 5</ShadcnUI.Button>
  <ShadcnUI.Button variant="outline">Wrap 6</ShadcnUI.Button>
</div>`,
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <ShadcnUI.CustomSheet
        open={showDrawer}
        onOpenChange={setShowDrawer}
        title="Code Preview"
        description="Copy the code snippet below"
        buttonLabel="Close"
        footer={
          <ShadcnUI.Button onClick={() => setShowDrawer(false)}>
            Close
          </ShadcnUI.Button>
        }
      >
        <pre className="bg-slate-100 p-4 rounded-lg overflow-x-auto">
          <code>{showCode}</code>
        </pre>
      </ShadcnUI.CustomSheet>

      <div className="space-y-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Vertical Flexbox</h2>
          <div className="flex flex-col gap-4 w-full">
            <ShadcnUI.Button>Item 1</ShadcnUI.Button>
            <ShadcnUI.Button variant="secondary">Item 2</ShadcnUI.Button>
            <ShadcnUI.Button variant="outline">Item 3</ShadcnUI.Button>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() => {
              setShowCode(codeSnippets.vertical);
              setShowDrawer(true);
            }}
          >
            View Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Horizontal Flexbox</h2>
          <div className="flex flex-row gap-4 w-full">
            <ShadcnUI.Button>Item 1</ShadcnUI.Button>
            <ShadcnUI.Button variant="secondary">Item 2</ShadcnUI.Button>
            <ShadcnUI.Button variant="outline">Item 3</ShadcnUI.Button>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() => {
              setShowCode(codeSnippets.horizontal);
              setShowDrawer(true);
            }}
          >
            View Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Equal Height Flexbox</h2>
          <div className="flex flex-row gap-4 w-full h-[200px]">
            <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
              <ShadcnUI.Badge>Equal Height 1</ShadcnUI.Badge>
            </div>
            <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
              <ShadcnUI.Badge variant="secondary">
                Equal Height 2
              </ShadcnUI.Badge>
            </div>
            <div className="flex-1 bg-slate-100 rounded-lg p-4 flex items-center justify-center">
              <ShadcnUI.Badge variant="outline">Equal Height 3</ShadcnUI.Badge>
            </div>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() => {
              setShowCode(codeSnippets.equalHeight);
              setShowDrawer(true);
            }}
          >
            View Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Flex Gap Control</h2>
          <div className="flex flex-col gap-8 w-full">
            <div className="flex gap-2">
              <ShadcnUI.Button size="sm">Small Gap</ShadcnUI.Button>
              <ShadcnUI.Button size="sm" variant="secondary">
                Small Gap
              </ShadcnUI.Button>
            </div>
            <div className="flex gap-4">
              <ShadcnUI.Button>Medium Gap</ShadcnUI.Button>
              <ShadcnUI.Button variant="secondary">Medium Gap</ShadcnUI.Button>
            </div>
            <div className="flex gap-8">
              <ShadcnUI.Button size="lg">Large Gap</ShadcnUI.Button>
              <ShadcnUI.Button size="lg" variant="secondary">
                Large Gap
              </ShadcnUI.Button>
            </div>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() => {
              setShowCode(codeSnippets.gap);
              setShowDrawer(true);
            }}
          >
            View Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Align and Justify Helpers</h2>
          <div className="flex flex-col gap-4 w-full">
            <div className="flex justify-start gap-2">
              <ShadcnUI.Badge>Start</ShadcnUI.Badge>
            </div>
            <div className="flex justify-center gap-2">
              <ShadcnUI.Badge variant="secondary">Center</ShadcnUI.Badge>
            </div>
            <div className="flex justify-end gap-2">
              <ShadcnUI.Badge variant="outline">End</ShadcnUI.Badge>
            </div>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() => {
              setShowCode(codeSnippets.alignJustify);
              setShowDrawer(true);
            }}
          >
            View Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Wrap Flexbox</h2>
          <div className="flex flex-wrap gap-2 w-full">
            <ShadcnUI.Button>Wrap 1</ShadcnUI.Button>
            <ShadcnUI.Button variant="secondary">Wrap 2</ShadcnUI.Button>
            <ShadcnUI.Button variant="outline">Wrap 3</ShadcnUI.Button>
            <ShadcnUI.Button>Wrap 4</ShadcnUI.Button>
            <ShadcnUI.Button variant="secondary">Wrap 5</ShadcnUI.Button>
            <ShadcnUI.Button variant="outline">Wrap 6</ShadcnUI.Button>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() => {
              setShowCode(codeSnippets.wrap);
              setShowDrawer(true);
            }}
          >
            View Code
          </ShadcnUI.Button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
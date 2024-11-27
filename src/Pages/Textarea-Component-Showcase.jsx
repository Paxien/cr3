"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [text3, setText3] = React.useState("");
  const [text4, setText4] = React.useState("");
  const [text5, setText5] = React.useState("");

  const maxChars = 100;
  const remainingChars = maxChars - text4.length;

  const codeSnippets = {
    basic: `<ShadcnUI.Label htmlFor="basic">Basic Textarea</ShadcnUI.Label>
<ShadcnUI.Input
  as="textarea" 
  id="basic"
  className="min-h-[100px] resize-none"
  placeholder="Enter your text here..."
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`,
    resizable: `<ShadcnUI.Label htmlFor="resizable">Resizable Textarea</ShadcnUI.Label>
<ShadcnUI.Input
  as="textarea"
  id="resizable" 
  className="min-h-[100px] resize"
  placeholder="I can be resized..."
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`,
    autoExpand: `<ShadcnUI.Label htmlFor="autoExpand">Auto-Expanding Textarea</ShadcnUI.Label>
<ShadcnUI.Input
  as="textarea"
  id="autoExpand"
  className="min-h-[40px] overflow-hidden"
  style={{ height: 'auto' }}
  placeholder="I grow as you type..."
  value={text}
  onChange={(e) => {
    setText(e.target.value)
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  }}
/>`,
    counter: `<div className="space-y-2">
  <ShadcnUI.Label htmlFor="counter">Character Counter</ShadcnUI.Label>
  <ShadcnUI.Input
    as="textarea"
    id="counter"
    className="min-h-[100px] resize-none"
    maxLength={maxChars}
    placeholder="Limited to 100 characters..."
    value={text}
    onChange={(e) => setText(e.target.value)}
  />
  <p className="text-sm text-gray-500">
    {remainingChars} characters remaining
  </p>
</div>`,
    placeholder: `<ShadcnUI.Label htmlFor="placeholder">With Placeholder</ShadcnUI.Label>
<ShadcnUI.Input
  as="textarea"
  id="placeholder"
  className="min-h-[100px] resize-none"
  placeholder="Share your thoughts here..."
  value={text}
  onChange={(e) => setText(e.target.value)}
/>`,
  };

  return (
    <div className="container mx-auto p-6 space-y-12">
      <h1 className="text-3xl font-semibold mb-8">
        Textarea Component Examples
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Textarea */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Basic Textarea</h2>
            <div className="space-y-2">
              <ShadcnUI.Label htmlFor="basic">Basic Textarea</ShadcnUI.Label>
              <ShadcnUI.Input
                as="textarea"
                id="basic"
                className="min-h-[100px] resize-none"
                placeholder="Enter your text here..."
                value={text1}
                onChange={(e) => setText1(e.target.value)}
              />
            </div>
          </div>
          <ShadcnUI.CustomAccordion
            type="single"
            data={[
              {
                trigger: "View Code",
                value: "basic-code",
                content: (
                  <pre className="language-jsx">{codeSnippets.basic}</pre>
                ),
              },
            ]}
          />
        </div>

        {/* Resizable Textarea */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Resizable Textarea</h2>
            <div className="space-y-2">
              <ShadcnUI.Label htmlFor="resizable">
                Resizable Textarea
              </ShadcnUI.Label>
              <ShadcnUI.Input
                as="textarea"
                id="resizable"
                className="min-h-[100px] resize"
                placeholder="I can be resized..."
                value={text2}
                onChange={(e) => setText2(e.target.value)}
              />
            </div>
          </div>
          <ShadcnUI.CustomAccordion
            type="single"
            data={[
              {
                trigger: "View Code",
                value: "resizable-code",
                content: (
                  <pre className="language-jsx">{codeSnippets.resizable}</pre>
                ),
              },
            ]}
          />
        </div>

        {/* Auto-Expanding Textarea */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">
              Auto-Expanding Textarea
            </h2>
            <div className="space-y-2">
              <ShadcnUI.Label htmlFor="autoExpand">
                Auto-Expanding Textarea
              </ShadcnUI.Label>
              <ShadcnUI.Input
                as="textarea"
                id="autoExpand"
                className="min-h-[40px] overflow-hidden"
                style={{ height: "auto" }}
                placeholder="I grow as you type..."
                value={text3}
                onChange={(e) => {
                  setText3(e.target.value);
                  e.target.style.height = "auto";
                  e.target.style.height = e.target.scrollHeight + "px";
                }}
              />
            </div>
          </div>
          <ShadcnUI.CustomAccordion
            type="single"
            data={[
              {
                trigger: "View Code",
                value: "auto-code",
                content: (
                  <pre className="language-jsx">{codeSnippets.autoExpand}</pre>
                ),
              },
            ]}
          />
        </div>

        {/* Character Counter Textarea */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">Character Counter</h2>
            <div className="space-y-2">
              <ShadcnUI.Label htmlFor="counter">
                Character Counter
              </ShadcnUI.Label>
              <ShadcnUI.Input
                as="textarea"
                id="counter"
                className="min-h-[100px] resize-none"
                maxLength={maxChars}
                placeholder="Limited to 100 characters..."
                value={text4}
                onChange={(e) => setText4(e.target.value)}
              />
              <p className="text-sm text-gray-500">
                {remainingChars} characters remaining
              </p>
            </div>
          </div>
          <ShadcnUI.CustomAccordion
            type="single"
            data={[
              {
                trigger: "View Code",
                value: "counter-code",
                content: (
                  <pre className="language-jsx">{codeSnippets.counter}</pre>
                ),
              },
            ]}
          />
        </div>

        {/* Textarea with Placeholder */}
        <div className="space-y-6">
          <div className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-medium mb-4">With Placeholder</h2>
            <div className="space-y-2">
              <ShadcnUI.Label htmlFor="placeholder">
                With Placeholder
              </ShadcnUI.Label>
              <ShadcnUI.Input
                as="textarea"
                id="placeholder"
                className="min-h-[100px] resize-none"
                placeholder="Share your thoughts here..."
                value={text5}
                onChange={(e) => setText5(e.target.value)}
              />
            </div>
          </div>
          <ShadcnUI.CustomAccordion
            type="single"
            data={[
              {
                trigger: "View Code",
                value: "placeholder-code",
                content: (
                  <pre className="language-jsx">{codeSnippets.placeholder}</pre>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
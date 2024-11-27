"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [code, setCode] = React.useState("");
  const [emailValue, setEmailValue] = React.useState("");
  const [dateValue, setDateValue] = React.useState(new Date());
  const [rangeValue, setRangeValue] = React.useState([50]);

  const sampleCode = {
    text: `<ShadcnUI.Input type="text" placeholder="Enter text..." />`,
    password: `<ShadcnUI.Input type="password" placeholder="Enter password..." />`,
    email: `<ShadcnUI.Input
  type="email" 
  placeholder="email@example.com"
  value={emailValue}
  onChange={(e) => setEmailValue(e.target.value)}
/>`,
    number: `<ShadcnUI.Input type="number" min="0" max="100" step="1" />`,
    url: `<ShadcnUI.Input type="url" placeholder="https://example.com" />`,
    date: `<ShadcnUI.Calendar
  mode="single"
  selected={dateValue}
  onSelect={setDateValue}
/>`,
    time: `<ShadcnUI.Input type="time" />`,
    dateTime: `<div>
  <ShadcnUI.Calendar
    mode="single"
    selected={dateValue}
    onSelect={setDateValue}
  />
  <ShadcnUI.Input type="time" />
</div>`,
    tel: `<ShadcnUI.Input type="tel" placeholder="(123) 456-7890" />`,
    search: `<div className="relative">
  <ShadcnUI.Input type="search" placeholder="Search..." />
  <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
</div>`,
    range: `<ShadcnUI.Slider
  defaultValue={rangeValue}
  max={100}
  step={1}
  onValueChange={setRangeValue}
/>`,
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="font-roboto mb-8 text-3xl font-bold">
        Form Controls Showcase
      </h1>

      <div className="space-y-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Text Input</h2>
            <ShadcnUI.Input type="text" placeholder="Enter text..." />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.text)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.text}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Password Input</h2>
            <ShadcnUI.Input type="password" placeholder="Enter password..." />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.password)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.password}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Email Input</h2>
            <ShadcnUI.Input
              type="email"
              placeholder="email@example.com"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
            />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.email)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.email}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Number Input</h2>
            <ShadcnUI.Input type="number" min="0" max="100" step="1" />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.number)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.number}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">URL Input</h2>
            <ShadcnUI.Input type="url" placeholder="https://example.com" />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.url)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.url}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Date Input</h2>
            <ShadcnUI.Calendar
              mode="single"
              selected={dateValue}
              onSelect={setDateValue}
              className="rounded-md border"
            />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.date)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.date}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Time Input</h2>
            <ShadcnUI.Input type="time" />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.time)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.time}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Date-Time Input</h2>
            <div className="space-y-4">
              <ShadcnUI.Calendar
                mode="single"
                selected={dateValue}
                onSelect={setDateValue}
                className="rounded-md border"
              />
              <ShadcnUI.Input type="time" />
            </div>
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.dateTime)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.dateTime}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Tel Input</h2>
            <ShadcnUI.Input type="tel" placeholder="(123) 456-7890" />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.tel)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.tel}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Search Input</h2>
            <div className="relative">
              <ShadcnUI.Input type="search" placeholder="Search..." />
              <i className="fas fa-search absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.search)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.search}</pre>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Range Input</h2>
            <ShadcnUI.Slider
              defaultValue={rangeValue}
              max={100}
              step={1}
              onValueChange={setRangeValue}
            />
          </div>
          <div className="relative rounded-lg bg-gray-100 p-4">
            <button
              onClick={() => copyToClipboard(sampleCode.range)}
              className="absolute right-2 top-2 text-gray-500 hover:text-gray-700"
            >
              <i className="fas fa-copy" />
            </button>
            <pre className="text-sm">{sampleCode.range}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedBasic, setSelectedBasic] = React.useState("");
  const [selectedMulti, setSelectedMulti] = React.useState([]);
  const [selectedSearchable, setSelectedSearchable] = React.useState("");
  const [selectedCustom, setSelectedCustom] = React.useState("");
  const [selectedGrouped, setSelectedGrouped] = React.useState("");
  const [selectedRange, setSelectedRange] = React.useState([20, 80]);

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1200px]">
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Basic Dropdown</h2>
            <ShadcnUI.CustomSelect
              label="Basic Select"
              placeholder="Select a fruit..."
              value={selectedBasic}
              onValueChange={setSelectedBasic}
              groups={[
                {
                  items: [
                    { value: "apple", label: "Apple" },
                    { value: "banana", label: "Banana" },
                    { value: "orange", label: "Orange" },
                  ],
                },
              ]}
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-4 rounded-lg">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`<ShadcnUI.CustomSelect
  label="Basic Select"
  placeholder="Select a fruit..."
  value={selectedBasic}
  onValueChange={setSelectedBasic}
  groups={[{
    items: [
      { value: 'apple', label: 'Apple' },
      { value: 'banana', label: 'Banana' },
      { value: 'orange', label: 'Orange' }
    ]
  }]}
/>`}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Grouped Select</h2>
            <ShadcnUI.CustomSelect
              label="Grouped Select"
              placeholder="Select an option..."
              value={selectedGrouped}
              onValueChange={setSelectedGrouped}
              groups={[
                {
                  groupName: "Fruits",
                  items: [
                    { value: "apple", label: "Apple" },
                    { value: "banana", label: "Banana" },
                  ],
                },
                {
                  groupName: "Vegetables",
                  items: [
                    { value: "carrot", label: "Carrot" },
                    { value: "broccoli", label: "Broccoli" },
                  ],
                },
              ]}
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-4 rounded-lg">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`<ShadcnUI.CustomSelect
  label="Grouped Select"
  placeholder="Select an option..."
  value={selectedGrouped}
  onValueChange={setSelectedGrouped}
  groups={[
    {
      groupName: 'Fruits',
      items: [
        { value: 'apple', label: 'Apple' },
        { value: 'banana', label: 'Banana' }
      ]
    },
    {
      groupName: 'Vegetables',
      items: [
        { value: 'carrot', label: 'Carrot' },
        { value: 'broccoli', label: 'Broccoli' }
      ]
    }
  ]}
/>`}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Range Select</h2>
            <div className="space-y-4">
              <ShadcnUI.Slider
                defaultValue={selectedRange}
                max={100}
                step={1}
                onValueChange={setSelectedRange}
              />
              <div className="text-sm text-gray-500">
                Selected range: {selectedRange[0]} - {selectedRange[1]}
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-4 rounded-lg">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`<ShadcnUI.Slider 
  defaultValue={selectedRange}
  max={100}
  step={1}
  onValueChange={setSelectedRange}
/>`}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Custom Dropdown</h2>
            <ShadcnUI.CustomDropdown
              triggerLabel="Select Option"
              menuLabel="Custom Menu"
              items={[
                {
                  content: "🍎",
                  label: "Apple",
                  onSelect: () => setSelectedCustom("apple"),
                },
                {
                  content: "🍌",
                  label: "Banana",
                  onSelect: () => setSelectedCustom("banana"),
                },
                {
                  content: "🍊",
                  label: "Orange",
                  onSelect: () => setSelectedCustom("orange"),
                },
              ]}
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-4 rounded-lg">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`<ShadcnUI.CustomDropdown
  triggerLabel="Select Option"
  menuLabel="Custom Menu"
  items={[
    { content: "🍎", label: 'Apple', onSelect: () => setSelectedCustom('apple') },
    { content: "🍌", label: 'Banana', onSelect: () => setSelectedCustom('banana') },
    { content: "🍊", label: 'Orange', onSelect: () => setSelectedCustom('orange') }
  ]}
/>`}</code>
            </pre>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">
              Command Palette (Searchable)
            </h2>
            <ShadcnUI.CommandPalette
              asDialog
              commandGroups={[
                {
                  heading: "Suggestions",
                  items: [
                    {
                      onSelect: () => setSelectedSearchable("apple"),
                      label: "Apple",
                    },
                    {
                      onSelect: () => setSelectedSearchable("banana"),
                      label: "Banana",
                    },
                    {
                      onSelect: () => setSelectedSearchable("orange"),
                      label: "Orange",
                    },
                  ],
                },
              ]}
            />
          </div>
          <div className="w-full md:w-1/2 bg-[#1e1e1e] p-4 rounded-lg">
            <pre className="text-sm text-white overflow-x-auto">
              <code>{`<ShadcnUI.CommandPalette
  asDialog
  commandGroups={[
    {
      heading: "Suggestions",
      items: [
        { onSelect: () => setSelectedSearchable('apple'), label: "Apple" },
        { onSelect: () => setSelectedSearchable('banana'), label: "Banana" },
        { onSelect: () => setSelectedSearchable('orange'), label: "Orange" }
      ]
    }
  ]}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
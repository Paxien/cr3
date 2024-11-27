"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [showCode, setShowCode] = React.useState("");
  const [value, setValue] = React.useState("");
  const [multiValue, setMultiValue] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState("");

  const menuData = [
    {
      trigger: "Standard Dropdown",
      items: [
        { type: "item", label: "Option 1", onSelect: () => {} },
        { type: "item", label: "Option 2", onSelect: () => {} },
        { type: "item", label: "Option 3", onSelect: () => {} },
      ],
    },
  ];

  const selectGroups = [
    {
      groupName: "Continents",
      items: [
        { value: "asia", label: "Asia" },
        { value: "europe", label: "Europe" },
        { value: "africa", label: "Africa" },
        { value: "americas", label: "Americas" },
        { value: "oceania", label: "Oceania" },
      ],
    },
    {
      groupName: "Countries",
      items: [
        { value: "usa", label: "United States" },
        { value: "canada", label: "Canada" },
        { value: "mexico", label: "Mexico" },
        { value: "brazil", label: "Brazil" },
      ],
    },
  ];

  const searchableItems = [
    {
      content: "🌎 Earth",
      label: "Earth",
      onSelect: () => {},
    },
    {
      content: "🌍 Mars",
      label: "Mars",
      onSelect: () => {},
    },
    {
      content: "🌏 Venus",
      label: "Venus",
      onSelect: () => {},
    },
  ];

  const multiSelectItems = [
    {
      content: "📚 Books",
      label: "Books",
      onSelect: () => setMultiValue([...multiValue, "Books"]),
    },
    {
      content: "🎵 Music",
      label: "Music",
      onSelect: () => setMultiValue([...multiValue, "Music"]),
    },
    {
      content: "🎨 Art",
      label: "Art",
      onSelect: () => setMultiValue([...multiValue, "Art"]),
    },
  ];

  const codeExamples = {
    dropdown: `<ShadcnUI.CustomMenubar menuData={[{
  trigger: "Standard Dropdown",
  items: [
    { type: 'item', label: "Option 1", onSelect: () => {} },
    { type: 'item', label: "Option 2", onSelect: () => {} }
  ]
}]} />`,
    multiSelect: `<ShadcnUI.CustomDropdown
  triggerLabel="Select Multiple"
  items={[
    { content: "📚 Books", label: "Books", onSelect: () => {} },
    { content: "🎵 Music", label: "Music", onSelect: () => {} }
  ]}
/>`,
    searchable: `<ShadcnUI.CustomDropdown
  triggerLabel="Search Items"
  items={[
    { content: "🌎 Earth", label: "Earth", onSelect: () => {} },
    { content: "🌍 Mars", label: "Mars", onSelect: () => {} }
  ]} 
/>`,
    select: `<ShadcnUI.CustomSelect
  placeholder='Select an option...'
  groups={[{
    groupName: 'Group 1',
    items: [
      { value: 'value1', label: 'Label 1' },
      { value: 'value2', label: 'Label 2' }
    ]
  }]}
/>`,
    grouped: `<ShadcnUI.CustomSelect
  placeholder='Select from groups...'
  groups={[
    {
      groupName: 'Continents',
      items: [
        { value: 'asia', label: 'Asia' },
        { value: 'europe', label: 'Europe' }
      ]
    },
    {
      groupName: 'Countries',
      items: [
        { value: 'usa', label: 'United States' },
        { value: 'canada', label: 'Canada' }
      ]
    }
  ]}
/>`,
  };

  return (
    <div className="w-full min-h-screen bg-[#fafafa] p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            Select & Dropdown Components
          </h1>
          <p className="text-[#666] text-lg">
            A showcase of various select and dropdown implementations
          </p>
        </div>

        {/* Component Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Standard Dropdown */}
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Standard Dropdown</h2>
              <ShadcnUI.Button
                variant="ghost"
                onClick={() =>
                  setShowCode(showCode === "dropdown" ? "" : "dropdown")
                }
              >
                <i className="fas fa-code"></i>
              </ShadcnUI.Button>
            </div>
            <div className="mb-4">
              <ShadcnUI.CustomMenubar menuData={menuData} />
            </div>
            {showCode === "dropdown" && (
              <div className="mt-4 bg-[#f5f5f5] p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {codeExamples.dropdown}
                </pre>
              </div>
            )}
          </div>

          {/* Multi-select Dropdown */}
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Multi-select Dropdown</h2>
              <ShadcnUI.Button
                variant="ghost"
                onClick={() =>
                  setShowCode(showCode === "multiSelect" ? "" : "multiSelect")
                }
              >
                <i className="fas fa-code"></i>
              </ShadcnUI.Button>
            </div>
            <div className="mb-4">
              <ShadcnUI.CustomDropdown
                triggerLabel="Select Multiple"
                items={multiSelectItems}
              />
              {multiValue.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {multiValue.map((val, idx) => (
                    <ShadcnUI.Badge key={idx} variant="secondary">
                      {val}
                    </ShadcnUI.Badge>
                  ))}
                </div>
              )}
            </div>
            {showCode === "multiSelect" && (
              <div className="mt-4 bg-[#f5f5f5] p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {codeExamples.multiSelect}
                </pre>
              </div>
            )}
          </div>

          {/* Searchable Dropdown */}
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Searchable Dropdown</h2>
              <ShadcnUI.Button
                variant="ghost"
                onClick={() =>
                  setShowCode(showCode === "searchable" ? "" : "searchable")
                }
              >
                <i className="fas fa-code"></i>
              </ShadcnUI.Button>
            </div>
            <div className="mb-4">
              <ShadcnUI.CustomDropdown
                triggerLabel="Search Items"
                items={searchableItems}
              />
            </div>
            {showCode === "searchable" && (
              <div className="mt-4 bg-[#f5f5f5] p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {codeExamples.searchable}
                </pre>
              </div>
            )}
          </div>

          {/* Custom Select */}
          <div className="bg-white rounded-lg shadow-md p-6 relative">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Custom Select</h2>
              <ShadcnUI.Button
                variant="ghost"
                onClick={() =>
                  setShowCode(showCode === "select" ? "" : "select")
                }
              >
                <i className="fas fa-code"></i>
              </ShadcnUI.Button>
            </div>
            <div className="mb-4">
              <ShadcnUI.CustomSelect
                placeholder="Select an option..."
                value={value}
                onValueChange={setValue}
                groups={[
                  {
                    items: [
                      { value: "light", label: "Light" },
                      { value: "dark", label: "Dark" },
                      { value: "system", label: "System" },
                    ],
                  },
                ]}
              />
            </div>
            {showCode === "select" && (
              <div className="mt-4 bg-[#f5f5f5] p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {codeExamples.select}
                </pre>
              </div>
            )}
          </div>

          {/* Grouped Select */}
          <div className="bg-white rounded-lg shadow-md p-6 relative col-span-2">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Grouped Select</h2>
              <ShadcnUI.Button
                variant="ghost"
                onClick={() =>
                  setShowCode(showCode === "grouped" ? "" : "grouped")
                }
              >
                <i className="fas fa-code"></i>
              </ShadcnUI.Button>
            </div>
            <div className="mb-4">
              <ShadcnUI.CustomSelect
                placeholder="Select from groups..."
                groups={selectGroups}
              />
            </div>
            {showCode === "grouped" && (
              <div className="mt-4 bg-[#f5f5f5] p-4 rounded-md">
                <pre className="text-sm overflow-x-auto">
                  {codeExamples.grouped}
                </pre>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
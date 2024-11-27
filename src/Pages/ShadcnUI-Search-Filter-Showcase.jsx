"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [searchValue, setSearchValue] = React.useState("");
  const [selectedItems, setSelectedItems] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState("");
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [priceRange, setPriceRange] = React.useState([0, 100]);
  const [selectedTags, setSelectedTags] = React.useState([]);

  const searchSuggestions = [
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "HTML",
    "Tailwind",
    "Node.js",
  ];

  const filterTags = [
    "Framework",
    "Language",
    "Frontend",
    "Backend",
    "Database",
    "Testing",
    "DevOps",
  ];

  const sampleCode = {
    searchBar: `<ShadcnUI.Input 
  placeholder="Search..."
  value={searchValue}
  onChange={(e) => setSearchValue(e.target.value)}
  className="w-full max-w-sm"
/>`,
    autoSuggest: `<ShadcnUI.CommandPalette
  asDialog
  commandGroups={[
    {
      heading: "Suggestions",
      items: searchSuggestions.map(suggestion => ({
        onSelect: () => setSearchValue(suggestion),
        label: suggestion
      }))
    }
  ]}
/>`,
    filterSidebar: `<ShadcnUI.Sheet
  title="Filters"
  description="Apply filters to narrow results"
  buttonLabel="Filters" 
  footer={
    <div className="flex justify-between">
      <ShadcnUI.Button variant="outline" onClick={() => setSelectedItems([])}>
        Reset
      </ShadcnUI.Button>
      <ShadcnUI.Button onClick={() => setSidebarOpen(false)}>
        Apply
      </ShadcnUI.Button>
    </div>
  }
>
  <div className="space-y-4">
    <div>
      <h4 className="mb-2 text-sm font-medium">Categories</h4>
      {['Frontend', 'Backend', 'DevOps'].map((item) => (
        <div key={item} className="flex items-center space-x-2">
          <ShadcnUI.Checkbox
            checked={selectedItems.includes(item)}
            onCheckedChange={(checked) => {
              if (checked) {
                setSelectedItems([...selectedItems, item])
              } else {
                setSelectedItems(selectedItems.filter(i => i !== item))
              }
            }}
          />
          <label>{item}</label>
        </div>
      ))}
    </div>

    <div>
      <h4 className="mb-2 text-sm font-medium">Price Range</h4>
      <ShadcnUI.Slider
        min={0}
        max={100}
        value={priceRange}
        onValueChange={setPriceRange}
      />
    </div>
  </div>
</ShadcnUI.Sheet>`,
    dropdown: `<ShadcnUI.CustomSelect
  placeholder="Select category"
  value={selectedValue}
  onValueChange={setSelectedValue}
  groups={[{
    items: [
      { value: "frontend", label: "Frontend" },
      { value: "backend", label: "Backend" },
      { value: "mobile", label: "Mobile" },
      { value: "devops", label: "DevOps" }
    ]
  }]}
/>`,
    tags: `<div className="flex flex-wrap gap-2">
  {filterTags.map(tag => (
    <ShadcnUI.Badge
      key={tag}
      variant={selectedTags.includes(tag) ? "default" : "outline"}
      className="cursor-pointer"
      onClick={() => {
        if (selectedTags.includes(tag)) {
          setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
          setSelectedTags([...selectedTags, tag]);
        }
      }}
    >
      {tag}
    </ShadcnUI.Badge>
  ))}
</div>`,
  };

  return (
    <div className="p-8 space-y-12">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Search Bar</h2>
        <div className="space-y-4">
          <ShadcnUI.Input
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-full max-w-sm"
          />
          <ShadcnUI.Collapsible>
            <ShadcnUI.CollapsibleTrigger asChild>
              <button className="text-sm text-blue-500 hover:underline">
                View Code
              </button>
            </ShadcnUI.CollapsibleTrigger>
            <ShadcnUI.CollapsibleContent>
              <pre className="mt-2 rounded-md bg-gray-100 p-4">
                <code>{sampleCode.searchBar}</code>
              </pre>
            </ShadcnUI.CollapsibleContent>
          </ShadcnUI.Collapsible>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Search with Auto-Suggestions</h2>
        <div className="space-y-4">
          <ShadcnUI.Command>
            <ShadcnUI.CommandInput placeholder="Type to search..." />
            <ShadcnUI.CommandList>
              <ShadcnUI.CommandGroup heading="Suggestions">
                {searchSuggestions.map((suggestion) => (
                  <ShadcnUI.CommandItem
                    key={suggestion}
                    onSelect={() => setSearchValue(suggestion)}
                  >
                    {suggestion}
                  </ShadcnUI.CommandItem>
                ))}
              </ShadcnUI.CommandGroup>
            </ShadcnUI.CommandList>
          </ShadcnUI.Command>
          <ShadcnUI.Collapsible>
            <ShadcnUI.CollapsibleTrigger asChild>
              <button className="text-sm text-blue-500 hover:underline">
                View Code
              </button>
            </ShadcnUI.CollapsibleTrigger>
            <ShadcnUI.CollapsibleContent>
              <pre className="mt-2 rounded-md bg-gray-100 p-4">
                <code>{sampleCode.autoSuggest}</code>
              </pre>
            </ShadcnUI.CollapsibleContent>
          </ShadcnUI.Collapsible>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Filter Sidebar</h2>
        <div className="space-y-4">
          <ShadcnUI.Sheet>
            <ShadcnUI.SheetTrigger asChild>
              <ShadcnUI.Button variant="outline">Filters</ShadcnUI.Button>
            </ShadcnUI.SheetTrigger>
            <ShadcnUI.SheetContent>
              <ShadcnUI.SheetHeader>
                <ShadcnUI.SheetTitle>Filters</ShadcnUI.SheetTitle>
                <ShadcnUI.SheetDescription>
                  Apply filters to narrow results
                </ShadcnUI.SheetDescription>
              </ShadcnUI.SheetHeader>
              <div className="grid gap-4 py-4">
                <div>
                  <h4 className="mb-2 text-sm font-medium">Categories</h4>
                  {["Frontend", "Backend", "DevOps"].map((item) => (
                    <div key={item} className="flex items-center space-x-2">
                      <ShadcnUI.Checkbox
                        checked={selectedItems.includes(item)}
                        onCheckedChange={(checked) => {
                          if (checked) {
                            setSelectedItems([...selectedItems, item]);
                          } else {
                            setSelectedItems(
                              selectedItems.filter((i) => i !== item)
                            );
                          }
                        }}
                      />
                      <label>{item}</label>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="mb-2 text-sm font-medium">Price Range</h4>
                  <ShadcnUI.Slider
                    min={0}
                    max={100}
                    value={priceRange}
                    onValueChange={setPriceRange}
                  />
                </div>
              </div>
              <ShadcnUI.SheetFooter>
                <ShadcnUI.Button
                  variant="outline"
                  onClick={() => setSelectedItems([])}
                >
                  Reset
                </ShadcnUI.Button>
                <ShadcnUI.Button onClick={() => setSidebarOpen(false)}>
                  Apply
                </ShadcnUI.Button>
              </ShadcnUI.SheetFooter>
            </ShadcnUI.SheetContent>
          </ShadcnUI.Sheet>
          <ShadcnUI.Collapsible>
            <ShadcnUI.CollapsibleTrigger asChild>
              <button className="text-sm text-blue-500 hover:underline">
                View Code
              </button>
            </ShadcnUI.CollapsibleTrigger>
            <ShadcnUI.CollapsibleContent>
              <pre className="mt-2 rounded-md bg-gray-100 p-4">
                <code>{sampleCode.filterSidebar}</code>
              </pre>
            </ShadcnUI.CollapsibleContent>
          </ShadcnUI.Collapsible>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Dropdown Filter</h2>
        <div className="space-y-4">
          <ShadcnUI.Select
            value={selectedValue}
            onValueChange={setSelectedValue}
          >
            <ShadcnUI.SelectTrigger className="w-[180px]">
              <ShadcnUI.SelectValue placeholder="Select category" />
            </ShadcnUI.SelectTrigger>
            <ShadcnUI.SelectContent>
              <ShadcnUI.SelectItem value="frontend">
                Frontend
              </ShadcnUI.SelectItem>
              <ShadcnUI.SelectItem value="backend">Backend</ShadcnUI.SelectItem>
              <ShadcnUI.SelectItem value="mobile">Mobile</ShadcnUI.SelectItem>
              <ShadcnUI.SelectItem value="devops">DevOps</ShadcnUI.SelectItem>
            </ShadcnUI.SelectContent>
          </ShadcnUI.Select>
          <ShadcnUI.Collapsible>
            <ShadcnUI.CollapsibleTrigger asChild>
              <button className="text-sm text-blue-500 hover:underline">
                View Code
              </button>
            </ShadcnUI.CollapsibleTrigger>
            <ShadcnUI.CollapsibleContent>
              <pre className="mt-2 rounded-md bg-gray-100 p-4">
                <code>{sampleCode.dropdown}</code>
              </pre>
            </ShadcnUI.CollapsibleContent>
          </ShadcnUI.Collapsible>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Tag-Based Filtering</h2>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {filterTags.map((tag) => (
              <ShadcnUI.Badge
                key={tag}
                variant={selectedTags.includes(tag) ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => {
                  if (selectedTags.includes(tag)) {
                    setSelectedTags(selectedTags.filter((t) => t !== tag));
                  } else {
                    setSelectedTags([...selectedTags, tag]);
                  }
                }}
              >
                {tag}
              </ShadcnUI.Badge>
            ))}
          </div>
          <ShadcnUI.Collapsible>
            <ShadcnUI.CollapsibleTrigger asChild>
              <button className="text-sm text-blue-500 hover:underline">
                View Code
              </button>
            </ShadcnUI.CollapsibleTrigger>
            <ShadcnUI.CollapsibleContent>
              <pre className="mt-2 rounded-md bg-gray-100 p-4">
                <code>{sampleCode.tags}</code>
              </pre>
            </ShadcnUI.CollapsibleContent>
          </ShadcnUI.Collapsible>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;
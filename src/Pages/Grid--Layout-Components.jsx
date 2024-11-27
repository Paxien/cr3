"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedCode, setSelectedCode] = React.useState(null);

  const components = [
    {
      title: "Grid System",
      description: "12-column responsive grid layout",
      component: (
        <div className="grid grid-cols-12 gap-4">
          {[...Array.from({ length: 12 })].map((_, i) => (
            <div key={i} className="bg-gray-200 p-4 rounded">
              <p className="text-center">{i + 1}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="grid grid-cols-12 gap-4">
  {[...Array.from({length: 12})].map((_, i) => (
    <div key={i} className="bg-gray-200 p-4 rounded">
      <p className="text-center">{i + 1}</p>
    </div>
  ))}
</div>`,
    },
    {
      title: "Flexbox Container",
      description: "Flexible box layout with adaptive design",
      component: (
        <div className="flex flex-wrap gap-4">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex-1 min-w-[200px] bg-gray-200 p-4 rounded"
            >
              <p className="text-center">Flex Item {i}</p>
            </div>
          ))}
        </div>
      ),
      code: `<div className="flex flex-wrap gap-4">
  {[1,2,3].map(i => (
    <div key={i} className="flex-1 min-w-[200px] bg-gray-200 p-4 rounded">
      <p className="text-center">Flex Item {i}</p>
    </div>
  ))}
</div>`,
    },
    {
      title: "Container",
      description: "Wrapper with max width content",
      component: (
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gray-200 p-4 rounded">
            <p>Container Content</p>
          </div>
        </div>
      ),
      code: `<div className="max-w-6xl mx-auto px-4">
  <div className="bg-gray-200 p-4 rounded">
    <p>Container Content</p>
  </div>
</div>`,
    },
    {
      title: "Spacer",
      description: "Add spacing between elements",
      component: (
        <div>
          <div className="bg-blue-200 p-4 rounded">Element 1</div>
          <div className="h-8" />
          <div className="bg-blue-200 p-4 rounded">Element 2</div>
        </div>
      ),
      code: `<div>
  <div className="bg-blue-200 p-4 rounded">Element 1</div>
  <div className="h-8"/>
  <div className="bg-blue-200 p-4 rounded">Element 2</div>
</div>`,
    },
    {
      title: "Row & Columns",
      description: "Horizontal layout with columns",
      component: (
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 bg-gray-200 p-4 rounded">Column 1</div>
          <div className="flex-1 bg-gray-200 p-4 rounded">Column 2</div>
          <div className="flex-1 bg-gray-200 p-4 rounded">Column 3</div>
        </div>
      ),
      code: `<div className="flex flex-col md:flex-row gap-4">
  <div className="flex-1 bg-gray-200 p-4 rounded">Column 1</div>
  <div className="flex-1 bg-gray-200 p-4 rounded">Column 2</div>
  <div className="flex-1 bg-gray-200 p-4 rounded">Column 3</div>
</div>`,
    },
    {
      title: "Stack",
      description: "Vertical stack layout",
      component: (
        <div className="space-y-4">
          <ShadcnUI.Card className="p-4">
            <h3 className="text-lg font-medium">Stack Item 1</h3>
            <p>Content for stack item 1</p>
          </ShadcnUI.Card>
          <ShadcnUI.Card className="p-4">
            <h3 className="text-lg font-medium">Stack Item 2</h3>
            <p>Content for stack item 2</p>
          </ShadcnUI.Card>
          <ShadcnUI.Card className="p-4">
            <h3 className="text-lg font-medium">Stack Item 3</h3>
            <p>Content for stack item 3</p>
          </ShadcnUI.Card>
        </div>
      ),
      code: `<div className="space-y-4">
  <ShadcnUI.Card className="p-4">
    <h3 className="text-lg font-medium">Stack Item 1</h3>
    <p>Content for stack item 1</p>
  </ShadcnUI.Card>
  <ShadcnUI.Card className="p-4">
    <h3 className="text-lg font-medium">Stack Item 2</h3>
    <p>Content for stack item 2</p>
  </ShadcnUI.Card>
  <ShadcnUI.Card className="p-4">
    <h3 className="text-lg font-medium">Stack Item 3</h3>
    <p>Content for stack item 3</p>
  </ShadcnUI.Card>
</div>`,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold">Display Components Showcase</h1>
          <p className="mt-4 text-gray-600">
            A collection of layout and display components built with ShadcnUI
          </p>
        </div>

        <div className="space-y-12">
          {components.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <div className="mb-4">
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="text-gray-600">{item.description}</p>
                  </div>

                  <div className="p-4 border rounded-lg bg-gray-50">
                    {item.component}
                  </div>
                </div>

                <div className="flex-1">
                  <ShadcnUI.Card className="relative">
                    <div className="absolute top-2 right-2">
                      <ShadcnUI.Button
                        variant="outline"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(item.code);
                          const toast = ShadcnUI.useToast();
                          toast({
                            title: "Copied to clipboard",
                            description: "You can now paste the code anywhere",
                          });
                        }}
                      >
                        <i className="fas fa-copy mr-2"></i>
                        Copy
                      </ShadcnUI.Button>
                    </div>
                    <pre className="p-4 overflow-auto max-h-[300px]">
                      <code className="text-sm">{item.code}</code>
                    </pre>
                  </ShadcnUI.Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
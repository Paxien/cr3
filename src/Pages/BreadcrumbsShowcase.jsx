"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedCode, setSelectedCode] = React.useState(null);

  const codeSamples = {
    simple: `<ShadcnUI.CustomBreadcrumb
  homeLink="/"
  dropdownMenuItems={[]}
  componentLink="/products"
  componentName="Products"
/>`,

    interactive: `<ShadcnUI.CustomBreadcrumb
  homeLink="/"
  dropdownMenuItems={[
    { label: "Categories", onClick: () => console.log("Categories clicked") },
    { label: "Products", onClick: () => console.log("Products clicked") },
    { label: "Electronics", onClick: () => console.log("Electronics clicked") }
  ]}
  componentLink="/electronics/laptops"
  componentName="Laptops"
/>`,

    dynamic: `<ShadcnUI.CustomBreadcrumb
  homeLink="/"
  dropdownMenuItems={[
    { label: "Categories", onClick: () => console.log("Categories clicked") },
    { label: "Electronics", onClick: () => console.log("Electronics clicked") },
    { label: "Laptops", onClick: () => console.log("Laptops clicked") },
    { label: "Gaming", onClick: () => console.log("Gaming clicked") }
  ]}
  componentLink="/electronics/laptops/gaming"
  componentName="Gaming Laptops"
/>`,

    scrollable: `<div className="max-w-[300px] overflow-x-auto">
  <ShadcnUI.CustomBreadcrumb
    homeLink="/"
    dropdownMenuItems={[
      { label: "Categories", onClick: () => console.log("Categories clicked") },
      { label: "Electronics", onClick: () => console.log("Electronics clicked") },
      { label: "Laptops", onClick: () => console.log("Laptops clicked") },
      { label: "Gaming", onClick: () => console.log("Gaming clicked") },
      { label: "ASUS", onClick: () => console.log("ASUS clicked") },
      { label: "ROG", onClick: () => console.log("ROG clicked") }
    ]}
    componentLink="/electronics/laptops/gaming/asus/rog"
    componentName="ASUS ROG Laptops"
  />
</div>`,
  };

  return (
    <div className="w-full p-8 space-y-8 font-roboto">
      <h1 className="text-3xl font-bold mb-8">Breadcrumb Examples</h1>

      <div className="space-y-12">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Simple Breadcrumb</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCode("simple")}
            >
              View Code
            </ShadcnUI.Button>
          </div>
          <div className="p-4 border rounded-lg">
            <ShadcnUI.CustomBreadcrumb
              homeLink="/"
              dropdownMenuItems={[]}
              componentLink="/products"
              componentName="Products"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Interactive Breadcrumb</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCode("interactive")}
            >
              View Code
            </ShadcnUI.Button>
          </div>
          <div className="p-4 border rounded-lg">
            <ShadcnUI.CustomBreadcrumb
              homeLink="/"
              dropdownMenuItems={[
                {
                  label: "Categories",
                  onClick: () => console.log("Categories clicked"),
                },
                {
                  label: "Products",
                  onClick: () => console.log("Products clicked"),
                },
                {
                  label: "Electronics",
                  onClick: () => console.log("Electronics clicked"),
                },
              ]}
              componentLink="/electronics/laptops"
              componentName="Laptops"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Dynamic Breadcrumb</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCode("dynamic")}
            >
              View Code
            </ShadcnUI.Button>
          </div>
          <div className="p-4 border rounded-lg">
            <ShadcnUI.CustomBreadcrumb
              homeLink="/"
              dropdownMenuItems={[
                {
                  label: "Categories",
                  onClick: () => console.log("Categories clicked"),
                },
                {
                  label: "Electronics",
                  onClick: () => console.log("Electronics clicked"),
                },
                {
                  label: "Laptops",
                  onClick: () => console.log("Laptops clicked"),
                },
                {
                  label: "Gaming",
                  onClick: () => console.log("Gaming clicked"),
                },
              ]}
              componentLink="/electronics/laptops/gaming"
              componentName="Gaming Laptops"
            />
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Scrollable Breadcrumb</h2>
            <ShadcnUI.Button
              variant="outline"
              size="sm"
              onClick={() => setSelectedCode("scrollable")}
            >
              View Code
            </ShadcnUI.Button>
          </div>
          <div className="p-4 border rounded-lg">
            <div className="max-w-[300px] overflow-x-auto">
              <ShadcnUI.CustomBreadcrumb
                homeLink="/"
                dropdownMenuItems={[
                  {
                    label: "Categories",
                    onClick: () => console.log("Categories clicked"),
                  },
                  {
                    label: "Electronics",
                    onClick: () => console.log("Electronics clicked"),
                  },
                  {
                    label: "Laptops",
                    onClick: () => console.log("Laptops clicked"),
                  },
                  {
                    label: "Gaming",
                    onClick: () => console.log("Gaming clicked"),
                  },
                  { label: "ASUS", onClick: () => console.log("ASUS clicked") },
                  { label: "ROG", onClick: () => console.log("ROG clicked") },
                ]}
                componentLink="/electronics/laptops/gaming/asus/rog"
                componentName="ASUS ROG Laptops"
              />
            </div>
          </div>
        </div>
      </div>

      {selectedCode && (
        <ShadcnUI.CustomDialog
          open={!!selectedCode}
          onOpenChange={() => setSelectedCode(null)}
          triggerButtonText=""
          title="Component Code"
          description="Copy the code below to use this component"
          footer={
            <div className="flex justify-end">
              <ShadcnUI.Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(codeSamples[selectedCode]);
                  setSelectedCode(null);
                }}
              >
                Copy Code
              </ShadcnUI.Button>
            </div>
          }
        >
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{codeSamples[selectedCode]}</code>
          </pre>
        </ShadcnUI.CustomDialog>
      )}
    </div>
  );
}

export default MainComponent;
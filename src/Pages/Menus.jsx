"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [copied, setCopied] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const hamburgerCode = `<ShadcnUI.CustomSheet 
  title="Navigation" 
  description="Main navigation menu" 
  buttonLabel="☰"
  footer={<button>Close Menu</button>}
>
  <div className="flex flex-col gap-4">
    <a href="#" className="px-4 py-2 hover:bg-gray-100">Home</a>
    <a href="#" className="px-4 py-2 hover:bg-gray-100">About</a>
    <a href="#" className="px-4 py-2 hover:bg-gray-100">Services</a>
    <a href="#" className="px-4 py-2 hover:bg-gray-100">Contact</a>
  </div>
</ShadcnUI.CustomSheet>`;

  const dropdownCode = `<ShadcnUI.CustomDropdown
  triggerLabel="Dropdown Menu" 
  menuLabel="Navigation"
  items={[
    {content: "Profile", label: "Profile", onSelect: () => {}},
    {content: "Settings", label: "Settings", onSelect: () => {}},
    {content: "Help", label: "Help", onSelect: () => {}}
  ]}
/>`;

  const megaMenuCode = `<ShadcnUI.CustomNavigation sections={[
  {
    trigger: "Products",
    items: [
      {
        href: "/electronics",
        title: "Electronics",
        description: "Latest gadgets and tech",
      },
      {
        href: "/clothing",
        title: "Clothing",
        description: "Fashion for everyone",
      },
      {
        href: "/home",
        title: "Home & Garden",
        description: "Everything for your home",
      }
    ]
  },
  {
    trigger: "Services",
    items: [
      {
        href: "/delivery",
        title: "Delivery",
        description: "Fast shipping options",
      },
      {
        href: "/support",
        title: "Support",
        description: "24/7 customer service",
      }
    ]
  }
]} />`;

  const contextMenuCode = `<ShadcnUI.CustomContextMenu
  triggerLabel="Right Click Here"
  items={[
    {
      label: "Edit",
      onSelect: () => {},
      subItems: [
        {label: "Cut", shortcut: "⌘X", onSelect: () => {}},
        {label: "Copy", shortcut: "⌘C", onSelect: () => {}},
        {label: "Paste", shortcut: "⌘V", onSelect: () => {}}
      ]
    },
    {
      label: "View",
      onSelect: () => {},
      subItems: [
        {label: "Zoom In", shortcut: "⌘+", onSelect: () => {}},
        {label: "Zoom Out", shortcut: "⌘-", onSelect: () => {}}
      ]
    }
  ]}
/>`;

  const accordionCode = `<ShadcnUI.CustomAccordion
  type="multiple"
  data={[
    {
      value: "item-1",
      trigger: "Section 1",
      content: "Content for section 1"
    },
    {
      value: "item-2", 
      trigger: "Section 2",
      content: "Content for section 2"
    },
    {
      value: "item-3",
      trigger: "Section 3", 
      content: "Content for section 3"
    }
  ]}
/>`;

  return (
    <div className="container mx-auto p-8 space-y-12">
      <h1 className="text-4xl font-bold mb-8">Menu Components Showcase</h1>

      {/* Hamburger Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Hamburger Menu</h2>
        <div className="flex flex-col gap-4">
          <ShadcnUI.CustomSheet
            title="Navigation"
            description="Main navigation menu"
            buttonLabel="☰"
            footer={<button>Close Menu</button>}
          >
            <div className="flex flex-col gap-4">
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Home
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                About
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Services
              </a>
              <a href="#" className="px-4 py-2 hover:bg-gray-100">
                Contact
              </a>
            </div>
          </ShadcnUI.CustomSheet>

          <ShadcnUI.CustomDialog
            triggerButtonText="View Code"
            title="Hamburger Menu Code"
            description="Copy the code below to use this component"
            footer={
              <button onClick={() => copyCode(hamburgerCode)}>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            }
          >
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{hamburgerCode}</code>
            </pre>
          </ShadcnUI.CustomDialog>
        </div>
      </section>

      {/* Dropdown Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Dropdown Menu</h2>
        <div className="flex flex-col gap-4">
          <ShadcnUI.CustomDropdown
            triggerLabel="Dropdown Menu"
            menuLabel="Navigation"
            items={[
              { content: "Profile", label: "Profile", onSelect: () => {} },
              { content: "Settings", label: "Settings", onSelect: () => {} },
              { content: "Help", label: "Help", onSelect: () => {} },
            ]}
          />

          <ShadcnUI.CustomDialog
            triggerButtonText="View Code"
            title="Dropdown Menu Code"
            description="Copy the code below to use this component"
            footer={
              <button onClick={() => copyCode(dropdownCode)}>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            }
          >
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{dropdownCode}</code>
            </pre>
          </ShadcnUI.CustomDialog>
        </div>
      </section>

      {/* Mega Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Mega Menu</h2>
        <div className="flex flex-col gap-4">
          <ShadcnUI.CustomNavigation
            sections={[
              {
                trigger: "Products",
                items: [
                  {
                    href: "/electronics",
                    title: "Electronics",
                    description: "Latest gadgets and tech",
                  },
                  {
                    href: "/clothing",
                    title: "Clothing",
                    description: "Fashion for everyone",
                  },
                  {
                    href: "/home",
                    title: "Home & Garden",
                    description: "Everything for your home",
                  },
                ],
              },
              {
                trigger: "Services",
                items: [
                  {
                    href: "/delivery",
                    title: "Delivery",
                    description: "Fast shipping options",
                  },
                  {
                    href: "/support",
                    title: "Support",
                    description: "24/7 customer service",
                  },
                ],
              },
            ]}
          />

          <ShadcnUI.CustomDialog
            triggerButtonText="View Code"
            title="Mega Menu Code"
            description="Copy the code below to use this component"
            footer={
              <button onClick={() => copyCode(megaMenuCode)}>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            }
          >
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{megaMenuCode}</code>
            </pre>
          </ShadcnUI.CustomDialog>
        </div>
      </section>

      {/* Context Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Context Menu</h2>
        <div className="flex flex-col gap-4">
          <ShadcnUI.CustomContextMenu
            triggerLabel="Right Click Here"
            items={[
              {
                label: "Edit",
                onSelect: () => {},
                subItems: [
                  { label: "Cut", shortcut: "⌘X", onSelect: () => {} },
                  { label: "Copy", shortcut: "⌘C", onSelect: () => {} },
                  { label: "Paste", shortcut: "⌘V", onSelect: () => {} },
                ],
              },
              {
                label: "View",
                onSelect: () => {},
                subItems: [
                  { label: "Zoom In", shortcut: "⌘+", onSelect: () => {} },
                  { label: "Zoom Out", shortcut: "⌘-", onSelect: () => {} },
                ],
              },
            ]}
          />

          <ShadcnUI.CustomDialog
            triggerButtonText="View Code"
            title="Context Menu Code"
            description="Copy the code below to use this component"
            footer={
              <button onClick={() => copyCode(contextMenuCode)}>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            }
          >
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{contextMenuCode}</code>
            </pre>
          </ShadcnUI.CustomDialog>
        </div>
      </section>

      {/* Accordion Menu */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accordion Menu</h2>
        <div className="flex flex-col gap-4">
          <ShadcnUI.CustomAccordion
            type="multiple"
            data={[
              {
                value: "item-1",
                trigger: "Section 1",
                content: "Content for section 1",
              },
              {
                value: "item-2",
                trigger: "Section 2",
                content: "Content for section 2",
              },
              {
                value: "item-3",
                trigger: "Section 3",
                content: "Content for section 3",
              },
            ]}
          />

          <ShadcnUI.CustomDialog
            triggerButtonText="View Code"
            title="Accordion Menu Code"
            description="Copy the code below to use this component"
            footer={
              <button onClick={() => copyCode(accordionCode)}>
                {copied ? "Copied!" : "Copy Code"}
              </button>
            }
          >
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{accordionCode}</code>
            </pre>
          </ShadcnUI.CustomDialog>
        </div>
      </section>
    </div>
  );
}

export default MainComponent;
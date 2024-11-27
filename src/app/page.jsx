"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedChart, setSelectedChart] = React.useState("bar");

  const badgeData = [
    { label: "New", variant: "default" },
    { label: "Priority", variant: "destructive" },
    { label: "Bug", variant: "outline" },
    { label: "Enhancement", variant: "secondary" },
  ];

  const cardData = [
    {
      title: "Advanced Analytics",
      description:
        "Get a deeper understanding of your data with our advanced analytics tools.",
      footer: "Learn More →",
    },
    {
      title: "Cloud Storage",
      description:
        "Secure and scalable cloud storage solutions for your enterprise needs.",
      footer: "Get Started →",
    },
    {
      title: "API Integration",
      description:
        "Seamlessly connect your applications with our robust API integration.",
      footer: "View Docs →",
    },
  ];

  const accordionData = [
    {
      value: "security",
      trigger: "Security Features",
      content:
        "Our platform uses enterprise-grade encryption and security protocols to keep your data safe.",
    },
    {
      value: "scalability",
      trigger: "Scalability",
      content:
        "Built to scale with your business needs, from startups to enterprise organizations.",
    },
    {
      value: "support",
      trigger: "Customer Support",
      content:
        "24/7 dedicated support team to help you with any issues or questions.",
    },
  ];

  const tabData = [
    {
      label: "Overview",
      value: "overview",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Platform Overview</h3>
          <p>
            A comprehensive suite of tools designed to enhance your workflow.
          </p>
        </div>
      ),
    },
    {
      label: "Features",
      value: "features",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Key Features</h3>
          <ul className="list-disc pl-4">
            <li>Advanced Analytics</li>
            <li>Cloud Storage</li>
            <li>API Integration</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Pricing",
      value: "pricing",
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Pricing Plans</h3>
          <p>Flexible pricing options to suit your needs.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Badge Examples</h2>
        <div className="flex flex-wrap gap-2">
          {badgeData.map((badge, index) => (
            <ShadcnUI.Badge key={index} variant={badge.variant}>
              {badge.label}
            </ShadcnUI.Badge>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Card Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card text-card-foreground shadow-sm p-6"
            >
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">
                {card.description}
              </p>
              <ShadcnUI.Button variant="outline" size="sm">
                {card.footer}
              </ShadcnUI.Button>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Accordion Example</h2>
        <ShadcnUI.CustomAccordion type="single" data={accordionData} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Tabs Example</h2>
        <ShadcnUI.CustomTabs defaultValue="overview" tabs={tabData} />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Navigation Tree Example</h2>
        <ShadcnUI.CustomNavigation
          sections={[
            {
              trigger: "Documentation",
              items: [
                {
                  href: "/docs/introduction",
                  title: "Introduction",
                  description: "Getting started with our platform",
                },
                {
                  href: "/docs/installation",
                  title: "Installation",
                  description: "Step-by-step installation guide",
                },
                {
                  href: "/docs/configuration",
                  title: "Configuration",
                  description: "Configure your environment",
                },
              ],
            },
            {
              trigger: "Components",
              items: [
                {
                  href: "/components/buttons",
                  title: "Buttons",
                  description: "Interactive button components",
                },
                {
                  href: "/components/forms",
                  title: "Forms",
                  description: "Form elements and validation",
                },
                {
                  href: "/components/layouts",
                  title: "Layouts",
                  description: "Page layout components",
                },
              ],
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Chart Type Selection</h2>
        <ShadcnUI.CustomSelect
          placeholder="Select chart type"
          value={selectedChart}
          onValueChange={setSelectedChart}
          groups={[
            {
              items: [
                { value: "bar", label: "Bar Chart" },
                { value: "line", label: "Line Chart" },
                { value: "pie", label: "Pie Chart" },
              ],
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Context Menu Example</h2>
        <ShadcnUI.CustomContextMenu
          triggerLabel="Right click for options"
          items={[
            {
              label: "File",
              onSelect: console.log,
              subItems: [
                {
                  label: "New",
                  shortcut: "⌘N",
                  onSelect: console.log,
                },
                {
                  label: "Save",
                  shortcut: "⌘S",
                  onSelect: console.log,
                },
              ],
            },
            {
              label: "Edit",
              onSelect: console.log,
              subItems: [
                {
                  label: "Cut",
                  shortcut: "⌘X",
                  onSelect: console.log,
                },
                {
                  label: "Copy",
                  shortcut: "⌘C",
                  onSelect: console.log,
                },
              ],
            },
          ]}
        />
      </section>
    </div>
  );
}

export default MainComponent;
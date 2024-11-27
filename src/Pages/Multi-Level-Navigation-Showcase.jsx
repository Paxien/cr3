"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [activeTab, setActiveTab] = React.useState("multi-level");
  const code = {
    multiLevel: `<ShadcnUI.CustomNavigation sections={[
  {
    trigger: 'Development',
    items: [
      {
        href: '/frontend',
        title: 'Frontend',
        description: 'UI development with React & Tailwind',
        rowSpan: 2
      },
      {
        href: '/backend', 
        title: 'Backend',
        description: 'Server-side development'
      },
      {
        href: '/databases',
        title: 'Databases',
        description: 'Data storage and retrieval'
      }
    ]
  },
  {
    trigger: 'Design',
    items: [
      {
        href: '/components',
        title: 'Components',
        description: 'Reusable UI components'
      }
    ]
  }
]}/>`,
    dropdown: `<ShadcnUI.CustomDropdown
  triggerLabel="Navigation Menu" 
  items={[
    {
      content: <span>🏠</span>,
      label: 'Home',
      onSelect: () => {},
      subItems: [
        {
          content: <span>📱</span>,
          label: 'Mobile Apps',
          onSelect: () => {},
          subItems: [
            {
              content: <span>🤖</span>,
              label: 'Android',
              onSelect: () => {}
            },
            {
              content: <span>🍎</span>,
              label: 'iOS',
              onSelect: () => {}
            }
          ]
        }
      ]
    },
    {
      content: <span>⚙️</span>,
      label: 'Settings',
      onSelect: () => {},
      subItems: [
        {
          content: <span>👤</span>,
          label: 'Account',
          onSelect: () => {}
        },
        {
          content: <span>🔒</span>,
          label: 'Security',
          onSelect: () => {}
        }
      ]
    }
  ]}
/>`,
    treeNav: `<ShadcnUI.Accordion type="multiple" data={[
  {
    value: "section1",
    trigger: "Products",
    content: <div className="pl-4">
      <ShadcnUI.Accordion type="multiple" data={[
        {
          value: "hardware",
          trigger: "Hardware",
          content: <div className="pl-4">
            <p>Laptops</p>
            <p>Desktops</p>
            <p>Tablets</p>
          </div>
        },
        {
          value: "software", 
          trigger: "Software",
          content: <div className="pl-4">
            <p>Operating Systems</p>
            <p>Applications</p>
          </div>
        }
      ]}/>
    </div>
  },
  {
    value: "section2",
    trigger: "Services",
    content: <div className="pl-4">
      <ShadcnUI.Accordion type="multiple" data={[
        {
          value: "cloud",
          trigger: "Cloud Services",
          content: <div className="pl-4">
            <p>Storage</p>
            <p>Computing</p>
          </div>
        },
        {
          value: "consulting",
          trigger: "Consulting",
          content: <div className="pl-4">
            <p>Business</p>
            <p>Technical</p>
          </div>
        }
      ]}/>
    </div>
  }
]}/>`,
  };

  return (
    <div className="max-w-[1200px] mx-auto p-4">
      <ShadcnUI.CustomTabs
        defaultValue="multi-level"
        className="w-full"
        tabs={[
          {
            label: "Multi-Level Navigation",
            value: "multi-level",
            content: (
              <div className="flex gap-8 mt-4">
                <div className="w-1/2">
                  <ShadcnUI.CustomNavigation
                    sections={[
                      {
                        trigger: "Development",
                        items: [
                          {
                            href: "/frontend",
                            title: "Frontend",
                            description: "UI development with React & Tailwind",
                            rowSpan: 2,
                          },
                          {
                            href: "/backend",
                            title: "Backend",
                            description: "Server-side development",
                          },
                          {
                            href: "/databases",
                            title: "Databases",
                            description: "Data storage and retrieval",
                          },
                        ],
                      },
                      {
                        trigger: "Design",
                        items: [
                          {
                            href: "/components",
                            title: "Components",
                            description: "Reusable UI components",
                          },
                        ],
                      },
                    ]}
                  />
                </div>
                <div className="w-1/2 bg-slate-100 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">
                    {code.multiLevel}
                  </pre>
                  <ShadcnUI.Button
                    className="mt-2"
                    onClick={() =>
                      navigator.clipboard.writeText(code.multiLevel)
                    }
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Nested Dropdowns",
            value: "dropdowns",
            content: (
              <div className="flex gap-8 mt-4">
                <div className="w-1/2">
                  <ShadcnUI.CustomDropdown
                    triggerLabel="Navigation Menu"
                    items={[
                      {
                        content: <span>🏠</span>,
                        label: "Home",
                        onSelect: () => {},
                        subItems: [
                          {
                            content: <span>📱</span>,
                            label: "Mobile Apps",
                            onSelect: () => {},
                            subItems: [
                              {
                                content: <span>🤖</span>,
                                label: "Android",
                                onSelect: () => {},
                              },
                              {
                                content: <span>🍎</span>,
                                label: "iOS",
                                onSelect: () => {},
                              },
                            ],
                          },
                        ],
                      },
                      {
                        content: <span>⚙️</span>,
                        label: "Settings",
                        onSelect: () => {},
                        subItems: [
                          {
                            content: <span>👤</span>,
                            label: "Account",
                            onSelect: () => {},
                          },
                          {
                            content: <span>🔒</span>,
                            label: "Security",
                            onSelect: () => {},
                          },
                        ],
                      },
                    ]}
                  />
                </div>
                <div className="w-1/2 bg-slate-100 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">
                    {code.dropdown}
                  </pre>
                  <ShadcnUI.Button
                    className="mt-2"
                    onClick={() => navigator.clipboard.writeText(code.dropdown)}
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Tree Navigation",
            value: "tree",
            content: (
              <div className="flex gap-8 mt-4">
                <div className="w-1/2">
                  <ShadcnUI.Accordion
                    type="multiple"
                    data={[
                      {
                        value: "section1",
                        trigger: "Products",
                        content: (
                          <div className="pl-4">
                            <ShadcnUI.Accordion
                              type="multiple"
                              data={[
                                {
                                  value: "hardware",
                                  trigger: "Hardware",
                                  content: (
                                    <div className="pl-4">
                                      <p>Laptops</p>
                                      <p>Desktops</p>
                                      <p>Tablets</p>
                                    </div>
                                  ),
                                },
                                {
                                  value: "software",
                                  trigger: "Software",
                                  content: (
                                    <div className="pl-4">
                                      <p>Operating Systems</p>
                                      <p>Applications</p>
                                    </div>
                                  ),
                                },
                              ]}
                            />
                          </div>
                        ),
                      },
                      {
                        value: "section2",
                        trigger: "Services",
                        content: (
                          <div className="pl-4">
                            <ShadcnUI.Accordion
                              type="multiple"
                              data={[
                                {
                                  value: "cloud",
                                  trigger: "Cloud Services",
                                  content: (
                                    <div className="pl-4">
                                      <p>Storage</p>
                                      <p>Computing</p>
                                    </div>
                                  ),
                                },
                                {
                                  value: "consulting",
                                  trigger: "Consulting",
                                  content: (
                                    <div className="pl-4">
                                      <p>Business</p>
                                      <p>Technical</p>
                                    </div>
                                  ),
                                },
                              ]}
                            />
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <div className="w-1/2 bg-slate-100 p-4 rounded-lg">
                  <pre className="whitespace-pre-wrap text-sm">
                    {code.treeNav}
                  </pre>
                  <ShadcnUI.Button
                    className="mt-2"
                    onClick={() => navigator.clipboard.writeText(code.treeNav)}
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default MainComponent;
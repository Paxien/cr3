"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedLayout, setSelectedLayout] = React.useState("landing");
  const [copied, setCopied] = React.useState("");

  const layoutExamples = {
    landing: {
      title: "Landing Page Layout",
      description: "A clean landing page focused on conversions",
      code: `
<div className="min-h-screen">
  <header className="border-b">
    <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="text-2xl font-bold">Logo</div>
      <ShadcnUI.CustomNavigation 
        sections={[
          {
            trigger: 'Menu',
            items: [
              {
                href: '#features',
                title: 'Features',
                description: 'Check out our amazing features'
              },
              {
                href: '#pricing',
                title: 'Pricing', 
                description: 'View our pricing plans'
              },
              {
                href: '#contact',
                title: 'Contact',
                description: 'Get in touch with us'
              }
            ]
          }
        ]}
      />
    </nav>
  </header>

  <main className="container mx-auto px-4 py-16">
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-5xl font-bold mb-6">Your Amazing Product</h1>
      <p className="text-xl mb-8">The best solution for your needs</p>
      <ShadcnUI.Button size="lg">Get Started</ShadcnUI.Button>
    </div>
  </main>
</div>
`,
      component: (
        <div className="min-h-[600px] border rounded-lg">
          <header className="border-b">
            <nav className="container mx-auto px-4 py-6 flex justify-between items-center">
              <div className="text-2xl font-bold">Logo</div>
              <ShadcnUI.CustomNavigation
                sections={[
                  {
                    trigger: "Menu",
                    items: [
                      {
                        href: "#features",
                        title: "Features",
                        description: "Check out our amazing features",
                      },
                      {
                        href: "#pricing",
                        title: "Pricing",
                        description: "View our pricing plans",
                      },
                      {
                        href: "#contact",
                        title: "Contact",
                        description: "Get in touch with us",
                      },
                    ],
                  },
                ]}
              />
            </nav>
          </header>

          <main className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">Your Amazing Product</h1>
              <p className="text-xl mb-8">The best solution for your needs</p>
              <ShadcnUI.Button size="lg">Get Started</ShadcnUI.Button>
            </div>
          </main>
        </div>
      ),
    },
    dashboard: {
      title: "Dashboard Layout",
      description: "A comprehensive dashboard with sidebar navigation",
      code: `
<div className="grid grid-cols-5 min-h-screen">
  <aside className="col-span-1 border-r p-4">
    <div className="font-bold text-xl mb-6">Dashboard</div>
    <ShadcnUI.CustomAccordion
      type="single"
      data={[
        {
          value: "menu-1",
          trigger: "Analytics",
          content: "View detailed analytics"
        },
        {
          value: "menu-2", 
          trigger: "Reports",
          content: "Generate custom reports"
        },
        {
          value: "menu-3",
          trigger: "Settings",
          content: "Manage your preferences"
        }
      ]}
    />
  </aside>

  <main className="col-span-4 p-6">
    <div className="grid grid-cols-3 gap-4 mb-6">
      <ShadcnUI.CustomCard
        title="Total Users"
        description="1,234"
      />
      <ShadcnUI.CustomCard
        title="Revenue" 
        description="$45,678"
      />
      <ShadcnUI.CustomCard
        title="Active Sessions"
        description="892"
      />
    </div>

    <ShadcnUI.CustomTabs
      defaultValue="overview"
      tabs={[
        {
          label: "Overview",
          value: "overview",
          content: <div className="p-4">Overview content</div>
        },
        {
          label: "Analytics", 
          value: "analytics",
          content: <div className="p-4">Analytics content</div>
        },
        {
          label: "Reports",
          value: "reports", 
          content: <div className="p-4">Reports content</div>
        }
      ]}
    />
  </main>
</div>
`,
      component: (
        <div className="grid grid-cols-5 min-h-[600px] border rounded-lg">
          <aside className="col-span-1 border-r p-4">
            <div className="font-bold text-xl mb-6">Dashboard</div>
            <ShadcnUI.CustomAccordion
              type="single"
              data={[
                {
                  value: "menu-1",
                  trigger: "Analytics",
                  content: "View detailed analytics",
                },
                {
                  value: "menu-2",
                  trigger: "Reports",
                  content: "Generate custom reports",
                },
                {
                  value: "menu-3",
                  trigger: "Settings",
                  content: "Manage your preferences",
                },
              ]}
            />
          </aside>

          <main className="col-span-4 p-6">
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="p-4 border rounded">
                <h3 className="font-bold">Total Users</h3>
                <p className="text-2xl">1,234</p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-bold">Revenue</h3>
                <p className="text-2xl">$45,678</p>
              </div>
              <div className="p-4 border rounded">
                <h3 className="font-bold">Active Sessions</h3>
                <p className="text-2xl">892</p>
              </div>
            </div>

            <ShadcnUI.CustomTabs
              defaultValue="overview"
              tabs={[
                {
                  label: "Overview",
                  value: "overview",
                  content: <div className="p-4">Overview content</div>,
                },
                {
                  label: "Analytics",
                  value: "analytics",
                  content: <div className="p-4">Analytics content</div>,
                },
                {
                  label: "Reports",
                  value: "reports",
                  content: <div className="p-4">Reports content</div>,
                },
              ]}
            />
          </main>
        </div>
      ),
    },
    blog: {
      title: "Blog Layout",
      description: "A blog post layout with sidebar",
      code: `
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-3 gap-8">
    <main className="col-span-2">
      <article>
        <h1 className="text-4xl font-bold mb-4">Blog Post Title</h1>
        <ShadcnUI.Badge className="mb-4">Category</ShadcnUI.Badge>
        <p className="text-lg mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>

      <ShadcnUI.CustomTabs
        defaultValue="comments"
        tabs={[
          {
            label: "Comments",
            value: "comments",
            content: (
              <div className="space-y-4">
                <div className="p-4 border rounded">
                  <div className="font-bold">John Doe</div>
                  <p>Great article!</p>
                </div>
              </div>
            )
          },
          {
            label: "Related",
            value: "related",
            content: (
              <div className="space-y-4">
                <div className="p-4 border rounded">
                  <div className="font-bold">Related Post</div>
                  <p>Check out this related content</p>
                </div>
              </div>
            )
          }
        ]}
      />
    </main>

    <aside className="col-span-1">
      <ShadcnUI.CustomAccordion
        type="single"
        data={[
          {
            value: "recent",
            trigger: "Recent Posts",
            content: "List of recent blog posts"
          },
          {
            value: "categories",
            trigger: "Categories",
            content: "List of blog categories"
          }
        ]}
      />
    </aside>
  </div>
</div>
`,
      component: (
        <div className="container mx-auto px-4 py-8 border rounded-lg">
          <div className="grid grid-cols-3 gap-8">
            <main className="col-span-2">
              <article>
                <h1 className="text-4xl font-bold mb-4">Blog Post Title</h1>
                <ShadcnUI.Badge className="mb-4">Category</ShadcnUI.Badge>
                <p className="text-lg mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </article>

              <ShadcnUI.CustomTabs
                defaultValue="comments"
                tabs={[
                  {
                    label: "Comments",
                    value: "comments",
                    content: (
                      <div className="space-y-4">
                        <div className="p-4 border rounded">
                          <div className="font-bold">John Doe</div>
                          <p>Great article!</p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    label: "Related",
                    value: "related",
                    content: (
                      <div className="space-y-4">
                        <div className="p-4 border rounded">
                          <div className="font-bold">Related Post</div>
                          <p>Check out this related content</p>
                        </div>
                      </div>
                    ),
                  },
                ]}
              />
            </main>

            <aside className="col-span-1">
              <ShadcnUI.CustomAccordion
                type="single"
                data={[
                  {
                    value: "recent",
                    trigger: "Recent Posts",
                    content: "List of recent blog posts",
                  },
                  {
                    value: "categories",
                    trigger: "Categories",
                    content: "List of blog categories",
                  },
                ]}
              />
            </aside>
          </div>
        </div>
      ),
    },
    ecommerce: {
      title: "E-commerce Layout",
      description: "A product listing page with filters",
      code: `
<div className="container mx-auto px-4 py-8">
  <div className="grid grid-cols-4 gap-6">
    <aside className="col-span-1">
      <ShadcnUI.CustomAccordion
        type="single"
        data={[
          {
            value: "categories",
            trigger: "Categories",
            content: "List of product categories"
          },
          {
            value: "filters",
            trigger: "Filters",
            content: "Product filters"
          }
        ]}
      />
    </aside>

    <main className="col-span-3">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <ShadcnUI.CustomSelect
          placeholder="Sort by"
          groups={[
            {
              items: [
                { value: "price-asc", label: "Price: Low to High" },
                { value: "price-desc", label: "Price: High to Low" },
                { value: "newest", label: "Newest First" }
              ]
            }
          ]}
        />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="border rounded p-4">
            <div className="aspect-square bg-gray-200 mb-2"></div>
            <h3 className="font-bold">Product {item}</h3>
            <p className="text-lg font-bold">$99.99</p>
            <ShadcnUI.Button className="w-full mt-2">Add to Cart</ShadcnUI.Button>
          </div>
        ))}
      </div>
    </main>
  </div>
</div>
`,
      component: (
        <div className="container mx-auto px-4 py-8 border rounded-lg">
          <div className="grid grid-cols-4 gap-6">
            <aside className="col-span-1">
              <ShadcnUI.CustomAccordion
                type="single"
                data={[
                  {
                    value: "categories",
                    trigger: "Categories",
                    content: "List of product categories",
                  },
                  {
                    value: "filters",
                    trigger: "Filters",
                    content: "Product filters",
                  },
                ]}
              />
            </aside>

            <main className="col-span-3">
              <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold">Products</h1>
                <ShadcnUI.CustomSelect
                  placeholder="Sort by"
                  groups={[
                    {
                      items: [
                        { value: "price-asc", label: "Price: Low to High" },
                        { value: "price-desc", label: "Price: High to Low" },
                        { value: "newest", label: "Newest First" },
                      ],
                    },
                  ]}
                />
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div key={item} className="border rounded p-4">
                    <div className="aspect-square bg-gray-200 mb-2"></div>
                    <h3 className="font-bold">Product {item}</h3>
                    <p className="text-lg font-bold">$99.99</p>
                    <ShadcnUI.Button className="w-full mt-2">
                      Add to Cart
                    </ShadcnUI.Button>
                  </div>
                ))}
              </div>
            </main>
          </div>
        </div>
      ),
    },
    portfolio: {
      title: "Portfolio Layout",
      description: "A grid layout for showcasing creative work",
      code: `
<div className="container mx-auto px-4 py-8">
  <header className="text-center mb-12">
    <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
    <ShadcnUI.CustomTabs
      defaultValue="all"
      tabs={[
        {
          label: "All Work",
          value: "all",
          content: null
        },
        {
          label: "Design",
          value: "design",
          content: null
        },
        {
          label: "Development",
          value: "development",
          content: null
        }
      ]}
    />
  </header>

  <div className="grid grid-cols-3 gap-6">
    {[1, 2, 3, 4, 5, 6].map((item) => (
      <ShadcnUI.CustomHoverCard
        key={item}
        trigger={
          <div className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <ShadcnUI.Button variant="outline">View Project</ShadcnUI.Button>
            </div>
          </div>
        }
      >
        <div className="p-4">
          <h3 className="font-bold mb-2">Project {item}</h3>
          <p>Description of project {item}</p>
        </div>
      </ShadcnUI.CustomHoverCard>
    ))}
  </div>
</div>
`,
      component: (
        <div className="container mx-auto px-4 py-8 border rounded-lg">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
            <ShadcnUI.CustomTabs
              defaultValue="all"
              tabs={[
                {
                  label: "All Work",
                  value: "all",
                  content: null,
                },
                {
                  label: "Design",
                  value: "design",
                  content: null,
                },
                {
                  label: "Development",
                  value: "development",
                  content: null,
                },
              ]}
            />
          </header>

          <div className="grid grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <ShadcnUI.CustomHoverCard
                key={item}
                trigger={
                  <div className="group relative aspect-square bg-gray-200 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <ShadcnUI.Button variant="outline">
                        View Project
                      </ShadcnUI.Button>
                    </div>
                  </div>
                }
              >
                <div className="p-4">
                  <h3 className="font-bold mb-2">Project {item}</h3>
                  <p>Description of project {item}</p>
                </div>
              </ShadcnUI.CustomHoverCard>
            ))}
          </div>
        </div>
      ),
    },
  };

  const copyToClipboard = (code, layout) => {
    navigator.clipboard.writeText(code);
    setCopied(layout);
    setTimeout(() => setCopied(""), 2000);
  };

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold mb-4">ShadcnUI Layout Examples</h1>
          <ShadcnUI.CustomTabs
            defaultValue={selectedLayout}
            className="w-full"
            tabs={Object.entries(layoutExamples).map(([key, value]) => ({
              label: value.title,
              value: key,
              content: (
                <div className="mt-8">
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold mb-2">{value.title}</h2>
                    <p className="text-gray-600">{value.description}</p>
                  </div>

                  <div className="mb-8">{value.component}</div>

                  <div className="relative">
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code className="text-sm">{value.code}</code>
                    </pre>
                    <ShadcnUI.Button
                      className="absolute top-2 right-2"
                      variant="outline"
                      onClick={() => copyToClipboard(value.code, key)}
                    >
                      {copied === key ? "Copied!" : "Copy Code"}
                    </ShadcnUI.Button>
                  </div>
                </div>
              ),
            }))}
          />
        </header>
      </div>
    </div>
  );
}

export default MainComponent;
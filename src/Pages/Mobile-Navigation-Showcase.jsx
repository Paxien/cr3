"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [showCode, setShowCode] = React.useState(null);

  const examples = [
    {
      title: "Hamburger Drawer Navigation",
      code: `<ShadcnUI.CustomDrawer
  title="Main Navigation" 
  description="Browse menu items"
  openButtonText={<i className="fas fa-bars text-xl" />}
  footer={
    <div className="grid gap-2">
      <ShadcnUI.CustomPopover
        triggerLabel={<i className="fas fa-user text-xl" />}
      >
        <div className="grid gap-4">
          <ShadcnUI.Button variant="outline">Profile</ShadcnUI.Button>
          <ShadcnUI.Button variant="ghost">Settings</ShadcnUI.Button>
          <ShadcnUI.Button variant="destructive">Logout</ShadcnUI.Button>
        </div>
      </ShadcnUI.CustomPopover>
    </div>
  }
>
  <div className="grid gap-4">
    <ShadcnUI.CustomAccordion
      type="single" 
      data={[
        {
          value: "home",
          trigger: "Home",
          content: <ShadcnUI.Button variant="ghost" className="w-full">Dashboard</ShadcnUI.Button>
        },
        {
          value: "products", 
          trigger: "Products",
          content: <div className="grid gap-2">
            <ShadcnUI.Button variant="ghost" className="w-full">Browse</ShadcnUI.Button>
            <ShadcnUI.Button variant="ghost" className="w-full">Categories</ShadcnUI.Button>
          </div>
        },
        {
          value: "about",
          trigger: "About",
          content: <ShadcnUI.Button variant="ghost" className="w-full">Company Info</ShadcnUI.Button>
        }
      ]}
    />
  </div>
</ShadcnUI.CustomDrawer>`,
      component: (
        <ShadcnUI.CustomDrawer
          title="Main Navigation"
          description="Browse menu items"
          openButtonText={<i className="fas fa-bars text-xl" />}
          footer={
            <div className="grid gap-2">
              <ShadcnUI.CustomPopover
                triggerLabel={<i className="fas fa-user text-xl" />}
              >
                <div className="grid gap-4">
                  <ShadcnUI.Button variant="outline">Profile</ShadcnUI.Button>
                  <ShadcnUI.Button variant="ghost">Settings</ShadcnUI.Button>
                  <ShadcnUI.Button variant="destructive">
                    Logout
                  </ShadcnUI.Button>
                </div>
              </ShadcnUI.CustomPopover>
            </div>
          }
        >
          <div className="grid gap-4">
            <ShadcnUI.CustomAccordion
              type="single"
              data={[
                {
                  value: "home",
                  trigger: "Home",
                  content: (
                    <ShadcnUI.Button variant="ghost" className="w-full">
                      Dashboard
                    </ShadcnUI.Button>
                  ),
                },
                {
                  value: "products",
                  trigger: "Products",
                  content: (
                    <div className="grid gap-2">
                      <ShadcnUI.Button variant="ghost" className="w-full">
                        Browse
                      </ShadcnUI.Button>
                      <ShadcnUI.Button variant="ghost" className="w-full">
                        Categories
                      </ShadcnUI.Button>
                    </div>
                  ),
                },
                {
                  value: "about",
                  trigger: "About",
                  content: (
                    <ShadcnUI.Button variant="ghost" className="w-full">
                      Company Info
                    </ShadcnUI.Button>
                  ),
                },
              ]}
            />
          </div>
        </ShadcnUI.CustomDrawer>
      ),
    },
    {
      title: "Bottom Navigation Bar",
      code: `<div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
  <ShadcnUI.CustomTabs
    defaultValue="home"
    className="w-full"
    tabs={[
      {
        label: <div className="flex flex-col items-center gap-1">
          <i className="fas fa-home text-xl" />
          <span className="text-xs">Home</span>
        </div>,
        value: "home",
        content: null
      },
      {
        label: <div className="flex flex-col items-center gap-1">
          <i className="fas fa-search text-xl" />
          <span className="text-xs">Search</span>
        </div>,
        value: "search",
        content: null
      },
      {
        label: <div className="flex flex-col items-center gap-1">
          <i className="fas fa-heart text-xl" />
          <span className="text-xs">Favorites</span>
        </div>,
        value: "favorites",
        content: null
      },
      {
        label: <div className="flex flex-col items-center gap-1">
          <i className="fas fa-user text-xl" />
          <span className="text-xs">Profile</span>
        </div>,
        value: "profile",
        content: null
      }
    ]}
  />
</div>`,
      component: (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 md:hidden">
          <ShadcnUI.CustomTabs
            defaultValue="home"
            className="w-full"
            tabs={[
              {
                label: (
                  <div className="flex flex-col items-center gap-1">
                    <i className="fas fa-home text-xl" />
                    <span className="text-xs">Home</span>
                  </div>
                ),
                value: "home",
                content: null,
              },
              {
                label: (
                  <div className="flex flex-col items-center gap-1">
                    <i className="fas fa-search text-xl" />
                    <span className="text-xs">Search</span>
                  </div>
                ),
                value: "search",
                content: null,
              },
              {
                label: (
                  <div className="flex flex-col items-center gap-1">
                    <i className="fas fa-heart text-xl" />
                    <span className="text-xs">Favorites</span>
                  </div>
                ),
                value: "favorites",
                content: null,
              },
              {
                label: (
                  <div className="flex flex-col items-center gap-1">
                    <i className="fas fa-user text-xl" />
                    <span className="text-xs">Profile</span>
                  </div>
                ),
                value: "profile",
                content: null,
              },
            ]}
          />
        </div>
      ),
    },
    {
      title: "Swipe Navigation",
      code: `<ShadcnUI.CustomCarousel
  items={[
    <div className="flex flex-col items-center justify-center h-[400px] bg-[#f0f0f0]">
      <i className="fas fa-home text-4xl mb-4" />
      <h2 className="text-2xl font-bold">Home</h2>
      <p className="text-gray-600">Swipe to explore more sections</p>
    </div>,
    <div className="flex flex-col items-center justify-center h-[400px] bg-[#e0e0e0]">
      <i className="fas fa-store text-4xl mb-4" />
      <h2 className="text-2xl font-bold">Shop</h2>
      <p className="text-gray-600">Browse our collection</p>
    </div>,
    <div className="flex flex-col items-center justify-center h-[400px] bg-[#d0d0d0]">
      <i className="fas fa-user text-4xl mb-4" />
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="text-gray-600">View your account</p>
    </div>
  ]}
/>`,
      component: (
        <ShadcnUI.CustomCarousel
          items={[
            <div className="flex flex-col items-center justify-center h-[400px] bg-[#f0f0f0]">
              <i className="fas fa-home text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Home</h2>
              <p className="text-gray-600">Swipe to explore more sections</p>
            </div>,
            <div className="flex flex-col items-center justify-center h-[400px] bg-[#e0e0e0]">
              <i className="fas fa-store text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Shop</h2>
              <p className="text-gray-600">Browse our collection</p>
            </div>,
            <div className="flex flex-col items-center justify-center h-[400px] bg-[#d0d0d0]">
              <i className="fas fa-user text-4xl mb-4" />
              <h2 className="text-2xl font-bold">Profile</h2>
              <p className="text-gray-600">View your account</p>
            </div>,
          ]}
        />
      ),
    },
    {
      title: "Floating Action Button (FAB)",
      code: `<div className="fixed bottom-20 right-4 md:bottom-8 md:right-8">
  <ShadcnUI.CustomTooltip content="Create New">
    <ShadcnUI.CustomDropdown
      triggerLabel={
        <ShadcnUI.Button size="lg" className="rounded-full h-14 w-14 shadow-lg">
          <i className="fas fa-plus text-xl" />
        </ShadcnUI.Button>
      }
      items={[
        {
          content: <i className="fas fa-file text-lg mr-2" />,
          label: "New Document",
          onSelect: () => console.log("New Document")
        },
        {
          content: <i className="fas fa-image text-lg mr-2" />,
          label: "Upload Image",
          onSelect: () => console.log("Upload Image")
        },
        {
          content: <i className="fas fa-video text-lg mr-2" />,
          label: "Record Video",
          onSelect: () => console.log("Record Video")
        }
      ]}
    />
  </ShadcnUI.CustomTooltip>
</div>`,
      component: (
        <div className="fixed bottom-20 right-4 md:bottom-8 md:right-8">
          <ShadcnUI.CustomTooltip content="Create New">
            <ShadcnUI.CustomDropdown
              triggerLabel={
                <ShadcnUI.Button
                  size="lg"
                  className="rounded-full h-14 w-14 shadow-lg"
                >
                  <i className="fas fa-plus text-xl" />
                </ShadcnUI.Button>
              }
              items={[
                {
                  content: <i className="fas fa-file text-lg mr-2" />,
                  label: "New Document",
                  onSelect: () => console.log("New Document"),
                },
                {
                  content: <i className="fas fa-image text-lg mr-2" />,
                  label: "Upload Image",
                  onSelect: () => console.log("Upload Image"),
                },
                {
                  content: <i className="fas fa-video text-lg mr-2" />,
                  label: "Record Video",
                  onSelect: () => console.log("Record Video"),
                },
              ]}
            />
          </ShadcnUI.CustomTooltip>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Mobile Navigation Components
        </h1>

        <div className="grid gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">
                    {example.title}
                  </h2>
                  <div className="relative min-h-[400px] border rounded-lg p-4">
                    {example.component}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="relative">
                    <ShadcnUI.Button
                      variant="outline"
                      className="absolute right-2 top-2"
                      onClick={() => {
                        navigator.clipboard.writeText(example.code);
                        setShowCode(index);
                        setTimeout(() => setShowCode(null), 2000);
                      }}
                    >
                      {showCode === index ? (
                        <i className="fas fa-check" />
                      ) : (
                        <i className="fas fa-copy" />
                      )}
                    </ShadcnUI.Button>
                    <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
                      <code>{example.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
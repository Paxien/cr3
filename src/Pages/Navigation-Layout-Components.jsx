"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isCodeVisible, setIsCodeVisible] = React.useState({});
  const [copiedStates, setCopiedStates] = React.useState({});
  const [currentTab, setCurrentTab] = React.useState("topnav");

  const toggleCode = (section) => {
    setIsCodeVisible((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const copyToClipboard = (text, section) => {
    navigator.clipboard.writeText(text);
    setCopiedStates((prev) => ({
      ...prev,
      [section]: true,
    }));
    setTimeout(() => {
      setCopiedStates((prev) => ({
        ...prev,
        [section]: false,
      }));
    }, 2000);
  };

  const navigationItems = [
    { href: "#features", label: "Features" },
    { href: "#pricing", label: "Pricing" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const bottomNavItems = [
    { icon: "🏠", label: "Home" },
    { icon: "🔍", label: "Search" },
    { icon: "❤️", label: "Favorites" },
    { icon: "👤", label: "Profile" },
  ];

  const sideNavSections = [
    {
      title: "Main",
      items: [
        { icon: "🏠", label: "Dashboard" },
        { icon: "📊", label: "Analytics" },
        { icon: "📝", label: "Projects" },
      ],
    },
    {
      title: "Settings",
      items: [
        { icon: "⚙️", label: "Preferences" },
        { icon: "👥", label: "Team" },
        { icon: "🔒", label: "Security" },
      ],
    },
  ];

  return (
    <div className="p-4 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-8">Navigation Component Showcase</h1>

      <ShadcnUI.CustomTabs
        defaultValue={currentTab}
        className="mb-8"
        tabs={[
          {
            label: "Top Navigation",
            value: "topnav",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <ShadcnUI.CustomNavigation
                    sections={[
                      {
                        trigger: "Menu",
                        items: navigationItems.map((item) => ({
                          href: item.href,
                          title: item.label,
                          description: `Navigate to ${item.label} section`,
                        })),
                      },
                    ]}
                  />

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => toggleCode("topnav")}
                    className="mt-4"
                  >
                    {isCodeVisible.topnav ? "Hide Code" : "Show Code"}
                  </ShadcnUI.Button>

                  {isCodeVisible.topnav && (
                    <div className="relative mt-2">
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        {`<ShadcnUI.CustomNavigation
  sections={[
    {
      trigger: "Menu",
      items: navigationItems.map(item => ({
        href: item.href,
        title: item.label,
        description: \`Navigate to \${item.label} section\`
      }))
    }
  ]}
/>`}
                      </pre>
                      <ShadcnUI.Button
                        variant="secondary"
                        onClick={() =>
                          copyToClipboard(
                            `<ShadcnUI.CustomNavigation sections={[{trigger: "Menu",items: navigationItems.map(item => ({href: item.href,title: item.label,description: \`Navigate to \${item.label} section\`}))}]} />`,
                            "topnav"
                          )
                        }
                        className="absolute top-2 right-2"
                      >
                        {copiedStates.topnav ? "Copied!" : "Copy"}
                      </ShadcnUI.Button>
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Bottom Navigation",
            value: "bottomnav",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">
                    {bottomNavItems.map((item, idx) => (
                      <ShadcnUI.Button
                        key={idx}
                        variant="ghost"
                        className="flex flex-col items-center"
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                      </ShadcnUI.Button>
                    ))}
                  </div>

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => toggleCode("bottomnav")}
                    className="mt-4"
                  >
                    {isCodeVisible.bottomnav ? "Hide Code" : "Show Code"}
                  </ShadcnUI.Button>

                  {isCodeVisible.bottomnav && (
                    <div className="relative mt-2">
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        {`<div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">
  {bottomNavItems.map((item, idx) => (
    <ShadcnUI.Button key={idx} variant="ghost" className="flex flex-col items-center">
      <span className="text-xl">{item.icon}</span>
      <span className="text-sm">{item.label}</span>
    </ShadcnUI.Button>
  ))}
</div>`}
                      </pre>
                      <ShadcnUI.Button
                        variant="secondary"
                        onClick={() =>
                          copyToClipboard(
                            `<div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-4">{bottomNavItems.map((item, idx) => (<ShadcnUI.Button key={idx} variant="ghost" className="flex flex-col items-center"><span className="text-xl">{item.icon}</span><span className="text-sm">{item.label}</span></ShadcnUI.Button>))}</div>`,
                            "bottomnav"
                          )
                        }
                        className="absolute top-2 right-2"
                      >
                        {copiedStates.bottomnav ? "Copied!" : "Copy"}
                      </ShadcnUI.Button>
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Side Navigation",
            value: "sidenav",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="w-64 bg-white border-r h-[500px] p-4">
                    {sideNavSections.map((section, idx) => (
                      <div key={idx} className="mb-6">
                        <h3 className="mb-2 font-semibold text-sm text-gray-500">
                          {section.title}
                        </h3>
                        {section.items.map((item, itemIdx) => (
                          <ShadcnUI.Button
                            key={itemIdx}
                            variant="ghost"
                            className="w-full justify-start mb-1"
                          >
                            <span className="mr-2">{item.icon}</span>
                            {item.label}
                          </ShadcnUI.Button>
                        ))}
                      </div>
                    ))}
                  </div>

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => toggleCode("sidenav")}
                    className="mt-4"
                  >
                    {isCodeVisible.sidenav ? "Hide Code" : "Show Code"}
                  </ShadcnUI.Button>

                  {isCodeVisible.sidenav && (
                    <div className="relative mt-2">
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        {`<div className="w-64 bg-white border-r h-[500px] p-4">
  {sideNavSections.map((section, idx) => (
    <div key={idx} className="mb-6">
      <h3 className="mb-2 font-semibold text-sm text-gray-500">{section.title}</h3>
      {section.items.map((item, itemIdx) => (
        <ShadcnUI.Button
          key={itemIdx}
          variant="ghost"
          className="w-full justify-start mb-1"
        >
          <span className="mr-2">{item.icon}</span>
          {item.label}
        </ShadcnUI.Button>
      ))}
    </div>
  ))}
</div>`}
                      </pre>
                      <ShadcnUI.Button
                        variant="secondary"
                        onClick={() =>
                          copyToClipboard(
                            `<div className="w-64 bg-white border-r h-[500px] p-4">{sideNavSections.map((section, idx) => (<div key={idx} className="mb-6"><h3 className="mb-2 font-semibold text-sm text-gray-500">{section.title}</h3>{section.items.map((item, itemIdx) => (<ShadcnUI.Button key={itemIdx} variant="ghost" className="w-full justify-start mb-1"><span className="mr-2">{item.icon}</span>{item.label}</ShadcnUI.Button>))}</div>))}</div>`,
                            "sidenav"
                          )
                        }
                        className="absolute top-2 right-2"
                      >
                        {copiedStates.sidenav ? "Copied!" : "Copy"}
                      </ShadcnUI.Button>
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Mega Menu",
            value: "megamenu",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <ShadcnUI.CustomDropdown
                    triggerLabel="Mega Menu"
                    menuLabel="Navigation"
                    items={[
                      {
                        label: "Products",
                        content: "🛍️",
                        onSelect: () => {},
                        subItems: [
                          {
                            label: "Electronics",
                            content: "📱",
                            onSelect: () => {},
                          },
                          {
                            label: "Clothing",
                            content: "👕",
                            onSelect: () => {},
                          },
                          { label: "Books", content: "📚", onSelect: () => {} },
                        ],
                      },
                      {
                        label: "Services",
                        content: "🔧",
                        onSelect: () => {},
                        subItems: [
                          {
                            label: "Consulting",
                            content: "💼",
                            onSelect: () => {},
                          },
                          {
                            label: "Training",
                            content: "📚",
                            onSelect: () => {},
                          },
                          {
                            label: "Support",
                            content: "🤝",
                            onSelect: () => {},
                          },
                        ],
                      },
                    ]}
                  />

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => toggleCode("megamenu")}
                    className="mt-4"
                  >
                    {isCodeVisible.megamenu ? "Hide Code" : "Show Code"}
                  </ShadcnUI.Button>

                  {isCodeVisible.megamenu && (
                    <div className="relative mt-2">
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        {`<ShadcnUI.CustomDropdown
  triggerLabel="Mega Menu"
  menuLabel="Navigation"
  items={[
    {
      label: 'Products',
      content: '🛍️',
      onSelect: () => {},
      subItems: [
        { label: 'Electronics', content: '📱', onSelect: () => {} },
        { label: 'Clothing', content: '👕', onSelect: () => {} },
        { label: 'Books', content: '📚', onSelect: () => {} }
      ]
    },
    {
      label: 'Services',
      content: '🔧',
      onSelect: () => {},
      subItems: [
        { label: 'Consulting', content: '💼', onSelect: () => {} },
        { label: 'Training', content: '📚', onSelect: () => {} },
        { label: 'Support', content: '🤝', onSelect: () => {} }
      ]
    }
  ]}
/>`}
                      </pre>
                      <ShadcnUI.Button
                        variant="secondary"
                        onClick={() =>
                          copyToClipboard(
                            `<ShadcnUI.CustomDropdown triggerLabel="Mega Menu" menuLabel="Navigation" items={[{label:'Products',content:'🛍️',onSelect:()=>{},subItems:[{label:'Electronics',content:'📱',onSelect:()=>{}},{label:'Clothing',content:'👕',onSelect:()=>{}},{label:'Books',content:'📚',onSelect:()=>{}}]},{label:'Services',content:'🔧',onSelect:()=>{},subItems:[{label:'Consulting',content:'💼',onSelect:()=>{}},{label:'Training',content:'📚',onSelect:()=>{}},{label:'Support',content:'🤝',onSelect:()=>{}}]}]} />`,
                            "megamenu"
                          )
                        }
                        className="absolute top-2 right-2"
                      >
                        {copiedStates.megamenu ? "Copied!" : "Copy"}
                      </ShadcnUI.Button>
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Tab Navigation",
            value: "tabnav",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <ShadcnUI.CustomTabs
                    defaultValue="tab1"
                    tabs={[
                      {
                        label: "Profile",
                        value: "tab1",
                        content: <div className="p-4">Profile Content</div>,
                      },
                      {
                        label: "Settings",
                        value: "tab2",
                        content: <div className="p-4">Settings Content</div>,
                      },
                      {
                        label: "Messages",
                        value: "tab3",
                        content: <div className="p-4">Messages Content</div>,
                      },
                    ]}
                  />

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => toggleCode("tabnav")}
                    className="mt-4"
                  >
                    {isCodeVisible.tabnav ? "Hide Code" : "Show Code"}
                  </ShadcnUI.Button>

                  {isCodeVisible.tabnav && (
                    <div className="relative mt-2">
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        {`<ShadcnUI.CustomTabs
  defaultValue="tab1"
  tabs={[
    {
      label: "Profile",
      value: "tab1",
      content: <div className="p-4">Profile Content</div>
    },
    {
      label: "Settings",
      value: "tab2",
      content: <div className="p-4">Settings Content</div>
    },
    {
      label: "Messages",
      value: "tab3",
      content: <div className="p-4">Messages Content</div>
    }
  ]}
/>`}
                      </pre>
                      <ShadcnUI.Button
                        variant="secondary"
                        onClick={() =>
                          copyToClipboard(
                            `<ShadcnUI.CustomTabs defaultValue="tab1" tabs={[{label:"Profile",value:"tab1",content:<div className="p-4">Profile Content</div>},{label:"Settings",value:"tab2",content:<div className="p-4">Settings Content</div>},{label:"Messages",value:"tab3",content:<div className="p-4">Messages Content</div>}]} />`,
                            "tabnav"
                          )
                        }
                        className="absolute top-2 right-2"
                      >
                        {copiedStates.tabnav ? "Copied!" : "Copy"}
                      </ShadcnUI.Button>
                    </div>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Breadcrumbs",
            value: "breadcrumbs",
            content: (
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <ShadcnUI.CustomBreadcrumb
                    homeLink="/"
                    dropdownMenuItems={[
                      { label: "Products", onClick: () => {} },
                      { label: "Categories", onClick: () => {} },
                      { label: "Settings", onClick: () => {} },
                    ]}
                    componentLink="/products/electronics"
                    componentName="Electronics"
                  />

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => toggleCode("breadcrumbs")}
                    className="mt-4"
                  >
                    {isCodeVisible.breadcrumbs ? "Hide Code" : "Show Code"}
                  </ShadcnUI.Button>

                  {isCodeVisible.breadcrumbs && (
                    <div className="relative mt-2">
                      <pre className="bg-gray-100 p-4 rounded-lg">
                        {`<ShadcnUI.CustomBreadcrumb
  homeLink="/"
  dropdownMenuItems={[
    { label: "Products", onClick: () => {} },
    { label: "Categories", onClick: () => {} },
    { label: "Settings", onClick: () => {} }
  ]}
  componentLink="/products/electronics"
  componentName="Electronics"
/>`}
                      </pre>
                      <ShadcnUI.Button
                        variant="secondary"
                        onClick={() =>
                          copyToClipboard(
                            `<ShadcnUI.CustomBreadcrumb homeLink="/" dropdownMenuItems={[{label:"Products",onClick:()=>{}},{label:"Categories",onClick:()=>{}},{label:"Settings",onClick:()=>{}}]} componentLink="/products/electronics" componentName="Electronics" />`,
                            "breadcrumbs"
                          )
                        }
                        className="absolute top-2 right-2"
                      >
                        {copiedStates.breadcrumbs ? "Copied!" : "Copy"}
                      </ShadcnUI.Button>
                    </div>
                  )}
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
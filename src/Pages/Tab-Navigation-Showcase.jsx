"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [copiedCode, setCopiedCode] = React.useState("");
  const [openAlert, setOpenAlert] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("horizontal");

  const codeExamples = {
    horizontal: `<ShadcnUI.Tabs defaultValue="tab1" className="w-full">
  <ShadcnUI.TabsList className="grid w-full grid-cols-3">
    <ShadcnUI.TabsTrigger value="tab1">Tab 1</ShadcnUI.TabsTrigger>
    <ShadcnUI.TabsTrigger value="tab2">Tab 2</ShadcnUI.TabsTrigger>
    <ShadcnUI.TabsTrigger value="tab3">Tab 3</ShadcnUI.TabsTrigger>
  </ShadcnUI.TabsList>
  <ShadcnUI.TabsContent value="tab1">Content 1</ShadcnUI.TabsContent>
  <ShadcnUI.TabsContent value="tab2">Content 2</ShadcnUI.TabsContent>
  <ShadcnUI.TabsContent value="tab3">Content 3</ShadcnUI.TabsContent>
</ShadcnUI.Tabs>`,
    vertical: `<ShadcnUI.Tabs defaultValue="profile" orientation="vertical" className="w-[200px]">
  <ShadcnUI.TabsList className="flex flex-col h-full">
    <ShadcnUI.TabsTrigger value="profile">Profile</ShadcnUI.TabsTrigger>
    <ShadcnUI.TabsTrigger value="account">Account</ShadcnUI.TabsTrigger>
    <ShadcnUI.TabsTrigger value="privacy">Privacy</ShadcnUI.TabsTrigger>
  </ShadcnUI.TabsList>
  <ShadcnUI.TabsContent value="profile">Profile Settings</ShadcnUI.TabsContent>
  <ShadcnUI.TabsContent value="account">Account Settings</ShadcnUI.TabsContent>
  <ShadcnUI.TabsContent value="privacy">Privacy Settings</ShadcnUI.TabsContent>
</ShadcnUI.Tabs>`,
    scrollable: `<div className="w-full overflow-x-auto">
  <ShadcnUI.Tabs defaultValue="tab1" className="w-[800px]">
    <ShadcnUI.TabsList>
      {Array.from({ length: 8 }).map((_, i) => (
        <ShadcnUI.TabsTrigger key={i} value={\`tab\${i + 1}\`}>
          Tab {i + 1}
        </ShadcnUI.TabsTrigger>
      ))}
    </ShadcnUI.TabsList>
    {Array.from({ length: 8 }).map((_, i) => (
      <ShadcnUI.TabsContent key={i} value={\`tab\${i + 1}\`}>
        Content {i + 1}
      </ShadcnUI.TabsContent>
    ))}
  </ShadcnUI.Tabs>
</div>`,
    accordion: `<ShadcnUI.Accordion type="single" collapsible>
  <ShadcnUI.AccordionItem value="item-1">
    <ShadcnUI.AccordionTrigger>Section 1</ShadcnUI.AccordionTrigger>
    <ShadcnUI.AccordionContent>Content for section 1</ShadcnUI.AccordionContent>
  </ShadcnUI.AccordionItem>
  <ShadcnUI.AccordionItem value="item-2">
    <ShadcnUI.AccordionTrigger>Section 2</ShadcnUI.AccordionTrigger>
    <ShadcnUI.AccordionContent>Content for section 2</ShadcnUI.AccordionContent>
  </ShadcnUI.AccordionItem>
</ShadcnUI.Accordion>`,
    custom: `<ShadcnUI.Tabs defaultValue="messages" className="w-full">
  <ShadcnUI.TabsList className="grid w-full grid-cols-3">
    <ShadcnUI.TabsTrigger value="messages">
      <div className="flex items-center gap-2">
        <i className="fas fa-envelope"></i>
        Messages
      </div>
    </ShadcnUI.TabsTrigger>
    <ShadcnUI.TabsTrigger value="settings">
      <div className="flex items-center gap-2">
        <i className="fas fa-cog"></i>
        Settings
      </div>
    </ShadcnUI.TabsTrigger>
    <ShadcnUI.TabsTrigger value="profile">
      <div className="flex items-center gap-2">
        <i className="fas fa-user"></i>
        Profile
      </div>
    </ShadcnUI.TabsTrigger>
  </ShadcnUI.TabsList>
  <ShadcnUI.TabsContent value="messages">Messages Content</ShadcnUI.TabsContent>
  <ShadcnUI.TabsContent value="settings">Settings Content</ShadcnUI.TabsContent>
  <ShadcnUI.TabsContent value="profile">Profile Content</ShadcnUI.TabsContent>
</ShadcnUI.Tabs>`,
  };

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(codeExamples[code]);
    setCopiedCode(code);
    setOpenAlert(true);
    setTimeout(() => setOpenAlert(false), 2000);
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Tab Navigation Examples</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-8">
          <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Horizontal Tabs</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => copyToClipboard("horizontal")}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Code
              </ShadcnUI.Button>
            </div>

            <ShadcnUI.Tabs defaultValue="tab1" className="w-full">
              <ShadcnUI.TabsList className="grid w-full grid-cols-3">
                <ShadcnUI.TabsTrigger value="tab1">Tab 1</ShadcnUI.TabsTrigger>
                <ShadcnUI.TabsTrigger value="tab2">Tab 2</ShadcnUI.TabsTrigger>
                <ShadcnUI.TabsTrigger value="tab3">Tab 3</ShadcnUI.TabsTrigger>
              </ShadcnUI.TabsList>
              <ShadcnUI.TabsContent value="tab1">
                <div className="p-4 border rounded mt-2">Content for Tab 1</div>
              </ShadcnUI.TabsContent>
              <ShadcnUI.TabsContent value="tab2">
                <div className="p-4 border rounded mt-2">Content for Tab 2</div>
              </ShadcnUI.TabsContent>
              <ShadcnUI.TabsContent value="tab3">
                <div className="p-4 border rounded mt-2">Content for Tab 3</div>
              </ShadcnUI.TabsContent>
            </ShadcnUI.Tabs>

            <ShadcnUI.Collapsible className="mt-4">
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="ghost" size="sm">
                  View Code
                </ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <pre className="mt-2 bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  {codeExamples.horizontal}
                </pre>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </section>

          <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Vertical Tabs</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => copyToClipboard("vertical")}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Code
              </ShadcnUI.Button>
            </div>

            <div className="flex gap-4">
              <ShadcnUI.Tabs
                defaultValue="profile"
                orientation="vertical"
                className="w-[200px]"
              >
                <ShadcnUI.TabsList className="flex flex-col h-full">
                  <ShadcnUI.TabsTrigger value="profile">
                    Profile
                  </ShadcnUI.TabsTrigger>
                  <ShadcnUI.TabsTrigger value="account">
                    Account
                  </ShadcnUI.TabsTrigger>
                  <ShadcnUI.TabsTrigger value="privacy">
                    Privacy
                  </ShadcnUI.TabsTrigger>
                </ShadcnUI.TabsList>
                <ShadcnUI.TabsContent value="profile">
                  <div className="p-4 border rounded">Profile Settings</div>
                </ShadcnUI.TabsContent>
                <ShadcnUI.TabsContent value="account">
                  <div className="p-4 border rounded">Account Settings</div>
                </ShadcnUI.TabsContent>
                <ShadcnUI.TabsContent value="privacy">
                  <div className="p-4 border rounded">Privacy Settings</div>
                </ShadcnUI.TabsContent>
              </ShadcnUI.Tabs>
            </div>

            <ShadcnUI.Collapsible className="mt-4">
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="ghost" size="sm">
                  View Code
                </ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <pre className="mt-2 bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  {codeExamples.vertical}
                </pre>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </section>
        </div>

        <div className="space-y-8">
          <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Scrollable Tabs</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => copyToClipboard("scrollable")}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Code
              </ShadcnUI.Button>
            </div>

            <div className="w-full overflow-x-auto">
              <ShadcnUI.Tabs defaultValue="tab1" className="w-[800px]">
                <ShadcnUI.TabsList>
                  {Array.from({ length: 8 }).map((_, i) => (
                    <ShadcnUI.TabsTrigger key={i} value={`tab${i + 1}`}>
                      Tab {i + 1}
                    </ShadcnUI.TabsTrigger>
                  ))}
                </ShadcnUI.TabsList>
                {Array.from({ length: 8 }).map((_, i) => (
                  <ShadcnUI.TabsContent key={i} value={`tab${i + 1}`}>
                    <div className="p-4 border rounded mt-2">
                      Content {i + 1}
                    </div>
                  </ShadcnUI.TabsContent>
                ))}
              </ShadcnUI.Tabs>
            </div>

            <ShadcnUI.Collapsible className="mt-4">
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="ghost" size="sm">
                  View Code
                </ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <pre className="mt-2 bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  {codeExamples.scrollable}
                </pre>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </section>

          <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Accordion Tabs</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => copyToClipboard("accordion")}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Code
              </ShadcnUI.Button>
            </div>

            <ShadcnUI.Accordion type="single" collapsible>
              <ShadcnUI.AccordionItem value="item-1">
                <ShadcnUI.AccordionTrigger>Section 1</ShadcnUI.AccordionTrigger>
                <ShadcnUI.AccordionContent>
                  <div className="p-4 border rounded">
                    Content for section 1
                  </div>
                </ShadcnUI.AccordionContent>
              </ShadcnUI.AccordionItem>
              <ShadcnUI.AccordionItem value="item-2">
                <ShadcnUI.AccordionTrigger>Section 2</ShadcnUI.AccordionTrigger>
                <ShadcnUI.AccordionContent>
                  <div className="p-4 border rounded">
                    Content for section 2
                  </div>
                </ShadcnUI.AccordionContent>
              </ShadcnUI.AccordionItem>
            </ShadcnUI.Accordion>

            <ShadcnUI.Collapsible className="mt-4">
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="ghost" size="sm">
                  View Code
                </ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <pre className="mt-2 bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  {codeExamples.accordion}
                </pre>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </section>

          <section className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Custom Styled Tabs</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => copyToClipboard("custom")}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy Code
              </ShadcnUI.Button>
            </div>

            <ShadcnUI.Tabs defaultValue="messages" className="w-full">
              <ShadcnUI.TabsList className="grid w-full grid-cols-3">
                <ShadcnUI.TabsTrigger value="messages">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-envelope"></i>
                    Messages
                  </div>
                </ShadcnUI.TabsTrigger>
                <ShadcnUI.TabsTrigger value="settings">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-cog"></i>
                    Settings
                  </div>
                </ShadcnUI.TabsTrigger>
                <ShadcnUI.TabsTrigger value="profile">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-user"></i>
                    Profile
                  </div>
                </ShadcnUI.TabsTrigger>
              </ShadcnUI.TabsList>
              <ShadcnUI.TabsContent value="messages">
                <div className="p-4 border rounded mt-2">Messages Content</div>
              </ShadcnUI.TabsContent>
              <ShadcnUI.TabsContent value="settings">
                <div className="p-4 border rounded mt-2">Settings Content</div>
              </ShadcnUI.TabsContent>
              <ShadcnUI.TabsContent value="profile">
                <div className="p-4 border rounded mt-2">Profile Content</div>
              </ShadcnUI.TabsContent>
            </ShadcnUI.Tabs>

            <ShadcnUI.Collapsible className="mt-4">
              <ShadcnUI.CollapsibleTrigger asChild>
                <ShadcnUI.Button variant="ghost" size="sm">
                  View Code
                </ShadcnUI.Button>
              </ShadcnUI.CollapsibleTrigger>
              <ShadcnUI.CollapsibleContent>
                <pre className="mt-2 bg-slate-950 text-slate-50 p-4 rounded-lg overflow-x-auto">
                  {codeExamples.custom}
                </pre>
              </ShadcnUI.CollapsibleContent>
            </ShadcnUI.Collapsible>
          </section>
        </div>
      </div>

      {openAlert && (
        <ShadcnUI.Alert className="fixed bottom-4 right-4 w-auto">
          <ShadcnUI.AlertTitle>Copied!</ShadcnUI.AlertTitle>
          <ShadcnUI.AlertDescription>
            Code has been copied to clipboard
          </ShadcnUI.AlertDescription>
        </ShadcnUI.Alert>
      )}
    </div>
  );
}

export default MainComponent;
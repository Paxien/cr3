"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("buttons");

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const codeExamples = {
    buttons: `<ShadcnUI.Button variant="default">New Post</ShadcnUI.Button>
<ShadcnUI.Button variant="outline">Upload Media</ShadcnUI.Button>`,

    contextMenu: `<ShadcnUI.CustomContextMenu
  triggerLabel="Right click me"
  items={[
    {
      label: 'New Post',
      shortcut: '⌘N',
      onSelect: () => {} 
    },
    {
      label: 'Upload',
      shortcut: '⌘U', 
      onSelect: () => {}
    }
  ]}
/>`,

    dialog: `<ShadcnUI.CustomDialog
  triggerButtonText="Create New"
  title="Create Post"
  description="Create a new blog post or article"
  footer={
    <ShadcnUI.Button>Save</ShadcnUI.Button>
  }
>
  <div className="space-y-4">
    <input placeholder="Title" />
    <textarea placeholder="Content" />
  </div>
</ShadcnUI.CustomDialog>`,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="container mx-auto px-4 py-3">
          <ShadcnUI.CustomAlert
            title="Welcome!"
            description="Browse through our component examples below."
          />
        </div>
      </header>

      <main className="container mx-auto px-4 pt-20 pb-24">
        <ShadcnUI.CustomTabs
          defaultValue="buttons"
          tabs={[
            {
              label: "Action Buttons",
              value: "buttons",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                  <div className="space-y-4">
                    <ShadcnUI.Button variant="default">
                      New Post
                    </ShadcnUI.Button>
                    <ShadcnUI.Button variant="outline">
                      Upload Media
                    </ShadcnUI.Button>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code>{codeExamples.buttons}</code>
                    </pre>
                    <ShadcnUI.Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(codeExamples.buttons)}
                    >
                      Copy Code
                    </ShadcnUI.Button>
                  </div>
                </div>
              ),
            },
            {
              label: "Context Menu",
              value: "contextMenu",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                  <div>
                    <ShadcnUI.CustomContextMenu
                      triggerLabel="Right click me"
                      items={[
                        {
                          label: "New Post",
                          shortcut: "⌘N",
                          onSelect: () => {},
                        },
                        {
                          label: "Upload",
                          shortcut: "⌘U",
                          onSelect: () => {},
                        },
                      ]}
                    />
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code>{codeExamples.contextMenu}</code>
                    </pre>
                    <ShadcnUI.Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(codeExamples.contextMenu)}
                    >
                      Copy Code
                    </ShadcnUI.Button>
                  </div>
                </div>
              ),
            },
            {
              label: "Dialog",
              value: "dialog",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6">
                  <div>
                    <ShadcnUI.CustomDialog
                      triggerButtonText="Create New"
                      title="Create Post"
                      description="Create a new blog post or article"
                      footer={<ShadcnUI.Button>Save</ShadcnUI.Button>}
                    >
                      <div className="space-y-4">
                        <ShadcnUI.Input placeholder="Title" />
                        <textarea
                          className="w-full p-2 border rounded"
                          placeholder="Content"
                        />
                      </div>
                    </ShadcnUI.CustomDialog>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <pre className="text-sm">
                      <code>{codeExamples.dialog}</code>
                    </pre>
                    <ShadcnUI.Button
                      variant="ghost"
                      size="sm"
                      onClick={() => copyToClipboard(codeExamples.dialog)}
                    >
                      Copy Code
                    </ShadcnUI.Button>
                  </div>
                </div>
              ),
            },
          ]}
        />
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <ShadcnUI.Button variant="outline" size="sm">
            Previous
          </ShadcnUI.Button>
          <div className="flex space-x-2">
            <ShadcnUI.Button variant="outline" size="sm">
              Save Draft
            </ShadcnUI.Button>
            <ShadcnUI.Button variant="default" size="sm">
              Publish
            </ShadcnUI.Button>
          </div>
          <ShadcnUI.Button variant="outline" size="sm">
            Next
          </ShadcnUI.Button>
        </div>
      </footer>
    </div>
  );
}

export default MainComponent;
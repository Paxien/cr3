"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const { toast } = ShadcnUI.useToast();
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  const [showCode, setShowCode] = React.useState("");

  const handleActionTrigger = (action) => {
    toast({
      title: `${action} triggered`,
      description: `The ${action.toLowerCase()} action was successful`,
    });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8 font-roboto">
        Action Links Showcase
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-12">
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Action Links</h2>
              <ShadcnUI.Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCode("action")}
              >
                View Code
              </ShadcnUI.Button>
            </div>

            <div className="space-y-4">
              <ShadcnUI.CustomDropdown
                triggerLabel="Account Actions"
                items={[
                  {
                    content: "Reset Password",
                    label: "Reset Password",
                    onSelect: () => handleActionTrigger("Password Reset"),
                  },
                  {
                    content: "Update Profile",
                    label: "Update Profile",
                    onSelect: () => handleActionTrigger("Profile Update"),
                  },
                  {
                    content: "Submit Form",
                    label: "Submit Form",
                    onSelect: () => handleActionTrigger("Form Submit"),
                  },
                ]}
              />

              <div className="flex gap-4">
                <ShadcnUI.CustomTooltip content="Click to reset your password">
                  <ShadcnUI.Button
                    variant="link"
                    onClick={() => handleActionTrigger("Password Reset")}
                  >
                    Reset Password
                  </ShadcnUI.Button>
                </ShadcnUI.CustomTooltip>

                <ShadcnUI.CustomTooltip content="Click to submit the form">
                  <ShadcnUI.Button
                    variant="link"
                    onClick={() => handleActionTrigger("Form Submit")}
                  >
                    Submit Form
                  </ShadcnUI.Button>
                </ShadcnUI.CustomTooltip>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Delete Actions</h2>
              <ShadcnUI.Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCode("delete")}
              >
                View Code
              </ShadcnUI.Button>
            </div>

            <div className="space-y-4">
              <ShadcnUI.CustomDialog
                triggerButtonText="Delete Item"
                title="Delete Item"
                description="Are you sure you want to delete this item?"
                footer={
                  <div className="flex justify-end gap-4">
                    <ShadcnUI.Button
                      variant="outline"
                      onClick={() => handleActionTrigger("Delete Cancelled")}
                    >
                      Cancel
                    </ShadcnUI.Button>
                    <ShadcnUI.Button
                      variant="destructive"
                      onClick={() => handleActionTrigger("Item Deleted")}
                    >
                      Delete
                    </ShadcnUI.Button>
                  </div>
                }
              >
                <p>This action cannot be undone.</p>
              </ShadcnUI.CustomDialog>

              <ShadcnUI.CustomTooltip content="Click to remove item">
                <ShadcnUI.Button
                  variant="destructive"
                  size="sm"
                  onClick={() => handleActionTrigger("Quick Delete")}
                >
                  Quick Delete
                </ShadcnUI.Button>
              </ShadcnUI.CustomTooltip>
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Confirmation Actions</h2>
              <ShadcnUI.Button
                variant="ghost"
                size="sm"
                onClick={() => setShowCode("confirm")}
              >
                View Code
              </ShadcnUI.Button>
            </div>

            <div className="space-y-4">
              <ShadcnUI.CustomAlertDialog
                triggerLabel="Delete Account"
                title="Are you absolutely sure?"
                description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                cancelLabel="Cancel"
                actionLabel="Yes, delete account"
              />

              <ShadcnUI.CustomSheet
                title="Confirm Action"
                description="Please review the details below"
                buttonLabel="Review & Submit"
                footer={
                  <ShadcnUI.Button
                    onClick={() => handleActionTrigger("Form Submitted")}
                  >
                    Confirm Submit
                  </ShadcnUI.Button>
                }
              >
                <div className="space-y-4">
                  <ShadcnUI.CustomAlert
                    title="Important"
                    description="Please review all information before submitting"
                  />
                  <p>Form details would go here...</p>
                </div>
              </ShadcnUI.CustomSheet>
            </div>
          </section>
        </div>

        <div className="lg:sticky lg:top-8 h-fit">
          <div className="bg-[#1e1e1e] text-white p-6 rounded-lg">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="font-medium">Code Preview</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const codeMap = {
                    action: `<ShadcnUI.CustomDropdown
  triggerLabel="Account Actions"
  items={[
    {
      content: "Reset Password",
      label: "Reset Password",
      onSelect: () => handleActionTrigger("Password Reset")
    },
    // ... more items
  ]}
/>

<ShadcnUI.CustomTooltip content="Click to reset">
  <ShadcnUI.Button variant="link">
    Reset Password
  </ShadcnUI.Button>
</ShadcnUI.CustomTooltip>`,
                    delete: `<ShadcnUI.CustomDialog
  triggerButtonText="Delete Item"
  title="Delete Item"
  description="Are you sure?"
  footer={
    <ShadcnUI.Button variant="destructive">
      Delete
    </ShadcnUI.Button>
  }
/>

<ShadcnUI.CustomTooltip content="Click to remove">
  <ShadcnUI.Button variant="destructive" size="sm">
    Quick Delete
  </ShadcnUI.Button>
</ShadcnUI.CustomTooltip>`,
                    confirm: `<ShadcnUI.CustomAlertDialog
  triggerLabel="Delete Account"
  title="Are you sure?"
  description="This cannot be undone."
  cancelLabel="Cancel"
  actionLabel="Delete"
/>

<ShadcnUI.CustomSheet
  title="Confirm Action"
  description="Review details"
  buttonLabel="Review"
  footer={<ShadcnUI.Button>Confirm</ShadcnUI.Button>}
>
  <ShadcnUI.CustomAlert
    title="Important"
    description="Review before submit"
  />
</ShadcnUI.CustomSheet>`,
                  };

                  const code =
                    codeMap[showCode] || "Select a section to view code";
                  navigator.clipboard.writeText(code);
                  toast({
                    title: "Code copied!",
                    description: "The code has been copied to your clipboard",
                  });
                }}
              >
                Copy Code
              </ShadcnUI.Button>
            </div>

            <pre className="bg-[#2a2a2a] p-4 rounded overflow-x-auto">
              <code className="text-sm">
                {showCode === "action" &&
                  `<ShadcnUI.CustomDropdown
  triggerLabel="Account Actions"
  items={[
    {
      content: "Reset Password",
      label: "Reset Password",
      onSelect: () => handleActionTrigger("Password Reset")
    },
    // ... more items
  ]}
/>

<ShadcnUI.CustomTooltip content="Click to reset">
  <ShadcnUI.Button variant="link">
    Reset Password
  </ShadcnUI.Button>
</ShadcnUI.CustomTooltip>`}

                {showCode === "delete" &&
                  `<ShadcnUI.CustomDialog
  triggerButtonText="Delete Item"
  title="Delete Item"
  description="Are you sure?"
  footer={
    <ShadcnUI.Button variant="destructive">
      Delete
    </ShadcnUI.Button>
  }
/>

<ShadcnUI.CustomTooltip content="Click to remove">
  <ShadcnUI.Button variant="destructive" size="sm">
    Quick Delete
  </ShadcnUI.Button>
</ShadcnUI.CustomTooltip>`}

                {showCode === "confirm" &&
                  `<ShadcnUI.CustomAlertDialog
  triggerLabel="Delete Account"
  title="Are you sure?"
  description="This cannot be undone."
  cancelLabel="Cancel"
  actionLabel="Delete"
/>

<ShadcnUI.CustomSheet
  title="Confirm Action"
  description="Review details"
  buttonLabel="Review"
  footer={<ShadcnUI.Button>Confirm</ShadcnUI.Button>}
>
  <ShadcnUI.CustomAlert
    title="Important"
    description="Review before submit"
  />
</ShadcnUI.CustomSheet>`}

                {!showCode && "Select a section to view code"}
              </code>
            </pre>
          </div>
        </div>
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
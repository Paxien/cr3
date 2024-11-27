"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isPending, setIsPending] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const { toast } = ShadcnUI.useToast();

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        description: "Code copied to clipboard!",
      });
    });
  };

  const CodeSection = ({ code, children }) => {
    return (
      <div className="flex flex-col md:flex-row w-full gap-8 mb-8 p-4 border rounded-lg">
        <div className="w-full md:w-1/2 flex items-center justify-center">
          {children}
        </div>
        <div className="w-full md:w-1/2 relative">
          <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
            <code>{code}</code>
          </pre>
          <button
            onClick={() => copyToClipboard(code)}
            className="absolute top-2 right-2 p-2 rounded hover:bg-gray-200"
            aria-label="Copy code"
          >
            <i className="fas fa-copy"></i>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Feedback Component Showcase</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Dismissible Alerts</h2>
        <CodeSection
          code={`<ShadcnUI.CustomAlert 
  title="Action Required" 
  description="Please review and accept the updated terms of service."
  variant="destructive"
/>`}
        >
          <ShadcnUI.CustomAlert
            title="Action Required"
            description="Please review and accept the updated terms of service."
            variant="destructive"
          />
        </CodeSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Acknowledgment Confirmation
        </h2>
        <CodeSection
          code={`<ShadcnUI.CustomDialog
  triggerLabel="Show Terms"
  title="Terms of Service"
  description="Please read our terms of service carefully"
  footer={
    <ShadcnUI.Button onClick={() => setIsOpen(false)}>
      I Understand
    </ShadcnUI.Button>
  }
/>`}
        >
          <ShadcnUI.CustomDialog
            open={isOpen}
            onOpenChange={setIsOpen}
            triggerLabel="Show Terms"
            title="Terms of Service"
            description="Please read our terms of service carefully"
            footer={
              <ShadcnUI.Button onClick={() => setIsOpen(false)}>
                I Understand
              </ShadcnUI.Button>
            }
          >
            <div className="mt-4">
              <p>Here are our terms of service...</p>
            </div>
          </ShadcnUI.CustomDialog>
        </CodeSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Acknowledgment Badge</h2>
        <CodeSection
          code={`<div className="flex items-center gap-2">
  <span>Message read</span>
  <ShadcnUI.Badge variant="outline">
    <i className="fas fa-check mr-1"></i>
    Acknowledged
  </ShadcnUI.Badge>
</div>`}
        >
          <div className="flex items-center gap-2">
            <span>Message read</span>
            <ShadcnUI.Badge variant="outline">
              <i className="fas fa-check mr-1"></i>
              Acknowledged
            </ShadcnUI.Badge>
          </div>
        </CodeSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Accessible Form Feedback
        </h2>
        <CodeSection
          code={`<form className="space-y-4">
  <div>
    <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
    <ShadcnUI.Input 
      id="email"
      type="email"
      aria-describedby="email-error"
    />
    <p id="email-error" className="text-red-500 text-sm mt-1">
      Please enter a valid email address
    </p>
  </div>
  <ShadcnUI.Button disabled={isPending}>
    {isPending ? "Submitting..." : "Submit"}
  </ShadcnUI.Button>
</form>`}
        >
          <form className="space-y-4">
            <div>
              <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
              <ShadcnUI.Input
                id="email"
                type="email"
                aria-describedby="email-error"
              />
              <p id="email-error" className="text-red-500 text-sm mt-1">
                Please enter a valid email address
              </p>
            </div>
            <ShadcnUI.Button disabled={isPending}>
              {isPending ? "Submitting..." : "Submit"}
            </ShadcnUI.Button>
          </form>
        </CodeSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Accessible Tooltips</h2>
        <CodeSection
          code={`<ShadcnUI.CustomTooltip
  content={
    <div role="tooltip" aria-label="Help information">
      This button submits the form
    </div>
  }
>
  <ShadcnUI.Button>
    <i className="fas fa-question-circle"></i>
    Help
  </ShadcnUI.Button>
</ShadcnUI.CustomTooltip>`}
        >
          <ShadcnUI.CustomTooltip
            content={
              <div role="tooltip" aria-label="Help information">
                This button submits the form
              </div>
            }
          >
            <ShadcnUI.Button>
              <i className="fas fa-question-circle"></i>
              Help
            </ShadcnUI.Button>
          </ShadcnUI.CustomTooltip>
        </CodeSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">
          Accessible Notifications
        </h2>
        <CodeSection
          code={`<div>
  <ShadcnUI.Button
    onClick={() => {
      toast({
        title: "Success",
        description: "Your profile has been updated",
        role: "alert",
        "aria-live": "assertive"
      })
    }}
  >
    Show Notification
  </ShadcnUI.Button>
  <ShadcnUI.Toaster />
</div>`}
        >
          <div>
            <ShadcnUI.Button
              onClick={() => {
                toast({
                  title: "Success",
                  description: "Your profile has been updated",
                  role: "alert",
                  "aria-live": "assertive",
                });
              }}
            >
              Show Notification
            </ShadcnUI.Button>
            <ShadcnUI.Toaster />
          </div>
        </CodeSection>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Focus Indicators</h2>
        <CodeSection
          code={`<div className="space-y-4">
  <ShadcnUI.Input 
    placeholder="Focus me"
    className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
  />
  <ShadcnUI.Button 
    className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
  >
    Focusable Button
  </ShadcnUI.Button>
</div>`}
        >
          <div className="space-y-4">
            <ShadcnUI.Input
              placeholder="Focus me"
              className="focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <ShadcnUI.Button className="focus:ring-2 focus:ring-blue-500 focus:outline-none">
              Focusable Button
            </ShadcnUI.Button>
          </div>
        </CodeSection>
      </section>
    </div>
  );
}

export default MainComponent;
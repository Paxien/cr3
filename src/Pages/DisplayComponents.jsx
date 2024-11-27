"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const { toast } = ShadcnUI.useToast();
  const [isOpen, setIsOpen] = React.useState(false);

  const accordionData = [
    {
      value: "item-1",
      trigger: "How does our service work?",
      content:
        "Our service provides an easy way to manage and organize your data. Simply sign up and start using our tools.",
    },
    {
      value: "item-2",
      trigger: "What payment methods do you accept?",
      content: "We accept all major credit cards, PayPal, and bank transfers.",
    },
  ];

  const tableData = [
    {
      invoice: "INV001",
      status: "Pending",
      method: "PayPal",
      amount: "$250.00",
    },
    {
      invoice: "INV002",
      status: "Processing",
      method: "Credit Card",
      amount: "$150.00",
    },
  ];

  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Display Components</h2>

          <div className="flex items-center gap-4">
            <ShadcnUI.Avatar
              src="/placeholder-avatar.jpg"
              fallbackLabel="JD"
              alt="John Doe"
            />

            <div className="space-x-2">
              <ShadcnUI.Badge variant="default">New</ShadcnUI.Badge>
              <ShadcnUI.Badge variant="secondary">Popular</ShadcnUI.Badge>
              <ShadcnUI.Badge variant="outline">Coming Soon</ShadcnUI.Badge>
            </div>
          </div>

          <ShadcnUI.Alert
            title="Success!"
            variant="default"
            description="Your changes have been saved successfully."
          />

          <div className="flex items-center gap-4">
            <ShadcnUI.CustomTooltip content="Click to learn more">
              <ShadcnUI.Button variant="outline">Hover me</ShadcnUI.Button>
            </ShadcnUI.CustomTooltip>

            <ShadcnUI.CustomPopover triggerLabel="Click me">
              <div className="p-4">
                <h3 className="font-medium mb-2">Popover Content</h3>
                <p className="text-sm text-gray-600">
                  This is some helpful information.
                </p>
              </div>
            </ShadcnUI.CustomPopover>
          </div>

          <ShadcnUI.CustomDialog
            title="Important Update"
            description="Please review the following information carefully."
            triggerButtonText="Open Dialog"
            footer={
              <div className="flex justify-end">
                <ShadcnUI.Button
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </ShadcnUI.Button>
              </div>
            }
          >
            <p className="py-4">
              This is the dialog content where you can put any information.
            </p>
          </ShadcnUI.CustomDialog>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => {
              toast({
                title: "Notification",
                description: "This is a toast notification example",
              });
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Show Toast
          </button>
          <ShadcnUI.Toaster />

          <ShadcnUI.CustomAccordion type="single" data={accordionData} />

          <div className="space-y-2">
            <p className="text-sm text-gray-600">Download Progress</p>
            <ShadcnUI.Progress value={66} />
          </div>

          <div className="flex items-center justify-center p-4">
            <svg
              className="animate-spin h-8 w-8 text-blue-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>

          <ShadcnUI.Table>
            <ShadcnUI.TableCaption>Recent Transactions</ShadcnUI.TableCaption>
            <ShadcnUI.TableHeader>
              <ShadcnUI.TableRow>
                <ShadcnUI.TableHead>Invoice</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Status</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Method</ShadcnUI.TableHead>
                <ShadcnUI.TableHead className="text-right">
                  Amount
                </ShadcnUI.TableHead>
              </ShadcnUI.TableRow>
            </ShadcnUI.TableHeader>
            <ShadcnUI.TableBody>
              {tableData.map((row) => (
                <ShadcnUI.TableRow key={row.invoice}>
                  <ShadcnUI.TableCell>{row.invoice}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{row.status}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{row.method}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell className="text-right">
                    {row.amount}
                  </ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
              ))}
            </ShadcnUI.TableBody>
          </ShadcnUI.Table>

          <div className="border rounded-lg p-4">
            <h3 className="font-medium mb-4">Project Timeline</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500"></div>
                <div>
                  <p className="font-medium">Project Started</p>
                  <p className="text-sm text-gray-600">January 1, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-green-500"></div>
                <div>
                  <p className="font-medium">Phase 1 Complete</p>
                  <p className="text-sm text-gray-600">February 15, 2024</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-yellow-500"></div>
                <div>
                  <p className="font-medium">Phase 2 In Progress</p>
                  <p className="text-sm text-gray-600">Current</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
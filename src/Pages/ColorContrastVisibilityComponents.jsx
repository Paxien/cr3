"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [date, setDate] = React.useState(new Date());
  const [highContrast, setHighContrast] = React.useState(false);
  const [fontSize, setFontSize] = React.useState(16);
  const [textHighlight, setTextHighlight] = React.useState(false);
  const { toast } = ShadcnUI.useToast();

  const fontSizeAdjustments = ["12px", "14px", "16px", "18px", "20px"];

  const codeSnippets = {
    contrastToggle: `<ShadcnUI.Switch 
  onCheckedChange={(checked) => setHighContrast(checked)}
  aria-label="High Contrast Mode"
/>`,
    fontSizeAdjuster: `<ShadcnUI.Select
  placeholder="Select font size"
  value={fontSize}
  onValueChange={(value) => setFontSize(value)}
  aria-label="Font Size Adjustment"
>`,
    formExample: `<div role="form" aria-label="Contact Form">
  <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
  <ShadcnUI.Input 
    type="email" 
    id="email"
    aria-describedby="email-description"
  />
</div>`,
    datePicker: `<ShadcnUI.Calendar
  mode="single"
  selected={date}
  onSelect={setDate}
  aria-label="Date Selection"
/>`,
  };

  return (
    <div
      className={`p-8 ${
        highContrast ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="max-w-4xl mx-auto space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold mb-4">
            Color Contrast & Visibility Components
          </h2>

          <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg">
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span>High Contrast Mode:</span>
                <ShadcnUI.Switch
                  onCheckedChange={(checked) => setHighContrast(checked)}
                  aria-label="High Contrast Mode"
                />
              </div>

              <div className="space-y-2">
                <span>Font Size Adjustment:</span>
                <ShadcnUI.Select
                  value={fontSize.toString()}
                  onValueChange={(value) => setFontSize(Number(value))}
                  groups={[
                    {
                      items: fontSizeAdjustments.map((size) => ({
                        value: size,
                        label: size,
                      })),
                    },
                  ]}
                />
              </div>
            </div>

            <ShadcnUI.CustomPopover triggerLabel="View Code">
              <pre className="p-4 bg-gray-800 text-white rounded-md">
                <code>{codeSnippets.contrastToggle}</code>
              </pre>
            </ShadcnUI.CustomPopover>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Form Accessibility Components</h2>

          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            <form className="space-y-4">
              <div role="group" aria-labelledby="contact-form">
                <ShadcnUI.Label htmlFor="email">Email Address</ShadcnUI.Label>
                <ShadcnUI.Input
                  type="email"
                  id="email"
                  aria-describedby="email-help"
                  className="w-full"
                />
                <span id="email-help" className="text-sm text-gray-500">
                  Please enter a valid email address
                </span>
              </div>

              <div role="group" aria-labelledby="preferences">
                <ShadcnUI.Label className="mb-2">
                  Notification Preferences
                </ShadcnUI.Label>
                <ShadcnUI.RadioGroup
                  defaultValue="email"
                  aria-label="Notification Preferences"
                >
                  <div className="flex items-center space-x-2">
                    <ShadcnUI.RadioGroupItem value="email" id="radio-email" />
                    <label htmlFor="radio-email">Email</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ShadcnUI.RadioGroupItem value="sms" id="radio-sms" />
                    <label htmlFor="radio-sms">SMS</label>
                  </div>
                </ShadcnUI.RadioGroup>
              </div>

              <div className="flex items-center space-x-2">
                <ShadcnUI.Checkbox
                  id="terms"
                  aria-describedby="terms-description"
                />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none cursor-pointer"
                  >
                    Accept terms and conditions
                  </label>
                  <p id="terms-description" className="text-sm text-gray-500">
                    You agree to our terms of service and privacy policy
                  </p>
                </div>
              </div>
            </form>

            <ShadcnUI.CustomPopover triggerLabel="View Code">
              <pre className="p-4 bg-gray-800 text-white rounded-md">
                <code>{codeSnippets.formExample}</code>
              </pre>
            </ShadcnUI.CustomPopover>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Date Picker Component</h2>

          <div className="bg-gray-100 p-4 rounded-lg">
            <div className="flex justify-between">
              <ShadcnUI.Calendar
                mode="single"
                selected={date}
                onSelect={(newDate) => setDate(newDate || new Date())}
                className="rounded-md border"
                aria-label="Date Selection Calendar"
              />

              <ShadcnUI.CustomPopover triggerLabel="View Code">
                <pre className="p-4 bg-gray-800 text-white rounded-md">
                  <code>{codeSnippets.datePicker}</code>
                </pre>
              </ShadcnUI.CustomPopover>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Alert & Dialog Examples</h2>

          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            <ShadcnUI.CustomAlert
              title="Important Information"
              description="This alert is readable by screen readers"
            />

            <ShadcnUI.CustomAlertDialog
              triggerLabel="Delete Account"
              title="Are you sure?"
              description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
              cancelLabel="Cancel"
              actionLabel="Delete Account"
            />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tooltips & Help Text</h2>

          <div className="bg-gray-100 p-4 rounded-lg space-y-4">
            <ShadcnUI.CustomTooltip content="This is additional information">
              <ShadcnUI.Button variant="outline">
                Hover for Info
              </ShadcnUI.Button>
            </ShadcnUI.CustomTooltip>

            <div className="mt-4">
              <ShadcnUI.Badge variant="outline" className="cursor-help">
                <span role="img" aria-label="Information icon">
                  ℹ️
                </span>
                Help Available
              </ShadcnUI.Badge>
            </div>
          </div>
        </section>

        <ShadcnUI.Toaster />
      </div>
    </div>
  );
}

export default MainComponent;
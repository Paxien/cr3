"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function AccessibleForms({ onViewCode }) {
  return (
    <section aria-labelledby="forms-heading">
      <h2 id="forms-heading" className="text-2xl font-semibold mb-4">
        Accessible Forms
      </h2>
      <div className="space-y-4">
        <ShadcnUI.CustomDialog
          triggerButtonText="Open Form"
          title="Accessible Form"
          description="Form with proper ARIA attributes"
          footer={<ShadcnUI.Button type="submit">Submit Form</ShadcnUI.Button>}
        >
          <form>
            <div className="space-y-4">
              <div>
                <ShadcnUI.Label htmlFor="name">Name (Required)</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="name"
                  name="name"
                  aria-required="true"
                  aria-invalid="false"
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="email">Email (Required)</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="email"
                  name="email"
                  type="email"
                  aria-required="true"
                  aria-describedby="email-hint"
                />
                <div id="email-hint" className="text-sm text-gray-500">
                  Enter your email address
                </div>
              </div>

              <ShadcnUI.CustomSelect
                label="Preferences"
                placeholder="Select your preferences"
                groups={[
                  {
                    items: [
                      { value: "1", label: "Option 1" },
                      { value: "2", label: "Option 2" },
                    ],
                  },
                ]}
              />

              <fieldset>
                <legend className="text-sm font-medium">
                  Notification Preferences
                </legend>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <ShadcnUI.Checkbox id="email-notifications" name="notifications" />
                    <ShadcnUI.Label htmlFor="email-notifications" className="ml-2">
                      Email Notifications
                    </ShadcnUI.Label>
                  </div>
                </div>
              </fieldset>
            </div>
          </form>
        </ShadcnUI.CustomDialog>
        <ShadcnUI.Button onClick={onViewCode} variant="outline" size="sm">
          View Code
        </ShadcnUI.Button>
      </div>
    </section>
  );
}

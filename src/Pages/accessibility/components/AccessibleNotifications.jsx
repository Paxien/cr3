"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function AccessibleNotifications() {
  const { toast } = ShadcnUI.useToast();

  return (
    <section className="border rounded-lg p-6" aria-labelledby="notifications-heading">
      <h2 id="notifications-heading" className="text-xl font-semibold mb-4">
        Accessible Notifications
      </h2>

      <div className="space-y-4">
        <ShadcnUI.Button
          onClick={() => {
            toast({
              title: "Success!",
              description: "Your action was completed successfully",
            });
          }}
        >
          Show Success Toast
        </ShadcnUI.Button>

        <ShadcnUI.Progress value={66} max={100} />

        <div className="flex items-center justify-center p-4 border rounded" aria-busy="true">
          <div
            className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>

      <ShadcnUI.Toaster />
    </section>
  );
}

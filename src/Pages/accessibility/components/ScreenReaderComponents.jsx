"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function ScreenReaderComponents({ onViewCode }) {
  return (
    <section aria-labelledby="screen-reader-heading">
      <h2 id="screen-reader-heading" className="text-2xl font-semibold mb-4">
        Screen Reader Components
      </h2>
      <div className="space-y-4">
        <ShadcnUI.CustomDialog
          triggerButtonText="Open Dialog"
          title="Screen Reader Friendly Dialog"
          description="This dialog has proper ARIA attributes"
          footer={
            <ShadcnUI.Button aria-label="Close dialog">Close</ShadcnUI.Button>
          }
        >
          <div role="region" aria-live="polite">
            Content that updates will be announced
          </div>
        </ShadcnUI.CustomDialog>
        <ShadcnUI.Button onClick={onViewCode} variant="outline" size="sm">
          View Code
        </ShadcnUI.Button>
      </div>
    </section>
  );
}

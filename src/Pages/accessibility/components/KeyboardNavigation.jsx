"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function KeyboardNavigation({ onViewCode }) {
  return (
    <section aria-labelledby="keyboard-nav-heading">
      <h2 id="keyboard-nav-heading" className="text-2xl font-semibold mb-4">
        Keyboard Navigation
      </h2>
      <div className="space-y-4">
        <ShadcnUI.CustomAccordion
          type="single"
          data={[
            {
              value: "item-1",
              trigger: "Keyboard Navigation Section",
              content: "Navigate with arrow keys and space/enter",
            },
          ]}
        />

        <ShadcnUI.CustomTabs
          tabs={[
            {
              label: "Tab 1",
              value: "tab1",
              content: "Content 1",
            },
            {
              label: "Tab 2",
              value: "tab2",
              content: "Content 2",
            },
          ]}
        />
        <ShadcnUI.Button onClick={onViewCode} variant="outline" size="sm">
          View Code
        </ShadcnUI.Button>
      </div>
    </section>
  );
}

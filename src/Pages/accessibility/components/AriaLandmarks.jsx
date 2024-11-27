"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function AriaLandmarks({ onViewCode }) {
  return (
    <section aria-labelledby="landmarks-heading">
      <h2 id="landmarks-heading" className="text-2xl font-semibold mb-4">
        ARIA Landmarks
      </h2>
      <div className="space-y-4">
        <header role="banner" aria-label="Section header">
          <ShadcnUI.CustomNavigation
            sections={[
              {
                trigger: "Main Navigation",
                items: [
                  {
                    href: "#main-content",
                    title: "Skip to Main Content",
                    description: "Skip navigation",
                  },
                ],
              },
            ]}
          />
        </header>
        <ShadcnUI.Button
          onClick={onViewCode}
          variant="outline"
          size="sm"
        >
          View Code
        </ShadcnUI.Button>
      </div>
    </section>
  );
}

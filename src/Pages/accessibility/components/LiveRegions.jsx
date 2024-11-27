"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function LiveRegions({ onViewCode }) {
  return (
    <section aria-labelledby="live-regions-heading">
      <h2 id="live-regions-heading" className="text-2xl font-semibold mb-4">
        Live Regions
      </h2>
      <div className="space-y-4">
        <div role="status" aria-live="polite">
          <ShadcnUI.CustomAlert
            variant="default"
            title="Status Update"
            description="This alert will be announced to screen readers"
          />
        </div>
        <ShadcnUI.Button onClick={onViewCode} variant="outline" size="sm">
          View Code
        </ShadcnUI.Button>
      </div>
    </section>
  );
}

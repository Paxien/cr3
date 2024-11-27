"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function ErrorPrevention() {
  return (
    <section className="border rounded-lg p-6" aria-labelledby="error-prevention-heading">
      <h2 id="error-prevention-heading" className="text-xl font-semibold mb-4">
        Error Prevention
      </h2>
      <ShadcnUI.CustomAlertDialog
        triggerLabel="Delete Account"
        title="Are you sure?"
        description="This action cannot be undone. All of your data will be permanently removed."
        actionLabel="Yes, delete account"
        cancelLabel="Cancel"
      />
    </section>
  );
}

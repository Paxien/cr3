"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function SimpleLanguage() {
  const [language, setLanguage] = React.useState("regular");

  return (
    <section className="border rounded-lg p-6" aria-labelledby="simple-language-heading">
      <h2 id="simple-language-heading" className="text-xl font-semibold mb-4">
        Simple Language Mode
      </h2>
      <div className="flex items-center space-x-4">
        <ShadcnUI.Switch
          checked={language === "simple"}
          onCheckedChange={(checked) => setLanguage(checked ? "simple" : "regular")}
        />
        <span>Enable Simple Language</span>
      </div>
      <p className="mt-4">
        {language === "simple"
          ? "This text is easy to read. It uses simple words."
          : "This content demonstrates the linguistic complexity variance between standard and simplified modes of textual presentation."}
      </p>
    </section>
  );
}

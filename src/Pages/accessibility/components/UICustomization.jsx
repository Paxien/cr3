"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function UICustomization() {
  const [fontSize, setFontSize] = React.useState(16);
  const [theme, setTheme] = React.useState("light");

  return (
    <section className="border rounded-lg p-6" aria-labelledby="ui-customization-heading">
      <h2 id="ui-customization-heading" className="text-xl font-semibold mb-4">
        Customizable UI
      </h2>
      <div className="space-y-4">
        <ShadcnUI.CustomSelect
          value={fontSize.toString()}
          onValueChange={(val) => setFontSize(parseInt(val))}
          placeholder="Font Size"
          groups={[
            {
              items: [
                { value: "14", label: "Small" },
                { value: "16", label: "Medium" },
                { value: "18", label: "Large" },
              ],
            },
          ]}
        />
        <ShadcnUI.CustomSelect
          value={theme}
          onValueChange={setTheme}
          placeholder="Theme"
          groups={[
            {
              items: [
                { value: "light", label: "Light Theme" },
                { value: "dark", label: "Dark Theme" },
                { value: "high-contrast", label: "High Contrast" },
              ],
            },
          ]}
        />
      </div>
    </section>
  );
}

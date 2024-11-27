"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [currentLang, setCurrentLang] = React.useState("en");
  const [currentRegion, setCurrentRegion] = React.useState("NA");
  const [currentTimezone, setCurrentTimezone] = React.useState("UTC");
  const [selectedCode, setSelectedCode] = React.useState(null);

  const regionData = [
    {
      groupName: "Americas",
      items: [
        { value: "NA", label: "North America" },
        { value: "SA", label: "South America" },
        { value: "CA", label: "Central America" },
        { value: "CAR", label: "Caribbean" },
      ],
    },
    {
      groupName: "Europe",
      items: [
        { value: "WE", label: "Western Europe" },
        { value: "EE", label: "Eastern Europe" },
        { value: "CE", label: "Central Europe" },
        { value: "NE", label: "Northern Europe" },
      ],
    },
    {
      groupName: "Asia Pacific",
      items: [
        { value: "EA", label: "East Asia" },
        { value: "SA", label: "South Asia" },
        { value: "SEA", label: "Southeast Asia" },
        { value: "OCE", label: "Oceania" },
      ],
    },
  ];

  const languageData = [
    {
      groupName: "Common Languages",
      items: [
        { value: "en", label: "English" },
        { value: "es", label: "Spanish" },
        { value: "fr", label: "French" },
        { value: "de", label: "German" },
        { value: "zh", label: "Chinese" },
      ],
    },
    {
      groupName: "Other Languages",
      items: [
        { value: "ar", label: "Arabic" },
        { value: "hi", label: "Hindi" },
        { value: "ja", label: "Japanese" },
        { value: "ko", label: "Korean" },
        { value: "ru", label: "Russian" },
      ],
    },
  ];

  const timezoneData = [
    {
      groupName: "Popular Timezones",
      items: [
        { value: "UTC", label: "UTC (Coordinated Universal Time)" },
        { value: "EST", label: "EST (Eastern Standard Time)" },
        { value: "PST", label: "PST (Pacific Standard Time)" },
        { value: "GMT", label: "GMT (Greenwich Mean Time)" },
        { value: "CET", label: "CET (Central European Time)" },
      ],
    },
    {
      groupName: "Asia/Pacific",
      items: [
        { value: "JST", label: "JST (Japan Standard Time)" },
        { value: "CST", label: "CST (China Standard Time)" },
        { value: "IST", label: "IST (India Standard Time)" },
        { value: "AEST", label: "AEST (Australian Eastern Standard Time)" },
      ],
    },
  ];

  const components = [
    {
      title: "Language Selector",
      description: "Select your preferred language",
      code: `<ShadcnUI.CustomSelect
  placeholder="Select Language"
  value={currentLang}
  onValueChange={setCurrentLang}
  groups={languageData}
/>`,
      component: (
        <ShadcnUI.CustomSelect
          placeholder="Select Language"
          value={currentLang}
          onValueChange={setCurrentLang}
          groups={languageData}
        />
      ),
    },
    {
      title: "Region Selector",
      description: "Select your geographical region",
      code: `<ShadcnUI.CustomSelect
  placeholder="Select Region" 
  value={currentRegion}
  onValueChange={setCurrentRegion}
  groups={regionData}
/>`,
      component: (
        <ShadcnUI.CustomSelect
          placeholder="Select Region"
          value={currentRegion}
          onValueChange={setCurrentRegion}
          groups={regionData}
        />
      ),
    },
    {
      title: "Timezone Selector",
      description: "Select your timezone",
      code: `<ShadcnUI.CustomSelect
  placeholder="Select Timezone"
  value={currentTimezone}
  onValueChange={setCurrentTimezone} 
  groups={timezoneData}
/>`,
      component: (
        <ShadcnUI.CustomSelect
          placeholder="Select Timezone"
          value={currentTimezone}
          onValueChange={setCurrentTimezone}
          groups={timezoneData}
        />
      ),
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">
          Multi-Region Navigation Components
        </h1>
        <p className="text-gray-600">
          A showcase of ShadcnUI components for multi-region support
        </p>
      </div>

      <div className="grid gap-8">
        {components.map((item, index) => (
          <div key={index} className="border rounded-lg p-6">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="w-full max-w-md">{item.component}</div>
              </div>

              <div className="flex-1">
                <div className="relative">
                  <div className="bg-gray-800 rounded-lg p-4 text-white">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm">Code Example</span>
                      <ShadcnUI.Button
                        variant="ghost"
                        size="sm"
                        onClick={() => {
                          navigator.clipboard.writeText(item.code);
                          setSelectedCode(index);
                          setTimeout(() => setSelectedCode(null), 2000);
                        }}
                      >
                        {selectedCode === index ? (
                          <span className="text-green-400">Copied!</span>
                        ) : (
                          <i className="fas fa-copy" />
                        )}
                      </ShadcnUI.Button>
                    </div>
                    <pre className="text-sm overflow-x-auto">
                      <code>{item.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ShadcnUI.Alert className="mt-8" variant="default">
        <div className="flex items-center gap-2">
          <i className="fas fa-info-circle" />
          <span>
            Currently selected: Language - {currentLang}, Region -{" "}
            {currentRegion}, Timezone - {currentTimezone}
          </span>
        </div>
      </ShadcnUI.Alert>
    </div>
  );
}

export default MainComponent;
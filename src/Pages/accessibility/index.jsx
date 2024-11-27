"use client";
import React from "react";
import AriaLandmarks from "./components/AriaLandmarks";
import ScreenReaderComponents from "./components/ScreenReaderComponents";
import LiveRegions from "./components/LiveRegions";
import AccessibleForms from "./components/AccessibleForms";
import KeyboardNavigation from "./components/KeyboardNavigation";
import TextToSpeech from "./components/TextToSpeech";
import UICustomization from "./components/UICustomization";
import SimpleLanguage from "./components/SimpleLanguage";
import ErrorPrevention from "./components/ErrorPrevention";
import AccessibleNotifications from "./components/AccessibleNotifications";
import { codeExamples } from "./utils/codeExamples";

export default function AccessibilityComponents() {
  const [currentCode, setCurrentCode] = React.useState("");

  return (
    <div className="min-h-screen bg-white">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>

      <header role="banner" className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold">Accessibility Components</h1>
          <p className="text-gray-600">WCAG 2.1 Compliant Component Examples</p>
        </div>
      </header>

      <main id="main-content" role="main" className="container mx-auto px-4 py-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="space-y-12">
            <AriaLandmarks onViewCode={() => setCurrentCode(codeExamples.landmarks)} />
            <ScreenReaderComponents onViewCode={() => setCurrentCode(codeExamples.screenReader)} />
            <LiveRegions onViewCode={() => setCurrentCode(codeExamples.liveRegions)} />
            <AccessibleForms onViewCode={() => setCurrentCode(codeExamples.forms)} />
            <KeyboardNavigation onViewCode={() => setCurrentCode(codeExamples.keyboardNav)} />
            <TextToSpeech onViewCode={() => setCurrentCode(codeExamples.textToSpeech)} />
            <UICustomization onViewCode={() => setCurrentCode(codeExamples.customUI)} />
            <SimpleLanguage onViewCode={() => setCurrentCode(codeExamples.simpleLanguage)} />
            <ErrorPrevention onViewCode={() => setCurrentCode(codeExamples.errorPrevention)} />
            <AccessibleNotifications onViewCode={() => setCurrentCode(codeExamples.notifications)} />
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="sticky top-4 space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-2">Code Example</h2>
                <pre className="bg-white p-4 rounded border overflow-x-auto">
                  <code>{currentCode || "Select 'View Code' to see the implementation"}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

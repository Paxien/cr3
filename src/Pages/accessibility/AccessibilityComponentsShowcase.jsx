"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isToastOpen, setToastOpen] = React.useState(false);
  const [date, setDate] = React.useState(new Date());
  const [language, setLanguage] = React.useState("regular");
  const [fontSize, setFontSize] = React.useState(16);
  const [theme, setTheme] = React.useState("light");
  const { toast } = ShadcnUI.useToast();

  const textToSpeech = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  const codeExamples = {
    textToSpeech: `const textToSpeech = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
};`,
    customUI: `<ShadcnUI.CustomSelect
  value={fontSize}
  onValueChange={setFontSize}
  placeholder="Font Size"
  groups={[{
    items: [
      { value: '14', label: 'Small' },
      { value: '16', label: 'Medium' },
      { value: '18', label: 'Large' }
    ]
  }]}
/>`,
    simpleLanguage: `<ShadcnUI.Switch
  checked={language === 'simple'}
  onCheckedChange={(checked) => 
    setLanguage(checked ? 'simple' : 'regular')
  }
/>`,
    errorPrevention: `<ShadcnUI.CustomAlertDialog
  triggerLabel="Delete Account"
  title="Are you sure?"
  description="This action cannot be undone"
  actionLabel="Yes, delete account"
  cancelLabel="Cancel"
/>`,
    notifications: `<ShadcnUI.CustomToast
  type="success"
  title="Action completed"
  description="Your changes have been saved"
/>`,
  };

  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Accessibility Components Showcase
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-8">
          <section
            className="border rounded-lg p-6"
            aria-labelledby="text-to-speech-heading"
          >
            <h2
              id="text-to-speech-heading"
              className="text-xl font-semibold mb-4"
            >
              Text-to-Speech
            </h2>
            <div className="mb-4">
              <ShadcnUI.Button
                onClick={() =>
                  textToSpeech("Hello! This is a text to speech example.")
                }
                aria-label="Speak sample text"
              >
                <i className="fas fa-volume-up mr-2"></i>
                Speak Text
              </ShadcnUI.Button>
            </div>
            <ShadcnUI.CustomAlert
              title="Tip"
              description="Click the button to hear the text being read aloud"
            />
          </section>

          <section
            className="border rounded-lg p-6"
            aria-labelledby="ui-customization-heading"
          >
            <h2
              id="ui-customization-heading"
              className="text-xl font-semibold mb-4"
            >
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

          <section
            className="border rounded-lg p-6"
            aria-labelledby="simple-language-heading"
          >
            <h2
              id="simple-language-heading"
              className="text-xl font-semibold mb-4"
            >
              Simple Language Mode
            </h2>
            <div className="flex items-center space-x-4">
              <ShadcnUI.Switch
                checked={language === "simple"}
                onCheckedChange={(checked) =>
                  setLanguage(checked ? "simple" : "regular")
                }
              />
              <span>Enable Simple Language</span>
            </div>
            <p className="mt-4">
              {language === "simple"
                ? "This text is easy to read. It uses simple words."
                : "This content demonstrates the linguistic complexity variance between standard and simplified modes of textual presentation."}
            </p>
          </section>

          <section
            className="border rounded-lg p-6"
            aria-labelledby="error-prevention-heading"
          >
            <h2
              id="error-prevention-heading"
              className="text-xl font-semibold mb-4"
            >
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
        </div>

        <div className="flex flex-col gap-8">
          <section
            className="border rounded-lg p-6"
            aria-labelledby="notifications-heading"
          >
            <h2
              id="notifications-heading"
              className="text-xl font-semibold mb-4"
            >
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

              <div
                className="flex items-center justify-center p-4 border rounded"
                aria-busy="true"
              >
                <div
                  className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"
                  role="status"
                >
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          </section>

          <section
            className="border rounded-lg p-6"
            aria-labelledby="code-examples-heading"
          >
            <h2
              id="code-examples-heading"
              className="text-xl font-semibold mb-4"
            >
              Code Examples
            </h2>
            <ShadcnUI.CustomTabs
              defaultValue="textToSpeech"
              className="w-full"
              tabs={[
                {
                  label: "Text-to-Speech",
                  value: "textToSpeech",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                      <code>{codeExamples.textToSpeech}</code>
                    </pre>
                  ),
                },
                {
                  label: "Custom UI",
                  value: "customUI",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                      <code>{codeExamples.customUI}</code>
                    </pre>
                  ),
                },
                {
                  label: "Simple Language",
                  value: "simpleLanguage",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                      <code>{codeExamples.simpleLanguage}</code>
                    </pre>
                  ),
                },
                {
                  label: "Error Prevention",
                  value: "errorPrevention",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                      <code>{codeExamples.errorPrevention}</code>
                    </pre>
                  ),
                },
                {
                  label: "Notifications",
                  value: "notifications",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                      <code>{codeExamples.notifications}</code>
                    </pre>
                  ),
                },
              ]}
            />
          </section>
        </div>
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
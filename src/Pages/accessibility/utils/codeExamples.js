export const codeExamples = {
  landmarks: `{/* ARIA Landmarks Example */}
<header role="banner" aria-label="Site header">
  <ShadcnUI.CustomNavigation 
    sections={[{
      trigger: "Main Navigation",
      items: [
        {
          href: "#main-content",
          title: "Skip to Main Content",
          description: "Skip navigation" 
        }
      ]
    }]}
  />
</header>`,

  screenReader: `{/* Screen Reader Components */}
<ShadcnUI.CustomDialog
  triggerButtonText="Open Dialog" 
  title="Screen Reader Friendly Dialog"
  description="This dialog has proper ARIA attributes"
  footer={
    <ShadcnUI.Button aria-label="Close dialog">
      Close
    </ShadcnUI.Button>
  }
>
  <div role="region" aria-live="polite">
    Content that updates will be announced
  </div>
</ShadcnUI.CustomDialog>`,

  liveRegions: `{/* Live Regions Example */}
<div role="status" aria-live="polite">
  <ShadcnUI.CustomAlert
    variant="default"
    title="Status Update"
    description="This alert will be announced to screen readers"
  />
</div>`,

  forms: `{/* Accessible Form */}
<ShadcnUI.CustomDialog
  triggerButtonText="Open Form"
  title="Accessible Form"
  description="Form with proper ARIA attributes"
  footer={
    <ShadcnUI.Button type="submit">
      Submit Form
    </ShadcnUI.Button>
  }
>
  <form>
    <div className="space-y-4">
      <div>
        <ShadcnUI.Label htmlFor="name">
          Name (Required)
        </ShadcnUI.Label>
        <ShadcnUI.Input
          id="name"
          name="name" 
          aria-required="true"
          aria-invalid="false"
        />
      </div>

      <div>
        <ShadcnUI.Label htmlFor="email">
          Email (Required)
        </ShadcnUI.Label>
        <ShadcnUI.Input
          id="email"
          name="email"
          type="email"
          aria-required="true"
          aria-describedby="email-hint"
        />
        <div id="email-hint" className="text-sm text-gray-500">
          Enter your email address
        </div>
      </div>

      <ShadcnUI.CustomSelect
        label="Preferences"
        placeholder="Select your preferences"
        groups={[
          {
            items: [
              { value: "1", label: "Option 1" },
              { value: "2", label: "Option 2" }
            ]
          }
        ]}
      />

      <fieldset>
        <legend className="text-sm font-medium">
          Notification Preferences
        </legend>
        <div className="space-y-2">
          <div className="flex items-center">
            <ShadcnUI.Checkbox 
              id="email-notifications"
              name="notifications"
            />
            <ShadcnUI.Label 
              htmlFor="email-notifications"
              className="ml-2"
            >
              Email Notifications
            </ShadcnUI.Label>
          </div>
        </div>
      </fieldset>
    </div>
  </form>
</ShadcnUI.CustomDialog>`,

  keyboardNav: `{/* Keyboard Navigation Example */}
<ShadcnUI.CustomAccordion
  type="single"
  data={[
    {
      value: "item-1",
      trigger: "Keyboard Navigation Section",
      content: "Navigate with arrow keys and space/enter"
    }
  ]}
/>

<ShadcnUI.CustomTabs
  tabs={[
    {
      label: "Tab 1",
      value: "tab1",
      content: "Content 1"
    },
    {
      label: "Tab 2", 
      value: "tab2",
      content: "Content 2"
    }
  ]}
/>`,

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
/>`
};

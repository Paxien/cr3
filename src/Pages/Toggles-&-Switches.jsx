"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [switchValue, setSwitchValue] = React.useState(false);
  const [radioValue, setRadioValue] = React.useState("default");
  const [toggleValue, setToggleValue] = React.useState("first");
  const [groupToggleValue, setGroupToggleValue] = React.useState("");
  const [pressed, setPressed] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const codeExamples = {
    toggle: `<ShadcnUI.Switch 
  defaultChecked={switchValue} 
  onCheckedChange={setSwitchValue} 
/>`,
    checkbox: `<div className="flex items-center space-x-2">
  <ShadcnUI.Checkbox id="terms" />
  <label htmlFor="terms">
    Accept terms and conditions
  </label>
</div>`,
    radioGroup: `<ShadcnUI.RadioGroup 
  defaultValue="default" 
  onValueChange={setRadioValue}
>
  <div className="flex items-center space-x-2">
    <ShadcnUI.RadioGroupItem value="default" id="r1" />
    <label htmlFor="r1">Default</label>
  </div>
  <div className="flex items-center space-x-2">
    <ShadcnUI.RadioGroupItem value="comfortable" id="r2" />
    <label htmlFor="r2">Comfortable</label>
  </div>
  <div className="flex items-center space-x-2">
    <ShadcnUI.RadioGroupItem value="compact" id="r3" />
    <label htmlFor="r3">Compact</label>
  </div>
</ShadcnUI.RadioGroup>`,
    switchButton: `<ShadcnUI.Toggle 
  pressed={pressed}
  onPressedChange={setPressed}
>
  Toggle
</ShadcnUI.Toggle>`,
    toggleGroup: `<ShadcnUI.ToggleGroup 
  type="single"
  value={toggleValue}
  onValueChange={setToggleValue}
>
  <ShadcnUI.ToggleGroupItem value="first">First</ShadcnUI.ToggleGroupItem>
  <ShadcnUI.ToggleGroupItem value="second">Second</ShadcnUI.ToggleGroupItem>
  <ShadcnUI.ToggleGroupItem value="third">Third</ShadcnUI.ToggleGroupItem>
</ShadcnUI.ToggleGroup>`,
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">
        Interactive Components Showcase
      </h1>

      <div className="space-y-12">
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Toggle Switch</h2>
            <div className="flex items-center space-x-4">
              <ShadcnUI.Switch
                defaultChecked={switchValue}
                onCheckedChange={setSwitchValue}
              />
              <span>State: {switchValue ? "On" : "Off"}</span>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">{codeExamples.toggle}</pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Checkbox</h2>
            <div className="flex items-center space-x-2">
              <ShadcnUI.Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none"
              >
                Accept terms and conditions
              </label>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">{codeExamples.checkbox}</pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Radio Group</h2>
            <ShadcnUI.RadioGroup
              defaultValue="default"
              onValueChange={setRadioValue}
            >
              <div className="flex flex-col space-y-2">
                <div className="flex items-center space-x-2">
                  <ShadcnUI.RadioGroupItem value="default" id="r1" />
                  <label htmlFor="r1">Default</label>
                </div>
                <div className="flex items-center space-x-2">
                  <ShadcnUI.RadioGroupItem value="comfortable" id="r2" />
                  <label htmlFor="r2">Comfortable</label>
                </div>
                <div className="flex items-center space-x-2">
                  <ShadcnUI.RadioGroupItem value="compact" id="r3" />
                  <label htmlFor="r3">Compact</label>
                </div>
              </div>
            </ShadcnUI.RadioGroup>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">
              {codeExamples.radioGroup}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Switch Button</h2>
            <ShadcnUI.Toggle
              pressed={pressed}
              onPressedChange={setPressed}
              className="w-[100px]"
            >
              {pressed ? "On" : "Off"}
            </ShadcnUI.Toggle>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">
              {codeExamples.switchButton}
            </pre>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Multi-state Toggle</h2>
            <ShadcnUI.ToggleGroup
              type="single"
              value={toggleValue}
              onValueChange={setToggleValue}
              className="flex space-x-2"
            >
              <ShadcnUI.ToggleGroupItem value="first">
                First
              </ShadcnUI.ToggleGroupItem>
              <ShadcnUI.ToggleGroupItem value="second">
                Second
              </ShadcnUI.ToggleGroupItem>
              <ShadcnUI.ToggleGroupItem value="third">
                Third
              </ShadcnUI.ToggleGroupItem>
            </ShadcnUI.ToggleGroup>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm overflow-auto">
              {codeExamples.toggleGroup}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
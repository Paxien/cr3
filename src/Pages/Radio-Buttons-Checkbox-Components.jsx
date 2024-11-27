"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [showCode, setShowCode] = React.useState({
    radio: false,
    radioGroup: false,
    checkbox: false,
    checkboxGroup: false,
    switch: false,
  });

  const [radioValue, setRadioValue] = React.useState("comfortable");
  const [checkboxValues, setCheckboxValues] = React.useState([]);
  const [switchValue, setSwitchValue] = React.useState(false);

  const radioCode = `<ShadcnUI.RadioGroup value="${radioValue}" onValueChange={setRadioValue}>
    <div className="flex items-center space-x-2">
      <ShadcnUI.RadioGroupItem value="comfortable" id="r1" />
      <label htmlFor="r1">Comfortable</label>
    </div>
  </ShadcnUI.RadioGroup>`;

  const radioGroupCode = `<ShadcnUI.RadioGroup value="${radioValue}" onValueChange={setRadioValue}>
    <div className="flex flex-col gap-2">
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
  </ShadcnUI.RadioGroup>`;

  const checkboxCode = `<div className="flex items-center space-x-2">
    <ShadcnUI.Checkbox id="terms" />
    <label htmlFor="terms">Accept terms</label>
  </div>`;

  const checkboxGroupCode = `<div className="flex flex-col gap-2">
    {['Option 1', 'Option 2', 'Option 3'].map(option => (
      <div key={option} className="flex items-center space-x-2">
        <ShadcnUI.Checkbox 
          id={option}
          checked={checkboxValues.includes(option)}
          onCheckedChange={(checked) => {
            if(checked) {
              setCheckboxValues(prev => [...prev, option])
            } else {
              setCheckboxValues(prev => prev.filter(v => v !== option))
            }
          }}
        />
        <label htmlFor={option}>{option}</label>
      </div>
    ))}
  </div>`;

  const switchCode = `<div className="flex items-center space-x-2">
    <ShadcnUI.Switch
      checked={switchValue} 
      onCheckedChange={setSwitchValue}
    />
    <label>Airplane Mode</label>
  </div>`;

  return (
    <div className="w-full max-w-4xl mx-auto p-6 space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Single Radio Button</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setShowCode((prev) => ({ ...prev, radio: !prev.radio }))
                }
              >
                {showCode.radio ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>

            <div className="flex space-x-2">
              <ShadcnUI.RadioGroup
                value={radioValue}
                onValueChange={setRadioValue}
              >
                <div className="flex items-center space-x-2">
                  <ShadcnUI.RadioGroupItem value="comfortable" id="r1" />
                  <label htmlFor="r1">Comfortable</label>
                </div>
              </ShadcnUI.RadioGroup>
            </div>

            {showCode.radio && (
              <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                <code>{radioCode}</code>
              </pre>
            )}
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Radio Group</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setShowCode((prev) => ({
                    ...prev,
                    radioGroup: !prev.radioGroup,
                  }))
                }
              >
                {showCode.radioGroup ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>

            <ShadcnUI.RadioGroup
              value={radioValue}
              onValueChange={setRadioValue}
            >
              <div className="flex flex-col gap-2">
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

            {showCode.radioGroup && (
              <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                <code>{radioGroupCode}</code>
              </pre>
            )}
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Single Checkbox</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setShowCode((prev) => ({ ...prev, checkbox: !prev.checkbox }))
                }
              >
                {showCode.checkbox ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>

            <div className="flex items-center space-x-2">
              <ShadcnUI.Checkbox id="terms" />
              <label htmlFor="terms">Accept terms</label>
            </div>

            {showCode.checkbox && (
              <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                <code>{checkboxCode}</code>
              </pre>
            )}
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Checkbox Group</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setShowCode((prev) => ({
                    ...prev,
                    checkboxGroup: !prev.checkboxGroup,
                  }))
                }
              >
                {showCode.checkboxGroup ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>

            <div className="flex flex-col gap-2">
              {["Option 1", "Option 2", "Option 3"].map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <ShadcnUI.Checkbox
                    id={option}
                    checked={checkboxValues.includes(option)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setCheckboxValues((prev) => [...prev, option]);
                      } else {
                        setCheckboxValues((prev) =>
                          prev.filter((v) => v !== option)
                        );
                      }
                    }}
                  />
                  <label htmlFor={option}>{option}</label>
                </div>
              ))}
            </div>

            {showCode.checkboxGroup && (
              <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                <code>{checkboxGroupCode}</code>
              </pre>
            )}
          </div>

          <div className="rounded-lg border p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-semibold">Switch/Toggle</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() =>
                  setShowCode((prev) => ({ ...prev, switch: !prev.switch }))
                }
              >
                {showCode.switch ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>

            <div className="flex items-center space-x-2">
              <ShadcnUI.Switch
                checked={switchValue}
                onCheckedChange={setSwitchValue}
              />
              <label>Airplane Mode</label>
            </div>

            {showCode.switch && (
              <pre className="mt-4 p-4 bg-gray-100 rounded overflow-x-auto">
                <code>{switchCode}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg border h-fit sticky top-4">
          <h2 className="text-lg font-semibold mb-4">Code Preview</h2>
          <div className="space-y-4">
            {Object.entries(showCode).map(([key, value]) => {
              if (!value) return null;
              let code;
              switch (key) {
                case "radio":
                  code = radioCode;
                  break;
                case "radioGroup":
                  code = radioGroupCode;
                  break;
                case "checkbox":
                  code = checkboxCode;
                  break;
                case "checkboxGroup":
                  code = checkboxGroupCode;
                  break;
                case "switch":
                  code = switchCode;
                  break;
                default:
                  code = "";
              }
              return (
                <div key={key} className="p-4 bg-white rounded border">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-medium capitalize">{key}</h3>
                    <ShadcnUI.Button
                      variant="ghost"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(code)}
                    >
                      Copy
                    </ShadcnUI.Button>
                  </div>
                  <pre className="text-sm overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
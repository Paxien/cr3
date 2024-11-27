"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [validationValue, setValidationValue] = React.useState("");
  const [isValid, setIsValid] = React.useState(false);
  const [maskedValue, setMaskedValue] = React.useState("");
  const { toast } = ShadcnUI.useToast();

  const maskPhoneNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
    if (match) {
      const formatted = match.slice(1).filter(Boolean).join("-");
      return formatted;
    }
    return value;
  };

  const handleMaskChange = (e) => {
    const raw = e.target.value;
    setMaskedValue(maskPhoneNumber(raw));
  };

  const handleValidationChange = (e) => {
    const value = e.target.value;
    setValidationValue(value);
    setIsValid(value.length >= 6);
  };

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "Code snippet has been copied to clipboard",
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <ShadcnUI.Toaster />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input with Icon</h3>
          <div className="relative">
            <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
            <ShadcnUI.Input className="pl-10" placeholder="Search..." />
          </div>
          <ShadcnUI.Button
            variant="outline"
            className="mt-2"
            onClick={() =>
              handleCopyCode(`<div className="relative">
  <i className="fas fa-search absolute left-3 top-3 text-gray-400" />
  <ShadcnUI.Input className="pl-10" placeholder="Search..." />
</div>`)
            }
          >
            Copy Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input with Label</h3>
          <div className="space-y-2">
            <ShadcnUI.Label htmlFor="email">Email Address</ShadcnUI.Label>
            <ShadcnUI.Input
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() =>
              handleCopyCode(`<div className="space-y-2">
  <ShadcnUI.Label htmlFor="email">Email Address</ShadcnUI.Label>
  <ShadcnUI.Input id="email" type="email" placeholder="Enter your email" />
</div>`)
            }
          >
            Copy Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input with Help Text</h3>
          <div className="space-y-2">
            <ShadcnUI.Input placeholder="Create password" type="password" />
            <p className="text-sm text-gray-500">
              Password must be at least 8 characters long
            </p>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() =>
              handleCopyCode(`<div className="space-y-2">
  <ShadcnUI.Input placeholder="Create password" type="password" />
  <p className="text-sm text-gray-500">Password must be at least 8 characters long</p>
</div>`)
            }
          >
            Copy Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input with Validation State</h3>
          <div className="relative">
            <ShadcnUI.Input
              value={validationValue}
              onChange={handleValidationChange}
              placeholder="Enter at least 6 characters"
              className={isValid ? "border-green-500" : "border-red-500"}
            />
            {isValid ? (
              <i className="fas fa-check absolute right-3 top-3 text-green-500" />
            ) : (
              <i className="fas fa-times absolute right-3 top-3 text-red-500" />
            )}
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() =>
              handleCopyCode(`<div className="relative">
  <ShadcnUI.Input
    value={validationValue}
    onChange={handleValidationChange}
    placeholder="Enter at least 6 characters"
    className={isValid ? "border-green-500" : "border-red-500"}
  />
  {isValid ? (
    <i className="fas fa-check absolute right-3 top-3 text-green-500" />
  ) : (
    <i className="fas fa-times absolute right-3 top-3 text-red-500" />
  )}
</div>`)
            }
          >
            Copy Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input with Tooltip</h3>
          <div>
            <ShadcnUI.CustomTooltip content="Enter your full username including @">
              <div>
                <ShadcnUI.Input placeholder="Username" />
              </div>
            </ShadcnUI.CustomTooltip>
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() =>
              handleCopyCode(`<ShadcnUI.CustomTooltip content="Enter your full username including @">
  <div>
    <ShadcnUI.Input placeholder="Username" />
  </div>
</ShadcnUI.CustomTooltip>`)
            }
          >
            Copy Code
          </ShadcnUI.Button>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Input with Masking</h3>
          <div>
            <ShadcnUI.Input
              value={maskedValue}
              onChange={handleMaskChange}
              placeholder="Phone: 123-456-7890"
              maxLength={12}
            />
          </div>
          <ShadcnUI.Button
            variant="outline"
            onClick={() =>
              handleCopyCode(`const maskPhoneNumber = (value) => {
  const cleaned = value.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{0,3})(\d{0,3})(\d{0,4})$/);
  if (match) {
    const formatted = match.slice(1).filter(Boolean).join('-');
    return formatted;
  }
  return value;
};

<ShadcnUI.Input
  value={maskedValue}
  onChange={handleMaskChange}
  placeholder="Phone: 123-456-7890"
  maxLength={12}
/>`)
            }
          >
            Copy Code
          </ShadcnUI.Button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
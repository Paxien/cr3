"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [stepData, setStepData] = React.useState({
    step1: { name: "", email: "" },
    step2: { address: "", city: "", country: "" },
    step3: { cardNumber: "", expiry: "", cvv: "" },
  });
  const [errors, setErrors] = React.useState({});
  const [selectedCode, setSelectedCode] = React.useState(null);
  const { toast } = ShadcnUI.useToast();

  const steps = [
    { id: 1, title: "Account Details", description: "Your basic information" },
    { id: 2, title: "Address Details", description: "Where you're located" },
    {
      id: 3,
      title: "Payment Details",
      description: "Your payment information",
    },
  ];

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!stepData.step1.name) newErrors.name = "Name required";
        if (!stepData.step1.email) newErrors.email = "Email required";
        if (
          stepData.step1.email &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(stepData.step1.email)
        ) {
          newErrors.email = "Invalid email";
        }
        break;
      case 2:
        if (!stepData.step2.address) newErrors.address = "Address required";
        if (!stepData.step2.city) newErrors.city = "City required";
        if (!stepData.step2.country) newErrors.country = "Country required";
        break;
      case 3:
        if (!stepData.step3.cardNumber)
          newErrors.cardNumber = "Card number required";
        if (!stepData.step3.expiry) newErrors.expiry = "Expiry required";
        if (!stepData.step3.cvv) newErrors.cvv = "CVV required";
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < steps.length) {
        setCurrentStep((prev) => prev + 1);
        toast({
          title: "Step Completed",
          description: `Step ${currentStep} completed successfully`,
        });
      } else {
        toast({
          title: "Form Completed",
          description: "All steps completed successfully!",
        });
      }
    }
  };

  const handlePrevious = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const StepContent = {
    1: (
      <ShadcnUI.Card className="p-6 space-y-4">
        <div>
          <ShadcnUI.Label htmlFor="name">Full Name</ShadcnUI.Label>
          <ShadcnUI.Input
            id="name"
            value={stepData.step1.name}
            onChange={(e) =>
              setStepData((prev) => ({
                ...prev,
                step1: { ...prev.step1, name: e.target.value },
              }))
            }
            className="mt-1"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <ShadcnUI.Label htmlFor="email">Email Address</ShadcnUI.Label>
          <ShadcnUI.Input
            id="email"
            type="email"
            value={stepData.step1.email}
            onChange={(e) =>
              setStepData((prev) => ({
                ...prev,
                step1: { ...prev.step1, email: e.target.value },
              }))
            }
            className="mt-1"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
      </ShadcnUI.Card>
    ),
    2: (
      <ShadcnUI.Card className="p-6 space-y-4">
        <div>
          <ShadcnUI.Label htmlFor="address">Street Address</ShadcnUI.Label>
          <ShadcnUI.Input
            id="address"
            value={stepData.step2.address}
            onChange={(e) =>
              setStepData((prev) => ({
                ...prev,
                step2: { ...prev.step2, address: e.target.value },
              }))
            }
            className="mt-1"
          />
          {errors.address && (
            <p className="text-red-500 text-sm mt-1">{errors.address}</p>
          )}
        </div>
        <div>
          <ShadcnUI.Label htmlFor="city">City</ShadcnUI.Label>
          <ShadcnUI.Input
            id="city"
            value={stepData.step2.city}
            onChange={(e) =>
              setStepData((prev) => ({
                ...prev,
                step2: { ...prev.step2, city: e.target.value },
              }))
            }
            className="mt-1"
          />
          {errors.city && (
            <p className="text-red-500 text-sm mt-1">{errors.city}</p>
          )}
        </div>
        <div>
          <ShadcnUI.Label htmlFor="country">Country</ShadcnUI.Label>
          <ShadcnUI.Select
            value={stepData.step2.country}
            onValueChange={(value) =>
              setStepData((prev) => ({
                ...prev,
                step2: { ...prev.step2, country: value },
              }))
            }
          >
            <ShadcnUI.CustomSelect
              placeholder="Select a country"
              groups={[
                {
                  items: [
                    { value: "us", label: "United States" },
                    { value: "uk", label: "United Kingdom" },
                    { value: "ca", label: "Canada" },
                  ],
                },
              ]}
            />
          </ShadcnUI.Select>
          {errors.country && (
            <p className="text-red-500 text-sm mt-1">{errors.country}</p>
          )}
        </div>
      </ShadcnUI.Card>
    ),
    3: (
      <ShadcnUI.Card className="p-6 space-y-4">
        <div>
          <ShadcnUI.Label htmlFor="cardNumber">Card Number</ShadcnUI.Label>
          <ShadcnUI.Input
            id="cardNumber"
            value={stepData.step3.cardNumber}
            onChange={(e) =>
              setStepData((prev) => ({
                ...prev,
                step3: { ...prev.step3, cardNumber: e.target.value },
              }))
            }
            className="mt-1"
          />
          {errors.cardNumber && (
            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
          )}
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <ShadcnUI.Label htmlFor="expiry">Expiry Date</ShadcnUI.Label>
            <ShadcnUI.Input
              id="expiry"
              placeholder="MM/YY"
              value={stepData.step3.expiry}
              onChange={(e) =>
                setStepData((prev) => ({
                  ...prev,
                  step3: { ...prev.step3, expiry: e.target.value },
                }))
              }
              className="mt-1"
            />
            {errors.expiry && (
              <p className="text-red-500 text-sm mt-1">{errors.expiry}</p>
            )}
          </div>
          <div>
            <ShadcnUI.Label htmlFor="cvv">CVV</ShadcnUI.Label>
            <ShadcnUI.Input
              id="cvv"
              value={stepData.step3.cvv}
              onChange={(e) =>
                setStepData((prev) => ({
                  ...prev,
                  step3: { ...prev.step3, cvv: e.target.value },
                }))
              }
              className="mt-1"
            />
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
        </div>
      </ShadcnUI.Card>
    ),
  };

  const stepCode = {
    1: `// Step 1: Account Details
<ShadcnUI.Card className="p-6 space-y-4">
  <div>
    <ShadcnUI.Label htmlFor="name">Full Name</ShadcnUI.Label>
    <ShadcnUI.Input id="name" />
  </div>
  <div>
    <ShadcnUI.Label htmlFor="email">Email Address</ShadcnUI.Label>
    <ShadcnUI.Input id="email" type="email" />
  </div>
</ShadcnUI.Card>`,
    2: `// Step 2: Address Details
<ShadcnUI.Card className="p-6 space-y-4">
  <div>
    <ShadcnUI.Label htmlFor="address">Street Address</ShadcnUI.Label>
    <ShadcnUI.Input id="address" />
  </div>
  <ShadcnUI.CustomSelect
    placeholder="Select a country"
    groups={[{
      items: [
        { value: "us", label: "United States" },
        { value: "uk", label: "United Kingdom" },
        { value: "ca", label: "Canada" }
      ]
    }]}
  />
</ShadcnUI.Card>`,
    3: `// Step 3: Payment Details
<ShadcnUI.Card className="p-6 space-y-4">
  <div>
    <ShadcnUI.Label htmlFor="cardNumber">Card Number</ShadcnUI.Label>
    <ShadcnUI.Input id="cardNumber" />
  </div>
  <div className="grid grid-cols-2 gap-4">
    <div>
      <ShadcnUI.Label htmlFor="expiry">Expiry Date</ShadcnUI.Label>
      <ShadcnUI.Input id="expiry" placeholder="MM/YY" />
    </div>
    <div>
      <ShadcnUI.Label htmlFor="cvv">CVV</ShadcnUI.Label>
      <ShadcnUI.Input id="cvv" />
    </div>
  </div>
</ShadcnUI.Card>`,
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="w-2/3 p-8">
        <ShadcnUI.Card className="max-w-3xl mx-auto">
          <div className="p-6">
            <div className="mb-8">
              <div className="flex justify-between items-center">
                {steps.map((step, index) => (
                  <div key={step.id} className="flex items-center">
                    <ShadcnUI.CustomTooltip content={step.description}>
                      <div
                        className={`
                        rounded-full h-12 w-12 flex items-center justify-center
                        transition-colors duration-200
                        ${
                          currentStep === step.id
                            ? "bg-blue-500 text-white"
                            : currentStep > step.id
                            ? "bg-green-500 text-white"
                            : "bg-gray-200"
                        }
                      `}
                      >
                        {currentStep > step.id ? "✓" : step.id}
                      </div>
                    </ShadcnUI.CustomTooltip>
                    {index < steps.length - 1 && (
                      <div
                        className={`h-1 w-24 mx-2 transition-colors duration-200 
                        ${
                          currentStep > step.id ? "bg-green-500" : "bg-gray-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h2 className="text-2xl font-bold">
                {steps[currentStep - 1].title}
              </h2>
              <p className="text-gray-500">
                {steps[currentStep - 1].description}
              </p>
            </div>

            {StepContent[currentStep]}

            <div className="flex justify-between mt-6">
              <ShadcnUI.Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                Previous
              </ShadcnUI.Button>
              <ShadcnUI.Button onClick={handleNext}>
                {currentStep === steps.length ? "Submit" : "Next"}
              </ShadcnUI.Button>
            </div>
          </div>
        </ShadcnUI.Card>
      </div>

      <div className="w-1/3 p-8 border-l bg-white">
        <div className="sticky top-8">
          <ShadcnUI.Card className="mb-4">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Current Step Code</h3>
              <ShadcnUI.CustomAccordion
                type="single"
                data={[
                  {
                    value: "code",
                    trigger: "View Code",
                    content: (
                      <div className="relative">
                        <pre className="p-4 bg-gray-900 text-gray-100 rounded-md overflow-x-auto">
                          <code>{stepCode[currentStep]}</code>
                        </pre>
                        <ShadcnUI.Button
                          variant="secondary"
                          className="mt-2"
                          onClick={() => {
                            navigator.clipboard.writeText(
                              stepCode[currentStep]
                            );
                            toast({
                              title: "Code Copied",
                              description:
                                "The code has been copied to your clipboard",
                            });
                          }}
                        >
                          Copy Code
                        </ShadcnUI.Button>
                      </div>
                    ),
                  },
                ]}
              />
            </div>
          </ShadcnUI.Card>

          <ShadcnUI.Card>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Form Progress</h3>
              <div className="space-y-2">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center">
                    <div
                      className={`w-2 h-2 rounded-full mr-2 
                      ${
                        currentStep > step.id
                          ? "bg-green-500"
                          : currentStep === step.id
                          ? "bg-blue-500"
                          : "bg-gray-200"
                      }`}
                    />
                    <span
                      className={`text-sm 
                      ${currentStep === step.id ? "font-medium" : ""}`}
                    >
                      {step.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ShadcnUI.Card>
        </div>
      </div>
      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
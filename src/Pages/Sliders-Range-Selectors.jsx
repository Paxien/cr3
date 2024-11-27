"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [rangeValue, setRangeValue] = React.useState([20, 80]);
  const [singleValue, setSingleValue] = React.useState([50]);
  const [stepValue, setStepValue] = React.useState([25]);
  const [videoPos, setVideoPos] = React.useState([0]);
  const [selectedCode, setSelectedCode] = React.useState("range");

  const codeExamples = {
    range: `<ShadcnUI.Slider 
  defaultValue={[20, 80]}
  max={100}
  step={1}
  onValueChange={setRangeValue}
/>`,
    single: `<ShadcnUI.Slider
  defaultValue={[50]}
  max={100} 
  step={1}
  onValueChange={setSingleValue}
/>`,
    stepped: `<ShadcnUI.Slider
  defaultValue={[25]}
  max={100}
  step={25}
  onValueChange={setStepValue} 
/>`,
    carousel: `<ShadcnUI.CustomCarousel
  items={[
    <img src="/image1.jpg" alt="Slide 1" />,
    <img src="/image2.jpg" alt="Slide 2" />,
    <img src="/image3.jpg" alt="Slide 3" />
  ]}
/>`,
    video: `<ShadcnUI.Slider
  defaultValue={[0]}
  max={100}
  step={1}
  onValueChange={setVideoPos}
/>`,
  };

  return (
    <div className="container mx-auto p-8">
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Range Slider</h3>
              <ShadcnUI.Slider
                defaultValue={[20, 80]}
                max={100}
                step={1}
                onValueChange={setRangeValue}
                className="w-full"
              />
              <p className="mt-2 text-sm text-gray-600">
                Selected range: {rangeValue[0]} - {rangeValue[1]}
              </p>
            </div>

            <div className="p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Single Slider</h3>
              <ShadcnUI.Slider
                defaultValue={[50]}
                max={100}
                step={1}
                onValueChange={setSingleValue}
                className="w-full"
              />
              <p className="mt-2 text-sm text-gray-600">Value: {singleValue}</p>
            </div>

            <div className="p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Stepped Slider (25% steps)</h3>
              <ShadcnUI.Slider
                defaultValue={[25]}
                max={100}
                step={25}
                onValueChange={setStepValue}
                className="w-full"
              />
              <p className="mt-2 text-sm text-gray-600">Value: {stepValue}%</p>
            </div>

            <div className="p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Image Carousel</h3>
              <ShadcnUI.CustomCarousel
                items={[
                  <div
                    key="1"
                    className="p-4 bg-gray-100 rounded-lg text-center"
                  >
                    Slide 1
                  </div>,
                  <div
                    key="2"
                    className="p-4 bg-gray-100 rounded-lg text-center"
                  >
                    Slide 2
                  </div>,
                  <div
                    key="3"
                    className="p-4 bg-gray-100 rounded-lg text-center"
                  >
                    Slide 3
                  </div>,
                ]}
              />
            </div>

            <div className="p-6 rounded-lg border">
              <h3 className="font-semibold mb-4">Video Position Slider</h3>
              <ShadcnUI.Slider
                defaultValue={[0]}
                max={100}
                step={1}
                onValueChange={setVideoPos}
                className="w-full"
              />
              <p className="mt-2 text-sm text-gray-600">
                Position: {videoPos}%
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="sticky top-8">
              <div className="p-6 rounded-lg border bg-gray-50">
                <ShadcnUI.CustomTabs
                  defaultValue="range"
                  tabs={[
                    {
                      label: "Range Slider",
                      value: "range",
                      content: (
                        <pre className="p-4 rounded bg-gray-100 overflow-auto">
                          <code>{codeExamples.range}</code>
                        </pre>
                      ),
                    },
                    {
                      label: "Single Slider",
                      value: "single",
                      content: (
                        <pre className="p-4 rounded bg-gray-100 overflow-auto">
                          <code>{codeExamples.single}</code>
                        </pre>
                      ),
                    },
                    {
                      label: "Stepped Slider",
                      value: "stepped",
                      content: (
                        <pre className="p-4 rounded bg-gray-100 overflow-auto">
                          <code>{codeExamples.stepped}</code>
                        </pre>
                      ),
                    },
                    {
                      label: "Carousel",
                      value: "carousel",
                      content: (
                        <pre className="p-4 rounded bg-gray-100 overflow-auto">
                          <code>{codeExamples.carousel}</code>
                        </pre>
                      ),
                    },
                    {
                      label: "Video Slider",
                      value: "video",
                      content: (
                        <pre className="p-4 rounded bg-gray-100 overflow-auto">
                          <code>{codeExamples.video}</code>
                        </pre>
                      ),
                    },
                  ]}
                />

                <ShadcnUI.Button
                  className="mt-4"
                  onClick={() => {
                    navigator.clipboard.writeText(codeExamples[selectedCode]);
                  }}
                >
                  <i className="fas fa-copy mr-2"></i>
                  Copy Code
                </ShadcnUI.Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
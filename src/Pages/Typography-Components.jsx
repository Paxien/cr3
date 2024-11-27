"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [fontSize, setFontSize] = React.useState(16);
  const [textAlign, setTextAlign] = React.useState("left");
  const [textColor, setTextColor] = React.useState("#000000");
  const [lineHeight, setLineHeight] = React.useState(1.5);
  const [openSection, setOpenSection] = React.useState("");

  const sampleText =
    "The quick brown fox jumps over the lazy dog. This is a sample text to demonstrate typography controls.";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  const CodeBlock = ({ code, title }) => {
    return (
      <div className="w-full bg-gray-100 rounded-md p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold">{title}</span>
          <ShadcnUI.Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(code)}
          >
            <i className="fas fa-copy mr-2"></i>
            Copy
          </ShadcnUI.Button>
        </div>
        <pre className="text-sm overflow-x-auto">
          <code>{code}</code>
        </pre>
      </div>
    );
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Typography Controls Showcase</h1>

      <div className="space-y-12">
        <ShadcnUI.CustomAccordion
          type="single"
          data={[
            {
              value: "font-size",
              trigger: "Font Size Selector",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <ShadcnUI.Label>Font Size: {fontSize}px</ShadcnUI.Label>
                      <ShadcnUI.Slider
                        defaultValue={[fontSize]}
                        max={32}
                        min={12}
                        step={1}
                        onValueChange={(value) => setFontSize(value[0])}
                      />
                    </div>
                    <p style={{ fontSize: `${fontSize}px` }}>{sampleText}</p>
                  </div>
                  <CodeBlock
                    title="Font Size Implementation"
                    code={`<ShadcnUI.Slider
  defaultValue={[16]}
  max={32}
  min={12}
  step={1}
  onValueChange={(value) => setFontSize(value[0])}
/>`}
                  />
                </div>
              ),
            },
            {
              value: "text-align",
              trigger: "Text Alignment",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <ShadcnUI.RadioGroup
                      defaultValue={textAlign}
                      onValueChange={setTextAlign}
                    >
                      <div className="flex gap-4">
                        <div className="flex items-center space-x-2">
                          <ShadcnUI.RadioGroupItem value="left" id="left" />
                          <ShadcnUI.Label htmlFor="left">Left</ShadcnUI.Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ShadcnUI.RadioGroupItem value="center" id="center" />
                          <ShadcnUI.Label htmlFor="center">
                            Center
                          </ShadcnUI.Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ShadcnUI.RadioGroupItem value="right" id="right" />
                          <ShadcnUI.Label htmlFor="right">Right</ShadcnUI.Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <ShadcnUI.RadioGroupItem
                            value="justify"
                            id="justify"
                          />
                          <ShadcnUI.Label htmlFor="justify">
                            Justify
                          </ShadcnUI.Label>
                        </div>
                      </div>
                    </ShadcnUI.RadioGroup>
                    <p style={{ textAlign }}>{sampleText}</p>
                  </div>
                  <CodeBlock
                    title="Text Alignment Implementation"
                    code={`<ShadcnUI.RadioGroup
  defaultValue="left"
  onValueChange={setTextAlign}
>
  <div className="flex gap-4">
    <ShadcnUI.RadioGroupItem value="left" id="left" />
    <ShadcnUI.RadioGroupItem value="center" id="center" />
    <ShadcnUI.RadioGroupItem value="right" id="right" />
    <ShadcnUI.RadioGroupItem value="justify" id="justify" />
  </div>
</ShadcnUI.RadioGroup>`}
                  />
                </div>
              ),
            },
            {
              value: "text-color",
              trigger: "Text Color",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <ShadcnUI.Label>Color:</ShadcnUI.Label>
                      <ShadcnUI.Input
                        type="color"
                        value={textColor}
                        onChange={(e) => setTextColor(e.target.value)}
                      />
                    </div>
                    <p style={{ color: textColor }}>{sampleText}</p>
                  </div>
                  <CodeBlock
                    title="Text Color Implementation"
                    code={`<ShadcnUI.Input
  type="color"
  value={textColor}
  onChange={(e) => setTextColor(e.target.value)}
/>`}
                  />
                </div>
              ),
            },
            {
              value: "line-height",
              trigger: "Line Height Control",
              content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <ShadcnUI.Label>Line Height: {lineHeight}</ShadcnUI.Label>
                      <ShadcnUI.Slider
                        defaultValue={[lineHeight]}
                        max={3}
                        min={1}
                        step={0.1}
                        onValueChange={(value) => setLineHeight(value[0])}
                      />
                    </div>
                    <p style={{ lineHeight }}>{sampleText}</p>
                  </div>
                  <CodeBlock
                    title="Line Height Implementation"
                    code={`<ShadcnUI.Slider
  defaultValue={[1.5]}
  max={3}
  min={1}
  step={0.1}
  onValueChange={(value) => setLineHeight(value[0])}
/>`}
                  />
                </div>
              ),
            },
          ]}
        />
      </div>
    </div>
  );
}

export default MainComponent;
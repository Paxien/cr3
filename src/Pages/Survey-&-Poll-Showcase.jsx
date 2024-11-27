"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedRating, setSelectedRating] = React.useState("");
  const [likertValue, setLikertValue] = React.useState("");
  const [showCode1, setShowCode1] = React.useState(false);
  const [showCode2, setShowCode2] = React.useState(false);
  const [showCode3, setShowCode3] = React.useState(false);
  const [pollChoice, setPollChoice] = React.useState("");

  const codeExample1 = `<ShadcnUI.RadioGroup value={likertValue} onValueChange={setLikertValue}>
    <div className="grid grid-cols-5 gap-4 text-center">
      <div>
        <ShadcnUI.RadioGroupItem value="strongly-disagree" id="strongly-disagree" />
        <ShadcnUI.Label htmlFor="strongly-disagree">Strongly Disagree</ShadcnUI.Label>
      </div>
      <div>
        <ShadcnUI.RadioGroupItem value="disagree" id="disagree" />
        <ShadcnUI.Label htmlFor="disagree">Disagree</ShadcnUI.Label>
      </div>
      <div>
        <ShadcnUI.RadioGroupItem value="neutral" id="neutral" />
        <ShadcnUI.Label htmlFor="neutral">Neutral</ShadcnUI.Label>
      </div>
      <div>
        <ShadcnUI.RadioGroupItem value="agree" id="agree" />
        <ShadcnUI.Label htmlFor="agree">Agree</ShadcnUI.Label>
      </div>
      <div>
        <ShadcnUI.RadioGroupItem value="strongly-agree" id="strongly-agree" />
        <ShadcnUI.Label htmlFor="strongly-agree">Strongly Agree</ShadcnUI.Label>
      </div>
    </div>
  </ShadcnUI.RadioGroup>`;

  const codeExample2 = `<ShadcnUI.RadioGroup value={selectedRating} onValueChange={setSelectedRating}>
    <div className="flex space-x-4">
      {[1,2,3,4,5].map((rating) => (
        <div key={rating} className="text-center">
          <ShadcnUI.RadioGroupItem value={rating.toString()} id={rating.toString()} className="hidden" />
          <label htmlFor={rating.toString()} className="cursor-pointer">
            <i className={\`fas fa-star \${selectedRating >= rating ? 'text-yellow-400' : 'text-gray-300'}\`}></i>
          </label>
        </div>
      ))}
    </div>
  </ShadcnUI.RadioGroup>`;

  const codeExample3 = `<ShadcnUI.RadioGroup value={pollChoice} onValueChange={setPollChoice}>
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <ShadcnUI.RadioGroupItem value="option1" id="option1" />
        <ShadcnUI.Label htmlFor="option1">Pizza</ShadcnUI.Label>
      </div>
      <div className="flex items-center space-x-2">
        <ShadcnUI.RadioGroupItem value="option2" id="option2" />
        <ShadcnUI.Label htmlFor="option2">Burger</ShadcnUI.Label>
      </div>
      <div className="flex items-center space-x-2">
        <ShadcnUI.RadioGroupItem value="option3" id="option3" />
        <ShadcnUI.Label htmlFor="option3">Sushi</ShadcnUI.Label>
      </div>
    </div>
  </ShadcnUI.RadioGroup>`;

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="space-y-12">
        <div className="flex gap-8">
          <div className="w-1/2">
            <ShadcnUI.Card>
              <ShadcnUI.CardHeader>
                <ShadcnUI.CardTitle>Likert Scale</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Rate your agreement with the statement: "This component is
                  useful"
                </ShadcnUI.CardDescription>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <ShadcnUI.RadioGroup
                  value={likertValue}
                  onValueChange={setLikertValue}
                >
                  <div className="grid grid-cols-5 gap-4 text-center">
                    <div>
                      <ShadcnUI.RadioGroupItem
                        value="strongly-disagree"
                        id="strongly-disagree"
                      />
                      <ShadcnUI.Label htmlFor="strongly-disagree">
                        Strongly Disagree
                      </ShadcnUI.Label>
                    </div>
                    <div>
                      <ShadcnUI.RadioGroupItem value="disagree" id="disagree" />
                      <ShadcnUI.Label htmlFor="disagree">
                        Disagree
                      </ShadcnUI.Label>
                    </div>
                    <div>
                      <ShadcnUI.RadioGroupItem value="neutral" id="neutral" />
                      <ShadcnUI.Label htmlFor="neutral">Neutral</ShadcnUI.Label>
                    </div>
                    <div>
                      <ShadcnUI.RadioGroupItem value="agree" id="agree" />
                      <ShadcnUI.Label htmlFor="agree">Agree</ShadcnUI.Label>
                    </div>
                    <div>
                      <ShadcnUI.RadioGroupItem
                        value="strongly-agree"
                        id="strongly-agree"
                      />
                      <ShadcnUI.Label htmlFor="strongly-agree">
                        Strongly Agree
                      </ShadcnUI.Label>
                    </div>
                  </div>
                </ShadcnUI.RadioGroup>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>

          <div className="w-1/2">
            <ShadcnUI.Card>
              <ShadcnUI.CardHeader>
                <div className="flex justify-between items-center">
                  <ShadcnUI.CardTitle>Code Example</ShadcnUI.CardTitle>
                  <ShadcnUI.Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(codeExample1);
                      setShowCode1(true);
                      setTimeout(() => setShowCode1(false), 2000);
                    }}
                  >
                    {showCode1 ? "Copied!" : "Copy Code"}
                  </ShadcnUI.Button>
                </div>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{codeExample1}</code>
                </pre>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/2">
            <ShadcnUI.Card>
              <ShadcnUI.CardHeader>
                <ShadcnUI.CardTitle>Star Rating</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Rate your experience
                </ShadcnUI.CardDescription>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <ShadcnUI.RadioGroup
                  value={selectedRating}
                  onValueChange={setSelectedRating}
                >
                  <div className="flex space-x-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <div key={rating} className="text-center">
                        <ShadcnUI.RadioGroupItem
                          value={rating.toString()}
                          id={rating.toString()}
                          className="hidden"
                        />
                        <label
                          htmlFor={rating.toString()}
                          className="cursor-pointer"
                        >
                          <i
                            className={`fas fa-star ${
                              selectedRating >= rating
                                ? "text-yellow-400"
                                : "text-gray-300"
                            }`}
                          ></i>
                        </label>
                      </div>
                    ))}
                  </div>
                </ShadcnUI.RadioGroup>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>

          <div className="w-1/2">
            <ShadcnUI.Card>
              <ShadcnUI.CardHeader>
                <div className="flex justify-between items-center">
                  <ShadcnUI.CardTitle>Code Example</ShadcnUI.CardTitle>
                  <ShadcnUI.Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(codeExample2);
                      setShowCode2(true);
                      setTimeout(() => setShowCode2(false), 2000);
                    }}
                  >
                    {showCode2 ? "Copied!" : "Copy Code"}
                  </ShadcnUI.Button>
                </div>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{codeExample2}</code>
                </pre>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-1/2">
            <ShadcnUI.Card>
              <ShadcnUI.CardHeader>
                <ShadcnUI.CardTitle>Multiple Choice Poll</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  What's your favorite food?
                </ShadcnUI.CardDescription>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <ShadcnUI.RadioGroup
                  value={pollChoice}
                  onValueChange={setPollChoice}
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <ShadcnUI.RadioGroupItem value="option1" id="option1" />
                      <ShadcnUI.Label htmlFor="option1">Pizza</ShadcnUI.Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShadcnUI.RadioGroupItem value="option2" id="option2" />
                      <ShadcnUI.Label htmlFor="option2">Burger</ShadcnUI.Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <ShadcnUI.RadioGroupItem value="option3" id="option3" />
                      <ShadcnUI.Label htmlFor="option3">Sushi</ShadcnUI.Label>
                    </div>
                  </div>
                </ShadcnUI.RadioGroup>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>

          <div className="w-1/2">
            <ShadcnUI.Card>
              <ShadcnUI.CardHeader>
                <div className="flex justify-between items-center">
                  <ShadcnUI.CardTitle>Code Example</ShadcnUI.CardTitle>
                  <ShadcnUI.Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(codeExample3);
                      setShowCode3(true);
                      setTimeout(() => setShowCode3(false), 2000);
                    }}
                  >
                    {showCode3 ? "Copied!" : "Copy Code"}
                  </ShadcnUI.Button>
                </div>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                  <code>{codeExample3}</code>
                </pre>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
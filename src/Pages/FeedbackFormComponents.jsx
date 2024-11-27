"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const { toast } = ShadcnUI.useToast();
  const [selectedTab, setSelectedTab] = React.useState("feedback");
  const [rating, setRating] = React.useState(0);
  const [likertValue, setLikertValue] = React.useState(3);
  const [npsValue, setNpsValue] = React.useState(7);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.message) newErrors.message = "Message is required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      toast({
        title: "Success!",
        description: "Your feedback has been submitted successfully.",
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const demoCode = {
    feedback: `<ShadcnUI.CustomAlert 
  title="Validation Error"
  description="Please check the form for errors"
  variant="destructive"
/>`,
    rating: `<ShadcnUI.RadioGroup value={rating} onValueChange={setRating}>
  {[1,2,3,4,5].map((val) => (
    <div className="flex items-center space-x-2">
      <ShadcnUI.RadioGroupItem value={val} />
      <label>⭐️</label>
    </div>
  ))}
</ShadcnUI.RadioGroup>`,
    survey: `<ShadcnUI.CustomDialog
  triggerButtonText="Take Survey"
  title="Quick Survey"
  description="Help us improve!"
  footer={<button>Submit Survey</button>}
/>`,
  };

  return (
    <div className="container mx-auto p-4">
      <ShadcnUI.Toaster />

      <ShadcnUI.CustomTabs
        defaultValue="feedback"
        tabs={[
          {
            label: "Feedback Forms",
            value: "feedback",
            content: (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <ShadcnUI.Label htmlFor="name">Name</ShadcnUI.Label>
                      <ShadcnUI.Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <ShadcnUI.CustomAlert
                          variant="destructive"
                          title="Error"
                          description={errors.name}
                        />
                      )}
                    </div>

                    <div>
                      <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
                      <ShadcnUI.Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <ShadcnUI.CustomAlert
                          variant="destructive"
                          title="Error"
                          description={errors.email}
                        />
                      )}
                    </div>

                    <div>
                      <ShadcnUI.Label htmlFor="message">Message</ShadcnUI.Label>
                      <ShadcnUI.Input
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      {errors.message && (
                        <ShadcnUI.CustomAlert
                          variant="destructive"
                          title="Error"
                          description={errors.message}
                        />
                      )}
                    </div>

                    <ShadcnUI.Button type="submit">Submit</ShadcnUI.Button>
                  </form>
                </div>
                <pre className="bg-gray-100 p-4 rounded">
                  <code>{demoCode.feedback}</code>
                </pre>
              </div>
            ),
          },
          {
            label: "Rating & Evaluation",
            value: "rating",
            content: (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Star Rating</h3>
                    <ShadcnUI.RadioGroup
                      value={rating}
                      onValueChange={setRating}
                    >
                      {[1, 2, 3, 4, 5].map((val) => (
                        <div key={val} className="flex items-center space-x-2">
                          <ShadcnUI.RadioGroupItem
                            value={val}
                            id={`star-${val}`}
                          />
                          <label htmlFor={`star-${val}`}>
                            {"⭐️".repeat(val)}
                          </label>
                        </div>
                      ))}
                    </ShadcnUI.RadioGroup>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Thumbs Rating</h3>
                    <div className="flex space-x-4">
                      <ShadcnUI.Button
                        variant="outline"
                        onClick={() =>
                          toast({ title: "Thanks for the feedback! 👎" })
                        }
                      >
                        👎
                      </ShadcnUI.Button>
                      <ShadcnUI.Button
                        variant="outline"
                        onClick={() =>
                          toast({ title: "Thanks for the feedback! 👍" })
                        }
                      >
                        👍
                      </ShadcnUI.Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Slider Rating</h3>
                    <ShadcnUI.Slider
                      defaultValue={[5]}
                      max={10}
                      step={1}
                      onValueChange={(val) =>
                        toast({ title: `Rating: ${val}` })
                      }
                    />
                  </div>
                </div>
                <pre className="bg-gray-100 p-4 rounded">
                  <code>{demoCode.rating}</code>
                </pre>
              </div>
            ),
          },
          {
            label: "Surveys & Polls",
            value: "survey",
            content: (
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-8">
                  <ShadcnUI.CustomDialog
                    triggerButtonText="Take Quick Survey"
                    title="Quick Survey"
                    description="Help us improve our services!"
                    footer={
                      <ShadcnUI.Button
                        onClick={() => toast({ title: "Survey submitted!" })}
                      >
                        Submit Survey
                      </ShadcnUI.Button>
                    }
                  >
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">
                          How satisfied are you?
                        </h4>
                        <ShadcnUI.RadioGroup
                          value={likertValue}
                          onValueChange={setLikertValue}
                        >
                          {[
                            "Very Dissatisfied",
                            "Dissatisfied",
                            "Neutral",
                            "Satisfied",
                            "Very Satisfied",
                          ].map((label, i) => (
                            <div
                              key={i}
                              className="flex items-center space-x-2"
                            >
                              <ShadcnUI.RadioGroupItem
                                value={i}
                                id={`likert-${i}`}
                              />
                              <label htmlFor={`likert-${i}`}>{label}</label>
                            </div>
                          ))}
                        </ShadcnUI.RadioGroup>
                      </div>

                      <div>
                        <h4 className="font-medium mb-2">NPS Score (0-10)</h4>
                        <ShadcnUI.Slider
                          defaultValue={[npsValue]}
                          max={10}
                          step={1}
                          onValueChange={(val) => setNpsValue(val[0])}
                        />
                      </div>
                    </div>
                  </ShadcnUI.CustomDialog>
                </div>
                <pre className="bg-gray-100 p-4 rounded">
                  <code>{demoCode.survey}</code>
                </pre>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default MainComponent;
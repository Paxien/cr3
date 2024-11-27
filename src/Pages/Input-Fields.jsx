"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../utilities/runtime-helpers";

function MainComponent() {
  const { toast } = ShadcnUI.useToast();
  const [date, setDate] = React.useState(new Date());
  const [formData, setFormData] = React.useState({
    password: "",
    email: "",
    phone: "",
    time: "",
    range: 50,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const [files, setFiles] = React.useState([]);
  const [uploading, setUploading] = React.useState(false);
  const [upload] = useUpload();

  const handleFileUpload = async (event) => {
    if (!event.target.files?.[0]) return;
    setUploading(true);
    try {
      const file = event.target.files[0];
      const { url } = await upload({ file });
      setFiles([...files, url]);
      toast({
        title: "File uploaded",
        description: "Your file has been successfully uploaded",
      });
    } catch (error) {
      toast({
        title: "Upload failed",
        description: "There was a problem uploading your file",
        variant: "destructive",
      });
    }
    setUploading(false);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">Input Components</h2>

            <div className="space-y-4">
              <div>
                <ShadcnUI.Label htmlFor="text">Text Input</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="text"
                  placeholder="Enter text..."
                  className="w-full"
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="textarea">Textarea</ShadcnUI.Label>
                <textarea
                  id="textarea"
                  className="w-full min-h-[100px] rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm"
                  placeholder="Enter multiple lines of text..."
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="password">Password</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="w-full"
                  placeholder="Enter password..."
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="number">Number</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="number"
                  type="number"
                  className="w-full"
                  placeholder="Enter number..."
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="w-full"
                  placeholder="Enter email..."
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="phone">Phone</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  className="w-full"
                  placeholder="Enter phone number..."
                />
              </div>

              <div>
                <ShadcnUI.Label>Date</ShadcnUI.Label>
                <ShadcnUI.Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="time">Time</ShadcnUI.Label>
                <ShadcnUI.Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => handleInputChange("time", e.target.value)}
                  className="w-full"
                />
              </div>

              <div>
                <ShadcnUI.Label>Range Slider</ShadcnUI.Label>
                <ShadcnUI.Slider
                  defaultValue={[formData.range]}
                  max={100}
                  step={1}
                  onValueChange={(value) =>
                    handleInputChange("range", value[0])
                  }
                />
              </div>

              <div>
                <ShadcnUI.Label htmlFor="file">File Upload</ShadcnUI.Label>
                <div className="flex items-center space-x-2">
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <ShadcnUI.Button
                    onClick={() => document.getElementById("file").click()}
                    disabled={uploading}
                  >
                    {uploading ? "Uploading..." : "Choose File"}
                  </ShadcnUI.Button>
                </div>
                {files.length > 0 && (
                  <div className="mt-2">
                    {files.map((file, index) => (
                      <div key={index} className="text-sm text-gray-500">
                        Uploaded file {index + 1}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <ShadcnUI.Label htmlFor="search">Search</ShadcnUI.Label>
                <div className="relative">
                  <ShadcnUI.Input
                    id="search"
                    type="search"
                    className="w-full pl-10"
                    placeholder="Search..."
                  />
                  <span className="absolute left-3 top-2.5">
                    <i className="fas fa-search text-gray-400" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">Code Example</h3>
          <pre className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
            <code>
              {`// Input Components Example
const MainComponent = () => {
  const [formData, setFormData] = useState({
    text: '',
    password: '',
    email: '',
    phone: '',
    time: '',
    range: 50
  });

  return (
    <div>
      <ShadcnUI.Input
        placeholder="Text Input"
        value={formData.text}
        onChange={(e) => setFormData({
          ...formData,
          text: e.target.value
        })}
      />

      <ShadcnUI.Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
      />

      <ShadcnUI.Slider
        defaultValue={[50]}
        max={100}
        step={1}
        onValueChange={(value) =>
          setFormData({
            ...formData,
            range: value[0]
          })
        }
      />
    </div>
  );
};`}
            </code>
          </pre>
          <ShadcnUI.Button
            onClick={() => {
              navigator.clipboard.writeText(
                document.querySelector("pre code").textContent
              );
              toast({
                title: "Code copied",
                description: "The code has been copied to your clipboard",
              });
            }}
            className="mt-2"
          >
            Copy Code
          </ShadcnUI.Button>
        </div>
      </div>
      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
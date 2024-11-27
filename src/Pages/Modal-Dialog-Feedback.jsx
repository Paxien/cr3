"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../utilities/runtime-helpers";

function MainComponent() {
  const [progressValue, setProgressValue] = React.useState(33);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState(0);
  const [upload, { loading }] = useUpload();
  const [file, setFile] = React.useState(null);
  const { toast } = ShadcnUI.useToast();

  const copyToClipboard = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "The code snippet has been copied to your clipboard.",
    });
  };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgressValue((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const handleFileUpload = async (e) => {
    if (!e.target.files?.length) return;
    setFile(e.target.files[0]);

    for (let i = 0; i <= 100; i += 10) {
      await new Promise((r) => setTimeout(r, 200));
      setUploadProgress(i);
    }

    const { url } = await upload({ file: e.target.files[0] });
    toast({
      title: "Upload Complete",
      description: "Your file has been successfully uploaded.",
    });
  };

  return (
    <div className="p-6 font-roboto">
      <ShadcnUI.Toaster />

      <div className="space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Modal & Dialog Feedback</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-4">
              <ShadcnUI.AlertDialog
                triggerLabel="Delete Account"
                title="Are you absolutely sure?"
                description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
                cancelLabel="Cancel"
                actionLabel="Delete Account"
              />

              <ShadcnUI.Alert
                variant="destructive"
                title="Error"
                description="Your session has expired. Please log in again."
              />

              <ShadcnUI.CustomDialog
                triggerButtonText="Show Info"
                title="Information"
                description="Here's some important information about your account."
                footer={
                  <ShadcnUI.Button onClick={() => setIsDialogOpen(false)}>
                    Close
                  </ShadcnUI.Button>
                }
              >
                <p>Your account details and other relevant information.</p>
              </ShadcnUI.CustomDialog>

              <ShadcnUI.Alert
                variant="default"
                title="Success!"
                description="Your changes have been saved successfully."
              />
            </div>

            <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-md">
              <code className="text-sm">
                <pre>
                  {`<ShadcnUI.AlertDialog
  triggerLabel="Delete Account"
  title="Are you sure?"
  description="This cannot be undone."
  cancelLabel="Cancel"
  actionLabel="Delete"
/>

<ShadcnUI.Alert 
  variant="destructive" 
  title="Error" 
  description="Session expired."
/>

<ShadcnUI.CustomDialog
  triggerButtonText="Show Info"
  title="Information"
  description="Account details"
>
  <p>Content here</p>
</ShadcnUI.CustomDialog>`}
                </pre>
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(code)}
                >
                  Copy
                </ShadcnUI.Button>
              </code>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Progress Indicators</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-8">
              <ShadcnUI.Progress value={progressValue} className="w-full" />

              <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />

              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-600 h-2.5 rounded-full animate-[indeterminate_1s_ease-in-out_infinite]"
                  style={{ width: "75%" }}
                />
              </div>

              <ShadcnUI.CustomTabs
                defaultValue="1"
                tabs={[
                  {
                    label: "Step 1",
                    value: "1",
                    content: "First step content",
                  },
                  {
                    label: "Step 2",
                    value: "2",
                    content: "Second step content",
                  },
                  {
                    label: "Step 3",
                    value: "3",
                    content: "Third step content",
                  },
                ]}
              />

              <div className="w-full">
                <input
                  type="file"
                  onChange={handleFileUpload}
                  className="mb-2"
                />
                <ShadcnUI.Progress value={uploadProgress} className="w-full" />
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-md">
              <code className="text-sm">
                <pre>
                  {`<ShadcnUI.Progress value={progress} />

<div className="animate-spin rounded-full 
  border-4 border-primary 
  border-t-transparent" />

<ShadcnUI.CustomTabs
  tabs={[
    {label: "Step 1", value: "1"},
    {label: "Step 2", value: "2"},
    {label: "Step 3", value: "3"}
  ]}
/>`}
                </pre>
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(code)}
                >
                  Copy
                </ShadcnUI.Button>
              </code>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold">Tooltips & Popovers</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2 space-y-8">
              <ShadcnUI.CustomTooltip
                content="This is a helpful tooltip"
                delayDuration={300}
              >
                <ShadcnUI.Button>Hover me</ShadcnUI.Button>
              </ShadcnUI.CustomTooltip>

              <ShadcnUI.CustomPopover triggerLabel="Click for more">
                <div className="p-4">
                  <h3 className="font-bold">Detailed Information</h3>
                  <p>Here's more context about this item.</p>
                </div>
              </ShadcnUI.CustomPopover>

              <ShadcnUI.CustomHoverCard
                trigger={<ShadcnUI.Button>Interactive Info</ShadcnUI.Button>}
              >
                <div className="p-4">
                  <h4>Interactive Content</h4>
                  <p>You can add buttons and links here.</p>
                  <ShadcnUI.Button variant="outline" size="sm">
                    Action
                  </ShadcnUI.Button>
                </div>
              </ShadcnUI.CustomHoverCard>
            </div>

            <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-md">
              <code className="text-sm">
                <pre>
                  {`<ShadcnUI.CustomTooltip
  content="Helpful tooltip"
  delayDuration={300}
>
  <Button>Hover me</Button>
</ShadcnUI.CustomTooltip>

<ShadcnUI.CustomPopover 
  triggerLabel="Click for more"
>
  <div className="p-4">
    <h3>Information</h3>
    <p>More context here.</p>
  </div>
</ShadcnUI.CustomPopover>`}
                </pre>
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(code)}
                >
                  Copy
                </ShadcnUI.Button>
              </code>
            </div>
          </div>
        </section>
      </div>

      <style jsx global>{`
        @keyframes indeterminate {
          0% { transform: translateX(-100%) }
          100% { transform: translateX(100%) }
        }
      `}</style>
    </div>
  );
}

export default MainComponent;
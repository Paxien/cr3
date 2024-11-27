"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedImage, setSelectedImage] = React.useState(null);
  const { toast } = ShadcnUI.useToast();

  const imageGalleryItems = [
    <div key="1" className="p-1">
      <img
        src="/images/gallery-1.jpg"
        alt="Mountain landscape at sunset"
        className="w-full h-[300px] object-cover rounded-lg"
      />
    </div>,
    <div key="2" className="p-1">
      <img
        src="/images/gallery-2.jpg"
        alt="Ocean waves crashing on beach"
        className="w-full h-[300px] object-cover rounded-lg"
      />
    </div>,
    <div key="3" className="p-1">
      <img
        src="/images/gallery-3.jpg"
        alt="Desert sand dunes"
        className="w-full h-[300px] object-cover rounded-lg"
      />
    </div>,
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: "The code has been copied to your clipboard.",
    });
  };

  return (
    <div className="p-8 font-roboto">
      <h1 className="text-4xl font-bold mb-8">Media Components Showcase</h1>

      <div className="space-y-12">
        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Basic Image</h2>
            <div className="border rounded-lg p-4">
              <ShadcnUI.CustomDialog
                triggerButtonText="View Image"
                title="Nature Landscape"
                description="A beautiful mountain landscape view"
                footer={
                  <div className="flex justify-end">
                    <ShadcnUI.Button onClick={() => setSelectedImage(null)}>
                      Close
                    </ShadcnUI.Button>
                  </div>
                }
              >
                <img
                  src="/images/landscape.jpg"
                  alt="Mountain landscape"
                  className="w-full h-auto rounded-lg"
                  loading="lazy"
                />
              </ShadcnUI.CustomDialog>
            </div>
          </div>
          <div className="flex-1">
            <ShadcnUI.CustomTabs
              defaultValue="preview"
              tabs={[
                {
                  label: "Preview",
                  value: "preview",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>
                        {`<ShadcnUI.CustomDialog
  triggerButtonText="View Image"
  title="Nature Landscape"
  description="A beautiful mountain landscape view"
>
  <img 
    src="/images/landscape.jpg" 
    alt="Mountain landscape"
    className="w-full h-auto rounded-lg"
    loading="lazy"
  />
</ShadcnUI.CustomDialog>`}
                      </code>
                    </pre>
                  ),
                },
              ]}
            />
            <ShadcnUI.Button
              className="mt-2"
              onClick={() =>
                copyCode(`<ShadcnUI.CustomDialog>...</ShadcnUI.CustomDialog>`)
              }
            >
              Copy Code
            </ShadcnUI.Button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Image Gallery</h2>
            <div className="border rounded-lg p-4">
              <ShadcnUI.CustomCarousel items={imageGalleryItems} />
            </div>
          </div>
          <div className="flex-1">
            <ShadcnUI.CustomTabs
              defaultValue="preview"
              tabs={[
                {
                  label: "Preview",
                  value: "preview",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>
                        {`<ShadcnUI.CustomCarousel 
  items={[
    <div key="1">
      <img src="/images/gallery-1.jpg" alt="Gallery Image 1" />
    </div>,
    <div key="2">
      <img src="/images/gallery-2.jpg" alt="Gallery Image 2" />
    </div>
  ]} 
/>`}
                      </code>
                    </pre>
                  ),
                },
              ]}
            />
            <ShadcnUI.Button
              className="mt-2"
              onClick={() =>
                copyCode(`<ShadcnUI.CustomCarousel items={items} />`)
              }
            >
              Copy Code
            </ShadcnUI.Button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Avatar Images</h2>
            <div className="border rounded-lg p-4 flex gap-4">
              <ShadcnUI.CustomAvatar
                src="/images/avatar-1.jpg"
                fallbackLabel="JD"
                alt="John Doe"
              />
              <ShadcnUI.CustomAvatar
                src="/images/avatar-2.jpg"
                fallbackLabel="JS"
                alt="Jane Smith"
              />
            </div>
          </div>
          <div className="flex-1">
            <ShadcnUI.CustomTabs
              defaultValue="preview"
              tabs={[
                {
                  label: "Preview",
                  value: "preview",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>
                        {`<ShadcnUI.CustomAvatar 
  src="/images/avatar-1.jpg"
  fallbackLabel="JD"
  alt="John Doe"
/>`}
                      </code>
                    </pre>
                  ),
                },
              ]}
            />
            <ShadcnUI.Button
              className="mt-2"
              onClick={() =>
                copyCode(
                  `<ShadcnUI.CustomAvatar src="/path" fallbackLabel="JD" alt="Name" />`
                )
              }
            >
              Copy Code
            </ShadcnUI.Button>
          </div>
        </section>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">Image with Caption</h2>
            <div className="border rounded-lg p-4">
              <ShadcnUI.CustomHoverCard
                trigger={
                  <div className="relative">
                    <img
                      src="/images/nature.jpg"
                      alt="Beautiful nature scene"
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                }
              >
                <div className="p-4">
                  <h4 className="font-semibold">Nature Scene</h4>
                  <p className="text-sm">
                    A beautiful capture of nature in its purest form.
                  </p>
                </div>
              </ShadcnUI.CustomHoverCard>
            </div>
          </div>
          <div className="flex-1">
            <ShadcnUI.CustomTabs
              defaultValue="preview"
              tabs={[
                {
                  label: "Preview",
                  value: "preview",
                  content: (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
                      <code>
                        {`<ShadcnUI.CustomHoverCard
  trigger={
    <img src="/images/nature.jpg" alt="Nature" />
  }
>
  <div>
    <h4>Nature Scene</h4>
    <p>A beautiful capture of nature.</p>
  </div>
</ShadcnUI.CustomHoverCard>`}
                      </code>
                    </pre>
                  ),
                },
              ]}
            />
            <ShadcnUI.Button
              className="mt-2"
              onClick={() =>
                copyCode(
                  `<ShadcnUI.CustomHoverCard>...</ShadcnUI.CustomHoverCard>`
                )
              }
            >
              Copy Code
            </ShadcnUI.Button>
          </div>
        </section>
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
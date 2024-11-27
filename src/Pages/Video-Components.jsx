"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [showCode, setShowCode] = React.useState(false);
  const [currentCode, setCurrentCode] = React.useState("");
  const [activeTab, setActiveTab] = React.useState("video-player");

  const codeExamples = {
    "video-player": `<div className="p-4">
  <video className="w-full rounded-lg" controls>
    <source src="/demo-video.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="flex items-center justify-between mt-4">
    <ShadcnUI.Button variant="outline">
      <i className="fas fa-play mr-2"></i>Play
    </ShadcnUI.Button>
    <ShadcnUI.Slider defaultValue={[50]} max={100} step={1} />
    <ShadcnUI.Button variant="outline">
      <i className="fas fa-expand"></i>
    </ShadcnUI.Button>
  </div>
</div>`,
    "video-gallery": `<div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
  {[1,2,3,4,5,6].map((item) => (
    <div key={item} className="relative group">
      <img 
        src={\`/thumbnail-\${item}.jpg\`} 
        alt={\`Video thumbnail \${item}\`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
        <ShadcnUI.Button variant="ghost">
          <i className="fas fa-play text-white text-4xl"></i>
        </ShadcnUI.Button>
      </div>
    </div>
  ))}
</div>`,
    "video-carousel": `<ShadcnUI.CustomCarousel
  items={[1,2,3,4].map((item) => (
    <div key={item} className="relative w-full h-[300px]">
      <img
        src={\`/video-\${item}.jpg\`}
        alt={\`Video \${item}\`} 
        className="w-full h-full object-cover rounded-lg"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <ShadcnUI.Button variant="ghost">
          <i className="fas fa-play text-white text-4xl"></i>
        </ShadcnUI.Button>
      </div>
    </div>
  ))}
/>`,
  };

  const handleShowCode = (code) => {
    setCurrentCode(code);
    setShowCode(true);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Media Components Showcase</h1>

      <ShadcnUI.CustomTabs
        defaultValue="video-player"
        className="w-full"
        tabs={[
          {
            label: "Video Player",
            value: "video-player",
            content: (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="p-4">
                  <video className="w-full rounded-lg" controls>
                    <source src="/demo-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className="flex items-center justify-between mt-4">
                    <ShadcnUI.Button variant="outline">
                      <i className="fas fa-play mr-2"></i>Play
                    </ShadcnUI.Button>
                    <ShadcnUI.Slider defaultValue={[50]} max={100} step={1} />
                    <ShadcnUI.Button variant="outline">
                      <i className="fas fa-expand"></i>
                    </ShadcnUI.Button>
                  </div>
                </div>
                <div className="relative">
                  <ShadcnUI.Button
                    variant="outline"
                    className="absolute top-4 right-4"
                    onClick={() => handleShowCode(codeExamples["video-player"])}
                  >
                    <i className="fas fa-code mr-2"></i>View Code
                  </ShadcnUI.Button>
                  {showCode && activeTab === "video-player" && (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-auto h-[300px]">
                      <code>{currentCode}</code>
                    </pre>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Video Gallery",
            value: "video-gallery",
            content: (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div key={item} className="relative group">
                      <img
                        src={`/thumbnail-${item}.jpg`}
                        alt={`Video thumbnail ${item}`}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                        <ShadcnUI.Button variant="ghost">
                          <i className="fas fa-play text-white text-4xl"></i>
                        </ShadcnUI.Button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="relative">
                  <ShadcnUI.Button
                    variant="outline"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      handleShowCode(codeExamples["video-gallery"])
                    }
                  >
                    <i className="fas fa-code mr-2"></i>View Code
                  </ShadcnUI.Button>
                  {showCode && activeTab === "video-gallery" && (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-auto h-[300px]">
                      <code>{currentCode}</code>
                    </pre>
                  )}
                </div>
              </div>
            ),
          },
          {
            label: "Video Carousel",
            value: "video-carousel",
            content: (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <ShadcnUI.CustomCarousel
                    items={[1, 2, 3, 4].map((item) => (
                      <div key={item} className="relative w-full h-[300px]">
                        <img
                          src={`/video-${item}.jpg`}
                          alt={`Video ${item}`}
                          className="w-full h-full object-cover rounded-lg"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ShadcnUI.Button variant="ghost">
                            <i className="fas fa-play text-white text-4xl"></i>
                          </ShadcnUI.Button>
                        </div>
                      </div>
                    ))}
                  />
                </div>
                <div className="relative">
                  <ShadcnUI.Button
                    variant="outline"
                    className="absolute top-4 right-4"
                    onClick={() =>
                      handleShowCode(codeExamples["video-carousel"])
                    }
                  >
                    <i className="fas fa-code mr-2"></i>View Code
                  </ShadcnUI.Button>
                  {showCode && activeTab === "video-carousel" && (
                    <pre className="bg-gray-100 p-4 rounded-lg overflow-auto h-[300px]">
                      <code>{currentCode}</code>
                    </pre>
                  )}
                </div>
              </div>
            ),
          },
        ]}
      />

      {showCode && (
        <ShadcnUI.CustomDialog
          open={showCode}
          onOpenChange={setShowCode}
          title="Component Code"
          description="Copy the code below to use this component"
          triggerButtonText=""
          footer={
            <div className="flex justify-end">
              <ShadcnUI.Button onClick={() => setShowCode(false)}>
                Close
              </ShadcnUI.Button>
            </div>
          }
        >
          <pre className="bg-gray-100 p-4 rounded-lg overflow-auto max-h-[500px]">
            <code>{currentCode}</code>
          </pre>
        </ShadcnUI.CustomDialog>
      )}
    </div>
  );
}

export default MainComponent;
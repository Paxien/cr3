"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedTab, setSelectedTab] = React.useState("announcements");
  const [isOpen, setIsOpen] = React.useState(false);
  const { toast } = ShadcnUI.useToast();
  const [progress, setProgress] = React.useState(33);

  const playSound = (type) => {
    const audio = new Audio(`/sounds/${type}.mp3`);
    audio.play();
  };

  const codeExamples = {
    bannerCode: `<ShadcnUI.CustomAlert
  variant="default" 
  title="New Feature Released!"
  description="Check out our latest features and improvements"
/>`,
    stickyCode: `<div className="fixed top-0 w-full z-50">
  <ShadcnUI.CustomAlert
    variant="default"
    title="Important Notice" 
    description="This banner will stick to the top as you scroll"
  />
</div>`,
    systemStatusCode: `<ShadcnUI.CustomAlert
  variant="default"
  title="System Status: Online"
  description="All systems operational"
  icon={<i className="fas fa-check-circle text-green-500" />}
/>`,
    breakingNewsCode: `<div className="overflow-hidden">
  <ShadcnUI.CustomCarousel 
    items={[
      <div>Breaking News Item 1</div>,
      <div>Breaking News Item 2</div>
    ]}
  />
</div>`,
    tempAnnouncementCode: `toast({
  title: "Temporary Announcement",
  description: "This will disappear in a few seconds"
})`,
    audioCode: `<ShadcnUI.Button
  onClick={() => playSound('success')}
>
  Play Sound
</ShadcnUI.Button>`,
    achievementCode: `<ShadcnUI.CustomDialog
  triggerButtonText="View Achievement"
  title="Level Up!" 
  description="You've reached level 10!"
  footer={<div />}
>
  <div className="flex items-center justify-center">
    <i className="fas fa-award text-6xl text-yellow-500" />
  </div>
</ShadcnUI.CustomDialog>`,
    xpTrackerCode: `<ShadcnUI.Progress value={progress} />`,
    milestoneCode: `<ShadcnUI.CustomAlert
  variant="default"
  title="Milestone Reached!"
  description="You've completed 50% of your profile"
  icon={<i className="fas fa-trophy text-yellow-500" />}
/>`,
  };

  const tabs = [
    {
      label: "Announcements & Banners",
      value: "announcements",
      content: (
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Banner Notification</h3>
              <ShadcnUI.CustomAlert
                variant="default"
                title="New Feature Released!"
                description="Check out our latest features and improvements"
              />
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.bannerCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Sticky Banner</h3>
              <div className="relative">
                <ShadcnUI.CustomAlert
                  variant="default"
                  title="Important Notice"
                  description="This banner will stick to the top as you scroll"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.stickyCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">System Status</h3>
              <ShadcnUI.CustomAlert
                variant="default"
                title="System Status: Online"
                description="All systems operational"
                icon={<i className="fas fa-check-circle text-green-500" />}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.systemStatusCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Breaking News Ticker</h3>
              <div className="overflow-hidden">
                <ShadcnUI.CustomCarousel
                  items={[
                    <div key="1">Breaking News: Important Update 1</div>,
                    <div key="2">Breaking News: Important Update 2</div>,
                  ]}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.breakingNewsCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Temporary Announcement</h3>
              <ShadcnUI.Button
                onClick={() => {
                  toast({
                    title: "Temporary Announcement",
                    description: "This will disappear in a few seconds",
                  });
                }}
              >
                Show Temporary Announcement
              </ShadcnUI.Button>
              <ShadcnUI.Toaster />
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.tempAnnouncementCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Sound Feedback",
      value: "sound",
      content: (
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Audio Alerts</h3>
              <ShadcnUI.Button onClick={() => playSound("success")}>
                Play Sound
              </ShadcnUI.Button>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.audioCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Progress Feedback",
      value: "progress",
      content: (
        <div className="grid gap-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Achievement Badge</h3>
              <ShadcnUI.CustomDialog
                open={isOpen}
                onOpenChange={setIsOpen}
                triggerButtonText="View Achievement"
                title="Level Up!"
                description="You've reached level 10!"
                footer={<div />}
              >
                <div className="flex items-center justify-center">
                  <i className="fas fa-award text-6xl text-yellow-500" />
                </div>
              </ShadcnUI.CustomDialog>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.achievementCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">XP Tracker</h3>
              <ShadcnUI.Progress value={progress} />
              <div className="mt-2">
                <ShadcnUI.Button
                  onClick={() =>
                    setProgress((prev) => Math.min(100, prev + 10))
                  }
                >
                  Gain XP
                </ShadcnUI.Button>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.xpTrackerCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <h3 className="text-lg font-bold mb-4">Milestone Notification</h3>
              <ShadcnUI.CustomAlert
                variant="default"
                title="Milestone Reached!"
                description="You've completed 50% of your profile"
                icon={<i className="fas fa-trophy text-yellow-500" />}
              />
            </div>
            <div className="w-full md:w-1/2">
              <ShadcnUI.CollapsibleSection
                title="View Code"
                nonCollapsedItems={
                  <pre className="bg-gray-100 p-4 rounded">
                    <code>{codeExamples.milestoneCode}</code>
                  </pre>
                }
                collapsedItems={<div />}
              />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <ShadcnUI.CustomTabs defaultValue="announcements" tabs={tabs} />
    </div>
  );
}

export default MainComponent;
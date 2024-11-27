"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("image");
  const [showCode, setShowCode] = useState(null);

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
  };

  const components = {
    image: {
      title: "Image Card",
      description: "A card with an image at the top",
      code: `<div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="p-6">
    <img
      src="/placeholder.svg"
      alt="Card thumbnail"
      className="aspect-video w-full rounded-lg object-cover"
    />
    <div className="mt-4">
      <h3 className="text-2xl font-semibold">Mountain Retreat</h3>
      <p className="text-sm text-muted-foreground">
        Escape to the serene mountain views and peaceful atmosphere
      </p>
    </div>
    <div className="mt-4">
      <ShadcnUI.Button>Book Now</ShadcnUI.Button>
    </div>
  </div>
</div>`,
      component: (
        <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <img
              src="/placeholder.svg"
              alt="Card thumbnail"
              className="aspect-video w-full rounded-lg object-cover"
            />
            <div className="mt-4">
              <h3 className="text-2xl font-semibold">Mountain Retreat</h3>
              <p className="text-sm text-muted-foreground">
                Escape to the serene mountain views and peaceful atmosphere
              </p>
            </div>
            <div className="mt-4">
              <ShadcnUI.Button>Book Now</ShadcnUI.Button>
            </div>
          </div>
        </div>
      ),
    },
    content: {
      title: "Content Card",
      description: "A card containing text, links and actions",
      code: `<div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="p-6">
    <div className="flex items-center gap-4">
      <div>
        <h3 className="font-semibold">Blog Post Title</h3>
        <p className="text-sm text-muted-foreground">Posted 2 hours ago</p>
      </div>
    </div>
    <div className="mt-4">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
    </div>
    <div className="mt-4 flex gap-2">
      <ShadcnUI.Button variant="outline">Read More</ShadcnUI.Button>
      <ShadcnUI.Button>Share</ShadcnUI.Button>
    </div>
  </div>
</div>`,
      component: (
        <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <div>
                <h3 className="font-semibold">Blog Post Title</h3>
                <p className="text-sm text-muted-foreground">
                  Posted 2 hours ago
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
            <div className="mt-4 flex gap-2">
              <ShadcnUI.Button variant="outline">Read More</ShadcnUI.Button>
              <ShadcnUI.Button>Share</ShadcnUI.Button>
            </div>
          </div>
        </div>
      ),
    },
    profile: {
      title: "Profile Card",
      description: "A card designed to display user profile information",
      code: `<div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
  <div className="p-6">
    <div className="flex items-center gap-4">
      <ShadcnUI.Avatar>
        <img src="/avatar.png" alt="Profile" />
      </ShadcnUI.Avatar>
      <div>
        <h3 className="font-semibold">John Doe</h3>
        <p className="text-sm text-muted-foreground">Software Engineer</p>
      </div>
    </div>
    <div className="mt-4">
      <p className="text-sm">Building amazing web experiences with React and Tailwind CSS.</p>
    </div>
    <div className="mt-4">
      <ShadcnUI.Button variant="outline" className="w-full">View Profile</ShadcnUI.Button>
    </div>
  </div>
</div>`,
      component: (
        <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm">
          <div className="p-6">
            <div className="flex items-center gap-4">
              <ShadcnUI.Avatar>
                <img src="/avatar.png" alt="Profile" />
              </ShadcnUI.Avatar>
              <div>
                <h3 className="font-semibold">John Doe</h3>
                <p className="text-sm text-muted-foreground">
                  Software Engineer
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">
                Building amazing web experiences with React and Tailwind CSS.
              </p>
            </div>
            <div className="mt-4">
              <ShadcnUI.Button variant="outline" className="w-full">
                View Profile
              </ShadcnUI.Button>
            </div>
          </div>
        </div>
      ),
    },
    hover: {
      title: "Hoverable Card",
      description: "A card that displays hover effects",
      code: `<ShadcnUI.CustomHoverCard
  trigger={
    <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
      <div className="p-6">
        <h3 className="text-lg font-semibold">Product Name</h3>
        <p className="text-sm text-muted-foreground">Hover to see details</p>
        <div className="mt-4">
          <span className="text-2xl font-bold">$99.99</span>
        </div>
      </div>
    </div>
  }
>
  <div className="w-[350px] p-4">
    <h4 className="font-semibold">Product Details</h4>
    <p className="mt-2 text-sm">
      This amazing product comes with all the features you need. Limited time offer!
    </p>
    <div className="mt-4">
      <ShadcnUI.Button size="sm">Buy Now</ShadcnUI.Button>
    </div>
  </div>
</ShadcnUI.CustomHoverCard>`,
      component: (
        <ShadcnUI.CustomHoverCard
          trigger={
            <div className="w-[350px] rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-lg">
              <div className="p-6">
                <h3 className="text-lg font-semibold">Product Name</h3>
                <p className="text-sm text-muted-foreground">
                  Hover to see details
                </p>
                <div className="mt-4">
                  <span className="text-2xl font-bold">$99.99</span>
                </div>
              </div>
            </div>
          }
        >
          <div className="w-[350px] p-4">
            <h4 className="font-semibold">Product Details</h4>
            <p className="mt-2 text-sm">
              This amazing product comes with all the features you need. Limited
              time offer!
            </p>
            <div className="mt-4">
              <ShadcnUI.Button size="sm">Buy Now</ShadcnUI.Button>
            </div>
          </div>
        </ShadcnUI.CustomHoverCard>
      ),
    },
    grid: {
      title: "Grid Card Layout",
      description: "Cards arranged in a grid layout",
      code: `<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
  {[1, 2, 3, 4, 5, 6].map((item) => (
    <div key={item} className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="font-semibold">Grid Item {item}</h3>
        <p className="text-sm text-muted-foreground">
          This is a grid item description
        </p>
        <div className="mt-4">
          <ShadcnUI.Button variant="outline" size="sm">
            View Details
          </ShadcnUI.Button>
        </div>
      </div>
    </div>
  ))}
</div>`,
      component: (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="p-6">
                <h3 className="font-semibold">Grid Item {item}</h3>
                <p className="text-sm text-muted-foreground">
                  This is a grid item description
                </p>
                <div className="mt-4">
                  <ShadcnUI.Button variant="outline" size="sm">
                    View Details
                  </ShadcnUI.Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ),
    },
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="mb-8 text-3xl font-bold">Card Components Showcase</h1>

      <ShadcnUI.CustomTabs
        defaultValue="image"
        className="w-full"
        tabs={Object.entries(components).map(([key, value]) => ({
          label: value.title,
          value: key,
          content: (
            <div className="mt-6">
              <div className="mb-6">
                <h2 className="text-xl font-semibold">{value.title}</h2>
                <p className="text-muted-foreground">{value.description}</p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="flex justify-center">{value.component}</div>

                <div className="relative">
                  <ShadcnUI.Button
                    variant="outline"
                    className="absolute right-4 top-4 z-10"
                    onClick={() => copyCode(value.code)}
                  >
                    Copy Code
                  </ShadcnUI.Button>
                  <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-4">
                    <code className="text-sm text-white">{value.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ),
        }))}
      />
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = ShadcnUI.useToast();

  const images = [
    "/images/example1.jpg",
    "/images/example2.jpg",
    "/images/example3.jpg",
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code copied!",
      description: "The code has been copied to your clipboard",
    });
  };

  const components = [
    {
      title: "Image With Hover Card",
      code: `<ShadcnUI.CustomHoverCard
  trigger={
    <img 
      src="/images/example1.jpg"
      alt="Example image 1"
      className="rounded-lg w-[200px] h-[200px] object-cover"
    />
  }
>
  <div className="p-4">
    <h4 className="font-semibold">Image Details</h4>
    <p>High quality photography showcasing nature</p>
  </div>
</ShadcnUI.CustomHoverCard>`,
      component: (
        <ShadcnUI.CustomHoverCard
          trigger={
            <img
              src="/images/example1.jpg"
              alt="Example image 1"
              className="rounded-lg w-[200px] h-[200px] object-cover"
            />
          }
        >
          <div className="p-4">
            <h4 className="font-semibold">Image Details</h4>
            <p>High quality photography showcasing nature</p>
          </div>
        </ShadcnUI.CustomHoverCard>
      ),
    },
    {
      title: "Avatar Group",
      code: `<div className="flex -space-x-4">
  <ShadcnUI.CustomAvatar src="/images/avatar1.jpg" fallbackLabel="JD" alt="User 1" />
  <ShadcnUI.CustomAvatar src="/images/avatar2.jpg" fallbackLabel="MC" alt="User 2" />
  <ShadcnUI.CustomAvatar src="/images/avatar3.jpg" fallbackLabel="AB" alt="User 3" />
</div>`,
      component: (
        <div className="flex -space-x-4">
          <ShadcnUI.CustomAvatar
            src="/images/avatar1.jpg"
            fallbackLabel="JD"
            alt="User 1"
          />
          <ShadcnUI.CustomAvatar
            src="/images/avatar2.jpg"
            fallbackLabel="MC"
            alt="User 2"
          />
          <ShadcnUI.CustomAvatar
            src="/images/avatar3.jpg"
            fallbackLabel="AB"
            alt="User 3"
          />
        </div>
      ),
    },
    {
      title: "Image Gallery Carousel",
      code: `<ShadcnUI.CustomCarousel 
  items={[
    <img 
      key="1"
      src="/images/example1.jpg"
      alt="Gallery image 1" 
      className="w-full h-[300px] object-cover rounded-lg"
    />,
    <img
      key="2" 
      src="/images/example2.jpg"
      alt="Gallery image 2"
      className="w-full h-[300px] object-cover rounded-lg"
    />,
    <img
      key="3"
      src="/images/example3.jpg" 
      alt="Gallery image 3"
      className="w-full h-[300px] object-cover rounded-lg"
    />
  ]}
/>`,
      component: (
        <ShadcnUI.CustomCarousel
          items={images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={"Gallery image " + (i + 1)}
              className="w-full h-[300px] object-cover rounded-lg"
            />
          ))}
        />
      ),
    },
    {
      title: "Background Image Section",
      code: `<div 
  className="w-full h-[300px] rounded-lg relative overflow-hidden"
  style={{
    backgroundImage: 'url(/images/example2.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    <ShadcnUI.Badge variant="secondary" className="text-xl">
      Featured Content
    </ShadcnUI.Badge>
  </div>
</div>`,
      component: (
        <div
          className="w-full h-[300px] rounded-lg relative overflow-hidden"
          style={{
            backgroundImage: "url(/images/example2.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <ShadcnUI.Badge variant="secondary" className="text-xl">
              Featured Content
            </ShadcnUI.Badge>
          </div>
        </div>
      ),
    },
    {
      title: "Video Player Controls",
      code: `<div className="w-full max-w-xl rounded-lg overflow-hidden bg-black">
  <div className="aspect-video bg-muted">
    <div className="h-full flex items-center justify-center">
      <ShadcnUI.Button variant="outline">
        <i className="fas fa-play mr-2"></i>
        Play Video
      </ShadcnUI.Button>
    </div>
  </div>
  <div className="p-4 space-y-4">
    <ShadcnUI.Slider defaultValue={[33]} max={100} step={1} />
    <div className="flex justify-between">
      <ShadcnUI.Button size="sm" variant="ghost">
        <i className="fas fa-backward"></i>
      </ShadcnUI.Button>
      <ShadcnUI.Button size="sm" variant="ghost">
        <i className="fas fa-play"></i>
      </ShadcnUI.Button>
      <ShadcnUI.Button size="sm" variant="ghost">
        <i className="fas fa-forward"></i>
      </ShadcnUI.Button>
    </div>
  </div>
</div>`,
      component: (
        <div className="w-full max-w-xl rounded-lg overflow-hidden bg-black">
          <div className="aspect-video bg-muted">
            <div className="h-full flex items-center justify-center">
              <ShadcnUI.Button variant="outline">
                <i className="fas fa-play mr-2"></i>
                Play Video
              </ShadcnUI.Button>
            </div>
          </div>
          <div className="p-4 space-y-4">
            <ShadcnUI.Slider defaultValue={[33]} max={100} step={1} />
            <div className="flex justify-between">
              <ShadcnUI.Button size="sm" variant="ghost">
                <i className="fas fa-backward"></i>
              </ShadcnUI.Button>
              <ShadcnUI.Button size="sm" variant="ghost">
                <i className="fas fa-play"></i>
              </ShadcnUI.Button>
              <ShadcnUI.Button size="sm" variant="ghost">
                <i className="fas fa-forward"></i>
              </ShadcnUI.Button>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Audio Player",
      code: `<div className="w-full max-w-md p-4 rounded-lg border">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center space-x-2">
      <ShadcnUI.CustomAvatar src="/images/album-art.jpg" fallbackLabel="♪" alt="Album art" />
      <div>
        <h4 className="font-semibold">Song Title</h4>
        <p className="text-sm text-muted-foreground">Artist Name</p>
      </div>
    </div>
    <ShadcnUI.Button variant="ghost" size="icon">
      <i className="fas fa-heart"></i>
    </ShadcnUI.Button>
  </div>
  <ShadcnUI.Slider defaultValue={[45]} max={100} step={1} className="mb-4" />
  <div className="flex justify-between items-center">
    <ShadcnUI.Button size="sm" variant="ghost">
      <i className="fas fa-backward"></i>
    </ShadcnUI.Button>
    <ShadcnUI.Button size="lg" variant="outline" className="rounded-full">
      <i className="fas fa-play"></i>
    </ShadcnUI.Button>
    <ShadcnUI.Button size="sm" variant="ghost">
      <i className="fas fa-forward"></i>
    </ShadcnUI.Button>
  </div>
</div>`,
      component: (
        <div className="w-full max-w-md p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <ShadcnUI.CustomAvatar
                src="/images/album-art.jpg"
                fallbackLabel="♪"
                alt="Album art"
              />
              <div>
                <h4 className="font-semibold">Song Title</h4>
                <p className="text-sm text-muted-foreground">Artist Name</p>
              </div>
            </div>
            <ShadcnUI.Button variant="ghost" size="icon">
              <i className="fas fa-heart"></i>
            </ShadcnUI.Button>
          </div>
          <ShadcnUI.Slider
            defaultValue={[45]}
            max={100}
            step={1}
            className="mb-4"
          />
          <div className="flex justify-between items-center">
            <ShadcnUI.Button size="sm" variant="ghost">
              <i className="fas fa-backward"></i>
            </ShadcnUI.Button>
            <ShadcnUI.Button
              size="lg"
              variant="outline"
              className="rounded-full"
            >
              <i className="fas fa-play"></i>
            </ShadcnUI.Button>
            <ShadcnUI.Button size="sm" variant="ghost">
              <i className="fas fa-forward"></i>
            </ShadcnUI.Button>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Display Component Examples</h1>

      <div className="space-y-12">
        {components.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
            <div className="p-6 border rounded-lg">
              <h2 className="text-xl font-semibold mb-4">{item.title}</h2>
              {item.component}
            </div>

            <div className="relative">
              <div className="absolute top-2 right-2">
                <ShadcnUI.Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyCode(item.code)}
                >
                  <i className="fas fa-copy mr-2"></i>
                  Copy
                </ShadcnUI.Button>
              </div>
              <pre className="p-4 rounded-lg bg-muted overflow-x-auto">
                <code className="text-sm">{item.code}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
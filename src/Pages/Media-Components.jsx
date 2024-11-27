"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedSpeed, setSelectedSpeed] = React.useState("1x");
  const [volume, setVolume] = React.useState(50);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isMuted, setIsMuted] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);
  const [showCaptions, setShowCaptions] = React.useState(false);
  const [showCode, setShowCode] = React.useState({});
  const [filter, setFilter] = React.useState("none");

  const filters = [
    { value: "none", label: "Normal" },
    { value: "grayscale(100%)", label: "Grayscale" },
    { value: "sepia(100%)", label: "Sepia" },
    { value: "blur(5px)", label: "Blur" },
    { value: "brightness(150%)", label: "Bright" },
    { value: "contrast(200%)", label: "Contrast" },
  ];

  const speeds = [
    { value: "0.5x", label: "0.5x Speed" },
    { value: "1x", label: "Normal Speed" },
    { value: "1.5x", label: "1.5x Speed" },
    { value: "2x", label: "2x Speed" },
  ];

  const toggleCode = (section) => {
    setShowCode((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Media Components Showcase</h1>

      <div className="grid gap-8">
        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Media Filters</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => toggleCode("filters")}
              >
                {showCode.filters ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <img
                  src="/sample-image.jpg"
                  alt="Sample"
                  className="w-full rounded-lg"
                  style={{ filter: filter }}
                />

                <ShadcnUI.CustomSelect
                  placeholder="Select filter..."
                  value={filter}
                  onValueChange={setFilter}
                  groups={[
                    {
                      items: filters,
                    },
                  ]}
                />
              </div>

              {showCode.filters && (
                <ShadcnUI.Card className="flex-1">
                  <pre className="p-4 text-sm overflow-auto">
                    {`<img 
  style={{ filter: '${filter}' }}
  src="image.jpg"
/>`}
                  </pre>
                </ShadcnUI.Card>
              )}
            </div>
          </ShadcnUI.CardContent>
        </ShadcnUI.Card>

        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">Media Controls</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => toggleCode("controls")}
              >
                {showCode.controls ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 space-y-4">
                <div className="space-y-2">
                  <ShadcnUI.Label>Volume Control</ShadcnUI.Label>
                  <ShadcnUI.Slider
                    value={[volume]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setVolume(value[0])}
                  />
                </div>

                <div className="space-y-2">
                  <ShadcnUI.Label>Seekbar</ShadcnUI.Label>
                  <ShadcnUI.Slider
                    value={[currentTime]}
                    max={100}
                    step={1}
                    onValueChange={(value) => setCurrentTime(value[0])}
                  />
                </div>

                <div className="flex gap-2">
                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? "⏸️ Pause" : "▶️ Play"}
                  </ShadcnUI.Button>

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setIsMuted(!isMuted)}
                  >
                    {isMuted ? "🔇 Unmute" : "🔊 Mute"}
                  </ShadcnUI.Button>

                  <ShadcnUI.CustomSelect
                    placeholder="Speed"
                    value={selectedSpeed}
                    onValueChange={setSelectedSpeed}
                    groups={[
                      {
                        items: speeds,
                      },
                    ]}
                  />

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setIsFullscreen(!isFullscreen)}
                  >
                    {isFullscreen ? "↙️ Exit" : "↗️ Fullscreen"}
                  </ShadcnUI.Button>

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setShowCaptions(!showCaptions)}
                  >
                    {showCaptions ? "CC Off" : "CC On"}
                  </ShadcnUI.Button>
                </div>
              </div>

              {showCode.controls && (
                <ShadcnUI.Card className="flex-1">
                  <pre className="p-4 text-sm overflow-auto">
                    {`// Volume Control
<ShadcnUI.Slider 
  value={[${volume}]}
  max={100}
  onValueChange={(v) => setVolume(v[0])}
/>

// Seekbar
<ShadcnUI.Slider
  value={[${currentTime}]}
  max={100} 
  onValueChange={(v) => setCurrentTime(v[0])}
/>

// Speed Control  
<ShadcnUI.CustomSelect
  value="${selectedSpeed}"
  onValueChange={setSelectedSpeed}
  groups={[{
    items: speeds
  }]}
/>`}
                  </pre>
                </ShadcnUI.Card>
              )}
            </div>
          </ShadcnUI.CardContent>
        </ShadcnUI.Card>

        <ShadcnUI.Card>
          <ShadcnUI.CardHeader>
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-semibold">GIF Player</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => toggleCode("gif")}
              >
                {showCode.gif ? "Hide Code" : "Show Code"}
              </ShadcnUI.Button>
            </div>
          </ShadcnUI.CardHeader>
          <ShadcnUI.CardContent>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <img
                  src="/sample-gif.gif"
                  alt="Sample GIF"
                  className="w-full rounded-lg"
                  style={{
                    filter: filter,
                    animationPlayState: isPlaying ? "running" : "paused",
                  }}
                />
                <div className="flex gap-2 mt-4">
                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? "⏸️ Pause" : "▶️ Play"}
                  </ShadcnUI.Button>
                </div>
              </div>

              {showCode.gif && (
                <ShadcnUI.Card className="flex-1">
                  <pre className="p-4 text-sm overflow-auto">
                    {`<img
  style={{ 
    animationPlayState: 
      ${isPlaying ? "'running'" : "'paused'"}
  }}
  src="gif.gif"
/>`}
                  </pre>
                </ShadcnUI.Card>
              )}
            </div>
          </ShadcnUI.CardContent>
        </ShadcnUI.Card>
      </div>
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../utilities/runtime-helpers";

function MainComponent() {
  const [isLoading, setIsLoading] = React.useState(false);
  const [audioUrl, setAudioUrl] = React.useState("");
  const [activeAudioElement, setActiveAudioElement] = React.useState(null);
  const audioRef = React.useRef(null);
  const [upload] = useUpload();
  const visualizerRef = React.useRef(null);
  const [isRecording, setIsRecording] = React.useState(false);
  const [recordedAudio, setRecordedAudio] = React.useState(null);
  const [mediaRecorder, setMediaRecorder] = React.useState(null);
  const [audioChunks, setAudioChunks] = React.useState([]);
  const [podcastSpeed, setPodcastSpeed] = React.useState(1);
  const [volumeLevel, setVolumeLevel] = React.useState(1);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  const audioTracks = [
    { name: "Lo-Fi Study", url: "/audio/lofi.mp3", type: "background" },
    { name: "Nature Sounds", url: "/audio/nature.mp3", type: "background" },
    { name: "Tech Podcast #1", url: "/audio/podcast1.mp3", type: "podcast" },
    { name: "Tech Podcast #2", url: "/audio/podcast2.mp3", type: "podcast" },
  ];

  const soundEffects = [
    { name: "Click", url: "/sfx/click.mp3" },
    { name: "Success", url: "/sfx/success.mp3" },
    { name: "Error", url: "/sfx/error.mp3" },
    { name: "Notification", url: "/sfx/notification.mp3" },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(false);

  React.useEffect(() => {
    if (visualizerRef.current) {
      const canvas = visualizerRef.current;
      const ctx = canvas.getContext("2d");
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      const analyser = audioContext.createAnalyser();

      if (audioRef.current) {
        const source = audioContext.createMediaElementSource(audioRef.current);
        source.connect(analyser);
        analyser.connect(audioContext.destination);

        function animate() {
          const freqData = new Uint8Array(analyser.frequencyBinCount);
          analyser.getByteFrequencyData(freqData);

          ctx.clearRect(0, 0, canvas.width, canvas.height);

          const barWidth = (canvas.width / freqData.length) * 2.5;
          let barHeight;
          let x = 0;

          for (let i = 0; i < freqData.length; i++) {
            barHeight = freqData[i] / 2;

            ctx.fillStyle = `rgb(${barHeight + 100},50,50)`;
            ctx.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight);

            x += barWidth + 1;
          }

          requestAnimationFrame(animate);
        }

        animate();
      }
    }
  }, [audioRef.current]);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);

    const chunks = [];
    recorder.ondataavailable = (e) => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: "audio/ogg; codecs=opus" });
      setRecordedAudio(URL.createObjectURL(blob));
      setAudioChunks(chunks);
    };

    recorder.start();
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const handleFileUpload = async (e) => {
    try {
      setIsLoading(true);
      const file = e.target.files[0];
      const { url } = await upload({ file });
      setAudioUrl(url);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <ShadcnUI.CustomTabs
        defaultValue="player"
        tabs={[
          {
            label: "Audio Player",
            value: "player",
            content: (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <audio
                      ref={audioRef}
                      src={audioUrl || audioTracks[currentTrackIndex].url}
                      onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
                      onLoadedMetadata={(e) => setDuration(e.target.duration)}
                    />

                    <div className="space-y-4">
                      <ShadcnUI.Slider
                        value={[currentTime]}
                        max={duration}
                        step={1}
                        onValueChange={([value]) => {
                          if (audioRef.current) {
                            audioRef.current.currentTime = value;
                          }
                        }}
                      />

                      <div className="flex justify-between">
                        <ShadcnUI.Button
                          variant="outline"
                          onClick={() => {
                            if (audioRef.current) {
                              audioRef.current.currentTime = Math.max(
                                0,
                                currentTime - 10
                              );
                            }
                          }}
                        >
                          -10s
                        </ShadcnUI.Button>

                        <ShadcnUI.Button
                          onClick={() => {
                            if (audioRef.current) {
                              if (isPlaying) {
                                audioRef.current.pause();
                              } else {
                                audioRef.current.play();
                              }
                              setIsPlaying(!isPlaying);
                            }
                          }}
                        >
                          {isPlaying ? "Pause" : "Play"}
                        </ShadcnUI.Button>

                        <ShadcnUI.Button
                          variant="outline"
                          onClick={() => {
                            if (audioRef.current) {
                              audioRef.current.currentTime = Math.min(
                                duration,
                                currentTime + 10
                              );
                            }
                          }}
                        >
                          +10s
                        </ShadcnUI.Button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="w-8">🔊</span>
                        <ShadcnUI.Slider
                          value={[volumeLevel * 100]}
                          max={100}
                          step={1}
                          onValueChange={([value]) => {
                            const newVolume = value / 100;
                            setVolumeLevel(newVolume);
                            if (audioRef.current) {
                              audioRef.current.volume = newVolume;
                            }
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">
                      Audio Visualizer
                    </h3>
                    <canvas
                      ref={visualizerRef}
                      width="320"
                      height="100"
                      className="w-full bg-black rounded"
                    />
                  </div>
                </div>

                <ShadcnUI.CustomDialog
                  triggerButtonText="View Code"
                  title="Audio Player Code"
                  description="Copy and paste this code to implement the audio player"
                >
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
                    {`const [isPlaying, setIsPlaying] = React.useState(false);
const audioRef = React.useRef(null);
const [currentTime, setCurrentTime] = React.useState(0);
const [duration, setDuration] = React.useState(0);

<audio
  ref={audioRef}
  src={audioUrl}
  onTimeUpdate={(e) => setCurrentTime(e.target.currentTime)}
  onLoadedMetadata={(e) => setDuration(e.target.duration)}
/>

<ShadcnUI.Slider 
  value={[currentTime]}
  max={duration}
  step={1}
  onValueChange={([value]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  }}
/>`}
                  </pre>
                </ShadcnUI.CustomDialog>
              </div>
            ),
          },
          {
            label: "Voice Recorder",
            value: "recorder",
            content: (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <div className="space-y-4">
                      <ShadcnUI.Button
                        onClick={isRecording ? stopRecording : startRecording}
                        variant={isRecording ? "destructive" : "default"}
                      >
                        {isRecording ? "Stop Recording" : "Start Recording"}
                      </ShadcnUI.Button>

                      {recordedAudio && (
                        <div className="space-y-2">
                          <audio
                            src={recordedAudio}
                            controls
                            className="w-full"
                          />
                          <ShadcnUI.Button
                            variant="outline"
                            onClick={() => {
                              const link = document.createElement("a");
                              link.href = recordedAudio;
                              link.download = "recording.ogg";
                              link.click();
                            }}
                          >
                            Download Recording
                          </ShadcnUI.Button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <ShadcnUI.CustomDialog
                  triggerButtonText="View Code"
                  title="Voice Recorder Code"
                  description="Copy and paste this code to implement the voice recorder"
                >
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
                    {`const [isRecording, setIsRecording] = React.useState(false);
const [recordedAudio, setRecordedAudio] = React.useState(null);
const [mediaRecorder, setMediaRecorder] = React.useState(null);

const startRecording = async () => {
  const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
  const recorder = new MediaRecorder(stream);
  setMediaRecorder(recorder);
  
  const chunks = [];
  recorder.ondataavailable = e => chunks.push(e.data);
  recorder.onstop = () => {
    const blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
    setRecordedAudio(URL.createObjectURL(blob));
  };
  
  recorder.start();
  setIsRecording(true);
};

const stopRecording = () => {
  mediaRecorder.stop();
  setIsRecording(false);
};`}
                  </pre>
                </ShadcnUI.CustomDialog>
              </div>
            ),
          },
          {
            label: "Podcast Player",
            value: "podcast",
            content: (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <ShadcnUI.Select
                      placeholder="Select playback speed"
                      value={podcastSpeed.toString()}
                      groups={[
                        {
                          items: [
                            { value: "0.5", label: "0.5x" },
                            { value: "1", label: "1x" },
                            { value: "1.5", label: "1.5x" },
                            { value: "2", label: "2x" },
                          ],
                        },
                      ]}
                      onValueChange={(value) => {
                        setPodcastSpeed(parseFloat(value));
                        if (audioRef.current) {
                          audioRef.current.playbackRate = parseFloat(value);
                        }
                      }}
                    />

                    <div className="mt-4">
                      {audioTracks
                        .filter((track) => track.type === "podcast")
                        .map((podcast, index) => (
                          <ShadcnUI.Button
                            key={index}
                            variant="outline"
                            className="w-full mb-2"
                            onClick={() => {
                              setCurrentTrackIndex(index);
                              if (audioRef.current) {
                                audioRef.current.src = podcast.url;
                                audioRef.current.play();
                                setIsPlaying(true);
                              }
                            }}
                          >
                            {podcast.name}
                          </ShadcnUI.Button>
                        ))}
                    </div>
                  </div>
                </div>

                <ShadcnUI.CustomDialog
                  triggerButtonText="View Code"
                  title="Podcast Player Code"
                  description="Copy and paste this code to implement the podcast player"
                >
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
                    {`const [podcastSpeed, setPodcastSpeed] = React.useState(1);
const audioRef = React.useRef(null);

<ShadcnUI.Select
  value={podcastSpeed.toString()}
  onValueChange={(value) => {
    setPodcastSpeed(parseFloat(value));
    if (audioRef.current) {
      audioRef.current.playbackRate = parseFloat(value);
    }
  }}
  groups={[{
    items: [
      { value: "0.5", label: "0.5x" },
      { value: "1", label: "1x" },
      { value: "1.5", label: "1.5x" },
      { value: "2", label: "2x" }
    ]
  }]}
/>`}
                  </pre>
                </ShadcnUI.CustomDialog>
              </div>
            ),
          },
          {
            label: "Sound Effects",
            value: "effects",
            content: (
              <div className="grid md:grid-cols-2 gap-8">
                <div className="grid grid-cols-2 gap-4">
                  {soundEffects.map((effect, index) => (
                    <ShadcnUI.Button
                      key={index}
                      variant="outline"
                      onClick={() => {
                        if (activeAudioElement) {
                          activeAudioElement.pause();
                        }
                        const audio = new Audio(effect.url);
                        setActiveAudioElement(audio);
                        audio.play();
                      }}
                    >
                      {effect.name}
                    </ShadcnUI.Button>
                  ))}
                </div>

                <ShadcnUI.CustomDialog
                  triggerButtonText="View Code"
                  title="Sound Effects Code"
                  description="Copy and paste this code to implement sound effects"
                >
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-auto">
                    {`const soundEffects = [
  { name: "Click", url: "/sfx/click.mp3" },
  { name: "Success", url: "/sfx/success.mp3" },
  { name: "Error", url: "/sfx/error.mp3" },
  { name: "Notification", url: "/sfx/notification.mp3" }
];

{soundEffects.map((effect, index) => (
  <ShadcnUI.Button
    key={index}
    variant="outline"
    onClick={() => new Audio(effect.url).play()}
  >
    {effect.name}
  </ShadcnUI.Button>
))}`}
                  </pre>
                </ShadcnUI.CustomDialog>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default MainComponent;
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function TextToSpeech() {
  const textToSpeech = (text) => {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    synth.speak(utterance);
  };

  return (
    <section className="border rounded-lg p-6" aria-labelledby="text-to-speech-heading">
      <h2 id="text-to-speech-heading" className="text-xl font-semibold mb-4">
        Text-to-Speech
      </h2>
      <div className="mb-4">
        <ShadcnUI.Button
          onClick={() => textToSpeech("Hello! This is a text to speech example.")}
          aria-label="Speak sample text"
        >
          <i className="fas fa-volume-up mr-2"></i>
          Speak Text
        </ShadcnUI.Button>
      </div>
      <ShadcnUI.CustomAlert
        title="Tip"
        description="Click the button to hear the text being read aloud"
      />
    </section>
  );
}

"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [rating, setRating] = React.useState(0);
  const [feedbackText, setFeedbackText] = React.useState("");
  const [thumbsUp, setThumbsUp] = React.useState(0);
  const [thumbsDown, setThumbsDown] = React.useState(0);
  const [selectedEmoji, setSelectedEmoji] = React.useState(null);

  const stars = [1, 2, 3, 4, 5];
  const emojis = ["😀", "😊", "🙂", "😐", "☹️", "😢", "😡"];

  const codeSnippets = {
    starRating: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <div className="flex gap-1">
      {stars.map((star) => (
        <ShadcnUI.Button
          key={star}
          variant={rating >= star ? "default" : "outline"}
          onClick={() => setRating(star)}>
          <i className="fas fa-star" />
        </ShadcnUI.Button>
      ))}
    </div>
  </ShadcnUI.CardHeader>
</ShadcnUI.Card>`,

    thumbsRating: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <div className="flex gap-4">
      <ShadcnUI.Button
        variant="outline"
        onClick={() => setThumbsUp(prev => prev + 1)}>
        <i className="fas fa-thumbs-up" /> {thumbsUp}
      </ShadcnUI.Button>
      <ShadcnUI.Button
        variant="outline" 
        onClick={() => setThumbsDown(prev => prev + 1)}>
        <i className="fas fa-thumbs-down" /> {thumbsDown}
      </ShadcnUI.Button>
    </div>
  </ShadcnUI.CardHeader>
</ShadcnUI.Card>`,

    feedbackForm: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>Feedback Form</ShadcnUI.CardTitle>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="space-y-4">
      <ShadcnUI.Input 
        placeholder="Your name" 
        name="name"
      />
      <ShadcnUI.Input 
        placeholder="Email" 
        type="email" 
        name="email"
      />
      <textarea 
        className="w-full h-32 p-2 border rounded"
        placeholder="Your feedback..."
        name="feedback"
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
      />
    </div>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter>
    <ShadcnUI.Button>Submit Feedback</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`,

    emojiPicker: `<ShadcnUI.Card>
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>How are you feeling?</ShadcnUI.CardTitle>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="flex gap-2">
      {emojis.map((emoji) => (
        <ShadcnUI.Button
          key={emoji}
          variant={selectedEmoji === emoji ? "default" : "outline"}
          onClick={() => setSelectedEmoji(emoji)}
          className="text-2xl"
        >
          {emoji}
        </ShadcnUI.Button>
      ))}
    </div>
  </ShadcnUI.CardContent>
</ShadcnUI.Card>`,
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Star Rating */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Star Rating</h2>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <div className="flex gap-1">
                {stars.map((star) => (
                  <ShadcnUI.Button
                    key={star}
                    variant={rating >= star ? "default" : "outline"}
                    onClick={() => setRating(star)}
                  >
                    <i className="fas fa-star" />
                  </ShadcnUI.Button>
                ))}
              </div>
            </ShadcnUI.CardHeader>
          </ShadcnUI.Card>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                <code>{codeSnippets.starRating}</code>
              </pre>
            </ShadcnUI.CardHeader>
            <ShadcnUI.CardFooter>
              <ShadcnUI.Button
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(codeSnippets.starRating)
                }
              >
                Copy Code
              </ShadcnUI.Button>
            </ShadcnUI.CardFooter>
          </ShadcnUI.Card>
        </div>

        {/* Thumbs Up/Down */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Thumbs Rating</h2>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <div className="flex gap-4">
                <ShadcnUI.Button
                  variant="outline"
                  onClick={() => setThumbsUp((prev) => prev + 1)}
                >
                  <i className="fas fa-thumbs-up" /> {thumbsUp}
                </ShadcnUI.Button>
                <ShadcnUI.Button
                  variant="outline"
                  onClick={() => setThumbsDown((prev) => prev + 1)}
                >
                  <i className="fas fa-thumbs-down" /> {thumbsDown}
                </ShadcnUI.Button>
              </div>
            </ShadcnUI.CardHeader>
          </ShadcnUI.Card>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                <code>{codeSnippets.thumbsRating}</code>
              </pre>
            </ShadcnUI.CardHeader>
            <ShadcnUI.CardFooter>
              <ShadcnUI.Button
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(codeSnippets.thumbsRating)
                }
              >
                Copy Code
              </ShadcnUI.Button>
            </ShadcnUI.CardFooter>
          </ShadcnUI.Card>
        </div>

        {/* Feedback Form */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Feedback Form</h2>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <ShadcnUI.CardTitle>Feedback Form</ShadcnUI.CardTitle>
            </ShadcnUI.CardHeader>
            <ShadcnUI.CardContent>
              <div className="space-y-4">
                <ShadcnUI.Input placeholder="Your name" name="name" />
                <ShadcnUI.Input placeholder="Email" type="email" name="email" />
                <textarea
                  className="w-full h-32 p-2 border rounded"
                  placeholder="Your feedback..."
                  name="feedback"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                />
              </div>
            </ShadcnUI.CardContent>
            <ShadcnUI.CardFooter>
              <ShadcnUI.Button>Submit Feedback</ShadcnUI.Button>
            </ShadcnUI.CardFooter>
          </ShadcnUI.Card>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                <code>{codeSnippets.feedbackForm}</code>
              </pre>
            </ShadcnUI.CardHeader>
            <ShadcnUI.CardFooter>
              <ShadcnUI.Button
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(codeSnippets.feedbackForm)
                }
              >
                Copy Code
              </ShadcnUI.Button>
            </ShadcnUI.CardFooter>
          </ShadcnUI.Card>
        </div>

        {/* Emoji Picker */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">Emoji Picker</h2>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <ShadcnUI.CardTitle>How are you feeling?</ShadcnUI.CardTitle>
            </ShadcnUI.CardHeader>
            <ShadcnUI.CardContent>
              <div className="flex gap-2">
                {emojis.map((emoji) => (
                  <ShadcnUI.Button
                    key={emoji}
                    variant={selectedEmoji === emoji ? "default" : "outline"}
                    onClick={() => setSelectedEmoji(emoji)}
                    className="text-2xl"
                  >
                    {emoji}
                  </ShadcnUI.Button>
                ))}
              </div>
            </ShadcnUI.CardContent>
          </ShadcnUI.Card>
          <ShadcnUI.Card>
            <ShadcnUI.CardHeader>
              <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
                <code>{codeSnippets.emojiPicker}</code>
              </pre>
            </ShadcnUI.CardHeader>
            <ShadcnUI.CardFooter>
              <ShadcnUI.Button
                variant="outline"
                onClick={() =>
                  navigator.clipboard.writeText(codeSnippets.emojiPicker)
                }
              >
                Copy Code
              </ShadcnUI.Button>
            </ShadcnUI.CardFooter>
          </ShadcnUI.Card>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
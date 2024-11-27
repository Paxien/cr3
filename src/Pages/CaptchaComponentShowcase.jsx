"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [formValue, setFormValue] = React.useState("");
  const [isCaptchaValid, setIsCaptchaValid] = React.useState(false);
  const [showCode, setShowCode] = React.useState({
    simple: false,
    recaptcha: false,
    invisible: false,
  });

  const simpleCaptchaCode = `<ShadcnUI.Card className="w-[350px]">
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>Simple CAPTCHA</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription>
      Enter the text shown in the image
    </ShadcnUI.CardDescription>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="space-y-4">
      <div className="bg-[#f0f0f0] p-4 rounded-md select-none">
        <span className="font-mono text-xl tracking-widest">Xy9kP</span>
      </div>
      <ShadcnUI.Input 
        placeholder="Enter CAPTCHA"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
      />
    </div>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter>
    <ShadcnUI.Button className="w-full">Verify</ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`;

  const reCaptchaCode = `<ShadcnUI.Card className="w-[350px]">
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>reCAPTCHA</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription>
      Verify that you are human
    </ShadcnUI.CardDescription>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <div className="w-full h-[78px] bg-[#f9f9f9] border rounded-[3px] flex items-center px-3">
      <ShadcnUI.Checkbox id="recaptcha" className="mr-3" />
      <label htmlFor="recaptcha">I'm not a robot</label>
      <div className="ml-auto">
        <img src="/recaptcha-logo.png" alt="reCAPTCHA logo" className="w-[30px]" />
      </div>
    </div>
  </ShadcnUI.CardContent>
</ShadcnUI.Card>`;

  const invisibleCaptchaCode = `<ShadcnUI.Card className="w-[350px]">
  <ShadcnUI.CardHeader>
    <ShadcnUI.CardTitle>Invisible CAPTCHA</ShadcnUI.CardTitle>
    <ShadcnUI.CardDescription>
      Protected by invisible CAPTCHA
    </ShadcnUI.CardDescription>
  </ShadcnUI.CardHeader>
  <ShadcnUI.CardContent>
    <form className="space-y-4">
      <div className="space-y-2">
        <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
        <ShadcnUI.Input id="email" type="email" placeholder="Enter your email" />
      </div>
      <div className="space-y-2">
        <ShadcnUI.Label htmlFor="message">Message</ShadcnUI.Label>
        <textarea
          className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2"
          id="message"
          placeholder="Enter your message"
        />
      </div>
    </form>
  </ShadcnUI.CardContent>
  <ShadcnUI.CardFooter>
    <ShadcnUI.Button className="w-full">
      Submit Protected Form
    </ShadcnUI.Button>
  </ShadcnUI.CardFooter>
</ShadcnUI.Card>`;

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">CAPTCHA Components</h1>

      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShadcnUI.Card className="w-[350px]">
              <ShadcnUI.CardHeader>
                <ShadcnUI.CardTitle>Simple CAPTCHA</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Enter the text shown in the image
                </ShadcnUI.CardDescription>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <div className="space-y-4">
                  <div className="bg-[#f0f0f0] p-4 rounded-md select-none">
                    <span className="font-mono text-xl tracking-widest">
                      Xy9kP
                    </span>
                  </div>
                  <ShadcnUI.Input
                    placeholder="Enter CAPTCHA"
                    value={formValue}
                    onChange={(e) => setFormValue(e.target.value)}
                  />
                </div>
              </ShadcnUI.CardContent>
              <ShadcnUI.CardFooter>
                <ShadcnUI.Button className="w-full">Verify</ShadcnUI.Button>
              </ShadcnUI.CardFooter>
            </ShadcnUI.Card>
          </div>

          <div className="relative">
            <ShadcnUI.Button
              variant="outline"
              onClick={() =>
                setShowCode({ ...showCode, simple: !showCode.simple })
              }
              className="absolute top-0 right-0"
            >
              {showCode.simple ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.simple && (
              <pre className="bg-[#1e1e1e] text-white p-4 rounded-lg overflow-auto max-h-[400px] mt-10">
                <code>{simpleCaptchaCode}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShadcnUI.Card className="w-[350px]">
              <ShadcnUI.CardHeader>
                <ShadcnUI.CardTitle>reCAPTCHA</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Verify that you are human
                </ShadcnUI.CardDescription>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <div className="w-full h-[78px] bg-[#f9f9f9] border rounded-[3px] flex items-center px-3">
                  <ShadcnUI.Checkbox
                    id="recaptcha"
                    className="mr-3"
                    onCheckedChange={(checked) => setIsCaptchaValid(checked)}
                  />
                  <label htmlFor="recaptcha">I'm not a robot</label>
                  <div className="ml-auto">
                    <img
                      src="/recaptcha-logo.png"
                      alt="reCAPTCHA logo"
                      className="w-[30px]"
                    />
                  </div>
                </div>
              </ShadcnUI.CardContent>
            </ShadcnUI.Card>
          </div>

          <div className="relative">
            <ShadcnUI.Button
              variant="outline"
              onClick={() =>
                setShowCode({ ...showCode, recaptcha: !showCode.recaptcha })
              }
              className="absolute top-0 right-0"
            >
              {showCode.recaptcha ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.recaptcha && (
              <pre className="bg-[#1e1e1e] text-white p-4 rounded-lg overflow-auto max-h-[400px] mt-10">
                <code>{reCaptchaCode}</code>
              </pre>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShadcnUI.Card className="w-[350px]">
              <ShadcnUI.CardHeader>
                <ShadcnUI.CardTitle>Invisible CAPTCHA</ShadcnUI.CardTitle>
                <ShadcnUI.CardDescription>
                  Protected by invisible CAPTCHA
                </ShadcnUI.CardDescription>
              </ShadcnUI.CardHeader>
              <ShadcnUI.CardContent>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
                    <ShadcnUI.Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="space-y-2">
                    <ShadcnUI.Label htmlFor="message">Message</ShadcnUI.Label>
                    <textarea
                      className="w-full min-h-[100px] rounded-md border border-input bg-background px-3 py-2"
                      id="message"
                      placeholder="Enter your message"
                    />
                  </div>
                </form>
              </ShadcnUI.CardContent>
              <ShadcnUI.CardFooter>
                <ShadcnUI.Button className="w-full">
                  Submit Protected Form
                </ShadcnUI.Button>
              </ShadcnUI.CardFooter>
            </ShadcnUI.Card>
          </div>

          <div className="relative">
            <ShadcnUI.Button
              variant="outline"
              onClick={() =>
                setShowCode({ ...showCode, invisible: !showCode.invisible })
              }
              className="absolute top-0 right-0"
            >
              {showCode.invisible ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.invisible && (
              <pre className="bg-[#1e1e1e] text-white p-4 rounded-lg overflow-auto max-h-[400px] mt-10">
                <code>{invisibleCaptchaCode}</code>
              </pre>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
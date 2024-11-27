"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const { toast } = ShadcnUI.useToast();
  const [theme, setTheme] = React.useState("light");
  const [language, setLanguage] = React.useState("en");
  const [error, setError] = React.useState(null);
  const [events, setEvents] = React.useState([]);
  const [showCode, setShowCode] = React.useState({});
  const [contextState, setContextState] = React.useState({ count: 0 });
  const [featureState, setFeatureState] = React.useState({ isLoggedIn: false });
  const [stateValidation, setStateValidation] = React.useState({ email: "" });
  const [stateEvents, setStateEvents] = React.useState([]);

  const eventBus = {
    emit: (event) => {
      setEvents((prev) => [...prev, event]);
      toast({
        title: "Event Emitted",
        description: `${event.type}: ${event.payload}`,
      });
    },
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
    toast({
      title: "Theme Changed",
      description: `Theme switched to ${
        theme === "light" ? "dark" : "light"
      } mode`,
    });
  };

  const handleLanguageChange = (value) => {
    setLanguage(value);
    toast({
      title: "Language Changed",
      description: `Language switched to ${value}`,
    });
  };

  const toggleCodeVisibility = (section) => {
    setShowCode((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const updateContextState = () => {
    setContextState((prev) => ({ count: prev.count + 1 }));
    toast({
      title: "Context Updated",
      description: "Counter incremented",
    });
  };

  const toggleFeatureState = () => {
    setFeatureState((prev) => ({ isLoggedIn: !prev.isLoggedIn }));
    toast({
      title: "Feature State Changed",
      description: `User is now ${
        !featureState.isLoggedIn ? "logged in" : "logged out"
      }`,
    });
  };

  const validateEmail = (email) => {
    const isValid = email.includes("@");
    setStateValidation({ email, isValid });
    if (!isValid) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
      });
    }
  };

  const emitStateEvent = (type) => {
    const newEvent = { type, timestamp: new Date().toISOString() };
    setStateEvents((prev) => [...prev, newEvent]);
    toast({
      title: "State Event",
      description: `${type} event emitted`,
    });
  };

  return (
    <div className="p-8 max-w-[1200px] mx-auto">
      <ShadcnUI.Toaster />

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Contextual State Management</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Theme State Manager
                </h3>
                <ShadcnUI.Switch
                  checked={theme === "dark"}
                  onCheckedChange={toggleTheme}
                />
                <span className="ml-2">Current Theme: {theme}</span>
              </div>
            </ShadcnUI.Card>
          </div>

          <div>
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCodeVisibility("theme")}
              className="mb-2"
            >
              {showCode.theme ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.theme && (
              <ShadcnUI.Card className="p-4">
                <pre className="text-sm overflow-x-auto">
                  {`const [theme, setTheme] = React.useState('light');
const toggleTheme = () => setTheme(prev => 
  prev === 'light' ? 'dark' : 'light'
);`}
                </pre>
              </ShadcnUI.Card>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  User Settings Manager
                </h3>
                <ShadcnUI.Select
                  value={language}
                  onValueChange={handleLanguageChange}
                  groups={[
                    {
                      items: [
                        { value: "en", label: "English" },
                        { value: "es", label: "Spanish" },
                        { value: "fr", label: "French" },
                      ],
                    },
                  ]}
                />
              </div>
            </ShadcnUI.Card>
          </div>

          <div>
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCodeVisibility("settings")}
              className="mb-2"
            >
              {showCode.settings ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.settings && (
              <ShadcnUI.Card className="p-4">
                <pre className="text-sm overflow-x-auto">
                  {`const [language, setLanguage] = React.useState('en');
const handleLanguageChange = (value) => {
  setLanguage(value);
};`}
                </pre>
              </ShadcnUI.Card>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Contextual State Manager
                </h3>
                <div className="space-y-4">
                  <p>Count: {contextState.count}</p>
                  <ShadcnUI.Button onClick={updateContextState}>
                    Increment Counter
                  </ShadcnUI.Button>
                </div>
              </div>
            </ShadcnUI.Card>
          </div>

          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Feature-Specific State Manager
                </h3>
                <div className="space-y-4">
                  <p>
                    Status:{" "}
                    {featureState.isLoggedIn ? "Logged In" : "Logged Out"}
                  </p>
                  <ShadcnUI.Button onClick={toggleFeatureState}>
                    Toggle Login State
                  </ShadcnUI.Button>
                </div>
              </div>
            </ShadcnUI.Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">State Validation</h3>
                <div className="space-y-4">
                  <ShadcnUI.Input
                    type="email"
                    placeholder="Enter email"
                    value={stateValidation.email}
                    onChange={(e) => validateEmail(e.target.value)}
                  />
                  {stateValidation.isValid === false && (
                    <p className="text-red-500">Invalid email format</p>
                  )}
                </div>
              </div>
            </ShadcnUI.Card>
          </div>

          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  State Event Listener
                </h3>
                <div className="space-y-4">
                  <ShadcnUI.Button
                    onClick={() => emitStateEvent("USER_INTERACTION")}
                  >
                    Trigger State Event
                  </ShadcnUI.Button>
                  <div className="max-h-[100px] overflow-y-auto">
                    {stateEvents.map((event, index) => (
                      <div key={index} className="text-sm">
                        {event.type} at {event.timestamp}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ShadcnUI.Card>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          State Validation & Error Handling
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">
                  Error State Manager
                </h3>
                <ShadcnUI.Button
                  variant="destructive"
                  onClick={() => setError(new Error("Test Error"))}
                >
                  Trigger Error
                </ShadcnUI.Button>

                {error && (
                  <ShadcnUI.Alert variant="destructive" className="mt-4">
                    <div>
                      <h4 className="text-lg font-medium">{error.message}</h4>
                      <ShadcnUI.Button
                        variant="outline"
                        size="sm"
                        className="mt-2"
                        onClick={() => setError(null)}
                      >
                        Dismiss
                      </ShadcnUI.Button>
                    </div>
                  </ShadcnUI.Alert>
                )}
              </div>
            </ShadcnUI.Card>
          </div>

          <div>
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCodeVisibility("error")}
              className="mb-2"
            >
              {showCode.error ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.error && (
              <ShadcnUI.Card className="p-4">
                <pre className="text-sm overflow-x-auto">
                  {`const [error, setError] = React.useState(null);
const triggerError = () => 
  setError(new Error('Test Error'));
const dismissError = () => setError(null);`}
                </pre>
              </ShadcnUI.Card>
            )}
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">State Event Handling</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <ShadcnUI.Card>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">Event Bus Demo</h3>
                <ShadcnUI.Button
                  onClick={() =>
                    eventBus.emit({
                      type: "USER_ACTION",
                      payload: "Button Clicked",
                    })
                  }
                >
                  Emit Event
                </ShadcnUI.Button>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Event Log:</h4>
                  <div className="max-h-[200px] overflow-y-auto">
                    {events.map((event, i) => (
                      <div key={i} className="text-sm mb-1">
                        {event.type}: {event.payload}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ShadcnUI.Card>
          </div>

          <div>
            <ShadcnUI.Button
              variant="outline"
              onClick={() => toggleCodeVisibility("events")}
              className="mb-2"
            >
              {showCode.events ? "Hide Code" : "Show Code"}
            </ShadcnUI.Button>
            {showCode.events && (
              <ShadcnUI.Card className="p-4">
                <pre className="text-sm overflow-x-auto">
                  {`const [events, setEvents] = React.useState([]);
const eventBus = {
  emit: (event) => {
    setEvents(prev => [...prev, event]);
    toast({
      title: "Event Emitted",
      description: \`\${event.type}: \${event.payload}\`
    });
  }
};`}
                </pre>
              </ShadcnUI.Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
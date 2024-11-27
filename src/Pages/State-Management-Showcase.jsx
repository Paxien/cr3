"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  // State Management Hooks
  const [globalState, setGlobalState] = React.useState({
    count: 0,
    items: [],
    user: null,
    theme: "light",
    notifications: [],
    computed: {
      totalItems: 0,
      lastUpdated: null,
    },
    thresholds: {
      count: 10,
      items: 5,
    },
  });
  const [history, setHistory] = React.useState([]);
  const [selectedComponent, setSelectedComponent] = React.useState("hooks");
  const [debug, setDebug] = React.useState(false);
  const { toast } = ShadcnUI.useToast();

  // Custom hooks example
  const useStateEffect = (callback, deps) => {
    React.useEffect(() => {
      callback();
      toast({
        title: "State Effect Triggered",
        description: "Effect executed due to state change",
      });
    }, deps);
  };

  const useStateSelector = (selector) => {
    const value = selector(globalState);
    React.useEffect(() => {
      if (debug) {
        console.log("State selected:", value);
      }
    }, [value]);
    return value;
  };

  const useStateWatch = (selector, threshold, callback) => {
    const value = useStateSelector(selector);
    React.useEffect(() => {
      if (value > threshold) {
        callback(value);
        toast({
          title: "Threshold Exceeded",
          description: `Value ${value} exceeded threshold ${threshold}`,
        });
      }
    }, [value, threshold, callback]);
  };

  const useStateMutation = () => {
    return (type, payload) => {
      setHistory((prev) => [...prev, globalState]);
      setGlobalState((prev) => {
        const newState = { ...prev };
        switch (type) {
          case "INCREMENT":
            newState.count += 1;
            newState.computed.lastUpdated = new Date();
            break;
          case "ADD_ITEM":
            newState.items = [...prev.items, payload];
            newState.computed.totalItems = newState.items.length;
            break;
          case "SET_USER":
            newState.user = payload;
            break;
          case "TOGGLE_THEME":
            newState.theme = prev.theme === "light" ? "dark" : "light";
            break;
          case "ADD_NOTIFICATION":
            newState.notifications = [...prev.notifications, payload];
            break;
          default:
            break;
        }
        return newState;
      });
    };
  };

  // Initialize hooks
  const mutate = useStateMutation();
  const count = useStateSelector((state) => state.count);
  const theme = useStateSelector((state) => state.theme);
  const notifications = useStateSelector((state) => state.notifications);

  useStateEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  const componentsData = [
    {
      title: "State Management Hooks",
      value: "hooks",
      content: (
        <div className="space-y-6">
          <ShadcnUI.CustomDialog
            triggerButtonText="View Hooks Demo"
            title="State Management Hooks"
            description="Demonstration of custom hooks"
            footer={
              <div className="flex gap-2">
                <ShadcnUI.Button onClick={() => mutate("INCREMENT")}>
                  Increment Count
                </ShadcnUI.Button>
                <ShadcnUI.Button
                  variant="outline"
                  onClick={() =>
                    mutate("ADD_ITEM", `Item ${globalState.items.length + 1}`)
                  }
                >
                  Add Item
                </ShadcnUI.Button>
              </div>
            }
          >
            <div className="space-y-4">
              <div>
                <h3 className="font-bold mb-2">Current Count: {count}</h3>
                <p className="text-sm text-gray-500">Using useStateSelector</p>
              </div>
              <div>
                <h3 className="font-bold mb-2">Items:</h3>
                <ul className="list-disc pl-4">
                  {globalState.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ShadcnUI.CustomDialog>
        </div>
      ),
      code: `
// Custom Hooks Example
const useStateEffect = (callback, deps) => {
  React.useEffect(() => {
    callback();
  }, deps);
};

const useStateSelector = (selector) => {
  return selector(globalState);
};

const useStateMutation = () => {
  return (type, payload) => {
    setGlobalState(prev => {
      // mutation logic
    });
  };
};

const useStateWatch = (selector, callback, threshold) => {
  const value = useStateSelector(selector);
  React.useEffect(() => {
    if (value > threshold) {
      callback(value);
    }
  }, [value, threshold, callback]);
};`,
    },
    {
      title: "State Management Store",
      value: "store",
      content: (
        <div className="space-y-6">
          <ShadcnUI.CustomAccordion
            type="single"
            data={[
              {
                value: "state",
                trigger: "View Global State",
                content: JSON.stringify(globalState, null, 2),
              },
            ]}
          />
          <ShadcnUI.CustomTabs
            tabs={[
              {
                label: "Actions",
                value: "actions",
                content: (
                  <div className="space-y-4 p-4">
                    <ShadcnUI.Button onClick={() => mutate("TOGGLE_THEME")}>
                      Toggle Theme
                    </ShadcnUI.Button>
                    <ShadcnUI.Button
                      onClick={() =>
                        mutate("SET_USER", { id: 1, name: "John Doe" })
                      }
                    >
                      Set User
                    </ShadcnUI.Button>
                  </div>
                ),
              },
              {
                label: "State",
                value: "state",
                content: (
                  <pre className="p-4 bg-gray-100 rounded">
                    {JSON.stringify(globalState, null, 2)}
                  </pre>
                ),
              },
            ]}
          />
        </div>
      ),
      code: `
// State Store Implementation
const [globalState, setGlobalState] = React.useState({
  count: 0,
  items: [],
  user: null,
  theme: 'light',
  notifications: []
});`,
    },
    {
      title: "Debugging Tools",
      value: "debug",
      content: (
        <div className="space-y-6">
          <ShadcnUI.CustomAlert
            title="Debug Mode"
            description={
              debug ? "Debug mode is enabled" : "Debug mode is disabled"
            }
          />

          <ShadcnUI.CustomDrawer
            title="State Inspector"
            description="Inspect current state and history"
            openButtonText="Open Inspector"
            footer={
              <div className="flex justify-between">
                <ShadcnUI.Switch checked={debug} onCheckedChange={setDebug} />
                <ShadcnUI.Button onClick={() => setHistory([])}>
                  Clear History
                </ShadcnUI.Button>
              </div>
            }
          >
            <ShadcnUI.CustomTabs
              tabs={[
                {
                  label: "Current State",
                  value: "current",
                  content: (
                    <pre className="p-4 bg-gray-100 rounded">
                      {JSON.stringify(globalState, null, 2)}
                    </pre>
                  ),
                },
                {
                  label: "History",
                  value: "history",
                  content: (
                    <div className="space-y-2">
                      {history.map((state, i) => (
                        <div key={i} className="p-2 border rounded">
                          <div className="font-bold">State {i + 1}</div>
                          <pre className="text-sm">
                            {JSON.stringify(state, null, 2)}
                          </pre>
                        </div>
                      ))}
                    </div>
                  ),
                },
              ]}
            />
          </ShadcnUI.CustomDrawer>
        </div>
      ),
      code: `
// Debugging Tools Implementation
const [debug, setDebug] = React.useState(false);
const [history, setHistory] = React.useState([]);

// State History Tracker
const trackStateChange = (newState) => {
  setHistory(prev => [...prev, newState]);
};`,
    },
  ];

  return (
    <div className="p-8">
      <ShadcnUI.Toaster />

      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/2">
          <ShadcnUI.CustomTabs
            defaultValue={selectedComponent}
            tabs={componentsData.map((comp) => ({
              label: comp.title,
              value: comp.value,
              content: comp.content,
            }))}
          />
        </div>

        <div className="w-full md:w-1/2">
          <div className="sticky top-4">
            <h3 className="text-xl font-bold mb-4">Component Code</h3>
            <ShadcnUI.CustomAccordion
              type="single"
              data={componentsData.map((comp) => ({
                value: comp.value,
                trigger: `${comp.title} Code`,
                content: (
                  <pre className="p-4 bg-gray-100 rounded text-sm overflow-x-auto">
                    {comp.code}
                  </pre>
                ),
              }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
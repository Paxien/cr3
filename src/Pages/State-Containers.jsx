"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [globalState, setGlobalState] = React.useState({
    counter: 0,
    theme: "light",
    todos: [],
    user: null,
    notifications: [],
  });

  const { toast } = ShadcnUI.useToast();

  const examples = [
    {
      label: "Global State Container",
      value: "global",
      content: (
        <div className="space-y-4">
          <ShadcnUI.Card className="p-4">
            <ShadcnUI.CustomTabs
              defaultValue="state"
              tabs={[
                {
                  label: "State Management",
                  value: "state",
                  content: (
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <ShadcnUI.Badge variant="outline">
                          Counter: {globalState.counter}
                        </ShadcnUI.Badge>
                        <ShadcnUI.Button
                          onClick={() => {
                            setGlobalState((prev) => ({
                              ...prev,
                              counter: prev.counter + 1,
                            }));
                            toast({
                              title: "Counter Updated",
                              description: "Counter has been incremented",
                            });
                          }}
                        >
                          Increment
                        </ShadcnUI.Button>
                      </div>

                      <div className="flex justify-between items-center">
                        <ShadcnUI.Badge variant="outline">
                          Theme: {globalState.theme}
                        </ShadcnUI.Badge>
                        <ShadcnUI.Button
                          onClick={() => {
                            setGlobalState((prev) => ({
                              ...prev,
                              theme: prev.theme === "light" ? "dark" : "light",
                            }));
                            toast({
                              title: "Theme Updated",
                              description: `Theme switched to ${
                                globalState.theme === "light" ? "dark" : "light"
                              }`,
                            });
                          }}
                        >
                          Toggle Theme
                        </ShadcnUI.Button>
                      </div>
                    </div>
                  ),
                },
                {
                  label: "User Management",
                  value: "user",
                  content: (
                    <div className="space-y-4">
                      <ShadcnUI.CustomAlert
                        title="User Status"
                        description={
                          globalState.user
                            ? `Logged in as ${globalState.user.name}`
                            : "Not logged in"
                        }
                      />
                      <div className="flex justify-end space-x-2">
                        <ShadcnUI.Button
                          disabled={globalState.user}
                          onClick={() => {
                            setGlobalState((prev) => ({
                              ...prev,
                              user: {
                                name: "John Doe",
                                email: "john@example.com",
                              },
                            }));
                            toast({
                              title: "Logged In",
                              description: "Successfully logged in as John Doe",
                            });
                          }}
                        >
                          Login
                        </ShadcnUI.Button>
                        <ShadcnUI.Button
                          variant="destructive"
                          disabled={!globalState.user}
                          onClick={() => {
                            setGlobalState((prev) => ({ ...prev, user: null }));
                            toast({
                              title: "Logged Out",
                              description: "Successfully logged out",
                            });
                          }}
                        >
                          Logout
                        </ShadcnUI.Button>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </ShadcnUI.Card>
        </div>
      ),
      code: `const [globalState, setGlobalState] = React.useState({
  counter: 0,
  theme: 'light',
  todos: [],
  user: null,
  notifications: []
});

// Counter Update
setGlobalState(prev => ({
  ...prev, 
  counter: prev.counter + 1
}));

// Theme Toggle
setGlobalState(prev => ({
  ...prev,
  theme: prev.theme === 'light' ? 'dark' : 'light'
}));

// User Management
setGlobalState(prev => ({
  ...prev,
  user: {name: 'John Doe', email: 'john@example.com'}
}));`,
    },
    {
      label: "Local State Container",
      value: "local",
      content: (
        <div className="space-y-4">
          <ShadcnUI.Card className="p-4">
            <ShadcnUI.CustomAccordion
              type="single"
              data={[
                {
                  value: "todos",
                  trigger: "Todo Management",
                  content: <TodoManager />,
                },
                {
                  value: "notifications",
                  trigger: "Notification Center",
                  content: <NotificationCenter />,
                },
              ]}
            />
          </ShadcnUI.Card>
        </div>
      ),
      code: `function TodoManager() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <ShadcnUI.Input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo..."
        />
        <ShadcnUI.Button
          onClick={() => {
            setTodos(prev => [...prev, input]);
            setInput("");
          }}
        >
          Add
        </ShadcnUI.Button>
      </div>
      <div className="space-y-2">
        {todos.map((todo, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{todo}</span>
            <ShadcnUI.Button
              variant="destructive"
              onClick={() => setTodos(prev => prev.filter((_, i) => i !== index))}
            >
              Delete
            </ShadcnUI.Button>
          </div>
        ))}
      </div>
    </div>
  );
}`,
    },
    {
      label: "State Provider",
      value: "provider",
      content: (
        <div className="space-y-4">
          <ShadcnUI.Card className="p-4">
            <ShadcnUI.CustomDialog
              triggerButtonText="Open Settings"
              title="Settings Provider"
              description="Configure application settings"
              footer={
                <div className="flex justify-end">
                  <ShadcnUI.Button variant="outline">
                    Save Changes
                  </ShadcnUI.Button>
                </div>
              }
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Dark Mode</span>
                  <ShadcnUI.Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Notifications</span>
                  <ShadcnUI.Switch />
                </div>
                <div className="flex items-center justify-between">
                  <span>Email Updates</span>
                  <ShadcnUI.Switch />
                </div>
              </div>
            </ShadcnUI.CustomDialog>
          </ShadcnUI.Card>
        </div>
      ),
      code: `const SettingsContext = React.createContext();

function SettingsProvider({ children }) {
  const [settings, setSettings] = React.useState({
    darkMode: false,
    notifications: true,
    emailUpdates: false
  });

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}`,
    },
    {
      label: "State Subscriber",
      value: "subscriber",
      content: (
        <div className="space-y-4">
          <ShadcnUI.Card className="p-4">
            <div className="space-y-4">
              <ShadcnUI.CustomAlert
                title="State Updates"
                description="Real-time state monitoring"
              />
              <ShadcnUI.Table>
                <ShadcnUI.TableHeader>
                  <ShadcnUI.TableRow>
                    <ShadcnUI.TableHead>Property</ShadcnUI.TableHead>
                    <ShadcnUI.TableHead>Value</ShadcnUI.TableHead>
                    <ShadcnUI.TableHead>Last Updated</ShadcnUI.TableHead>
                  </ShadcnUI.TableRow>
                </ShadcnUI.TableHeader>
                <ShadcnUI.TableBody>
                  <ShadcnUI.TableRow>
                    <ShadcnUI.TableCell>Counter</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>
                      {globalState.counter}
                    </ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>Just now</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                  <ShadcnUI.TableRow>
                    <ShadcnUI.TableCell>Theme</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{globalState.theme}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>Just now</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                  <ShadcnUI.TableRow>
                    <ShadcnUI.TableCell>User</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>
                      {globalState.user?.name || "None"}
                    </ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>Just now</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                </ShadcnUI.TableBody>
              </ShadcnUI.Table>
            </div>
          </ShadcnUI.Card>
        </div>
      ),
      code: `function StateSubscriber() {
  const state = React.useContext(AppContext);
  const [updates, setUpdates] = React.useState([]);

  React.useEffect(() => {
    setUpdates(prev => [
      ...prev,
      {
        timestamp: new Date(),
        changes: JSON.stringify(state)
      }
    ]);
  }, [state]);

  return (
    <div>
      {updates.map((update, index) => (
        <div key={index}>
          <span>{update.timestamp.toLocaleString()}</span>
          <pre>{update.changes}</pre>
        </div>
      ))}
    </div>
  );
}`,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <ShadcnUI.CustomTabs
        defaultValue="global"
        tabs={examples.map((example) => ({
          label: example.label,
          value: example.value,
          content: (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div>{example.content}</div>
              <div className="bg-[#f8f9fa] p-4 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-semibold">Implementation</h3>
                  <ShadcnUI.Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      navigator.clipboard.writeText(example.code);
                      toast({
                        title: "Code Copied",
                        description: "Implementation code copied to clipboard",
                      });
                    }}
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
                <pre className="overflow-x-auto">
                  <code className="text-sm">{example.code}</code>
                </pre>
              </div>
            </div>
          ),
        }))}
      />
      <ShadcnUI.Toaster />
    </div>
  );
}

function TodoManager() {
  const [todos, setTodos] = React.useState([]);
  const [input, setInput] = React.useState("");

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <ShadcnUI.Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add new todo..."
        />
        <ShadcnUI.Button
          onClick={() => {
            if (input.trim()) {
              setTodos((prev) => [...prev, input]);
              setInput("");
            }
          }}
        >
          Add
        </ShadcnUI.Button>
      </div>
      <div className="space-y-2">
        {todos.map((todo, index) => (
          <div key={index} className="flex justify-between items-center">
            <span>{todo}</span>
            <ShadcnUI.Button
              variant="destructive"
              size="sm"
              onClick={() =>
                setTodos((prev) => prev.filter((_, i) => i !== index))
              }
            >
              Delete
            </ShadcnUI.Button>
          </div>
        ))}
      </div>
    </div>
  );
}

function NotificationCenter() {
  const [notifications, setNotifications] = React.useState([]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold">Notifications</h3>
        <ShadcnUI.Button
          variant="outline"
          size="sm"
          onClick={() => {
            setNotifications((prev) => [
              ...prev,
              {
                id: Date.now(),
                message: "New notification",
                timestamp: new Date(),
              },
            ]);
          }}
        >
          Add Notification
        </ShadcnUI.Button>
      </div>
      <div className="space-y-2">
        {notifications.map((notification) => (
          <ShadcnUI.CustomAlert
            key={notification.id}
            title={notification.message}
            description={notification.timestamp.toLocaleString()}
          />
        ))}
      </div>
    </div>
  );
}

export default MainComponent;
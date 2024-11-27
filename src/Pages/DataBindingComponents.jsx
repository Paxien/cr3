"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subscribe: false,
    plan: "basic",
    preferences: [],
  });

  const [tableData, setTableData] = React.useState([
    { id: 1, name: "John", email: "john@email.com", status: "active" },
    { id: 2, name: "Jane", email: "jane@email.com", status: "inactive" },
  ]);

  const [showCode, setShowCode] = React.useState({});
  const [persistedData, setPersistedData] = React.useState(null);
  const [stateSnapshot, setStateSnapshot] = React.useState(null);
  const [syncedState, setSyncedState] = React.useState({
    component1: "",
    component2: "",
  });
  const [cachedData, setCachedData] = React.useState({});
  const { toast } = ShadcnUI.useToast();

  // Two-way data binding
  const handleFormChange = (field, value) => {
    setFormData((prev) => {
      const updated = { ...prev, [field]: value };
      localStorage.setItem("formData", JSON.stringify(updated));
      return updated;
    });
  };

  // State syncing
  const handleSyncedStateChange = (component, value) => {
    setSyncedState((prev) => ({
      ...prev,
      [component]: value,
      [`${component}UpdatedAt`]: new Date().toISOString(),
    }));
  };

  // Local storage persistence
  React.useEffect(() => {
    const stored = localStorage.getItem("appState");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setPersistedData(parsed);
        setFormData(parsed.formData || formData);
      } catch (e) {
        toast({
          variant: "destructive",
          title: "Error loading persisted state",
          description: "Failed to load saved state from storage",
        });
      }
    }
  }, []);

  // State caching
  const getCachedData = async (key) => {
    if (cachedData[key]) {
      return cachedData[key];
    }

    // Simulate API call
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve({ id: key, timestamp: Date.now() }), 1000)
    );

    setCachedData((prev) => ({
      ...prev,
      [key]: { ...data, cachedAt: Date.now() },
    }));

    return data;
  };

  // State snapshot management
  const saveSnapshot = () => {
    const snapshot = {
      form: formData,
      table: tableData,
      synced: syncedState,
      timestamp: new Date().toISOString(),
    };
    setStateSnapshot(snapshot);
    toast({
      title: "Snapshot Created",
      description: "Application state snapshot saved successfully",
    });
  };

  const restoreSnapshot = () => {
    if (stateSnapshot) {
      setFormData(stateSnapshot.form);
      setTableData(stateSnapshot.table);
      setSyncedState(stateSnapshot.synced);
      toast({
        title: "Snapshot Restored",
        description: `State restored from ${stateSnapshot.timestamp}`,
      });
    }
  };

  return (
    <div className="container mx-auto p-6 font-roboto">
      <h1 className="text-3xl font-bold mb-8">State Management Showcase</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Two-Way Data Binding Section */}
        <ShadcnUI.CustomCard>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Two-Way Data Binding</h2>
              <ShadcnUI.CustomTooltip content="View Code">
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setShowCode((prev) => ({ ...prev, binding: !prev.binding }))
                  }
                >
                  <i className="fas fa-code" />
                </ShadcnUI.Button>
              </ShadcnUI.CustomTooltip>
            </div>

            <div className="space-y-4">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <ShadcnUI.Label htmlFor="name">Name</ShadcnUI.Label>
                  <ShadcnUI.Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleFormChange("name", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <ShadcnUI.Label htmlFor="email">Email</ShadcnUI.Label>
                  <ShadcnUI.Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleFormChange("email", e.target.value)}
                  />
                </div>

                <ShadcnUI.CustomSelect
                  value={formData.plan}
                  placeholder="Select a plan"
                  groups={[
                    {
                      items: [
                        { value: "basic", label: "Basic Plan" },
                        { value: "pro", label: "Pro Plan" },
                        { value: "enterprise", label: "Enterprise" },
                      ],
                    },
                  ]}
                  onValueChange={(value) => handleFormChange("plan", value)}
                />

                <div className="flex items-center space-x-2">
                  <ShadcnUI.Checkbox
                    id="subscribe"
                    checked={formData.subscribe}
                    onCheckedChange={(checked) =>
                      handleFormChange("subscribe", checked)
                    }
                  />
                  <ShadcnUI.Label htmlFor="subscribe">
                    Subscribe to updates
                  </ShadcnUI.Label>
                </div>
              </div>
            </div>

            {showCode.binding && (
              <ShadcnUI.CustomAlert
                className="mt-4"
                title="Code Example"
                description={
                  <pre className="text-sm bg-secondary p-4 rounded-md overflow-x-auto">
                    {`const [formData, setFormData] = React.useState({
  name: '',
  email: '',
  subscribe: false,
  plan: 'basic'
});

const handleFormChange = (field, value) => {
  setFormData(prev => ({
    ...prev,
    [field]: value
  }));
};`}
                  </pre>
                }
              />
            )}
          </div>
        </ShadcnUI.CustomCard>

        {/* State Syncing Section */}
        <ShadcnUI.CustomCard>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">State Syncing</h2>
              <ShadcnUI.CustomTooltip content="View Code">
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setShowCode((prev) => ({ ...prev, sync: !prev.sync }))
                  }
                >
                  <i className="fas fa-code" />
                </ShadcnUI.Button>
              </ShadcnUI.CustomTooltip>
            </div>

            <div className="grid gap-4">
              <div className="space-y-2">
                <ShadcnUI.Label>Component 1</ShadcnUI.Label>
                <ShadcnUI.Input
                  value={syncedState.component1}
                  onChange={(e) =>
                    handleSyncedStateChange("component1", e.target.value)
                  }
                  placeholder="Type to sync..."
                />
              </div>

              <div className="space-y-2">
                <ShadcnUI.Label>Component 2 (Synced)</ShadcnUI.Label>
                <ShadcnUI.Input
                  value={syncedState.component2}
                  onChange={(e) =>
                    handleSyncedStateChange("component2", e.target.value)
                  }
                  placeholder="Type to sync..."
                />
              </div>

              <ShadcnUI.CustomAlert
                variant="secondary"
                title="Sync Status"
                description={`Last updated: ${
                  syncedState.component1UpdatedAt || "Never"
                }`}
              />
            </div>

            {showCode.sync && (
              <ShadcnUI.CustomAlert
                className="mt-4"
                title="Code Example"
                description={
                  <pre className="text-sm bg-secondary p-4 rounded-md overflow-x-auto">
                    {`const [syncedState, setSyncedState] = React.useState({
  component1: '',
  component2: ''
});

const handleSyncedStateChange = (component, value) => {
  setSyncedState(prev => ({
    ...prev,
    [component]: value,
    [\`\${component}UpdatedAt\`]: new Date().toISOString()
  }));
};`}
                  </pre>
                }
              />
            )}
          </div>
        </ShadcnUI.CustomCard>

        {/* Reactive Data Display Section */}
        <ShadcnUI.CustomCard>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Reactive Data Display</h2>
              <ShadcnUI.CustomTooltip content="View Code">
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setShowCode((prev) => ({
                      ...prev,
                      reactive: !prev.reactive,
                    }))
                  }
                >
                  <i className="fas fa-code" />
                </ShadcnUI.Button>
              </ShadcnUI.CustomTooltip>
            </div>

            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Status</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableData.map((row) => (
                  <ShadcnUI.TableRow key={row.id}>
                    <ShadcnUI.TableCell>{row.id}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>
                      <ShadcnUI.Badge
                        variant={
                          row.status === "active" ? "default" : "secondary"
                        }
                      >
                        {row.status}
                      </ShadcnUI.Badge>
                    </ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>

            {showCode.reactive && (
              <ShadcnUI.CustomAlert
                className="mt-4"
                title="Code Example"
                description={
                  <pre className="text-sm bg-secondary p-4 rounded-md overflow-x-auto">
                    {`const [tableData, setTableData] = React.useState([
  { id: 1, name: 'John', email: 'john@email.com', status: 'active' },
  { id: 2, name: 'Jane', email: 'jane@email.com', status: 'inactive' }
]);`}
                  </pre>
                }
              />
            )}
          </div>
        </ShadcnUI.CustomCard>

        {/* State Persistence & Caching Section */}
        <ShadcnUI.CustomCard>
          <div className="p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">
                State Persistence & Caching
              </h2>
              <ShadcnUI.CustomTooltip content="View Code">
                <ShadcnUI.Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    setShowCode((prev) => ({
                      ...prev,
                      persistence: !prev.persistence,
                    }))
                  }
                >
                  <i className="fas fa-code" />
                </ShadcnUI.Button>
              </ShadcnUI.CustomTooltip>
            </div>

            <div className="space-y-4">
              <ShadcnUI.CustomAlert
                title="Persisted Data Status"
                description={
                  persistedData
                    ? `Data loaded from storage at ${new Date(
                        persistedData.timestamp
                      ).toLocaleString()}`
                    : "No persisted data found"
                }
              />

              <div className="flex space-x-2">
                <ShadcnUI.Button onClick={saveSnapshot}>
                  Save State Snapshot
                </ShadcnUI.Button>
                <ShadcnUI.Button
                  variant="outline"
                  onClick={restoreSnapshot}
                  disabled={!stateSnapshot}
                >
                  Restore Snapshot
                </ShadcnUI.Button>
              </div>

              {stateSnapshot && (
                <ShadcnUI.CustomAccordion
                  type="single"
                  data={[
                    {
                      value: "snapshot",
                      trigger: "View Current Snapshot",
                      content: JSON.stringify(stateSnapshot, null, 2),
                    },
                  ]}
                />
              )}
            </div>

            {showCode.persistence && (
              <ShadcnUI.CustomAlert
                className="mt-4"
                title="Code Example"
                description={
                  <pre className="text-sm bg-secondary p-4 rounded-md overflow-x-auto">
                    {`// State persistence
React.useEffect(() => {
  const stored = localStorage.getItem('appState');
  if (stored) {
    setPersistedData(JSON.parse(stored));
  }
}, []);

// State snapshot
const saveSnapshot = () => {
  const snapshot = {
    form: formData,
    table: tableData,
    timestamp: new Date().toISOString()
  };
  setStateSnapshot(snapshot);
};

const restoreSnapshot = () => {
  if (stateSnapshot) {
    setFormData(stateSnapshot.form);
    setTableData(stateSnapshot.table);
  }
};`}
                  </pre>
                }
              />
            )}
          </div>
        </ShadcnUI.CustomCard>
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
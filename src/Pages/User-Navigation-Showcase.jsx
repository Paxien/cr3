"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [currentUser, setCurrentUser] = React.useState({
    id: 1,
    name: "Tom Cook",
    email: "tom@example.com",
    imageUrl: "/avatars/tom.png",
  });

  const [notifications] = React.useState([
    {
      id: 1,
      title: "New Message",
      description: "Sarah sent you a message",
      time: "2m ago",
    },
    {
      id: 2,
      title: "Account Update",
      description: "Your subscription will expire soon",
      time: "1h ago",
    },
  ]);

  const [profiles] = React.useState([
    {
      id: 1,
      name: "Tom Cook",
      email: "tom@example.com",
      imageUrl: "/avatars/tom.png",
    },
    {
      id: 2,
      name: "Sarah Lee",
      email: "sarah@example.com",
      imageUrl: "/avatars/sarah.png",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-7xl space-y-12">
        <div className="rounded-lg bg-white p-8 shadow">
          <h2 className="mb-6 text-2xl font-bold">User Profile Navigation</h2>

          <div className="space-y-8">
            <div className="flex items-center justify-between rounded border p-6">
              <div className="w-1/2">
                <h3 className="mb-4 text-lg font-semibold">User Menu</h3>
                <ShadcnUI.CustomDropdown
                  triggerLabel={
                    <div className="flex items-center">
                      <ShadcnUI.CustomAvatar
                        src={currentUser.imageUrl}
                        fallbackLabel={currentUser.name[0]}
                        alt={currentUser.name}
                      />
                    </div>
                  }
                  menuLabel="User Account"
                  items={[
                    {
                      content: (
                        <span className="flex items-center">
                          <i className="fa fa-user mr-2"></i>Profile
                        </span>
                      ),
                      label: "Profile",
                      shortcut: "⌘P",
                      onSelect: () => console.log("Profile clicked"),
                    },
                    {
                      content: (
                        <span className="flex items-center">
                          <i className="fa fa-cog mr-2"></i>Settings
                        </span>
                      ),
                      label: "Settings",
                      shortcut: "⌘S",
                      onSelect: () => console.log("Settings clicked"),
                    },
                    {
                      content: (
                        <span className="flex items-center">
                          <i className="fa fa-sign-out mr-2"></i>Logout
                        </span>
                      ),
                      label: "Logout",
                      onSelect: () => console.log("Logout clicked"),
                    },
                  ]}
                />
              </div>

              <div className="w-1/2">
                <ShadcnUI.CustomTabs
                  defaultValue="preview"
                  className="w-full"
                  tabs={[
                    {
                      label: "Preview",
                      value: "preview",
                      content: (
                        <div className="rounded bg-gray-50 p-4">
                          <pre className="text-sm">
                            <code>{`<ShadcnUI.CustomDropdown
  triggerLabel={<Avatar />}
  menuLabel="User Account"
  items={[
    { label: "Profile", shortcut: "⌘P" },
    { label: "Settings", shortcut: "⌘S" },
    { label: "Logout" }
  ]}
/>`}</code>
                          </pre>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex items-center justify-between rounded border p-6">
              <div className="w-1/2">
                <h3 className="mb-4 text-lg font-semibold">
                  Notifications Dropdown
                </h3>
                <ShadcnUI.CustomPopover
                  triggerLabel={
                    <div className="relative">
                      <i className="fa fa-bell text-xl"></i>
                      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                        {notifications.length}
                      </span>
                    </div>
                  }
                >
                  <div className="w-80">
                    <div className="space-y-4">
                      {notifications.map((notification) => (
                        <div
                          key={notification.id}
                          className="flex items-start space-x-4"
                        >
                          <div className="flex-1 space-y-1">
                            <p className="text-sm font-medium">
                              {notification.title}
                            </p>
                            <p className="text-sm text-gray-500">
                              {notification.description}
                            </p>
                            <p className="text-xs text-gray-400">
                              {notification.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ShadcnUI.CustomPopover>
              </div>

              <div className="w-1/2">
                <ShadcnUI.CustomTabs
                  defaultValue="preview"
                  className="w-full"
                  tabs={[
                    {
                      label: "Preview",
                      value: "preview",
                      content: (
                        <div className="rounded bg-gray-50 p-4">
                          <pre className="text-sm">
                            <code>{`<ShadcnUI.CustomPopover
  triggerLabel={
    <div className="relative">
      <i className="fa fa-bell text-xl"></i>
      <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
        2
      </span>
    </div>
  }
>
  <div className="w-80">
    <div className="space-y-4">
      {notifications.map(notification => (
        <div key={notification.id}>
          <p>{notification.title}</p>
          <p>{notification.description}</p>
          <p>{notification.time}</p>
        </div>
      ))}
    </div>
  </div>
</ShadcnUI.CustomPopover>`}</code>
                          </pre>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>

            <div className="flex items-center justify-between rounded border p-6">
              <div className="w-1/2">
                <h3 className="mb-4 text-lg font-semibold">Account Switcher</h3>
                <ShadcnUI.CustomSelect
                  placeholder="Select account"
                  value={currentUser.id.toString()}
                  onValueChange={(value) => {
                    const profile = profiles.find(
                      (p) => p.id.toString() === value
                    );
                    if (profile) setCurrentUser(profile);
                  }}
                  groups={[
                    {
                      items: profiles.map((profile) => ({
                        value: profile.id.toString(),
                        label: profile.name,
                      })),
                    },
                  ]}
                />
              </div>

              <div className="w-1/2">
                <ShadcnUI.CustomTabs
                  defaultValue="preview"
                  className="w-full"
                  tabs={[
                    {
                      label: "Preview",
                      value: "preview",
                      content: (
                        <div className="rounded bg-gray-50 p-4">
                          <pre className="text-sm">
                            <code>{`<ShadcnUI.CustomSelect
  placeholder="Select account"
  value={currentUser.id.toString()}
  onValueChange={(value) => {
    const profile = profiles.find(
      p => p.id.toString() === value
    );
    if (profile) setCurrentUser(profile);
  }}
  groups={[
    {
      items: profiles.map(profile => ({
        value: profile.id.toString(),
        label: profile.name,
      }))
    }
  ]}
/>`}</code>
                          </pre>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
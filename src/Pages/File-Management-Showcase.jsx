"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../utilities/runtime-helpers";

function MainComponent() {
  const [files, setFiles] = React.useState([
    {
      id: 1,
      name: "Project Proposal.pdf",
      type: "pdf",
      size: "2.5MB",
      modified: "2024-01-15",
      path: "/documents/projects",
      starred: true,
    },
    {
      id: 2,
      name: "Meeting Notes.docx",
      type: "word",
      size: "1.2MB",
      modified: "2024-01-14",
      path: "/documents/meetings",
      starred: false,
    },
    {
      id: 3,
      name: "Budget 2024.xlsx",
      type: "excel",
      size: "3.1MB",
      modified: "2024-01-13",
      path: "/documents/finance",
      starred: true,
    },
    {
      id: 4,
      name: "Team Photo.jpg",
      type: "image",
      size: "4.7MB",
      modified: "2024-01-12",
      path: "/images/team",
      starred: false,
    },
  ]);

  const [activeTab, setActiveTab] = React.useState("explorer");
  const [view, setView] = React.useState("list");
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [searchTerm, setSearchTerm] = React.useState("");
  const [sortBy, setSortBy] = React.useState("name");
  const [filterType, setFilterType] = React.useState("all");
  const [currentPath, setCurrentPath] = React.useState("/");
  const [error, setError] = React.useState(null);
  const [showCode, setShowCode] = React.useState(false);
  const [upload, { loading }] = useUpload();

  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const sortFiles = (files) => {
    return [...files].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "modified")
        return new Date(b.modified) - new Date(a.modified);
      if (sortBy === "size") return parseFloat(b.size) - parseFloat(a.size);
      return 0;
    });
  };

  const filteredFiles = files.filter((file) => {
    const matchesSearch = file.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesType = filterType === "all" || file.type === filterType;
    return matchesSearch && matchesType;
  });

  const sortedFiles = sortFiles(filteredFiles);

  const handleUpload = async (file) => {
    const { url, error } = await upload({ file });
    if (error) {
      setError(error);
      return;
    }
    const newFile = {
      id: files.length + 1,
      name: file.name,
      type: file.type.split("/")[0],
      size: `${(file.size / (1024 * 1024)).toFixed(1)}MB`,
      modified: new Date().toISOString().split("T")[0],
      path: currentPath,
      url,
    };
    setFiles([...files, newFile]);
  };

  const breadcrumbItems = currentPath.split("/").filter(Boolean);

  const mainContent = (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">File Management System</h1>

        <div className="flex items-center space-x-4">
          <ShadcnUI.Button
            variant="outline"
            onClick={() => setShowCode(!showCode)}
          >
            <i className="fas fa-code mr-2"></i>
            {showCode ? "Hide Code" : "Show Code"}
          </ShadcnUI.Button>

          <ShadcnUI.Button
            variant="outline"
            onClick={() => document.getElementById("file-upload").click()}
            disabled={loading}
          >
            <i className="fas fa-upload mr-2"></i>
            {loading ? "Uploading..." : "Upload File"}
          </ShadcnUI.Button>
          <input
            type="file"
            className="hidden"
            id="file-upload"
            onChange={(e) => {
              if (e.target.files) {
                handleUpload(e.target.files[0]);
              }
            }}
          />
        </div>
      </div>

      <div
        className={`grid gap-6 ${showCode ? "grid-cols-2" : "grid-cols-12"}`}
      >
        <div className="col-span-3">
          <div className="bg-white rounded-lg shadow p-4">
            <ShadcnUI.CustomAccordion
              type="single"
              data={[
                {
                  value: "quick-access",
                  trigger: "Quick Access",
                  content: (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                        <i className="fas fa-star text-yellow-400"></i>
                        <span>Starred</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                        <i className="fas fa-clock"></i>
                        <span>Recent</span>
                      </div>
                    </div>
                  ),
                },
                {
                  value: "folders",
                  trigger: "Folders",
                  content: (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                        <i className="fas fa-folder"></i>
                        <span>Documents</span>
                      </div>
                      <div className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded cursor-pointer">
                        <i className="fas fa-image"></i>
                        <span>Images</span>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="bg-white rounded-lg shadow p-4">
            <div className="mb-4">
              <ShadcnUI.CustomBreadcrumb
                homeLink="/"
                dropdownMenuItems={[]}
                componentLink={currentPath}
                componentName={
                  breadcrumbItems[breadcrumbItems.length - 1] || "Home"
                }
              />
            </div>

            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center space-x-4">
                <ShadcnUI.Input
                  type="text"
                  placeholder="Search files..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />

                <ShadcnUI.CustomSelect
                  placeholder="Sort by..."
                  value={sortBy}
                  onValueChange={setSortBy}
                  groups={[
                    {
                      items: [
                        { value: "name", label: "Name" },
                        { value: "modified", label: "Date Modified" },
                        { value: "size", label: "Size" },
                      ],
                    },
                  ]}
                />

                <ShadcnUI.CustomSelect
                  placeholder="Filter by..."
                  value={filterType}
                  onValueChange={setFilterType}
                  groups={[
                    {
                      items: [
                        { value: "all", label: "All Types" },
                        { value: "pdf", label: "PDF Files" },
                        { value: "word", label: "Word Documents" },
                        { value: "excel", label: "Excel Files" },
                        { value: "image", label: "Images" },
                      ],
                    },
                  ]}
                />
              </div>

              <ShadcnUI.Button
                variant="ghost"
                onClick={() => setView(view === "list" ? "grid" : "list")}
              >
                <i
                  className={`fas fa-${view === "list" ? "grid" : "list"}`}
                ></i>
              </ShadcnUI.Button>
            </div>

            {view === "list" ? (
              <ShadcnUI.Table>
                <ShadcnUI.TableHeader>
                  <ShadcnUI.TableRow>
                    <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                    <ShadcnUI.TableHead>Size</ShadcnUI.TableHead>
                    <ShadcnUI.TableHead>Modified</ShadcnUI.TableHead>
                    <ShadcnUI.TableHead className="text-right">
                      Actions
                    </ShadcnUI.TableHead>
                  </ShadcnUI.TableRow>
                </ShadcnUI.TableHeader>
                <ShadcnUI.TableBody>
                  {sortedFiles.map((file) => (
                    <ShadcnUI.TableRow
                      key={file.id}
                      className="cursor-pointer hover:bg-gray-50"
                      onClick={() => handleFileSelect(file)}
                    >
                      <ShadcnUI.TableCell className="font-medium">
                        <div className="flex items-center">
                          <i className={`fas fa-${file.type} mr-2`}></i>
                          {file.name}
                        </div>
                      </ShadcnUI.TableCell>
                      <ShadcnUI.TableCell>{file.size}</ShadcnUI.TableCell>
                      <ShadcnUI.TableCell>{file.modified}</ShadcnUI.TableCell>
                      <ShadcnUI.TableCell className="text-right">
                        <ShadcnUI.CustomPopover triggerLabel="...">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <button
                                className="w-full text-left p-2 hover:bg-gray-100 rounded"
                                onClick={() => console.log("Download", file)}
                              >
                                <i className="fas fa-download mr-2"></i>Download
                              </button>
                              <button
                                className="w-full text-left p-2 hover:bg-gray-100 rounded"
                                onClick={() => console.log("Share", file)}
                              >
                                <i className="fas fa-share mr-2"></i>Share
                              </button>
                              <button
                                className="w-full text-left p-2 hover:bg-gray-100 rounded"
                                onClick={() => console.log("Delete", file)}
                              >
                                <i className="fas fa-trash mr-2"></i>Delete
                              </button>
                            </div>
                          </div>
                        </ShadcnUI.CustomPopover>
                      </ShadcnUI.TableCell>
                    </ShadcnUI.TableRow>
                  ))}
                </ShadcnUI.TableBody>
              </ShadcnUI.Table>
            ) : (
              <div className="grid grid-cols-4 gap-4">
                {sortedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="relative group p-4 border rounded-lg hover:shadow-lg cursor-pointer"
                    onClick={() => handleFileSelect(file)}
                  >
                    <div className="text-center">
                      <i
                        className={`fas fa-${file.type} text-4xl mb-2 text-gray-500`}
                      ></i>
                      <p className="font-medium truncate">{file.name}</p>
                      <p className="text-sm text-gray-500">{file.size}</p>
                    </div>
                    <div className="absolute top-2 right-2">
                      <ShadcnUI.CustomPopover triggerLabel="...">
                        <div className="grid gap-4">
                          <div className="space-y-2">
                            <button
                              className="w-full text-left p-2 hover:bg-gray-100 rounded"
                              onClick={() => console.log("Download", file)}
                            >
                              <i className="fas fa-download mr-2"></i>Download
                            </button>
                            <button
                              className="w-full text-left p-2 hover:bg-gray-100 rounded"
                              onClick={() => console.log("Share", file)}
                            >
                              <i className="fas fa-share mr-2"></i>Share
                            </button>
                            <button
                              className="w-full text-left p-2 hover:bg-gray-100 rounded"
                              onClick={() => console.log("Delete", file)}
                            >
                              <i className="fas fa-trash mr-2"></i>Delete
                            </button>
                          </div>
                        </div>
                      </ShadcnUI.CustomPopover>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="col-span-3">
          {selectedFile && (
            <div className="bg-white rounded-lg shadow p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">File Details</h3>
                <ShadcnUI.Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSelectedFile(null)}
                >
                  <i className="fas fa-times"></i>
                </ShadcnUI.Button>
              </div>

              <div className="space-y-4">
                <div className="text-center py-8">
                  <i
                    className={`fas fa-${selectedFile.type} text-6xl text-gray-400 mb-4`}
                  ></i>
                  <h4 className="font-medium">{selectedFile.name}</h4>
                </div>

                <ShadcnUI.CustomTabs
                  defaultValue="details"
                  tabs={[
                    {
                      label: "Details",
                      value: "details",
                      content: (
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-gray-500">Type</span>
                            <span className="font-medium">
                              {selectedFile.type.toUpperCase()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Size</span>
                            <span className="font-medium">
                              {selectedFile.size}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Modified</span>
                            <span className="font-medium">
                              {selectedFile.modified}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500">Location</span>
                            <span className="font-medium">
                              {selectedFile.path}
                            </span>
                          </div>
                        </div>
                      ),
                    },
                    {
                      label: "Activity",
                      value: "activity",
                      content: (
                        <div className="space-y-2">
                          <p>No recent activity</p>
                        </div>
                      ),
                    },
                  ]}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto p-6 font-roboto">
      <ShadcnUI.CustomTabs
        defaultValue="explorer"
        tabs={[
          {
            label: "File Explorer",
            value: "explorer",
            content: mainContent,
          },
        ]}
      />
    </div>
  );
}

export default MainComponent;
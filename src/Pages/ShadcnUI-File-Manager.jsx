"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../../utilities/runtime-helpers";

function MainComponent() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [code, setCode] = useState("");
  const [upload, { loading }] = useUpload();
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const acceptedTypes = {
    images: ".jpg,.jpeg,.png,.gif",
    documents: ".pdf,.doc,.docx,.txt",
    all: "*",
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragActive(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    setSelectedFiles((prev) => [...prev, ...files]);

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPreview((prev) => ({ ...prev, [file.name]: e.target.result }));
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const handleUpload = async (file) => {
    try {
      const result = await upload({
        file,
        onProgress: (p) => setProgress(p),
      });
      return result;
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  const showcaseComponents = [
    {
      title: "Basic File Uploader",
      description: "Simple file upload with button trigger",
      component: (
        <ShadcnUI.CustomDialog
          triggerButtonText="Upload File"
          title="Upload File"
          description="Choose a file to upload"
          footer={
            <ShadcnUI.Button
              onClick={() => selectedFiles[0] && handleUpload(selectedFiles[0])}
              disabled={loading}
            >
              {loading ? "Uploading..." : "Upload"}
            </ShadcnUI.Button>
          }
        >
          <input
            type="file"
            onChange={(e) => handleFiles(Array.from(e.target.files))}
            className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-gray-100"
          />
        </ShadcnUI.CustomDialog>
      ),
      code: `const handleUpload = async (file) => {
  const result = await upload({ file });
  return result;
};`,
    },
    {
      title: "Multi-file Uploader",
      description: "Upload multiple files at once",
      component: (
        <ShadcnUI.CustomDrawer
          title="Multi-file Upload"
          description="Select multiple files to upload"
          openButtonText="Upload Multiple Files"
          footer={
            <ShadcnUI.Button
              onClick={() => Promise.all(selectedFiles.map(handleUpload))}
              disabled={loading}
            >
              Upload All Files
            </ShadcnUI.Button>
          }
        >
          <input
            type="file"
            multiple
            onChange={(e) => handleFiles(Array.from(e.target.files))}
            className="block w-full text-sm"
          />
          {selectedFiles.length > 0 && (
            <div className="mt-4 space-y-2">
              {selectedFiles.map((file, i) => (
                <div key={i} className="flex justify-between items-center">
                  <span>{file.name}</span>
                  <ShadcnUI.Badge variant="outline">
                    {(file.size / 1024).toFixed(2)} KB
                  </ShadcnUI.Badge>
                </div>
              ))}
            </div>
          )}
        </ShadcnUI.CustomDrawer>
      ),
      code: `const handleFiles = (files) => {
  setSelectedFiles(prev => [...prev, ...files]);
};`,
    },
    {
      title: "Drag and Drop Zone",
      description: "Drag files directly into the upload area",
      component: (
        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
          className={`
            border-2 border-dashed rounded-lg p-8 text-center transition-colors
            ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
          `}
        >
          <ShadcnUI.CustomAlert
            title="Drop files here"
            description="or click to select files"
            icon={<i className="fas fa-cloud-upload-alt text-2xl" />}
          />
        </div>
      ),
      code: `const handleDrop = async (e) => {
  e.preventDefault();
  setDragActive(false);
  const files = Array.from(e.dataTransfer.files);
  handleFiles(files);
};`,
    },
    {
      title: "File Preview",
      description: "Preview files before upload",
      component: (
        <ShadcnUI.CustomDialog
          triggerButtonText="Upload with Preview"
          title="File Preview"
          description="Preview your files before uploading"
          footer={
            <ShadcnUI.Button
              onClick={() => selectedFiles.forEach(handleUpload)}
              disabled={loading}
            >
              Upload Selected Files
            </ShadcnUI.Button>
          }
        >
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => handleFiles(Array.from(e.target.files))}
            className="block w-full text-sm"
          />
          <div className="grid grid-cols-2 gap-4 mt-4">
            {preview &&
              Object.entries(preview).map(([name, url]) => (
                <div key={name} className="relative rounded-lg overflow-hidden">
                  <img
                    src={url}
                    alt={name}
                    className="w-full h-32 object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                    {name}
                  </div>
                </div>
              ))}
          </div>
        </ShadcnUI.CustomDialog>
      ),
      code: `const handlePreview = (file) => {
  const reader = new FileReader();
  reader.onload = (e) => {
    setPreview(prev => ({
      ...prev, 
      [file.name]: e.target.result
    }));
  };
  reader.readAsDataURL(file);
};`,
    },
    {
      title: "Upload Progress",
      description: "Track upload progress in real-time",
      component: (
        <div className="space-y-4">
          <ShadcnUI.CustomDialog
            triggerButtonText="Upload with Progress"
            title="Upload Progress"
            description="Monitor your upload progress"
            footer={
              <ShadcnUI.Button
                onClick={() =>
                  selectedFiles[0] && handleUpload(selectedFiles[0])
                }
                disabled={loading}
              >
                Start Upload
              </ShadcnUI.Button>
            }
          >
            <input
              type="file"
              onChange={(e) => handleFiles(Array.from(e.target.files))}
              className="block w-full text-sm"
            />
            {progress > 0 && (
              <div className="mt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <ShadcnUI.Progress value={progress} />
              </div>
            )}
          </ShadcnUI.CustomDialog>
        </div>
      ),
      code: `const handleUpload = async (file) => {
  const result = await upload({
    file,
    onProgress: (p) => setProgress(p)
  });
  return result;
};`,
    },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      <ShadcnUI.CustomTabs
        defaultValue="0"
        className="w-full"
        tabs={showcaseComponents.map((component, index) => ({
          label: component.title,
          value: index.toString(),
          content: (
            <div className="flex flex-col md:flex-row gap-8">
              <div className="w-full md:w-1/2">{component.component}</div>
              <div className="w-full md:w-1/2">
                <ShadcnUI.CustomAlert
                  title="Code Example"
                  description={component.description}
                />
                <div className="relative mt-4">
                  <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-auto">
                    <code>{component.code}</code>
                  </pre>
                  <ShadcnUI.CustomTooltip content="Copy code">
                    <ShadcnUI.Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2"
                      onClick={() =>
                        navigator.clipboard.writeText(component.code)
                      }
                    >
                      <i className="fas fa-copy" />
                    </ShadcnUI.Button>
                  </ShadcnUI.CustomTooltip>
                </div>
              </div>
            </div>
          ),
        }))}
      />

      {error && (
        <ShadcnUI.CustomAlert
          variant="destructive"
          title="Error"
          description={error}
        />
      )}
    </div>
  );
}

export default MainComponent;
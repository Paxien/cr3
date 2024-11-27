"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../utilities/runtime-helpers";

function MainComponent() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState(null);
  const [selectedFilesForPreview, setSelectedFilesForPreview] = useState([]);
  const [progress, setProgress] = useState(0);
  const [upload, { loading }] = useUpload();
  const [uploadedUrls, setUploadedUrls] = useState([]);
  const { toast } = ShadcnUI.useToast();

  const handleDrag = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleFileSelect = useCallback(
    (files) => {
      const validFiles = Array.from(files).filter((file) => {
        if (file.size > 5000000) {
          toast({
            title: "Error",
            description: "File size must be less than 5MB",
            variant: "destructive",
          });
          return false;
        }
        if (!file.type.match("image.*")) {
          toast({
            title: "Error",
            description: "Only image files are allowed",
            variant: "destructive",
          });
          return false;
        }
        return true;
      });

      setSelectedFiles((prev) => [...prev, ...validFiles]);

      validFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          setSelectedFilesForPreview((prev) => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      });
    },
    [toast]
  );

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);

      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFileSelect(e.dataTransfer.files);
      }
    },
    [handleFileSelect]
  );

  const uploadFiles = useCallback(async () => {
    setProgress(0);
    const totalFiles = selectedFiles.length;
    const urls = [];

    for (let i = 0; i < totalFiles; i++) {
      try {
        const file = selectedFiles[i];
        const { url, error } = await upload({ file });

        if (error) {
          setError(error);
          return;
        }

        urls.push(url);
        setProgress(((i + 1) / totalFiles) * 100);
      } catch (err) {
        setError(err.message);
        return;
      }
    }

    setUploadedUrls(urls);
    toast({
      title: "Success",
      description: "Files uploaded successfully!",
    });
  }, [selectedFiles, upload, toast]);

  return (
    <div className="container mx-auto p-8 space-y-8">
      <ShadcnUI.Toaster />

      {/* Basic File Upload */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Basic File Upload</h2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <ShadcnUI.Input
              type="file"
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </div>
          <div className="w-1/2">
            <ShadcnUI.CustomAlert
              title="Code"
              description={
                <pre className="bg-gray-100 p-2 rounded">
                  {`<Input 
  type="file"
  onChange={(e) => handleFileSelect(e.target.files)} 
/>`}
                </pre>
              }
            />
          </div>
        </div>
      </div>

      {/* Multiple File Upload */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Multiple File Upload</h2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <ShadcnUI.Input
              type="file"
              multiple
              onChange={(e) => handleFileSelect(e.target.files)}
            />
          </div>
          <div className="w-1/2">
            <ShadcnUI.CustomAlert
              title="Code"
              description={
                <pre className="bg-gray-100 p-2 rounded">
                  {`<Input 
  type="file"
  multiple
  onChange={(e) => handleFileSelect(e.target.files)}
/>`}
                </pre>
              }
            />
          </div>
        </div>
      </div>

      {/* Drag and Drop */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Drag and Drop Upload</h2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`
                border-2 border-dashed rounded-lg p-8 text-center
                ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}
              `}
            >
              <p>Drag and drop files here or</p>
              <ShadcnUI.Button
                onClick={() => document.getElementById("fileInput").click()}
                className="mt-2"
              >
                Browse Files
              </ShadcnUI.Button>
              <input
                id="fileInput"
                type="file"
                multiple
                className="hidden"
                onChange={(e) => handleFileSelect(e.target.files)}
              />
            </div>
          </div>
          <div className="w-1/2">
            <ShadcnUI.CustomAlert
              title="Code"
              description={
                <pre className="bg-gray-100 p-2 rounded">
                  {`<div
  onDragEnter={handleDrag}
  onDragLeave={handleDrag}
  onDragOver={handleDrag}
  onDrop={handleDrop}
  className="border-2 border-dashed rounded-lg p-8"
>
  <p>Drag and drop files here or</p>
  <Button onClick={() => fileInput.click()}>
    Browse Files
  </Button>
  <input
    type="file"
    multiple
    className="hidden"
    onChange={(e) => handleFileSelect(e.target.files)}
  />
</div>`}
                </pre>
              }
            />
          </div>
        </div>
      </div>

      {/* File Preview */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">File Preview</h2>
        <div className="flex gap-4">
          <div className="w-1/2">
            <div className="grid grid-cols-3 gap-4">
              {selectedFilesForPreview.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="w-full h-32 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
          <div className="w-1/2">
            <ShadcnUI.CustomAlert
              title="Code"
              description={
                <pre className="bg-gray-100 p-2 rounded">
                  {`{previews.map((preview, index) => (
  <img
    key={index}
    src={preview}
    alt={\`Preview \${index + 1}\`}
    className="w-full h-32 object-cover rounded-lg"
  />
))}`}
                </pre>
              }
            />
          </div>
        </div>
      </div>

      {/* Upload Progress */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Upload Progress</h2>
        <div className="flex gap-4">
          <div className="w-1/2 space-y-4">
            <ShadcnUI.Progress value={progress} />
            <ShadcnUI.Button
              onClick={uploadFiles}
              disabled={loading || selectedFiles.length === 0}
            >
              {loading ? "Uploading..." : "Upload Files"}
            </ShadcnUI.Button>
          </div>
          <div className="w-1/2">
            <ShadcnUI.CustomAlert
              title="Code"
              description={
                <pre className="bg-gray-100 p-2 rounded">
                  {`<Progress value={progress} />
<Button 
  onClick={uploadFiles}
  disabled={loading || selectedFiles.length === 0}
>
  {loading ? 'Uploading...' : 'Upload Files'}
</Button>`}
                </pre>
              }
            />
          </div>
        </div>
      </div>

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
"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useFileUpload } from "./hooks/useFileUpload";
import BasicUploader from "./components/BasicUploader";
import MultiUploader from "./components/MultiUploader";
import DragDropZone from "./components/DragDropZone";
import FilePreview from "./components/FilePreview";
import UploadProgress from "./components/UploadProgress";

export default function FileManager() {
  const {
    selectedFiles,
    dragActive,
    preview,
    progress,
    error,
    loading,
    setDragActive,
    handleFiles,
    handleUpload,
    handleDrop,
  } = useFileUpload();

  const showcaseComponents = [
    {
      title: "Basic File Uploader",
      description: "Simple file upload with button trigger",
      component: (
        <BasicUploader
          onFileSelect={handleFiles}
          onUpload={() => selectedFiles[0] && handleUpload(selectedFiles[0])}
          loading={loading}
        />
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
        <MultiUploader
          onFileSelect={handleFiles}
          onUpload={() => Promise.all(selectedFiles.map(handleUpload))}
          loading={loading}
          selectedFiles={selectedFiles}
        />
      ),
      code: `const handleFiles = (files) => {
  setSelectedFiles(prev => [...prev, ...files]);
};`,
    },
    {
      title: "Drag and Drop Zone",
      description: "Drag files directly into the upload area",
      component: (
        <DragDropZone
          onDrop={handleDrop}
          dragActive={dragActive}
          setDragActive={setDragActive}
        />
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
        <FilePreview
          onFileSelect={handleFiles}
          onUpload={() => selectedFiles.forEach(handleUpload)}
          loading={loading}
          preview={preview}
        />
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
        <UploadProgress
          onFileSelect={handleFiles}
          onUpload={() => selectedFiles[0] && handleUpload(selectedFiles[0])}
          loading={loading}
          progress={progress}
        />
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
                      onClick={() => navigator.clipboard.writeText(component.code)}
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

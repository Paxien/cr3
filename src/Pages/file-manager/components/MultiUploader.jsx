"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function MultiUploader({ onFileSelect, onUpload, loading, selectedFiles }) {
  return (
    <ShadcnUI.CustomDrawer
      title="Multi-file Upload"
      description="Select multiple files to upload"
      openButtonText="Upload Multiple Files"
      footer={
        <ShadcnUI.Button onClick={onUpload} disabled={loading}>
          Upload All Files
        </ShadcnUI.Button>
      }
    >
      <input
        type="file"
        multiple
        onChange={(e) => onFileSelect(Array.from(e.target.files))}
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
  );
}

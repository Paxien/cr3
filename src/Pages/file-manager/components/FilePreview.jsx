"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function FilePreview({ onFileSelect, onUpload, loading, preview }) {
  return (
    <ShadcnUI.CustomDialog
      triggerButtonText="Upload with Preview"
      title="File Preview"
      description="Preview your files before uploading"
      footer={
        <ShadcnUI.Button onClick={onUpload} disabled={loading}>
          Upload Selected Files
        </ShadcnUI.Button>
      }
    >
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={(e) => onFileSelect(Array.from(e.target.files))}
        className="block w-full text-sm"
      />
      <div className="grid grid-cols-2 gap-4 mt-4">
        {preview &&
          Object.entries(preview).map(([name, url]) => (
            <div key={name} className="relative rounded-lg overflow-hidden">
              <img src={url} alt={name} className="w-full h-32 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                {name}
              </div>
            </div>
          ))}
      </div>
    </ShadcnUI.CustomDialog>
  );
}

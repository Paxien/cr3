"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function BasicUploader({ onFileSelect, onUpload, loading }) {
  return (
    <ShadcnUI.CustomDialog
      triggerButtonText="Upload File"
      title="Upload File"
      description="Choose a file to upload"
      footer={
        <ShadcnUI.Button onClick={onUpload} disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </ShadcnUI.Button>
      }
    >
      <input
        type="file"
        onChange={(e) => onFileSelect(Array.from(e.target.files))}
        className="block w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-gray-100"
      />
    </ShadcnUI.CustomDialog>
  );
}

"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function UploadProgress({ onFileSelect, onUpload, loading, progress }) {
  return (
    <div className="space-y-4">
      <ShadcnUI.CustomDialog
        triggerButtonText="Upload with Progress"
        title="Upload Progress"
        description="Monitor your upload progress"
        footer={
          <ShadcnUI.Button onClick={onUpload} disabled={loading}>
            Start Upload
          </ShadcnUI.Button>
        }
      >
        <input
          type="file"
          onChange={(e) => onFileSelect(Array.from(e.target.files))}
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
  );
}

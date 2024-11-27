"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

export default function DragDropZone({ onDrop, dragActive, setDragActive }) {
  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setDragActive(true);
      }}
      onDragLeave={() => setDragActive(false)}
      onDrop={onDrop}
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
  );
}

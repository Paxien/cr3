import { useState } from 'react';
import { useUpload } from "@/utilities/runtime-helpers";

export function useFileUpload() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);
  const [preview, setPreview] = useState(null);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [upload, { loading }] = useUpload();

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

  const handleDrop = async (e) => {
    e.preventDefault();
    setDragActive(false);
    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  return {
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
    setError,
  };
}

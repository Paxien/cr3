"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";
import { useUpload } from "../utilities/runtime-helpers";

function MainComponent() {
  const [selectedDocument, setSelectedDocument] = React.useState(
    "https://example.com/sample.pdf"
  );
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [documentCode, setDocumentCode] = React.useState("");
  const [error, setError] = React.useState(null);
  const [upload, { loading }] = useUpload();
  const { toast } = ShadcnUI.useToast();

  const onUpload = async (file) => {
    const { url, error } = await upload({ file });
    if (error) {
      setError(error);
      return;
    }
    setSelectedFile(url);
    toast({
      title: "File uploaded",
      description: "Your file has been uploaded successfully",
    });
  };

  const downloadFile = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "Download Started",
      description: "Your file is being downloaded",
    });
  };

  const documentViewer = (
    <div className="flex flex-col space-y-4">
      <ShadcnUI.CustomSelect
        placeholder="Select Document"
        groups={[
          {
            items: [
              { value: "pdf1", label: "Sample PDF 1" },
              { value: "pdf2", label: "Sample PDF 2" },
            ],
          },
        ]}
        onValueChange={(value) => {
          setSelectedDocument(`https://example.com/${value}.pdf`);
          setDocumentCode(`<ShadcnUI.CustomSelect value="${value}" />`);
        }}
      />
      <div className="border rounded-lg p-4 h-[400px] overflow-auto">
        <iframe
          src={selectedDocument}
          className="w-full h-full"
          title="Document Viewer"
        />
      </div>
      <ShadcnUI.Button
        onClick={() => downloadFile(selectedDocument, "document.pdf")}
      >
        Download Document
      </ShadcnUI.Button>
    </div>
  );

  const filePreview = (
    <div className="space-y-4">
      <input
        type="file"
        onChange={(e) => e.target.files && onUpload(e.target.files[0])}
        className="hidden"
        id="file-upload"
      />
      <ShadcnUI.Button
        onClick={() => document.getElementById("file-upload").click()}
      >
        Upload File
      </ShadcnUI.Button>
      {error && <div className="text-red-500">{error}</div>}
      {selectedFile && (
        <div className="border rounded p-4">
          <img
            src={selectedFile}
            alt="File preview"
            className="max-w-full h-auto"
          />
          <ShadcnUI.Button
            className="mt-2"
            onClick={() => downloadFile(selectedFile, "preview.jpg")}
          >
            Download
          </ShadcnUI.Button>
        </div>
      )}
    </div>
  );

  const pdfViewer = (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <ShadcnUI.Button variant="outline" size="sm">
          <i className="fas fa-search-plus"></i>
        </ShadcnUI.Button>
        <ShadcnUI.Button variant="outline" size="sm">
          <i className="fas fa-search-minus"></i>
        </ShadcnUI.Button>
        <ShadcnUI.Input placeholder="Page" className="w-20" />
      </div>
      <div className="border rounded-lg p-4 h-[400px] overflow-auto">
        <iframe
          src={selectedDocument}
          className="w-full h-full"
          title="PDF Viewer"
        />
      </div>
    </div>
  );

  const modelViewer = (
    <div className="space-y-4">
      <div className="flex space-x-2 items-center">
        <ShadcnUI.Button variant="outline" size="sm">
          <i className="fas fa-cube"></i>
        </ShadcnUI.Button>
        <ShadcnUI.Button variant="outline" size="sm">
          <i className="fas fa-sync"></i>
        </ShadcnUI.Button>
        <ShadcnUI.Slider
          defaultValue={[0]}
          max={360}
          step={1}
          className="w-[200px]"
        />
      </div>
      <div className="border rounded-lg p-4 h-[400px] bg-gray-100">
        <div className="w-full h-full flex items-center justify-center">
          <p className="text-gray-500">3D Model Viewer Placeholder</p>
        </div>
      </div>
    </div>
  );

  const components = [
    { label: "Document Viewer", value: "doc", content: documentViewer },
    { label: "File Preview", value: "preview", content: filePreview },
    { label: "PDF Viewer", value: "pdf", content: pdfViewer },
    { label: "3D Model Viewer", value: "3d", content: modelViewer },
  ];

  const copyCode = (code) => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied",
      description: "Code has been copied to clipboard",
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3">
          <ShadcnUI.CustomTabs
            defaultValue="doc"
            tabs={components.map((comp) => ({
              label: comp.label,
              value: comp.value,
              content: comp.content,
            }))}
          />
        </div>

        <div className="w-full md:w-1/3">
          <div className="border rounded-lg p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Code Example</h3>
              <ShadcnUI.Button
                variant="outline"
                size="sm"
                onClick={() => copyCode(documentCode)}
              >
                <i className="fas fa-copy mr-2"></i>
                Copy
              </ShadcnUI.Button>
            </div>
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{documentCode}</code>
            </pre>
          </div>
        </div>
      </div>

      <ShadcnUI.Toaster />
    </div>
  );
}

export default MainComponent;
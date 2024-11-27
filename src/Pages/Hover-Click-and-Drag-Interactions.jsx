"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [activeTab, setActiveTab] = useState("hover");
  const [showCode, setShowCode] = useState(false);
  const [resizeWidth, setResizeWidth] = useState(300);
  const [isDragging, setIsDragging] = useState(false);
  const dragItem = useRef(null);
  const [dragList, setDragList] = useState([
    "Drag Item 1",
    "Drag Item 2",
    "Drag Item 3",
  ]);

  const dragStart = (e, position) => {
    dragItem.current = position;
    setIsDragging(true);
  };

  const dragEnter = (e, position) => {
    if (dragItem.current !== position) {
      const listCopy = [...dragList];
      const dragItemContent = listCopy[dragItem.current];
      listCopy.splice(dragItem.current, 1);
      listCopy.splice(position, 0, dragItemContent);
      dragItem.current = position;
      setDragList(listCopy);
    }
  };

  const dragEnd = () => {
    setIsDragging(false);
    dragItem.current = null;
  };

  const resizePanel = (e) => {
    const newWidth = e.clientX;
    if (newWidth > 200 && newWidth < 600) {
      setResizeWidth(newWidth);
    }
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", resizePanel);
    document.removeEventListener("mouseup", mouseUp);
  };

  const mouseDown = () => {
    document.addEventListener("mousemove", resizePanel);
    document.addEventListener("mouseup", mouseUp);
  };

  const codeExamples = {
    hover: `<ShadcnUI.Button 
  className="hover:bg-blue-600 transition-colors"
>
  Hover Me
</ShadcnUI.Button>`,
    context: `<ShadcnUI.CustomContextMenu
  triggerLabel="Right click here"
  items={[
    {
      label: 'Edit',
      onSelect: () => console.log('Edit clicked'),
      shortcut: '⌘E'
    },
    {
      label: 'Delete',
      onSelect: () => console.log('Delete clicked'), 
      shortcut: '⌘D'
    }
  ]}
/>`,
    tooltip: `<ShadcnUI.CustomTooltip 
  content={<p>Helpful tooltip text</p>}
>
  <button>Hover for tooltip</button>
</ShadcnUI.CustomTooltip>`,
    drag: `const [dragList, setDragList] = useState([...]);

const dragStart = (e, position) => {
  dragItem.current = position;
  setIsDragging(true);
};

const dragEnter = (e, position) => {
  // Reorder logic
};

{dragList.map((item, i) => (
  <div
    draggable
    onDragStart={(e) => dragStart(e, i)}
    onDragEnter={(e) => dragEnter(e, i)}
    onDragEnd={dragEnd}
  >
    {item}
  </div>
))}`,
    resize: `const [width, setWidth] = useState(300);

const resize = (e) => {
  const newWidth = e.clientX;
  if (newWidth > 200 && newWidth < 600) {
    setWidth(newWidth);
  }
};

<div
  style={{width: width}}
  onMouseDown={() => {
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  }}
>
  Resizable Panel
</div>`,
    action: `<ShadcnUI.Button 
  onClick={() => console.log('Action!')}
>
  Action Button  
</ShadcnUI.Button>`,
  };

  return (
    <div className="p-4">
      <ShadcnUI.CustomTabs
        defaultValue="hover"
        onValueChange={setActiveTab}
        className="w-full"
        tabs={[
          {
            label: "Hover Effects",
            value: "hover",
            content: (
              <div className="flex gap-8">
                <div className="w-1/2">
                  <ShadcnUI.Button className="hover:bg-blue-600 transition-colors">
                    Hover Me
                  </ShadcnUI.Button>
                </div>
                <div className="w-1/2 bg-gray-100 p-4 rounded">
                  <pre className="text-sm">
                    <code>{codeExamples.hover}</code>
                  </pre>
                  <ShadcnUI.Button
                    onClick={() =>
                      navigator.clipboard.writeText(codeExamples.hover)
                    }
                    size="sm"
                    className="mt-2"
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Context Menu",
            value: "context",
            content: (
              <div className="flex gap-8">
                <div className="w-1/2">
                  <ShadcnUI.CustomContextMenu
                    triggerLabel="Right click here"
                    items={[
                      {
                        label: "Edit",
                        onSelect: () => console.log("Edit clicked"),
                        shortcut: "⌘E",
                      },
                      {
                        label: "Delete",
                        onSelect: () => console.log("Delete clicked"),
                        shortcut: "⌘D",
                      },
                    ]}
                  />
                </div>
                <div className="w-1/2 bg-gray-100 p-4 rounded">
                  <pre className="text-sm">
                    <code>{codeExamples.context}</code>
                  </pre>
                  <ShadcnUI.Button
                    onClick={() =>
                      navigator.clipboard.writeText(codeExamples.context)
                    }
                    size="sm"
                    className="mt-2"
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Tooltip",
            value: "tooltip",
            content: (
              <div className="flex gap-8">
                <div className="w-1/2">
                  <ShadcnUI.CustomTooltip content={<p>Helpful tooltip text</p>}>
                    <ShadcnUI.Button>Hover for tooltip</ShadcnUI.Button>
                  </ShadcnUI.CustomTooltip>
                </div>
                <div className="w-1/2 bg-gray-100 p-4 rounded">
                  <pre className="text-sm">
                    <code>{codeExamples.tooltip}</code>
                  </pre>
                  <ShadcnUI.Button
                    onClick={() =>
                      navigator.clipboard.writeText(codeExamples.tooltip)
                    }
                    size="sm"
                    className="mt-2"
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Drag & Drop",
            value: "drag",
            content: (
              <div className="flex gap-8">
                <div className="w-1/2">
                  {dragList.map((item, i) => (
                    <div
                      key={i}
                      className={`p-4 mb-2 bg-white border rounded cursor-move ${
                        isDragging && dragItem.current === i ? "opacity-50" : ""
                      }`}
                      draggable
                      onDragStart={(e) => dragStart(e, i)}
                      onDragEnter={(e) => dragEnter(e, i)}
                      onDragEnd={dragEnd}
                    >
                      {item}
                    </div>
                  ))}
                </div>
                <div className="w-1/2 bg-gray-100 p-4 rounded">
                  <pre className="text-sm">
                    <code>{codeExamples.drag}</code>
                  </pre>
                  <ShadcnUI.Button
                    onClick={() =>
                      navigator.clipboard.writeText(codeExamples.drag)
                    }
                    size="sm"
                    className="mt-2"
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Resizable Panel",
            value: "resize",
            content: (
              <div className="flex gap-8">
                <div className="w-1/2">
                  <div
                    style={{ width: `${resizeWidth}px` }}
                    className="bg-white border p-4 relative"
                  >
                    <div>Resizable Panel</div>
                    <div
                      className="absolute right-0 top-0 bottom-0 w-2 cursor-ew-resize"
                      onMouseDown={mouseDown}
                    />
                  </div>
                </div>
                <div className="w-1/2 bg-gray-100 p-4 rounded">
                  <pre className="text-sm">
                    <code>{codeExamples.resize}</code>
                  </pre>
                  <ShadcnUI.Button
                    onClick={() =>
                      navigator.clipboard.writeText(codeExamples.resize)
                    }
                    size="sm"
                    className="mt-2"
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
          {
            label: "Action Buttons",
            value: "action",
            content: (
              <div className="flex gap-8">
                <div className="w-1/2 space-x-2">
                  <ShadcnUI.Button
                    variant="default"
                    onClick={() => console.log("Action!")}
                  >
                    Action Button
                  </ShadcnUI.Button>

                  <ShadcnUI.Button
                    variant="outline"
                    onClick={() => console.log("Trigger!")}
                  >
                    Trigger Button
                  </ShadcnUI.Button>

                  <div className="fixed bottom-8 right-8">
                    <ShadcnUI.Button
                      className="rounded-full w-12 h-12"
                      onClick={() => console.log("Quick action!")}
                    >
                      +
                    </ShadcnUI.Button>
                  </div>
                </div>
                <div className="w-1/2 bg-gray-100 p-4 rounded">
                  <pre className="text-sm">
                    <code>{codeExamples.action}</code>
                  </pre>
                  <ShadcnUI.Button
                    onClick={() =>
                      navigator.clipboard.writeText(codeExamples.action)
                    }
                    size="sm"
                    className="mt-2"
                  >
                    Copy Code
                  </ShadcnUI.Button>
                </div>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}

export default MainComponent;
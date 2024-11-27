"use client";

import * as React from "react";

const Accordion = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={\`space-y-1 \${className}\`} {...props}>
      {children}
    </div>
  );
});
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div ref={ref} className={\`border rounded-lg \${className}\`} {...props}>
      {children}
    </div>
  );
});
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={\`flex w-full justify-between px-4 py-2 text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 \${className}\`}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 transition-transform duration-200"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(({ children, className = "", ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={\`overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down \${className}\`}
      {...props}
    >
      <div className="px-4 py-2">{children}</div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };

"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("section1");
  const [showScrollTop, setShowScrollTop] = React.useState(false);

  const sections = [
    {
      id: "section1",
      label: "Accordion Example",
      component: (
        <ShadcnUI.CustomAccordion
          type="single"
          data={[
            {
              value: "item-1",
              trigger: "What is ShadcnUI?",
              content:
                "A beautiful UI component library built with Radix UI and Tailwind CSS.",
            },
            {
              value: "item-2",
              trigger: "Is it customizable?",
              content:
                "Yes! All components can be customized using Tailwind CSS classes.",
            },
          ]}
        />
      ),
      code: `<ShadcnUI.CustomAccordion
  type="single"
  data={[
    {
      value: "item-1",
      trigger: "What is ShadcnUI?", 
      content: "A beautiful UI component library."
    },
    {
      value: "item-2",
      trigger: "Is it customizable?",
      content: "Yes! All components can be customized."
    }
  ]}
/>`,
    },
    {
      id: "section2",
      label: "Alert Example",
      component: (
        <ShadcnUI.CustomAlert
          title="Heads up!"
          description="This is an example alert using ShadcnUI components."
        />
      ),
      code: `<ShadcnUI.CustomAlert
  title="Heads up!"
  description="This is an example alert using ShadcnUI components."
/>`,
    },
    {
      id: "section3",
      label: "Dialog Example",
      component: (
        <ShadcnUI.CustomDialog
          triggerButtonText="Open Dialog"
          title="Example Dialog"
          description="This is an example dialog component"
          footer={
            <div className="flex justify-end">
              <ShadcnUI.Button variant="outline">Close</ShadcnUI.Button>
            </div>
          }
        >
          <div className="py-4">Dialog content goes here</div>
        </ShadcnUI.CustomDialog>
      ),
      code: `<ShadcnUI.CustomDialog
  triggerButtonText="Open Dialog"
  title="Example Dialog"
  description="This is an example dialog component"
  footer={<ShadcnUI.Button variant="outline">Close</ShadcnUI.Button>}
>
  <div className="py-4">Dialog content goes here</div>
</ShadcnUI.CustomDialog>`,
    },
  ];

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);

      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );

      const currentSection = sectionElements.find((element) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <nav className="fixed top-0 w-full bg-white border-b z-50 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex space-x-4">
              {sections.map((section) => (
                <ShadcnUI.Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "ghost"}
                  onClick={() => scrollToSection(section.id)}
                  className="px-4"
                >
                  {section.label}
                </ShadcnUI.Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-24">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-64 md:fixed md:left-4 md:top-24">
            <nav className="bg-white rounded-lg shadow p-4">
              <div className="space-y-2">
                {sections.map((section) => (
                  <ShadcnUI.Button
                    key={section.id}
                    variant={activeSection === section.id ? "default" : "ghost"}
                    onClick={() => scrollToSection(section.id)}
                    className="w-full justify-start"
                  >
                    {section.label}
                  </ShadcnUI.Button>
                ))}
              </div>
            </nav>
          </aside>

          <main className="md:ml-72 flex-1">
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="mb-12 scroll-mt-24"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="col-span-1">
                    <h2 className="text-2xl font-bold mb-4">{section.label}</h2>
                    <div className="p-4 border rounded-lg bg-white">
                      {section.component}
                    </div>
                  </div>

                  <div className="col-span-1">
                    <ShadcnUI.CollapsibleSection
                      title="View Code"
                      nonCollapsedItems={
                        <div className="relative">
                          <pre className="p-4 rounded bg-gray-50 border overflow-x-auto">
                            <code>{section.code}</code>
                          </pre>
                          <ShadcnUI.Button
                            variant="outline"
                            size="sm"
                            className="absolute top-2 right-2"
                            onClick={() => {
                              navigator.clipboard.writeText(section.code);
                            }}
                          >
                            Copy
                          </ShadcnUI.Button>
                        </div>
                      }
                      collapsedItems={<></>}
                    />
                  </div>
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>

      {showScrollTop && (
        <ShadcnUI.Button
          variant="outline"
          size="icon"
          className="fixed bottom-8 right-8 rounded-full h-12 w-12 shadow-lg"
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up"></i>
        </ShadcnUI.Button>
      )}
    </div>
  );
}

export default MainComponent;
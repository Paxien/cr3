"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedTab, setSelectedTab] = React.useState("samples");

  return (
    <div className="container mx-auto p-8">
      <ShadcnUI.Tabs defaultValue="samples" className="w-full">
        <ShadcnUI.TabsList>
          <ShadcnUI.TabsTrigger value="samples">
            Components
          </ShadcnUI.TabsTrigger>
          <ShadcnUI.TabsTrigger value="docs">
            Documentation
          </ShadcnUI.TabsTrigger>
        </ShadcnUI.TabsList>

        <ShadcnUI.TabsContent value="samples">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold mb-4">Headings</h2>
                <ShadcnUI.Alert>
                  <ShadcnUI.AlertTitle>Main Heading</ShadcnUI.AlertTitle>
                  <ShadcnUI.AlertDescription>
                    Sub Heading
                  </ShadcnUI.AlertDescription>
                </ShadcnUI.Alert>
                <ShadcnUI.Collapsible>
                  <ShadcnUI.CollapsibleTrigger>
                    View Code
                  </ShadcnUI.CollapsibleTrigger>
                  <ShadcnUI.CollapsibleContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`<ShadcnUI.Alert>
  <ShadcnUI.AlertTitle>Main Heading</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>Sub Heading</ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`}</code>
                    </pre>
                    <ShadcnUI.Button
                      onClick={() =>
                        navigator.clipboard.writeText(`<ShadcnUI.Alert>
  <ShadcnUI.AlertTitle>Main Heading</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>Sub Heading</ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`)
                      }
                      className="mt-2"
                    >
                      Copy
                    </ShadcnUI.Button>
                  </ShadcnUI.CollapsibleContent>
                </ShadcnUI.Collapsible>
              </div>

              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold mb-4">Paragraph</h2>
                <ShadcnUI.Alert variant="default">
                  <ShadcnUI.AlertTitle>Paragraph</ShadcnUI.AlertTitle>
                  <ShadcnUI.AlertDescription>
                    This is a paragraph with some sample text that flows across
                    multiple lines.
                  </ShadcnUI.AlertDescription>
                </ShadcnUI.Alert>
                <ShadcnUI.Collapsible>
                  <ShadcnUI.CollapsibleTrigger>
                    View Code
                  </ShadcnUI.CollapsibleTrigger>
                  <ShadcnUI.CollapsibleContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`<ShadcnUI.Alert variant="default">
  <ShadcnUI.AlertTitle>Paragraph</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>
    This is a paragraph with some sample text that flows across multiple lines.
  </ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`}</code>
                    </pre>
                    <ShadcnUI.Button
                      onClick={() =>
                        navigator.clipboard
                          .writeText(`<ShadcnUI.Alert variant="default">
  <ShadcnUI.AlertTitle>Paragraph</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>
    This is a paragraph with some sample text that flows across multiple lines.
  </ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`)
                      }
                      className="mt-2"
                    >
                      Copy
                    </ShadcnUI.Button>
                  </ShadcnUI.CollapsibleContent>
                </ShadcnUI.Collapsible>
              </div>

              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold mb-4">Text Block</h2>
                <ShadcnUI.Alert>
                  <ShadcnUI.AlertTitle>Text Block</ShadcnUI.AlertTitle>
                  <ShadcnUI.AlertDescription>
                    This is a text block with styling
                  </ShadcnUI.AlertDescription>
                </ShadcnUI.Alert>
                <ShadcnUI.Collapsible>
                  <ShadcnUI.CollapsibleTrigger>
                    View Code
                  </ShadcnUI.CollapsibleTrigger>
                  <ShadcnUI.CollapsibleContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`<ShadcnUI.Alert>
  <ShadcnUI.AlertTitle>Text Block</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>
    This is a text block with styling
  </ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`}</code>
                    </pre>
                    <ShadcnUI.Button
                      onClick={() =>
                        navigator.clipboard.writeText(`<ShadcnUI.Alert>
  <ShadcnUI.AlertTitle>Text Block</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>
    This is a text block with styling
  </ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`)
                      }
                      className="mt-2"
                    >
                      Copy
                    </ShadcnUI.Button>
                  </ShadcnUI.CollapsibleContent>
                </ShadcnUI.Collapsible>
              </div>
            </div>

            <div className="space-y-8">
              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold mb-4">Blockquote</h2>
                <ShadcnUI.Alert variant="secondary">
                  <ShadcnUI.AlertTitle>Quote</ShadcnUI.AlertTitle>
                  <ShadcnUI.AlertDescription>
                    This is a blockquote with an attribution
                  </ShadcnUI.AlertDescription>
                </ShadcnUI.Alert>
                <ShadcnUI.Collapsible>
                  <ShadcnUI.CollapsibleTrigger>
                    View Code
                  </ShadcnUI.CollapsibleTrigger>
                  <ShadcnUI.CollapsibleContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`<ShadcnUI.Alert variant="secondary">
  <ShadcnUI.AlertTitle>Quote</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>
    This is a blockquote with an attribution
  </ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`}</code>
                    </pre>
                    <ShadcnUI.Button
                      onClick={() =>
                        navigator.clipboard
                          .writeText(`<ShadcnUI.Alert variant="secondary">
  <ShadcnUI.AlertTitle>Quote</ShadcnUI.AlertTitle>
  <ShadcnUI.AlertDescription>
    This is a blockquote with an attribution
  </ShadcnUI.AlertDescription>
</ShadcnUI.Alert>`)
                      }
                      className="mt-2"
                    >
                      Copy
                    </ShadcnUI.Button>
                  </ShadcnUI.CollapsibleContent>
                </ShadcnUI.Collapsible>
              </div>

              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold mb-4">Text Link</h2>
                <ShadcnUI.Button variant="link">Text Link</ShadcnUI.Button>
                <ShadcnUI.Collapsible>
                  <ShadcnUI.CollapsibleTrigger>
                    View Code
                  </ShadcnUI.CollapsibleTrigger>
                  <ShadcnUI.CollapsibleContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`<ShadcnUI.Button variant="link">Text Link</ShadcnUI.Button>`}</code>
                    </pre>
                    <ShadcnUI.Button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `<ShadcnUI.Button variant="link">Text Link</ShadcnUI.Button>`
                        )
                      }
                      className="mt-2"
                    >
                      Copy
                    </ShadcnUI.Button>
                  </ShadcnUI.CollapsibleContent>
                </ShadcnUI.Collapsible>
              </div>

              <div className="rounded-lg border p-6">
                <h2 className="text-2xl font-semibold mb-4">Highlight Text</h2>
                <ShadcnUI.Badge>Highlighted Text</ShadcnUI.Badge>
                <ShadcnUI.Collapsible>
                  <ShadcnUI.CollapsibleTrigger>
                    View Code
                  </ShadcnUI.CollapsibleTrigger>
                  <ShadcnUI.CollapsibleContent>
                    <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                      <code>{`<ShadcnUI.Badge>Highlighted Text</ShadcnUI.Badge>`}</code>
                    </pre>
                    <ShadcnUI.Button
                      onClick={() =>
                        navigator.clipboard.writeText(
                          `<ShadcnUI.Badge>Highlighted Text</ShadcnUI.Badge>`
                        )
                      }
                      className="mt-2"
                    >
                      Copy
                    </ShadcnUI.Button>
                  </ShadcnUI.CollapsibleContent>
                </ShadcnUI.Collapsible>
              </div>
            </div>
          </div>
        </ShadcnUI.TabsContent>

        <ShadcnUI.TabsContent value="docs">
          <div className="prose max-w-none">
            <h2 className="text-2xl font-semibold mb-4">
              Text Components Documentation
            </h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead>Component</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Usage</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableCell>Heading</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>
                    Page titles and section headers
                  </ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableCell>Paragraph</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>Standard text content</ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableCell>Text Block</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>
                    Styled content containers
                  </ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableCell>Blockquote</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>
                    Quoted text and citations
                  </ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableCell>Text Link</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>
                    Hyperlinks and references
                  </ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableCell>Highlight</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>Emphasized text</ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
          </div>
        </ShadcnUI.TabsContent>
      </ShadcnUI.Tabs>
    </div>
  );
}

export default MainComponent;
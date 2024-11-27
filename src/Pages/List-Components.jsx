"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [copiedIndex, setCopiedIndex] = React.useState(-1);

  const lists = [
    {
      title: "Ordered List",
      code: `<ShadcnUI.Table>
  <ShadcnUI.TableBody>
    {[1,2,3].map(i => (
      <ShadcnUI.TableRow>
        <ShadcnUI.TableCell>{i}. List Item {i}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`,
      component: (
        <ShadcnUI.Table>
          <ShadcnUI.TableBody>
            {[1, 2, 3].map((i) => (
              <ShadcnUI.TableRow key={i}>
                <ShadcnUI.TableCell>
                  {i}. List Item {i}
                </ShadcnUI.TableCell>
              </ShadcnUI.TableRow>
            ))}
          </ShadcnUI.TableBody>
        </ShadcnUI.Table>
      ),
    },
    {
      title: "Unordered List",
      code: `<ShadcnUI.Table>
  <ShadcnUI.TableBody>
    {['Item 1', 'Item 2', 'Item 3'].map(item => (
      <ShadcnUI.TableRow>
        <ShadcnUI.TableCell>• {item}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`,
      component: (
        <ShadcnUI.Table>
          <ShadcnUI.TableBody>
            {["Item 1", "Item 2", "Item 3"].map((item) => (
              <ShadcnUI.TableRow key={item}>
                <ShadcnUI.TableCell>• {item}</ShadcnUI.TableCell>
              </ShadcnUI.TableRow>
            ))}
          </ShadcnUI.TableBody>
        </ShadcnUI.Table>
      ),
    },
    {
      title: "Description List",
      code: `<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>Term</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {[
      {term: 'React', desc: 'A JavaScript library for building user interfaces'},
      {term: 'Component', desc: 'A reusable piece of UI'},
      {term: 'Props', desc: 'Properties passed to React components'}
    ].map(item => (
      <ShadcnUI.TableRow>
        <ShadcnUI.TableCell className="font-medium">{item.term}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.desc}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`,
      component: (
        <ShadcnUI.Table>
          <ShadcnUI.TableHeader>
            <ShadcnUI.TableRow>
              <ShadcnUI.TableHead>Term</ShadcnUI.TableHead>
              <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
            </ShadcnUI.TableRow>
          </ShadcnUI.TableHeader>
          <ShadcnUI.TableBody>
            {[
              {
                term: "React",
                desc: "A JavaScript library for building user interfaces",
              },
              { term: "Component", desc: "A reusable piece of UI" },
              { term: "Props", desc: "Properties passed to React components" },
            ].map((item) => (
              <ShadcnUI.TableRow key={item.term}>
                <ShadcnUI.TableCell className="font-medium">
                  {item.term}
                </ShadcnUI.TableCell>
                <ShadcnUI.TableCell>{item.desc}</ShadcnUI.TableCell>
              </ShadcnUI.TableRow>
            ))}
          </ShadcnUI.TableBody>
        </ShadcnUI.Table>
      ),
    },
    {
      title: "Checkbox List",
      code: `<div className="space-y-4">
  {['Option 1', 'Option 2', 'Option 3'].map(option => (
    <div className="flex items-center space-x-2">
      <ShadcnUI.Checkbox id={option} />
      <label htmlFor={option}>{option}</label>
    </div>
  ))}
</div>`,
      component: (
        <div className="space-y-4">
          {["Option 1", "Option 2", "Option 3"].map((option) => (
            <div key={option} className="flex items-center space-x-2">
              <ShadcnUI.Checkbox id={option} />
              <label htmlFor={option}>{option}</label>
            </div>
          ))}
        </div>
      ),
    },
    {
      title: "Radio Button List",
      code: `<ShadcnUI.RadioGroup defaultValue="option1">
  {['Option 1', 'Option 2', 'Option 3'].map((option, i) => (
    <div className="flex items-center space-x-2">
      <ShadcnUI.RadioGroupItem value={\`option\${i+1}\`} id={\`r\${i+1}\`} />
      <label htmlFor={\`r\${i+1}\`}>{option}</label>
    </div>
  ))}
</ShadcnUI.RadioGroup>`,
      component: (
        <ShadcnUI.RadioGroup defaultValue="option1">
          {["Option 1", "Option 2", "Option 3"].map((option, i) => (
            <div key={option} className="flex items-center space-x-2">
              <ShadcnUI.RadioGroupItem
                value={`option${i + 1}`}
                id={`r${i + 1}`}
              />
              <label htmlFor={`r${i + 1}`}>{option}</label>
            </div>
          ))}
        </ShadcnUI.RadioGroup>
      ),
    },
    {
      title: "Tag List",
      code: `<div className="flex flex-wrap gap-2">
  {['React', 'TypeScript', 'TailwindCSS', 'Node.js'].map(tag => (
    <ShadcnUI.Badge variant="secondary">{tag}</ShadcnUI.Badge>
  ))}
</div>`,
      component: (
        <div className="flex flex-wrap gap-2">
          {["React", "TypeScript", "TailwindCSS", "Node.js"].map((tag) => (
            <ShadcnUI.Badge key={tag} variant="secondary">
              {tag}
            </ShadcnUI.Badge>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">List Component Examples</h1>

      <div className="space-y-12">
        {lists.map((list, index) => (
          <div key={list.title} className="border rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{list.title}</h2>
              <ShadcnUI.Button
                variant="outline"
                onClick={() => {
                  navigator.clipboard.writeText(list.code);
                  setCopiedIndex(index);
                  setTimeout(() => setCopiedIndex(-1), 2000);
                }}
              >
                {copiedIndex === index ? "Copied!" : "Copy Code"}
              </ShadcnUI.Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-4 border rounded-md">{list.component}</div>

              <div className="relative">
                <pre className="p-4 bg-gray-100 rounded-md overflow-x-auto">
                  <code className="text-sm">{list.code}</code>
                </pre>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;
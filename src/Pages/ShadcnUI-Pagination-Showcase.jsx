"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [visibleCount, setVisibleCount] = React.useState(10);
  const [isLoading, setIsLoading] = React.useState(false);
  const [copySuccess, setCopySuccess] = React.useState("");
  const [visibleSection, setVisibleSection] = React.useState("");

  const observer = React.useRef(null);
  const lastElementRef = React.useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && visibleCount < totalItems) {
          handleLoadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, visibleCount]
  );

  const totalItems = 100;
  const itemsPerPage = 10;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = React.useMemo(() => {
    return Array.from({ length: totalItems }, (_, i) => ({
      id: i + 1,
      name: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
    }));
  }, []);

  const displayedItems = React.useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return currentItems.slice(start, end);
  }, [currentPage, currentItems]);

  const handleLoadMore = React.useCallback(() => {
    setIsLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => Math.min(prev + 10, totalItems));
      setIsLoading(false);
    }, 1000);
  }, []);

  const handlePageChange = React.useCallback((page) => {
    setCurrentPage(page);
  }, []);

  const jumpToPage = React.useCallback(
    (value) => {
      const pageNum = parseInt(value);
      if (pageNum >= 1 && pageNum <= totalPages) {
        setCurrentPage(pageNum);
      }
    },
    [totalPages]
  );

  const handleCopy = React.useCallback((code) => {
    navigator.clipboard.writeText(code);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  }, []);

  const codeExamples = {
    classic: `<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {displayedItems.map((item) => (
      <ShadcnUI.TableRow key={item.id}>
        <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>
<div className="mt-4">
  <ShadcnUI.CustomPagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
</div>`,
    infinite: `const observer = React.useRef(null);
const lastElementRef = React.useCallback(node => {
  if (isLoading) return;
  if (observer.current) observer.current.disconnect();
  observer.current = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting && visibleCount < totalItems) {
      handleLoadMore();
    }
  });
  if (node) observer.current.observe(node);
}, [isLoading, visibleCount]);

{currentItems.slice(0, visibleCount).map((item, index) => {
  if (currentItems.length === index + 1) {
    return (
      <div ref={lastElementRef} key={item.id}>
        <ShadcnUI.CustomCard>
          <div className="p-4">
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
        </ShadcnUI.CustomCard>
      </div>
    );
  }
  return (
    <ShadcnUI.CustomCard key={item.id}>
      <div className="p-4">
        <h3 className="font-semibold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.description}</p>
      </div>
    </ShadcnUI.CustomCard>
  );
})}`,
    loadMore: `<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {currentItems.slice(0, visibleCount).map((item) => (
      <ShadcnUI.TableRow key={item.id}>
        <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>
{visibleCount < totalItems && (
  <ShadcnUI.Button
    onClick={handleLoadMore}
    disabled={isLoading} 
    className="w-full mt-4"
  >
    {isLoading ? "Loading..." : "Load More"}
  </ShadcnUI.Button>
)}`,
    jumpTo: `<div className="flex items-center gap-2 mb-4">
  <ShadcnUI.Input
    type="number"
    min={1}
    max={totalPages}
    placeholder="Page #"
    className="w-24"
    onChange={(e) => jumpToPage(e.target.value)}
  />
  <span className="text-sm text-gray-500">of {totalPages}</span>
</div>
<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {displayedItems.map((item) => (
      <ShadcnUI.TableRow key={item.id}>
        <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`,
    range: `<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {displayedItems.map((item) => (
      <ShadcnUI.TableRow key={item.id}>
        <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>
<div className="flex items-center justify-between mt-4">
  <ShadcnUI.CustomPagination
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={handlePageChange}
  />
  <span className="text-sm text-gray-500">
    Showing {(currentPage - 1) * itemsPerPage + 1}–
    {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
  </span>
</div>`,
  };

  const renderSection = (title, content, codeExample) => (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="border rounded-lg p-4">{content}</div>
      <ShadcnUI.Collapsible
        open={visibleSection === title}
        onOpenChange={() =>
          setVisibleSection(visibleSection === title ? "" : title)
        }
      >
        <ShadcnUI.CollapsibleTrigger asChild>
          <ShadcnUI.Button variant="ghost" className="w-full text-left mt-2">
            {visibleSection === title ? "Hide Code" : "View Code"}
          </ShadcnUI.Button>
        </ShadcnUI.CollapsibleTrigger>
        <ShadcnUI.CollapsibleContent>
          <div className="relative mt-2">
            <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
            <ShadcnUI.Button
              onClick={() => handleCopy(codeExample)}
              className="absolute top-2 right-2"
            >
              {copySuccess || "Copy"}
            </ShadcnUI.Button>
          </div>
        </ShadcnUI.CollapsibleContent>
      </ShadcnUI.Collapsible>
    </div>
  );

  return (
    <div className="p-8 space-y-8">
      {renderSection(
        "Classic Pagination",
        <>
          <ShadcnUI.Table>
            <ShadcnUI.TableHeader>
              <ShadcnUI.TableRow>
                <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
              </ShadcnUI.TableRow>
            </ShadcnUI.TableHeader>
            <ShadcnUI.TableBody>
              {displayedItems.map((item) => (
                <ShadcnUI.TableRow key={item.id}>
                  <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
              ))}
            </ShadcnUI.TableBody>
          </ShadcnUI.Table>
          <div className="mt-4">
            <ShadcnUI.CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </>,
        codeExamples.classic
      )}

      {renderSection(
        "Infinite Scroll Pagination",
        <div className="max-h-[400px] overflow-y-auto">
          {currentItems.slice(0, visibleCount).map((item, index) => {
            if (currentItems.length === index + 1) {
              return (
                <div ref={lastElementRef} key={item.id}>
                  <ShadcnUI.CustomCard>
                    <div className="p-4">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </ShadcnUI.CustomCard>
                </div>
              );
            }
            return (
              <ShadcnUI.CustomCard key={item.id} className="mb-4">
                <div className="p-4">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </ShadcnUI.CustomCard>
            );
          })}
          {isLoading && (
            <div className="text-center p-4">
              <ShadcnUI.Progress value={undefined} className="w-full" />
            </div>
          )}
        </div>,
        codeExamples.infinite
      )}

      {renderSection(
        "Load More Pattern",
        <>
          <ShadcnUI.Table>
            <ShadcnUI.TableHeader>
              <ShadcnUI.TableRow>
                <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
              </ShadcnUI.TableRow>
            </ShadcnUI.TableHeader>
            <ShadcnUI.TableBody>
              {currentItems.slice(0, visibleCount).map((item) => (
                <ShadcnUI.TableRow key={item.id}>
                  <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
              ))}
            </ShadcnUI.TableBody>
          </ShadcnUI.Table>
          {visibleCount < totalItems && (
            <ShadcnUI.Button
              onClick={handleLoadMore}
              disabled={isLoading}
              className="w-full mt-4"
            >
              {isLoading ? "Loading..." : "Load More"}
            </ShadcnUI.Button>
          )}
        </>,
        codeExamples.loadMore
      )}

      {renderSection(
        "Jump-to-Page",
        <>
          <div className="flex items-center gap-2 mb-4">
            <ShadcnUI.Input
              type="number"
              min={1}
              max={totalPages}
              placeholder="Page #"
              className="w-24"
              onChange={(e) => jumpToPage(e.target.value)}
            />
            <span className="text-sm text-gray-500">of {totalPages}</span>
          </div>
          <ShadcnUI.Table>
            <ShadcnUI.TableHeader>
              <ShadcnUI.TableRow>
                <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
              </ShadcnUI.TableRow>
            </ShadcnUI.TableHeader>
            <ShadcnUI.TableBody>
              {displayedItems.map((item) => (
                <ShadcnUI.TableRow key={item.id}>
                  <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
              ))}
            </ShadcnUI.TableBody>
          </ShadcnUI.Table>
        </>,
        codeExamples.jumpTo
      )}

      {renderSection(
        "Range-Based Pagination",
        <>
          <ShadcnUI.Table>
            <ShadcnUI.TableHeader>
              <ShadcnUI.TableRow>
                <ShadcnUI.TableHead>ID</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                <ShadcnUI.TableHead>Description</ShadcnUI.TableHead>
              </ShadcnUI.TableRow>
            </ShadcnUI.TableHeader>
            <ShadcnUI.TableBody>
              {displayedItems.map((item) => (
                <ShadcnUI.TableRow key={item.id}>
                  <ShadcnUI.TableCell>{item.id}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.name}</ShadcnUI.TableCell>
                  <ShadcnUI.TableCell>{item.description}</ShadcnUI.TableCell>
                </ShadcnUI.TableRow>
              ))}
            </ShadcnUI.TableBody>
          </ShadcnUI.Table>
          <div className="flex items-center justify-between mt-4">
            <ShadcnUI.CustomPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <span className="text-sm text-gray-500">
              Showing {(currentPage - 1) * itemsPerPage + 1}–
              {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
            </span>
          </div>
        </>,
        codeExamples.range
      )}
    </div>
  );
}

export default MainComponent;
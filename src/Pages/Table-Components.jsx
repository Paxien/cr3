"use client";
import React from "react";
import * as ShadcnUI from "@/design-libraries/shadcn-ui";

function MainComponent() {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [sort, setSort] = React.useState({ column: "", direction: "" });

  const tableData = [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Bob Wilson",
      email: "bob@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: 4,
      name: "Alice Brown",
      email: "alice@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: 5,
      name: "Charlie Davis",
      email: "charlie@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ];

  const expandableContent = {
    1: "Additional details for John Doe",
    2: "Extra information about Jane Smith",
    3: "More context for Bob Wilson",
    4: "Supplementary data for Alice Brown",
    5: "Extended details for Charlie Davis",
  };

  const [expandedRows, setExpandedRows] = React.useState({});
  const [editingCell, setEditingCell] = React.useState(null);
  const [tableDataState, setTableDataState] = React.useState(tableData);

  const toggleExpand = (id) => {
    setExpandedRows((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSort = (column) => {
    const direction =
      sort.column === column && sort.direction === "asc" ? "desc" : "asc";
    setSort({ column, direction });
  };

  const handleEdit = (id, field, value) => {
    setTableDataState((prev) =>
      prev.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
    setEditingCell(null);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="space-y-8">
        {/* Basic Table */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Basic Table</h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Role</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableData.slice(0, 3).map((row) => (
                  <ShadcnUI.TableRow key={row.id}>
                    <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {`<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
      <ShadcnUI.TableHead>Role</ShadcnUI.TableHead>
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {data.map((row) => (
      <ShadcnUI.TableRow key={row.id}>
        <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`}
            </pre>
          </div>
        </div>

        {/* Sortable Table */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Sortable Table</h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  {["Name", "Email", "Role"].map((header) => (
                    <ShadcnUI.TableHead
                      key={header}
                      className="cursor-pointer hover:bg-gray-100"
                      onClick={() => handleSort(header.toLowerCase())}
                    >
                      {header}
                      {sort.column === header.toLowerCase() && (
                        <span className="ml-2">
                          {sort.direction === "asc" ? "↑" : "↓"}
                        </span>
                      )}
                    </ShadcnUI.TableHead>
                  ))}
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableDataState.slice(0, 3).map((row) => (
                  <ShadcnUI.TableRow key={row.id}>
                    <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {`<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      {headers.map((header) => (
        <ShadcnUI.TableHead 
          onClick={() => handleSort(header)}
          className="cursor-pointer"
        >
          {header}
          {sort.column === header && (
            <span>{sort.direction === 'asc' ? '↑' : '↓'}</span>
          )}
        </ShadcnUI.TableHead>
      ))}
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {sortedData.map((row) => (
      <ShadcnUI.TableRow key={row.id}>
        <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
        <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`}
            </pre>
          </div>
        </div>

        {/* Paginated Table */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Paginated Table</h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Role</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableDataState.slice((page - 1) * 2, page * 2).map((row) => (
                  <ShadcnUI.TableRow key={row.id}>
                    <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
            <div className="mt-4">
              <ShadcnUI.CustomPagination
                currentPage={page}
                totalPages={Math.ceil(tableData.length / 2)}
                onPageChange={setPage}
              />
            </div>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {`<ShadcnUI.Table>
  <ShadcnUI.TableHeader>...</ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {data.slice((page - 1) * pageSize, page * pageSize)
      .map((row) => (
        <ShadcnUI.TableRow key={row.id}>...</ShadcnUI.TableRow>
      ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>
<ShadcnUI.CustomPagination
  currentPage={page}
  totalPages={Math.ceil(data.length / pageSize)}
  onPageChange={setPage}
/>`}
            </pre>
          </div>
        </div>

        {/* Expandable Table */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Expandable Table</h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead></ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Role</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableDataState.map((row) => (
                  <React.Fragment key={row.id}>
                    <ShadcnUI.TableRow>
                      <ShadcnUI.TableCell>
                        <ShadcnUI.Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleExpand(row.id)}
                        >
                          {expandedRows[row.id] ? "▼" : "▶"}
                        </ShadcnUI.Button>
                      </ShadcnUI.TableCell>
                      <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
                      <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
                      <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
                    </ShadcnUI.TableRow>
                    {expandedRows[row.id] && (
                      <ShadcnUI.TableRow>
                        <ShadcnUI.TableCell colSpan={4}>
                          <div className="p-4 bg-gray-50">
                            {expandableContent[row.id]}
                          </div>
                        </ShadcnUI.TableCell>
                      </ShadcnUI.TableRow>
                    )}
                  </React.Fragment>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {`<ShadcnUI.Table>
  <ShadcnUI.TableHeader>...</ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {data.map((row) => (
      <React.Fragment key={row.id}>
        <ShadcnUI.TableRow>
          <ShadcnUI.TableCell>
            <ShadcnUI.Button
              onClick={() => toggleExpand(row.id)}
            >
              {expandedRows[row.id] ? '▼' : '▶'}
            </ShadcnUI.Button>
          </ShadcnUI.TableCell>
          <ShadcnUI.TableCell>{row.data}</ShadcnUI.TableCell>
        </ShadcnUI.TableRow>
        {expandedRows[row.id] && (
          <ShadcnUI.TableRow>
            <ShadcnUI.TableCell colSpan={4}>
              {expandedContent[row.id]}
            </ShadcnUI.TableCell>
          </ShadcnUI.TableRow>
        )}
      </React.Fragment>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`}
            </pre>
          </div>
        </div>

        {/* Editable Table */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Editable Table</h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Role</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableDataState.map((row) => (
                  <ShadcnUI.TableRow key={row.id}>
                    {["name", "email", "role"].map((field) => (
                      <ShadcnUI.TableCell
                        key={`${row.id}-${field}`}
                        className="cursor-pointer"
                        onDoubleClick={() =>
                          setEditingCell({ id: row.id, field })
                        }
                      >
                        {editingCell?.id === row.id &&
                        editingCell?.field === field ? (
                          <ShadcnUI.Input
                            defaultValue={row[field]}
                            onBlur={(e) =>
                              handleEdit(row.id, field, e.target.value)
                            }
                            autoFocus
                          />
                        ) : (
                          row[field]
                        )}
                      </ShadcnUI.TableCell>
                    ))}
                  </ShadcnUI.TableRow>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {`<ShadcnUI.Table>
  <ShadcnUI.TableHeader>...</ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {data.map((row) => (
      <ShadcnUI.TableRow key={row.id}>
        {fields.map((field) => (
          <ShadcnUI.TableCell
            onDoubleClick={() => 
              setEditingCell({ id: row.id, field })}
          >
            {isEditing ? (
              <ShadcnUI.Input
                defaultValue={row[field]}
                onBlur={(e) => 
                  handleEdit(row.id, field, e.target.value)}
              />
            ) : (
              row[field]
            )}
          </ShadcnUI.TableCell>
        ))}
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`}
            </pre>
          </div>
        </div>

        {/* Table with Selection */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-bold mb-4">Table with Selection</h2>
            <ShadcnUI.Table>
              <ShadcnUI.TableHeader>
                <ShadcnUI.TableRow>
                  <ShadcnUI.TableHead className="w-[50px]">
                    <ShadcnUI.Checkbox
                      checked={selectedRows.length === tableData.length}
                      onCheckedChange={(checked) => {
                        setSelectedRows(
                          checked ? tableData.map((row) => row.id) : []
                        );
                      }}
                    />
                  </ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Name</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Email</ShadcnUI.TableHead>
                  <ShadcnUI.TableHead>Role</ShadcnUI.TableHead>
                </ShadcnUI.TableRow>
              </ShadcnUI.TableHeader>
              <ShadcnUI.TableBody>
                {tableDataState.map((row) => (
                  <ShadcnUI.TableRow key={row.id}>
                    <ShadcnUI.TableCell>
                      <ShadcnUI.Checkbox
                        checked={selectedRows.includes(row.id)}
                        onCheckedChange={(checked) => {
                          setSelectedRows((prev) =>
                            checked
                              ? [...prev, row.id]
                              : prev.filter((id) => id !== row.id)
                          );
                        }}
                      />
                    </ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.name}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.email}</ShadcnUI.TableCell>
                    <ShadcnUI.TableCell>{row.role}</ShadcnUI.TableCell>
                  </ShadcnUI.TableRow>
                ))}
              </ShadcnUI.TableBody>
            </ShadcnUI.Table>
          </div>
          <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded">
            <pre className="text-sm overflow-x-auto">
              {`<ShadcnUI.Table>
  <ShadcnUI.TableHeader>
    <ShadcnUI.TableRow>
      <ShadcnUI.TableHead>
        <ShadcnUI.Checkbox
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
      </ShadcnUI.TableHead>
      {/* Other headers */}
    </ShadcnUI.TableRow>
  </ShadcnUI.TableHeader>
  <ShadcnUI.TableBody>
    {data.map((row) => (
      <ShadcnUI.TableRow>
        <ShadcnUI.TableCell>
          <ShadcnUI.Checkbox
            checked={selectedRows.includes(row.id)}
            onChange={() => handleSelect(row.id)}
          />
        </ShadcnUI.TableCell>
        {/* Other cells */}
      </ShadcnUI.TableRow>
    ))}
  </ShadcnUI.TableBody>
</ShadcnUI.Table>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
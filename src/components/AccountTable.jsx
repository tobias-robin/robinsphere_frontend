import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const Account = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  // Sample account data
  const accounts = [
    { id: 1, name: "Alice Walker", email: "alice@example.com", role: "Admin", org_id: "76" },
    { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", org_id: "932792" },
    { id: 3, name: "Charlie Sun", email: "charlie@example.com", role: "User", org_id: "123456" },
  ];

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "org_id", headerName: "Org ID", width: 150 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "role", headerName: "Role", width: 150 },
  ];

  // Filter the data based on search input
  const filteredData = accounts.filter((account) =>
    account.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    account.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    account.org_id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <TextField
        label="Search Accounts"
        variant="outlined"
        fullWidth
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <Paper style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={filteredData}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          onRowClick={(params) => navigate(`/accounts/${params.row.org_id}`)} // Navigate to account page on click
          sx={{
            cursor: "pointer", // Show pointer cursor on hover
            "& .MuiDataGrid-row:hover": { backgroundColor: "#f5f5f5" }, // Hover effect
          }}
        />
      </Paper>
    </div>
  );
};

export default Account;

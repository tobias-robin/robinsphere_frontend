import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, Typography, Button, Tab, Tabs, Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const AccountDetails = () => {
  const { org_id } = useParams();
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  // Mock Data (Replace with API calls later)
  const account = {
    name: "RobinSphere HQ",
    email: "contact@robinsphere.com",
    created_at: "2023-10-12",
    employees: [
      { id: 1, name: "Alice Walker", email: "alice@example.com", role: "Admin", created_at: "2023-10-12" },
      { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User", created_at: "2023-11-01" },
    ],
    spaces: [
      { id: 1, name: "Conference Room 1", created_on: "2023-09-15" },
      { id: 2, name: "Workstation A", created_on: "2023-09-20" },
    ],
    desks: [
      { id: 1, name: "Desk A1", created_on: "2023-09-15" },
      { id: 2, name: "Desk B2", created_on: "2023-09-20" },
    ],
  };

  const employeesColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "role", headerName: "Role", width: 150 },
    { field: "created_at", headerName: "Joined", width: 150 },
  ];

  const spacesColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "created_on", headerName: "Created On", width: 200 },
  ];

  const desksColumns = [
    { field: "id", headerName: "ID", width: 100 },
    { field: "name", headerName: "Name", width: 250 },
    { field: "created_on", headerName: "Created On", width: 200 },
  ];

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "auto" }}>
      {/* Breadcrumb */}
      <Button onClick={() => navigate("/accounts")} style={{ marginBottom: "10px" }}>
        ← Back to Accounts
      </Button>

      {/* Account Info Card */}
      <Card style={{ padding: "20px", background: "#fff", borderRadius: "12px" }}>
        <Typography variant="h4">{account.name}</Typography>
        <Typography variant="subtitle1" color="textSecondary">
          Email: {account.email}
        </Typography>
        <Typography variant="subtitle2" color="textSecondary">
          Created On: {account.created_at}
        </Typography>
      </Card>

      {/* Tabs for Different Sections */}
      <Box sx={{ borderBottom: 1, borderColor: "divider", marginTop: "20px" }}>
        <Tabs value={tabIndex} onChange={(e, newIndex) => setTabIndex(newIndex)}>
          <Tab label="Employees" />
          <Tab label="Spaces" />
          <Tab label="Desks" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ marginTop: "20px" }}>
        {tabIndex === 0 && (
          <DataGrid rows={account.employees} columns={employeesColumns} pageSize={5} />
        )}
        {tabIndex === 1 && (
          <DataGrid rows={account.spaces} columns={spacesColumns} pageSize={5} />
        )}
        {tabIndex === 2 && (
          <DataGrid rows={account.desks} columns={desksColumns} pageSize={5} />
        )}
      </Box>
    </div>
  );
};

export default AccountDetails;

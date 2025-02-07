import React from "react";
import { Drawer, List, ListItem, ListItemText, Divider } from "@mui/material";
import { Home, People, Settings, AccountCircle, Help } from "@mui/icons-material";
import { styled } from "@mui/system"; // For Material-UI v5 styling

// Custom styles using the styled API
const SidebarWrapper = styled(Drawer)(({ theme }) => ({
  width: 250,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: 250,
    boxSizing: "border-box",
    backgroundColor: "rgba(85, 3, 49, 1)", // Set background color
    color: "#fff", // Text color for sidebar items
  },
}));

const Logo = styled("div")({
  padding: "10px",
  fontSize: "24px",
  fontWeight: "bold",
  textAlign: "center",
  color: "#fff",
  borderBottom: "2px solid #fff", // Optional: Add border for a clean look
});

const LogoWrapper = styled("div")({
  padding: "20px",
  textAlign: "center",
});

const ListItemWrapper = styled(ListItem)({
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)", // Hover effect with a slight white background
    cursor: "pointer",
  },
});

const BottomSection = styled("div")({
  marginTop: "auto", // Push this section to the bottom
  padding: "20px",
  textAlign: "center",
  borderTop: "1px solid rgba(255, 255, 255, 0.2)", // Divider for separation
});

// Styled version of the anchor tag to remove default link styles
const HelpDocsLink = styled("a")({
  color: "#fff", // White text color for the link
  textDecoration: "none", // Remove underline
  "&:hover": {
    color: "rgba(255, 255, 255, 0.7)", // Slightly dim on hover to stand out
  },
});

const Sidebar = () => {
  return (
    <SidebarWrapper variant="permanent" anchor="left">
      <LogoWrapper>
        <img
          src="logo.png" // Change this URL to your image's URL
          alt="RobinSphere Logo"
          style={{ width: "80%", maxWidth: "150px", marginBottom: "5px",  }} // Adjust size as needed
        />
      </LogoWrapper>
      <Logo>RobinSphere</Logo>
      <List>
        <ListItemWrapper button>
          <Home />
          <ListItemText primary="Dashboard" />
        </ListItemWrapper>
        <ListItemWrapper button>
          <People />
          <ListItemText primary="Accounts" />
        </ListItemWrapper>
        <ListItemWrapper button>
          <AccountCircle />
          <ListItemText primary="Intercom" />
        </ListItemWrapper>
        <ListItemWrapper button>
          <Settings />
          <ListItemText primary="Settings" />
        </ListItemWrapper>
      </List>
      <Divider />
      <BottomSection>
        <ListItemWrapper button>
          <HelpDocsLink href="https://support.robinpowered.com/hc/en-us" target="_blank" rel="noopener noreferrer">
            <Help />
            <ListItemText primary="Help Docs" />
          </HelpDocsLink>
        </ListItemWrapper>
      </BottomSection>
    </SidebarWrapper>
  );
};

export default Sidebar;

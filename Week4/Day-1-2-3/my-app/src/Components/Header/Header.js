import React from "react";
import Logo from "../../assets/logos/Logo.png";
import { useState, useEffect } from "react";
import {
  Avatar,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@mui/material";

import MenuLogo from "../../assets/logos/menu.png";
import NavMenu from "./NavMenu/NavMenu";
import CloseIcon from "@mui/icons-material/Close";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const drawer = document.querySelector(".MuiDrawer-root");
    if (drawer) {
      // Remove aria-hidden and manage inert dynamically
      if (open) {
        drawer.removeAttribute("aria-hidden");
        drawer.removeAttribute("inert");
      } else {
        drawer.setAttribute("inert", "");
      }
    }
  }, [drawerOpen]);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        p: 2,
        backgroundColor: "#051139",
      }}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ alignSelf: "flex-end", mb: 2 }}
      >
        <CloseIcon
          sx={{
            color: "#fff",
          }}
        />
      </IconButton>
      <List>
        {["Home", "NFT", "Roadmap", "About Us", "Contact Us", "Pages"].map(
          (text) => (
            <ListItem button={"true"} key={text}>
              <ListItemText primary={text} color="black" />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );
  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{ zIndex: "1" }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            py: "16px",
            px: { xs: 0, sm: 0, md: 0, lg: 0, xl: 0, "2xl": 0 },
          }}
        >
          <Box display={"flex"} alignItems={"center"} gap={5}>
            <Box
              display={"flex"}
              alignItems={"center"}
              gap={{ xs: "8px", "2xl": 2 }}
            >
              <Avatar
                src={Logo}
                sx={{
                  height: { xs: "32px", sm: "32px", md: "40px", "2xl": "48px" },
                  width: { xs: "32px", sm: "32px", md: "40px", "2xl": "48px" },
                }}
              />
              <Typography
                fontSize={{ xs: "16px", sm: "16px", md: "24px", "2xl": "32px" }}
                lineHeight={{
                  xs: "32px",
                  sm: "32px",
                  md: "40px",
                  "2xl": "48px",
                }}
                fontWeight={"bold"}
                sx={{
                  textTransform: "uppercase",
                }}
              >
                Yorfy
              </Typography>
            </Box>
            <NavMenu />
          </Box>
          <Box
            display={"flex"}
            gap={{ xs: "16px", "2xl": "24px" }}
            alignItems={"center"}
          >
            <Avatar
              onClick={toggleDrawer(true)}
              src={MenuLogo}
              sx={{
                height: "24px",
                width: "24px",
                display: {
                  xs: "block",
                  sm: "block",
                  md: "block",
                  lg: "block",
                  xl: "none",
                },
              }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: { xs: "14px", "2xl": "16px" },
                lineHeight: { xs: "24px" },
                fontWeight: "semiBold",
                py: { xs: "8px", "2xl": "10px" },
                px: { xs: "32px" },
              }}
            >
              Join Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{ keepMounted: true }} // Improves performance on mobile
        sx={{
          "& .MuiDrawer-paper": {
            width: { xs: "60vw", md: "40vw" }, // Set drawer width to 40% of the screen width
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}

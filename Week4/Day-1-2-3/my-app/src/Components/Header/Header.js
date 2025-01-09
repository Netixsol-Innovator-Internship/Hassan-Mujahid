import React from "react";
import Logo from "../../assets/logos/Logo.png";
import {
  Avatar,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Box,
  Button,
} from "@mui/material";

import MenuLogo from "../../assets/logos/menu.png";

export default function Header() {
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
            px: "0",
          }}
        >
          <Box display={"flex"} gap={{ xs: "8px" }}>
            <Avatar
              src={Logo}
              sx={{ height: { xs: "32px" }, width: { xs: "32px" } }}
            />
            <Typography
              fontSize={"16px"}
              lineHeight={"32px"}
              fontWeight={"bold"}
              sx={{
                textTransform: "uppercase",
              }}
            >
              Yorfy
            </Typography>
          </Box>
          <Box display={"flex"} gap={{ xs: "16px" }} alignItems={"center"}>
            <Avatar src={MenuLogo} sx={{ height: "24px", width: "24px" }} />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                fontSize: { xs: "14px" },
                fontWeight: "600",
                lineHeight: { xs: "24px" },
                py: { xs: "8px" },
                px: { xs: "32px" },
              }}
            >
              Join Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

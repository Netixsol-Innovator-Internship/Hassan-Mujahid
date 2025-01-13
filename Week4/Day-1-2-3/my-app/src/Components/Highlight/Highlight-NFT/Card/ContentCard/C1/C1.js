import { Typography, Avatar, Box } from "@mui/material";
import React from "react";
import Logo from "../../../../../../assets/logos/Logo.png";

export default function C1() {
  return (
    <Box
      sx={{
        display: "flex", // Ensure this is a flex container
        flexDirection: "column",
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "flex-start",
          xl: "center",
        }, // Horizontal alignment
        alignItems: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-start",
          lg: "flex-start",
          xl: "center",
        }, // Vertical alignment
        gap: { xs: 1, sm: 1, md: 2 },
      }}
    >
      <Avatar
        src={Logo}
        sx={{
          width: { xs: "48px", sm: "48px", md: "80px" },
          height: { xs: "48px", sm: "48px", md: "80px" },
        }}
      />

      <Typography
        variant="h5"
        fontWeight={"bold"}
        fontSize={{ xs: "24px", xl: "40px" }}
        lineHeight={{ xs: "40px", xl: "56px" }}
        textAlign={{ xl: "center" }}
      >
        YorEyes #234
      </Typography>
      <Typography
        variant="body1"
        fontSize={"16px"}
        lineHeight={"32px"}
        color="text.disabled"
        textAlign={{ xl: "center" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
}

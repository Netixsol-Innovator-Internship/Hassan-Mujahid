import { Typography, Avatar, Box } from "@mui/material";
import React from "react";
import Logo from "../../../../../../assets/logos/Logo.png";

export default function C1() {
  return (
    <Box
      sx={{
        display: "flex", // Ensure this is a flex container
        flexDirection: "column",
        justifyContent: "flex-start", // Horizontal alignment
        alignItems: "flex-start", // Vertical alignment
        gap: 1,
      }}
    >
      <Avatar
        src={Logo}
        sx={{
          width: "48px",
          height: "48px",
        }}
      />

      <Typography
        variant="h5"
        fontWeight={"bold"}
        fontSize={"24px"}
        lineHeight="40px"
      >
        YorEyes #234
      </Typography>
      <Typography
        variant="body1"
        fontSize={"16px"}
        lineHeight={"32px"}
        color="text.disabled"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
}

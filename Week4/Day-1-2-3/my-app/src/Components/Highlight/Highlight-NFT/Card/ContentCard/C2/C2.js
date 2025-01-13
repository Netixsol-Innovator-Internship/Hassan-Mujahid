import { Typography, Box, Button } from "@mui/material";
import React from "react";

export default function C2() {
  return (
    <Box
      sx={{
        display: "flex", // Ensure this is a flex container
        flexDirection: "column",
        justifyContent: "flex-start", // Horizontal alignment
        alignItems: "flex-start", // Vertical alignment
        gap: { xs: 1, sm: 1, md: 2 },
        width: "272px",
      }}
    >
      <Typography
        variant="h5"
        fontWeight={"bold"}
        fontSize={{ xs: "24px", xl: "40px" }}
        lineHeight={{ xs: "40px", xl: "56px" }}
        textAlign={{ xl: "center" }}
      >
        Interesting with This Item?
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
      <Button
        fullWidth={{ xs: true, sm: true, md: false }}
        variant="contained"
        sx={{
          textTransform: "none",
          fontSize: "16px",
          lineHeight: "32px",
          px: "40px",
          py: "8px",
          borderRadius: "8px",
        }}
      >
        Buy an OpenSea
      </Button>
    </Box>
  );
}

import React from "react";
import { Box, Button } from "@mui/material";
import User from "./User/User";
import Heading from "./Heading/Heading";

export default function Community() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <Box display={"flex"} flexDirection={"column"} gap={2}>
        <User />
      </Box>
      <Heading />
      <Button
        variant="contained"
        sx={{
          textTransform: "none",
          fontSize: "16px",
          lineHeight: "32px",
          fontWeight: "semiBold",
          py: "8px",
          px: "40px",
        }}
      >
        Join Our Discord
      </Button>
    </Box>
  );
}

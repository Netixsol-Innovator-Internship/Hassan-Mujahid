import React from "react";
import Heading from "./Heading/Heading";
import Logo from "./Logo/Logo";
import { Box } from "@mui/material";

export default function Collaboration() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={"24px"}>
      <Heading />
      <Logo />
    </Box>
  );
}

import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Heading() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Typography
        variant="h6"
        fontWeight={"bold"}
        fontSize={"16px"}
        lineHeight={"32px"}
        textAlign={"center"}
        color="#5699FF"
      >
        Community
      </Typography>
      <Typography
        variant={"h4"}
        fontSize={"32px"}
        lineHeight={"48px"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Join Our Community and Get Many Benefits
      </Typography>
      <Typography
        fontSize={"16px"}
        lineHeight={"32px"}
        textAlign={"center"}
        color="text.disabled"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </Box>
  );
}

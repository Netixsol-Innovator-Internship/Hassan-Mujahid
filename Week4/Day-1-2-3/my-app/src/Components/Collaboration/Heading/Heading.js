import React from "react";
import { Box, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={1}>
      <Typography
        fontSize={"16px"}
        lineHeight={"32px"}
        fontWeight={"bold"}
        textAlign={"center"}
        color="#5699FF"
      >
        Collaboration
      </Typography>
      <Typography
        variant="h4"
        fontSize={"32px"}
        lineHeight={"48px"}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Our Partners
      </Typography>
    </Box>
  );
}

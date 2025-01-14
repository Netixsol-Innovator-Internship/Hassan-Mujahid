import React from "react";
import { Box, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={{ xs: 1, sm: 1, md: 2 }}
    >
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
        fontSize={{ xs: "32px", xl: "56px" }}
        lineHeight={{ xs: "48px", xl: "72px" }}
        textAlign={"center"}
        fontWeight={"bold"}
      >
        Our Partners
      </Typography>
    </Box>
  );
}

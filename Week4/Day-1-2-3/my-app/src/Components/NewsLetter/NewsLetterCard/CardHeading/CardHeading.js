import React from "react";
import { Box, Typography } from "@mui/material";

export default function CardHeading() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={{ xs: 1, sm: 1, md: 2 }}
      maxWidth={{ xl: "752px" }}
    >
      <Typography
        variant="h6"
        fontSize={"16px"}
        lineHeight={"32px"}
        textAlign={"center"}
        fontWeight={"bold"}
        color="#5699FF"
      >
        Newsletter
      </Typography>
      <Typography
        variant="h4"
        fontSize={{ xs: "32px", xl: "56px" }}
        lineHeight={{ xs: "48px", xl: "72px" }}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        You Do Not Want to Miss Out on this!
      </Typography>
      <Typography
        variant="body1"
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

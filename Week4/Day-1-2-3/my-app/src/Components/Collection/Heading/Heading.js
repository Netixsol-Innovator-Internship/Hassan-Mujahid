import React from "react";
import { Box, Typography } from "@mui/material";

export default function Heading() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={{ xs: 1, xl: 2 }}
      width={"100%"}
      maxWidth={{ md: "664px", xl: "756px" }}
    >
      <Typography
        varaiant="h6"
        color="#5699FF"
        fontSize={"16px"}
        lineHeight={"32px"}
        fontWeight={"bold"}
        textAlign={"center"}
      >
        Collection
      </Typography>
      <Typography
        fontWeight={"bold"}
        fontSize={{ xs: "32px", xl: "56px" }}
        lineHeight={{ xs: "48px", xl: "72px" }}
        textAlign={"center"}
      >
        Yorfy NFT Collections
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

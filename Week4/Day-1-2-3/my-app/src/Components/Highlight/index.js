import React from "react";
import Heading from "./Heading/Heading";
import { Container, Box } from "@mui/material";
import HighlightNFT from "./Highlight-NFT";

export default function Highlight() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      flexDirection={"column"}
      gap={"8px"}
    >
      <Heading />
      <HighlightNFT />
    </Box>
  );
}

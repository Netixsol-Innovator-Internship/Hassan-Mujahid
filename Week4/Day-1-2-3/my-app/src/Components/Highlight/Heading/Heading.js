import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Heading() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      width={"100%"}
      flexDirection={"column"}
      gap={"8px"}
    >
      <Typography
        fontWeight={"bold"}
        fontSize={"16px"}
        lineHeight={"32px"}
        color="#5699FF"
      >
        Featured
      </Typography>
      <Typography
        variant="h4"
        fontWeight={"bold"}
        fontSize={"32px"}
        lineHeight={"48px"}
        textAlign={"center"}
      >
        Hot Trending On This Week from Yorfy
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

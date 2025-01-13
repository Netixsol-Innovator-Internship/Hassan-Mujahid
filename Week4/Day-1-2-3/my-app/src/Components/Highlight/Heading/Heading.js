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
      maxWidth={{ md: "664px", xl: "756px" }}
      gap={{ xs: 1, sm: 1, md: 2 }}
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
        fontSize={{
          xs: "32px",
          sm: "32px",
          md: "32px",
          lg: "32px",
          xl: "56px",
        }}
        lineHeight={{
          xs: "48px",
          sm: "48px",
          md: "48px",
          lg: "48px",
          xl: "72px",
        }}
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

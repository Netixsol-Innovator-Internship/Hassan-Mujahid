import React from "react";
import { Typography } from "@mui/material";

export default function Heading() {
  return (
    <>
      <Typography
        variant="h6"
        fontSize={{ xs: "16px" }}
        lineHeight={{ xs: "32px" }}
        color="#5699FF"
        fontWeight="bold"
      >
        Welcome to Yorfy
      </Typography>
      <Typography
        variant="h3"
        fontWeight="bold"
        fontSize={{
          xs: "40px",
          sm: "40px",
          md: "40px",
          lg: "56px",
          xl: "64px",
          "2xl": "72px",
        }}
        lineHeight={{
          xs: "56px",
          sm: "56px",
          md: "56px",
          lg: "72px",
          xl: "80px",
          "2xl": "88px",
        }}
      >
        Now Available, Meet Yorfy NFT Collection ⭐️
      </Typography>
      <Typography
        component="p"
        variant="body1"
        color="text.disabled"
        fontSize={{ xs: "16px", "2xl": "20px" }}
        lineHeight={{ xs: "32px", "2xl": "40px" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </Typography>
    </>
  );
}

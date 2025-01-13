import React from "react";
import { Box, Typography, Button } from "@mui/material";

export default function Heading() {
  return (
    <Box
      display="flex"
      justifyContent={{ xs: "center", xl: "start" }}
      width={{ xl: "100%" }}
    >
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          maxWidth: { md: "664px" },
        }}
        gap={{ xs: 1, sm: 1, md: 2 }}
      >
        <Typography
          variant="h6"
          fontWeight={"bold"}
          fontSize={"16px"}
          lineHeight={"32px"}
          textAlign={{ xs: "center", xl: "start" }}
          color="#5699FF"
        >
          Community
        </Typography>
        <Typography
          variant={"h4"}
          fontSize={{ xs: "32px", xl: "56px" }}
          lineHeight={{ xs: "48px", xl: "72px" }}
          fontWeight={"bold"}
          textAlign={{ xs: "center", xl: "start" }}
        >
          Join Our Community and Get Many Benefits
        </Typography>
        <Typography
          fontSize={"16px"}
          lineHeight={"32px"}
          textAlign={{ xs: "center", xl: "start" }}
          color="text.disabled"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Typography>
      </Box>
    </Box>
  );
}

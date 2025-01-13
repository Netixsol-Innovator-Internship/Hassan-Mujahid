import React from "react";
import { Box, Typography } from "@mui/material";
import Upto40 from "../../assets/images/Up-to-40%.png";

export default function sale() {
  return (
    <Box
      width={"100%"}
      height={"80px"}
      display={"flex"}
      justifyContent={"space-around"}
      alignItems={"center"}
      sx={{
        backgroundColor: "#AA00FF",
        zIndex: "1",
      }}
    >
      <Typography
        variant="h6"
        fontSize={{
          xs: "16px",
          sm: "16px",
          md: "16px",
          lg: "16px",
          xl: "32px",
        }}
        lineHeight={{
          xs: "32px",
          sm: "32px",
          md: "32px",
          lg: "32px",
          xl: "48px",
        }}
        align="ceneter"
        fontWeight={"bold"}
      >
        Discount Sale
      </Typography>
      <Box component={"img"} src={Upto40} height={{ xl: "32px" }}></Box>
      <Typography
        variant="h6"
        fontSize={{
          xs: "16px",
          sm: "16px",
          md: "16px",
          lg: "16px",
          xl: "32px",
        }}
        lineHeight={{
          xs: "32px",
          sm: "32px",
          md: "32px",
          lg: "32px",
          xl: "48px",
        }}
        align="ceneter"
        fontWeight={"bold"}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      >
        Discount Sale
      </Typography>
      <Box
        component={"img"}
        src={Upto40}
        height={{ xl: "32px" }}
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      ></Box>
    </Box>
  );
}

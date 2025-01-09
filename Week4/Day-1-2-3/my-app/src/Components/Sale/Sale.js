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
      }}
    >
      <Typography
        variant="h6"
        fontSize="16px"
        lineHeight="32px"
        align="ceneter"
        fontWeight={"bold"}
      >
        Discount Sale
      </Typography>
      <Box
        component={"img"}
        src={Upto40}
        fontSize={"16px"}
        lineHeight={"32px"}
      ></Box>
    </Box>
  );
}

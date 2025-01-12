import React from "react";
import { Avatar, Box, Typography } from "@mui/material";
import Logo1 from "../../../assets/logos/Logo.png";

export default function Top() {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <Box display={"flex"} gap={1}>
        <Avatar src={Logo1} sx={{ width: "32px", height: "32px" }} />
        <Typography
          variant="h6"
          fontSize={"16px"}
          fontWeight={"bold"}
          lineHeight={"32px"}
          textTransform={"uppercase"}
        >
          yorfy
        </Typography>
      </Box>
      <Box display={"flex"} gap={1}>
        <Typography
          border={"1px solid white"}
          fontSize={"12px"}
          lineHeight={"32px"}
          height={"32px"}
          width={"32px"}
          p={"4px"}
          borderRadius={"100%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Fb
        </Typography>
        <Typography
          border={"1px solid white"}
          fontSize={"12px"}
          lineHeight={"32px"}
          height={"32px"}
          width={"32px"}
          p={"4px"}
          borderRadius={"100%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Ig
        </Typography>
        <Typography
          border={"1px solid white"}
          fontSize={"12px"}
          lineHeight={"32px"}
          height={"32px"}
          width={"32px"}
          p={"4px"}
          borderRadius={"100%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Li
        </Typography>
        <Typography
          border={"1px solid white"}
          fontSize={"12px"}
          lineHeight={"32px"}
          height={"32px"}
          width={"32px"}
          p={"4px"}
          borderRadius={"100%"}
          textAlign={"center"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          Yt
        </Typography>
      </Box>
    </Box>
  );
}

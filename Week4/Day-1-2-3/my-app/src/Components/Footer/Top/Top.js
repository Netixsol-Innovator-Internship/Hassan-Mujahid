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
      <Box display={"flex"} alignItems={"center"} gap={1}>
        <Avatar
          src={Logo1}
          sx={{
            width: { xs: "32px", sm: "32px", md: "40px" },
            height: { xs: "32px", sm: "32px", md: "40px" },
          }}
        />
        <Typography
          variant="h6"
          fontSize={{ xs: "16px", sm: "16px", md: "24px" }}
          fontWeight={"bold"}
          lineHeight={{ xs: "32px", sm: "32px", md: "40px" }}
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
          height={{ xs: "32px", sm: "32px", md: "40px" }}
          width={{ xs: "32px", sm: "32px", md: "40px" }}
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
          height={{ xs: "32px", sm: "32px", md: "40px" }}
          width={{ xs: "32px", sm: "32px", md: "40px" }}
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
          height={{ xs: "32px", sm: "32px", md: "40px" }}
          width={{ xs: "32px", sm: "32px", md: "40px" }}
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
          height={{ xs: "32px", sm: "32px", md: "40px" }}
          width={{ xs: "32px", sm: "32px", md: "40px" }}
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

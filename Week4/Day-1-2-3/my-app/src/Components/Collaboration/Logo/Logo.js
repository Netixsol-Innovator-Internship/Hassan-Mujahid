import React from "react";
import { Box } from "@mui/material";
import Logo1 from "../../../assets/logos/Logo-1.png";
import Logo2 from "../../../assets/logos/Logo-2.png";
import Logo3 from "../../../assets/logos/Logo-3.png";
import Logo4 from "../../../assets/logos/Logo-4.png";

export default function Logo() {
  return (
    <Box
      display={"flex"}
      flexWrap={"wrap"}
      gap={3}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"img"} src={Logo1} width={"120px"} height={"24px"}></Box>
      <Box component={"img"} src={Logo2} width={"128px"} height={"24px"}></Box>
      <Box component={"img"} src={Logo3} width={"136px"} height={"24px"}></Box>
      <Box component={"img"} src={Logo4} width={"96px"} height={"24px"}></Box>
    </Box>
  );
}

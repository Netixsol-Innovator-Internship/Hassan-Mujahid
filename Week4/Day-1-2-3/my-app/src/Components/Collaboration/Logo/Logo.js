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
      gap={{ xs: 3, sm: 3, md: "58px" }}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        component={"img"}
        src={Logo1}
        width={{ xs: "120px", sm: "120px", md: "240px" }}
        height={{ xs: "24px", sm: "24px", md: "48px" }}
      ></Box>
      <Box
        component={"img"}
        src={Logo2}
        width={{ xs: "128px", sm: "128px", md: "256px" }}
        height={{ xs: "24px", sm: "24px", md: "48px" }}
      ></Box>
      <Box
        component={"img"}
        src={Logo3}
        width={{ xs: "136px", sm: "136px", md: "272px" }}
        height={{ xs: "24px", sm: "24px", md: "48px" }}
      ></Box>
      <Box
        component={"img"}
        src={Logo4}
        width={{ xs: "96px", sm: "96px", md: "192px" }}
        height={{ xs: "24px", sm: "24px", md: "48px" }}
      ></Box>
    </Box>
  );
}

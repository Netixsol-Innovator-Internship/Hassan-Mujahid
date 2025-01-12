import React from "react";
import { Box, Typography } from "@mui/material";

export default function mileStone() {
  return (
    <Box
      display={"grid"}
      maxWidth={{ md: "300px" }}
      gridTemplateColumns="repeat(12, 1fr)"
    >
      <Box
        gridColumn="span 4"
        display={"flex"}
        // alignItems={"center"}
        flexDirection={"column"}
        borderRight={"1px solid #EBEBEB"}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          fontSize={{ xs: "32px", sm: "32px", md: "40px" }}
          lineHeight={{ xs: "48px", sm: "48px", md: "56px" }}
        >
          546
        </Typography>
        <Typography
          fontSize={{ xs: "12px", sm: "12px", md: "16px" }}
          lineHeight={"24px"}
          color="text.disabled"
        >
          NFT Items
        </Typography>
      </Box>
      <Box
        gridColumn="span 4"
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        borderRight={"1px solid #EBEBEB"}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          fontSize={{ xs: "32px", sm: "32px", md: "40px" }}
          lineHeight={{ xs: "48px", sm: "48px", md: "56px" }}
        >
          42
        </Typography>
        <Typography
          fontSize={{ xs: "12px", sm: "12px", md: "16px" }}
          lineHeight={"24px"}
          color="text.disabled"
        >
          Owners
        </Typography>
      </Box>
      <Box
        gridColumn="span 4"
        display={"flex"}
        alignItems={"end"}
        flexDirection={"column"}
      >
        <Typography
          variant="h4"
          fontWeight={"bold"}
          fontSize={{ xs: "32px", sm: "32px", md: "40px" }}
          lineHeight={{ xs: "48px", sm: "48px", md: "56px" }}
        >
          378
        </Typography>
        <Typography
          fontSize={{ xs: "12px", sm: "12px", md: "16px" }}
          lineHeight={"24px"}
          color="text.disabled"
        >
          Items Sold
        </Typography>
      </Box>
    </Box>
  );
}

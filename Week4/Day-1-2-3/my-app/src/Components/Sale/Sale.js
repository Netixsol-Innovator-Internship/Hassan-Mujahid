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
      gap={2}
      sx={{
        backgroundColor: "#AA00FF",
        zIndex: "1",
        overflowX: "auto",
        whiteSpace: "nowrap",
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
        textAlign={"center"}
        noWrap
        minWidth={{ xs: "156px", xl: "auto" }}
        fontWeight={"bold"}
      >
        Discount Sale
      </Typography>
      <Box
        component={"img"}
        src={Upto40}
        height={{ xs: "16px", xl: "32px" }}
      ></Box>
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
        textAlign={"center"}
        noWrap
        minWidth={{ xs: "156px", xl: "auto" }}
        fontWeight={"bold"}
        sx={
          {
            // display: { xs: "none", sm: "none", md: "block" },
          }
        }
      >
        Discount Sale
      </Typography>
      <Box
        component={"img"}
        src={Upto40}
        height={{ xs: "16px", xl: "32px" }}
        width={"auto"}
        sx={{
          // display: { xs: "none", sm: "none", md: "block" },
          objectFit: "contain",
          imageRendering: "auto",
          borderRadius: "4px",
        }}
      ></Box>
    </Box>
  );
}

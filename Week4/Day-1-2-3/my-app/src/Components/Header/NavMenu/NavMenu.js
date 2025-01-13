import React from "react";
import { Box, BottomNavigation, IconButton } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function NavMenu() {
  return (
    <Box
      component={"nav"}
      display={{ xs: "none", sm: "none", md: "none", lg: "none", xl: "flex" }}
      gap={3}
    >
      <Box
        display={"flex"}
        alignItems={"center"}
        sx={{
          cursor: "pointer",
          "&:hover": {
            "& button svg": {
              color: "#fff",
            },
          },
        }}
      >
        <Box
          component={"p"}
          color={"text.disabled"}
          fontSize={{ xs: "14px", "2xl": "16px" }}
          lineHeight={"24px"}
          sx={{
            "&:hover": {
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        >
          Home
        </Box>
        <IconButton>
          <ArrowDropDownIcon sx={{ color: "text.disabled" }} />
        </IconButton>
      </Box>
      <Box
        component={"p"}
        color={"text.disabled"}
        fontSize={{ xs: "14px", "2xl": "16px" }}
        lineHeight={"24px"}
        sx={{
          "&:hover": {
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          },
        }}
      >
        NFT
      </Box>
      <Box
        component={"p"}
        color={"text.disabled"}
        fontSize={{ xs: "14px", "2xl": "16px" }}
        lineHeight={"24px"}
        sx={{
          "&:hover": {
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          },
        }}
      >
        Roadmap
      </Box>
      <Box
        component={"p"}
        color={"text.disabled"}
        fontSize={{ xs: "14px", "2xl": "16px" }}
        lineHeight={"24px"}
        sx={{
          "&:hover": {
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          },
        }}
      >
        About Us
      </Box>
      <Box
        component={"p"}
        color={"text.disabled"}
        fontSize={{ xs: "14px", "2xl": "16px" }}
        lineHeight={"24px"}
        sx={{
          "&:hover": {
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
          },
        }}
      >
        Contact Us
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        gap={0}
        sx={{
          cursor: "pointer",
        }}
      >
        <Box
          component={"p"}
          color={"text.disabled"}
          fontSize={{ xs: "14px", "2xl": "16px" }}
          lineHeight={"24px"}
          sx={{
            "&:hover": {
              color: "#fff",
              fontWeight: "bold",
            },
          }}
        >
          Pages
        </Box>
        <IconButton>
          <ArrowDropDownIcon sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}

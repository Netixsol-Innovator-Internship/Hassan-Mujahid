import React from "react";
import { Box, useTheme } from "@mui/material";
import BgDesktop from "../assets/images/bg-header-desktop.svg";
import BgMobile from "../assets/images/bg-header-mobile.svg";

const BackgroundSection = ({ imageUrl, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        // height: "auto", // Adjust the height as needed
        backgroundImage: { xs: `url(${BgMobile})`, lg: `url(${BgDesktop})` },
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.primary.main, // Background color based on theme
        paddingTop: {
          xs: "calc(100% * (156 / 375))",
          "mb-xl": "180px",
          lg: "calc(62% * (256 / 1440))",
        },

        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: theme.palette.background.overlay,
          zIndex: 1,
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: theme.palette.primary.contrastText, // Text color based on theme
        zIndex: 2,
      }}
    >
      <Box sx={{ position: "relative", zIndex: 3 }}>{children}</Box>
    </Box>
  );
};

export default BackgroundSection;

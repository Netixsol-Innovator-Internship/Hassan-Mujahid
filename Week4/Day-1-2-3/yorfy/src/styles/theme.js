import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1E50FF", // Purple
    },
    secondary: {
      main: "#FF4081", // Pink
    },
    background: {
      default: "#051139", // Dark blue
      // paper: "#121212",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#A0A0A0",
    },
  },
  typography: {
    fontFamily: "Poppins , sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

export default theme;

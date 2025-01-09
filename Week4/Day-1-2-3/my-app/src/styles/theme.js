import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    text: {
      primary: "#fFF",
      disabled: "#EBEBEB",
    },
    background: {
      default: "#051139",
    },
  },
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "#1E50FF",
          color: "#fff",
          "&:hover": {
            background: "#1833cc",
          },
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
    },
  },
});

export default theme;

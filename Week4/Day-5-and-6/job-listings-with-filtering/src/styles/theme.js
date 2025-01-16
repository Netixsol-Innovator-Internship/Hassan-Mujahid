import { colors, createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "hsl(180, 29%, 50%)", // Desaturated Dark Cyan
    },
    background: {
      default: "hsl(180, 52%, 96%)", // Light Grayish Cyan (Background)
    },
    custom: {
      filterTablets: "hsl(180, 31%, 95%)", // Light Grayish Cyan (Filter Tablets)
      darkGrayishCyan: "hsl(180, 8%, 52%)",
      veryDarkGrayishCyan: "hsl(180, 14%, 20%)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          background: "hsl(180, 31%, 95%)",
          color: "hsl(180, 29%, 50%)",
          fontSize: "15px",
          fontWeight: 700,
          p: "4px",
          "&:hover": {
            background: "hsl(180, 29%, 50%)",
            color: "hsl(180, 31%, 95%)",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: "League Spartan, sans-serif",
  },

  breakpoints: {
    values: {
      xs: 0,
      "mb-xl": 433,
      sm: 600,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1536,
      "3xl": 1920,
    },
  },
});

export default theme;

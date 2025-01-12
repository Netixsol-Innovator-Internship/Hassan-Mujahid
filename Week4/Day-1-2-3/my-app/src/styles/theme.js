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
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#fff",
            },
            "&:hover fieldset": {
              borderColor: "#fff",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#fff",
            },
          },
          "& .MuiInputBase-input": {
            color: "#fff",
            "&::placeholder": {
              color: "#fff", // Placeholder text color
              opacity: 1, // Ensure it doesn't become transparent
            },
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

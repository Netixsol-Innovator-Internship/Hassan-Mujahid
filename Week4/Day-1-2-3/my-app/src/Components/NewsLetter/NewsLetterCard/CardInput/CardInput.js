import React from "react";
import { TextField, Box, Button } from "@mui/material";

export default function CardInput() {
  return (
    <Box display={"flex"} flexDirection={"column"} gap={2}>
      <TextField
        variant="outlined"
        placeholder="Your Email"
        fullWidth
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "8px",
            py: "8px",
            px: "16px",
            "& fieldset": {
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": {
              p: "8px 0px",
            },
          },
        }}
      />
      <Button
        variant="contained"
        fullWidth
        sx={{
          py: "8px",
          px: "40px",
          fontSize: "16px",
          lineHeight: "32px",
          fontWeight: "semiBold",
          borderRadius: "8px",
        }}
      >
        Submit
      </Button>
    </Box>
  );
}

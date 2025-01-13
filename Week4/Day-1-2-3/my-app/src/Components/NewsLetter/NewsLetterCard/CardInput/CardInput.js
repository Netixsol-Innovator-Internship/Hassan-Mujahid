import React from "react";
import { TextField, Box, Button } from "@mui/material";

export default function CardInput() {
  return (
    <Box
      sx={{
        width: { xl: "635px" },
      }}
    >
      <Box
        display={"flex"}
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        alignItems={"center"}
        gap={2}
      >
        <TextField
          variant="outlined"
          placeholder="Your Email"
          sx={{
            width: { xs: "100%", sm: "100%", md: "72%", xl: "100%" },
            "& .MuiOutlinedInput-root": {
              borderRadius: "8px",
              py: "8px",
              px: "16px",
              "& fieldset": {
                borderRadius: "8px",
              },
              "& .MuiInputBase-input": {
                p: "6px 0px",
              },
            },
          }}
        />
        <Button
          variant="contained"
          sx={{
            width: { xs: "100%", sm: "100%", md: "auto" },
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
    </Box>
  );
}

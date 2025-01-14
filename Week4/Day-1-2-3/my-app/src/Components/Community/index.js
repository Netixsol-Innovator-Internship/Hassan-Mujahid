import React from "react";
import { Box, Button } from "@mui/material";
import User from "./User/User";
import Heading from "./Heading/Heading";

export default function Community() {
  return (
    <Box
      display={"flex"}
      flexDirection={{ xs: "column", xl: "row-reverse" }}
      gap={{ xs: 2, sm: 2, md: 3 }}
    >
      <Box
        display={"flex"}
        justifyContent={{ xs: "center", xl: "end" }}
        width={"100%"}
      >
        <Box
          display={"flex"}
          width={{ xs: "80%", xl: "auto" }}
          flexDirection={"column"}
          gap={2}
          sx={{
            position: "relative",
            height: { md: "296px" },
          }}
        >
          <User />
        </Box>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={{ xs: 2, md: 3 }}
        sx={{
          minWidth: { xl: "656px" },
        }}
      >
        <Heading />
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={{ xs: "center", xl: "start" }}
        >
          <Button
            fullWidth={{ xs: true, sm: true, md: false }}
            variant="contained"
            sx={{
              textTransform: "none",
              fontSize: "16px",
              lineHeight: "32px",
              fontWeight: "semiBold",
              py: "8px",
              px: "40px",
              borderRadius: "8px",
            }}
          >
            Join Our Discord
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

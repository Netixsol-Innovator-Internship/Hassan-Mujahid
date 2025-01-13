import React from "react";
import { Grid2, Box, Container, Button } from "@mui/material";
import Heading from "./Heading/Heading";
import NFT from "./NFT/NFT";

export default function Collection() {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      alignItems={"center"}
      gap={{ xs: 2, xl: 5 }}
    >
      <Heading />
      <Grid2
        container
        spacing={2}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NFT />
      </Grid2>
      <Button
        variant="outlined"
        fullWidth={{ xs: true, sm: true, md: false }}
        color="white"
        sx={{
          textTransform: "none",
          fontSize: "16px",
          lineHeight: "32px",
          fontWeight: "semiBold",
          borderRadius: "8px",
          py: "8px",
          px: "40px",
        }}
      >
        View an OpenSea
      </Button>
    </Box>
  );
}

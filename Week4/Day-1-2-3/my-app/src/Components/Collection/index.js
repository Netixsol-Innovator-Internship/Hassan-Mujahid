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
      gap={"16px"}
    >
      <Heading />
      <Grid2
        container
        spacing={2}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <NFT />
      </Grid2>
      <Button
        variant="outlined"
        fullWidth
        color="white"
        sx={{
          fontSize: "16px",
          lineHeight: "32px",
          fontWeight: "semiBold",
          borderRadius: "8px",
        }}
      >
        View an OpenSea
      </Button>
    </Box>
  );
}

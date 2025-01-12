import React from "react";
import { Card, Grid2 } from "@mui/material";
import ImageCard from "./ImageCard/ImageCard";
import C1 from "./ContentCard/C1/C1";
import C2 from "./ContentCard/C2/C2";

export default function HighlightCard() {
  return (
    <Card
      sx={{
        backgroundColor: "#081956",
        py: { xs: "24px" },
        px: { xs: "16px" },
        borderRadius: "16px",
      }}
    >
      <Grid2
        container
        spacing={4}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={{ xs: "column", md: "row" }}
      >
        <Grid2
          xs={12}
          sm={6}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
          width="272px"
          sx={{
            order: { xs: 2, sm: 2, md: 2, lg: 1 }, // Move to correct position on screens
          }}
        >
          <C1 />
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          sx={{
            order: { xs: 1, sm: 1, md: 1, lg: 2 }, // Move to correct position on screens
          }}
        >
          <ImageCard />
        </Grid2>
        <Grid2
          xs={12}
          sm={6}
          md={4}
          justifyContent={"center"}
          alignItems={"center"}
          width="272px"
          sx={{
            order: { xs: 3, sm: 3, md: 3, xl: 3 }, // Move to correct position on screens
          }}
        >
          <C2 />
        </Grid2>
      </Grid2>
    </Card>
  );
}

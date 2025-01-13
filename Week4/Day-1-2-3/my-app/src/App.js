import React from "react";
import { CssBaseline, Container, Grid2, Box } from "@mui/material";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/Hero-section";
import { Blur1, Blur2, Blur3, Blur4, Blur5 } from "./Components/Blur/Blur";
import Sale from "./Components/Sale/Sale.js";
import Highlight from "./Components/Highlight/index.js";
import Collection from "./Components/Collection/index.js";
import Community from "./Components/Community/index.js";
import Collaboration from "./Components/Collaboration/index.js";
import NewsLetter from "./Components/NewsLetter/index.js";
import Footer from "./Components/Footer/index.js";

export default function App() {
  return (
    <Box display={"flex"} justifyContent={"center"} width={"100%"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        sx={{
          position: "relative",
          overflowX: "hidden",
          width: "100%",
          height: "100%",
          maxWidth: "1920px",
          px: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" },
        }}
      >
        <CssBaseline />
        <Grid2
          container={true}
          spacing={{ xs: 6, sm: 6, md: 8, xl: 12 }}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={"column"}
        >
          <Container
            maxWidth={"3xl"}
            width={"100%"}
            sx={{
              px: { md: "40px", lg: "40px", xl: "72px" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: 2, sm: 2, md: 3, xl: 5 },
            }}
          >
            <Header />
            <HeroSection />
            <Blur1 />
            <Blur2 />
            <Blur3 />
            <Blur4 />
            <Blur5 />
          </Container>
          <Container
            maxWidth={"3xl"}
            sx={{
              px: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" },
            }}
          >
            <Sale />
          </Container>
          <Container
            maxWidth={"3xl"}
            sx={{
              px: { md: "40px", lg: "40px", xl: "72px" },
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={{ xs: 6, sm: 6, md: 6, lg: 6 }}
            >
              <Highlight />
              <Collection />
              <Community />
            </Box>
          </Container>
          <Container
            maxWidth={"3xl"}
            sx={{
              px: { xs: "0", sm: "0", md: "0", lg: "0", xl: "0", "2xl": "0" },
            }}
          >
            <Sale />
          </Container>
          <Container
            maxWidth={"3xl"}
            sx={{
              px: { md: "40px", lg: "40px", xl: "72px" },
            }}
          >
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={{ xs: 6, xl: 12 }}
            >
              <Collaboration />
              <NewsLetter />
              <Footer />
            </Box>
          </Container>
        </Grid2>
      </Box>
    </Box>
  );
}

import React from "react";
import { Card, Avatar, Box, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function User() {
  const opacityValues = [
    { opacity: 100, top: "", left: "", position: "block" },
    { opacity: 70, top: 104, left: 120, position: "absolute" },
    { opacity: 50, top: 208, left: 240, position: "absolute" },
  ];

  return opacityValues.map((styles) => {
    return (
      <Card
        sx={{
          bgcolor: "#081956",
          width: { xs: "100%", sm: "100%", md: "65%" },
          p: 2,
          borderRadius: "8px",
          boxShadow: "0px 24px 80px 0px #000000CC",
          opacity: `${styles.opacity}%`,
          top: `${styles.top}px`,
          left: `${styles.left}px`,
          position: { xs: "block", sm: "block", md: `${styles.position}` },
        }}
        key={styles.opacity}
      >
        <Box display={"flex"} justifyContent={"space-between"}>
          <Box
            sx={{
              display: "flex",
              gap: "16px",
            }}
          >
            <Box
              sx={{
                bgcolor: "#D9D9D9",
                width: "56px",
                height: "56px",
                borderRadius: "50px",
              }}
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography
                variant="h6"
                fontSize={"16px"}
                lineHeight={"32px"}
                fontWeight={"bold"}
              >
                ShooPharDhie
              </Typography>
              <Typography fontSize={"12px"} fontWeight={"24px"}>
                Last Online 2 Hour Ago
              </Typography>
            </Box>
          </Box>
          <IconButton aria-label="more" size="large">
            <MoreHorizIcon sx={{ color: "white" }} />
          </IconButton>
        </Box>
      </Card>
    );
  });
}

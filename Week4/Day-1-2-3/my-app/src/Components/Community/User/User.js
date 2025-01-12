import React from "react";
import { Card, Avatar, Box, Typography, IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
export default function User() {
  const opacityValues = [100, 70, 50];

  return opacityValues.map((opacity) => {
    return (
      <Card
        sx={{
          bgcolor: "#081956",
          width: "100%",
          p: 2,
          borderRadius: "8px",
          boxShadow: "0px 24px 80px 0px #000000CC",
          opacity: `${opacity}%`,
        }}
        key={opacity}
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

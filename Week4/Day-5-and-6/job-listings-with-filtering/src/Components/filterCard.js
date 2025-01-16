import React from "react";
import { Box, Card, Button } from "@mui/material";
import { useTheme } from "@mui/system";
import useJobStore from "../app/jobStore";

function FilterCard() {
  const theme = useTheme();
  const { filterTags, removeFilterTags, clearFilterTags } = useJobStore();

  return (
    <Card
      sx={{
        width: { xs: "84.5%", sm: "552px", md: "81.8%" },
        padding: "1rem",
        boxShadow: "0px 16px 25px 1px rgba(0,0,0,0.1)",
        display: filterTags.length > 0 ? "block" : "none",
        zIndex: 10,
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        gap={2}
      >
        <Box display={"flex"} flexWrap={"wrap"} gap={2}>
          {filterTags.map((item) => {
            return (
              <Box
                key={item}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Box
                  sx={{
                    display: "inline-block",
                    p: "2px 8px",
                    bgcolor: theme.palette.custom.filterTablets,
                    color: theme.palette.primary.main,
                    fontWeight: "bold",
                  }}
                >
                  {item}
                </Box>
                <Button
                  variant="contained"
                  disableElevation
                  onClick={() => removeFilterTags(item)}
                  sx={{
                    p: "1px 8px",
                    minWidth: "32px",
                    bgcolor: theme.palette.primary.main,
                    color: "white",
                    textAlign: "center",
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                    "&:hover": {
                      bgcolor: "#000",
                    },
                  }}
                >
                  x
                </Button>
              </Box>
            );
          })}
        </Box>
        <Button
          onClick={() => clearFilterTags()}
          disableElevation
          sx={{
            minWidth: "auto",
            p: 0,
            textTransform: "none",
            color: theme.palette.custom.darkGrayishCyan,
            fontWeight: "bold",
            "&:hover": {
              bgcolor: "transparent",
              textDecoration: "underline",
              color: theme.palette.primary.main,
            },
          }}
        >
          Clear
        </Button>
      </Box>
    </Card>
  );
}

export default FilterCard;

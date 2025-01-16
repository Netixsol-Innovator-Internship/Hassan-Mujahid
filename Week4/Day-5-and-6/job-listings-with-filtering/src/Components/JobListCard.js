import React from "react";
import {
  Card,
  ListItem,
  Avatar,
  Typography,
  useTheme,
  Divider,
  Box,
  Button,
} from "@mui/material";
import useJobStore from "../app/jobStore";

function JobListCard({ job }) {
  const theme = useTheme();
  const { setFilterTags } = useJobStore();
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <ListItem
      key={job.company}
      sx={{
        width: { xs: "90%", sm: "584px", md: "85%" },
        display: "flex",
      }}
    >
      <Card
        sx={{
          width: "100%",
          padding: "2rem 1rem",
          position: "relative",
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          justifyContent: "space-between",
          overflow: "visible",
          borderLeft: job.featured
            ? `5px solid ${theme.palette.primary.main}`
            : "",
          boxShadow: "0px 16px 25px 1px rgba(0,0,0,0.1)",
        }}
      >
        <Box display={"flex"} gap={2} alignItems={"center"}>
          <Avatar
            src={job.logo}
            sx={{
              position: { xs: "absolute", lg: "static" },
              top: "-1rem",
              height: { xs: "40px", lg: "86px" },
              width: { xs: "40px", lg: "86px" },
            }}
          />
          <Box display={"flex"} flexDirection={"column"}>
            <Box
              display={"flex"}
              flexWrap={"wrap"}
              alignItems={"center"}
              gap={3}
            >
              <Typography
                fontWeight={"bold"}
                color={theme.palette.primary.main}
              >
                {job.company}
              </Typography>
              <Box display={"flex"} gap={1} alignItems={"center"}>
                <Box
                  bgcolor={theme.palette.primary.main}
                  px={"10px"}
                  py={"4px"}
                  borderRadius={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    display: job.new ? "block" : "none",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    color={"white"}
                    sx={{
                      textTransform: "uppercase",
                    }}
                    fontWeight={"700"}
                    fontSize={"15px"}
                  >
                    New!
                  </Typography>
                </Box>
                <Box
                  bgcolor={theme.palette.custom.veryDarkGrayishCyan}
                  px={"10px"}
                  py={"4px"}
                  borderRadius={5}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    display: job.featured ? "block" : "none",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    color={"white"}
                    sx={{
                      textTransform: "uppercase",
                    }}
                    fontWeight={"700"}
                    fontSize={"15px"}
                  >
                    Featured
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Typography
              color={theme.palette.custom.darkGrayishCyan}
              fontWeight={"700"}
              mt={1.5}
              color={theme.palette.custom.veryDarkGrayishCyan}
              sx={{
                fontSize: { lg: "23px" },
                "&:hover": {
                  color: theme.palette.primary.main,
                  cursor: "pointer",
                },
              }}
            >
              {job.position}
            </Typography>
            <Box
              display={"flex"}
              sx={{
                gap: { xs: 1, lg: 3 },
              }}
              mt={1}
              color={theme.palette.custom.darkGrayishCyan}
            >
              <Typography fontWeight={"500"}>{job.postedAt}</Typography>
              <Typography fontWeight={"500"}>•</Typography>
              <Typography fontWeight={"500"}>{job.contract}</Typography>
              <Typography fontWeight={"500"}>•</Typography>
              <Typography fontWeight={"500"}>{job.location}</Typography>
            </Box>
          </Box>
        </Box>
        <Divider sx={{ mt: 2, mb: 2, display: { xs: "block", lg: "none" } }} />
        <Box
          display={"flex"}
          alignItems={"center"}
          flexGrow={0}
          flexWrap={"wrap"}
          gap={2}
        >
          {tags.map((item) => {
            return (
              <Button
                onClick={() => setFilterTags(item)}
                key={item}
                variant="contained"
                disableElevation
                sx={{
                  textTransform: "none",
                  p: "2px 8px",
                  minWidth: "auto",
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>
      </Card>
    </ListItem>
  );
}

export default JobListCard;

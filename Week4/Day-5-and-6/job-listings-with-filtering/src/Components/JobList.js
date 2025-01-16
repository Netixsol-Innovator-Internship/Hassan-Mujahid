import React from "react";
import { useEffect } from "react";
import data from "../assets/data/data.json";
import { Box, List } from "@mui/material";
import JobListCard from "./JobListCard";
import FilterCard from "./filterCard";
import useJobStore from "../app/jobStore";

function JobList() {
  const { jobs, setJobs, filterTags } = useJobStore();

  useEffect(() => {
    setJobs(data);
  }, []);

  const filteredJobs = jobs
    .filter((jobs) => {
      if (filterTags.length === 0) return jobs;
      const jobTags = [jobs.role, jobs.level, ...jobs.languages, ...jobs.tools];
      return filterTags.every((tag) => jobTags.includes(tag));
    })
    .map((job) => job);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 3,
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: filterTags.length > 0 ? "absolute" : "relative",
          top: filterTags.length > 0 ? "-3.5rem" : "0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 3,
        }}
      >
        <FilterCard />
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: { xs: "1rem", lg: "0.5rem" },
          }}
        >
          {filteredJobs.map((job) => {
            return <JobListCard key={job.company} job={job} />;
          })}
        </List>
      </Box>
    </Box>
  );
}

export default JobList;

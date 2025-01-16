import { Box } from "@mui/material";
import BackgroundSection from "./Components/BackgroundImage";
import JobList from "./Components/JobList";
import FilterCard from "./Components/filterCard";

function App() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      position={"relative"}
      gap={3}
    >
      <BackgroundSection />
      <JobList />
    </Box>
  );
}

export default App;

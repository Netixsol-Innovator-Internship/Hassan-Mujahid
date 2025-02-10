import React from "react";

const loading = () => {
  return <div>Loading the User Page!!</div>; //This is the page that get's rendered automatically by NEXTJS only when the user page is fetching some data from some source or there is some process that is taking some time before loading the page. It shows fallback text, some Loader, spinner e.t.c In my case it is showing the written text above!
};

export default loading;

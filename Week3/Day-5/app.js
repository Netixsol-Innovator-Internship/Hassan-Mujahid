const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "ejs"); // Configures the app to use EJS(Embedded Javascript) as it's templating engine
app.use(bodyParser.urlencoded({ extended: true })); // Confiigures middleware to parse the request body containing url-encoded data e.g(HTML form data)

let newItems = [];
console.log(newItems);
app.get("/", (req, res) => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const today = new Date();
  const day = today.toLocaleDateString("en-US", options);
  res.render("list", { kindOfDay: day, newItems: newItems });
}); // Handles the get requests coming at "/" path

app.post("/", (req, res) => {
  const newItem = req.body.newItem;
  console.log(newItem);
  newItems.push(newItem);
  res.redirect("/"); // Redirecting it to get request path (As ny default the request is of get type)
}); // Handles the post requests cooming at "/" path

app.listen(3000, console.log("listening on port 3000")); // creates a server and listen to it at port 3000;

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
  const today = new Date(); // creating current date
  const day = today.toLocaleDateString("en-US", options); //converting it en-US date format
  res.render("list", { kindOfDay: day, newItems: newItems }); // rendering the list.ejs file and passing the object as prop to it.
}); // Handles the get requests coming at "/" path

app.post("/", (req, res) => {
  const newItem = req.body.newItem; //extracting newItem from req.body
  newItems.push(newItem); //pushing it to newItems array
  res.redirect("/"); // Redirecting it to get request path (As by default the request is of get type)
}); // Handles the post requests coming at "/" path

app.listen(3000, console.log("listening on port 3000")); // creates a server and listen to it at port 3000;

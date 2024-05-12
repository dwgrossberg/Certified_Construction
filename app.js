// App.js

/*
    SETUP
*/
var express = require("express"); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code
PORT = 1911; // Set a port number at the top so it's easy to change in the future

//handlebars setup

const { engine } = require("express-handlebars");
var exphbs = require("express-handlebars"); // Import express-handlebars
app.engine(".hbs", engine({ extname: ".hbs" })); // Create an instance of the handlebars engine to process templates
app.set("view engine", ".hbs"); // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

// Database
var db = require("./database/db-connector");

// Public folder assets
const path = require("path");
app.use(express.static(path.join(__dirname, "/public")));

/*
    ROUTES
*/
app.get("/", function (req,res) {
    res.render("index");
  }
);

app.get("/departments", function (req, res) {
  res.render("departments");
});

app.get("/employees", function (req, res) {
  res.render("employees");
});

app.get("/certifications", function (req, res) {
  res.render("certifications");
});

app.get("/training_sessions", function (req, res) {
  res.render("training_sessions");
});

app.get("/employees_cert", function (req, res) {
  res.render("employees_cert");
});
app.get("/employees_train", function (req, res) {
  res.render("employees_train");
});
/*
    LISTENER
*/
app.listen(PORT, function () {
  // This is the basic syntax for what is called the 'listener' which receives incoming requests on the specified PORT.
  console.log(
    "Express started on http://localhost:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});

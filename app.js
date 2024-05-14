// App.js

/*
    SETUP
*/
var express = require("express"); // We are using the express library for the web server
var app = express(); // We need to instantiate an express object to interact with the server in our code
const PORT = process.env.PORT || 1912; // Set a port number at the top so it's easy to change in the future

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
app.get("/", function (req, res) {
  res.render("index");
});

app.get('/departments', function(req, res) {

  let query1 = "SELECT Employees.*, Departments.name AS department_name FROM Employees JOIN Departments ON Employees.deptID = Departments.deptID;"
  
  db.pool.query("SELECT * FROM Departments", function(error, results) {
      if (error) {
          res.status(500).send('Database error: ' + error.message);
      } else {
          res.render('departments', { data: results });
      }
  });
});

app.get("/certifications", function (req, res) {
  let query1 = "SELECT * FROM Certifications;";
  db.pool.query(query1, function (error, rows, fields) {
    if (error) {
      res.status(500).send('Database error: ' + error.message);
    } else {
      res.render('certifications', { data: rows });
    }
  })
});

app.get("/employees", function (req, res) {
  db.pool.query('SELECT * FROM Employees;', function(error, results) {
    if (error) {
        res.status(500).send('Database error: ' + error.message);
    } else {
        res.render('employees', { data: results });
    }
});
});

var hbs = exphbs.create({});

// hbs.handlebars.registerHelper('spliceDate', function (date) {
//   strDate = date.split('T')[0];
//   console.log(typeof date, strDate);
//   return strDate
// });

app.get("/training_sessions", function (req, res) {
  let query1 = "SELECT * FROM TrainingSessions;";
  let query2 = "SELECT Certifications.certID as cert_ID, Certifications.name as cert_name FROM Certifications JOIN TrainingSessions ON Certifications.certID = TrainingSessions.certID;"
  db.pool.query(query1, function (error, rows, fields) {
    if (error) {
      res.status(500).send('Database error: ' + error.message);
    } else {
      res.render('training_sessions', { data: rows });
    }
  })
});

app.get("/employees_cert", function (req, res) {
  let query1 = "SELECT * FROM EmployeesCertifications;";
  db.pool.query(query1, function (error, rows, fields) {
    if (error) {
      res.status(500).send('Database error: ' + error.message);
    } else {
      res.render('employees_cert', { data: rows });
    }
  })
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

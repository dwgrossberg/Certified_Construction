// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

const express = require("express"); // We are using the express library for the web server
const app = express(); // We need to instantiate an express object to interact with the server in our code
const PORT = process.env.PORT || 1911; // Set a port number at the top so it's easy to change in the future

// Handlebars
const { engine } = require("express-handlebars");
var exphbs = require("express-handlebars"); // Import express-handlebars
app.engine(".hbs", engine({ extname: ".hbs" })); // Create an instance of the handlebars engine to process templates
app.set("view engine", ".hbs"); // Tell express to use the handlebars engine whenever it encounters a *.hbs file.

// Database
const db = require("./database/db-connector");

// app.js - SETUP section
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public")); // this is needed to allow for the form to use the ccs style sheet/javscript

/*
    ROUTES
*/
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/departments", (req, res) => {
  const query1 = "SELECT * FROM Departments";
  db.pool.query(query1, (error, results) => {
    if (error) {
      res.status(500).send("Database error: " + error.message);
    } else {
      res.render("departments", { data: results });
    }
  });
});

app.post("/add-department-form", (req, res) => {
  const data = req.body;
  const query1 = `INSERT INTO Departments (name, description) VALUES (?, ?)`;
  db.pool.query(query1, [data.name, data.description], (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send("Database error: " + error.message);
    } else {
      const query2 = "SELECT * FROM Departments";
      db.pool.query(query2, (error, results) => {
        if (error) {
          console.log(error);
          res.status(500).send("Database error: " + error.message);
        } else {
          res.json(results);
        }
      });
    }
  });
});

app.delete("/delete-department/:departmentID", (req, res) => {
  const departmentID = req.params.departmentID;
  const query1 = `DELETE FROM Departments WHERE deptID = ?`;

  db.pool.query(query1, [departmentID], (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send("Database error: " + error.message);
    } else {
      res.status(204).send();
    }
  });
});

app.put("/update-department/:departmentID", (req, res) => {
  const departmentID = req.params.departmentID;
  const { name, description } = req.body;

  const query = `UPDATE Departments SET name = ?, description = ? WHERE deptID = ?`;

  db.pool.query(query, [name, description, departmentID], (error, results) => {
    if (error) {
      console.log(error);
      res.status(500).send("Database error: " + error.message);
    } else {
      res.status(200).send("Department updated successfully");
    }
  });
});

app.get("/certifications", (req, res) => {
  const query1 = "SELECT * FROM Certifications;";
  db.pool.query(query1, (error, rows) => {
    if (error) {
      res.status(500).send("Database error: " + error.message);
    } else {
      res.render("certifications", { data: rows });
    }
  });
});

app.post("/add-certification", (req, res) => {
  const { name, certOrg, description } = req.body;
  const query = `INSERT INTO Certifications (name, certOrg, description) VALUES (?, ?, ?)`;

  db.pool.query(query, [name, certOrg, description], (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send("Database error: " + error.message);
    } else {
      res.status(200).send("Certification added successfully");
    }
  });
});

app.delete("/delete-certification/:certID", (req, res) => {
  const certID = req.params.certID;
  const query = `DELETE FROM Certifications WHERE certID = ?`;

  db.pool.query(query, [certID], (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send("Database error: " + error.message);
    } else {
      res.status(204).send();
    }
  });
});

app.put("/update-certification/:certID", (req, res) => {
  const certID = req.params.certID;
  const { name, certOrg, description } = req.body;
  const query = `UPDATE Certifications SET name = ?, certOrg = ?, description = ? WHERE certID = ?`;

  db.pool.query(
    query,
    [name, certOrg, description, certID],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send("Database error: " + error.message);
      } else {
        res.status(200).send("Certification updated successfully");
      }
    }
  );
});

app.get("/employees", (req, res) => {
  const query = `
    SELECT Employees.employeeID, Employees.fname, Employees.lname, Employees.email, Departments.name AS departmentName
    FROM Employees
    LEFT JOIN Departments ON Employees.deptID = Departments.deptID;
  `;
  db.pool.query(query, (error, results) => {
    if (error) {
      res.status(500).send("Database error: " + error.message);
    } else {
      db.pool.query(
        "SELECT deptID, name FROM Departments;",
        (error, departmentResults) => {
          if (error) {
            res.status(500).send("Database error: " + error.message);
          } else {
            res.render("employees", {
              employees: results,
              departments: departmentResults,
            });
          }
        }
      );
    }
  });
});

app.post("/add-employee", (req, res) => {
  const data = req.body;
  const query1 = `INSERT INTO Employees (fname, lname, email, deptID) VALUES (?, ?, ?, ?)`;
  db.pool.query(
    query1,
    [data.fname, data.lname, data.email, data.deptID],
    (error, rows) => {
      if (error) {
        console.log(error);
        res.status(500).send("Database error: " + error.message);
      } else {
        const query2 = "SELECT * FROM Employees";
        db.pool.query(query2, (error, results) => {
          if (error) {
            console.log(error);
            res.status(500).send("Database error: " + error.message);
          } else {
            res.json(results);
          }
        });
      }
    }
  );
});

app.delete("/delete-employee/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;
  const query1 = `DELETE FROM Employees WHERE employeeID = ?`;

  db.pool.query(query1, [employeeID], (error, rows) => {
    if (error) {
      console.log(error);
      res.status(500).send("Database error: " + error.message);
    } else {
      res.status(204).send();
    }
  });
});

app.put("/update-employee/:employeeID", (req, res) => {
  const employeeID = req.params.employeeID;
  const { fname, lname, email, deptID } = req.body;

  // Handle the case where deptID is not provided or is empty
  const deptIDValue = deptID ? deptID : null;

  const query = `UPDATE Employees SET fname = ?, lname = ?, email = ?, deptID = ? WHERE employeeID = ?`;

  db.pool.query(
    query,
    [fname, lname, email, deptIDValue, employeeID],
    (error, results) => {
      if (error) {
        console.log(error);
        res.status(500).send("Database error: " + error.message);
      } else {
        res.status(200).send("Employee updated successfully");
      }
    }
  );
});

app.get("/training_sessions", (req, res) => {
  const query1 = `
    SELECT TrainingSessions.trainingID, DATE_FORMAT(TrainingSessions.date, '%Y-%m-%d') AS date, TrainingSessions.location, TrainingSessions.description, TrainingSessions.certID, Certifications.certID, Certifications.name AS certName
    FROM TrainingSessions
    JOIN Certifications ON TrainingSessions.certID = Certifications.certID;`;
  const query2 =
    "SELECT Certifications.certID, Certifications.name FROM Certifications;";
  db.pool.query(query1, (error, rows) => {
    if (error) {
      res.status(500).send("Database error: " + error.message);
    } else {
      let ts = rows;
      db.pool.query(query2, (error, rows) => {
        if (error) {
          res.status(500).send("Database error: " + error.message);
        } else {
          let certs = rows;
          res.render("training_sessions", { data: ts, cert: certs });
        }
      });
    }
  });
});

app.get("/employees_cert", (req, res) => {
  const query1 = `
    SELECT EmployeesCertifications.employeeCertID, EmployeesCertifications.employeeID, EmployeesCertifications.certID, DATE_FORMAT(EmployeesCertifications.dateObtained, '%Y-%m-%d') AS dateObtained, DATE_FORMAT(EmployeesCertifications.expirationDate, '%Y-%m-%d') AS expirationDate, Employees.employeeID, Employees.fName, Employees.lName, Certifications.certID, Certifications.name AS certName
    FROM EmployeesCertifications
    JOIN Employees ON EmployeesCertifications.employeeID = Employees.employeeID
    JOIN Certifications ON EmployeesCertifications.certID = Certifications.certID;`;
  const query2 =
    "SELECT Employees.employeeID, Employees.fName, Employees.lName FROM Employees;";
  const query3 =
    "SELECT Certifications.certID, Certifications.name FROM Certifications;";
  db.pool.query(query1, (error, rows) => {
    if (error) {
      res.status(500).send("Database error: " + error.message);
    } else {
      let employeeCerts = rows;
      db.pool.query(query2, (error, rows) => {
        if (error) {
          res.status(500).send("Database error: " + error.message);
        } else {
          let employees = rows;
          db.pool.query(query3, (error, rows) => {
            if (error) {
              res.status(500).send("Database error: " + error.message);
            } else {
              let certs = rows;
              res.render("employees_cert", {
                data: employeeCerts,
                employee: employees,
                cert: certs,
              });
            }
          });
        }
      });
    }
  });
});

app.get("/employees_train", (req, res) => {
  const query1 = `
  SELECT EmployeesTrainingSessions.employeeTrainingID, EmployeesTrainingSessions.employeeID, EmployeesTrainingSessions.trainingID, Employees.employeeID, Employees.fName, Employees.lName, DATE_FORMAT(TrainingSessions.date, '%Y-%m-%d') AS date, TrainingSessions.trainingID, TrainingSessions.certID, Certifications.certID, Certifications.name AS certName
  FROM EmployeesTrainingSessions
  JOIN Employees ON EmployeesTrainingSessions.employeeID = Employees.employeeID
  JOIN TrainingSessions ON EmployeesTrainingSessions.trainingID = TrainingSessions.trainingID
  JOIN Certifications ON TrainingSessions.certID = Certifications.certID;`;
  const query2 =
    "SELECT Employees.employeeID, Employees.fName, Employees.lName FROM Employees;";
  const query3 = `
    SELECT TrainingSessions.trainingID, DATE_FORMAT(TrainingSessions.date, '%Y-%m-%d') AS date, TrainingSessions.certID, Certifications.name AS certName
    FROM TrainingSessions
    JOIN Certifications ON TrainingSessions.certID = Certifications.certID;`;
  db.pool.query(query1, (error, rows) => {
    if (error) {
      res.status(500).send("Database error: " + error.message);
    } else {
      let ets = rows;
      db.pool.query(query2, (error, rows) => {
        if (error) {
          res.status(500).send("Database error: " + error.message);
        } else {
          let employees = rows;
          db.pool.query(query3, (error, rows) => {
            if (error) {
              res.status(500).send("Database error: " + error.message);
            } else {
              let trainings = rows;
              res.render("employees_train", {
                data: ets,
                employee: employees,
                training: trainings,
              });
            }
          });
        }
      });
    }
  });
});

/*
    LISTENER
*/
app.listen(PORT, () => {
  console.log(
    "Express started on http://localhost:" +
      PORT +
      "; press Ctrl-C to terminate."
  );
});

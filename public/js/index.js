// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
// showForm function to toggle between different page forms

function showForm(dowhat) {
  var sections = ["browse", "insert", "update", "delete"];
  sections.forEach(function (section) {
    var sectionElement = document.getElementById(section);
    if (dowhat === "all" || dowhat === section) {
      sectionElement.style.display = "block"; // Show the section
    } else {
      sectionElement.style.display = "none"; // Hide the section
    }
  });
}

function browseMain(form) {
  if (form) {
    document.getElementById(form).reset();
  }
  showForm("browse");
}

// Departments

function newDepartment() {
  showForm("insert");
}

function updateDepartment(element) {
  const id = element.getAttribute("data-id");
  const name = element.getAttribute("data-name");
  const description = element.getAttribute("data-description");
  console.log(description);

  document.getElementById("updateDeptID").value = id;
  document.getElementById("updateDeptName").value = name;
  document.getElementById("updateDeptDescription").value = description;

  showForm("update");
}

function deleteDepartment(element) {
  const id = element.getAttribute("data-id");
  const name = element.getAttribute("data-name");
  const description = element.getAttribute("data-description");

  document.getElementById("deleteDeptID").value = id;
  document.getElementById("deleteDeptName").value = name;
  document.getElementById("deleteDeptDescription").value = description;

  showForm("delete");
}

// Certifications

function newCertification() {
  showForm("insert");
}

function updateCertification(element) {
  var certID = element.getAttribute("data-id");
  var certName = element.getAttribute("data-name");
  var certOrg = element.getAttribute("data-org");
  var description = element.getAttribute("data-description");

  document.getElementById("updateCertID").value = certID;
  document.getElementById("updateCertName").value = certName;
  document.getElementById("updateCertOrg").value = certOrg;
  document.getElementById("updateCertDescription").value = description;

  showForm("update");
}

function deleteCertification(element) {
  var certID = element.getAttribute("data-id");
  var certName = element.getAttribute("data-name");
  var certOrg = element.getAttribute("data-org");
  var description = element.getAttribute("data-description");

  document.getElementById("deleteCertID").value = certID;
  document.getElementById("deleteCertName").value = certName;
  document.getElementById("deleteCertOrg").value = certOrg;
  document.getElementById("deleteCertDescription").value = description;

  showForm("delete");
}

function showCertAll() {
  showForm("all");
}

// Employees
function newEmployee() {
  showForm("insert");
}

function updateEmployee(element) {
  const id = element.getAttribute("data-id");
  const fname = element.getAttribute("data-fname");
  const lname = element.getAttribute("data-lname");
  const email = element.getAttribute("data-email");
  const deptid = element.getAttribute("data-deptID");

  document.getElementById("updateEmployeeID").value = id;
  document.getElementById("updateEmployeeFName").value = fname;
  document.getElementById("updateEmployeeLName").value = lname;
  document.getElementById("updateEmployeeEmail").value = email;
  document.getElementById("updateEmployeeDeptID").value = deptid;

  showForm("update");
}

function deleteEmployee(element) {
  const id = element.getAttribute("data-id");
  const fname = element.getAttribute("data-fname");
  const lname = element.getAttribute("data-lname");
  const email = element.getAttribute("data-email");
  const deptName = element.getAttribute("data-deptname");

  document.getElementById("deleteEmployeeID").value = id;
  document.getElementById("deleteEmployeeFName").value = fname;
  document.getElementById("deleteEmployeeLName").value = lname;
  document.getElementById("deleteEmployeeEmail").value = email;
  document.getElementById("deleteEmployeeDeptID").value = deptName;

  showForm("delete");
}

function browseEmployees() {
  showForm("browse");
}

function showAll() {
  showForm("all");
}

// Training Sessions

function newTrainingSession() {
  showForm("insert");
}

function updateTrainingSession(element) {
  var trainingID = element.getAttribute("data-id");
  var trainingDate = element.getAttribute("data-date");
  var trainingLocation = element.getAttribute("data-location");
  var trainingDescription = element.getAttribute("data-description");
  var trainingCertification = element.getAttribute("data-certID");

  document.getElementById("updateTrainingID").value = trainingID;
  document.getElementById("updateTrainingDate").value = trainingDate;
  document.getElementById("updateTrainingLocation").value = trainingLocation;
  document.getElementById("updateTrainingDescription").value =
    trainingDescription;
  document.getElementById("updateTrainingCert").value = trainingCertification;

  showForm("update");
}

function deleteTrainingSession(element) {
  var trainingID = element.getAttribute("data-id");
  var trainingDate = element.getAttribute("data-date");
  var trainingLocation = element.getAttribute("data-location");
  var trainingDescription = element.getAttribute("data-description");
  var trainingCertificationName = element.getAttribute("data-certName");

  document.getElementById("deleteTrainingID").value = trainingID;
  document.getElementById("deleteTrainingDate").value = trainingDate;
  document.getElementById("deleteTrainingLocation").value = trainingLocation;
  document.getElementById("deleteTrainingDescription").value =
    trainingDescription;
  document.getElementById("deleteTrainingCert").value =
    trainingCertificationName;

  showForm("delete");
}

function showTrainingAll() {
  showForm("all");
}

// Employee Certifications

function newEmployeeCert() {
  showForm("insert");
}

function updateEmployeeCert(element) {
  var employeeCertID = element.getAttribute("data-id");
  var employeeCertEmployeeID = element.getAttribute("data-employeeID");
  var employeeCertCertID = element.getAttribute("data-certID");
  var employeeCertDateObtained = element.getAttribute("data-dateObtained");
  var employeeCertExpirationDate = element.getAttribute("data-expirationDate");

  document.getElementById("updateEmployeeCertID").value = employeeCertID;
  document.getElementById("updateEmployeeCertEmployeeID").value =
    employeeCertEmployeeID;
  document.getElementById("updateEmployeeCertCertID").value =
    employeeCertCertID;
  document.getElementById("updateEmployeeCertDateObtained").value =
    employeeCertDateObtained;
  document.getElementById("updateEmployeeCertExpirationDate").value =
    employeeCertExpirationDate;

  showForm("update");
}

function deleteEmployeeCert(element) {
  var employeeCertID = element.getAttribute("data-id");
  var employeeCertEmployeeName = element.getAttribute("data-employeeName");
  var employeeCertCertName = element.getAttribute("data-certName");

  document.getElementById("deleteEmployeeCertID").value = employeeCertID;
  document.getElementById("deleteEmployeeCertEmployeeName").value =
    employeeCertEmployeeName;
  document.getElementById("deleteEmployeeCertCertID").value =
    employeeCertCertName;

  showForm("delete");
}

function showEmployeeCerts() {
  showForm("all");
}

// Employee Training Sessions

function addEmployeeTrainingSession() {
  showForm("insert");
}

function updateEmployeeTrainingSession(element) {
  var employeeID = element.getAttribute("data-employeeID");
  var trainingID = element.getAttribute("data-trainingID");
  var employeeTrainingID = element.getAttribute("data-employeeTrainingID");

  document.getElementById("updateEmployeeTrainingEmployeeID").value =
    employeeID;
  document.getElementById("updateEmployeeTrainingTrainingID").value =
    trainingID;
  document.getElementById(
    "updateEmployeeTrainingSessionEmployeeTrainingID"
  ).value = employeeTrainingID;

  showForm("update");
}

function deleteEmployeeTrainingSession(element) {
  var employeeName = element.getAttribute("data-employeeName");
  var trainingName = element.getAttribute("data-trainingName");
  var employeeTrainingID = element.getAttribute("data-employeeTrainingID");

  document.getElementById("deleteEmployeeTrainingSessionEmployeeID").value =
    employeeName;
  document.getElementById("deleteEmployeeTrainingSessionTrainingID").value =
    trainingName;
  document.getElementById(
    "deleteEmployeeTrainingSessionEmployeeTrainingID"
  ).value = employeeTrainingID;

  showForm("delete");
}

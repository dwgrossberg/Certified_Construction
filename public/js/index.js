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

function browseMain() {
  showForm("browse");
}

// Departments

function newDepartment() {
  showForm("insert");
}

function updateDepartment(element) {
  var id = element.getAttribute("data-id");
  var name = element.getAttribute("data-name");
  var description = element.getAttribute("data-description");

  document.getElementById("updateDeptID").value = id;
  document.getElementById("updateDeptName").value = name;
  document.getElementById("updateDeptDescription").value = description;

  showForm("update");
}

function deleteDepartment(element) {
  var id = element.getAttribute("data-id");
  var name = element.getAttribute("data-name");
  var description = element.getAttribute("data-description");

  document.getElementById("deleteDeptID").textContent = id;
  document.getElementById("deleteDeptName").textContent = name;
  document.getElementById("deleteDeptDescription").textContent = description;

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
  var id = element.getAttribute("data-id");
  var fname = element.getAttribute("data-fname");
  var lname = element.getAttribute("data-lname");
  var email = element.getAttribute("data-email");
  var deptid = element.getAttribute("data-deptid");

  document.getElementById("updateEmployeeID").value = id;
  document.getElementById("updateEmployeeIDSpan").textContent = id;
  document.getElementById("updateEmployeeFName").value = fname;
  document.getElementById("updateEmployeeLName").value = lname;
  document.getElementById("updateEmployeeEmail").value = email;
  document.getElementById("updateEmployeeDeptID").value = deptid;

  showForm("update");
}

function deleteEmployee(element) {
  var id = element.getAttribute("data-id");
  var name = element.getAttribute("data-name");

  document.getElementById("deleteEmployeeID").value = id;
  document.getElementById("deleteEmployeeIDSpan").textContent = id;
  document.getElementById("deleteEmployeeNameSpan").textContent = name;

  showForm("delete");
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
  var trainingCertification = element.getAttribute("data-cert");

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
  var trainingCertification = element.getAttribute("data-cert");

  document.getElementById("deleteTrainingID").value = trainingID;
  document.getElementById("deleteTrainingDate").value = trainingDate;
  document.getElementById("deleteTrainingLocation").value = trainingLocation;
  document.getElementById("deleteTrainingDescription").value =
    trainingDescription;
  document.getElementById("deleteTrainingCert").value = trainingCertification;

  showForm("delete");
}

function showTrainingAll() {
  showForm("all");
}

// Employee Certifications

function showEmployeeCertForms(dowhat) {
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

function newEmployeeCert() {
  showEmployeeCertForms("insert");
}

function updateEmployeeCert(element) {
  var employeeCertID = element.getAttribute("data-id");
  var employeeCertFName = element.getAttribute("data-fname");
  var employeeCertLName = element.getAttribute("data-lname");
  var employeeCerts = element.getAttribute("data-certs");
  var employeeCertExpirations = element.getAttribute("data-expirationDates");

  document.getElementById("updateEmployeeCertID").value = employeeCertID;
  document.getElementById("updateEmployeeCertFName").value = employeeCertFName;
  document.getElementById("updateEmployeeCertLName").value = employeeCertLName;
  document.getElementById("updateEmployeeCert").value = employeeCerts;
  document.getElementById("updateEmployeeCertDate").value =
    employeeCertExpirations;

  showEmployeeCertForms("update");
}

function deleteEmployeeCert(element) {
  var employeeCertID = element.getAttribute("data-id");
  var employeeCertFName = element.getAttribute("data-fname");
  var employeeCertLName = element.getAttribute("data-lname");
  var employeeCerts = element.getAttribute("data-certs");
  var employeeCertExpirations = element.getAttribute("data-expirationDates");

  document.getElementById("deleteEmployeeCertID").value = employeeCertID;
  document.getElementById("deleteEmployeeCertFName").value = employeeCertFName;
  document.getElementById("deleteEmployeeCertLName").value = employeeCertLName;
  document.getElementById("deleteEmployeeCert").value = employeeCerts;
  document.getElementById("deleteEmployeeCertDate").value =
    employeeCertExpirations;

  showEmployeeCertForms("delete");
}

function showEmployeeCerts() {
  showEmployeeCertForms("all");
}

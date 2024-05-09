// Departments

function showDepartment(department) {
  // Hide all department sections
  var departmentSections = document.querySelectorAll(".department-section");
  departmentSections.forEach(function (section) {
    section.style.display = "none";
  });

  // Show the selected department section
  var selectedDepartment = document.getElementById(department);
  if (selectedDepartment) {
    selectedDepartment.style.display = "block";
  }
}

// Certifications

function showCertForms(dowhat) {
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

function newCertification() {
  showCertForms("insert");
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

  showCertForms("update");
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

  showCertForms("delete");
}

function browseCertifications() {
  showCertForms("browse");
}

function showCertAll() {
  showCertForms("all");
}

// Employees

function showform(dowhat) {
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
function newEmployee() {
  showform("insert");
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

  showform("update");
}
function deleteEmployee(element) {
  var id = element.getAttribute("data-id");
  var name = element.getAttribute("data-name");

  document.getElementById("deleteEmployeeID").value = id;
  document.getElementById("deleteEmployeeIDSpan").textContent = id;
  document.getElementById("deleteEmployeeNameSpan").textContent = name;

  showform("delete");
}
function browseEmployees() {
  showform("browse");
}

function showAll() {
  showform("all");
}

// Training Sessions

function showTrainingForms(dowhat) {
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

function newTraining() {
  showTrainingForms("insert");
}

function updateTrainingSession(element) {
  var trainingID = element.getAttribute("data-id");
  var trainingDate = element.getAttribute("data-date");
  var trainingLocation = element.getAttribute("data-location");
  var trainingDescription = element.getAttribute("data-description");
  var trainingCertification = element.getAttribute("data-certification");
  var trainingEmployees = element.getAttribute("data-employees");

  document.getElementById("updateTrainingID").value = trainingID;
  document.getElementById("updateTrainingDate").value = trainingDate;
  document.getElementById("updateTrainingLocation").value = trainingLocation;
  document.getElementById("updateTrainingDescription").value =
    trainingDescription;
  document.getElementById("updateTrainingCertification").value =
    trainingCertification;

  showTrainingForms("update");
}

function deleteTrainingSession(element) {
  var trainingID = element.getAttribute("data-id");
  var trainingDate = element.getAttribute("data-date");
  var trainingLocation = element.getAttribute("data-location");
  var trainingDescription = element.getAttribute("data-description");
  var trainingCertification = element.getAttribute("data-certification");
  var trainingEmployees = element.getAttribute("data-employees");

  document.getElementById("deleteTrainingID").value = trainingID;
  document.getElementById("deleteTrainingDate").value = trainingDate;
  document.getElementById("deleteTrainingLocation").value = trainingLocation;
  document.getElementById("deleteTrainingDescription").value =
    trainingDescription;
  document.getElementById("deleteTrainingCertification").value =
    trainingCertification;
  document.getElementById("deleteTrainingEmployees").value = trainingEmployees;

  showTrainingForms("delete");
}

function browseTraining() {
  showTrainingForms("browse");
}

function showTrainingAll() {
  showTrainingForms("all");
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

function browseEmployeeCerts() {
  showEmployeeCertForms("browse");
}

function showEmployeeCerts() {
  showEmployeeCertForms("all");
}

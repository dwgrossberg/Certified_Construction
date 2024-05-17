// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let deleteEmployeeForm = document.getElementById("deleteEmployee");

  if (deleteEmployeeForm) {
    deleteEmployeeForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let employeeID = document.getElementById("deleteEmployeeID").value;

      // Setup our AJAX request
      var xhttp = new XMLHttpRequest();
      xhttp.open("DELETE", `/delete-employee/${employeeID}`, true);
      xhttp.setRequestHeader("Content-type", "application/json");

      // Tell our AJAX request how to resolve
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 204) {
          console.log("Employee deleted successfully");
          location.reload();
        } else if (xhttp.readyState == 4 && xhttp.status != 204) {
          console.log("There was an error with the deletion.");
        }
      };

      // Send the request
      xhttp.send();
    });
  } else {
    console.error("Form with ID 'deleteEmployee' not found.");
  }
});

function deleteEmployee(element) {
  const id = element.getAttribute("data-id");
  const fname = element.getAttribute("data-fname");
  const lname = element.getAttribute("data-lname");
  const email = element.getAttribute("data-email");
  const deptname = element.getAttribute("data-deptname");

  document.getElementById("deleteEmployeeID").value = id;
  document.getElementById("deleteEmployeeIDSpan").textContent = id;
  document.getElementById("deleteEmployeeFNameSpan").textContent = fname;
  document.getElementById("deleteEmployeeLNameSpan").textContent = lname;
  document.getElementById("deleteEmployeeEmailSpan").textContent = email;
  document.getElementById("deleteEmployeeDeptIDSpan").textContent = deptname;

  showForm("delete");
}

function showForm(formType) {
  const sections = ["browse", "insert", "update", "delete"];
  sections.forEach((section) => {
    document.getElementById(section).style.display =
      section === formType ? "block" : "none";
  });
}

function browseEmployees() {
  showForm("browse");
}

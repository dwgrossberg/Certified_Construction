// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let deleteDepartmentForm = document.getElementById("delete-department-form");

  if (deleteDepartmentForm) {
    deleteDepartmentForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let departmentID = document.getElementById("deleteDeptID").value;

      // Setup our AJAX request
      var xhttp = new XMLHttpRequest();
      xhttp.open("DELETE", `/delete-department/${departmentID}`, true);
      xhttp.setRequestHeader("Content-type", "application/json");

      // Tell our AJAX request how to resolve
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 204) {
          console.log("Department deleted successfully");
          location.reload();
        } else if (xhttp.readyState == 4 && xhttp.status != 204) {
          console.log("There was an error with the deletion.");
        }
      };

      // Send the request
      xhttp.send();
    });
  } else {
    console.error("Form with ID 'delete-department-form' not found.");
  }
});

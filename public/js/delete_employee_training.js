// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let deleteEmployeeTrainingForm = document.getElementById("deleteEmployeeTrainingForm");

  if (deleteEmployeeTrainingForm) {
    deleteEmployeeTrainingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let employeeTrainingID = document.getElementById("deleteEmployeeTrainingSessionEmployeeTrainingID").value;

      var xhttp = new XMLHttpRequest();
      xhttp.open("DELETE", `/delete-employee-training/${employeeTrainingID}`, true);
      xhttp.setRequestHeader("Content-type", "application/json");

      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 204) {
          console.log("Employee training session deleted successfully");
          location.reload();
        } else if (xhttp.readyState == 4 && xhttp.status != 204) {
          console.log("There was an error with the deletion.");
        }
      };

      xhttp.send();
    });
  } else {
    console.error("Form with ID 'deleteEmployeeCertification' not found.");
  }
});

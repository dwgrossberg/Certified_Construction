// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let updateEmployeeTrainingForm = document.getElementById(
    "updateEmployeeTrainingForm"
  );

  if (updateEmployeeTrainingForm) {
    updateEmployeeTrainingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let employeeTrainingID = document.getElementById(
        "updateEmployeeTrainingSessionEmployeeTrainingID"
      ).value;
      let employeeID = document.getElementById(
        "updateEmployeeTrainingEmployeeID"
      ).value;
      let trainingID = document.getElementById(
        "updateEmployeeTrainingTrainingID"
      ).value;

      // Setup our AJAX request
      var xhttp = new XMLHttpRequest();
      xhttp.open(
        "PUT",
        `/update-employee-training/${employeeTrainingID}`,
        true
      );
      xhttp.setRequestHeader("Content-type", "application/json");

      // Tell our AJAX request how to resolve
      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          console.log("Employee training session updated successfully");
          location.reload();
        } else if (xhttp.readyState == 4 && xhttp.status != 200) {
          console.log("There was an error with the update.");
        }
      };

      // Send the request
      let data = {
        employeeTrainingID: employeeTrainingID,
        employeeID: employeeID,
        trainingID: trainingID,
      };
      xhttp.send(JSON.stringify(data));
    });
  } else {
    console.error("Form with ID 'updateEmployeeTrainingForm' not found.");
  }
});

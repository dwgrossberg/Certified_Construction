// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let addEmployeeTrainingForm = document.getElementById("add-employee-training-form");

  if (addEmployeeTrainingForm) {
    addEmployeeTrainingForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let employeeID = document.getElementById("newEmployeeTrainingEmployeeID").value;
      let trainingID = document.getElementById("newEmployeeTrainingTrainingID").value;

      let data = {
        employeeID: employeeID,
        trainingID: trainingID,
      };

      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", "/add-employee-training", true);
      xhttp.setRequestHeader("Content-type", "application/json");

      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          console.log("Employee training added successfully");
          location.reload();
        } else if (xhttp.readyState == 4 && xhttp.status != 200) {
          console.log("There was an error with the input.");
        }
      };
        
      xhttp.send(JSON.stringify(data));
    });
  } else {
    console.error("Form with ID 'add-employee-training-form' not found.");
  }
});

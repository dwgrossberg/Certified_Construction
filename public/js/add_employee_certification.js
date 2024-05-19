// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let addEmployeeCertForm = document.getElementById("add-employee-cert-form");

  if (addEmployeeCertForm) {
    addEmployeeCertForm.addEventListener("submit", function (e) {
      e.preventDefault();

      let employeeID = document.getElementById("newEmployeeCertEmployeeID").value;
      let certID = document.getElementById("newEmployeeCertCertID").value;
      let dateObtained = document.getElementById("newEmployeeCertDateObtained").value;
      let expirationDate = document.getElementById("newEmployeeCertExpirationDate").value;

      let data = {
        employeeID: employeeID,
        certID: certID,
        dateObtained: dateObtained,
        expirationDate: expirationDate
      };

      var xhttp = new XMLHttpRequest();
      xhttp.open("POST", "/add-employee-certification", true);
      xhttp.setRequestHeader("Content-type", "application/json");

      xhttp.onreadystatechange = function () {
        if (xhttp.readyState == 4 && xhttp.status == 200) {
          console.log("Employee certification added successfully");
          location.reload();
        } else if (xhttp.readyState == 4 && xhttp.status != 200) {
          console.log("There was an error with the input.");
        }
      };
        
      xhttp.send(JSON.stringify(data));
    });
  } else {
    console.error("Form with ID 'add-employee-cert' not found.");
  }
});

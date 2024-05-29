// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let updateEmployeeCertForm = document.getElementById('update-employee-certification-form');

    if (updateEmployeeCertForm) {
        updateEmployeeCertForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let employeeCertID = document.getElementById("updateEmployeeCertID").value;
            let employeeID = document.getElementById("updateEmployeeCertEmployeeID").value;
            let certID = document.getElementById("updateEmployeeCertCertID").value;
            let dateObtained = document.getElementById("updateEmployeeCertDateObtained").value;
            let expirationDate = document.getElementById("updateEmployeeCertExpirationDate").value;

            // Setup our AJAX request
            var xhttp = new XMLHttpRequest();
            xhttp.open("PUT", `/update-employee-certification/${employeeCertID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            // Tell our AJAX request how to resolve
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Employee certification updated successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the update.");
                }
            };

            // Send the request
            let data = {
                employeeCertID: employeeCertID,
                employeeID: employeeID,
                certID: certID,
                dateObtained: dateObtained,
                expirationDate: expirationDate
            };
            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'update-employee-certification-form' not found.");
    }
});

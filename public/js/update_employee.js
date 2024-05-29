// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let updateEmployeeForm = document.getElementById('updateEmployee');

    if (updateEmployeeForm) {
        updateEmployeeForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let employeeID = document.getElementById("updateEmployeeID").value;
            let employeeFName = document.getElementById("updateEmployeeFName").value;
            let employeeLName = document.getElementById("updateEmployeeLName").value;
            let employeeEmail = document.getElementById("updateEmployeeEmail").value;
            let employeeDeptID = document.getElementById("updateEmployeeDeptID").value;

            // Setup our AJAX request
            var xhttp = new XMLHttpRequest();
            xhttp.open("PUT", `/update-employee/${employeeID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            // Tell our AJAX request how to resolve
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Employee updated successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the update.");
                }
            };

            // Send the request
            let data = {
                fname: employeeFName,
                lname: employeeLName,
                email: employeeEmail,
                deptID: employeeDeptID
            };
            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'updateEmployee' not found.");
    }
});
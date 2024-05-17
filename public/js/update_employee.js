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

function updateEmployee(element) {
    const id = element.getAttribute("data-id");
    const fname = element.getAttribute("data-fname");
    const lname = element.getAttribute("data-lname");
    const email = element.getAttribute("data-email");
    const deptID = element.getAttribute("data-deptid");

    document.getElementById("updateEmployeeID").value = id;
    document.getElementById("updateEmployeeFName").value = fname;
    document.getElementById("updateEmployeeLName").value = lname;
    document.getElementById("updateEmployeeEmail").value = email;

    // Pre-select the current department in the dropdown
    const deptSelect = document.getElementById("updateEmployeeDeptID");
    for (let i = 0; i < deptSelect.options.length; i++) {
        if (deptSelect.options[i].value == deptID) {
            deptSelect.selectedIndex = i;
            break;
        }
    }

    showForm("update");
}
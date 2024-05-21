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
    // Retrieve data attributes from the clicked element
    const employeeID = element.getAttribute('data-id');
    const employeeFName = element.getAttribute('data-fname');
    const employeeLName = element.getAttribute('data-lname');
    const employeeEmail = element.getAttribute('data-email');
    const employeeDeptID = element.getAttribute('data-deptid');
    const employeeDeptName = element.getAttribute('data-deptname');

    // Populate the form fields with the retrieved values
    document.getElementById('updateEmployeeID').value = employeeID;
    document.getElementById('updateEmployeeFName').value = employeeFName;
    document.getElementById('updateEmployeeLName').value = employeeLName;
    document.getElementById('updateEmployeeEmail').value = employeeEmail;
    document.getElementById('currentDepartment').value = employeeDeptName;

    // Set the selected department option
    const deptSelect = document.getElementById('updateEmployeeDeptID');
    deptSelect.value = employeeDeptID;

    // Display the update form and hide the browse section
    document.getElementById('update').style.display = 'block';
    document.getElementById('browse').style.display = 'none';
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

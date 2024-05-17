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

            // Set deptID to null if it is empty
            let deptIDValue = employeeDeptID ? employeeDeptID : null;

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
                deptID: deptIDValue
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
    document.getElementById("updateEmployeeDeptID").value = deptID;

    showForm("update");
}

function showForm(formType) {
    const sections = ["browse", "insert", "update", "delete"];
    sections.forEach(section => {
        document.getElementById(section).style.display = section === formType ? 'block' : 'none';
    });
}

function browseEmployees() {
    showForm("browse");
}

// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let updateDepartmentForm = document.getElementById('update-department-form');

    if (updateDepartmentForm) {
        updateDepartmentForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let departmentID = document.getElementById("updateDeptID").value;
            let departmentName = document.getElementById("updateDeptName").value;
            let departmentDescription = document.getElementById("updateDeptDescription").value;

            // Setup our AJAX request
            var xhttp = new XMLHttpRequest();
            xhttp.open("PUT", `/update-department/${departmentID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            // Tell our AJAX request how to resolve
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Department updated successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the update.");
                }
            };

            // Send the request
            let data = {
                name: departmentName,
                description: departmentDescription
            };
            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'update-department-form' not found.");
    }
});

function updateDepartment(element) {
    const id = element.getAttribute("data-id");
    const name = element.getAttribute("data-name");
    const description = element.getAttribute("data-description");

    document.getElementById("updateDeptID").value = id;
    document.getElementById("updateDeptName").value = name;
    document.getElementById("updateDeptDescription").value = description;

    showForm("update");
}

function showForm(formType) {
    const sections = ["browse", "insert", "update", "delete"];
    sections.forEach(section => {
        document.getElementById(section).style.display = section === formType ? 'block' : 'none';
    });
}

function browseMain() {
    showForm("browse");
}

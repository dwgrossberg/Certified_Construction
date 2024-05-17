// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app

document.addEventListener('DOMContentLoaded', function() {
    let addEmployeeForm = document.getElementById('addEmployee');

    if (addEmployeeForm) {
        addEmployeeForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let inputFname = document.getElementById("input-fname");
            let inputLname = document.getElementById("input-lname");
            let inputEmail = document.getElementById("input-email");
            let inputDeptID = document.getElementById("input-deptid");

            let fnameValue = inputFname.value;
            let lnameValue = inputLname.value;
            let emailValue = inputEmail.value;
            let deptIDValue = inputDeptID.value;

            let data = {
                fname: fnameValue,
                lname: lnameValue,
                email: emailValue,
                deptID: deptIDValue
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/add-employee", true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Employee added successfully");
                    location.reload(); 
                } else if (this.readyState == 4 && this.status != 200) {
                    console.log("There was an error with the input.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'addEmployee' not found.");
    }
});

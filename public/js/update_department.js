document.addEventListener('DOMContentLoaded', function() {
    let updateDepartmentForm = document.getElementById('update-department-form');

    if (updateDepartmentForm) {
        updateDepartmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let deptID = document.getElementById("updateDeptID").value;
            let name = document.getElementById("updateDeptName").value;
            let description = document.getElementById("updateDeptDescription").value;

            let data = {
                id: deptID,
                name: name,
                description: description
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/update-department-form-ajax", true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Department updated successfully");
                    location.reload(); // Reload the page to see the updated table
                } else if (this.readyState == 4 && this.status != 200) {
                    console.log("There was an error with the input.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'update-department-form' not found.");
    }
});

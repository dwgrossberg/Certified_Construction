document.addEventListener('DOMContentLoaded', function() {
    let deleteDepartmentForm = document.getElementById('delete-department-form');

    if (deleteDepartmentForm) {
        deleteDepartmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let departmentID = document.getElementById("deleteDeptID").value;

            let data = { id: departmentID };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/delete-department-form-ajax", true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Department deleted successfully");
                    location.reload(); // Reload the page to see the updated table
                } else if (this.readyState == 4 && this.status != 200) {
                    console.log("There was an error with the input.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'delete-department-form' not found.");
    }
});

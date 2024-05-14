document.addEventListener('DOMContentLoaded', function() {
    let addDepartmentForm = document.getElementById('add-department-form');

    if (addDepartmentForm) {
        addDepartmentForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let inputName = document.getElementById("input-name");
            let inputDescription = document.getElementById("input-description");

            let nameValue = inputName.value;
            let descriptionValue = inputDescription.value;

            let data = {
                name: nameValue,
                description: descriptionValue
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/add-department-form-ajax", true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Department added successfully");
                    location.reload(); // Reload the page to see the updated table
                } else if (this.readyState == 4 && this.status != 200) {
                    console.log("There was an error with the input.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'add-department-form' not found.");
    }
});

// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let addTrainingForm = document.getElementById('add-training-form');

    if (addTrainingForm) {
        addTrainingForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let inputDate = document.getElementById("newTrainingDate").value;
            let inputLocation = document.getElementById("newTrainingLocation").value;
            let inputDescription = document.getElementById("newTrainingDescription").value;
            let inputCertID = document.getElementById("newTrainingCert").value;

            let data = {
                date: inputDate,
                location: inputLocation,
                description: inputDescription,
                certID: inputCertID
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/add-training-session", true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Training session added successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the input.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'add-training-form' not found.");
    }
});


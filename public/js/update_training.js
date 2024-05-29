// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let updateTrainingForm = document.getElementById('update-training-form');

    if (updateTrainingForm) {
        updateTrainingForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let trainingID = document.getElementById("updateTrainingID").value;
            let trainingDate = document.getElementById("updateTrainingDate").value;
            let trainingLocation = document.getElementById("updateTrainingLocation").value;
            let trainingDescription = document.getElementById("updateTrainingDescription").value;
            let trainingCertID = document.getElementById("updateTrainingCert").value;

            // Setup our AJAX request
            var xhttp = new XMLHttpRequest();
            xhttp.open("PUT", `/update-training-session/${trainingID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            // Tell our AJAX request how to resolve
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Training session updated successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the update.");
                }
            };

            // Send the request
            let data = {
                date: trainingDate,
                location: trainingLocation,
                description: trainingDescription,
                certID: trainingCertID
            };
            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'update-training-form' not found.");
    }
});

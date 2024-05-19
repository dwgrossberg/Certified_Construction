// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let deleteTrainingForm = document.getElementById('delete-training-form');

    if (deleteTrainingForm) {
        deleteTrainingForm.addEventListener("submit", function(e) {
            e.preventDefault();

            let trainingID = document.getElementById("deleteTrainingID").value;

            // Setup our AJAX request
            var xhttp = new XMLHttpRequest();
            xhttp.open("DELETE", `/delete-training-session/${trainingID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            // Tell our AJAX request how to resolve
            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 204) {
                    console.log("Training session deleted successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 204) {
                    console.log("There was an error with the deletion.");
                }
            };

            // Send the request
            xhttp.send();
        });
    } else {
        console.error("Form with ID 'delete-training-form' not found.");
    }
});


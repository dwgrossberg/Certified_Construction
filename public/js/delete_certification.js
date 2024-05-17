// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener('DOMContentLoaded', function() {
    let deleteCertificationForm = document.getElementById('deleteCertification');

    if (deleteCertificationForm) {
        deleteCertificationForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let certID = document.getElementById("deleteCertID").value;

            var xhttp = new XMLHttpRequest();
            xhttp.open("DELETE", `/delete-certification/${certID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 204) {
                    console.log("Certification deleted successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 204) {
                    console.log("There was an error with the deletion.");
                }
            };

            xhttp.send();
        });
    } else {
        console.error("Form with ID 'deleteCertification' not found.");
    }
});

function deleteCertification(element) {
    const id = element.getAttribute("data-id");
    const name = element.getAttribute("data-name");
    const org = element.getAttribute("data-org");
    const description = element.getAttribute("data-description");

    document.getElementById("deleteCertID").value = id;
    document.getElementById("deleteCertName").value = name;
    document.getElementById("deleteCertOrg").value = org;
    document.getElementById("deleteCertDescription").value = description;

    showForm("delete");
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

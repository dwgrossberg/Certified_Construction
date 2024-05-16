document.addEventListener('DOMContentLoaded', function() {
    let updateCertificationForm = document.getElementById('updateCertification');

    if (updateCertificationForm) {
        updateCertificationForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let certID = document.getElementById("updateCertID").value;
            let certName = document.getElementById("updateCertName").value;
            let certOrg = document.getElementById("updateCertOrg").value;
            let description = document.getElementById("updateCertDescription").value;

            let data = {
                name: certName,
                certOrg: certOrg,
                description: description
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("PUT", `/update-certification/${certID}`, true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Certification updated successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the update.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'updateCertification' not found.");
    }
});

function updateCertification(element) {
    const id = element.getAttribute("data-id");
    const name = element.getAttribute("data-name");
    const org = element.getAttribute("data-org");
    const description = element.getAttribute("data-description");

    document.getElementById("updateCertID").value = id;
    document.getElementById("updateCertName").value = name;
    document.getElementById("updateCertOrg").value = org;
    document.getElementById("updateCertDescription").value = description;

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

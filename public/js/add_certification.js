document.addEventListener('DOMContentLoaded', function() {
    let addCertificationForm = document.getElementById('addCertification');

    if (addCertificationForm) {
        addCertificationForm.addEventListener("submit", function (e) {
            e.preventDefault();

            let certName = document.querySelector("[name='certName']").value;
            let certOrg = document.querySelector("[name='certOrg']").value;
            let description = document.querySelector("[name='description']").value;

            let data = {
                name: certName,
                certOrg: certOrg,
                description: description
            };

            var xhttp = new XMLHttpRequest();
            xhttp.open("POST", "/add-certification", true);
            xhttp.setRequestHeader("Content-type", "application/json");

            xhttp.onreadystatechange = function() {
                if (xhttp.readyState == 4 && xhttp.status == 200) {
                    console.log("Certification added successfully");
                    location.reload(); 
                } else if (xhttp.readyState == 4 && xhttp.status != 200) {
                    console.log("There was an error with the input.");
                }
            };

            xhttp.send(JSON.stringify(data));
        });
    } else {
        console.error("Form with ID 'addCertification' not found.");
    }
});

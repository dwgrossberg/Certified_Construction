// Citation for the following function
// Date: 5/18/2024
// Based on:
// Source URL: https://github.com/osu-cs340-ecampus/nodejs-starter-app
document.addEventListener("DOMContentLoaded", function () {
  let updateCertificationForm = document.getElementById("updateCertification");

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
        description: description,
      };

      var xhttp = new XMLHttpRequest();
      xhttp.open("PUT", `/update-certification/${certID}`, true);
      xhttp.setRequestHeader("Content-type", "application/json");

      xhttp.onreadystatechange = function () {
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

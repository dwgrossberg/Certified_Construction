document.getElementById('update-department-form-ajax').addEventListener('submit', function(event) {
    event.preventDefault();

    let idInput = document.getElementById('updateDeptID').value;
    let nameInput = document.getElementById('updateDeptName').value;
    let descriptionInput = document.getElementById('updateDeptDescription').value;

    let data = {
        id: idInput,
        name: nameInput,
        description: descriptionInput
    };

    let xhttp = new XMLHttpRequest();
    xhttp.open("PUT", "/departments/" + idInput, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Department updated successfully');
            // Optionally, refresh the page or update the table dynamically
        }
    };

    xhttp.send(JSON.stringify(data));
});

document.getElementById('delete-department-form-ajax').addEventListener('submit', function(event) {
    event.preventDefault();

    let idInput = document.getElementById('deleteDeptID').value;

    let xhttp = new XMLHttpRequest();
    xhttp.open("DELETE", "/departments/" + idInput, true);
    xhttp.setRequestHeader("Content-type", "application/json");

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log('Department deleted successfully');
            // Optionally, refresh the page or update the table dynamically
        }
    };

    xhttp.send();
});

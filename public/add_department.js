// Get the form we need to modify
let addDepartmentForm = document.getElementById('add-department-form');

// Modify the form submission handling
addDepartmentForm.addEventListener("submit", function (e) {
    // Prevent the form from submitting
    e.preventDefault();

    // Get form fields we need to get data from
    let inputName = document.getElementById("input-name");
    let inputDescription = document.getElementById("input-description");

    // Get the values from the form fields
    let nameValue = inputName.value;
    let descriptionValue = inputDescription.value;

    // Put the data we want to send in a JavaScript object
    let data = {
        name: nameValue,
        description: descriptionValue
    };

    // Setup our AJAX request
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "/add-department-form-ajax", true);
    xhttp.setRequestHeader("Content-type", "application/json");

    // Tell our AJAX request how to resolve
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            // Add the new data to the table
            addRowToTable(xhttp.response);

            // Clear the input fields for another transaction
            inputName.value = '';
            inputDescription.value = '';
        } else if (this.readyState == 4 && this.status != 200) {
            console.log("There was an error with the input.");
        }
    };

    // Send the request and wait for the response
    xhttp.send(JSON.stringify(data));
});

// Function to add a row to the table
function addRowToTable(data) {
    // Get a reference to the current table on the page
    let currentTable = document.getElementById("department-table");

    // Get the location where we should insert the new row (end of table)
    let newRowIndex = currentTable.rows.length;

    // Get a reference to the new row from the database query (last object)
    let parsedData = JSON.parse(data);
    let newRow = parsedData[parsedData.length - 1];

    // Create a row and cells
    let row = document.createElement("TR");
    let actionCell = document.createElement("TD");
    let idCell = document.createElement("TD");
    let nameCell = document.createElement("TD");
    let descriptionCell = document.createElement("TD");

    // Fill the cells with correct data
    actionCell.innerHTML = `<a href="#" onClick="updateDepartment(this)" data-id="${newRow.deptID}" data-name="${newRow.name}" data-description="${newRow.description}">Edit</a> |
                            <a href="#" onClick="deleteDepartment(this)" data-id="${newRow.deptID}" data-name="${newRow.name}" data-description="${newRow.description}">Delete</a>`;
    idCell.innerText = newRow.deptID;
    nameCell.innerText = newRow.name;
    descriptionCell.innerText = newRow.description;

    // Add the cells to the row
    row.appendChild(actionCell);
    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(descriptionCell);

    // Add the row to the table
    currentTable.appendChild(row);
}

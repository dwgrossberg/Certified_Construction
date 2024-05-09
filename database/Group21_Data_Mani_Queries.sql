-- CS340 Group 21 - Ditrung Duong and Daniel Grossberg
-- MySQL Workbench Forward Engineering


-- Get all Department IDs and Names to populate the Departments dropdown
SELECT deptID, name FROM Departments;

-- Get all employees and their department name for the List Employees page
SELECT Employees.employeeID, fName, lName, Departments.name AS department, email FROM Employees 
INNER JOIN Departments ON Employees.deptID = Departments.deptID;

-- Get a single employee's data for the Update Employee form
SELECT employeeID, fName, lName, email, deptID FROM Employees WHERE employeeID = :employeeID_selected_from_browse_employee_page;

-- Get all employee data to populate a dropdown for selecting in forms
SELECT employeeID, CONCAT(fName, ' ', lName) AS fullName FROM Employees;

-- Get all certifications to populate a dropdown for associating with employees
SELECT certID, name FROM Certifications;

-- Get all employees with their current associated certifications to list
SELECT Employees.employeeID, Certifications.certID, CONCAT(fName, ' ', lName) AS name, Certifications.name AS certification 
FROM Employees 
JOIN EmployeesCertifications ON Employees.employeeID = EmployeesCertifications.employeeID 
JOIN Certifications ON Certifications.certID = EmployeesCertifications.certID 
ORDER BY name, certification;

-- Add a new employee
INSERT INTO Employees (fName, lName, email, deptID) VALUES (:fNameInput, :lNameInput, :emailInput, :deptID_from_dropdown_Input);

-- Associate an employee with a certification (M-to-M relationship addition)
INSERT INTO EmployeesCertifications (employeeID, certID, dateObtained, expirationDate) VALUES (:employeeID_from_dropdown_Input, :certificationID_from_dropdown_Input, :dateObtainedInput, :expirationDateInput);

-- Update an employee's data based on submission of the Update Employee form
UPDATE Employees SET fName = :fNameInput, lName = :lNameInput, email = :emailInput, deptID = :deptID_from_dropdown_Input WHERE employeeID = :employeeID_from_the_update_form;

-- Delete an employee
DELETE FROM Employees WHERE employeeID = :employeeID_selected_from_browse_employee_page;

-- Dis-associate a certification from an employee (M-to-M relationship deletion)
DELETE FROM EmployeesCertifications WHERE employeeID = :employeeID_selected_from_certificate_and_employee_list AND certID = :certificationID_selected_from_certificate_and_employee_list;

-- Filter employees by department
SELECT Employees.employeeID, fName, lName, email FROM Employees WHERE deptID = :deptID;




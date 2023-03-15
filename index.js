// Write your solution in this file!
const employee = {
    name: "Marc Jacobs",
    address: "1234 Whoville Street",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {return {
    ...employee,
    [key]: value,
    };
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
};

function deleteFromEmployeeByKey(employee, name,) {
    const newEmployee = {employee};
    delete newEmployee.name;

    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name];
    return employee;
};
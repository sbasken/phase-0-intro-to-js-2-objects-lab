// Write your solution in this file!
const employee = {
    name: "Saki",
    streetAddress: "6006 3rd Ave.",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = {...employee}
    newObj[key] = value
    return newObj
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const keyDeleted = {...employee}
    delete keyDeleted[key];
    return keyDeleted
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee
}
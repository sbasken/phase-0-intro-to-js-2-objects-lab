// Write your solution in this file!
const employee = {
    name: "Koko",
    streetAddress: "Seattle, WA",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newList = {...employee};
    newList[key] = value;
    return newList
}



function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const anotherList = {...employee};
    delete anotherList[key];
    return anotherList;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
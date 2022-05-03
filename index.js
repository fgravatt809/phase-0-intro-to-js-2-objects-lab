const employee = {
    name: "value1",
    streetAddress: "value2",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
    newEmployee[key] = value;
    return newEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
     employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee, key);
    delete newObj[key];
    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}


    

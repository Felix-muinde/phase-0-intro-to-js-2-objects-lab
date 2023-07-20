// Write your solution in this file!
const employee = {
    name: 'John',
    streetAddress: 'endor',
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = {...employee}
newEmployee[key]=value
    return newEmployee;
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key]=value
    return employee;

  }
  
  function deleteFromEmployeeByKey() {
    const {name, ...my} = employee
    return my
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // The test cases below...
  
  
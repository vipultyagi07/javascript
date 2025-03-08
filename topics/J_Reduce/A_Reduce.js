/**
 * 
 * Imagine you have a list of employees, and you want to calculate the total salary.
 * 
 */

const employees = [
    { id: 1, name: "Amit", salary: 60000 },
    { id: 2, name: "Sneha", salary: 75000 },
    { id: 3, name: "Ravi", salary: 80000 }
];

// SYNTAX: array.reduce(callbackFunction(accumulator, currentValue, index, array), initialValue);

const totalSalary = employees.reduce((acc, employee) => acc + employee.salary, 0);

console.log(totalSalary); 
// Output: 215000

const employees = [
    { id: 1, name: "Deeksha", department: "IT", salary: 80000 },
    { id: 2, name: "Sneha", department: "HR", salary: 25000 },
    { id: 3, name: "Ravi", department: "Finance", salary: 35000 },
    { id: 4, name: "Vipul", department: "IT", salary: 75000 },
    { id: 5, name: "Vikas", department: "Marketing", salary: 28000 }
];

// 1️ Extract salaries


    // 1.1 first way 

    const findSalary = (employee)=>{

        return employee.salary;
    }

    const salaries1 = employees.map(findSalary)

    console.log("first way: ", salaries1);

    /**
     *
     *  first way:  [ 80000, 25000, 35000, 75000, 28000 ]
     */

    
    // 1.2 second way
    
    /**
     * 
     *  How about we use arrow function instead of findSalary for such filtering
     * 
     */

    const salaries2 = employees.map( (employee)=>{return employee.salary}  )

    console.log("second way: ", salaries2);

        /**
         * 
         * first way:  [ 80000, 25000, 35000, 75000, 28000 ]
         * second way:  [ 80000, 25000, 35000, 75000, 28000 ]
         * 
         */
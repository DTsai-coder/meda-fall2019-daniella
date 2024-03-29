var employees = [] // Array holding all of our employees

// What's inside the curly braces {} for objects is not a codeblock, it's a value.

var employee1 = {
    "first Name": "Eduardo", // If you want space in your keywords/properties, you need to wrap it in quotes example "fist Name"
    lastName: "Garcia",
    age: 29,
    salary: 70000,
    status: "alive",
    life: "San Francisco",
    startDate: "November, 2017"
};

var employee2 = {
    firstName: "Phill",
    lastName: "Johnson",
    age: 50,
    salary: 85000,
    status: "dead",
    life: "Los Angeles",
    startDate: "January 1954"
};

var employee3 = {
    firstName: "Sally",
    lastName: "Peters",
    age: 70,
    salary: 2500000,
    status: "alive",
    life: "New York",
    startDate: "January 1999"
};

employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

console.log(employees);

// Only use employees array. Index starts with 0-9

// Update the life of Phil
// [1] is the index number to locate Phil, next to uplade the location select ["life"] and add the change to San Diego ="San Diego"

employees [1]["life"] = "San Diego";
console.log(employees);

"hello there!".length;
employees.length;


// Dot Notation access for Objects
employees[0].status; // Example explantation: To grab the Status of Eduardo
// Not valid
// employees[0].first Name

// Bracket Notation access for Objects and Arrays.
// if you have a keyword/properties with space in it, you have to use the bracket notation.
employees[0]["status"];
employees[0]["first Name"];


var something = "age"
// you can use a variable in z bracket noation
employee3[something];

// You cannot use a variable in a dot notation
employee3.something; // not gonna work .something



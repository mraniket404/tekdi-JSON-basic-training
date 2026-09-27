// ========================================
// JavaScript JSON Values
// ========================================

// JSON supports 6 value types:
//
// 1. String
// 2. Number
// 3. Object
// 4. Array
// 5. Boolean
// 6. Null


// 1. String
const name = "Aniket";

console.log("String:", name);
console.log("Type:", typeof name);


// 2. Number
const age = 22;
const height = 1.75;

console.log("\nNumber:", age);
console.log("Type:", typeof age);

console.log("Height:", height);


// 3. Boolean
const student = true;

console.log("\nBoolean:", student);
console.log("Type:", typeof student);


// 4. Null
const middleName = null;

console.log("\nNull:", middleName);
console.log("Type:", typeof middleName);


// 5. Array
const skills = [
    "JavaScript",
    "React",
    "Node.js"
];

console.log("\nArray:", skills);
console.log("First skill:", skills[0]);
console.log("Second skill:", skills[1]);


// 6. Object
const address = {
    city: "Kolhapur",
    state: "Maharashtra",
    country: "India"
};

console.log("\nObject:", address);
console.log("City:", address.city);
console.log("State:", address.state);


// Nested Object
const person = {
    name: "Aniket",
    age: 22,

    address: {
        city: "Kolhapur",
        state: "Maharashtra"
    },

    hobbies: [
        "Coding",
        "Gym",
        "Reading"
    ]
};

console.log("\n----- Nested Values -----");

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.address.city);
console.log("State:", person.address.state);
console.log("Hobby:", person.hobbies[0]);


// Array containing Objects
const students = [
    {
        name: "Aniket",
        age: 22
    },
    {
        name: "Sakshi",
        age: 21
    },
    {
        name: "Akshay",
        age: 22
    }
];

console.log("\n----- Array of Objects -----");

console.log(students[0].name);
console.log(students[1].name);
console.log(students[2].name);
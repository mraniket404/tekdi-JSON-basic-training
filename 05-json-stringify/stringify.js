// ========================================
// JavaScript JSON.stringify() Practice
// ========================================


// 1. JavaScript Object → JSON
const person = {
    name: "Aniket",
    age: 22,
    city: "Kolhapur"
};

const text = JSON.stringify(person);

console.log("----- Object to JSON -----");
console.log(text);
console.log("Type:", typeof text);


// 2. JavaScript Array → JSON
const skills = [
    "JavaScript",
    "React",
    "Node.js"
];

const skillsText = JSON.stringify(skills);

console.log("\n----- Array to JSON -----");
console.log(skillsText);
console.log("Type:", typeof skillsText);


// 3. Other Values
console.log("\n----- Other Values -----");

console.log("String:", JSON.stringify("Aniket"));
console.log("Number:", JSON.stringify(22));
console.log("Boolean:", JSON.stringify(true));
console.log("Null:", JSON.stringify(null));
console.log("Undefined:", JSON.stringify(undefined));


// 4. Unsupported Values
const unsupportedData = {
    name: "Aniket",
    age: undefined,
    score: NaN,
    value: Infinity,
    greet: function () {
        return "Hello";
    }
};

console.log("\n----- Unsupported Values -----");

console.log(JSON.stringify(unsupportedData));


// 5. Array Unsupported Values
const arrayData = [
    "Aniket",
    undefined,
    function () {},
    NaN,
    Infinity
];

console.log("\n----- Array Unsupported Values -----");

console.log(JSON.stringify(arrayData));


// 6. Replacer Array
const student = {
    name: "Aniket",
    age: 22,
    city: "Kolhapur",
    course: "B.Tech CSE"
};

const selectedData = JSON.stringify(
    student,
    ["name", "course"]
);

console.log("\n----- Replacer Array -----");

console.log(selectedData);


// 7. Replacer Function
const updatedData = JSON.stringify(
    student,
    function (key, value) {

        if (key === "age") {
            return value + 1;
        }

        return value;
    }
);

console.log("\n----- Replacer Function -----");

console.log(updatedData);


// 8. Pretty JSON
const formattedData = JSON.stringify(
    student,
    null,
    2
);

console.log("\n----- Formatted JSON -----");

console.log(formattedData);


// 9. Date
const dateData = {
    name: "Aniket",
    date: new Date("2026-07-22")
};

console.log("\n----- Date -----");

console.log(JSON.stringify(dateData));


// 10. JSON Round Trip
const jsonData = JSON.stringify(student);

const javascriptObject = JSON.parse(jsonData);

console.log("\n----- JSON Round Trip -----");

console.log("JSON:", jsonData);
console.log("JavaScript Object:", javascriptObject);


// 11. LocalStorage
localStorage.setItem(
    "student",
    JSON.stringify(student)
);

const storedData = localStorage.getItem("student");

const retrievedStudent = JSON.parse(storedData);

console.log("\n----- LocalStorage -----");

console.log(retrievedStudent);
console.log("Name:", retrievedStudent.name);
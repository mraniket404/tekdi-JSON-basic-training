// -------------------------
// 1. JSON TEXT
// -------------------------

const jsonText = `{
    "name": "Aniket",
    "age": 22,
    "city": "Kolhapur"
}`;

console.log("JSON Text:");
console.log(jsonText);

console.log("Type:", typeof jsonText);


// -------------------------
// 2. JSON → JavaScript
// -------------------------

const person = JSON.parse(jsonText);

console.log("JavaScript Object:");
console.log(person);

console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);


// -------------------------
// 3. JavaScript → JSON
// -------------------------

const newJsonText = JSON.stringify(person);

console.log("JSON Text Again:");
console.log(newJsonText);

console.log("Type:", typeof newJsonText);
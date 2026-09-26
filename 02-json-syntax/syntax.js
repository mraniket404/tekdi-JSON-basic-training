// JSON Syntax Practice

const jsonText = `{
  "name": "Aniket",
  "age": 22,
  "student": true,
  "address": null,
  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ],
  "college": {
    "name": "DBATU",
    "course": "B.Tech CSE"
  }
}`;

// JSON text
console.log("JSON Text:");
console.log(jsonText);

// Check JSON type
console.log("Type of JSON Text:", typeof jsonText);

// Convert JSON text into JavaScript object
const student = JSON.parse(jsonText);

console.log("JavaScript Object:");
console.log(student);

// Access object properties
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student:", student.student);

// Access array
console.log("Skills:", student.skills);

// Access nested object
console.log("College:", student.college.name);
console.log("Course:", student.college.course);

// Convert JavaScript object back to JSON
const newJsonText = JSON.stringify(student);

console.log("JSON Again:");
console.log(newJsonText);

console.log("Type of New JSON:", typeof newJsonText);
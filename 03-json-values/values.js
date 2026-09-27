const jsonText = `{
  "name": "Aniket",
  "age": 22,
  "student": true,
  "middleName": null,

  "skills": [
    "JavaScript",
    "React",
    "Node.js"
  ],

  "address": {
    "city": "Kolhapur",
    "state": "Maharashtra",
    "country": "India"
  },

  "education": {
    "college": "DBATU",
    "course": "B.Tech CSE",
    "year": 4
  }
}`;

const student = JSON.parse(jsonText);

console.log("Name:", student.name);
console.log("Age:", student.age);
console.log("Student:", student.student);
console.log("Middle Name:", student.middleName);

console.log("Skills:", student.skills);

console.log("First Skill:", student.skills[0]);

console.log("City:", student.address.city);

console.log("State:", student.address.state);

console.log("College:", student.education.college);

console.log("Course:", student.education.course);
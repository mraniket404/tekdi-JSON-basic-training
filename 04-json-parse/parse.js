// JSON text
const text = '{"name":"Aniket","age":22,"city":"Kolhapur"}';

console.log("Before parsing:");
console.log(text);

console.log("Type before parsing:");
console.log(typeof text);


// Convert JSON text into JavaScript object
const person = JSON.parse(text);

console.log("After parsing:");
console.log(person);

console.log("Type after parsing:");
console.log(typeof person);


// Access properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
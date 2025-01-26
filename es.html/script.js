// Question 1
var toys = 5;
if (true) {
  var toys = 10;
  console.log(toys);
}
console.log(toys);

// Question 2
let books = 3;
if (true) {
  let books = 7;
  console.log(books);
}
console.log(books);

// Question 3
console.log(pencils);
var pencils = 12;
let erasers = 6;

// Question 4
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 500);
}

for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log(j);
  }, 500);
}

// Question 5
function sum(a, b, c = 2) {
  return a + b + c;
}
console.log(sum(4, 6));
console.log(sum(4, 6, 5));

// Question 6
function greet(name, message = "Hello") {
  return `${message}, ${name}!`;
}
console.log(greet("Suhana"));
console.log(greet("Suhana", "Hello"));

// Question 7
const firstName = "Suhana";
const hobby = "study";
console.log(`My name is ${firstName} and I love ${hobby}.`);

// Question 8
const getDefaultAge = () => 10;
function childDetails(name, age = getDefaultAge()) {
  return `Name: ${name}, Age: ${age}`;
}
console.log(childDetails("bisma"));
console.log(childDetails("bisma", 12));

// Question 9
for (let step = 1; step <= 3; step++) {
  setTimeout(() => {
    console.log(`Step ${step}`);
  }, step * 400);
}

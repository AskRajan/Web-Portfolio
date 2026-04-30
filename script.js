// Function Declaration
function greet(user) {
  return `Hello, ${user}!`;
}

// Arrow Function
const sum = (a, b) => a + b;

const status = age >= 18 ? "Adult" : "Minor"; // Ternary

if (age > 10) {
  console.log("Greater than 10"); // Control statement
}

const dogs = ["Rex", "Lassie"];

// Using for...of
for (const dog of dogs) {
  console.log(dog);
}

// Using forEach
dogs.forEach((dog, index) => console.log(`Dog #${index}: ${dog}`));
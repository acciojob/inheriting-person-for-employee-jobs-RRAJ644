// Define the Person class with a constructor and greet method
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}, I am ${this.age} years old.`);
};

// Define the Employee class, inheriting from Person
function Employee(name, age, jobTitle) {
  // Call the Person constructor with the current context
  Person.call(this, name, age);
  this.jobTitle = jobTitle;
}

// Inherit methods from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Add a jobGreet method to the Employee class
Employee.prototype.jobGreet = function () {
  console.log(
    `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`
  );
};
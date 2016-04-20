//Week 1 - Project 1


// Log all answers to the console and write them to document
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// =======================================================

//1. Log your name to the console (as a string).

console.log("Question 1");

console.log("My Name is Phil");

//2. Declare a variable called 'name', and then log it to the console.

console.log("Question 2");
var neame = "Phil";
console.log(neame);


//3. Declare two variables with number values. 
//   Add, subtract, multiply and divide them.

var a = 2;
var b = 3;

console.log("Question 3");

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


//4. Declare two variables with string values. 
//   Create a third variable that concatenates them.


console.log("Question 4");
var P = "2";
var R = "3";
console.log(P + R);

//5. Add, subract, multiply and divide the strings '5' and '3'. 
//   Observe the results and know how to explain the results if asked.

console.log("Question 5");
var five = "5";
var three = "3";
console.log(five + three);
console.log(five - three);
console.log(five * three);
console.log(five / three);

//6. Create a prompt that asks a user to pick a number. 
//   Then double the answer.

var number = prompt("Please enter a number", "");
if (number !== null) 

{
    console.log("Question 6");
    console.log(number * 2);
}

//7. Create a custom alert.

console.log("Question 7");
alert("YIKES!!");

//8. Declare three variables called length, width and height. 
//   Calculate area and volume.

var lengthy = 3;
var height = 4;
var width = 5;

console.log("Question 8");
console.log(lengthy * height * width);



//9. Ask for a user's name, age and city. 
//   In a single command display/log the sentence:
//   "My name is...I'm....years old, and I live in....."

var nayme = prompt("Yo yo what's yo name?", "");
var age = prompt("How old you be?", "");
var city = prompt("Where u livin?", "");

console.log("Question 9");
console.log("My name is " + nayme + ". I am " + age + " years old, and I live in " + city + ".");


//10. Create an alert that uses the response from a prompt.

console.log("Question 10");
alert("You still have many years left to live, " + nayme);


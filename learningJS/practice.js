// const sum = 10 + 10;
// const sum1 = 20 + 10;
// const sum2 = 30 + 10;
// console.log(sum, sum1, sum2);

// name = 'Osmel'
// name = 'Aly'
// name = 'Osniel'
// if (name === 'Osmel') {
//     console.log('Hi Osmel');
// }
// else if (name === 'Aly') {
//     console.log('Hi Aly');
// }
// else {
//     console.log('Hello, '+ name);
// }

// name = "Osmel";
// if (name === "Osmel" || name === "Aly" || name === "Osniel") {
//   console.log("hi osmel or aly");
// }

// const firstName = 'Osmel';
// const lastName = 'Torres';
// if (firstName === 'Osmel' && lastName === 'Torres') {
//     console.log('Hello ' + firstName +' '+ lastName);
// }

// const name = "bob";
// if (!(name === "bob")) {
//     console.log("hello bob");
// } else {
//     console.log("You're not Bob!");
//     const greeting = "Welcome, stranger!";
//     console.log(greeting);
// }

// function sayHello() {
//   console.log("Hello!");
// }
// sayHello();

// const sayBye = () => {
//     console.log("Bye!");
// };
// sayBye();

// function sing(singing) {
//   console.log(singing);
// }
// sing("This is a song");
// sing("la la la lala");
// sing("singing a song");

// const result = multiply(5, 10);
// function multiply(a, b) {
//     return a * b;
// }
// console.log(result);

// const a = function (a, b) {
//     if (a > 10 || b > 10) {
//         return 'thats to high'
//     } else {
//         return a * b;
//     }
// }
// console.log(a(5, 15));

// function singingSong (username, age) {
//     console.log("I'm singing a song");
//     console.log(`Hello ${username}`);
//     console.log(`you are ${age}`);
// };
// singingSong('osmel', 10);
// singingSong('osmel2', 20);
// singingSong('osmel3', 30);

// function adding(x, y) {
//     return x + y;
// }
// function subtract(x, y) {
//     return x - y;
// }
// function multiply(x, y) {
//     return x * y;
// }
// function divide(x, y) {
//     return x / y;
// }
// function modulus(x, y) {
//     return x % y;
// }
// function isEven(number) {
//     if (number % 2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// function isThisEven(number) {
//     return number % 2 === 0 ? true : false;
// }

// function isValidEmail(email) {
//   return email.includes("@") ? true : false;
// }
// console.log(adding(1,2));
// console.log(subtract(3,4));
// console.log(multiply(5,6));
// console.log(divide(7,9));
// console.log(modulus(9,10));
// console.log(isEven(11));
// console.log(isEven(10));
// console.log(isThisEven(11));
// console.log(isThisEven(10));
// console.log(isValidEmail("osmel@gmail.com"));
// console.log(isValidEmail("osmelgmail.com"));

// ///////////////////////////////////////////////////////
// Data Structure: Arrays and Objects.///////////////////
// ///////////////////////////////////////////////////////

// const myArray = ['One',2, 'Three'];
// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);

// const booleans = [true, false, true,];
// console.log(booleans[0]);
// console.log(booleans[1]);
// console.log(booleans[2]);

// const functions = [
//   function sayHello() {
//     console.log("Hello!");
//   },
//   function sayBye() {
//     console.log("Bye!");
//   },
// ];
// console.log(functions[1]);

////////////////////////////////////////////////////////////////////////////////
// //USE ONE TYPE OF DATA IN AN ARRAY.///////////////////
////////////////////////////////////////////////////////////////////////////////
// const mixedList = ['One', 2, true, [1, 2, 3],undefined, function apple() {console.log('apple')}];
// console.log(mixedList[0]);
// console.log(mixedList[1]);
// console.log(mixedList[2]);
// console.log(mixedList[3]);
// console.log(mixedList[4]);
// console.log(mixedList[5]);
// mixedList[5]();

//////////////////////////////////////////////////////
//// METHODS ////////////////////////////////////////
//////////////////////////////////////////////////////
// const myArray =[1, 2, 3];
// console.log(myArray [0]);
// console.log(myArray [1]);
// console.log(myArray [2]);
// myArray.pop();
// console.log(myArray);
// myArray.push('new item');
// console.log(myArray);
// myArray.shift();
// console.log(myArray);

//////////////////////////////////////////////////////
// //OBJECTS //////////////////////////////////
//////////////////////////////////////////////////////
// const user = {
//   name: "Osmel",
//   age: 20,
//   isStudent: true,
//   hobbies: ["Reading", "Coding"],
// };

//////////////////////////////////////////////////////
////HOW TO ADD PROPERTIES TO OBJECTs //////////////////
//////////////////////////////////////////////////////
// user.faveCar = "Honda";
// console.log(user);
// console.log(user.faveCar);
// console.log(user.hobbies[0]);

// const theUser = {
//     name: 'Osmel',
//     age: 20,
//     isStudent: true,
//     words:['apple','orange','grape']
// }

// myArray = [theUser,]
// console.log(myArray[0])

// const logins = [
//   { username: "osmel", password: "123" },
//   { username: "aly", password: "456" },
//   { username: "osniel", password: "789" },
//   function () {
//     console.log("This is a secret function");
//   },
// ];
// console.log(logins[3]());

//////////////////////////////////////////////////////
///FUNCTION LOOPING /////////////////////
// FOR\WHILE\DO\FOREACH\/////////////////////////////
//////////////////////////////////////////////////////


// //////FOREACH LOOP////// CLEANER WAY TO DO A FOR LOOP\\\\\\
// todos.forEach(function (todos, i) { 
//   console.log(todos,i);
// })

// //WHILE lOOP/// THIS ONE CHECKS CONDITIONS FIRST THEN RUNS CODE
// let countOne = 10;
// while (countOne > 0) {
//   console.log(countOne);
//   countOne--;
// }
// ///DO WHILE LOOP/// THIS RUNS CODE THEN CHECKS CONDITIONS
// let counterTwo = 10;
// do {
//   console.log(counterTwo);
//   counterTwo--;
// } while (counterTwo > 0);

// // Example 1: Basic for loop
// function countToFive() {
//   for (let i = 1; i <= 5; i++) {
//     console.log(i);
//   }
// }

// // Example 2: Loop through array
// function printFruits() {
//   const fruits = ["apple", "banana", "orange"];
//   for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
//   }
// }

// // Example 3: forEach method
// function printNamesUppercase() {
//   const names = ["osmel", "aly", "osniel"];
//   names.forEach((name) => {
//     console.log(name.toUpperCase());
//   });
// }

// // Example 4: for...of loop
// function sumNumbers() {
//   const numbers = [1, 2, 3, 4, 5];
//   let sum = 0;
//   for (const num of numbers) {
//     sum += num;
//   }
//   return sum;
// }

// // Try them out:
// countToFive();
// printFruits();
// printNamesUppercase();
// console.log("Sum:", sumNumbers());

// //////////////////////////////////////////////////////
// // FUNCTION EXPRESSIONS /////////////////////
// //////////////////////////////////////////////////////
// const myFunction = function() {
// }

// //////////////////////////////////////////////////////
// // ARROW FUNCTIONS /////////////////////
// //////////////////////////////////////////////////////
// const arrowFunction = () => {
// }

// //////////////////////////////////////////////////////
// //EXPRESSION/////////////////////////
// //////////////////////////////////////////////////////
// 1 + 3;
// const a = 2;
// return true;

// //////////////////////////////////////////////////////
// // CALLING OR INVOKING FUNCTIONS //////////////////
// //////////////////////////////////////////////////////
// alert();
// new Function(param1, param2);

// //////////////////////////////////////////////////////
// //FUNCTION VS METHODS //////////////////
// //////////////////////////////////////////////////////
// function thisIsAFunction() {
// }

// ////VS

// const object = {
//   thisISaMethod: function () {
//     console.log("This is a method");
//   }
// }
// thisIsAFunction(); //CALLING
// object.thisISaMethod(); // CALLING

5 > 4; //True
"apple" > "pineapple"; //False
"2" > "12"; //True
undefined == null; //True
undefined === null; //False
null == "\n0\n"; //false
null === +"\n0\n"; //false

// 3-What are the final values of all variables a, b, c and d after the code below?
// let a = 1,
//   b = 1;
// let c = ++a; // 2
// let d = b++; // 1
// console.log(c);
// console.log(d);

// 4-What are the values of a and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2);
// Value of a is 4
// Value of x is 5

// 5-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

// let a = Number(prompt("First number?", 1));
// let b = Number(prompt("Second number?", 2));
// alert(a + b); // Now 3

// 6- Rewrite this if using the conditional operator '?':
// let result;
//
// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

// Solution Of problem 6
// let result;
// a + b < 4 ? (result = "Below") : (result = "Above");
// console.log(result);

// 7- Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;
//
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// Solution of Problem 7
let login = prompt("Enter your Status");

login == "Employee"
  ? alert("Hello")
  : login == "Director"
  ? alert("Greetings")
  : login == ""
  ? alert("No login")
  : alert("Invalid status");

//   8-What is the code below going to output?

alert(null || 2 || undefined); // Answer is 2

// 9-What will the code below output?
alert(alert(1) || 2 || alert(3)); // Answer is 1 and 2

// 10-What is this code going to show?

alert(1 && null && 2); // Answer is null

// 11-What will this code show?

alert(alert(1) && alert(2)); // Answer is 1

// 12-What will the result be?

alert(null || (2 && 3) || 4); // Answer is 3

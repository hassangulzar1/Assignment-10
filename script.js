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

// 4-What are the values of c and x after the code below?
// let a = 2;
// let x = 1 + (a *= 2);
// Value of a is 4
// Value of x is 5

// 5-Here’s a code that asks the user for two numbers and shows their sum.
// It works incorrectly. The output in the example below is 12 (for default prompt values).
// Why? Fix it. The result should be 3.

let a = Number(prompt("First number?", 1));
let b = Number(prompt("Second number?", 2));
alert(a + b); // Now 3

// 6- Rewrite this if using the conditional operator '?':
// let result;
//
// if (a + b < 4) {
//   result = "Below";
// } else {
//   result = "Over";
// }

// Solution Of problem 6
let result;
a + b < 4 ? (result = "Below") : (result = "Above");
console.log(result);

// 7- Rewrite 'if..else' into '?'
// Rewrite if..else using multiple ternary operators '?'.
// For readability, it’s recommended to split the code into multiple lines.
// let message;
// if (login == "Employee") {
//   message = "Hello";
// } else if (login == "Director") {
//   message = "Greetings";
// } else if (login == "") {
//   message = "No login";
// } else {
//   message = "";
// }

// Solution
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

// 13-Write an if condition to check that age is NOT between 14 and 90 inclusively.
// Create two variants: the first one using NOT !, the second one – without it.

let age = Number(prompt("Enter your age"));

if (age < 14 || age > 90) {
  alert("Age is not between 14 to 90");
}
if (age >= 14 && age <= 90) {
  alert("Age is between 14 to 90");
}

// 14-Which of these alerts are going to execute?
// What will the results of the expressions be inside if(...)?
//
if (-1 || 0) alert("first"); //This was exicute
if (-1 && 0) alert("second");
if (null || (-1 && 1)) alert("third"); // This was exicute

// 15-Write the code using if..else which would correspond to the following switch:
// switch (browser) {
//   case "Edge":
//     alert("You've got the Edge!");
//     break;
//
//   case "Chrome":
//   case "Firefox":
//   case "Safari":
//   case "Opera":
//     alert("Okay we support these browsers too");
//     break;
//
//   default:
//     alert("We hope that this page looks ok!");
// }

// Solution
let brower = prompt("Please enter your browser");
if (brower == "Edge") {
  alert("You've got the Edge!");
} else if (brower == "Chrome" || "Firefox" || "Safari" || "Opera") {
  alert("Okay we support these browsers too");
} else {
  alert("We hope that this page looks ok!");
}

// 16-Rewrite the code below using a single switch statement:
// let a = +prompt("a?", "");
//
// if (a == 0) {
//   alert(0);
// }
// if (a == 1) {
//   alert(1);
// }
//
// if (a == 2 || a == 3) {
//   alert("2,3");
// }

// Solution
let numBer = Number(prompt("Number?", ""));
switch (numBer) {
  case 0:
    alert(0);
    break;
  case 1:
    alert(1);
    break;
  case 2:
  case 3:
    alert("2,3");
    break;
}

// // Exercise #1 — Determine If a Number Is Positive
//         let value = 0;

//         if (value > 0) {
//             console.log("Positive");
//         } else {
//             console.log("Negative");
//         }


// // Exercise #2 — Check Even or Odd

// let value = 199;

// if (value % 2 === 0) {
//     console.log ("Even Number");
// } else {
//     console.log ("Odd Number");
// }


// // Exercise #3 — Determine the Greater Number 

// let value = 20;
// let num = 15;

// if (value > num) {
//     console.log ('value Is greater!');
// } else {
//     console.log ("Num Is Lesser!");
// }


// // Exercise #4 — Grade Calculator:

// let score = 65;
// let grade;

// if (score >= 90) {
//     grade = "A";
// } else if (score >= 80) {
//     grade = "B";
// } else if (score >= 70) {
//     grade = "C";
// } else if (score >= 60) {
//     grade = "D";
// } else {
//     grade = "F"; 
// }
// console.log('Grade:' + grade);



// Exercise #5 — Ticket Pricing
// let age = 12;
// let ticketPrice;

// if (age < 12) {
//     ticketPrice = 5;
// } else if (age >= 12 && age < 18) {
//     ticketPrice = 10;
// } else if (age >= 18 && age < 60) {
//     ticketPrice = 20;
// } else {
//     ticketPrice = 15;
// };

// console.log("Ticket Price: INR " + ticketPrice);



// // Exercise #6 — Determine Leap Year
// let year = 2024;

// if ( year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
//     console.log(year + " is a Leap Year");    
// } else {
//     console.log(year + " is not a Leap Year");
// }


// // Exercise #7 — Shopping Discount
// let amount = 900;
// let discount;

// if (amount >= 5000) {
//     discount = 30;
// } else if (amount >= 2000) {
//     discount = 20;
// } else if (amount >= 1000) {
//     discount = 10;
// } else {
//     discount = 0;
// }

// console.log("Discount = " + discount + "%")


// // Exercise #8 — Time of Day Greeting
// let time = new Date();
// let hour = time.getHours();
// let greetings;

// if (hour > 0 && hour < 12 ) {
//     greetings = "Good Morning!"
// } else if (hour > 12 && hour < 16) {
//     greetings = "Good Afternoon!"
// } else if (hour > 16 && hour < 21) {
//     greetings = "Good Evening"
// } else {
//     greetings = "Good Night!"
// }

// console.log(greetings);


// //Exercise #9 — BMI Calculator
// let height = 1.82; //in meter
// let weight = 75; // in KG
// let bmi = weight / (height * height);
// let result;

// if (bmi < 18.5) {
//     result = 'UnderWeight'
// } else if (bmi < 25) {
//     result = 'NormalWeight'
// } else {
//     result = "UnderWeight"
// }

// console.log("BMI: " + bmi.toFixed(2))
// console.log('Result: ' + result)


// // Exercise #10 — Number Guessing Game
// let num = 6;
// let input = prompt('Enter a Number', );

// input = parseInt(input);

// if (num === input) {
//     alert("Your correct");
// } else if (num < input) {
//     alert("Enteres Higher value");
// } else {
//     alert("Enter Lower Value");
// }



// //Write a program that takes a number input and checks whether it is even or odd.

// let value = prompt("Enter the your value");

// value = parseInt(value);

// if (value % 2 === 0 ) {
//     alert(value + " is a Even Number");
// } else {
//     alert(value + " is a Odd Number");
// }


// // Write a program that asks for a person's age and checks whether they are eligible to vote (18 years or older).

// let age = prompt("Enter your age to check your voting eligibility:")
// age = parseInt(age);

// if (age >= 18) {
//     alert("Your eligible to Vote");
// } else {
//     alert("Your Not eligible to Vote");
// }

// // Write a program that asks for a number and checks whether it is positive, negative, or zero.

// let num = prompt("Enter a number");

// if (num > 0) {
//     alert(num + " It's a positive number");
// } else if (num == 0) {
//     alert("It's a Zero");
// } else {
//     alert(num + " It's a Negative number");
// }


// Write a program that takes a score (0-100) and prints the grade:
let score = prompt("Enter a score to know your grade");
score = parseInt(score);
let grade

if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else if (score >= 60) {
    grade = "D";
} else {
    grade = "F";
}

alert("Your Grade is " + grade);
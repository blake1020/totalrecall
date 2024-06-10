/*
How do we assign a value to a variable? let fName = "Leann";, const fName = "Leann"; var fName = Leann; (=) with the assignment operator 
How do we change the value of a variable? let fName = "Leann": fName = "Leanndreia" 
How do we assing an existing variable to a new variable? let fName ="Leann"; let userName = fName; 
Remind me, what decalre, assign, and define? declaring a variable using let, const, var. assign is the use of the assingment operator (=). define is what your are placing in the variale. 
What is pseudocoding and why should you do it? what a computer program or alogorithm should do, you should always use pseudocoding so that the next person will know what the code should perform
What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code solve it? more time understanding the problem then coding the problem, trying to code something and not understanding the end result would result in a lot of time blinding coding
*/

// STRINGS
// let firstVariable = "Hello world";
// firstVariable = 1;
// let secondVarible = firstVariable;
// secondVarible = "Leandreia"
// // the value of firstVariable is Hello world
// let yourName = "Leandreia";
// let greeting = `Hello, my name is  ${yourName}`;
// console.log(greeting)

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = "Kevin";

console.log(a < b);
console.log(c > d);
console.log("Name" === "Name");
// // Forthe next two, use only && or ||
console.log(true || false);
console.log((false && false && false && false && false) || true);
console.log(false === false);
console.log(e === "Kevin");
console.log(a + b === c); // note: a < b < c is Not Correct (and is not a valid JS expression, think abnout suing tother math operations)
console.log(a * a === d); //Note: the answer is a simpl arithmetic equation, not something "weird"
console.log(48 == "48");
console.log((a != b) != c);
console.log(a < b > c);

// let animal = "turtle";
// if (animal == "cow") {
//     console.log("mooooo")
// } else {
//     console.log("Hey! You're not a cow.");
// }

// for (let i=0; i <= 10; i++) {

//      console.log(i);
// }
// for ( let i=10; i <= 400; i++) {
//     if (i % 10 == 0) {
//     console.log(i);
//     }
// }

// // for ( let i=12; i < 4000; i++){

// //     if (i % 3 == 0) {
// //         console.log(i);
// //     }
// // }

// for (let i=1; i < 100; i++) {
//      if ( i % 2 == 0 ) {
//         console.log(i + "<-- is an even number ");
//     } else {
//         console.log(i);
//     }
// }

//GIVE ME FIVE
//   for (let i = 0; i < 100; i++) {
//     if (i % 5 == 0 ) {
//         console.log(' I found a ' + i + '. High five!');
//     } else if (i % 3 == 0) {
//         console.log('I found a ' + i + '. Three is a crowd');
//     }
//   }

//SAVINGS ACCOUNT

let bank_account = 0;
for (let i = 0; i <= 10; i++) {
  bank_account += i;
}
console.log(bank_account);

let bonus = 0;

for (let i = 0; i <= 100; i++) {
  bonus += i;
}
bonus = bonus * 2;
console.log(bonus);

/*TALK ABOUT IT
what are the things in n array called? Elements
Do Arrays guarantee those things will be in order? Yes the order is guaranteed
What real-life thing could you model with an array? The items in my house each room would be the main of the array and each item in that room wiil be another array (i.e.  kitchen[cabinets[]fridge[]freezer[]])
*/
let quotes = [
  "Make today a  great day or not, the choice is yours",
  "Never Give Up",
  "Just Do It",
];

// Given the following array
const randomThings = [1, 10, "Hello", true];

//How do you access the 1st element in the array?
console.log(randomThings[0]);
//Change the value of "Hello" to "World"
randomThings[2] = "World";
console.log(randomThings[2]);

//CHANGE VALUES
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
//What would you write to acces the 3rd element of the array?
console.log(ourClass[2]);
//Chang the value of "Github"
ourClass[4] = "Octocat";
//Add a new element, "Cloud City" to array
ourClass.push("Cloud City");
console.log(ourClass);

//MIX IT UP
const myArray = [5, 10, 500, 2];
//Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// Remove the 5from the beginning of the array.
myArray.shift();
console.log(myArray);
// Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley");
console.log(myArray);
// Remove the string of your choice from the end of the array.
let newArray = myArray.pop();
console.log(newArray + " <--element that was removed");
console.log(myArray);
// Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
const reverseArray = myArray.reverse();
console.log(reverseArray);
//This flips the array around, this mutate means that the index that was at the end of the array is now at the beginning

//BIGGIE SMALLS
let s1 = 99;
if (s1 < 100) {
  console.log("Little Number");
} else if (s1 >= 100) {
  console.log("Big Number");
}

//MONKEY IN THE MIDDLE
let num = 16;
if (num < 5) {
  console.log("Little Number");
} else if (num > 10) {
  console.log("Big Number");
} else {
  console.log("Monkey");
}

//WHAT'S IN YOUR CLOSET?
const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps",
];

// Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],
  [
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs",
  ],
  [
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans",
  ],
];

// What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
console.log("Kristyn i rocking that " + kristynsCloset[2] + " today!");
// Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
kristynsCloset.push("raybans");
console.log(kristynsCloset[7]);
// Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset[5] = "stained knit hat";
console.log(kristynsCloset);
// Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
let thomShirt = thomsCloset[0][2];

// In the same way, access one item from Thom's pants array.
let thomPants = thomsCloset[1][1];
// Access one item from Thom's accessories array.
let thomAcc = thomsCloset[2][2];
// Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(
  "Thomas' outfit is ",
  thomShirt + " ," + thomPants + " , " + thomAcc
);
// Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas
thomsCloset[1][2] = "Footie Pajamas";
console.log(thomsCloset[1]);

function printGreeting() {
  let name = "Hard Code";
  console.log(`Hello, there, ${name}`);
}
printGreeting();
printGreeting("leann");
function printCool(name = "Blake") {
  //let name = "Hard Code"
  console.log(`"${name} is cool"`);
}
printCool("Captain America");
printCool("Spiderman");
function calculateCube(num) {
  return num * num * num;
}

const sum = calculateCube(5);
console.log(sum);

function isVowel(letter) {
  if (letter == "a" || letter == "A") {
    return true;
  } else if (letter == "e" || letter == "E") {
    return true;
  } else if (letter == "i" || letter == "I") {
    return true;
  } else if (letter == "o" || letter == "O") {
    return true;
  } else if (letter == "u" || letter == "U") {
    return true;
  } else if (letter == "y" || letter == "Y") {
    return true;
  } else {
    return false;
  }
}

console.log(isVowel("e"));
console.log(isVowel("p"));
console.log(isVowel("A"));

function getTwoLengths(name, string2) {
  return [name.length, string2.length];
}

console.log(getTwoLengths("Hank", "wlkjkldjfa;jd"));

function getMultipleLengths(chips) {
  const company = [];
  for (let i = 0; i < chips.length; i++) {
    company.push(chips[i].length);
  }
  return company;
}
console.log(
  getMultipleLengths(["pringles", "doritos", "flamin hot", "fritos"])
);

function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(num1);
  } else if (num2 > num3) {
    console.log(num2);
  } else if (num3 > num1) {
    console.log(num3);
  }
}
maxOfThree(5, 8, 13);

function printLongestWord(arr) {
  let winner = "";
  for (let i = 0; i > arr.length; i++) {
    if (arr[i].length > winner.length || winner == "") {
      winner = arr[i];
    }
    return winner;
  }
}
console.log(printLongestWord(["apple", "pineapple", "orange", "idneallep"]));
//OBJECTS
// Create an object called user.
// Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like
const person = {
  name: "Jason",
  email: "leandreiablakemore@rocketmail.com",
  age: "32",

  purchased: [],
};
//  Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
person.email = "jasonlovepizza@pizza.org";
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++
person.age = age++;
console.log(person.age);
// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).
person.location = "Las Vegas";

//  Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
person.purchased.push("carbohydrates");
//  Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
person.purchased.push("peace of mind");
//  Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
person.purchased.push("Merino jodhpurs");
//  Console.log just the "Merino jodhpurs" from the purchasedarray.
console.log(person.purchased[2]);

console.log(person);

//console.log(person);
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)

// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
person.friend = {
  name: "Daffy Duck",
  age: 101,
  location: "Looney Tunez Lane",
  purchased: [],
};
// Console.log just the friend's name
console.log(person.friend.name);
// Console.log just the friend's location
console.log(person.friend.location);
// CHANGE the friend's age to 55
person.friend.age = 55;
console.log(person.friend.age);
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
person.friend.purchased.push("The One Ring");
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
person.friend.purchased.push("the latte");
// Console.log just "A latte" from the friend's purchasedarray.
console.log(person.friend.purchased[1]);

// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
for (let i = 0; i < person.purchased.length; i++) {
  console.log(person.purchased[i]);
}
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.
for (let i = 0; i < person.friend.purchased.length; i++) {
  console.log(person.friend.purchased[i]);
}
// A new comment
// function updateUser () {
//     (...person)
//     person.age: person.age++;
//     person.name.toLowerCase();
// }
// updateUser(person);
// console.log(person);

// firstVariable = "hello world";
// firstVariable = 1;
// let secondVariable = firstVariable;
// secondVariable = "any string";

// console.log(firstVariable); //1

// const yourName = "Ariel";
//let hello = `Hello, my name is ${yourName}`
// console.log(hello);

//BOOLEANS

// const a = 4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = 'Kevin';

// console.log(a < b);
// console.log(c > d);
// console.log('Name' == 'Name');

//FOR THE NEXT TWO, USE ONLY && OR ||
// console.log(true || false);
// console.log(false && false && false && false && false || true);
// console.log(false === false)
// console.log(e == 'Kevin');
// console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// console.log(a == a || d); // note: the answer is a simple arithmetic equation, not something "weird" console.log(48 __ '48');

// //the Farm
// let animal = "cow";

// const moo = (a) => {
//    return a.toLowerCase === "cow"? "mooooo" : "hey, that's not a cow"
// }

// console.log(moo(animal));
// //Driver's Ed

//LOOPS

//The Basics

//Get Even

//Give Me 5

//Savings Account

//ARRAYS & CONTROL FLOW

//OBJECTS

// let longest = array.reduce( (firstEl, secondEl) => {
//         //if the first el is greater than the second el return firstEl
//         return firstEl.length > secondEl.length ? firstEl : secondEl;
//     }
// );

// console.log(longest)

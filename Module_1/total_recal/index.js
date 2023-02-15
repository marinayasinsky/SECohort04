// // Example of What your JS File in VS Code should look like


// /*
// 	Remember!!! Once you’ve completed a problem,
// 	COMMENT OUT YOUR WORK before moving on to the next one.
// 	This makes it easier to read and debug the current 
// 	Solution you are working on.
// */


// // I. Variables & Data Types
// // A. Q +  A
// // B. Strings For all other questions that involve writing code, you can solve them via the following instructions.
// Create a variable called firstVariable
// Assign it the value of the string "Hello World"
// Change the value of this variable to some number
// Store the value of firstVariablein a new variable called secondVariable
// Change the value of secondVariableto any string.
// What is the value of firstVariable?
// Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.

// // let firstVariable = "Hello World";
// // firstVariable = 5;
// // let secondVariable = firstVariable;
// // let yourName = "Hello, my name is Marina";

// // console.log(firstVariable);
// // console.log(secondVariable);
// // console.log(yourName);

// // C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console
// // const a = 4;
// // const b = 53;
// // const c = 57;
// // const d = 16;
// // const e = 'Kevin';

// // console.log(a < b);
// // console.log(c > d);
// // console.log('Name' === 'Name');
// // // FOR THE NEXT TWO, USE ONLY && OR ||
// // console.log(true || false);
// // console.log(false && false && false && false && false || true);
// // console.log(false === false)
// // console.log(e === 'Kevin');
// // console.log(a != b != c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
// // console.log(a === a || d); // note: the answer is a simple arithmetic equation, not something "weird"
// // console.log(48 >= '48');


// // D. The Farm
// Write code that will print out "mooooo" if the it is equal to cow
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
// Commit

// // let animal = "";
// // if (animal === "cow"){
// // 	console.log("mooooo");
// // } else {
// // 	console.log("Hey! You're not a cow.");
// // }
// // animal = "cow";


// // // E. Driver's Ed
// Make a variable that holds a person's age; be semantic
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."

// // let personAge = 18;
// // if (personAge >= 16){
// // 	console.log("Here are the keys.");
// // } else {
// // 	console.log("Sorry, you're too young.");
// // }
// // personAge = 21;



// // II. LoopsRemember: USE letwhen you initialize your for loops!
// This is GOOD: for(let i = 0; i < 100; i++)
// This is NO GOOD: for(i = 0; i < 100; i++)

// // A. The Basics
// Write a loop that will print out all the numbers from 0 to 10, inclusive
// Write a loop that will print out all the numbers from 10 up to and including 400
// Write a loop that will print out every third number starting with 12 and going no higher than 4000

// // for (let a = 0; a < 11; a++){
// // 	console.log(a);
// // };
// // for (a = 10; a < 4001; a++){
// // 	console.log(a);
// // };
// // for (a = 10; a < 4001; a += 2){
// // 	console.log(a);
// // };
// // B. Get even
// Print out the numbers that are within the range of 1 - 100
// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"

// // for (let i = 1; i <= 100; i++) {
// //     if (i % 2 === 0) {
// //       console.log(i + ' <-- is an even number');
// //     } else {
// //       console.log(i);
// //     }
// // }



// // C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three

// // for (let i = 0; i < 100; i++) {
// // if ( 0 === i % 5 && 3 === 0 ) {
// //     console.log("I found a " + i + ". High five!");
// // 	console.log("I found a " + i + ". Three is a crowd");

//For numbers divisible by both three and five, be sure your code prints both messages

// // } else if ( i % 5 === 0) {
// //     console.log("I found a " + i + ". High five!");
// // } else if (i % 3 === 0) {
// //     console.log("I found a " + i + ". Three is a crowd" );
// // }
// // }

// // D. Savings account Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
// You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.

// let bank_account = 0
// for (let i = 0; i < 11; i++) {
//     bank_account +=i;
// }
// console.log(bank_account);

// bank_account = 0
// for (let i =0; i <101; i++ ) {
//     bank_account += i * 2;
// }
// console.log(bank_account);

// // III. Arrays & Control Flow
// // A. Talk about it:
// // B. Easy Does It B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes

// let quotes = ["Let it be!", "Fun times!", "Let roll!"];
// console.log(quotes);

// // C. Accessing elements
// const randomThings = [1, 10, "Hello", true];
// randomThings [0];
// randomThings [2] = "World";
// console.log(randomThings);

// // D. Change values
// const ourClass =["Salty", "Zoom", "Sardine", "Slack", "Github"];
// ourClass[2];
// ourClass[4] = "Octocat";
// ourClass.push ("Cloud City");

// console.log(ourClass);

// E. Mix It Up

// const myArray = [5, 10, 500, 20];
// myArray.push("Aegon");
// myArray.shift();
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse();
// console.log(myArray);

// // F. Biggie Smalls
// let numberS = 5;
// if (numberS<100) {
//     console.log("little number");
// } else {
//     console.log("big number");
// }

// // G. Monkey in the Middle

// let numberMonkey = 115;
// if (numberMonkey <5) {
//     console.log("little number");
// } else if (numberMonkey > 10) {
//     console.log("big number");
// } else {
//     console.log("monkey");
// }


// // H. What's in Your Closet?
// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
//   ];
 
//   console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!");
//   kristynsCloset.splice("5, 0, raybans");
//   kristynsCloset[4] = "stained knit hat";

//   // Thom's closet is more complicated. Check out this nested data structure!!
//   const thomsCloset = [
//     [
//       // These are Thom's shirts
//       "grey button-up",
//       "dark grey button-up",
//       "light blue button-up",
//       "blue button-up",
//     ],[
//       // These are Thom's pants
//       "grey jeans",
//       "jeans",
//       "PJs"
//     ],[
//       // Thom's accessories
//       "wool mittens",
//       "wool scarf",
//       "raybans"
//     ]
//   ];

//   thomsCloset[0][1];
//   thomsCloset[1][0];
//   thomsCloset[2][2];

//   console.log("Thom is looking fierce in a" + thomsCloset[0][1]+ "," + thomsCloset[1][0] + "and" + thomsCloset[2][2] + "!");

//   thomsCloset[1][2] = "Footie Pajamas";
 

// // IV. Functions
// // A. printGreeting. Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?

// function printGreeting(name) {
//     return (`Hello there, ${name} !`);
// }
// console.log(printGreeting("Slimer"));

// // B.printCool printCool. Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.

// function printCool(name) {
//     return (`${name} is cool`)
// }
// console.log(printCool("Captain Reynolds"));
// // C. calculateCube. Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.
// function calculateCube(n){
//     return n*n*n;
// }
// console.log(calculateCube(5));

// // D. isVowel Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
// function isVowel(string){
//     if (string === "a" || string === "A" || string === "e" || string === "E" || string === "i" || string === "I" || string === "o" || string === "O" || string === "u" || string === "U") {
// 		return true;
// 	} else {
// 		return false;
// 	}

// }
// console.log(isVowel("a"));

// // E. getTwoLengths Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
// function  getTwoLengths(str1, str2 ){
//     return [str1.length, str2.length];
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"));

// // F. getMultipleLengths Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
// function getMultipleLengths (arrayString) {
//     const MultipleLengths = [];
//     for (i = 0; i < arrayString.length; i ++) {
//         MultipleLengths.push(arrayString[i].length);
//     }
//   return MultipleLengths;
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// // G. maxOfThree Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.
// function maxOfThree(num1, num2, num3) {
//     let max = num1;
//     if (num2 > max) {
//       max = num2;
//     }
//     if (num3 > max) {
//       max = num3;
//     }
//     return max;
//   }
// console.log(maxOfThree(6, 9, 1));
// // H. printLongestWord Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

function printLongestWord(singleArg){
    let longestWord = "";
    for (let i = 0; i < singleArg.length; i ++) {
 if (singleArg[i].length > longestWord.length) {
    longestWord = singleArg[i];
}
    } 
    return longestWord;

}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// // //_____________________________________________________________


// //* V. Objects
// // A.Make a user object Create an object called user. Write in to the object the key-value pairs for name, email, age, and purchased. Set the value of purchasedto an empty array []. Set the other values to whatever you would like.

const user = { 
    name: "Billy" ,
    email: "billy@gmail.com",
    age: "15",
    purchased: [],
    friend: {
        name: "",
        age: "85",
        location: "",
        purchased: [],
    }
};

// // B. Update the user
// Our user has changed his or her email address. Without changing the original userobject, update the emailvalue to a new email address.
// Our user has had a birthday! Without changing the original userobject, increment the agevalue using the postfix operator. Hint: age++

user.email = "billy@mail.com";
console.log(user.email);

user.age++
console.log(user.age)
// // C.Adding keys and values
// You have decided to add your user's location to the data that you want to collect.

// Without changing the original userobject, add a new key locationto the object, and give it a value or some-or-other location (a string).

user ["location"] = "New York";
console.log(user.location);
// // D.Shopaholic!
// Our user has purchased an item! They have purchased some "carbohydrates". Using .push(), add the string "carbohydrates" to the purchasedarray.
// Our user has purchased an item! They have purchased some "peace of mind". Using .push(), add the string "peace of mind" to the purchasedarray.
// Our user has purchased an item! They have purchased some "Merino jodhpurs". Using .push(), add the string "Merino jodhpurs" to the purchasedarray.
// Console.log just the "Merino jodhpurs" from the purchasedarray.

user.purchased.push("carbohydrates", "peace of mind","Merino jodhpurs" )
console.log(user.purchased[2]);
// //* E. Object-within-object
// Write a friendobject into your userobject and give the friend a name, age, location, and purchased array (empty for now)
// Console.log just the friend's name
// Console.log just the friend's location
// CHANGE the friend's age to 55
// The friendhas purchased "The One Ring". Use .push()to add "The One Ring" to the friend's purchasedarray.
// The friendhas purchased "A latte". Use .push()to add "A latte" to the friend's purchasedarray.
// Console.log just "A latte" from the friend's purchasedarray.

user.friend.name = "Sam"; 
console.log(user.friend.name);
user.friend.location = "Washington";
console.log(user.friend.location);
user.friend ["age"] = 55;
console.log(user.friend.age);
user.friend.purchased.push("The One Ring", "A latte" );
console.log(user.friend.purchased[1]);
// //* F.Loops
// Write a for loop that iterates over the User's purchasedarray (NOT the friend's purchased array), and prints each element to the console.
// Write a for loop that iterates over the Friend's purchasedarray, and prints each element to the console.

for ( let i =0; i < user.purchased.length; i++ ) {
 console.log(user.purchased[i]);
}

for ( let c = 0; c < user.friend.purchased.length; c++) {
    console.log(user.friend.purchased[c]);
}

// //* G.Functions can operate on objects
// Write a single function updateUserthat takes no parameters. When the function is run, it should:
// it should increment the user's age by 1
// make the user's name uppercase
// The function does not need a returnstatement, it will merely modify the user object.

// Write a function oldAndLoudthat performs the exact same tasks as updateUser, but instead of hard-coding it to only work on our userobject, make it take a parameter person, and have it modify the object that is passed in as an argument when the function is called. Call your oldAndLoudfunction with useras the argument.


// function updateUser()  {
//     user.age++;
//     user.name = user.name.toUpperCase();
// }
// updateUser();
// console.log(user);

function oldAndLoud (person) {
    person.age++;
    person.name = person.name.toUpperCase();

}
oldAndLoud(user);
console.log(user);

// //_____________________________________________________________


// // Extra





// // Example of What your JS File in VS Code should look like


// /*
// 	Remember!!! Once you’ve completed a problem,
// 	COMMENT OUT YOUR WORK before moving on to the next one.
// 	This makes it easier to read and debug the current 
// 	Solution you are working on.
// */


// // I. Variables & Data Types
// // A. Q +  A
// // B. Strings
// // let firstVariable = "Hello World";
// // firstVariable = 5;
// // let secondVariable = firstVariable;
// // let yourName = "Hello, my name is Marina";

// // console.log(firstVariable);
// // console.log(secondVariable);
// // console.log(yourName);

// // C. Booleans
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
// // let animal = "";
// // if (animal === "cow"){
// // 	console.log("mooooo");
// // } else {
// // 	console.log("Hey! You're not a cow.");
// // }
// // animal = "cow";


// // // E. Driver's Ed
// // let personAge = 18;
// // if (personAge >= 16){
// // 	console.log("Here are the keys.");
// // } else {
// // 	console.log("Sorry, you're too young.");
// // }
// // personAge = 21;



// // II. Loops
// // A. The Basics
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
// // for (let i = 1; i <= 100; i++) {
// //     if (i % 2 === 0) {
// //       console.log(i + ' <-- is an even number');
// //     } else {
// //       console.log(i);
// //     }
// // }



// // C. Give me Five
// // for (let i = 0; i < 100; i++) {
// // if ( 0 === i % 5 && 3 === 0 ) {
// //     console.log("I found a " + i + ". High five!");
// // 	console.log("I found a " + i + ". Three is a crowd");
// // } else if ( i % 5 === 0) {
// //     console.log("I found a " + i + ". High five!");
// // } else if (i % 3 === 0) {
// //     console.log("I found a " + i + ". Three is a crowd" );
// // }
// // }

// // D. Savings account
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
// // B. Easy Does It
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
    var longestWord = singleArg[0].length;
    var longestStrin = singleArg[0];

    for (i = 0; i < singleArg.length; i ++) {
 if (singleArg[i].length > longestWord) {
    longestStrin = singleArg[i];
    longestWord = singleArg[i].length;
}
    } 
    return longestWord;

}
console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// //_____________________________________________________________






// // V. Objects
// // A.
// // B.
// // C.
// // D.
// // E.
// // F.
// // G.
// //_____________________________________________________________


// // Extra





////////////////////////////////
//* Easy Going
//Write a for loop that will log the numbers 1 through 20.
// for ( let i = 0 ; i < 20 ; i++) {
//     console.log("Easy Going answered");
// }


//* Get Even
//Write a for loop that will log only the even numbers in 0 through 200.
// for (let i = 0; i <100; i+=2) {
// console.log(i);
// console.log("Get Even answered");
// }

//* Fizz Buzz
//This is a classic problem that you should get really comfortable solving. If you've solved it before, try to make it more elegant and short.

// Write a javascript application that logs all numbers from 1 - 100.
// If a number is divisible by 3 log "Fizz" instead of the number.
// If a number is divisible by 5 log "Buzz" instead of the number.
// If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.


// for (let i =0; i<=100; i++){
//     if ( i % 3 ==0 && i % 5 == 0) {
//         console.log("FizzBuzz");
//     } else if ( i % 3 === 0) {
//         console.log("Fizz");
//     } else if ( i % 5 === 0) {
//         console.log("Buzz");
//     } else {
//         console.log("FizzBuzz");
//     }
// }
////////////////////////////////
//* Wild Wild Life
// Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
// Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!


// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// porgee[2] +=1;
// console.log(porgee);
//  wolfy[3] = "Gotham City";
//  console.log(wolfy);
//  dart.push("Hawkins");
//  console.log(dart);
//  wolfy.splice(0,1,"Gameboy");
// console.log(wolfy);


////////////////////////////////
//* Yell at the Ninja Turtles
//Create an array with the members of the ninja turtles (Donatello, Leonardo, Raphael, Michaelangelo)
//Use a for of loop(not a typo - try it out! Try a for ofloop) to call toUpperCase()on each of them and print out the result.
// As a developer, you'll be a lifelong learner and constantly encountering new things. We'll give you little stretches like this to get you used to looking at documentation and figuring some things out on your own. You've got this!

// let ninjaTurtles = [ 'Donatello', 'Leonardo', 'Raphael', 'Michaelangelo']
// console.log(ninjaTurtles);
// for (const element of ninjaTurtles) {
//     console.log (element.toUpperCase());
//      }
   

//* Methods, Revisited

// const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

// //Console log: the index of Titanic
// console.log (favMovies.indexOf("Titanic"));

// // Use the method pop
// favMovies.pop();

// // push"Guardians of the Galaxy"
// favMovies.push("Guardians of the Galaxy");

// //Reverse the array
// favMovies.reverse();

// //Use the shift method
// favMovies.shift();

// // unshift- what does it return?
// console.log(favMovies.unshift('Snatch'));
// console.log(favMovies);

// // splice"Django Unchained" and add "Avatar" (try finding the index of "Django Unchained", instead of counting it yourself) Thought question: did this permanently alter our array?

// let index = favMovies.indexOf("Django Unchained");
// favMovies.splice(index, 1, 'Avatar')

// // slicethe last half of the array (challenge yourself and try to programatically determine the middle of the array rather than counting it and hard coding it) - Thought question: did this permanently alter our array?
 
// mid = Math.ceil(favMovies.length/2),
// obj = {
//     right: favMovies.slice(mid)
// }

// // store the value of your slicein a variable, console.log it - Thought question: what is going on here?
// console.log(favMovies.slice(mid));

// // console.log your final results
// console.log (favMovies);

// // After running the above tasks, console.log the index of "Fast and Furious" -We removed it from the array, what value do we get when we look for the index of something that is not in the array?

// console.log(favMovies.indexOf("Fast and Furious"))

// // Thought question: that we declared the variable favMovieswith const, and yet, we were allowed to change the array. Weird? Should we have used let?

// console.log("Methods Revisited answered")

//* Where is Waldo
const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];



//Remove Eggbert (hint look at the slice/splice method(s))
whereIsWaldo.slice(whereIsWaldo.indexOf("Eggbert"),1); 
// Change "Neff" to "No One"
// Access and console.log "Waldo"

console.log (whereIsWaldo[0]);//[ 'Timmy', 'Frank' ]
console.log (whereIsWaldo[1]);//Eggbert
console.log (whereIsWaldo[2]);//[ 'Lucinda', 'Jacc', 'Neff', 'Snoop' ]
console.log (whereIsWaldo[3]);//[ 'Petunia', [ 'Baked Goods', 'Waldo' ] ]

//*  Excited Kitten
////////////////////////////////


////////////////////////////////
//*  Find the Median
////////////////////////////////
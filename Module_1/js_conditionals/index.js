// // Global Scope

// // const favColor = "blue";

// // if (favColor === "red") {
// //     // if true, run this code:
// //     alert("Nice Color")
// // } else {
// //     // if false, run this code:
// //     alert("I don't know that color")
// // }




// // //: || OR operator (either side can be true)
// // //: && AND operator (both sides need to be true)

// const score = 100;
// const userLoggedIn = true;

// if (score > 60 && score <= 99) {
//     alert("You Win!")

// } else if (score >= 50 || score <= 59) {
//     alert("Try again!")
// } else if (score === 100 && userLoggedIn === true){
//     alert("Congrats to have a new high score!")
// } else {
//     alert("You lose!")
// }

// // Exe.1

// const num = 4;

// if (num < 0) {
//     // alert("Negative Number");
// } else if(num > 0) {
//     // alert("Positive Number")
// } 
// else {
//     // alert("is either");
// }

// // Exe.2

// let age = prompt("Please enter your age ");
// if  (age >= 18) {
//     alert ("You have the access to login");
// } else {
//     alert("Sorry you cant login..! You should be 18");
// }


// //ex.3
// const age = 62;
// const userName = "Alex";

// if (age >= 18) {
//     // check if user is older than 18
//     alert("Older then 18");
     
//     // check for ticket price by age 
//     if(age <=60) {
//         alert('You pay 7')
//     } else {
//         alert("Free movie day!")
//     }

// } else {
//         alert("Too young!")
//     }

// ex.4

// let num = prompt("Enter any number");

// if(num > 0 && num >100) {
// alert(value + " Number is positive and greater than 100");
//     if (num === 100)
//     {
//      alert (value + " Number is positive and equal to 100");
//     }
// }

// else if(num > 0 && num < 100){
    
//     alert(value + " Number is positive and less than 100");
// }
//     else {
//     alert(value + " Number is negative");
//     }



// // ex.5
// const grade = prompt (Enter your value!);

// if( grade >=90) {
//     alert ("A")
// } else if( grade >=80) {
//     alert ("B")
// } else if( grade >=70) {
//     alert ("C")
// } else if ( grade >=55) {
//     alert ("D")
// } else if (grade <55) {
//     alert("F")
// }

// // ex.6

// // const grade = 45;


// // if( grade >=80) {
// //     alert ("You did a good job!")
// // } else if( grade >=70) {
// //     alert ("Keep trying")
// // } else if( grade >=60) {
// //     alert ("ehh")
// // } else if ( grade >=55) {
// //     alert ("Not too good")
// // } else if (grade <55) {
// //     alert("Bad Grade But You'll Get Em Next Time")
// // }

// lab.
const  color = "pink";

switch (color){
    case "red":
        console.log("Color is red");
        break;

        case "yellow":
            console.log("Color is yellow");
            break;

            case "purple":
                color.log("Color is purple");
                break;

                default:
                    console.log("Please pick a color!")

}
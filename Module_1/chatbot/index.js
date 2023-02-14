
// Ask user for input
var userName = prompt(" Hello, what is your name?");

console.log(typeof userName);

var favNumber = prompt(userName + " whats your favorite number?");

console.log(typeof favNumber );

//alert the user
alert("Cool " + "" + userName + " nice favorite number " + favNumber);

// Template string
alert(`Cool ${userName} nice favorite number ${favNumber}`);

//My script - athleteChatBot
var sport = prompt("What's your favorite sport " + userName + "?" );

alert("Fantastic!  " + sport + "is a great choice!");

//My script - 
var time = prompt("How long have you been " + sport +"?" );

alert(time + " Seems like a life time!")

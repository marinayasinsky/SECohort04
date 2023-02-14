// sayHello()
// // sayBye 

// // function definition hoisted
// function sayHello() {
//       // body of the function 
//     console.log("Hello!");
// }

// //function expression 
// const sayBye = function () {
//     console.log("Bye!")
// }

// sayBye()

// // Arrow function 
// const sayHelloWorld  = () => console.log("Hello World!");


// sayHelloWorld()

// //
// function add(num1, num2) {
//     console.log("From function", num1, num2);
//     return num1 + num2;
// }

// const result = add(3, 5)
// console.log(result);

// function areBothEven(n1, n2) {
//     if (typeof(n1) !== "number" || typeof(n2) !== "number"){
//         console.log(" Arguments must be of type numbers!");
//     }
//     return !(n1 %2) && !(n2 % 2 ===0);
// }

// const isEven = areBothEven(2, 4);
// console.log(isEven);


// function getDevObject(name) {
//     const skills = [];

//     for (let i  = 1; i < arguments.length; i++) {
//         skills.push(arguments[i])
//     }
//     return {
//         devName: name, 
//         skills: skills
//     }
// }
// const devObj = getDevObject("Maria", "Smith", "html", "css");
// // console.log(devObj);

// function getDevFullObject (name, lastName, skills){
//     console.log(name);
//     console.log(lastName);
//     console.log(skills);
//     return {
//         devName: name,
//         devLastName: lastName,
//         devSkills: skills
//     }
// }

// function setColor(bike, color = "purple", size = 20) {
//     return {
//         bikeType: bike,
//         bikeColor: color, 
//     }
// }
// const bikeObj = setColor("bmx",undefined, 18)
// console.log(bikeObj);

// const colorsArr = ['red', 'green', 'blue'];

// colorsArr.forEach(function(color){
//     console.log(color.toUpperCase())
// }
// )

// Wednesday class 02/08

// function foo(x) {
//     let r = x + 4; 

//     function bar (){
//         let total = x+10
//     } console.log (r);
// }
// console.log(window);

// var pollution = 'this is bad'
// console.log(window.pollution);

// function sayHello () {
//     console.log('hello');
//     sayHello();
// }

// function printXTimes(n) {
//     // the base case
//     if (n < 0) return;
//     // the action
//     console.log(`${n} more prints to go`);
//     // the recursive call
//     printXTimes(n - 1);
// }
// printXTimes(3)


function factorial(n){
    if (n <= 0) return 1;
    console.log(`Will return ${n} * factorial(${n - 1})`)
    return n * factorial(n-1);
}
factorial(4)


// // iterator ; condition; incrementor
// // for (let i = 5; i >= 0; i--) {
// //     // console.log(i);
// // }


// // for (let i = 0; i <= 10; i = i + 2) {
// //     console.log(i);
// // }

// // for (let i = 2; i < 11; i += 2) {
// //     console.log (i);
// // }

// // for (let i =6; i < 61; i +=3 ) {
// //     console.log (i);
// // }

// // for (let i = "#"; i <= "########"; i += "#") {
// //     console.log (i);
// // }

// // for (let i = 0; i < 5; i++) {
// //     let hash = " ";
// //     for (let j = i; j < 5; j++) {
// //       hash = "#" + hash;
// //     }
// //     console.log(hash);
// //   }

// for (let i = 1; i <= 20; i++) {
//         // console.log(i);

//         if (i % 2 === 0) {
//             // console.log(i + "is even");
//         } else if (i % 2 !==0) {
//             // console.log(i + " is odd");
//         }
// }

// for (let i = 1; i <= 20; i++) {
//     // Prime number 
//     // a whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1 (e.g. 2, 3, 5, 7, 11) 
//     let isPrime = true;

//     for (let j = 2; j < i; j++) {
//         // console.log(j, " - " , i);
//         if (i % j === 0) {
//             // console.log (i + "Not a prime number");
//             isPrime  = false;
//         }
//     }
//     if (isPrime) {
//         // console.log(i + "is prime");
//     }
// }

// for (let i = 0; i < 3; i++) {
//     console.log(i + " Otter Loop");

//     for (let j = 0; j < 3; j++){
//         console.log(j, " Inner Loop");
//     }
// }

// //* WHILE LOOPS

// let counter = 0;
// while(counter = 5) {
//     console.log(counter);
    
//     if (counter === 3) {
//         counter++ //continue ; // skip one iteration 
//     }

//     if  (counter ===4) {
//         break; // stop pr break out of the loop 
//     }
    
//     counter++
// }

// //* Countdown 

// const countdown = 10;

// while(countdown >= 0) {
//     console.log(countdown);
// //incrementor
//     countdown-=2;
// }

//* exercise 1 Keep printing integers in multiples of 3 as long as integers are less than 35 using a while loop
let i = 3;
while (i < 35) {
  console.log(i);
  i += 3;
}

//* exercise 2 Keep printing integers in multiples of 5 as long as integers are less than 100
let j =0
while (j < 100) {
    console.log(j += 5);
  }

  //* exercise 3 Using a while loop print integers between 0 and 20. All numbers divisible by 2 should be multiplied by 3 before they are output. All other integers should not be output.
  let z = 0;
  while (z <= 20) {
    if (z % 2 === 0) {
      console.log(z * 3);
    }
    z++;
  }

  //* ex4 Using a while loop, print out all prime numbers between 0 - 20
  let num = 2; 

  while(num <= 20) {
    let isPrime = true;
    let k = 2;
    // check if num is divisive by any numbers from i-num
    while(k < num){
        if (num % k ===0){
            isPrime = false;
            break;
           }
        k++
        }
        if (isPrime){
            console.log(num);
        }
    }
  
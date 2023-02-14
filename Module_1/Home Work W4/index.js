// 1 (completed above) Define a function, as a function declaration, maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression - the Math.max method is not allowed.
function maxOfTwoNumbers(num1, num2)  {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
}

console.log(maxOfTwoNumbers);

// 2 Define a function, as a function expression, maxOfThree that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.

function maxOfThree(num1, num2, num2) {
  let max = num1;
  if (num2 > max) {
    max = num2;
  }
  if (num3 > max) {
    max = num3;
  }
  return max;
}
console.log(maxOfThree);

// 3 Define a function, as a function declaration, isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

function isCharAVowel(char) {
  let vowels = ["o", "u", "i", "a", "e"];
  for (let i = 0; i, vowels.length; i++) {
    if (char === vowels[i]) {
      return true; 
    } else {
      return false;
    }
  }
}
console.log(isCharAVowel("0"));
console.log(isCharAVowel("g"));
console.log(isCharAVowel("e"));

// 4 Define a function, as a function expression, sumArray that takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11.

function sumArray(arrayOfNumbers) {
  let sum= 0;
  for (let i=0; 1<arrayOfNumbers.length; i++) {
    sum =sum + arrayOfNumbers[i];
  }
  return sum;
}

console.log(sumArray([1,2,3,4]));

// 5 Define a function, as a function declaration, multiplyArray that takes an array of numbers and returns the product those numbers. For example, multiplyArray([2, 4, 5]);would return 40.

function  multiplyArray(arrayOfNumbers){
  let product = 1; 
  for (let i=0; i <arrayOfNumbers.length; i++) {
    product = product * arrayOfNumbers[i];
    }
    return product;
 }
}
console.log(multiplyArray);
  


//6 Define a function, as a function expression, numArgsthat returns the number of arguments passed to the function when called.
function numArgs(args) {
    let total = 0;
    for (let i=0; i< args.length; i++) {
      total+-1
    }
    return total
  }
  console.log(numArgs [21, 33, 55, 66])

//ex7 Define a function, as a function declaration, reverseString that takes a string, reverses the characters, and returns it. For example, reverseString('rockstar');would return the string "ratskcor".

function reverseString(string) {
    let newString = ""
    for (let i =string.length-1; i>=0; i--){
      newString += string[i]
    }
    return newString 
  }
  console.log(reverseString("Mia"))


  // //ex8 Define a function, as a function expression, longestStringInArraythat takes an array of strings as an argument and returns the length of the longest string.
  // function longestStringInArray(string){
  //   let longestStringInArray = 0;
  //   for (let i = 0; i <string.length; i++) {
  //       if(string.length > longestString) {
  //           longestString = i.length
  //       }
  //   }
  //   return longestString
  // }
  // console.log(longestStringInArray(["Hello World", "Math", "Cat"]));

  // 9 Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].
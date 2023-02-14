
// // Declare a new class
// class Player {
//     legs = 2;
//     arms = 2;
//     eyes = 2;
//     #hair // creates private prop
//     health = 500;
//     damage = 100;
    
//     constructor(name, age, hair) {
//         this.name = name;
//         this.age = age;
//         this.#hair = hair;
//         this.lovesPizza = true;
    
//     }

//     // instance method
//     greet(otherCharacter = 'friend') {
//         console.log(`Hello ${otherCharacter}`);
//     }

//     attack() {
//         console.log(`${this.name} is attacking`);
//     }
//     takeDamage(damage) {
//         this.health -= damage;
//         console.log(`${this.name} now has a health level of: ${this.health}`);
//     }

//     //Setter method
//     setHair(newHairColor) {
//         this.#hair = newHairColor;
//     }
//     // Getter method 
//     getHair() {
//         console.log(this.#hair);
        
//     }
// }

// const mario = new Player("Mario", 32, "black");
// const luigi = new Player("Luigi", 30, "purple");

// mario.greet();
// luigi.greet();

// mario.attack();
// luigi.attack();

// console.log(mario instanceof Player);

// // access a private group
// console.log(mario.hair);

// // update a prop using dot notification 
// console.log(mario.hair);

// // creates a new prop (hair) which is not equal to #hair
// mario.hair = "yellow";

// mario.setHair('red');
// mario.getHair()

// // friend class
// class Friend extends Player {
//     constructor(name, age, hair, ... skills) {
//         super(name, age, hair); // send the values to the parent class
//         this.skills = skills;  // new array of skills
//      }

//     fly() {
//         console.log(`${this.name} is flying...`);
//     }
//     // overwritting the attack method from parent class
//     attack(){
//         console.log("Fireball!!!");
//     }
//     doubleAttack() {
//         super.attack();
//         this.attack();

//     }
// }

// class Enemy extends Player {

// }

// const toad = new Friend("Toad", 18, "mushroom", 'builder', 'jumper', 'runner');
// const bowser = new Enemy("Bowser", 38, "null");

// console.log(mario);
// console.log(luigi);
// console.log(toad);
// toad.doubleAttack()

// bowser.setHair("Hot Pink");
// console.log(bowser);

// const randomNum = Math.floor(Math.random() * 2)
// console.log(randomNum);

// if (randomNum < 1) {
//     bowser.takeDamage(mario.damage)
// } else {
//     luigi.takeDamage(bowser.damage)
// }


// //* week 3 Homework day 5 https://perscholas.instructure.com/courses/1297/assignments/265126?module_item_id=776611

// //? Create the cat class
// class Cat {
//     // default values
//     legs = 4;
//     eyes = 2;
//     tails = 1;
//     health = 100;

//     constructor(name, age, color) {
//         this.name = name;
//         this.age = age;
//         this.color = color;
//     }

//     // create a method to pet the cat
//     petCat() {
//         this.health += 100;
//         console.log(`${this.name} loves pets! Health has increased to ${this.health}.`);
//     }

//     // create a method to take walk
//     takeWalk() {
//         this.health -= 10;
//         console.log(`${this.name} loves to walk! But it's not always safe outside... health has decreased to ${this.health}.`);
//     }

//     // create a method for the cat to meow
//     meow(isHappy) {
//         if (isHappy === true) {
//             this.health += 50;
//             console.log(`${this.name} did a happy meow. Health has increased by 50.`);
//         } else {
//             this.health -= 50;
//             console.log(`${this.name} did a sad meow. Health has decreased by 50.`);

//         }
//     }
// }

// //* Create two instances the cat class
// const pete = new Cat("Pete", 12, "brown");
// const penny = new Cat("Penny", 8, "orange");

// // log both instances
// console.log(pete);
// console.log(penny);

// // invoke (use/apply) the petCat() method
// pete.petCat();
// penny.petCat();

// // invoke the takeWalk() method
// pete.takeWalk();
// penny.takeWalk();

// // invoke the meow() method
// pete.meow(true);
// penny.meow(false);

// console.log(pete);
// console.log(penny);




// //* week 3 Homework day Ex 2
// class Pirate {
//     //default values
//     wealth = 100;

//     constructor(name, moustache, hair) {
//         this.name = name;
//         this.moustache = moustache;
//         this.hair = hair;
//     }

// //* create method 
// attack (){
//     wealth += 100;
//     console.log(`${this.name} attacks!`);
// }
// //* create method to sail 
// sail () {
//     console.log(`${this.name} is sailing...`);

// }

// //* create method  rob
// rob () {
//     wealth += 500
//     console.log(`${this.name} is robbing`);
// }
// }
// const pirate1 = new Pirate("pirate1", true, "black");
// const pirate2 = new Pirate("pirate2", false, "orange");
// const pirate3 =new Pirate("pirate3", false, "green");

// const jollyRoger = [ pirate1, pirate2, pirate3]
// const blackPearl = [ new Pirate(), new Pirate(), new Pirate()]

// console.log(jollyRoger);
// console.log(blackPearl);

// for (i= 0; i < jollyRoger.length; i++) {
//     console.log(jollyRoger[i].name);
//     console.log(jollyRoger[i].moustache);
//     console.log(jollyRoger[i].hair);
// }



//* Exercise 3  inheritace 
class Person {
    // default value
    energy = 100;

    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }

    goSleep() {
        energy += 100;
        console.log(`${this.name} is sleeping...`);
    }

    eat() {
        energy += 50;
        console.log(`${this.name} is eating...`);
    }

    running() {
        energy -= 50
        console.log(`${this.name} is running...`);
    }

    finishWork() {
        energy += 400
        console.log(`${this.name} is done with work!!!`);
    }
}

class PostalWorker extends Person {
    
    constructor(name, age, height, yearsOnJob) {
        super(name, age, height);
        this.yearsOnJob = yearsOnJob;
    }

    deliversMail() {
        energy -= 100;
        console.log(`${this.name} is delivering the mail...`);
    }
}

class Chef extends Person {
    cooking(meal) {
        if (meal === "steak") {
            energy -= 100
        } else if (meal === "sandwich") {
            energy -= 20
        } else {
            energy -= 50
        }
    }
}

// Create a postal worker
const jack = new PostalWorker("jack", 32, 6, 4);
console.log(jack);

const marina = new Person("marina", 29, 5)
console.log(marina);
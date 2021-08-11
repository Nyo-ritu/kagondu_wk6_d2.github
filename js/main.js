// The switch case statement

//get current day (0-6)


let day = new Date().getDay();

console.log(day)
//get current day(Sun-Sat)
let literal_day = new Date().toString()

console.log(literal_day)

// switch case statement syntax

switch(day){
    case 0:
        console.log('Go to Church...');
        break;
    case 1:
        console.log('Write code...it is Monday');
        break;
    case 2:
        console.log('Test code on Tuesday');
        break;
    case 3:
        console.log('Testing more code...');
        break;
    case 4:
        console.log('Write new feature for website - Thurs');
        break;
    case 5:
        console.log('hit the bar cus Fridayyyy...');
        break;
    case 6:
        console.log('go to the game');
        break;
    default:
        console.log('That is not a day!')

}




switch(literal_day.split(" ")[0]){
    case "Sun":
        console.log('Go to Church...');
        break;
    case "Mon":
        console.log('Write code...it is Monday');
        break;
    case "Tue":
        console.log('Test code on Tuesday');
        break;
    case "Wed":
        console.log('Testing more code...');
        break;
    case "Thurs":
        console.log('Write new feature for website - Thurs');
        break;
    case "Fri":
        console.log('hit the bar cus Fridayyyy...');
        break;
    case "Sat":
        console.log('go to the game');
        break;
    default:
        console.log('That is not a day!')

}

// Creation of Objects
//Simple JS Object

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Green'
};

console.log(person['name']) // Bracket

console.log(person.name) // Dot notation

// complex js object

let person2 = {
    name: 'Max',
    age: 31,
    prog_langs: ['Java','JS','Python','C#'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjacks']
        },
        {
            baseball: 'Toronto Bluejays',
            football: 'LA Rams',
            basketball: 'Milwalkee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }
    ]
}

// Accessing values from complex object

console.log(person2.prog_langs[3])
console.log(person2.teams[0].basketball[0])

//JS Object Prototype Methods - Object Literal

console.log(Object.keys(person2))
console.log(Object.values(person2))

// Looping thru an object in JS - Looking for Keys

for (let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
};

// List all values from person 2 that are arrays

for (let i = 0; i < Object.values(person2).length; i++){
    if (Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }else{
        console.log('Not an array')
    }
};

// Create our own object prototype -- with ES5 method syntax

function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // Create methods inside of JS prototype
    this .printInfo = (color, wheels = 0) => {
        console.log(`This is a ${this.year} ${this.make} ${this.model}, it has ${wheels} wheels and it is ${color}.`)
        return "Done"
    }

}

// create an instance

let my_car = new Car('Subaru', 'WRX STI', 2020)
//running class method
console.log(my_car.printInfo('red'))


// Javascript Classes - ES6 standard //

class Human{
    constructor(name, age, height){
        this.age = age;
        this.name = name;
        this.height = height;
    }

    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age} \nHeight: ${this.height}`
    }
}

// Create an instance of Human
let jessica = new Human('Jessica', 29, '5ft 8 in')


// Call class method on jessica to print off her info
console.log(jessica.printInfo())

// JS example of Class inheritance

class Baby extends Human{
    constructor(name, age, height, walking){
        super(name, age, height)
        this.walking = walking;
    }

    isBabyWalking(){
        if (this.walking == true){
            return 'Baby can walk!'
        }else{
            return 'Baby cannot walk...'
        }
    }
}

// instantiate baby class
let bob = new Baby('Bob', 1, '1ft 6in', true);

console.log(bob.isBabyWalking())
console.log(bob.printInfo())

// -- JavaScript Closure -- //
/*
    A Closure is a self-invoking function that only runs once.
    It can then set a variable(Which in our case will be a counter) and 
    returns a function expression.

    For this example, we will add to a number after the inital call to the closure has been made.

    BTW JavaScript Closures are another type of variable that can be created.

*/

let count_up = (() => {
    let counter = 0; // This is a private (local) variable stored in this function
    console.log('Count')
    return () => {return counter ++}
})()
console.log(count_up())
console.log(count_up())
console.log(count_up())
console.log(count_up())

// Another example

let addNames = (() => {
    let names = [];
    console.log('Names array created...')
    return(name) => {
        console.log(`Adding ${name} into array....`)
        names.push(name)
        return names

    }
})()

console.log(addNames('Joe'))
console.log(addNames('Jim'))
console.log(addNames('Jack'))


// Async JavaScript Section //

// -- JavaScript Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed after another
    function has finished its execution - hence the name callback.

    More Complex Definition: In JavaScript, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    SOOOO...why do we need them?

    The reason for this is, because of the JavaScript Event Loop. In a nutshell
    JavaScript is an event driven language so this means, that instead of waiting for 
    a response before moving on, JS will keep executing while listening for other events.
*/

// Basic Example

let first = () => {
    console.log(1)
};

let second = () => {
    console.log(2)
};

first()
second()

// What if first takes awhile

let first_delay = () => {
    //simulated delay
    setTimeout(()=>  {
        console.log(1)
    }, 5000)
}

let second_delay = () => {
    console.log(2)
};

// first_delay()
// second_delay()
 
// let doHomework = (subject, callback) =>{
//     alert(`Starting my ${subject} homework`)
//     callback()
// };

// doHomework('Javascript', () => {
//     console.log('Done with homework')
// })


/* Though Callbacks give us more functionality...they also introduce
    their own problem: Callback Hell

    Something that looks like this:
    function1( () => {
        function2( () => {
            function3( () => {
                function4( () => {
                    // Maybe do something here... 🤷🏾‍♂️
                })
            })
        })
    })
*/

// We solve this with JS Promise

// Creating a JS Promise

// const isEvenNumber = (num) => {
//     return new Promise( (resolve, reject) => {
//         if (num % 2 == 0) {
//             resolve(true)
//         }else{
//             reject(false)
//         }
//     })
// }

// //Using the promise isEvenNumber
// isEvenNumber(11)

// //resolver path
// .then( (result) => {
//     console.log(`Even number: ${result}`)
// })


// //reject path
// .catch( (error) => {
//     console.log(`Odd Number ${error}`)
// })

// another example of promises using builtin async / await

// let increase_salary = (base, increase) => {
//     const new_salary = base + increase;
//     console.log(`New Salary: ${new_salary}`)

//  }

// //function to slowly increase salary (meant to simulate going to get some data slowly)

// let slow_addition = (n1,n2) => {
//     return new Promise( (resolve) => {
//         setTimeout( () => resolve(n1+n2), 2000)
//     })
// }
// // increase_salary(40000,2000)
// // console.log(slow_addition(40000, 2000))

// //this will return an unresolved promise and attempt to execute  remaining code because we didn't tell JS to wait
// let increase_slow_salary = (base, increase) => {
//     const new_salary = slow_addition(base, increase);
//     console.log(`New Salary: ${new_salary}`)
//     return new_salary
// }

// increase_slow_salary(40000, 2000)

// // this async function waits for a promise resolution or error to continue executing
// // meant to simulate waiting for a specific user input or some sort of incoming data
//  let async_increase_salary = async(base, increase) =>{
//     const new_salary = await slow_addition(base, increase);
//     console.log(`The new salary is: ${new_salary}`);
//     return new_salary
// }

// async_increase_salary(40000, 40000)



//========== Homework Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/
// let fav_food = () => {
// for (const [key, value] of Object.entries(person3)){
//     console.log(`His favorite ${key} is ${value}`)


let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

let fav_food = () => {
    for (const [key, value] of Object.entries(person3)){
        console.log(`His favorite ${key} is ${value}`)
    }
}
console.log(fav_food(person3))
// Another solution I found online --->   Object.entries(person3).forEach(([key,value])=>console.log(`His favorite ${key} is ${value}`));


//=======Exercise #2=========//
/*
Write an object prototype or class for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype/Class

class Person{
    constructor(name, age){
        this.age = age;
        this.name = name;
    }

    printInfo(){
        return `Name: ${this.name} \nAge: ${this.age}`
    }
}

let jess = new Person('Jess', 29)
let joe = new Person('Joe', 35)


console.log(jess.printInfo())
console.log(joe.printInfo())

let addAge = (() => {
    counter = jess.age 
    return () => {return counter ++}
    
})()

console.log(addAge())
console.log(addAge())
console.log(addAge())
console.log(`Jess is now ${counter}`)


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const over_10 = (str) => {
    return new Promise( (resolve, reject) => {
        if (str.length > 10) {
            resolve(true)
            console.log("Big Word")
        }else{
            reject(false)
            console.log("Small Number")
        }
    })
}

console.log(over_10('hellloooooooo'))

//Codewars Q1. List filtering to return new list without strings

// https://www.codewars.com/kata/53dbd5315a3c69eed20002dd/solutions/javascript


function filter_list(l) {
    return l.filter(digit=>{
      if (typeof digit == 'number'){
        return true
        }
    })
   
  }


  //Codewars Q2. return sorted longest string from two strings that contains only distinct letters. 

  // https://www.codewars.com/kata/5656b6906de340bd1b0000ac/solutions/javascript

  function longest(s1, s2) {
    return [...new Set((s1 +s2).split(''))].sort().join('')
  }
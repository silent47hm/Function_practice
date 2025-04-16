// 1.problem
// ES5 Function: Write a function called greetES5 that takes a name as input and returns
// a greeting like "Hello, [name]!" using the regular function syntax.​

function greetES5 (name){
 return 'Hi ,' + name + '!';
}

// greetES5.name("silent47hm")

let names = greetES5("silent47hm");      //.(dot) is only used for object properties and also check how to add multiple values without using let if possible
let names2 = greetES5("silenthm");
console.log(names,names2);


// 2.problem
//ES6 Arrow Function: Write a similar function called greetES6 using the ES6 arrow
//function style.

const greetES6 = (name) => 'Hi ,' + name + '!';
let namess = greetES6("silenthm");
console.log(namess);
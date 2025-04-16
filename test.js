// -------------------------------Start of 11 function problems----------------------------------------
// 1.problem
//function greetES5 (name){
//  return 'Hi ,' + name + '!';
//}

// greetES5.name("silent47hm")

//let names = greetES5("silent47hm");      //.(dot) is only used for object properties and also check how to add multiple values without using let if possible
//let names2 = greetES5("silenthm");
// console.log(names,names2);


// 2.problem
// 
//  const greetES6 = (name) => 'Hi ,' + name + '!';
// let names = greetES6("silenthm");
// console.log(names);

// 3.problem
// function calculate(square){
//   return square * square;
// }
// let result = calculate(10);
// console.log(result);

// // 4.problem

// (function self() {
//   console.log('IIFE executed!');
  
//   //  return 'self returned';
// })();

// 5.problem
// let arr = ['1','2'];
// function acallback(){
  
//     console.log(arr);
// }

// // higher order function
// function processArrary(func){
//     console.log('I am higher order function')
//     func()
// }

// processArrary(acallback);

// 6.problem
// function makeMultiplier() {
//  function multiplier(multi) {
//     return 'multiplied value'+' ' + multi * multi;
//   }return multiplier(10);
// }

// let finalop = makeMultiplier();
// console.log(finalop);

// 7.problem
// function createCounter() {
//     var x = 1;
//     function getValue() {
//         var y = x+1;
//         console.log("This is the increamented value",y  )
//         return y;
//     }return getValue
// }

// const finalinc = createCounter()
// finalinc()

// 8.problem
function sum(a) {
    a = 12;
    return function a(b) {
        b = 10;
       var mainsum = a + b;
     return mainsum   
    }
}

var sumfi = sum()
console.log(sumfi);


// -------------------------------End of 11 function problems----------------------------------------

// let a = "silent";

// let ara = ["apple",'mango',"pineapple","tomato"];
// ara.pop()
// ara.push("banana")
//  const object = {
//     name :"silent",
//     isStud: true,
//     age : 19,
//     class : "engn",
//     favFruits : ara
//  }

//  object.isStud = false;


// console.log(object);

// function tes(){
//      console.log("arrow return");
     
// }

// tes(5,10)

// let age = 18;
// age => age <= 18;

// console.log(age);

// const arrfunction = () => {
//     return tes();
// }

// arrfunction()

// for (i=10; i >= 10; ++i){

//     console.log("till number 10",i)
// }

// function retuDou(num) {
//     return num * 2;
//   }
  
//   console.log(retuDou(10));



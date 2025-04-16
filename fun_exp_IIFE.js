// 3.problem Function Expression: Create a function that calculates the square of a number and
//assign it to a variable named square. Test it by passing a number to check if it works.​
function calculate(square){
  return square * square;
}
let result = calculate(10);
console.log(result);

// // 4.problem IIFE (Immediately Invoked Function Expression): Write a function that immediately
//runs as soon as it is defined. It should print “IIFE executed!” to the console.​

(function self() {
  console.log('IIFE executed!');
  
  //  return 'self returned';
})();
// 5.problem Write a function called processArray that accepts two things: an array and another
// function (a callback). The function should call the callback on each element of the array
// and return a new array with the results.

let arr = ['1','2'];
function acallback(){
  
    console.log(arr);
}

// higher order function
function processArrary(func){
    console.log('I am higher order function')
    func()
}

processArrary(acallback);
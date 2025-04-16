// 6.problem Write a function called makeMultiplier that takes a number (the multiplier) and
// returns a new function. The new function should take another number and multiply it by
// the multiplier. Test it by creating a function that doubles a number and one that triples a
// number.​


function makeMultiplier() {
 function multiplier(multi) {
    return 'multiplied value'+' ' + multi * multi;
  }return multiplier(10);
}

let finalop = makeMultiplier();
console.log(finalop);
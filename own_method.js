function customMap(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    // console.log(i);
    const squaredNum = callback(arr[i]);

    result.push(squaredNum);
  }

  return result;
}

let numbers = [1, 2, 3, 4];
function squareFunc(num) {
  return num * num;
}

let squared = customMap(numbers, squareFunc);

console.log(squared);
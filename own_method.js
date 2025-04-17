function customMap(arr, callback) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i, arr)); // element, index, full array
    }
  
    return result;
  }
  let numbers = [1, 2, 3, 4];

  let squared = customMap(numbers, function(num) {
    return num * num;
  });
  
  console.log(squared);
    
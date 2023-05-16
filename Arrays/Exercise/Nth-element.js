function Nth(arr, num) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += num) {
    newArr.push(arr[i]);
  }

  return newArr;
}

console.log(Nth([5, 20, 31, 4, 29], 2));

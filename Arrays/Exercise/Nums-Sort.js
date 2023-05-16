function nums(arr) {
  arr = arr.sort((a, b) => a - b);
  let filtered = [];

  for (let i = 0; i < arr.length / 2; i++) {
    filtered.push(arr[i]);
    filtered.push(arr[arr.length - 1 - i]);
  }

  return filtered;
}

console.log(nums([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));

function Extract(arr) {
  let biggest = arr[0];
  return arr.reduce(
    (result, current, i) => {
      if (i > 0 && current >= biggest) {
        result.push(current);
        biggest = current;
      }
      return result;
    },
    [arr[0]]
  );
}

console.log(Extract([]));

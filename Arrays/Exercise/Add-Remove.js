function AorR(arr) {
  let index = 1;
  let aar2 = [];

  for (let i = 0; i < arr.length; i++) {
    arr[i] === "add" ? aar2.push(index) : aar2.pop();
    index++;
  }

  return aar2.length > 0 ? aar2.join("\n") : "Empty";
}

console.log(AorR(["add", "add", "add", "add"]));

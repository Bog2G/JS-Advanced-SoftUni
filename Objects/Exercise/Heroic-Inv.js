function Heroic(arr) {
  let chars = [];
  for (char of arr) {
    char = char.split("/");
    let itemArr = char[2].split(",");
    for (let i = 0; i < itemArr.length; i++) {
      itemArr[i] = itemArr[i].trim();
    }
    chars.push({
      name: char[0].trim(),
      level: Number(char[1]),
      items: itemArr,
    });
  }

  return JSON.stringify(chars);
}

console.log(Heroic([]));

function Calorie(args) {
  let obj = new Object();
  for (let i = 0; i < args.length; i += 2) {
    obj = Object.assign(obj, { [args[i]]: Number(args[i + 1]) });
  }

  return obj;
}

console.log(Calorie(["Yoghurt", "48", "Rise", "138", "Apple", "52"]));

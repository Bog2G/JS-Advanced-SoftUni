function Reactangle(width, height, color) {
  return {
    width: width,
    height: height,
    color: color,
    calcArea: () => width * height,
  };
}

let rect = Reactangle(4, 5, "red");
console.log(rect.calcArea());

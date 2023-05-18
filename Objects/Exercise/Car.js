function CarFac(car) {
  let engObj = {};
  if (car.power <= 90) {
    engObj = { power: 90, volume: 1800 };
  } else if (car.power <= 120) {
    engObj = { power: 120, volume: 2400 };
  } else {
    engObj = { power: 200, volume: 3500 };
  }

  if (car.wheelsize % 2 === 0) {
    car.wheelsize -= 1;
  }

  return {
    model: car.model,
    engine: engObj,
    carriage: { type: car.carriage, color: car.color },
    wheels: new Array(4).fill(car.wheelsize),
  };
}

console.log(
  CarFac({
    model: "Opel Vectra",
    power: 121,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);

function calc(fruit, quantity, price) {
  console.log(
    `I need $${((quantity / 1000) * price).toFixed(2)} to buy ${(
      quantity / 1000
    ).toFixed(2)} kilograms ${fruit}. `
  );
}

calc("orange", 2500, 1.8);

function Lowest(towns) {
  towns = towns.map((town) => town.split(" | "));

  const products = {};

  for (town of towns) {
    if (products[town[1]]) {
      if (products[town[1]].price > Number(town[2])) {
        products[town[1]].price = Number(town[2]);
        products[town[1]].town = town[0];
      }
    } else {
      products[town[1]] = { price: Number(town[2]), town: town[0] };
    }
  }

  for (item in products) {
    console.log(`${item} -> ${products[item].price} (${products[item].town})`);
  }
}

Lowest([
  "Sample Town | Sample Product | 1000",
  "Sample Town | Orange | 2",
  "Sample Town | Peach | 1",
  "Sofia | Orange | 3",
  "Sofia | Peach | 2",
  "New York | Sample Product | 1000.1",
  "New York | Burger | 10",
]);

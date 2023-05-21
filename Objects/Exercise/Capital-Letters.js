function Alphabetical(products) {
  const catalog = {};

  const sortedProducts = products.sort((a, b) => {
    const nameA = a.split(":")[0].trim().toUpperCase();
    const nameB = b.split(":")[0].trim().toUpperCase();
    return nameA.localeCompare(nameB);
  });

  sortedProducts.map((product) => {
    const [name, price] = product.split(":");
    const initial = name.trim().charAt(0).toUpperCase();
    catalog[initial] = catalog[initial] || [];
    catalog[initial].push({
      name: name.trim(),
      price: parseFloat(price.trim()),
    });
  });

  for (const initial in catalog) {
    console.log(initial);
    catalog[initial].forEach((product) => {
      console.log(`  ${product.name}: ${product.price}`);
    });
  }
}

Alphabetical([
  "Appricot : 20.4",
  "Fridge : 1500",
  "TV : 1499",
  "Deodorant : 10",
  "Boiler : 300",
  "Apple : 1.25",
  "Anti-Bug Spray : 15",
  "T-Shirt : 10",
]);

function ToJSON(towns) {
  towns = towns.map((town) =>
    town
      .split("|")
      .filter((el) => el !== "")
      .map((el) => el.trim())
  );
  const objs = [];

  for (let i = 1; i < towns.length; i++) {
    objs.push({
      Town: towns[i][0],
      Latitude: Number(Number(towns[i][1]).toFixed(2)),
      Longitude: Number(Number(towns[i][2]).toFixed(2)),
    });
  }

  return JSON.stringify(objs);
}

console.log(
  ToJSON([
    "| Town | Latitude | Longitude |",
    "| Sofia | 42.696552 | 23.32601 |",
    "| Beijing | 39.913818 | 116.363625 |",
  ])
);

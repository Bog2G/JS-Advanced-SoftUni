function TwoCriteria(arr) {
  return arr
    .sort((a, b) => {
      return a.length === b.length
        ? a.toLowerCase().charCodeAt(0) - b.toLowerCase().charCodeAt(0)
        : a.length - b.length;
    })
    .join("\n");
}

console.log(TwoCriteria(["Isacc", "Theodor", "Jack", "Harrison", "George"]));

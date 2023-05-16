function extractAndConvertToUpperCase(inputString) {
  const words = inputString.split(/\W+/);
  const uppercaseWords = words.map((word) => word.toUpperCase());
  const result = uppercaseWords.join(", ");
  console.log(result);
}

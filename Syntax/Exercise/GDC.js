function gdc(num1, num2) {
  if (!num2) return num1;

  return gdc(num2, num1 % num2);
}

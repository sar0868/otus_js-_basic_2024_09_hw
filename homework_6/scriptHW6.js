function diff(num1, num2) {
  let result = num1 - num2;
  return result > 0 ? result : result * -1;
}

function isWord(text) {
  let regexp = new RegExp("[^\\w+]");
  let result = text.match(regexp);
  return result == null;
}

function pow(a, x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= a;
  }
  return result;
}

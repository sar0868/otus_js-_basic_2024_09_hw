function diff(num1, num2) {
  let result = num1 - num2;
  return result > 0 ? result : result * -1;
}

function isWord(text) {
  let regexp = new RegExp("[^\\w+]");
  return !regexp.test(text);
}

function pow(a, x) {
  let result = 1;
  for (let i = 1; i <= x; i++) {
    result *= a;
  }
  return result;
}

console.log(isWord(" .,"));
console.log(isWord("hello"));
console.log(isWord("hello wiu"));

function diff(num1, num2) {
  const result = num1 - num2;
  return result > 0 ? result : result * -1;
}

function isWord(text) {
  if (text.length === 0) {
    return false;
  }
  const regexp = /\W+/;
  const arr = text.split(regexp);
  return arr.length === 1;
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
console.log(isWord("h.ll"));

module.exports = { diff, isWord, pow };

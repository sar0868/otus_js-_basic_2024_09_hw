export function diff(num1, num2) {
  return Math.abs(num1 -num2);
}

export function isWord(text) {
  if (text.length === 0) {
    return false;
  }
  const regexp = /\W+/;
  const arr = text.split(regexp).map((el) => {
    return el.trim();
  }).filter((el) => el.length != 0);
  return arr.length === 1;
}

export function pow(a, x) {
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

export function sum(a, b) {
  console.log(a + b);
  return a + b;
}

export function mult(a, b) {
  console.log(a * b);
  return a * b;
}

export function totalChar(str1, str2) {
  const sumLengthTexts = str1.length + str2.length;
  console.log(
    `Количество символов в строках ${str1} и ${str2} = ${sumLengthTexts}`
  );
  return sumLengthTexts;
}

export function sumNumbers(number) {
  let sum = 0;
  const numberStr = String(number);
  for (let i = 0; i < numberStr.length; i++) {
    sum += Number(numberStr[i]);
  }
  console.log(`Сумма цифр введеного числа ${number} равна ${sum}`);
  return sum;
}

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
    `Количество символов в строках ${str1} и ${str22} = ${sumLengthTexts}`
  );
  return sumLengthTexts;
}

function sumNumbers(number) {
  let sum = 0;
  for (let i = 0; i < number.length; i++) {
    sum += Number(number[i]);
  }
  console.log(`Сумма цифр введеного числа ${number} равна ${sum}`);
  return sum;
}

// const txt1 = prompt("Input text: ");
// const txt2 = prompt("Input text: ");

// const sumLengthTexts = txt1.length + txt2.length;
// console.log(
//   `Количество символов в строках ${txt1} и ${txt2} = ${sumLengthTexts}`
// );

// const number = prompt("Введите трехзначное число: ");
// let sum = 0;
// for (let i = 0; i < number.length; i++) {
//   sum += Number(number[i]);
// }
// console.log(`Сумма цифр введеного числа ${number} равна ${sum}`);

// module.exports = [sum, mult, totalChar, sumNumbers];

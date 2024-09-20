const a = +prompt("Input number a: ");
const b = +prompt("Input number b: ");
console.log(a + b);

const txt1 = prompt("Input text: ");
const txt2 = prompt("Input text: ");

const sumLengthTexts = txt1.length + txt2.length;
console.log(
  `Количество символов в строках ${txt1} и ${txt2} = ${sumLengthTexts}`
);

const number = prompt("Введите трехзначное число: ");
let sum = 0;
for (let i = 0; i < number.length; i++) {
  sum += Number(number[i]);
}
console.log(`Сумма цифр введеного числа ${number} равна ${sum}`);

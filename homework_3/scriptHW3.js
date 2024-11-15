let sum = 0;
for (let i = 50; i <= 100; i++) {
  sum += i;
}
console.log("Сумма целых цисел от 50 до 100 равна " + sum);

for (let i = 1; i < 9; i++) {
  console.log(`7 x ${i} = ${i * 7}`);
}

const n = +prompt("Введите число N: ");
let summa = 0;
let count = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 != 0) {
    summa += i;
    count++;
  }
}
const avg = summa / count;
console.log(
  "Среднее арифиметическое нечетных чисел от 1 до " + n + " равно " + avg
);

export function sum() {
  let sum = 50;
  for (let i = 51; i <= 100; i++) {
    sum += i;
  }
  console.log("Сумма целых цисел от 50 до 100 равна " + sum);
  return sum;
}

export function mult7() {
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `7 x ${i} = ${i * 7}\n`;
    console.log(`7 x ${i} = ${i * 7}`);
  }
  return result;
}

// function inputN() {
//   return Number(prompt("Введите число N: "));
// }

export function mean(n) {
  let summa = 0;
  let count = 0;
  for (let i = 1; i <= n; i += 2) {
    summa += i;
    count++;
  }
  const avg = summa / count;
  console.log(
    "Среднее арифиметическое нечетных чисел от 1 до " + n + " равно " + avg,
  );
  return avg;
}

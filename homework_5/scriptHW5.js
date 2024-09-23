const arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}
console.log("Массив 10 элементов: ", arr);

let result = arr.reduce((acc, el) => acc + el, 0);
console.log(`Сумма массива [${arr}] = ${result}`);
const arrDouble = arr.map((el) => 2 * el);
console.log("Массив удвоeнных значений: ", arrDouble);
let min = arr[0];
let max = arr[0];
arr.forEach((el) => {
  if (min > el) {
    min = el;
  }
  if (max < el) {
    max = el;
  }
});

console.log(`Минимальное значение массива [${arr}] равно ${min}`);
console.log(`Максимальное значение массива [${arr}] равно ${max}`);

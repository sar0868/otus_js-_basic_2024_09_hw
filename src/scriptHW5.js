const arr = [];
for (let i = 0; i < 10; i++) {
  arr[i] = Math.floor(Math.random() * 100);
}
console.log("Массив 10 элементов: ", arr);

let result = arr.reduce((acc, el) => acc + el, 0);
console.log(`Сумма массива [${arr}] = ${result}`);
const arrDouble = arr.map((el) => 2 * el);
console.log("Массив удвоeнных значений: ", arrDouble);

console.log(`Минимальное значение массива [${arr}] равно ${min(arr)}`);
console.log(`Максимальное значение массива [${arr}] равно ${max(arr)}`);

function max(array) {
  let max = array[0];
  array.forEach((el) => {
    if (max < el) {
      max = el;
    }
  });
  return max;
}

function min(array) {
  let min = array[0];
  array.forEach((el) => {
    if (min > el) {
      min = el;
    }
  });
  return min;
}

module.exports = { arr, arrDouble, max, min };

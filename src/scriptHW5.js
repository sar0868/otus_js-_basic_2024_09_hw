export function createArray() {
  const arr = [];
  for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  return arr;
}

const arr = createArray();
console.log("Массив 10 элементов: ", arr);

export const sumElArray = (array) => {
  const sum = array.reduce((acc, el) => acc + el, 0);
  console.log(`Сумма массива ${array} = ${sum}`);
};
// console.log(`Сумма массива [${arr}] = ${sumElArray(arr)}`);

export function arrDouble(array) {
  return array.map((el) => 2 * el);
}
console.log("Массив удвоeнных значений: ", arrDouble(arr));

export function minAndMaxElements(arr) {
  console.log(`Для массива [${arr}] min=${min(arr)}, max=${max(arr)}`);
}

export function max(array) {
  let max = array[0];
  array.forEach((el) => {
    if (max < el) {
      max = el;
    }
  });
  return max;
}

export function min(array) {
  let min = array[0];
  array.forEach((el) => {
    if (min > el) {
      min = el;
    }
  });
  return min;
}

const a = +prompt("Input number a: ");
const b = +prompt("Input number b: ");
if (a > b) {
  console.log("Число " + a + " больше");
} else if (a === b) {
  console.log("Числа равны ");
} else {
  console.log("Число " + b + " больше");
}

const month = prompt("Введите число от 1 до 12 включительно: ");
switch (month) {
  case "1":
    console.log("Январь");
    break;
  case "2":
    console.log("Февраль");
    break;
  case "3":
    console.log("Март");
    break;
  case "4":
    console.log("Апрель");
    break;
  case "5":
    console.log("Май");
    break;
  case "6":
    console.log("Июнь");
    break;
  case "7":
    console.log("Июль");
    break;
  case "8":
    console.log("Август");
    break;
  case "9":
    console.log("Сентябрь");
    break;
  case "10":
    console.log("Октябрь");
    break;
  case "11":
    console.log("Ноябрь");
    break;
  case "12":
    console.log("Декабрь");
    break;
  default:
    console.log("Это не число от 1 до 12 включительно.");
    break;
}

const circle = +prompt("Введите площадь круга: ");
const square = +prompt("Введите площадь квадрата: ");
if (circle <= square) {
  console.log("Круг поместиться в квадрат.");
} else {
  console.log("Круг не поместиться в квадрат.");
}

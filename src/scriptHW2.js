export function max(a, b) {
  if (a > b) {
    console.log("Число " + a + " больше");
    return a;
  } else if (a === b) {
    console.log("Числа равны ");
  } else {
    console.log("Число " + b + " больше");
  }
  return b;
}

// function inputDateTask1() {
//   const a = +prompt("Input number a: ");
//   const b = +prompt("Input number b: ");
//   return [a, b];
// }

// function inputNumberMonth() {
//   return prompt("Введите число от 1 до 12 включительно: ");
// }

export function getMonth(month) {
  let monthStr = "";
  switch (month) {
    case "1":
      monthStr = "Январь";
      break;
    case "2":
      monthStr = "Февраль";
      break;
    case "3":
      monthStr = "Март";
      break;
    case "4":
      monthStr = "Апрель";
      break;
    case "5":
      monthStr = "Май";
      break;
    case "6":
      monthStr = "Июнь";
      break;
    case "7":
      monthStr = "Июль";
      break;
    case "8":
      monthStr = "Август";
      break;
    case "9":
      monthStr = "Сентябрь";
      break;
    case "10":
      monthStr = "Октябрь";
      break;
    case "11":
      monthStr = "Ноябрь";
      break;
    case "12":
      monthStr = "Декабрь";
      break;
    default:
      console.log("Это не число от 1 до 12 включительно.");
      break;
  }
  console.log(monthStr);
  return monthStr;
}

export function isCircleIntoSquare(circle, square) {
  if((square - circle) >= (Math.PI / 4)) {
    return true;
  }
  return false;
}

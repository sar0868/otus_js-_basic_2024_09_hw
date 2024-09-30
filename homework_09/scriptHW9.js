//1
function checkRightTriangle(args) {
  if (args.length != 3) {
    return false;
  }
  const [a, b, c] = args;
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log(`${a} ${b} ${c} не треугольник`);
    return false;
  }
  const sides = sidesTriangle(a, b, c);
  return sides[0] == Math.sqrt(Math.pow(sides[1], 2) + Math.pow(sides[2], 2));
}

function sidesTriangle(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return [n1, n2, n3];
  } else if (n2 > n1 && n2 > n3) {
    return [n2, n1, n3];
  }
  return [n3, n1, n2];
}

const input1 = prompt("Input sides a triangle (a,b,c).");
const sides = input1.split(",").map(Number);
if (checkRightTriangle(sides)) {
  console.log("Введенный стороны составляют прямоуольный треугольник");
} else {
  console.log("Не прямоугольный треугольник");
}

//2

const r = +prompt("Input radius.");
const areaCircle = Math.PI * Math.pow(r, 2);
const circumference = 2 * Math.PI * r;
console.log(
  `Площадь круга: ${areaCircle.toFixed(
    2
  )}, длина окружности: ${circumference.toFixed(2)}`
);

//3
const input3 = prompt("Input a,b,c.");
const [a, b, c] = input3.split(",").map(Number);
const D = Math.pow(b, 2) - 4 * a * c;
if (D < 0) {
  console.log("Нет решений");
} else if (D == 0) {
  const x = (-1 * b + Math.sqrt(D)) / (2 * a);
  console.log("Имеется одно решение: ", x.toFixed(2));
} else {
  const x1 = (-1 * b + Math.sqrt(D)) / (2 * a);
  const x2 = (-1 * b - Math.sqrt(D)) / (2 * a);
  console.log(`Решения: ${x1.toFixed(2)}, ${x2.toFixed(2)}`);
}

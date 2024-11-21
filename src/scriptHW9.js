//1
export function checkRightTriangle(args) {
  if (args.length != 3) {
    return false;
  }
  const [a, b, c] = args;
  if (a + b <= c || a + c <= b || b + c <= a) {
    console.log(`${a} ${b} ${c} не треугольник`);
    return false;
  }
  const sides = sidesTriangle(a, b, c);
  return sides[0] === Math.sqrt(Math.pow(sides[1], 2) + Math.pow(sides[2], 2));
}

function sidesTriangle(n1, n2, n3) {
  if (n1 > n2 && n1 > n3) {
    return [n1, n2, n3];
  } else if (n2 > n1 && n2 > n3) {
    return [n2, n1, n3];
  }
  return [n3, n1, n2];
}

// function RightTriangle() {
//   const input1 = prompt("Input sides a triangle (a,b,c).");
//   const sides = input1.split(",").map(Number);
//   if (checkRightTriangle(sides)) {
//     console.log("Введенный стороны составляют прямоуольный треугольник");
//   } else {
//     console.log("Не прямоугольный треугольник");
//   }
// }

//2
export function getCircumferenceAndAreaCircle(r) {
  // const r = +prompt("Input radius.");
  const areaCircle = (Math.PI * Math.pow(r, 2)).toFixed(2);
  const circumference = (2 * Math.PI * r).toFixed(2);
  console.log(
    `Площадь круга: ${areaCircle},\nдлина окружности: ${circumference}`
  );
  return { circumference: circumference, area: areaCircle };
}

//3
// function calcEquation() {
//   const input3 = prompt("Input a,b,c.");
//   const [a, b, c] = input3.split(",").map(Number);
//   const roots = rootsEquation(a, b, c);
//   if (roots === undefined) {
//     console.log("Нет решений");
//   } else if (typeof roots === "number") {
//     console.log("Имеется одно решение: ", roots);
//   } else {
//     console.log(`Решения: ${roots[0]}, ${roots[1]}`);
//   }
// }

export function rootsEquation(a, b, c) {
  const D = Math.pow(b, 2) - 4 * a * c;
  if (D < 0) {
    return undefined;
  } else if (D === 0) {
    const x = b / (-2 * a);
    return x;
  } else {
    const x1 = (-1 * b + Math.sqrt(D)) / (2 * a);
    const x2 = (-1 * b - Math.sqrt(D)) / (2 * a);
    return x1 > x2 ? [x2, x1] : [x1, x2];
  }
}

// module.exports = {
//   checkRightTriangle,
//   getCircumferenceAndAreaCircle,
//   rootsEquation,
// };

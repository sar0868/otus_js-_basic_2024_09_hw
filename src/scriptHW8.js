// 1
export function createDate(inputStr) {
  const [day, month, year] = inputStr.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  return date;
}

export function week(day) {
  const week = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  return week[day];
}

function inputDate() {
  // const date = prompt("Input date ДД.ММ.ГГГГ");
  return "18.11.2024";
}
const inpDate = createDate(inputDate());
console.log(inputDate, week(inpDate.getDay()));

// 2
export function calcMinutes(now) {
  const hours = now.getHours();
  const minutes = now.getMinutes();
  return hours * 60 + minutes;
}
const now = new Date();
console.log(`С начала сегодняшнего дня прошло ${calcMinutes(now)} минут.`);

// 3
// const user1 = {
//   name:
// }

// const birthdayUser1 = "08.11.1968";
// const bdUser1 = createDate(birthdayUser1);
// const birthdayUser2 = "09.11.1968";
// const bdUser2 = createDate(birthdayUser2);

export function getYounger(birthdayUser1, birthdayUser2) {
  const bdUser1 = createDate(birthdayUser1);
  const bdUser2 = createDate(birthdayUser2);
  if (bdUser1 < bdUser2) {
    console.log("user2 моложе user1");
    return birthdayUser1;
  } else if (bdUser1 > bdUser2) {
    console.log("user1 моложе user2");
    return birthdayUser2;
  }
  console.log("user1 и user2 родились в один день");
  return birthdayUser1;
}

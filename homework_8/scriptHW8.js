// 1
function createDate(inputStr) {
  const [day, month, year] = inputStr.split(".");
  const date = new Date(`${year}-${month}-${day}`);
  return date;
}

function week(day) {
  const week = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];
  return week[day - 1];
}

const inputDate = prompt("Input date ДД.ММ.ГГГГ");
const inpDate = createDate(inputDate);
console.log(inputDate, week(inpDate.getDay()));

// 2
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const minPass = hours * 60 + minutes;
console.log(`С начала сегодняшнего дня прошло ${minPass} минут.`);

// 3

const birthdayUser1 = "08.11.1968";
const bdUser1 = createDate(birthdayUser1);
const birthdayUser2 = "09.11.1968";
const bdUser2 = createDate(birthdayUser2);

if (bdUser1 < bdUser2) {
  console.log("user2 моложе user1");
} else if (bdUser1 > bdUser2) {
  console.log("user1 моложе user2");
} else {
  console.log("user1 и user2 родились в один день");
}

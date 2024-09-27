// 1
const inputDate = prompt("Input date ДД.ММ.ГГГГ");

const [day, month, year] = inputDate.split(".");

const date = new Date(`${year}-${month}-${day}`);
console.log(inputDate, week(date.getDay()));

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

// 2
const now = new Date();

const hours = now.getHours();
const minutes = now.getMinutes();
const minPass = hours * 60 + minutes;
console.log(`С начала сегодняшнего дня прошло ${minPass} минут.`);

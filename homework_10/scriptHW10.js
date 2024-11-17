// 1
const reg1 = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
const date = prompt("Input date dd.mm.yyyy");

console.log(`${date} - ${reg1.test(date) ? "дата" : "не дата"}`);

// 2

const reg2 = /[a-zA-Z\d\.]+@[a-z0-9]+\.[a-z]{2,5}$/;
const email = prompt("Input email");
console.log(`${email} - ${reg2.test(email) ? "email" : "не email"}`);

// 3
const reg3 = /(8|\+7)\([1-9]\d{2}\)[1-9]\d{2}-\d{2}-\d{2}$/;
const phone = prompt("Input number phone");
console.log(
  `${phone} - ${reg3.test(phone) ? "номер телефона" : "не номер телефона"}`
);

// 1
// function inputDate() {
//   return prompt("Input date dd.mm.yyyy");
// }

export function isDate(date) {
  const reg1 = /(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.\d{4}$/;
  console.log(`${date} - ${reg1.test(date) ? "дата" : "не дата"}`);
  return reg1.test(date);
}

// 2
// function inputEmail() {
//   return prompt("Input email");
// }

export function isEmail(email) {
  const reg2 = /^[a-zA-Z\d.]+@[a-z0-9]+\.[a-z]{2,5}$/;
  console.log(`${email} - ${reg2.test(email) ? "email" : "не email"}`);
  return reg2.test(email);
}

// 3
// function inputPhoneNumber() {
//   return prompt("Input number phone");
// }

export function isNumberPhone(phone) {
  const reg3 = /(8|\+7)\([1-9]\d{2}\)[1-9]\d{2}-\d{2}-\d{2}$/;
  console.log(
    `${phone} - ${reg3.test(phone) ? "номер телефона" : "не номер телефона"}`,
  );
  return reg3.test(phone);
}

// module.exports = { isDate, isEmail, isNumberPhone };

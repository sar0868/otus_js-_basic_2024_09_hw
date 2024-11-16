const user = {
  name: "John",
};
const number = +prompt("Введите возраст: ");
user.age = number;
const admin = Object.assign({}, user, { role: "admin" });
console.log(user);
console.log(admin);
let { name, age, role } = admin;
console.log(`name: ${name}`);
console.log(`age: ${age}`);
console.log(`role: ${role}`);

//Задание 1
let a = 10;
alert (a);
a = 20;
alert (a);
// Задание 2
let year = 2007;
alert (`Год выпуска айфона - ${year}`);
//Задание 3
let name = ('Brandan');
alert (`Создатель джава скрипт - ${name}`);
//Задание 4
let x = 10;
let y = 2;
alert (`сумма чисел - ${x+y}\n вычитание - ${x-y}\n умножение - ${x*y}\n деление - ${x/y}\n`)
// Задание 5
let result = 2**5;
alert (result);
// Задание 6
let f = 9;
let b = 2;
alert (f/b);
// Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /=3;
num ++;
num--;
alert (num);
// Задание 8
let age = prompt (`Сколько вам лет?`);
alert (age);
// Задание 9
const user = {
    name: `Olga`,
    age: `39`,
    isAdmin: true,
};
// Задание 9.1
user [`city of residence`] = Kaliningrad;
// Задание 9.2
user.age = 18;
//Задание 9.3
delete user [`city of residence`];
//Задание 9.4
let info = prompt (`Какую информацию хотите узнать о пользователе?`);
alert (user [`info`]);
//Задание 10
let youName = prompt (`Как тебя зовут?`);
alert (`Привет, ${youName}!`);
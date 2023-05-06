//HomeWork 2

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



//HomeWork 3
//Задание 1
let password = 'пароль';
let user = prompt('Введите пароль');
if (password===user){
    alert ('Пароль введен верно');
}else{
    alert ('Пароль введен неверно');
}

//Задание 2
let с=5;
console.log (с >= 0 && c <=10) ? 'верно':'неверно';

//Задание 3
let d = 23;
let e = 120;
console.log (d>100||e>100) ? 'Верно':'Неверно';


//Задание 4
let a = '2';
let b = '3';
alert(Number(a) + Number(b));

//Задание 5
let monthNumber = Number (prompt('Введите номер месяца, чтоб узнать сезон'));
switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break; 
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default:
        console.log('Ввел что-то не то');
        break;
}

//Задание 7
let gatNumber = Number (prompt('Пожалуйста, введите любое число'));
if (Number.isNaN(+number)) {
    alert ("Вы ввели не число")
}else {
    if (number%2===0) {
        alert ('Число четное')
    }else{
        alert ('Число нечетное')
    }
}

//Задание 8
let clientOS=Number (prompt ('Введите 0 если у вас IOS или 1 если у вас Android'));
if(clientOS===0){
    console.log('Установите версию приложения для iOS по ссылке');
} else {
    console.log('Неверное значение переменной clientOS');
}

//Задание 9
let clientDeviceYear=Number(prompt('Введите год выпуска телефона?'));
 if(clientOS===0){
    if(clientDeviceYear>=2015){
        console.log('Установите версию приложения для iOS по ссылке');
    } else{
        console.log('Установите облегченную версию приложения для iOS по ссылке');
    }
} else if(clientOS===1){
    if (clientDeviceYear>=2015){
    console.log('Установите версию приложения для Android по ссылке');
} else if (clientDeviceYear<=2015){
    console.log('Установите облегченную версию приложения для Android по ссылке'); 
} else{
    console.log('Неверное значение переменной clientOS');
}}
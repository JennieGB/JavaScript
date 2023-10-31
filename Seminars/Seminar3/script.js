// Задание 1: https://pastebin.com/Y8wjA5ci Тайминг: 20 минут.
// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна
// вывести в консоль строку:
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

const userName = prompt("Введите имя: ");
const secondName = prompt("Введите фамилию: ");
const age = +prompt("Введите возраст: ");

// greeting(userName, secondName, age);  function declaration

function greeting(firstName, lastName, age) {
    console.log(`Привет, ${firstName} ${lastName}. Вы уже большой, вам ${age}`);
}
greeting(userName, secondName, age);

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного ей числа.

const x = +prompt("Введите число ");
const square = function(x) {
    return x ** 2;
};
console.log(square(x));

// 3. Создайте функцию, которая принимает число.
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

const q = +prompt("Введите число");
const fn = (num) => {
    if (num > 0) {
        console.log('+++')
    } else if (num < 0) {
        console.log('---');
    }
};
fn(q);

// Задание 2: https://pastebin.com/JQA7pJVS Тайминг: 20 минут.
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу
// данной функции.

const a = Math.trunc(Math.random() * 10); // рандомные числа от 0 до 9
const b = Math.trunc(Math.random() * 10);
const c = Math.trunc(Math.random() * 10);
const fun = (num1, num2, num3) => {
    console.log(num1 + num2 + num3);
};
console.log(a);
console.log(b);
console.log(c);
fun(a, b, c);

// 3. Дан код:

func(2); // 4
func(3); // 9
func(); //25

function func(num = 5) {
  console.log(num * num);
}
// Расскажите, каким будет результат каждого из вызовов функции.

// Задание 3: https://pastebin.com/73XM2M51 Тайминг: 20 минут.

// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень
// переданного числа.

const d = +prompt("Введите число");
const fu = (num) => Math.sqrt(num);
console.log(fu(d));

// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную
// сумму в консоль.

console.log(fu(3) + fu(4));

// 2. Создайте функцию, которая находит минимальное число из 2х переданных
// аргументов функции и вернет найденное значение.

// Первый вариант
const m = 3;
const n = 5;
const funct = (num1, num2) => Math.min(num1, num2);
console.log(funct(m, n));

// Второй вариант
const k = 3;
const l = 5;
const funcNum = (num1, num2) => {
  if (num1 > num2) {
    return num2;
  } else {
    return num1;
  }
};
console.log(funcNum(k, l));

// Третий вариант
const funcNumber = (num1, num2) => num1 < num2 ? num1 : num2;
console.log(funcNumber(k, l));

// Задание 4: https://pastebin.com/HJ6yHLkA Тайминг: 30 минут. 
 
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает 
// день недели на русском языке.

const numDay = Math.trunc(Math.random() * 7) + 1;
const funcDay = (num) => {
    switch (num) {
        case 1:
            return "Понедельник";
        case 2:
            return "Вторник";
        case 3:
            return "Среда";
        case 4:
            return "Четверг";
        case 5:
            return "Пятница";
        case 6:
            return "Суббота";
        case 7:
            return "Воскресенье";
    }
};
console.log(`Номер дня ${numDay}`);
console.log(funcDay(numDay));

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в 
// зависимости от времени суток (утро, день, вечер, ночь), например: 
// "Добрый день, Иван." или "Доброй ночи, Иван.".

const usersName = prompt("Как вас зовут");
const greeting = (userName) => {
    const dayTime = new Date();
    const hours = dayTime.getHours();
    if (hours < 12) {
        return `Доброе утро, ${userName}`;
    } else if (hours < 16) {
        return `Добрый день, ${userName}`;
    } else if (hours < 21) {
        return `Добрый вечер, ${userName}`;
    } else {
        return `Доброй ночи, ${userName}`;
    }   
};
console.log(greeting(usersName));

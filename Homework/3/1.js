"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

const x = +prompt("Введите число: ");
const cube = (num) => Math.pow(num, 3);
console.log(cube(x));

// Второй вариант
const y = +prompt("Введите число: ");
const cube2 = (num) =>{
    return Math.pow(num, 3);
};
console.log(cube2(y));

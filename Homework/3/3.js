"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const a = +prompt("Введите первое число: ");
const b = +prompt("Введите второе число: ");
const c = +prompt("Введите третье число: ");
const getMaxNumber = (num1, num2, num3) => {
    const maxNumber = Math.max(num1, num2, num3);
    console.log(`Максимальное значение среди чисел ${a}, ${b}, ${c} равно ${maxNumber}.`);
};
getMaxNumber(a, b, c);

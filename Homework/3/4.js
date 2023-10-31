"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const m = Math.trunc(Math.random() * 100);
const n = Math.trunc(Math.random() * 100);
const sum = (num1, num2) => console.log(m + n);
const diff = (num1, num2) => console.log(m - n);
const mult = (num1, num2) => console.log(m * n);
const div = (num1, num2) => console.log(m / n);
sum(m, n);
diff(m, n);
mult(m, n);
div(m, n);
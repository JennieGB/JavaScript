"use strict";

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/

const nums = [];
for (let i = 0; i < 5; i++) {
    nums.push(Math.floor(Math.random()*10));;
}
console.log(nums);
console.log(nums.reduce((acummulator, item) => {return acummulator + item;}, 0));
console.log(Math.min.apply(null, nums));
// 3 способ через reduce
console.log(nums.reduce((acummulator, item, i) => item === 3 ? [acummulator, i] : acummulator, []));

// Я потом дорешаю

// // 1 способ через map
// console.log(nums.map((item, i) => {return item === 3 ? i : ''}));
// console.log(nums.map((item, i) => {return item === 3 ? i : nums.splice(i)}));
// //Array.sort() - сортирует элементы в исходном массиве и возвращает отсортированный массив. Если метод использовать без аргумента (функции сортировки), то результат будет отсортирован в алфавитном порядке (в порядке следования символов в Unicode), путем преобразования всего, что возможно в строковый тип. Все, что привести к строкам невозможно - помещается в конец массива.
// // А ПОТОМ отсечь все андефайнды через иф ленгхт
// // 2 способ через filter
// console.log(nums.filter((item, i) => {if (item === 3) {return i}}));



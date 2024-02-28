/*ЗАДАЧА 1. Создайте функцию mergeArrays, которая принимает два массива и возвращает новый массив, 
содержащий все элементы из обоих массивов. Используйте spread оператор для объединения массивов.
mergeArrays([1, 2, 3], [4, 5, 6]); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
Создайте функцию removeDuplicates, которая принимает любое количество аргументов и 
возвращает новый массив, содержащий только уникальные значения. Используйте rest оператор 
для сбора всех аргументов в массив а затем filter для определения дубликатов.
removeDuplicates(1, 2, 3, 2, 4, 1, 5); // Ожидаемый результат: [1, 2, 3, 4, 5]
*/
function mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
}

// Функция для удаления дубликатов из массива
function removeDuplicates(...args) {
    return args.filter((value, index, self) => self.indexOf(value) === index);
}

// Примеры использования функций
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); // Ожидаемый результат: [1, 2, 3, 4, 5, 6]
console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5)); // Ожидаемый результат: [1, 2, 3, 4, 5] 

/*Функция mergeArrays принимает два массива и возвращает новый массив, содержащий все элементы 
из обоих массивов. Мы используем spread оператор ... для объединения элементов двух массивов.

Функция removeDuplicates принимает любое количество аргументов (используя rest оператор ...) 
и возвращает новый массив, содержащий только уникальные значения. Мы используем filter для 
определения дубликатов.*/

/* РЕШЕНИЕ с семинара
const arr3 = [1, 2, 3, 2, 4, 1, 5];
const mergeArrays = [...arr3];

console.log(mergeArrays);

const arr4 = mergeArrays.filter((item, index) => {
return mergeArrays.indexOf(item) === index
});
console.log(arr4);
*/

/*ДОПОЛНИТЕЛЬНАЯ ЗАДАЧА. Вам необходимо написать функцию на JavaScript, которая принимает массив чисел и возвращает 
максимальное число из него, используя спред и рест методы. Функция должна работать для массивов 
любой длины, начиная с 2 элементов.
*/

function findMaxNumber(...numbers) {
    if (numbers.length < 2) {
        return "Массив должен содержать как минимум два числа.";
    }
    return Math.max(...numbers);
}

// Пример использования функции
const array1 = [3, 7, 2, 8, 4];
console.log("Максимальное число из массива:", findMaxNumber(...array1)); // Ожидаемый результат: 8

const array2 = [10, 6, 15, 4];
console.log("Максимальное число из массива:", findMaxNumber(...array2)); // Ожидаемый результат: 15

/*Эта функция findMaxNumber принимает любое количество чисел как аргументы при помощи rest параметра 
...numbers, а затем использует спред оператор для передачи этих чисел в функцию Math.max(), которая 
возвращает наибольшее число из них.
*/

/*ЗАДАЧА 2. Напишите функцию getEvenNumbers, которая принимает массив чисел в качестве аргумента 
и возвращает новый массив, содержащий только четные числа.
Напишите функцию calculateAverage, которая принимает массив чисел в качестве аргумента 
и возвращает среднее значение этих чисел.
Напишите функцию capitalizeFirstLetter, которая принимает строку в качестве аргумента и 
возвращает новую строку, в которой первая буква каждого слова является заглавной.
*/
//Вот функции getEvenNumbers, calculateAverage и capitalizeFirstLetter:

// Функция для получения только четных чисел из массива
function getEvenNumbers(numbers) {
    return numbers.filter(number => number % 2 === 0);
}

// Функция для вычисления среднего значения чисел в массиве
function calculateAverage(numbers) {
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    return sum / numbers.length;
}

// Функция для преобразования строки, сделав первую букву каждого слова заглавной
function capitalizeFirstLetter(str) {
    return str.replace(/\b\w/g, char => char.toUpperCase());
}

// Примеры использования функций
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Четные числа:", getEvenNumbers(numbers)); // Ожидаемый результат: [2, 4, 6, 8, 10]
console.log("Среднее значение:", calculateAverage(numbers)); // Ожидаемый результат: 5.5

const text = "hello world";
console.log("Преобразованная строка:", capitalizeFirstLetter(text)); // Ожидаемый результат: "Hello World"

/*Функция getEvenNumbers фильтрует массив чисел, возвращая только четные числа.

Функция calculateAverage вычисляет среднее значение чисел в массиве.

Функция capitalizeFirstLetter принимает строку и использует регулярное выражение \b\w, 
чтобы выбрать первую букву каждого слова, и метод toUpperCase() для преобразования её в 
заглавную.
*/


/*РЕШЕНИЕ С СЕМИНАРА
// 1. Функция getEvenNumbers
function getEvenNumbers(arr) {
return arr.filter(num => num % 2 === 0);
}

// 2. Функция calculateAverage
function calculateAverage(arr) {
// reduce - применяем функцию к каждому элементу слева на право
// 0 - начальное значение аккумулятора
const sum = arr.reduce((acc, num) => acc + num, 0);
return sum / arr.length;
}

// 3. Функция capitalizeFirstLetter
function capitalizeFirstLetter(str) {
// split - разбиваем строку
// map - применяем к каждому элементу фукнцпию, которую передаем
// join объединяем в одну строку
return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(getEvenNumbers(numbers)); // Выведет: [2, 4, 6]
console.log(calculateAverage(numbers)); // Выведет: 3.5
console.log(capitalizeFirstLetter('hello qwerty')); // Выведет: Hello Qwerty
*/

/*ЗАДАЧА 3. Напишите функцию createCalculator, которая принимает начальное значение и 
возвращает объект с двумя методами: add и subtract. Метод add должен увеличивать значение 
на переданное число, а метод subtract должен уменьшать значение на переданное число. 
Значение должно быть доступно только через методы объекта, а не напрямую.
*/
function createCalculator(initialValue) {
    let value = initialValue;

    return {
        add: function(number) {
            value += number;
        },
        subtract: function(number) {
            value -= number;
        },
        getValue: function() {
            return value;
        }
    };
}

// Пример использования функции
const calculator = createCalculator(10);

calculator.add(5);
console.log(calculator.getValue()); // Ожидаемый результат: 15

calculator.subtract(3);
console.log(calculator.getValue()); // Ожидаемый результат: 12

/*Функция createCalculator принимает начальное значение и возвращает объект 
с методами add и subtract, которые изменяют значение объекта в соответствии 
с переданными числами. Значение доступно только через метод getValue, что 
обеспечивает инкапсуляцию данных и предотвращает их прямое изменение извне.
*/

/*РЕШЕНИЕ С СЕМИНАРА
<button id="add">Add</button>
<button id="subtract">Subtract</button>

<script>
function createCalculator(initialValue) {
let value = initialValue;

return {
add: function(num) {
value += num;
console.log(value);
},
subtract: function(num) {
value -= num;
console.log(value);
},
getValue: function() {
return value;
}
};
}

let calculator = createCalculator(10);

document.getElementById('add').addEventListener('click', function() {
calculator.add(5);
});

document.getElementById('subtract').addEventListener('click', function() {
calculator.subtract(3);
});
*/

/*ЗАДАЧА 4. Напишите функцию createPasswordChecker, которая принимает допустимую 
длину пароля в качестве аргумента и возвращает функцию для проверки введенного пароля. 
Возвращаемая функция должна принимать пароль и возвращать true, если его длина соответствует 
допустимой, и false в противном случае.
// Пример использования:
const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); 
// Ожидаемый результат: false
console.log(isPasswordValid('secret')); 
// Ожидаемый результат: true
*/
function createPasswordChecker(validLength) {
    return function(password) {
        return password.length === validLength;
    };
}

// Пример использования функции
const isPasswordValid = createPasswordChecker(8);

console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true

/*Функция createPasswordChecker принимает допустимую длину пароля в качестве аргумента и возвращает 
функцию для проверки введенного пароля. Возвращаемая функция принимает пароль и сравнивает его длину 
с допустимой длиной, возвращая true, если длина соответствует, и false в противном случае.
*/

/*РЕШЕНИЕ С СЕМИНАРА
function createPasswordChecker(length) {
return function(password) {
return password.length <= length;
};
}

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password')); // Ожидаемый результат: false
console.log(isPasswordValid('secret')); // Ожидаемый результат: true
*/

/* Доп. задача из методички
Напишите рекурсивную функцию sumDigits, которая принимает
положительное целое число в качестве аргумента и возвращает
сумму его цифр.
// Пример использования:
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6
+ 7 + 8 + 9)
*/

function sumDigits(number) {
    // Базовый случай: если число меньше 10, то его сумма цифр равна самому числу
    if (number < 10) {
        return number;
    } else {
        // Рекурсивный случай: складываем последнюю цифру числа с суммой остальных цифр
        return number % 10 + sumDigits(Math.floor(number / 10));
    }
}

// Пример использования функции
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)

/* Эта рекурсивная функция сначала проверяет, является ли число меньше 10 (базовый случай). 
Если это так, то она возвращает это число. В противном случае (рекурсивный случай), она складывает 
последнюю цифру числа с суммой остальных цифр, вызывая себя для остатка числа после удаления последней цифры.
*/

/* Доп. задача из методички
Напишите функцию createGreeting, которая принимает имя
пользователя и возвращает функцию, которая будет выводить
приветствие с использованием этого имени.
// Пример использования:
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"
*/
function createGreeting(name) {
    return function() {
        console.log(`Hello, ${name}!`);
    };
}

// Пример использования функции
const greeting = createGreeting('John');
greeting(); // Ожидаемый результат: "Hello, John!"
/*Эта функция createGreeting принимает имя пользователя в качестве аргумента и возвращает функцию, 
которая выводит приветствие с использованием этого имени. При вызове созданной функции она выводит 
приветствие в консоль.
*/

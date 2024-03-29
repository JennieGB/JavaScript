/* 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки
2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/
const arr = [1, 5, 7, 9];
const minNumber = Math.min(...arr);
console.log(minNumber); // Ожидаемый результат: 1

function createCounter() {
    let count = 0;

    return {
        increment: function() {
            count++;
        },
        decrement: function() {
            count--;
        },
        getCount: function() {
            return count;
        }
    };
}

// Пример использования функции
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Ожидаемый результат: 1
counter.increment();
console.log(counter.getCount()); // Ожидаемый результат: 2
counter.decrement();
console.log(counter.getCount()); // Ожидаемый результат: 1


function findElementByClass(root, className) {
    if (root.classList.contains(className)) {
        return root;
    }

    for (let child of root.children) {
        const foundElement = findElementByClass(child, className);
        if (foundElement) {
            return foundElement;
        }
    }

    return null;
}

// Пример использования функции
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
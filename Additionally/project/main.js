/* • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • JavaScript необходимые основы для начинающих • • • • •
• • • • • • • • • • • • практический курс • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • •
• • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • • */
// =================== 1. Подключение ===================
/*
- index.html
- файл main.js
- тег <script src></script>
- Запуск в liveServer
- команда console.log для вывода информации в консоль браузера
- комментарии
*/
const heading2 = document.querySelector('h2');
heading2.classList.add('red');

const headings = document.querySelectorAll('h2');
console.log(headings);

for (let item of headings){
    item.classList.add('red-text');
}
const paragraphs = document.querySelectorAll('p');
// for (let item of paragraphs) {
//     item.classList.add('purple-text');
// }
paragraphs.forEach((item) => {item.classList.add('purple-text')})

//Выбор коллекции элементов по CSS классу (все теги с классом link), будет возвращена html коллекция
//html коллекция не имеет метода forEach, её нужно будет превратить в массив
document.getElementsByClassName('link'); // точки нет, т.к. сам метод это подразумевает

//Выбор коллекции по тегу, будет возвращена html коллекция (все теги p)
//html коллекция не имеет метода forEach, её нужно будет превратить в массив
document.getElementByTegName('p');

//Выбор одного элемента по id
document.getElementById('header'); //ID всегда уникальный


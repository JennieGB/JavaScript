"use strict";
/* Задача 1
1. Получите ссылку на первый абзац из дива с id, равным block, выведите его в консоль
2. Получите ссылку на первый абзац с классом www. и вывести его в консоль
<p class="www">text 1</p>
<p class="www">text 2</p>
*/
const firstPar = document.querySelector('p');
console.log(firstPar);

//2 способ
const firstPar2 = document.getElementsByTagName('p')[0];
console.log(firstPar2);

//3 способ
const firstPar3 = document.querySelector('#block p:first-child'); //обраащение через css
console.log(firstPar3);

const pWww = document.querySelector('.www');
console.log(pWww);

/*Задача 2
1. Дан тег <a class="link" href="#">link text html</a>
2. Вам необходимо поменять текст внутри ссылки на “link text js”
3. Заменить href, на значение https://developer.mozilla.org/ru/ 
4. Дан тег <img class="photo" src="" alt=""> 
5. Вам необходимо с помощью js поменять значение src на любое изображение из интернета
*/

const linkEl = document.querySelector('.link');
console.log(linkEl.textContent = 'link text js');
console.log(linkEl.href = 'https://developer.mozilla.org/ru/');

const imageEl = document.querySelector('.photo');
imageEl.src = 'https://celes.club/uploads/posts/2022-10/1666803786_2-celes-club-p-kotik-na-rabochii-stol-krasivo-2.jpg';

/*Задание3
1. Дан тег <div class="content"></div> 
2. Создайте новый элемент p
3. Добавьте в него текст “Новый текстовый элемент”
4. Добавьте созданный элемент внутри <div class="content"></div>
5. Удалите добавленный узел 
*/

const divContent = document.querySelector('.content');
const newP = document.createElement('p');
newP.textContent = 'Новый текстовый элемент';
divContent.appendChild(newP);
console.log(newP);
//newP.remove();

/*Задание 4
1. Создать элемент button, добавить в блок <div class="content"></div>
2. При клике на который в консоль выводится сколько раз пользователь нажал на данную кнопку
*/

const buttonEl = document.createElement('button');
buttonEl.textContent = 'Нажми меня';
divContent.append(buttonEl);
let count = 0;
buttonEl.onclick = function() {
    count++; 
    console.log(count);
    buttonEl.textContent = 'Нажми ещё'; 
}
/*Задание 5
1. Дан тег <div class="content"></div> 
2. Создайте с помощью javascript новый элемент button
3. Добавьте текст для кнопки “Отправить”
4. При клике на данную кнопку необходимо чтобы текст поменялся на “Текст отправлен”
*/
const button2 = document.createElement('button');
button2.textContent = 'Отправить';
divContent.append(button2);
button2.onclick = function() {
    button2.textContent = 'Текст отправлен'
}
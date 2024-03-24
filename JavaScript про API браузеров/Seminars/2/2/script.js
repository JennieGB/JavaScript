"use strict";
/*Задание 2. https://pastebin.com/rywWBiwh
Создайте простое модальное окно, которое появляется при клике 
на кнопку "Открыть модальное окно" и закрывается при клике на 
кнопку "Закрыть". Модальное окно должно содержать заголовок 
"Модальное окно" и кнопку для закрытия. Модальное окно должно 
плавно появляться и исчезать при открытии и закрытии.
*/
// Получаем ссылки на кнопку открытия модального окна и само модальное окно
const openModalBtn = document.getElementById("openModalBtn");
const modal = document.getElementById("modal");

// Получаем ссылку на кнопку закрытия модального окна
const closeModalBtn = document.getElementById("closeModalBtn");

// Добавляем обработчик события клика на кнопку открытия модального окна
openModalBtn.addEventListener("click", function() {
  modal.style.display = "block"; // Показываем модальное окно
});

// Добавляем обработчик события клика на кнопку закрытия модального окна
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none"; // Скрываем модальное окно
});

// Закрытие модального окна при клике вне его области
window.addEventListener("click", function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

/*Решение с семинара
const modelEl = document.querySelector('.modal');
const openModalBtn = document.getElementById('openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');

openModalBtn.addEventListener('click', () => {
  modelEl.style.display = 'block';
});

closeModalBtn.addEventListener('click', () => {
  modelEl.style.display = 'none';
});

*/
// https://jsbin.com/zoweqadovu/edit?html.js.output
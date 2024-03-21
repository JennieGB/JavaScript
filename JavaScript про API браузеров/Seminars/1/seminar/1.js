// https://pastebin.com/hpWeUHsP
/* Задание 1.
1. Необходимо выводить на страницу текущую ширину 
и высоту окна браузера, при изменении значений, вывод
также должен меняться.
2. При закрытии страницы (вкладки), необходимо выводить 
всплывающее окно или диалоговое окно браузера и 
спросить, уверен ли пользователь, что хочет покинуть 
страницу?
3. Используйте объект history для управления историей
переходов на веб-странице. Создайте кнопки "Назад" и
"Вперед" для перемещения по истории.*/

const container = document.querySelector('.height > span');
const container = document.querySelector('.wight > span');

heightWindow.textContent = window.innerHeight;
widhtWindow.textContent = window.innerWidth;

window.addEventListener('resize', () => {
    heightWindow.textContent = window.innerHeight;
    widhtWindow.textContent = window.innerWidth;
});

//2

// const addButton = document.querySelector('#addButton');
// const removeButton = document.querySelector('#removeButton');
// const cloneButton = document.querySelector('#cloneButton');
// const container = document.querySelector('#container');

window.addEventListener('beforeunload', (event) => {
    event.preventDefault();
    alert('Вы действительно хотите закрыть страницу?');
}); 

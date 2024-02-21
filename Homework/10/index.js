/*Задание 2
1. Создать файл index.html.
2. Подключить data.js.
3. Сформировать контент из данных (картинка загловок и параграф).
4. Добавить данный контент в вёрстку.
5. * Добавить стили при необходимости (по желанию).
*/

// Функция для добавления контента о котике в HTML
function addCatContent() {
    // Проверяем, есть ли данные о котике
    if (catData) {
        const catContainer = document.getElementById('catContent');

        // Создаем элементы для отображения контента
        const catImage = document.createElement('img');
        catImage.src = catData[0].url; // URL изображения котика из API

        const catTitle = document.createElement('h2');
        catTitle.textContent = 'Котик дня'; // Заголовок для контента о котике

        const catDescription = document.createElement('p');
        catDescription.textContent = 'Этот котик просто очарователен!'; // Описание котика

        // Добавляем созданные элементы в контейнер для котика
        catContainer.appendChild(catImage);
        catContainer.appendChild(catTitle);
        catContainer.appendChild(catDescription);
    }
}

// Вызываем функцию добавления контента при загрузке страницы
window.onload = addCatContent;

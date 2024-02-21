/* Задание 1
1. Поиск в интернете (бесплатные api примеры).
https://habr.com/ru/articles/769384/
2. Найти любые данные, на произвольную тему.
Например, можно воспользоваться TheCatAPI (предоставляет доступ к большому количеству 
изображений котиков).
3. Создать файл data.js.
4. Создать переменную которая будет хранить данные из публичных api.
*/
let catData;

// Функция для загрузки данных о котиках из API
async function fetchCatData() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        if (!response.ok) {
            throw new Error('Ошибка при получении данных с сервера');
        }
        const data = await response.json();
        catData = data; // Сохраняем полученные данные в переменную
        console.log('Данные о котиках из API успешно загружены:', catData);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}


// Вызываем функцию для загрузки данных о котиках из API
fetchCatData();


/*
// Функция для выполнения запроса к API и сохранения данных
async function fetchData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) {
            throw new Error('Ошибка при получении данных с сервера');
        }
        const data = await response.json();
        apiData = data; // Сохраняем полученные данные в переменную
        console.log('Данные из API успешно загружены:', apiData);
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

// Вызов функции для получения данных из API
fetchData();
*/
/* ""Получение данных о пользователе""

Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве 
аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. 
Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. 
Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением 
об ошибке.

Подсказка, с последовательностью действий:
getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос 
успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает 
объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об 
ошибке.

""Отправка данных на сервер""

Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве 
аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция 
должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в 
случае ошибки.

*Подсказка *
// Пример использования функции
const user = {
name: 'John Smith',
age: 30,
email: 'john@example.com'
};

saveUserData(user)
.then(() => {
console.log('User data saved successfully');
})
.catch(error => {
console.log(error.message);
});

saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. 
Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и 
сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). 
Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет 
промис с сообщени

""Изменение стиля элемента через заданное время""

Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки 
(в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.

// Пример использования функции
changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'"
*/

// Функция getUserData:

function getUserData(userID) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Пользователь не найден');
            }
            return response.json();
        });
}

// Функция saveUserData:

function saveUserData(userData) {
    return fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Не удалось сохранить данные пользователя');
        }
    });
}

// Функция changeStyleDelayed:

function changeStyleDelayed(elementID, delay) {
    setTimeout(() => {
        const element = document.getElementById(elementID);
        if (element) {
            element.style.color = 'red'; // Пример изменения стиля
        }
    }, delay);
}

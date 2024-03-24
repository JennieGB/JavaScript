document.addEventListener("DOMContentLoaded", function() {
    // Получаем данные о занятиях из JSON
    fetch("schedule.json")
        .then(response => response.json())
        .then(data => {
            displaySchedule(data); // Отображаем расписание на странице
        })
        .catch(error => console.error('Ошибка загрузки расписания:', error));
    
    // Функция отображения расписания на странице
    function displaySchedule(schedule) {
        const scheduleContainer = document.getElementById("schedule");

        // Для каждого занятия создаем элемент на странице
        schedule.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("col-md-4", "mb-3");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card", "text-center", "h-100");

            cardBody.innerHTML = `
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">Время: ${item.time}</p>
                    <p class="card-text">Макс. количество участников: ${item.maxParticipants}</p>
                    <p class="card-text">Записано участников: <span class="participants">${item.currentParticipants}</span></p>
                    <button class="btn btn-primary signUp-btn" data-id="${item.id}">Записаться</button>
                    <button class="btn btn-secondary cancel-btn d-none" data-id="${item.id}">Отменить запись</button>
                </div>
            `;
            
            // Обработчик события на кнопку "Записаться"
            cardBody.querySelector(".signUp-btn").addEventListener("click", signUp);
            // Обработчик события на кнопку "Отменить запись"
            cardBody.querySelector(".cancel-btn").addEventListener("click", cancelSignUp);

            card.appendChild(cardBody);
            scheduleContainer.appendChild(card);
        });
    }

    // Функция записи на занятие
    function signUp(event) {
        const button = event.target;
        const id = button.getAttribute("data-id");
        const participantsElement = button.parentElement.querySelector(".participants");
        
        // Получаем текущее количество записанных участников
        let currentParticipants = parseInt(participantsElement.textContent);

        // Получаем данные из localStorage
        let signedUp = JSON.parse(localStorage.getItem("signedUp")) || {};

        // Проверяем, не превышено ли максимальное количество участников
        if (currentParticipants < signedUp[id].maxParticipants) {
            currentParticipants++;
            participantsElement.textContent = currentParticipants;
            button.classList.add("d-none"); // Скрываем кнопку "Записаться"
            button.parentElement.querySelector(".cancel-btn").classList.remove("d-none"); // Показываем кнопку "Отменить запись"
            
            // Обновляем данные в localStorage
            signedUp[id].currentParticipants = currentParticipants;
            localStorage.setItem("signedUp", JSON.stringify(signedUp));
        }
    }

    // Функция отмены записи на занятие
    function cancelSignUp(event) {
        const button = event.target;
        const id = button.getAttribute("data-id");
        const participantsElement = button.parentElement.querySelector(".participants");
        
        // Получаем текущее количество записанных участников
        let currentParticipants = parseInt(participantsElement.textContent);

        // Получаем данные из localStorage
        let signedUp = JSON.parse(localStorage.getItem("signedUp")) || {};

        // Проверяем, был ли пользователь записан на это занятие
        if (signedUp[id]) {
            currentParticipants--;
            participantsElement.textContent = currentParticipants;
            button.classList.add("d-none"); // Скрываем кнопку "Отменить запись"
            button.parentElement.querySelector(".signUp-btn").classList.remove("d-none"); // Показываем кнопку "Записаться"

            // Обновляем данные в localStorage
            signedUp[id].currentParticipants = currentParticipants;
            localStorage.setItem("signedUp", JSON.stringify(signedUp));
        }
    }
});

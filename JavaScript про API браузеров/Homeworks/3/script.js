document.addEventListener("DOMContentLoaded", async function() {
    const photoElement = document.getElementById("photo");
    const photographerElement = document.getElementById("photographer");
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");
    const historyList = document.getElementById("historyList");
  
    const apiKey = 'INVALIDATED_API_KEY'; // Инвалидированный ключ
  
    // Функция для получения случайного фото из Unsplash
    async function getRandomPhoto() {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`);
        if (!response.ok) {
          throw new Error('Failed to fetch random photo');
        }
        const data = await response.json();
        const { urls, user } = data;
        photoElement.src = urls.regular;
        photographerElement.textContent = `Photo by ${user.name}`;
      } catch (error) {
        console.error(error.message);
        alert('Something went wrong. Please try again later.');
      }
    }
  
    // Функция для отображения истории просмотров
    function showHistory() {
      historyList.innerHTML = '';
      const history = JSON.parse(localStorage.getItem('history')) || [];
      history.forEach(photo => {
        const listItem = document.createElement('li');
        listItem.textContent = photo.photographer;
        listItem.addEventListener('click', function() {
          photoElement.src = photo.url;
          photographerElement.textContent = `Photo by ${photo.photographer}`;
        });
        historyList.appendChild(listItem);
      });
    }
  
    // Загрузка случайного фото при загрузке страницы
    await getRandomPhoto();
    showHistory();
  
    // Обработка клика по кнопке "Лайк"
    likeButton.addEventListener("click", function() {
      let count = parseInt(likeCount.textContent);
      count++;
      likeCount.textContent = count;
      likeButton.disabled = true;
      localStorage.setItem('likeCount', count);
    });
  
    // Сохранение фото в истории просмотров при загрузке
    photoElement.addEventListener('load', function() {
      const history = JSON.parse(localStorage.getItem('history')) || [];
      const photographer = photographerElement.textContent.slice(10);
      const url = photoElement.src;
      const newPhoto = { photographer, url };
      history.unshift(newPhoto);
      if (history.length > 5) {
        history.pop();
      }
      localStorage.setItem('history', JSON.stringify(history));
      showHistory();
    });
  });
  
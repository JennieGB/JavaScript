document.addEventListener("DOMContentLoaded", function() {
    const photoElement = document.getElementById("photo");
    const photographerElement = document.getElementById("photographer");
    const likeButton = document.getElementById("likeButton");
    const likeCount = document.getElementById("likeCount");
    const historyList = document.getElementById("historyList");
  
    // Функция для получения случайного изображения из Unsplash
    function getRandomPhoto() {
      const apiKey = 'x4XL9m_FaOkN_7l44YEJTkeKY4vNl_RaGUyTnA0y0Jk';
      fetch(`https://api.unsplash.com/photos/random?client_id=${apiKey}`)
        .then(response => response.json())
        .then(data => {
          const { urls, user } = data;
          photoElement.src = urls.regular;
          photographerElement.textContent = `Photo by ${user.name}`;
        })
        .catch(error => console.error('Error fetching random photo:', error));
    }
  
    // Функция для отображения предыдущих просмотренных фотографий
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
  
    // Загрузка случайного изображения при загрузке страницы
    getRandomPhoto();
    showHistory();
  
    // Обработка клика по кнопке "Лайк"
    likeButton.addEventListener("click", function() {
      let count = parseInt(likeCount.textContent);
      count++;
      likeCount.textContent = count;
      localStorage.setItem('likeCount', count);
    });
  
    // Сохранение фотографии в истории просмотров
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
  
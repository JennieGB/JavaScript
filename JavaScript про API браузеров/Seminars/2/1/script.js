/* Задание 1. https://pastebin.com/R6kHUv3p
Дан CSS:
```
<style>
  nav ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    background-color: #333;
  }
 
  nav ul li {
    margin: 0;
    padding: 0;
  }
 
  nav ul li a {
    display: block;
    padding: 10px 20px;
    color: #fff;
    text-decoration: none;
    transition: background-color 0.3s;
  }
 
  nav ul li a:hover {
    background-color: #555;
  }
 
  nav ul li a.active {
    background-color: #f00;
  }
</style>
```
 
Дан HTML:
```
<nav>
  <ul class="menu">
    <li><a class="menu__link" href="#">Главная</a></li>
    <li><a class="menu__link" href="#">О нас</a></li>
    <li><a class="menu__link" href="#">Услуги</a></li>
    <li><a class="menu__link" href="#">Контакты</a></li>
  </ul>
</nav>
```
 
Вам необходимо создать навигационное меню для веб-сайта, в
котором меняется активный пункт при клике без фактического
перехода на другие страницы. Меню должно обладать следующими
характеристиками:
1. Подсветка активного пункта: При клике на пункт меню он
должен становиться активным, и для активного пункта должен
применяться определенный стиль (например, изменение цвета
фона). Если выбрать другой пункт, предыдущий должен
перестать быть активным.
2. Эффекты наведения: При наведении курсора на пункты меню
должны применяться эффекты (например, изменение цвета
текста или фона) для подсказки пользователю, что пункт меню
является интерактивным.
*/
document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll('.menu__link');
  
    // Обработчик клика на пункты меню
    menuLinks.forEach(function(menuLink) {
      menuLink.addEventListener('click', function(event) {
        event.preventDefault(); // Отменяем стандартное действие ссылки
        const currentPage = event.target.dataset.page;
  
        // Удаляем класс active у всех пунктов меню
        menuLinks.forEach(function(link) {
          link.classList.remove('active');
        });
  
        // Добавляем класс active только для выбранного пункта меню
        event.target.classList.add('active');
      });
    });
  });
  /*Решение с семинара
  const menuEl = document.querySelector('.menu');
  menuEl.addEventListener('click', ((target)) => {
    if (!target.closest('.menu__link')) {
      return;
    }
    menuEl.querySelector('.menu__link.active')?.classList.remove('active');
    target.classlist.add('active');
    });
  });
  */

  // https://jsbin.com/reruwicetu/edit?html.js.output
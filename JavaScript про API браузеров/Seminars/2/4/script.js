/* Задание 4 https://pastebin.com/eTSTR918
Вам предоставляется задача создать простой онлайн опросник, который позволяет пользователям
отвечать на вопросы с вариантами ответов. Ваша задача - разработать интерфейс и функциональность
для этого опросника, используя HTML, CSS и JavaScript.
1. Создайте интерфейс с несколькими вопросами и вариантами ответов. Каждый вопрос должен
иметь несколько вариантов ответов.
2. Реализуйте обработку событий, чтобы пользователи могли выбирать варианты ответов.
3. Добавьте кнопку "Завершить опрос", которая будет показывать результаты опроса.
4. При нажатии на кнопку "Завершить опрос", вы должны проверить, что пользователь ответил на все
вопросы, и отобразить выбранные им варианты ответов.
5. Если пользователь не ответил на все вопросы, покажите ему сообщение о необходимости ответить
на все вопросы перед завершением опроса.
6. По желанию можно добавить стилизацию опросника с использованием CSS для лучшего
пользовательского опыта.
 
```
<!DOCTYPE html>
<html lang="en">
 
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Modal Window</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
 
    .question {
      margin-bottom: 20px;
    }
 
    .options {
      display: flex;
      flex-direction: column;
    }
 
    label {
      cursor: pointer;
      margin-bottom: 10px;
    }
 
    .result {
      font-weight: bold;
    }
  </style>
</head>
 
<body>
  <div class="question">
    <p>Вопрос 1: Какой ваш любимый цвет?</p>
    <div class="options">
      <label>
        <input type="radio" name="q1" value="Синий"> Синий
      </label>
      <label>
        <input type="radio" name="q1" value="Зеленый"> Зеленый
      </label>
      <label>
        <input type="radio" name="q1" value="Красный"> Красный
      </label>
    </div>
  </div>
 
  <div class="question">
    <p>Вопрос 2: Какое ваше любимое животное?</p>
    <div class="options">
      <label>
        <input type="radio" name="q2" value="Собака"> Собака
      </label>
      <label>
        <input type="radio" name="q2" value="Кот"> Кот
      </label>
      <label>
        <input type="radio" name="q2" value="Попугай"> Попугай
      </label>
    </div>
  </div>
 
  <button id="submit">Завершить опрос</button>
 
  <div class="result" style="display: none;">
    <p>Результаты:</p>
    <p id="result-q1">Вопрос 1: <span></span></p>
    <p id="result-q2">Вопрос 2: <span></span></p>
  </div>
</body>
 
</html>
```
*/

// const questionEls = document.querySelectorAll(".question");

// const submitBtn = document.querySelector("#submit");

// const resultEl = document.querySelector(".result");

// submitBtn.addEventListener("click", () => {
//   const q1 = document.getElementsByName("q1");
//   const q2 = document.getElementsByName("q2");
//   let result = "";
//   let resultQ1 = "";
//   let resultQ2 = "";
//   let i = 0;
//   let j = 0;
//   for (i = 0; i < q1.length; i++) {
//     if (q1[i].checked) {
//       resultQ1 = q1[i].value;
//     }
//   }
//   for (j = 0; j < q2.length; j++) {
//     if (q2[j].checked) {
//       resultQ2 = q2[j].value;
//     }
//   }
//   if (resultQ1 === resultQ2) {
//     result = "Все варианты ответов совпадают";
//   } else {
//     result = "Все варианты ответов не совпадают";
//   }
//   resultEl.style.display = "block";
//   resultEl.querySelector("#result-q1 span").textContent = resultQ1;
//   resultEl.querySelector("#result-q2 span").textContent = resultQ2;
//   resultEl.querySelector("#result-q1").textContent = resultQ1;
//   resultEl.querySelector("#result-q2").textContent = resultQ2;

//   console.log(resultQ1);
//   console.log(resultQ2);
//   console.log(result);
// });

const questionEls = document.querySelectorAll(".question");
const submitBtn = document.getElementById("submit");
const resultEl = document.querySelector(".result");
const answersEl = document.querySelector(".answers");

submitBtn.addEventListener("click", () => {
  resultsHtml = [];
  questionEls.forEach((questionEl, index) => {
    const checkedInput = questionEl.querySelector("input:checked");
    questionEl.classList.toggle("not-checked", !checkedInput);
    if (checkedInput) {
      resultsHtml.push(`<p data-number='${index + 1}'>Вопрос ${index + 1}: <span>${checkedInput.value}</span></p>`);
    }
  });
  if (resultsHtml.lenght === questionEls.length) {
    answersEl.innerHTML = resultsHtml.join("");
    // убираем инлайновый стиль display
    resultEl.style.removeProperty('display');
    submitBtn.disabled = true;
  };
});

// https://jsbin.com/devoxaxoka/edit?html.js.output


 


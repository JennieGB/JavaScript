import { cats } from "./data.js";
const dataBase = JSON.parse(cats);

const content = document.querySelector('.content');

dataBase.forEach(({ imgCat, nameCat, descriptionCat, priceCat }) => {
   const divCat = document.createElement('div');
   divCat.classList.add('cat');
   content.appendChild(divCat);

   const img = document.createElement('img');
   img.classList.add('cat__img');
   img.src = imgCat;
   img.width = 200
   divCat.appendChild(img);

   const divCatWrap = document.createElement('div');
   divCatWrap.classList.add('cat__wrap');
   divCat.appendChild(divCatWrap);

   const catName = document.createElement('h2');
   catName.textContent = nameCat;
   divCatWrap.appendChild(catName);

   const catDescription = document.createElement('p');
   catDescription.textContent = descriptionCat;
   divCatWrap.appendChild(catDescription);

   const catPrice = document.createElement('p');
   catPrice.textContent = priceCat;
   divCatWrap.appendChild(catPrice);
});
import productsDB from '../db/catalog.json' assert {type: 'json'};

const productsData = [];
productsDB.products.forEach((elem) => {
   productsData.push(elem);
})

const productBox = document.querySelector('.product__box');

productsData.forEach(productData => {
   const productCard = document.createElement('div');
   productCard.classList.add('product');

   const productHover = document.createElement('a');
   productHover.classList.add('product__image-hover');
   productHover.href = '#';

   const productContent = document.createElement('div');
   productContent.classList.add('product__content');

   const addCard = document.createElement('div');
   addCard.classList.add('add-cart');

   const productImage = document.createElement('img');
   productImage.classList.add('product__img');
   productImage.alt = productData.productImage;
   productImage.src = './image/products/' + productData.productImage;

   const shopImg = document.createElement('img');
   shopImg.src = './image/shop.svg';
   shopImg.alt = 'shop';

   const shopText = document.createElement('p');
   shopText.classList.add('text-add-cart');
   shopText.textContent = 'Add to Cart';

   const productTitleLink = document.createElement('a');
   productTitleLink.classList.add('product__name');
   productTitleLink.href = './pages/product.html';
   productTitleLink.textContent = productData.productTitle;

   const productDescription = document.createElement('p');
   productDescription.classList.add('product__text');
   productDescription.textContent = productData.productDescription;

   const productPrice = document.createElement('p');
   productPrice.classList.add('product__price');
   productPrice.textContent = '$' + productData.productPrice;


   productContent.appendChild(productTitleLink);
   productContent.appendChild(productDescription);
   productContent.appendChild(productPrice);


   addCard.appendChild(shopImg);
   addCard.appendChild(shopText);

   productHover.appendChild(addCard);
   productHover.appendChild(productImage);

   productCard.appendChild(productHover);
   productCard.appendChild(productContent);
   productBox.appendChild(productCard);
});


'use strict'
//1
let content = document.querySelector('.books'),
    books   = document.querySelectorAll('.book');

content.insertBefore(books[1], books[0]);
content.insertBefore(books[4], books[3]);
content.appendChild(books[2]);
//2
document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
//3
let titleBook3 = books[4].querySelector('h2');
titleBook3.textContent = 'Книга 3. this и Прототипы Объектов';
//4
document.querySelector('.adv').remove();
//5
let listUl   = content.querySelectorAll('.books ul'),
    chaptersBook2 = listUl[1].querySelectorAll('li'),
    chaptersBook5 = listUl[4].querySelectorAll('li');
    console.log('chaptersBook5: ', chaptersBook5);
   
listUl[1].insertBefore(chaptersBook2[2], chaptersBook2[10]);
listUl[1].insertBefore(chaptersBook2[7], chaptersBook2[9]);
listUl[1].insertBefore(chaptersBook2[6], chaptersBook2[4]);
listUl[1].insertBefore(chaptersBook2[8], chaptersBook2[4]);

listUl[4].insertBefore(chaptersBook5[9], chaptersBook5[2]);
listUl[4].insertBefore(chaptersBook5[2], chaptersBook5[6]);
listUl[4].insertBefore(chaptersBook5[5], chaptersBook5[8]);

//6
let newChapter = chaptersBook2[2].cloneNode();
let chaptersBook6 = listUl[5].querySelectorAll('li');
newChapter.textContent = 'Глава 8: За пределами ES6';
listUl[5].insertBefore(newChapter, chaptersBook6[9]);
    

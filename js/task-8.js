/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

task-1: создать функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes

task-2: Каждый созданный div:
Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

task-3: Создай функцию destroyBoxes(), которая очищает div#boxes */

/*option - 1 :
const renderBtnRef = document.querySelector("[data-action=render]");
const destroyBtnRef = document.querySelector("[data-action=destroy]");
let boxesContainerRef = document.querySelector("#boxes");
let boxesInputRef = document.querySelector("#controls input");


function createBoxes (amount) {
    let boxElementWidth = 30;
    let boxElementHeight = 30;

    for (let i = 0; i < amount; i++){
        const boxElement = document.createElement('div'); 
        boxElement.style.width = boxElementWidth + 'px';
        boxElement.style.height = boxElementHeight + 'px';
        boxElementWidth += 10;
        boxElementHeight += 10;

        boxElement.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255,)},${Math.floor(Math.random() * 255)})`;
        boxesContainerRef.appendChild(boxElement);
    }
}
renderBtnRef.addEventListener('click', (event) => {
    createBoxes(boxesInputRef.value);
});

destroyBtnRef.addEventListener('click', (event) => {
    boxesContainerRef.innerHTML = "";
})*/

//option - 2:
/*Створити функцію для створення одного div , приймає один аргумент, (size), задєш ширину/висоту і рандомний фон. Вертаєш готовий div
Створити функцію для створення рандомного кольору, в rgb  форматі, функція повертає строку  `rgb(${r}, ${g}, ${b})`
Створити функцію для створення боксив, приймає один аргемент ( чісло яке буле введене в інпуті  ), в середині функції створюєш фрагмент, потім циклом for  створюєш пробігаєшся по числу з аргументу, при кожній ітераціі створюєш дві перемінних:
const size = 30 + i * 10
const div = createBox(size) - перша твоя функція
    І апендиш div в фрагмент.
    Після циклу апендиш в дом готовий фрагмент.
 4.  Створити функцію для створення списку боксів, В середині бере значення  з інпута
const amount = Number(input.value) і визиваш функцію з 3 пункту зі значенням amount .
  5.  Створити функцію для очісткі. Просто через
boxes.innerHTML = ""
прибираєш всі створені блокі.
Залишаеться нівісити ивенти, 4 функцію на render а 5 функцію на destroy */

const boxesContainerRef = document.querySelector('#boxes');
const boxesAmountRef = document.querySelector('#controls input');
const renderBtnRef = document.querySelector('[data-action=render]');
const destroyBtnRef = document.querySelector('[data-action=destroy]');

function createBox(size) {
  const box = document.createElement('div');
  box.style.width = `${size}px`;
  box.style.height = `${size}px`;
  box.style.backgroundColor = getRandomColor();
  return box;
}

function getRandomColor() {
  let r = Math.floor(Math.random() * (255 - 0));
  let g = Math.floor(Math.random() * (255 - 0));
  let b = Math.floor(Math.random() * (255 - 0));
  return `rgb(${r}, ${g}, ${b})`;
}

function renderBoxes(amount) {
  const listFragment = document.createDocumentFragment();
  for (let i = 1; i <= amount; i += 1) {
    const size = 20 + i * 10;
    const div = createBox(size);
    listFragment.appendChild(div);
  }
  boxesContainerRef.appendChild(listFragment);
}

function createBoxes() {
  const amount = Number(boxesAmountRef.value);
  renderBoxes(amount);
}

function destroyBoxes() {
  boxesContainerRef.innerHTML = '';
}

renderBtnRef.addEventListener('click', event => {
  createBoxes();
});

destroyBtnRef.addEventListener('click', event => {
  destroyBoxes();
});
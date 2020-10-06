/* Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, 
после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

task-1: создать функцию createBoxes(amount), которая принимает 1 параметр amount - число. 
Функция создает столько div, сколько указано в amount и добавляет их в div#boxes

task-2: Каждый созданный div:
Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px

task-3: Создай функцию destroyBoxes(), которая очищает div#boxes */

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
})
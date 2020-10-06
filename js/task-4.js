/* счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1
task-1: создать переменную counterValue в которой будет хранится текущее значение счетчика
task-2: cоздать функции increment и decrement для увеличения и уменьшения значения счетчика
task-3: добавить слушатели кликов на кнопки, вызовы функций и обновление интерфейса */

let counterValue = 0;
const incrementRef = document.querySelector("[data-action=increment]");
const decrementRef = document.querySelector("[data-action=decrement]");
const calculationResultRef = document.getElementById('value');

incrementRef.addEventListener('click', function() {
    counterValue++;
    calculationResultRef.textContent = counterValue;
});

decrementRef.addEventListener('click', function() {
    counterValue--;
    calculationResultRef.textContent = counterValue;
});

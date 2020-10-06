/* task-1: написать скрипт который, при наборе текста в инпуте input#name-input (событие input), 
подставляет его текущее значение в span#name-output
task-2: если инпут пустой, в спане должна отображаться строка 'незнакомец'*/

const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', function(event) {
    outputValue.textContent = event.currentTarget.value;
    if(event.currentTarget.value === '') {
        outputValue.textContent = "незнакомец";
    }
});
/* написать скрипт, который реагирует на изменение значения input#font-size-control (событие input) 
и изменяет инлайн-стиль span#text обновляя свойство font-size. 
result:  при перетаскивании ползунка будет меняться размер текста. */


const fontSizeRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");
function handleInputRange(event) {
    textRef.style.fontSize = event.currentTarget.value + 'px';
}
fontSizeRef.addEventListener('input', handleInputRange);

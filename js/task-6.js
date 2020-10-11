/* task-1: написать скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов
tip: сколько символов должно быть в инпуте, указывается в его атрибуте data-length
tip: если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным */

const validationInput = document.querySelector('#validation-input');

const validationInputLength = function(event) {
    const targetRef =  event.currentTarget;
    if (targetRef.value.length === Number(targetRef.dataset.length)) {
        targetRef.classList.remove('invalid');
        targetRef.classList.add('valid');
    } else {
        targetRef.classList.remove('valid');
        targetRef.classList.add('invalid');
    }
};
/*validationInput.addEventListener('focus', function(event) {
    event.currentTarget.classList.remove('invalid', 'valid');
});*/
validationInput.addEventListener('blur', validationInputLength);

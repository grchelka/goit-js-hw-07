/* task-1: написать скрипт для создания галлереи изображений по массиву данных
task-2: Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML()
task-3: 
Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы.*/

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

/*for (let i = 0; i < images.length; i++) {
  gallery.insertAdjacentHTML(`afterbegin`, `<li><img src='${images[i].url}' alt='${images[i].alt}' width='400' height='300'/></li>`);
} */

const gallery = document.getElementById('gallery');
//const t0 = performance.now();
gallery.insertAdjacentHTML('afterbegin', 
  images.reduce(function (acc, currentValue) {
    return acc + `<li><img src='${currentValue.url}' alt='${currentValue.alt}' width='400' height='300'/></li>`;
  }, '')
);
//const t1 = performance.now();
//console.log(`${t1 - t0} milliseconds.`);

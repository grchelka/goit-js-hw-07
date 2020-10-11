/* task 1 - посчитает и выведет в консоль 
количество категорий в ul#categories, то есть элементов li.item*/
/* task 2 -для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li)*/

const elements = document.querySelectorAll('li.item');
console.log(`В списке ${elements.length} категории`);

/*for (let i = 0; i < elements.length; i++) {
  const category = elements[i].querySelector('h2');
  const numberOfElements = elements[i].querySelectorAll('li').length;

  console.log(`Категория: ${category.textContent}`);
  console.log(`Количество элементов: ${numberOfElements}`);
}*/


  elements.forEach(function(element) {
    const category = element.querySelector('h2');
    const numberOfElements = element.querySelectorAll('li').length;

    console.log(`Категория: ${category.textContent}`);
    console.log(`Количество элементов: ${numberOfElements}`);
  });
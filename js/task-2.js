/* есть массив строк
task-1 скрипт, который для каждого элемента массива ingredients создаст отдельный li,
task 2 - добавить все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement().*/

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];

  const listOfIngredients= ingredients.map(ingredient => {
    const listItemRef = document.createElement('li');
    listItemRef.textContent = ingredient;
    return listItemRef;
  });
  document.querySelector('#ingredients').append(...listOfIngredients);
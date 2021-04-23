const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList = document.querySelector('#ingredients');
const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.innerHTML = ingredient;
    return liEl;
   
});
ingredientsList.append(...elements);



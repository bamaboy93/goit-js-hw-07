const categoriesEl = document.querySelectorAll('.item');
console.log(`В списке ${categoriesEl.length} категории.`);

const categoriesArray = [...categoriesEl]
.map( categories => `Категория: ${categories.children[0].textContent}
Количество элементов: ${categories.children[1].children.length}`
)
  .join("\n");
console.log(categoriesArray);
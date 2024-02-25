// Отримуємо список категорій
const categoriesList = document.getElementById('categories');

// Отримуємо всі елементи категорій (li.item)
const categoriesItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій
console.log('Number of categories:', categoriesItems.length);

// Для кожного елемента категорії виводимо текст заголовка і кількість елементів у категорії
categoriesItems.forEach(categoryItem => {
  const categoryName = categoryItem.querySelector('h2').textContent;
  const categoryElementsCount = categoryItem.querySelectorAll('li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});

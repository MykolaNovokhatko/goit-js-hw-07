// Отримати посилання на елементи DOM
const changeColorButton = document.querySelector('.button-widget');
const bodyElement = document.body;
const colorSpan = document.querySelector('.color');

// Функція для отримання випадкового кольору у форматі HEX
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

// Обробник подій для кліку на кнопку "Change color"
changeColorButton.addEventListener('click', () => {
  // Змінити колір фону body на випадковий колір
  const randomColor = getRandomHexColor();
  bodyElement.style.backgroundColor = randomColor;

  // Оновити текстовий вміст елемента span з класом .color на новий колір
  colorSpan.textContent = randomColor;
});

// Запуск скрипту при завантаженні сторінки
window.addEventListener('DOMContentLoaded', () => {
  // Додати початковий колір фону та текст для елемента span з класом .color
  bodyElement.style.backgroundColor = '#ffffff'; // Початковий колір фону
  colorSpan.textContent = '#ffffff'; // Початковий текстовий вміст
});
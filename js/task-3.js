const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  const trimmedValue = nameInput.value.trim(); // Видаляємо пробіли по краях

  if (trimmedValue) {
    nameOutput.textContent = trimmedValue;
  } else {
    nameOutput.textContent = 'Anonymous';
  }
});

const form = document.querySelector('.login-form');

    form.addEventListener('submit', event => {
      event.preventDefault(); // Зупиняємо перезавантаження сторінки

      const emailInput = form.elements.email;
      const passwordInput = form.elements.password;

      const emailValue = emailInput.value.trim();
      const passwordValue = passwordInput.value.trim();

      if (!emailValue || !passwordValue) {
        alert('All form fields must be filled in');
        return; // Зупиняємо виконання функції, якщо є незаповнені поля
      }

      const formData = {
        email: emailValue,
        password: passwordValue
      };

      console.log(formData); // Виводимо об'єкт з даними в консоль
      form.reset(); // Очищаємо значення полів форми
    });
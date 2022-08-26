export default class LoginWindow {
  constructor(element, onLogin) {
    this.element = element;
    this.onLogin = onLogin;

    const loginNameInput = element.querySelector('[data-role=login-name-input]');
    const submitButton = element.querySelector('[data-role=login-submit]');
    const loginError = element.querySelector('[data-role=login-error]');

    loginNameInput.addEventListener('keyup', function (event) {
      event.preventDefault();
      if (event.keyCode === 13) {
        submitButton.click();
      }
    });

    submitButton.addEventListener('click', () => {
      loginError.textContent = '';

      const name = loginNameInput.value.trim();

      if (!name) {
        loginError.textContent = 'Введите никнейм';
      } else {
        this.onLogin(name);
      }
    });
  }

  show() {
    this.element.classList.remove('hidden');
  }

  hide() {
    this.element.classList.add('hidden');
  }
}

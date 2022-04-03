export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    //вынести button и inputlist сюда?
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);//деструктуризация нужна?
    inputElement.classList.add(this._settings.inputErrorClass); //деструктуризация нужна?
  }


  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
    inputElement.classList.remove(this._settings.inputErrorClass);
  }

  _checkValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid; //нужна ли отдельная константа или сразу сравнивать с !inputElement.validity.valid ?
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      this._showError(inputElement, errorMessage);//нужно ди вызывыть форму?
    } else {
      this._hideError(inputElement); //нужно ди вызывыть форму?
    }
  }

  // Надо сделать отдельные фуекции для включения и отключения когда класс заработает!
  _toggleButtonState(inputList, submitButton) {
    const hasInvalidInput = Array.from(inputList).some((inputElement) => {
      return !inputElement.validity.valid;
    });

    if (hasInvalidInput) {
      submitButton.classList.add(this._settings.inactiveButtonClass);
      submitButton.setAttribute('disabled', true);
    } else {
      submitButton.classList.remove(this._settings.inactiveButtonClass);
      submitButton.removeAttribute('disabled');
    }
  }


  _setInputEventListeners() {
    const inputList = this._form.querySelectorAll(this._settings.inputSelector); // положить в this?
    const submitButton = this._form.querySelector(this._settings.submitButtonSelector); // положить в this?
    inputList.forEach(inputElement => {
      console.log(inputElement);
      inputElement.addEventListener('input', (event) => { // убираем event из скобок?
        this._checkValidity(inputElement); //нужно ди вызывыть форму?
        this._toggleButtonState(inputList, submitButton); //просто settings?
      });
    });
  }

  enableValidation() {
    console.log(this._form);
    this._setInputEventListeners (); //нужно ли вешать на submitButtonSelector?
  }
}

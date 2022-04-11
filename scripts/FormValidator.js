export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    //вынести button и inputlist сюда?
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
    inputElement.classList.add(this._settings.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
    inputElement.classList.remove(this._settings.inputErrorClass);
  }

  _checkValidity(inputElement) {
    const isInputNotValid = !inputElement.validity.valid;
    if (isInputNotValid) {
      const errorMessage = inputElement.validationMessage;
      this._showError(inputElement, errorMessage);
    } else {
      this._hideError(inputElement);
    }
  }

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
    const inputList = this._form.querySelectorAll(this._settings.inputSelector);
    const submitButton = this._form.querySelector(this._settings.submitButtonSelector);
    inputList.forEach(inputElement => {
        inputElement.addEventListener('input', () => {
        this._checkValidity(inputElement);
        this._toggleButtonState(inputList, submitButton);
      });
    });
  }

  enableValidation() {
    this._setInputEventListeners ();
  }
}

export class FormValidator {
  constructor(settings, form) {
    this._form = form;
    this._settings = settings;
    this._submitButton = this._form.querySelector(
      this._settings.submitButtonSelector
    );
    this._inputList = this._form.querySelectorAll(this._settings.inputSelector);
  }

  _showError(inputElement, errorMessage) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._settings.errorClass);
    inputElement.classList.add(this._settings.inputErrorClass);
  }

  _hideError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
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

  _disableSubmitbutton() {
    this._submitButton.classList.add(this._settings.inactiveButtonClass);
    this._submitButton.setAttribute("disabled", true);
  }

  _enableSubmitbutton() {
    this._submitButton.classList.remove(this._settings.inactiveButtonClass);
    this._submitButton.removeAttribute("disabled");
  }

  _toggleButtonState() {
    if (!this._form.checkValidity()) {
      this._disableSubmitbutton();
    } else {
      this._enableSubmitbutton();
    }
  }

  _setInputEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkValidity(inputElement);
        this._toggleButtonState();
      });
    });
  }

  enableValidation() {
    this._setInputEventListeners();
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputList.forEach((inputElement) => {
      this._hideError(inputElement);
    });
  }
}

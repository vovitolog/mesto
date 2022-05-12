import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupName.querySelector(".popup__form");
    this._inputList = this._popupForm.querySelectorAll(".popup__input");
    this._popupSubmitButton = this._popupName.querySelector(
      ".popup__button-save"
    );
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => (inputValues[input.name] = input.value));
    return inputValues;
  }

  setWaitingText() {
    this._popupSubmitButton.textContent = "Сохранение...";
  }

  resetWaitingText() {
    this._popupSubmitButton.textContent = "Сохранить";
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._getInputValues());      
    });
  }

  close() {
    super.close();
    this._popupForm.reset();
  }
}

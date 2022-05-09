import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupName.querySelector(".popup__form");
  }

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleFormSubmit(this._cardId);
      this.close();
    });
  }

  open(cardId) {
    this._cardId = cardId;
    super.open();
  }
}

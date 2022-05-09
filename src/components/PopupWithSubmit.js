import { Popup } from "./Popup.js";

export class PopupWithSubmit extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._popupForm = this._popupName.querySelector(".popup__form"); //надо ли ее находить?
  }

  setEventListeners() {
    super.setEventListeners();
    console.log(this._popupForm);
    this._popupForm.addEventListener("submit", (event) => {
        event.preventDefault();        
        this.close();
      });
  }

 
}

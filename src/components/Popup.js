export class Popup {
  constructor(popupSelector) {
    this._popupName = document.querySelector(popupSelector);
    this._buttonClose = this._popupName.querySelector(".popup__button-close");
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupOnOuterClick = this._closePopupOnOuterClick.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _closePopupOnOuterClick(event) {
    if (event.target !== this._popupName) {
      return;
    }
    this.close();
  }

  open() {
    this._popupName.classList.add("popup_is-opened");
    document.addEventListener("keydown", this._handleEscClose);
    document.addEventListener("mousedown", this._closePopupOnOuterClick);
  }

  close() {
    this._popupName.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this._handleEscClose);
    document.removeEventListener("mousedown", this._closePopupOnOuterClick);
  }

  setEventListeners() {
    this._buttonClose.addEventListener("click", () => {
      this.close();
    });
  }
}

export class Popup {
  constructor(popupSelector) {
    //this._popupSelector = popupSelector;
    this._popupName = document.querySelector(popupSelector);
    this._buttonClose = this._popupName.querySelector('.popup__button-close');
    this._handleEscClose = this._handleEscClose.bind(this);
    this._closePopupOnOuterClick = this._closePopupOnOuterClick.bind(this);
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      console.log(event);
      console.log(this._buttonClose);
      this.close();
  }
}

_closePopupOnOuterClick(event) {
    if (event.target !== this._popupName) {
      return;
  } console.log(event);
    this.close();
}

  open () {
    this._popupName.classList.add('popup_is-opened');
    document.addEventListener('keydown', this._handleEscClose);
    document.addEventListener('click', this._closePopupOnOuterClick);
  }

  close () {
    this._popupName.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', this._handleEscClose);
    document.removeEventListener('click', this._closePopupOnOuterClick);
  }

  setEventListeners() {
    this._buttonClose.addEventListener('click', () => {
      console.log(this._popupName);
      this.close()});
  }
}


//

/* const closePopupOnOuterClick = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
   closePopup(event.target);
} */

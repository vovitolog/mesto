import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._name = data.name;
    this._link = data.link;
    this._popupImageViewPicture =
      this._popupName.querySelector(".popup__image");
    this._popupImageViewDescription = this._popupName.querySelector(
      ".popup__description"
    );
  }

  open() {
    this._popupImageViewPicture.src = this._link;
    this._popupImageViewPicture.alt = this._name;
    this._popupImageViewDescription.textContent = this._name;
    super.open();
  }
}

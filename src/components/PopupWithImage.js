import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageViewPicture =
      this._popupName.querySelector(".popup__image");
    this._popupImageViewDescription = this._popupName.querySelector(
      ".popup__description"
    );
  }

  open(name, link) {
    this._popupImageViewPicture.src = link;
    this._popupImageViewPicture.alt = name;
    this._popupImageViewDescription.textContent = name;
    super.open();
  }
}

export const validationSettings = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-save",
  inactiveButtonClass: "popup__button-save_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error_active",
};

export const popupCardAddOpenButtonElement = document.querySelector(
  ".profile__button-add"
);

export const popupProfileEditOpenButtonElement = document.querySelector(
  ".profile__button-edit"
);

export const popupPhotoEditOpenHoverElement = document.querySelector (
  ".profile__photo-wrapper"
);

export const popupFormCardAdd = document
  .querySelector(".popup_type_card-add")
  .querySelector(".popup__form");

export const popupFormProfileEdit = document
  .querySelector(".popup_type_profile-edit")
  .querySelector(".popup__form");

export const popupFormPhotoEdit = document
  .querySelector(".popup_type_photo-edit")
  .querySelector(".popup__form");

export const popupNameInputValue = popupFormProfileEdit.querySelector(
  ".popup__input_type_name"
);
export const popupProfessionInputValue = popupFormProfileEdit.querySelector(
  ".popup__input_type_profession"
);

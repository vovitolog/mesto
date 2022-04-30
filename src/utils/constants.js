export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

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

export const popupFormCardAdd = document
  .querySelector(".popup_type_card-add")
  .querySelector(".popup__form");

export const popupFormProfileEdit = document
  .querySelector(".popup_type_profile-edit")
  .querySelector(".popup__form");

export const popupNameInputValue = popupFormProfileEdit.querySelector(
  ".popup__input_type_name"
);
export const popupProfessionInputValue = popupFormProfileEdit.querySelector(
  ".popup__input_type_profession"
);

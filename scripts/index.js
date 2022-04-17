import {initialCards} from './cards.js';
import {FormValidator} from './FormValidator.js';
import {Card} from './Card.js';

// Попап добавления карточки
const popupCardAdd = document.querySelector('.popup_type_card-add');
const popupCardAddCloseButtonElement = popupCardAdd.querySelector('.popup__button-close');
const popupCardAddOpenButtonElement = document.querySelector('.profile__button-add');
const popupCardAddSubmitButton = popupCardAdd.querySelector('.popup__button-save');

// Попап редактирования профиля
const popupProfileEdit = document.querySelector('.popup_type_profile-edit');
const popupProfileEditCloseButtonElement = popupProfileEdit.querySelector('.popup__button-close');
const popupProfileEditOpenButtonElement = document.querySelector('.profile__button-edit');
const popupProfileEditSubmitButton = popupProfileEdit.querySelector('.popup__button-save');

// Попап просмотра изображения
const popupImageView = document.querySelector('.popup_type_image-view');
const popupImageViewCloseButtonElement = popupImageView.querySelector('.popup__button-close');
const popupImageViewPicture = popupImageView.querySelector('.popup__image');
const popupImageViewDescription = popupImageView.querySelector('.popup__description');

// Форма редактирования профиля
const popupFormProfileEdit = popupProfileEdit.querySelector('.popup__form');
const popupNameInputValue = popupFormProfileEdit.querySelector('.popup__input_type_name');
const popupProfessionInputValue = popupFormProfileEdit.querySelector('.popup__input_type_profession');
const profileNameValue = document.querySelector('.profile__name');
const profileProfessionValue = document.querySelector('.profile__profession');

// Форма добаления карточки
const popupFormCardAdd = popupCardAdd.querySelector('.popup__form');
const popupTitleInputValue = popupFormCardAdd.querySelector('.popup__input_type_place');
const popupLinkInputValue = popupFormCardAdd.querySelector('.popup__input_type_url');

const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

const profileEditValidator = new FormValidator(validationSettings, popupFormProfileEdit);
const cardAddValidator = new FormValidator(validationSettings, popupFormCardAdd);

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();

// Функция заполняет поля формы редактирования профиля данными со страницы
const fillProfileEditForm = () => {
  popupNameInputValue.value = profileNameValue.textContent;
  popupProfessionInputValue.value = profileProfessionValue.textContent;
}

// Закрытие/открытие попавов
const openPopup = (popupName) => {
  popupName.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeByEscape);
};

const closePopup = (popupName) => {
  popupName.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeByEscape);
};

const openPopupProfileEdit = () => {
  profileEditValidator.resetValidation();
  fillProfileEditForm();
  openPopup(popupProfileEdit);
}

const closePopupProfileEdit = () => {
  closePopup(popupProfileEdit);
  popupFormProfileEdit.reset();
}

const openPopupCardAdd = () => {
  cardAddValidator.resetValidation();
  openPopup(popupCardAdd);
}

const closePopupCardAdd = () => {
  closePopup(popupCardAdd);
  popupFormCardAdd.reset();
}

const openPopupImageView = () => {
  openPopup(popupImageView);
}

const closePopupImageView = () => {
  closePopup(popupImageView);
}

const closePopupOnOuterClick = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
   closePopup(event.target);
}

const closeByEscape= (event) => {
  if (event.key === "Escape") {
    const popup = document.querySelector('.popup_is-opened');
    closePopup(popup);
  }
}

// Сабмит формы редактирования профиля
const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  profileNameValue.textContent = popupNameInputValue.value;
  profileProfessionValue.textContent = popupProfessionInputValue.value;
  closePopupProfileEdit();
}

// Сабмит формы добавления карточки
const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const cardItem = {};
  cardItem.name = popupTitleInputValue.value;
  cardItem.link = popupLinkInputValue.value;
  cardAdd(cardItem, 'begin');
  popupFormCardAdd.reset();
  closePopupCardAdd();
}

// Обработка формы редактирования профиля
popupProfileEditOpenButtonElement.addEventListener('click', openPopupProfileEdit);
popupProfileEditCloseButtonElement.addEventListener('click', closePopupProfileEdit);
popupProfileEdit.addEventListener('click', closePopupOnOuterClick);
popupFormProfileEdit.addEventListener('submit', handleProfileFormSubmit);

// Обработка формы добавления карточки:
popupCardAddOpenButtonElement.addEventListener('click', openPopupCardAdd);
popupCardAddCloseButtonElement.addEventListener('click', closePopupCardAdd);
popupFormCardAdd.addEventListener('submit', handleCardFormSubmit);
popupCardAdd.addEventListener('click', closePopupOnOuterClick);

// Закрытие попапа с картинкой:
popupImageView.addEventListener('click', closePopupOnOuterClick);
popupImageViewCloseButtonElement.addEventListener('click', closePopupImageView);

// Добавление карточек

const renderPopupImageView = (name, link) => {
  popupImageViewPicture.src = link;
  popupImageViewPicture.alt = name;
  popupImageViewDescription.textContent = name;
  openPopupImageView();
}

const cardsList = document.querySelector('.cards__list');

const cardAdd = (cardItem, position) => {
  const cardAdd = new Card(cardItem, '.card-template', renderPopupImageView);
  const cardItemtoAdd = cardAdd.renderCard();
  if (position === 'begin') {
    cardsList.prepend(cardItemtoAdd);
  } else {
  cardsList.append(cardItemtoAdd);
  }
}

const renderCards = (items) => {
  items.forEach(cardAdd);
}

renderCards (initialCards);



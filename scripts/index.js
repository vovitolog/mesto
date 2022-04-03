import {FormValidator} from './FormValidator.js';


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
const CardAddValidator = new FormValidator(validationSettings, popupFormCardAdd);

profileEditValidator.enableValidation();
CardAddValidator.enableValidation();

// Функция заполняет поля формы редактирования профиля данными со страницы
const fillProfileEditForm = () => {
  popupNameInputValue.value = profileNameValue.textContent;
  popupProfessionInputValue.value = profileProfessionValue.textContent;
}

// Функция стирает ошибки при открытии
const clearErrorsOnOpen = (form) => {
  const inputsToCheck = form.querySelectorAll('.popup__input');
  inputsToCheck.forEach(inputElement => {
    if (inputElement.classList.contains('popup__input_type_error')) {
    inputElement.classList.remove('popup__input_type_error');
    const errorElement = form.querySelector(`#${inputElement.id}-error`);
    errorElement.classList.remove('popup__input-error_active');
    }
  });
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
  fillProfileEditForm ();
  openPopup(popupProfileEdit);
  clearErrorsOnOpen(popupFormProfileEdit);
}

const closePopupProfileEdit = () => {
  closePopup(popupProfileEdit);
  popupFormProfileEdit.reset();
}

const openPopupCardAdd = () => {
  openPopup(popupCardAdd);
  popupCardAddSubmitButton.classList.add('popup__button-save_disabled');
  popupCardAddSubmitButton.setAttribute('disabled', true);
  clearErrorsOnOpen(popupFormCardAdd);
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

// Удаление карточки:
const deleteCard = (event) => {
  const cardItem = event.target.closest('.card');
  cardItem.remove();
}

// Лайк карточки
const toggleLikeButton = (event) => {
  event.target.classList.toggle('card__like_is-pressed');
}

// Рендер попапа с картинкой
const renderPopupImageView = (event) => {
  popupImageViewPicture.src = event.target.src;
  const cardItem = event.target.closest('.card');
  const cardTitleText  = cardItem.querySelector('.card__title').textContent;
  popupImageViewPicture.alt = cardTitleText;
  popupImageViewDescription.textContent = cardTitleText;
  openPopupImageView();
}

// Добавление слушателей на карточки
const setEventListeners = (cardItem) => {
  cardItem.querySelector('.card__button-delete').addEventListener('click', deleteCard);
  cardItem.querySelector('.card__like').addEventListener('click', toggleLikeButton);
  cardItem.querySelector('.card__image').addEventListener('click', renderPopupImageView);
}

// Добавление карточек
const cardTemplate = document.querySelector('.card-template').content;
const cardsList = document.querySelector('.cards__list');

const renderCard = (item) => {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    cardImage.src = item.link;
    cardImage.alt = item.name;
    cardItem.querySelector('.card__title').textContent = item.name;
    setEventListeners(cardItem);
    return cardItem;
}

const cardAdd = (cardItem, position) => {
  const cardToAdd = renderCard (cardItem);
  if (position === 'begin') {
    cardsList.prepend(cardToAdd);
  } else {
  cardsList.append(cardToAdd);
  }
}

const renderCards = (items) => {
  items.forEach(cardAdd);
}

renderCards (initialCards);




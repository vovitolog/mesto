const popupSection = document.querySelector('.popup');
const popupCloseButtonElement = popupSection.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = popupSection.querySelector('.popup__button-save');
const popupForm = popupSection.querySelector('.popup__form');
const popupNameInputValue = popupForm.querySelector('.popup__input_type_name');
const popupProfessionInputValue = popupForm.querySelector('.popup__input_type_profession');
const profileNameValue = document.querySelector('.profile__name');
const profileProfessionValue = document.querySelector('.profile__profession');

const openPopup = () => {
  popupSection.classList.add('popup_is-opened');
  popupNameInputValue.value = profileNameValue.textContent;
  popupProfessionInputValue.value = profileProfessionValue.textContent;
};

const closePopup = () => {
  popupSection.classList.remove('popup_is-opened');
};

const closePopupOnOuterClick = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  profileNameValue.textContent = popupNameInputValue.value;
  profileProfessionValue.textContent = popupProfessionInputValue.value;
  closePopup();
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSection.addEventListener('click', closePopupOnOuterClick);
popupForm.addEventListener('submit', handleProfileFormSubmit);

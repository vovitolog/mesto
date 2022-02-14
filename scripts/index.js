const popupSection = document.querySelector('.popup');
const popupCloseButtonElement = popupSection.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = popupSection.querySelector('.popup__button-save');
const popupForm = popupSection.querySelector('.popup__form');
const popupNameInputValue = popupForm.querySelector('.popup__form-name');
const popupProfessionInputValue = popupForm.querySelector('.popup__form-profession');
const profileNameValue = document.querySelector('.profile__name');
const profileProfessionValue = document.querySelector('.profile__profession');

const switchPopupVisibility = () => {
  popupSection.classList.toggle ('popup_is-opened');
};

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

const formSubmitHandler = (event) => {
  event.preventDefault();
  const formName = popupNameInputValue.value;
  const formProfession = popupProfessionInputValue.value;
  profileNameValue.textContent = formName;
  profileProfessionValue.textContent = formProfession;
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSection.addEventListener('click', closePopupOnOuterClick);
popupSaveButtonElement.addEventListener('click', closePopup);
popupForm.addEventListener('submit', formSubmitHandler);

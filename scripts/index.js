const popupSection = document.querySelector('.popup');
const popupCloseButtonElement = popupSection.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = popupSection.querySelector('.popup__button-save');
const popupForm = popupSection.querySelector('.popup__form');
const popupNameInputValue = popupForm.querySelector('.popup__form-name').value;
const popupProfessionInputValue = popupForm.querySelector('.popup__form-profession').value;
console.log(popupNameInputValue);
console.log(popupProfessionInputValue);

const switchPopupVisibility = () => {
  popupSection.classList.toggle ('popup_is-opened');
};

const openPopup = () => {
  popupSection.classList.add('popup_is-opened');
};

const closePopup = () => {
  popupSection.classList.remove('popup_is-opened');
};

const closePopupOnOuterClick = (event) => {
  // console.log(event.target, event.currentTarget);
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopup();
}

const changeInputValues = () => {
  popupSection.classList.remove('popup_is-opened');
}

const formSubmitHandler = (event) => {
  event.preventDefault();
  const formName = popupNameInputValue.value;
  const formProfession = popupProfessionInputValue.value;
  console.log(formName);
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupSection.addEventListener('click', closePopupOnOuterClick);
popupSaveButtonElement.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler);

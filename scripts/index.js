const popupCardAdd = document.querySelector('.popup_card-add'); // попап добавления карточки
const popupCardAddCloseButtonElement = popupCardAdd.querySelector('.popup__button-close');
const popupCardAddOpenButtonElement = document.querySelector('.profile__button-add');
const popupCardAddSaveButtonElement = popupCardAdd.querySelector('.popup__button-save');


const popupSection = document.querySelector('.popup');
const popupCloseButtonElement = popupSection.querySelector('.popup__button-close');
const popupOpenButtonElement = document.querySelector('.profile__button-edit');
const popupSaveButtonElement = popupSection.querySelector('.popup__button-save'); // нужна ли она с учтом того, что на сабмит не вешается событие?

const popupForm = popupSection.querySelector('.popup__form');
const popupNameInputValue = popupForm.querySelector('.popup__input_type_name');
const popupProfessionInputValue = popupForm.querySelector('.popup__input_type_profession');
const profileNameValue = document.querySelector('.profile__name');
const profileProfessionValue = document.querySelector('.profile__profession');

const openPopup = (popupName) => {
  popupName.classList.add('popup_is-opened');
};

// Функция заполняет поля формы редактирования профиля данными со страницы
const fillProfileEditForm = () => {
  popupNameInputValue.value = profileNameValue.textContent;
  popupProfessionInputValue.value = profileProfessionValue.textContent;
}

const openPopupProfileEdit = () => {
  fillProfileEditForm ();
  openPopup(popupSection);
}

const closePopupProfileEdit = () => {
  closePopup(popupSection);
}

const openPopupCardAdd = () => {
  openPopup(popupCardAdd);
}

const closePopupCardAdd = () => {
  closePopup(popupCardAdd);
}


const closePopup = (popupName) => {
  popupName.classList.remove('popup_is-opened');
};

const closePopupOnOuterClick = (event) => {
  if (event.target !== event.currentTarget) {
    return;
  }
  closePopupProfileEdit();
}

const handleProfileFormSubmit = (event) => {
  event.preventDefault();
  profileNameValue.textContent = popupNameInputValue.value;
  profileProfessionValue.textContent = popupProfessionInputValue.value;
  closePopupProfileEdit();
}

popupOpenButtonElement.addEventListener('click', openPopupProfileEdit);
popupCloseButtonElement.addEventListener('click', closePopupProfileEdit);
popupSection.addEventListener('click', closePopupOnOuterClick);
popupForm.addEventListener('submit', handleProfileFormSubmit);

popupCardAddOpenButtonElement.addEventListener('click', openPopupCardAdd);
popupCardAddCloseButtonElement.addEventListener('click', closePopupCardAdd);


console.log (popupCardAddCloseButtonElement);

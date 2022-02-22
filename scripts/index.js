const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

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

const popupFormCardAdd = popupCardAdd.querySelector('.popup__form');
console.log(popupFormCardAdd);
const popupTitleInputValue = popupFormCardAdd.querySelector('.popup__input_type_name');
const popupLinkInputValue = popupFormCardAdd.querySelector('.popup__input_type_profession');

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

const handleCardFormSubmit = (event) => {
  event.preventDefault();
  const cardItem = {};
  cardItem.name = popupTitleInputValue.value;
  cardItem.link = popupLinkInputValue.value;
  console.log(cardItem);
  renderCard(cardItem, 'begin');
  closePopupCardAdd();
}


// Обработка формы редактирования профиля:
popupOpenButtonElement.addEventListener('click', openPopupProfileEdit);
popupCloseButtonElement.addEventListener('click', closePopupProfileEdit);
popupSection.addEventListener('click', closePopupOnOuterClick);
popupForm.addEventListener('submit', handleProfileFormSubmit);

// Обработка формы добавления карточки:
popupCardAddOpenButtonElement.addEventListener('click', openPopupCardAdd);
popupCardAddCloseButtonElement.addEventListener('click', closePopupCardAdd);
popupFormCardAdd.addEventListener('submit', handleCardFormSubmit);

const cardTemplate = document.querySelector('.card-template').content;
const cardsList = document.querySelector('.cards__list');

// Удаление карточки:
deleteCard = (event) => {
  const cardItem = event.target.closest('.card');
  console.log(cardItem);
  cardItem.remove();
}

toggleLikeButton = (event) => {
  const cardItem = event.target.closest('.card__like');
  cardItem.classList.toggle('card__like_is-pressed');
}

const setEventListeners = (cardItem) => {
  cardItem.querySelector('.card__button-delete').addEventListener('click', deleteCard);
  cardItem.querySelector('.card__like').addEventListener('click', toggleLikeButton);
}
// Добавление карточек через массив:

const renderCard = (item, position) => {
    const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
    cardItem.querySelector('.card__image').src = item.link;
    cardItem.querySelector('.card__title').textContent = item.name;
    setEventListeners(cardItem);
    if (position === 'begin') {
      cardsList.prepend(cardItem);
    } else {
    cardsList.append(cardItem);
    }
}

const renderCards = (items) => {
  items.forEach(renderCard);
}

renderCards (initialCards);




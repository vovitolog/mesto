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
console.log(initialCards.length);

const cardTemplate = document.querySelector('.card-template').content;
const cardsList = document.querySelector('.cards__list');
// initialCards.forEach(card => console.log(card.link));
// console.log(cardTemplate);
for (item of initialCards) {
  console.log(item.link);
  const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
  cardItem.querySelector('.card__image').src = item.link;
  cardItem.querySelector('.card__title').textContent = item.name;
  cardsList.append(cardItem);
}
const cardItem = cardTemplate.querySelector('.card').cloneNode(true);
console.log(cardItem);
cardItem.querySelector('.card__image').src = initialCards[0].link;
cardItem.querySelector('.card__title').textContent = initialCards[0].name;

cardsList.append(cardItem);

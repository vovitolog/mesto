import "./../pages/index.css";

import {
  validationSettings,
  popupCardAddOpenButtonElement,
  popupProfileEditOpenButtonElement,
  popupPhotoEditOpenHoverElement,
  popupFormCardAdd,
  popupFormProfileEdit,
  popupFormPhotoEdit,
  popupNameInputValue,
  popupProfessionInputValue,
} from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithSubmit } from "../components/PopupWithSubmit.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";

const profileEditValidator = new FormValidator(
  validationSettings,
  popupFormProfileEdit
);
const cardAddValidator = new FormValidator(
  validationSettings,
  popupFormCardAdd
);

const photoEditValidator = new FormValidator(
  validationSettings,
  popupFormPhotoEdit
);

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();
photoEditValidator.enableValidation();

const popupImage = new PopupWithImage(".popup_type_image-view");
popupImage.setEventListeners();

const popupConfirm = new PopupWithSubmit({
  popupSelector: ".popup_type_submit",
  handleFormSubmit: () => {
    console.log(`Test`);
  },
});
popupConfirm.setEventListeners;

const createCard = (data) => {
  const card = new Card(
    data,
    currentUser,
    ".card-template",
    (name, link) => {
      popupImage.open(name, link);
    },
    () => popupConfirm.open()
      
  );
  return card.renderCard();
};

const myList = new Section((data) => {
  const item = createCard(data);
  myList.addItem(item);
}, ".cards__list");

const popupCardAddClass = new PopupWithForm({
  popupSelector: ".popup_type_card-add",
  handleFormSubmit: (data) => {
    const cardItem = {};
    cardItem.name = data["place-name"];
    cardItem.link = data["image-url"];
    cardItem.likes = []; // добавили лайки!!!!
    cardItem.owner = {};
    cardItem.owner["_id"] = currentUser;
    const item = createCard(cardItem);
    myList.addItem(item, "begin"); // или сделать вместо добавления на страницу генерацию заново?
    api.addNewCard(cardItem); // finally???
  },
});
popupCardAddClass.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionSelector: ".profile__profession",
});

const popupProfileEditForm = new PopupWithForm({
  popupSelector: ".popup_type_profile-edit",
  handleFormSubmit: (data) => {
    api.setNewUserInfo(data).finally(() => userInfo.setUserInfo(data)); //точно finally???
  },
});
popupProfileEditForm.setEventListeners();

const popupPhotoEdit = new PopupWithForm({
  popupSelector: ".popup_type_photo-edit",

  handleFormSubmit: (data) => {
    api.setNewPhrofilePhoto(data["photo-url"]).finally(() => {
      //точно finally??
      profilePhoto.src = data["photo-url"];
    });
  },
});
popupPhotoEdit.setEventListeners();

popupCardAddOpenButtonElement.addEventListener("click", () => {
  cardAddValidator.resetValidation();
  popupCardAddClass.open();
});

popupProfileEditOpenButtonElement.addEventListener("click", () => {
  const userInfoOnOpen = userInfo.getUserInfo();
  popupNameInputValue.value = userInfoOnOpen.name;
  popupProfessionInputValue.value = userInfoOnOpen.profession;
  profileEditValidator.resetValidation();
  popupProfileEditForm.open();
});

popupPhotoEditOpenHoverElement.addEventListener("click", () => {
  photoEditValidator.resetValidation();
  popupPhotoEdit.open();
});

// Создаём копию класса Api

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-40",
  headers: {
    authorization: " f67242ed-0af1-4508-b1a9-28f5e424436c",
    "Content-Type": "application/json",
  },
});

const profilePhoto = document.querySelector(".profile__photo"); // убрать в constants?
let currentUser = ""; // Взять мой id и записать его в constants?

api.renderFirstScreen().then((result) => {
  const [initialCards, userData] = result;

  initialCards.forEach((element) => {
    //console.log(element["_id"]);
  });
  currentUser = userData["_id"];
  console.log(currentUser + " Owner");

  myList.renderInitialItems(initialCards);

  userInfo.setUserInfo({ name: userData.name, profession: userData.about });
  profilePhoto.src = userData.avatar;
});

// Загрузка данных пользователя
/* 

api.getUserInfo().then((res) => {
  userInfo.setUserInfo({ name: res.name, profession: res.about });
  profilePhoto.src = res.avatar;
  //console.log (res);
});
 */
// Генерация изначальных карточек

/* api
  .getInitialCards()
  .then((result) => {
    //console.log(result);
    myList.renderInitialItems(result);
  })
  .catch((err) => {
    console.log(err); // выведем ошибку в консоль - сделать универсальную функцию?
  });
 */

// Добавление новой карточки

//api.addNewCard({
//  name: "name",
// link: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg",
// });

/* const like = document.querySelector(".card__likes-count");
console.log(like.textContent); */

// myList.renderInitialItems(initialCards);

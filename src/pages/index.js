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

let currentUser = null;

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-40",
  headers: {
    authorization: " f67242ed-0af1-4508-b1a9-28f5e424436c",
    "Content-Type": "application/json",
  },
});

api
  .renderFirstScreen()
  .then((result) => {
    const [initialCards, userData] = result;
    currentUser = userData["_id"];
    myList.renderInitialItems(initialCards);
    userInfo.setUserInfo({ name: userData.name, profession: userData.about });
    userInfo.setUserPhoto(userData.avatar);
  })
  .catch((error) => console.log(`Ошибка.....: ${error}`));

const createCard = (data) => {
  const card = new Card({
    data,
    currentUser,
    cardTemplateSelector: ".card-template",
    handleCardClick: (name, link) => {
      popupImage.open(name, link);
    },
    handleDeleteCard: () => popupConfirm.open(card),
    handleLikeCard: () => {
      if (card.isLiked()) {
        api.removeLike(card["_cardId"]).then((data) => {
          card.sendLikes(data.likes);
          card.renderLike();
        });
      } else {
        api.addLike(card["_cardId"]).then((data) => {
          card.sendLikes(data.likes);
          card.renderLike();
        });
      }
    },
  });
  return card.renderCard();
};

const myList = new Section((data) => {
  const item = createCard(data);
  myList.addItem(item);
}, ".cards__list");

const popupImage = new PopupWithImage(".popup_type_image-view");
popupImage.setEventListeners();

const popupConfirm = new PopupWithSubmit({
  popupSelector: ".popup_type_submit",
  handleFormSubmit: (card) => {
    api.deleteCard(card["_cardId"]).then(() => {
      card.deleteCard();
    });
  },
});
popupConfirm.setEventListeners();

const popupCardAddClass = new PopupWithForm({
  popupSelector: ".popup_type_card-add",
  handleFormSubmit: (data) => {
    popupCardAddClass.setWaitingText();
    api.addNewCard(data["place-name"], data["image-url"]).then((card) => {
      const item = createCard(card);
      myList.addItem(item, "begin");
    });
  },
});
popupCardAddClass.setEventListeners();

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionSelector: ".profile__profession",
  photoSelector: ".profile__photo",
});

const popupProfileEditForm = new PopupWithForm({
  popupSelector: ".popup_type_profile-edit",
  handleFormSubmit: (data) => {
    popupProfileEditForm.setWaitingText();
    api.setNewUserInfo(data).then(() => userInfo.setUserInfo(data));
  },
});
popupProfileEditForm.setEventListeners();

const popupPhotoEdit = new PopupWithForm({
  popupSelector: ".popup_type_photo-edit",

  handleFormSubmit: (data) => {
    popupPhotoEdit.setWaitingText();
    userInfo.setUserPhoto(data["photo-url"]); //fianlly???
    api.setNewProfilePhoto(data["photo-url"]);
  },
});
popupPhotoEdit.setEventListeners();

popupCardAddOpenButtonElement.addEventListener("click", () => {
  cardAddValidator.resetValidation();
  popupCardAddClass.resetWaitingText();
  popupCardAddClass.open();
});

popupProfileEditOpenButtonElement.addEventListener("click", () => {
  const userInfoOnOpen = userInfo.getUserInfo();
  popupNameInputValue.value = userInfoOnOpen.name;
  popupProfessionInputValue.value = userInfoOnOpen.profession;
  profileEditValidator.resetValidation();
  popupProfileEditForm.resetWaitingText();
  popupProfileEditForm.open();
});

popupPhotoEditOpenHoverElement.addEventListener("click", () => {
  photoEditValidator.resetValidation();
  popupPhotoEdit.resetWaitingText();
  popupPhotoEdit.open();
});

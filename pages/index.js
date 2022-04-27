import {
  initialCards,
  validationSettings,
  popupCardAddOpenButtonElement,
  popupProfileEditOpenButtonElement,
  popupFormCardAdd,
  popupFormProfileEdit,
  popupNameInputValue,
  popupProfessionInputValue,
} from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";
import { Card } from "../components/Card.js";
import { Section } from "../components/Section.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { UserInfo } from "../components/UserInfo.js";

const profileEditValidator = new FormValidator(
  validationSettings,
  popupFormProfileEdit
);
const cardAddValidator = new FormValidator(
  validationSettings,
  popupFormCardAdd
);

profileEditValidator.enableValidation();
cardAddValidator.enableValidation();

const renderPopupImageView = (name, link) => {
  const popupImage = new PopupWithImage(
    {
      name,
      link,
    },
    ".popup_type_image-view"
  );
  popupImage.open();
};

const myList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const item = new Card(data, ".card-template", renderPopupImageView);
      const itemToAdd = item.renderCard();
      myList.addItem(itemToAdd);
    },
  },
  ".cards__list"
);

myList.renderInitialItems();

const popupCardAddClass = new PopupWithForm({
  popupSelector: ".popup_type_card-add",
  handleFormSubmit: (data) => {
    const cardItem = {};
    cardItem.name = data["place-name"];
    cardItem.link = data["image-url"];
    const item = new Card(cardItem, ".card-template", renderPopupImageView);
    const itemToAdd = item.renderCard();
    myList.addItem(itemToAdd, "begin");
  },
});

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  professionSelector: ".profile__profession",
});

const popupProfileEditForm = new PopupWithForm({
  popupSelector: ".popup_type_profile-edit",
  handleFormSubmit: () => {
    userInfo.setUserInfo({
      name: popupNameInputValue.value,
      profession: popupProfessionInputValue.value,
    });
  },
});

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

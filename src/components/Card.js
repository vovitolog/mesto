export class Card {
  constructor(
    data,
    currentUser,
    cardTemplateSelector,
    handleCardClick,
    handleDeleteCard
  ) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._likesCount = data.likes.length;
    this._ownerId = data.owner["_id"]; // не забыть про userId!!!!!!!!!!!!!1
    this._currentUser = currentUser;
    this._cardId = data["_id"];
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard; // переименовать в delete confirm?
  }

  _toggleLikeButton = () => {
    this._likeButton.classList.toggle("card__like_is-pressed");
  };

  returnCardId = () => {
    return  this._cardId;
  }
  // Делаем публичнм, чтобы удалять при нажатии на да
  deleteCard = () => {
    this._cardItem.remove();
    this._cardItem = null; //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
  };

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => this._handleDeleteCard(this._cardId));
    this._likeButton.addEventListener("click", this._toggleLikeButton);
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  //подумать над названием функции!!!!!!!!!!!
  _isCreatedByCurrentUser() {
    return this._ownerId === this._currentUser;
  }

  renderCard() {
    this._cardItem = this._cardTemplate.querySelector(".card").cloneNode(true);
    this._likeButton = this._cardItem.querySelector(".card__like");
    this._cardImage = this._cardItem.querySelector(".card__image");
    this._likesNumber = this._cardItem.querySelector(".card__likes-count");

    this._deleteButton = this._cardItem.querySelector(".card__button-delete");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._likesNumber.textContent = this._likesCount;
    this._cardItem.querySelector(".card__title").textContent = this._name;

    if (!this._isCreatedByCurrentUser()) {
      this._deleteButton.remove();
      //this._deleteButton = null; как удалить?
    }

    this._setEventListeners();
    // console.log(this._cardId);

    return this._cardItem;
  }
}

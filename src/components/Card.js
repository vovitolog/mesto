export class Card {
  constructor(
    data,
    currentUser,
    cardTemplateSelector,
    handleCardClick,
    handleDeleteCard,
    handleLikeCard
  ) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._ownerId = data.owner["_id"]; // не забыть про userId!!!!!!!!!!!!!1
    this._currentUser = currentUser;
    this._cardId = data["_id"];
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard; // переименовать в delete confirm?
    this._handeLikeClick = handleLikeCard;
    // проверить нет ли лшиних this!!!
  }

  displayLike() {
    if (this.isLiked(this._currentUser)) {
      this._likeButton.classList.add("card__like_is-pressed");
    } else {
      this._likeButton.classList.remove("card__like_is-pressed");
    }
  }

  renderLike() {
    this._likesNumber.textContent = this._likes.length;
    this.displayLike(); // передать this._currentUser???
  }

  sendLikes(likesToSend) {
    this._likes = likesToSend;
    console.log(this._likes);
  }

  deleteCard = () => {
    this._cardItem.remove();
    this._cardItem = null;
  };

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteCard()
    );

    this._likeButton.addEventListener("click", () => this._handeLikeClick());
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  isLiked() {
    return this._likes.some((like) => {
      return like._id === this._currentUser;
    });
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
    this._cardItem.querySelector(".card__title").textContent = this._name;

    if (!this._isCreatedByCurrentUser()) {
      this._deleteButton.remove();
      //this._deleteButton = null; как удалить или вообще не вешать туда листенеры!!!
    }
    this.renderLike();
    this._setEventListeners();

    return this._cardItem;
  }
}

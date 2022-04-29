export class Card {
  constructor(data, cardTemplateSelector, handleCardClick) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
  }

  _toggleLikeButton = () => {
    this._likeButton.classList.toggle("card__like_is-pressed");
  };

  _deleteCard = () => {
    this._cardItem.remove();
    this._cardItem = null;
  };

  _setEventListeners() {
    const deleteButton = this._cardItem.querySelector(".card__button-delete");

    deleteButton.addEventListener("click", this._deleteCard);
    this._likeButton.addEventListener("click", this._toggleLikeButton);
    this._cardImage.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
  }

  renderCard() {
    this._cardItem = this._cardTemplate.querySelector(".card").cloneNode(true);
    this._likeButton = this._cardItem.querySelector(".card__like");
    this._cardImage = this._cardItem.querySelector(".card__image");

    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._cardItem.querySelector(".card__title").textContent = this._name;

    this._setEventListeners();

    return this._cardItem;
  }
}

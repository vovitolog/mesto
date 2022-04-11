export class Card {
  constructor(data, cardTemplateSelector, imageCardClick) {
    this._cardTemplate = document.querySelector(cardTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._imageCardClick = imageCardClick;
  }

  _toggleLikeButton = () => {
    this._likeButton.classList.toggle("card__like_is-pressed");
  };

  _deleteCard = () => {
    this._cardItem.remove();
  };

  _setEventListeners() {
    const deleteButton = this._cardItem.querySelector(".card__button-delete");

    deleteButton.addEventListener("click", this._deleteCard);
    this._likeButton.addEventListener("click", this._toggleLikeButton);
    this._cardImage.addEventListener("click", () => this._imageCardClick(this._name, this._link));
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

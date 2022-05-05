export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-40/cards", {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }

  setNewUserInfo(data){

    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.profession
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  } 

  

  setNewPhrofilePhoto(newPhotoUrl) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        avatar: newPhotoUrl
      })
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}


export class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  getInitialCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-40/cards", {
      headers: {
        authorization: "f67242ed-0af1-4508-b1a9-28f5e424436c",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  }
}

/* fetch("https://mesto.nomoreparties.co/v1/cohort-40/cards", {
  headers: {
    authorization: "f67242ed-0af1-4508-b1a9-28f5e424436c",
  },
})
  .then((res) => res.json())
  .then((result) => {
    console.log(result);
  });
 */
export class UserInfo {
  constructor({ nameSelector, professionSelector, photoSelector }) {
    this._profileNameValue = document.querySelector(nameSelector);
    this._profileProfessionValue = document.querySelector(professionSelector);
    this._profilePhotoValue = document.querySelector(photoSelector);
  }

  getUserInfo() {
    return {
      name: this._profileNameValue.textContent,
      profession: this._profileProfessionValue.textContent,
    };
  }

  setUserInfo({ name, profession }) {
    this._profileNameValue.textContent = name;
    this._profileProfessionValue.textContent = profession;
  }

  setUserPhoto(data) {
    this._profilePhotoValue.src = data;
  }
}

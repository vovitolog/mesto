(()=>{"use strict";var e={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button-save",inactiveButtonClass:"popup__button-save_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},t=document.querySelector(".profile__button-add"),n=document.querySelector(".profile__button-edit"),r=document.querySelector(".profile__photo-wrapper"),o=document.querySelector(".popup_type_card-add").querySelector(".popup__form"),i=document.querySelector(".popup_type_profile-edit").querySelector(".popup__form"),u=document.querySelector(".popup_type_photo-edit").querySelector(".popup__form"),a=i.querySelector(".popup__input_type_name"),c=i.querySelector(".popup__input_type_profession");function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var l=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._form=n,this._settings=t,this._submitButton=this._form.querySelector(this._settings.submitButtonSelector),this._inputList=this._form.querySelectorAll(this._settings.inputSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e,t){var n=this._form.querySelector("#".concat(e.id,"-error"));n.textContent=t,n.classList.add(this._settings.errorClass),e.classList.add(this._settings.inputErrorClass)}},{key:"_hideError",value:function(e){var t=this._form.querySelector("#".concat(e.id,"-error"));t.textContent="",t.classList.remove(this._settings.errorClass),e.classList.remove(this._settings.inputErrorClass)}},{key:"_checkValidity",value:function(e){if(e.validity.valid)this._hideError(e);else{var t=e.validationMessage;this._showError(e,t)}}},{key:"_disableSubmitbutton",value:function(){this._submitButton.classList.add(this._settings.inactiveButtonClass),this._submitButton.setAttribute("disabled",!0)}},{key:"_enableSubmitbutton",value:function(){this._submitButton.classList.remove(this._settings.inactiveButtonClass),this._submitButton.removeAttribute("disabled")}},{key:"_toggleButtonState",value:function(){this._form.checkValidity()?this._enableSubmitbutton():this._disableSubmitbutton()}},{key:"_setInputEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setInputEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&s(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var f=function(){function e(t){var n,r,o=this,i=t.data,u=t.currentUser,a=t.cardTemplateSelector,c=t.handleCardClick,s=t.handleDeleteCard,l=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){o._cardItem.remove(),o._cardItem=null},(n="deleteCard")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._cardTemplate=document.querySelector(a).content,this._name=i.name,this._link=i.link,this._likes=i.likes,this._ownerId=i.owner._id,this._currentUser=u,this._cardId=i._id,this._handleCardClick=c,this._handleDeleteCard=s,this._handeLikeClick=l}var t,n;return t=e,(n=[{key:"displayLike",value:function(){this.isLiked(this._currentUser)?this._likeButton.classList.add("card__like_is-pressed"):this._likeButton.classList.remove("card__like_is-pressed")}},{key:"renderLike",value:function(){this._likesNumber.textContent=this._likes.length,this.displayLike()}},{key:"sendLikes",value:function(e){this._likes=e}},{key:"_setEventListeners",value:function(){var e=this;this._deleteButton.addEventListener("click",(function(){return e._handleDeleteCard()})),this._likeButton.addEventListener("click",(function(){return e._handeLikeClick()})),this._cardImage.addEventListener("click",(function(){return e._handleCardClick(e._name,e._link)}))}},{key:"isLiked",value:function(){var e=this;return this._likes.some((function(t){return t._id===e._currentUser}))}},{key:"_isCreatedByCurrentUser",value:function(){return this._ownerId===this._currentUser}},{key:"renderCard",value:function(){return this._cardItem=this._cardTemplate.querySelector(".card").cloneNode(!0),this._likeButton=this._cardItem.querySelector(".card__like"),this._cardImage=this._cardItem.querySelector(".card__image"),this._likesNumber=this._cardItem.querySelector(".card__likes-count"),this._deleteButton=this._cardItem.querySelector(".card__button-delete"),this._cardImage.src=this._link,this._cardImage.alt=this._name,this._cardItem.querySelector(".card__title").textContent=this._name,this._isCreatedByCurrentUser()||this._deleteButton.remove(),this.renderLike(),this._setEventListeners(),this._cardItem}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderInitialItems",value:function(e){var t=this;e.forEach((function(e){return t._renderer(e)}))}},{key:"addItem",value:function(e,t){"begin"===t?this._container.prepend(e):this._container.append(e)}}])&&h(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var y=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupName=document.querySelector(t),this._buttonClose=this._popupName.querySelector(".popup__button-close"),this._handleEscClose=this._handleEscClose.bind(this),this._closePopupOnOuterClick=this._closePopupOnOuterClick.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_closePopupOnOuterClick",value:function(e){e.target===this._popupName&&this.close()}},{key:"open",value:function(){this._popupName.classList.add("popup_is-opened"),document.addEventListener("keydown",this._handleEscClose),document.addEventListener("mousedown",this._closePopupOnOuterClick)}},{key:"close",value:function(){this._popupName.classList.remove("popup_is-opened"),document.removeEventListener("keydown",this._handleEscClose),document.removeEventListener("mousedown",this._closePopupOnOuterClick)}},{key:"setEventListeners",value:function(){var e=this;this._buttonClose.addEventListener("click",(function(){e.close()}))}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},b.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=S(e)););return e}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function S(e){return S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},S(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=S(r);if(o){var n=S(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImageViewPicture=t._popupName.querySelector(".popup__image"),t._popupImageViewDescription=t._popupName.querySelector(".popup__description"),t}return t=u,(n=[{key:"open",value:function(e,t){this._popupImageViewPicture.src=t,this._popupImageViewPicture.alt=e,this._popupImageViewDescription.textContent=e,b(S(u.prototype),"open",this).call(this)}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function P(e){return P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}function C(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=L(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function L(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=q(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function I(e,t){if(t&&("object"===P(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function q(e){return q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},q(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=q(r);if(o){var n=q(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return I(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popupName.querySelector(".popup__form"),t._inputList=t._popupForm.querySelectorAll(".popup__input"),t._popupSubmitButton=t._popupName.querySelector(".popup__button-save"),t}return t=u,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputList.forEach((function(t){return e[t.name]=t.value})),e}},{key:"setWaitingText",value:function(){this._popupSubmitButton.textContent="Сохранение..."}},{key:"resetWaitingText",value:function(){this._popupSubmitButton.textContent="Сохранить"}},{key:"setEventListeners",value:function(){var e=this;E(q(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){E(q(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&C(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=R(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},x.apply(this,arguments)}function R(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=F(e)););return e}function N(e,t){return N=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},N(e,t)}function V(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}var D=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&N(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=F(r);if(o){var n=F(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e){var t,n=e.popupSelector,r=e.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,n))._handleFormSubmit=r,t._popupForm=t._popupName.querySelector(".popup__form"),t._popupSubmitButton=t._popupName.querySelector(".popup__button-save"),t}return t=u,(n=[{key:"setEventListeners",value:function(){var e=this;x(F(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._cardId),e._popupSubmitButton.textContent}))}},{key:"open",value:function(e){this._cardId=e,x(F(u.prototype),"open",this).call(this)}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(y);function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var W=function(){function e(t){var n=t.nameSelector,r=t.professionSelector,o=t.photoSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileNameValue=document.querySelector(n),this._profileProfessionValue=document.querySelector(r),this._profilePhotoValue=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileNameValue.textContent,profession:this._profileProfessionValue.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.profession;this._profileNameValue.textContent=t,this._profileProfessionValue.textContent=n}},{key:"setUserPhoto",value:function(e){this._profilePhotoValue.src=e}}])&&A(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function J(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var H=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n;return t=e,(n=[{key:"_checkPromise",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/cards"),{headers:this._headers}).then((function(t){return e._checkPromise(t)}))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"/users/me"),{headers:this._headers}).then((function(t){return e._checkPromise(t)}))}},{key:"renderFirstScreen",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"setNewUserInfo",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.name,about:e.profession})}).then((function(e){return t._checkPromise(e)}))}},{key:"setNewProfilePhoto",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})}).then((function(e){return t._checkPromise(e)}))}},{key:"addNewCard",value:function(e,t){var n=this;return fetch("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})}).then((function(e){return n._checkPromise(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkPromise(e)}))}},{key:"addLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"PUT",headers:this._headers}).then((function(e){return t._checkPromise(e)}))}},{key:"removeLike",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:this._headers}).then((function(e){return t._checkPromise(e)}))}}])&&J(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var z=new l(e,i),$=new l(e,o),G=new l(e,u);z.enableValidation(),$.enableValidation(),G.enableValidation();var K=null,Q=new H({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40",headers:{authorization:" f67242ed-0af1-4508-b1a9-28f5e424436c","Content-Type":"application/json"}});Q.renderFirstScreen().then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return M(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?M(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K=i._id,Y.renderInitialItems(o),ne.setUserInfo({name:i.name,profession:i.about}),ne.setUserPhoto(i.avatar)})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}));var X=function(e){var t=new f({data:e,currentUser:K,cardTemplateSelector:".card-template",handleCardClick:function(e,t){Z.open(e,t)},handleDeleteCard:function(){return ee.open(t)},handleLikeCard:function(){t.isLiked()?Q.removeLike(t._cardId).then((function(e){t.sendLikes(e.likes),t.renderLike()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))})):Q.addLike(t._cardId).then((function(e){t.sendLikes(e.likes),t.renderLike()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}});return t.renderCard()},Y=new d((function(e){var t=X(e);Y.addItem(t)}),".cards__list"),Z=new O(".popup_type_image-view");Z.setEventListeners();var ee=new D({popupSelector:".popup_type_submit",handleFormSubmit:function(e){Q.deleteCard(e._cardId).then((function(){e.deleteCard(),ee.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}});ee.setEventListeners();var te=new T({popupSelector:".popup_type_card-add",handleFormSubmit:function(e){te.setWaitingText(),Q.addNewCard(e["place-name"],e["image-url"]).then((function(e){var t=X(e);Y.addItem(t,"begin"),te.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}});te.setEventListeners();var ne=new W({nameSelector:".profile__name",professionSelector:".profile__profession",photoSelector:".profile__photo"}),re=new T({popupSelector:".popup_type_profile-edit",handleFormSubmit:function(e){re.setWaitingText(),Q.setNewUserInfo(e).then((function(){ne.setUserInfo(e),re.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}});re.setEventListeners();var oe=new T({popupSelector:".popup_type_photo-edit",handleFormSubmit:function(e){oe.setWaitingText(),Q.setNewProfilePhoto(e["photo-url"]).then((function(){ne.setUserPhoto(e["photo-url"]),oe.close()})).catch((function(e){return console.log("Ошибка.....: ".concat(e))}))}});oe.setEventListeners(),t.addEventListener("click",(function(){$.resetValidation(),te.resetWaitingText(),te.open()})),n.addEventListener("click",(function(){var e=ne.getUserInfo();a.value=e.name,c.value=e.profession,z.resetValidation(),re.resetWaitingText(),re.open()})),r.addEventListener("click",(function(){G.resetValidation(),oe.resetWaitingText(),oe.open()}))})();
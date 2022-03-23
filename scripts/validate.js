const validationSettings = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-save',
  inactiveButtonClass: 'popup__button-save_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
}

//Показать ошибку
const showError = (formElement, inputElement, errorMessage, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
  inputElement.classList.add(inputErrorClass);
}

//Скрыть ошибку
const hideError = (formElement, inputElement, {inputErrorClass, errorClass}) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
  inputElement.classList.remove(inputErrorClass);
}

//Проверка валидности инпутов
const checkValidity = (formElement, inputElement) => {
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showError(formElement, inputElement, errorMessage, validationSettings);
  } else {
    hideError(formElement, inputElement, validationSettings);
  }
}

// Переключение состояния кнопки сохранить
const toggleButtonState = (inputList, submitButton, {inactiveButtonClass}) => {
  const hasInvalidInput = Array.from(inputList).some((inputElement) => {
    return !inputElement.validity.valid;
  });

  if (hasInvalidInput) {
    submitButton.classList.add(inactiveButtonClass);
    submitButton.setAttribute('disabled', true);
  } else {
    submitButton.classList.remove(inactiveButtonClass);
    submitButton.removeAttribute('disabled');
  }
}

// Навешивание слушателей на инпуты формы
const setInputEventListeners = (formElement, inputSelector, submitButtonSelector) => {
  const inputList = formElement.querySelectorAll(inputSelector);
  const submitButton = formElement.querySelector(submitButtonSelector);
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (evt) => {
      checkValidity(formElement, inputElement);
      toggleButtonState(inputList, submitButton, validationSettings);
    });
  });
};

// Включение валидации
const enableValidation = ({formSelector, inputSelector, submitButtonSelector}) => {
  const formsList  = document.querySelectorAll(formSelector);
  formsList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setInputEventListeners (formElement, inputSelector, submitButtonSelector);
  });
};

enableValidation (validationSettings);

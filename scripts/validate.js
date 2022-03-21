const showError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__input-error_active');
  inputElement.classList.add('popup__input_type_error');
  console.log(errorElement);
}

const hideError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  errorElement.textContent = '';
  errorElement.classList.remove('popup__input-error_active');
  console.log(errorElement);
}

const checkValidity = (formElement, inputElement) => {
  console.log(inputElement.validity);
  const isInputNotValid = !inputElement.validity.valid;
  if (isInputNotValid) {
    const errorMessage = inputElement.validationMessage;
    showError(formElement, inputElement, errorMessage);
  } else {
    hideError(formElement, inputElement);
  }
}


const setInputEventListeners = (formElement) => {
  const inputList = formElement.querySelectorAll('.popup__input');
  inputList.forEach(inputElement => {
    inputElement.addEventListener('input', (evt) => {
      console.log(evt.target.name, evt.target.value);
      checkValidity(formElement, inputElement);
    });
  });
};


const enableValidation = () => {
  const formsList  = document.querySelectorAll('.popup__form');
  formsList.forEach(formElement => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log('tetete');
    });
    setInputEventListeners (formElement);
  });
};

enableValidation ();

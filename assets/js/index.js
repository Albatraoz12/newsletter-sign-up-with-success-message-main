// Elements
const modalContainer = document.getElementById('modal-container');
const closeModalButton = document.querySelector('.btn');
const submitBtn = document.querySelector('.form-submit-btn');
const emailIn = document.getElementById('email');
const submittedEmailEl = document.querySelector('.submitted-email');

// Event listners
submitBtn.addEventListener('click', submitEmail);
closeModalButton.addEventListener('click', closeModal);

// Functions

// email validation
function validateEmail(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// submit email form
function submitEmail(e) {
  e.preventDefault();

  // valid email
  if (validateEmail(emailIn.value)) {
    submittedEmailEl.innerText = emailIn.value;
    openModal();
    emailIn.value = '';
    signUpFormEl.classList.remove('error');
  }
  // invalid email
  else {
    signUpFormEl.classList.add('error');
  }
}

function openModal() {
  modalContainer.classList.add('active');
}

function closeModal() {
  modalContainer.classList.remove('active');
}

// Elements
const modalContainer = document.getElementById('modal-container');
const closeModalButton = document.querySelector('.btn');
const openModalButton = document.querySelector('.form-submit-btn');

// Event listners
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// Functions
function openModal() {
  modalContainer.classList.add('active');
}

function closeModal() {
  modalContainer.classList.remove('active');
}

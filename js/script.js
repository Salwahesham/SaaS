// Show Modal on Button Click
const buttons = document.querySelectorAll('.enroll');
const modal = document.getElementById('registrationModal');
const closeModal = document.getElementById('closeModal');

buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    modal.style.display = 'flex';
  });
});

// Close Modal
closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

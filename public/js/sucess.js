const userEmailElement = document.querySelector('.user-email');
const userEmail = localStorage.getItem('userEmail');
userEmailElement.textContent = userEmail;

const dismissButton = document.querySelector('button');
dismissButton.addEventListener('click', () => {
  localStorage.removeItem('userEmail');
  window.location.href = './index.html';
});

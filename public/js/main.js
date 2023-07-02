const form = document.querySelector('form');
const input = document.querySelector('input');
const emailError = document.getElementById('email-error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email');
  const emailRegex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;

  if (!emailRegex.test(email)) {
    emailError.classList.remove('hidden');
    input.classList.remove(
      'border-grey',
      'focus:border-darkNavy',
      'focus:outline-darkNavy'
    );
    input.classList.add(
      'bg-vermellion',
      'bg-opacity-20',
      'text-vermellion',
      'border-vermellion',
      'focus:border-vermellion',
      'focus:outline-vermellion'
    );
    input.setAttribute('aria-invalid', 'true');
    input.focus();
  } else {
    emailError.classList.add('hidden');
    input.classList.remove(
      'bg-vermellion',
      'bg-opacity-20',
      'text-vermellion',
      'border-vermellion',
      'focus:border-vermellion',
      'focus:outline-none'
    );
    input.classList.add(
      'border-grey',
      'focus:border-darkNavy',
      'focus:outline-none'
    );
    input.setAttribute('aria-invalid', 'false');
    input.value = '';

    localStorage.setItem('userEmail', email);
    window.location.href = 'success.html';
  }
});

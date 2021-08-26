function login() {
  const email = document.querySelector('#email');
  const senha = document.querySelector('#senha');
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
const buttonLogin = document.querySelector('#login-btn');
buttonLogin.addEventListener('click', login);

function checkAgrement() {
  const checkboxAgrement = document.querySelector('#agreement');
  const btnSubmit = document.querySelector('#submit-btn');
  if (checkboxAgrement.classList.contains('selected')) {
    checkboxAgrement.classList.remove('selected');
    btnSubmit.setAttribute('disabled', 'disable');
  } else {
    checkboxAgrement.classList.add('selected');
    btnSubmit.removeAttribute('disabled');
  }
}
const checkboxAgrement = document.querySelector('#agreement');
checkboxAgrement.addEventListener('click', checkAgrement);

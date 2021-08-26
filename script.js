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

function countCaracter(event) {
  const campoNovo = document.querySelector('.caracter-count');
  const alvoEscrita = event.target;
  let result = null;
  let resultImpresso = '';
  result = 500 - alvoEscrita.value.length;
  resultImpresso = `${result} caracteres faltantes`;
  campoNovo.innerText = resultImpresso;
}

const textAreaField = document.querySelector('#coment');
textAreaField.addEventListener('input', countCaracter);

function printCabecalho() {
  const inputsElements = document.querySelectorAll('.clear-input');
  let answerHeader = '';
  for (let i = 0; i < inputsElements.length; i += 1) {
    answerHeader += `${inputsElements[i].name}: ${inputsElements[i].value}\n`;
  }
  return answerHeader;
}

function printCasa() {
  const labelCasa = document.querySelector('#house');
  let answerHouse = '';
  answerHouse += `${labelCasa.name}: ${labelCasa.value}\n`;
  return answerHouse;
}

function printRadioCheckbox() {
  const labelFamilyRatio = document.querySelector('input[name="family"]:checked').value;
  const labelLearnCheck = document.querySelectorAll('input[name="learn"]:checked');
  let answerRatioCheckbox = '';
  let subjectsDev = '';
  answerRatioCheckbox = `Família: ${labelFamilyRatio}\n`;
  for (let i = 0; i < labelLearnCheck.length; i += 1) {
    subjectsDev += `${labelLearnCheck[i].value} `;
  }
  answerRatioCheckbox += `Matérias: ${subjectsDev}\n`;
  return answerRatioCheckbox;
}

function printAvaliation() {
  const labelRateRatio = document.querySelector('input[name="rate"]:checked').value;
  let answerAvaliation = '';
  answerAvaliation = `Avaliação: ${labelRateRatio}\n`;
  answerAvaliation += `Observações: ${textAreaField.value}`;
  return answerAvaliation;
}

function printForm(event) {
  event.preventDefault();
  const respParagra = document.querySelector('.respostas');
  respParagra.innerText = printCabecalho() + printCasa() + printRadioCheckbox() + printAvaliation();
}

const btnSubmit = document.querySelector('#submit-btn');
btnSubmit.addEventListener('click', printForm);

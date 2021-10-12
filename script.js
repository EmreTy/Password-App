//Konstante deklarieren für die input-felder

const password = document.getElementById("passwd1");
const passwordConfirm = document.getElementById("passwd2");
const textLower = document.getElementById("lower");
const textUpper = document.getElementById("upper");
const textNumbers = document.getElementById("numbers");
const textLength = document.getElementById("tenCharac");
passwordConfirm.addEventListener("input", passwordCheck);
password.addEventListener("input", passwordCheck);

//Passwörter prüfen ob sie gleich sind
function passwordCheck() {
  const passwordText = password.value;
  const passwordTextCon = passwordConfirm.value;
  const textEqual = document.getElementById("equal");
  if (passwordText === passwordTextCon) {
    checkPasswordLowerCase();
    checkPasswordUpperCase();
    checkPasswordNumber();
    checkPasswordLength();
    textEqual.innerText = "✅";
  } else {
    textEqual.innerText = "❌";
    textLower.innerText = "❌";
    textUpper.innerText = "❌";
    textNumbers.innerText = "❌";
    textLength.innerText = "❌";
  }
}

//Prüfe ob ein Kleinbuchstabe im Text vorhanden ist
function checkPasswordLowerCase() {
  const textLower = document.getElementById("lower");
  if (/[a-z]/.test(password.value)) {
    textLower.innerText = "✅";
  } else {
    textLower.innerText = "❌";
  }
}

//Prüfen ob ein Großbuchstabe im Text vorhanden ist
function checkPasswordUpperCase() {
  if (/[A-Z]/.test(password.value)) {
    textUpper.innerText = "✅";
  } else {
    textUpper.innerText = "❌";
  }
}

//Prüfen ob eine Zahl im Text vorhanden ist
function checkPasswordNumber() {
  if (/[0-9]/.test(password.value)) {
    textNumbers.innerText = "✅";
  } else {
    textNumbers.innerText = "❌";
  }
}

//Prüfen ob mindestens 10 Zeichen im Text vorhanden sind
function checkPasswordLength() {
  if (password.value.length >= 10) {
    textLength.innerText = "✅";
  } else {
    textLength.innerText = "❌";
  }
}

function buttonShowHidden() {
  const btnShowHidden = document.getElementById("btn");
  var password = document.getElementById("passwd1");
  var passwordConfirm = document.getElementById("passwd2");
  if (password.type === "password" || passwordConfirm.type === "password") {
    password.type = "text";
    passwordConfirm.type = "text";
    btnShowHidden.innerText = "Hidden Password";
  } else {
    password.type = "password";
    passwordConfirm.type = "password";
    btnShowHidden.innerText = "Show Password";
  }
}

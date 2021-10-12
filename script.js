console.log("Password-check")


//Konstante deklarieren für die input-felder

const password = document.getElementById("passwd1");
const passwordConfirm = document.getElementById("passwd2");
const passwordText = password.value;
const passwordTextCon = passwordConfirm.value;


//Passwörter prüfen ob sie gleich sind

function passwordCheck(){
    const textEqual = document.getElementById("equal");
if (passwordText === passwordTextCon) {
    textEqual.innerText = "✅";
    }else {
        textEqual.innerText = "❌";
    }
}

passwordConfirm.addEventListener("input", passwordCheck);

//Prüfe ob ein Kleinbuchstabe im Text vorhanden ist
//!!!Bitte If condition fertigstellen!!!
function checkPasswordLowerCase(){
    const textLower = document.getElementById("lower");
    if (/[a-z]/){
        textLower.innerText ="✅";
    }else {
        textLower.innerText = "❌";
    }
}

//Prüfen ob ein Großbuchstabe im Text vorhanden ist
//!!!Bitte If condition fertigstellen!!!
function checkPasswordUpperCase(){
    const textUpper = document.getElementById("upper");
    if (/[A-Z]/){
        textUpper.innerText ="✅";
    }else {
        textUpper.innerText = "❌";
    }
}

//Prüfen ob eine Zahl im Text vorhanden ist
//!!!Bitte If condition fertigstellen!!!
function checkPasswordNumber(){
    const textNumbers = document.getElementById("number");
    if (/[0-9]/){
        textNumbers.innerText ="✅";
    }else {
        textNumbers.innerText = "❌";
    }
}

//Prüfen ob mindestens 10 Zeichen im Text vorhanden sind

function checkPasswordLength(){
    const textLength = document.getElementById("tenCharac");
    if (passwordConfirm.length>=10){
        textLength.innerText ="✅";
    }else {
        textLength.innerText = "❌";
    }
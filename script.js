console.log("Password-check")


//Konstante deklarieren für die input-felder

const password = document.getElementById("passwd1");
const passwordConfirm = document.getElementById("passwd2");
const passwordText = password.value;
const passwordTextCon = passwordConfirm.value;


//Passwort checken ob gleich(equal)

function passwordCheck(){
    const textEqual = document.getElementById("equal");
if (passwordText === passwordTextCon) {
    textEqual.innerText = "✅";
    }else {
        textEqual.innerText = "❌";
    }
}

passwordConfirm.addEventListener("input", passwordCheck);

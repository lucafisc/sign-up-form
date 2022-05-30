const passwordInput = document.getElementById("password");
const passwordInputConfirm = document.getElementById("password-confirm");
const msgPasswordMatch = document.querySelector("p.message-password-match");
const matchingIcon = document.querySelector("#match");
let password;
let passConfirm;

[passwordInput, passwordInputConfirm].forEach((item) => {
  item.addEventListener("keyup", () => {
    passConfirm = passwordInputConfirm.value;
    password = passwordInput.value;
    if (passConfirm === "" || passConfirm === undefined){
        msgPasswordMatch.textContent = "";
        matchingIcon.classList.remove("not-matching");
        matchingIcon.classList.remove("matching");
    }
    else if (passConfirm === password && /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(passConfirm)){
        msgPasswordMatch.textContent = "";
        matchingIcon.classList.remove("not-matching");
        matchingIcon.classList.add("matching");
    }
    else {
        if (passConfirm === password) {
            msgPasswordMatch.textContent = "";
        }
        else {
            matchingIcon.classList.remove("matching");
            matchingIcon.classList.add("not-matching");
            msgPasswordMatch.textContent = "";
            msgPasswordMatch.textContent = "the passwords do not match";
        }
        if (!(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(passConfirm))) {
            matchingIcon.classList.remove("matching");
            matchingIcon.classList.add("not-matching");
        }
    }

})})
       
    // matchingIcon.textContent = "";
      

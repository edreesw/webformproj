const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password"); 
const errorMessageDiv = document.querySelector(".password-match-error-message"); 


function passwordMatch(e) {
    console.log("hi");
    if(passwordInput.value === confirmPasswordInput.value) {
        errorMessageDiv.textContent = ""; 
    } else {
        errorMessageDiv.textContent = "Passwords do not match!"; 
    }
}

confirmPasswordInput.addEventListener("input", passwordMatch); 
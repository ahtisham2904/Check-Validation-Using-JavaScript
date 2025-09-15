function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return regex.test(email)
}


let goSignUpBtn = document.getElementById("goSignUpBtn")
goSignUpBtn.addEventListener("click", () => {
    let signUp = document.getElementById("Sign Up")
    let logIn = document.getElementById("Log In")
    logIn.style.display = "none"
    signUp.style.display = "flex"
});


let goLoginBtn = document.getElementById("LogIn")
goLoginBtn.addEventListener("click", () => {
    let login = document.getElementById("Log In")
    let signup = document.getElementById("Sign Up")
    signup.style.display = "none"
    login.style.display = "flex"
});


let loginForm = document.getElementById("loginForm")
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (isValidEmail(document.getElementById("loginEmail").value)) {
        if(localStorage.getItem('email')!==document.getElementById("loginEmail").value || localStorage.getItem('password')!==document.getElementById("loginPassword").value){
            alert("Email or password is wrong!")
            return
        }
        alert("Login successful!")
    } else {
        alert("Email should be valid.")
    }
})


document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    
    let email = document.getElementById("signupEmail").value
    let password = document.getElementById("signupPassword").value
    let rePassword = document.getElementById("signupRePassword").value

    if (!isValidEmail(email)) {
        alert("Email should be valid.")
        return
    }
    if(password.length<6){
        alert("Password should be at least 6 characters!")
        return
    }
    if (password !== rePassword) {
        alert("Passwords do not match.")
        return
    }
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    alert("Sign Up successful!")
})
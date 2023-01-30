function validateEmail() {
    let email = document.getElementById("email").value;
    console.log(email)
    let valid = email.includes("@")
    if(!valid){
        alert('invalid email');
    }
    return valid;
}
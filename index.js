function validateEmail() {
    let email = document.getElementById("email").value;
    console.log(email)
    let valid = email.includes("@")
    if(!valid){
        //alert('invalid email');
        document.getElementById("alert").innerHTML = "invalid email"
    }
    return valid;
}

function validateEmail1(email) {
    let valid = email.includes("@")
    if(!valid){
        //alert('invalid email');
        console.log('invalid email');
    }
    return valid;
}

validateEmail1("subu@")
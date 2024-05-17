function checkEmail(){
    let email = document.getElementById("email").value;
    let confirmemail = document.getElementById("confirm-email").value;
    console.log(email,confirmemail);
    let message = document.getElementById("message");

    if(email.length != 0) {
        if (email == confirmemail) {
            message.textContent ="Emails match!";
        }
        else { 
                message.textContent = "Emails do not match";
                }
        }

    }
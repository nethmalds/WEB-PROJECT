// Purpose: Validates the password and confirm password fields in the signup form.
document.addEventListener('DOMContentLoaded', function() {
    var passError = document.getElementById('passwordError');
    var pass = document.getElementById('password');
    var conPassError= document.getElementById('confirmPasswordError');
    var conPass = document.getElementById('confirmPassword');   
    let valid = true;

    pass.addEventListener('input', function() {
        if (pass.length < 8) {
            passError.textContent = "Password must be at least 8 characters long";
            valid = false;
        } else {
            passError.textContent = "";
        }
    });
    pass.addEventListener('input', function() {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!regex.test(pass)) {
            passError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
            valid = false;
        } else {
            passError.textContent = "";
        }
    });
    pass.addEventListener('input', function() {
        if(pass.length > 20)
        {
            passError.textContent = "Password must be less than 20 characters long";
            valid = false;
        }
        else {
            passError.textContent = "";
        }
    });
    conPass.addEventListener('input', function() {
        if (conPass.value != pass.value) {
            conPassError.textContent = "Passwords do not match";
            valid = false;
        }
        else {
            conPassError.textContent = "";
        }
    });
    document.getElementById('signupBtn').addEventListener('submit', function(event) {
        if (!valid) {
            event.preventDefault();
        }
    });

});
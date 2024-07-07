// Purpose: Validates the password and confirm password fields in the signup form.
function saveDataToMongo() {
    let FName = document.getElementById("Fname").value;
    let LName = document.getElementById("Lname").value;
    let PhoneNo = document.getElementById("phone").value;
    let Address = document.getElementById("Addr").value;
    let Email = document.getElementById("email").value;
    let Password = document.getElementById("password").value;
    // List the data in the variables
    // console.log(FName);
    // console.log(LName);
    // console.log(PhoneNo);
    // console.log(Address);
    // alert("Debug Alert");
    $.ajax({
        type: "POST",
        url: "assets/js/src/userSignupProcess.php",
        data: {
            FName: FName,
            LName: LName,
            PhoneNo: PhoneNo,
            Address: Address,
            Email: Email,
            Password: Password
        },
        success: function(response) {
            console.log("Signup Succeeded: " + response);
            alert("Signup Successful !, Thank you for using our services...");
            window.location.href = "userLogin.html";
        },
        error: function(response) {
            console.log("Signup Failed: " + response);
            alert("Signup Failed !, Please try again...");
            window.location.href = "userSignup.html";
        }
    })
}
document.addEventListener('DOMContentLoaded', function() {
    var passError = document.getElementById('passwordError');
    var pass = document.getElementById('password');
    var conPassError= document.getElementById('confirmPasswordError');
    var conPass = document.getElementById('confirmPassword');  

    pass.addEventListener('input', function() {
        if (pass.value.length < 8) {
            passError.textContent = "Password must be at least 8 characters long";
        } else if (pass.value.length > 20) {
            passError.textContent = "Password must be less than 20 characters long";
        } else {
            const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!regex.test(pass.value)) {
                passError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character";
            } else {
                passError.textContent = "";
            }
        }
    });

    conPass.addEventListener('input', function() {
        if (conPass.value !== pass.value) {
            conPassError.textContent = "Passwords do not match";
        } else {
            conPassError.textContent = "";
        }
    });

    document.getElementById('signupForm').addEventListener('submit', function(event) {
        var valid = passError.textContent === "" && conPassError.textContent === "";
        if (!valid) {
            event.preventDefault();
            alert("Invalid Input, Please check the fields and try again.");
        } else {
            saveDataToMongo();
            event.preventDefault();
        }
    });
});


    //     // Send an Ajax to the server to check if the email is already in use
    //     // var email = document.getElementById('email').value;
    //     // console.log(email);
    //     alert("Debug");
    //     $.ajax({})
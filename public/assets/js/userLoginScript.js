
var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
$.ajax({
    type: "GET",
    url: "assets/js/src/loginProcess.php",
    data: {
        email: email,
        password: password
    },
});
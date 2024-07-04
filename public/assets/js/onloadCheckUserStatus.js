$(document).ready(function() {
    checkUserStatus();
});

function checkUserStatus() {
    $.ajax({
        url: "assets/js/src/session.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
            var userEmail = response.UserEmail;
            var userID = response.UserID;
            if (userEmail === "" || userID === "") {
                alert("Debug: Not Logged In");
                $("#UserAcc").text("CUSTOMER ACCOUNT");
                if (window.location.pathname.includes("Home.html")) {
                    window.location.href = "LandingPage.html";
                }
            } else {
                $("#UserAcc").text("YOUR INTERFACE");
                // Redirect to Home.html if the user in LandingPage.html
                if (window.location.pathname.includes("userLogin.html")) {
                    window.location.href = "Home.html";
                    // alert("Welcome Back, " + userEmail + " !");
                } else if (window.location.pathname.includes("Home.html")) {
                    alert("You are automatically logged in, Welcome Back "+ userEmail + " !")
                }
            }
        }
    });
}
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
                if (window.location.pathname.includes("payment.html") || window.location.pathname.includes("user_account_tab.html") || window.location.pathname.includes("user_orders.html") ){
                    alert("Not Logged in, Auto Redirect...");
                    window.location.href = "LandingPage.html";
                }
                // if (window.location.pathname.includes("Home.html")) {
                //     window.location.href = "LandingPage.html";
                // }
                document.getElementById("setUserStat").value = "";
            } else {
                $("#UserAcc").text("YOUR INTERFACE");
                // Redirect to Home.html if the user in LandingPage.html
                if (window.location.pathname.includes("userLogin.html")) {
                    window.location.href = "Home.html";
                    // alert("Welcome Back, " + userEmail + " !");
                } else if (window.location.pathname.includes("Home.html")) {
                    alert("Welcome Back "+ userEmail);
                    $("#UserAcc").text("YOUR PROFILE");
                    document.getElementById("setUserStat").value = userID;
                } else {
                    document.getElementById("setUserStat").value = userID;
                }
            }
        }
    });
}

function destroySession() {
    $.ajax({
        url: "assets/js/src/destroySession.php",
        type: "POST",
        data: {destroySession: true},
        success: function(response) {
            alert("You Will be logged out from the Website...");
            window.location.href = "LandingPage.html";
        }
    });
}


function deleteAccount() {
    var userID = document.getElementById("setUserStat").value;
    $.ajax({
        url: "assets/js/src/deleteAccount.php",
        type: "POST",
        data: {userID: userID},
        success: function(response) {
            alert("Your Account has been Deleted. USER:"+userID+" will be logged out from the Website...");
            window.location.href = "LandingPage.html";
        }
    });
}
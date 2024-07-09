$(document).ready(function() {
    checkPharmaStatus();
});

function checkPharmaStatus(){
    $.ajax({
        url: "assets/js/src/pharmacySession.php",
        type: "GET",
        dataType: "json",
        success: function(response) {
            var pharmacyEmail = response.PharmacyEmail;
            var pharmacyID = response.PharmacyID;
            if (pharmacyEmail === "" || pharmacyID === "") {
                $("#pharmaAcc").text("SELLER ACCOUNT");
                // if (window.location.pathname.includes("Home.html")) {
                //     window.location.href = "LandingPage.html";
                // }
                document.getElementById("pharmaStatus").value = "";
            } else {
                $("#pharmaAcc").text("SELLER DASHBOARD");
                // Redirect to Home.html if the user in LandingPage.html
                if (window.location.pathname.includes("pharmacyLogin.html")) {
                    window.location.href = "Home.html";
                    // alert("Welcome Back, " + userEmail + " !");
                } else if (window.location.pathname.includes("Home.html")) {
                    alert("Welcome Back "+ pharmacyEmail + " !");
                    $("#pharmaAcc").text("SELLER DASHBOARD");
                    document.getElementById("pharmaStatus").value = pharmacyID;
                } else {
                    document.getElementById("pharmaStatus").value = pharmacyID;
                }
            }
        }
    });
}
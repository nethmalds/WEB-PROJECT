function uploadDataToMongo() {
    let UserName = document.getElementById("retriveName").value;
    let cardNumber = document.getElementById("cardNumber").value;
    let cardHolder = document.getElementById("cardHolder").value;
    let expirationDate = document.getElementById("expDT").value;
    let securityCode = document.getElementById("cvv").value;
    let zipCode = document.getElementById("zipCode").value;
    let city = document.getElementById("city").value;
    let state = document.getElementById("state").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let amount = document.getElementById("itemAmount").value;
    let price = document.getElementById("paymentAmount").value;

    $.ajax({
        type: "POST",
        url: "src/paymentProcess.php",
        data: {
            UserName: UserName,
            cardNumber: cardNumber,
            cardHolder: cardHolder,
            expirationDate: expirationDate,
            securityCode: securityCode,
            zipCode: zipCode,
            city: city,
            state: state,
            address: address,
            email: email,
            phone: phone,
            Price: price,
            Amount: amount
        },
        success: function(response) {
            console.log("Payment Succeeded: " + response);
            alert("Payment Succeeded, Thank you!");
            clearCart();
            // window.location.href = 'index.html'; // Redirect user after successful payment
        },
        error: function(xhr, status, error) {
            console.error("An Error Occurred: " + error);
            alert("Fatal Error! Please try again later.");
        }
    });
    

    alert("Ajax End Reached");
}

function validateInputData() {
    let cardNumber = document.getElementById("cardNumber").value;
    let cardHolder = document.getElementById("cardHolder").value;
    let expirationDate = document.getElementById("expDT").value;
    let securityCode = document.getElementById("cvv").value;

    let cardNumberPattern = /^[0-9]{16}$/;
    let cardHolderPattern = /^[a-zA-Z\s]{1,}$/;
    let expirationDatePattern = /^[0-9]{2}\/[0-9]{2}$/;
    let securityCodePattern = /^[0-9]{3}$/;

    if (!cardNumber.match(cardNumberPattern)) {
        alert("Invalid card number");
        return;
    }

    if (!cardHolder.match(cardHolderPattern)) {
        alert("Invalid card holder");
        return;
    }

    if (!expirationDate.match(expirationDatePattern)) {
        alert("Invalid expiration date");
        return;
    }

    if (!securityCode.match(securityCodePattern)) {
        alert("Invalid security code");
        return;
    }

    uploadDataToMongo();
    alert("Payment successful");
    // document.getElementById("paymentForm").reset();
}

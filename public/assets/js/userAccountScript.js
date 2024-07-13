document.getElementById('profileImage').addEventListener('click', function() {
    document.getElementById('imgInput').click();
});

document.getElementById('imgInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            document.getElementById('profileImage').src = e.target.result;

            // Create FormData object to send the image file
            const formData = new FormData();
            formData.append('image', file);

            // Send AJAX request to PHP file
            $.ajax({
                url: 'assets/js/src/editUser.php', // Update the URL to your PHP file
                type: 'POST',
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    const result = JSON.parse(response);
                    if (result.error) {
                        console.log('Error uploading image:', result.error);
                    } else {
                        console.log('Image uploaded successfully');
                    }
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.log('Error uploading image:', textStatus, errorThrown);
                }
            });
        }
        reader.readAsDataURL(file);
    }
});



document.getElementById('editbtn').addEventListener('click', function() {
    var popupForm = document.getElementById('popupForm');
    var close = document.getElementById('closeButton');
    popupForm.style.display = 'block';
    close.onclick = function() {
        popupForm.style.display = 'none';
    }
});
function sendInfoupdate(){
    var Fname = document.getElementById("firstName").value;
    var Lname = document.getElementById("lastName").value;
    var Bdate = document.getElementById("birthDate").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;
    $.ajax({
        url: "assets/js/src/editUser.php",
        type: "POST",
        data: {
            Fname:Fname,
            Lname:Lname,
            Bdate: Bdate,
            contact: contact,
            address: address
        },
        success: function(response) {
            alert("User Information Updated Successfully...");
            window.location.href = "user_account_tab.html";
        }
        
    });
}
// document.getElementById('editbtn').addEventListener('click', function() {
//     var popupForm = document.getElementById('popupForm');
//     var close = document.getElementById('closeButton');
//     popupForm.style.display = 'block';
//     close.onclick = function() {
//         popupForm.style.display = 'none';
//     }
// });

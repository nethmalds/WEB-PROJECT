$(document).ready(function() {
    $.ajax({
        url: 'assets/js/src/userDetails.php',
        type: 'GET',
        success: function(data) {
            const userDetails = JSON.parse(data);
            if (!userDetails.error) {
                const fullName = userDetails.UserFirstName + ' ' + userDetails.UserLastName;
                $('#tbName').text(fullName);
                $('#tbContact').text(userDetails.UserPhoneNo);
                $('#tbDOB').text(userDetails.UserDOB);
                $('#tbAddress').text(userDetails.UserAddress);
                $('#email').text(userDetails.UserEmail);
                $('#passw').text(userDetails.UserPassword);

                if (userDetails.UserProfileImage) {
                    $('#profileImage').attr('src', 'data:image/jpeg;base64,' + userDetails.UserProfileImage);
                } else {
                    $('#profileImage').attr('src', 'path/to/default/image.jpg'); // Set a default image if no profile image is available
                }

            } else {
                $('#tbName').text('Error loading data');
                $('#tbContact').text('Error loading data');
            }
        },
        error: function() {
            $('#tbName').text('Error loading data');
            $('#tbContact').text('Error loading data');
        }
    });
});
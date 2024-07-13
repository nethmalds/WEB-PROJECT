$('#addItem').on('click', function(event) {
    event.preventDefault();

    var productName = $('#Pname').val();
    var imageLink = $('#imgLink').val();
    var dose = $('#dose').val();
    var price = $('#price').val();
    var description = $('#AddDe').val();

    $.ajax({
        url: 'assets/js/src/addProduct.php',
        type: 'POST',
        data: {
            productName: productName,
            imageLink: imageLink,
            dose: dose,
            price: price,
            description: description
        },
        success: function(response) {
            var jsonResponse = JSON.parse(response);
            if (jsonResponse.status === 'success') {
                alert('Product added successfully!');
                // Optionally, clear the form or redirect the user
                $('form')[0].reset();
            } else {
                console.error('Error adding product:', jsonResponse.message);
                alert('Failed to add product: ' + jsonResponse.message);
            }
        },
        error: function(xhr, status, error) {
            console.error('Error adding product:', error);
            alert('Failed to add product');
        }
    });
});
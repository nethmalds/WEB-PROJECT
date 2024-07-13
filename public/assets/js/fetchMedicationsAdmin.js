/*$(document).ready(function() {
    $.ajax({
        url: 'assets/js/src/fetchMedications.php',
        method: 'GET',
        success: function(data) { // Clear existing content
            let card = '';
            data.forEach(medication => {
                    card += `<div class="col-6">
                    <div class="card">
                        <img src="${medication.imageLink}" alt="${medication.medication}" class="img-fluid" id="productImage">
                        <div class="card-body">
                            <h5 class="card-title">${medication.medication} ${medication.doseData}</h5>
                            <p class="card-text">${medication.details}</p>
                            <p class="card-text">Price: Rs.${Math.floor(Math.random() * 500) + 1000}.00</p>
                            <p class="card-text">Quantity: 1</p>
                            <button class="btn btn-danger" id="removeBtn">Remove</button>
                        </div>
                    </div>
                </div>`;
            });
            $('#medications').html(card);
        }
    });
});*/

$(document).ready(function() {
    $.ajax({
        url: 'assets/js/src/fetchMedicationData.php',
        method: 'GET',
        success: function(data) {
            let cardsHtml = '';
            data.forEach(medication => {
                cardsHtml += `
                    <div class="col-6">
                        <div class="card" id="productCard">
                            <div class="card-body">
                                <div class ="row">
                                    <div class="col-5">
                                        <img src="${medication.imageLink}" class="card-img-top" id="productImage" alt="${medication.medication}">
                                    </div>
                                    <div class="col-7">
                                        <h5 class="card-title">${medication.medication} ${medication.doseData}</h5>
                                        <p class="card-text">${medication.details}</p>
                                        <p class="card-text">Price: Rs.${Math.floor(Math.random() * 500) + 1000}.00</p>
                                        <p class="card-text">Quantity: 1</p>
                                        <button class="btn mt-3 btn-sm btn-danger" id="removeBtn">Remove</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            $('#medications').html(cardsHtml);
        }           
    });
});

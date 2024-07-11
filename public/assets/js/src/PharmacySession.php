<?php
session_start();

$PharmaResponse = array(
    'PharmacyEmail' => isset($_SESSION['PharmacyEmail']) ? $_SESSION['PharmacyEmail'] : '',
    'PharmacyID' => isset($_SESSION['_id']) ? $_SESSION['_id'] : ''
);
echo json_encode($PharmaResponse);
?>
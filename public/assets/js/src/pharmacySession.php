<?php
session_start();

$response = array(
    'PharmacyEmail' => isset($_SESSION['PharmacyEmail']) ? $_SESSION['PharmacyEmail'] : '',
    'PharmacyID' => isset($_SESSION['_id']) ? $_SESSION['_id'] : ''
);
echo json_encode($response);
?>
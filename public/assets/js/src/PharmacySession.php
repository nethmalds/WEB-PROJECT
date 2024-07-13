<?php
session_name('session2');
session_start();

$PharmacyResponse = array(
    'PharmacyEmail' => isset($_SESSION['PharmacyEmail']) ? $_SESSION['PharmacyEmail'] : '',
    'PharmacyID' => isset($_SESSION['_id']) ? $_SESSION['_id'] : '',
    'PharmacyName' => isset($_SESSION['PharmacyName']) ? $_SESSION['PharmacyName'] : ''
);
echo json_encode($PharmacyResponse);
?>
<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    echo "Method Not Allowed";
    exit;
}

// $currentDateTime = date('Y-m-d H:i:s');

require '../../../../vendor/autoload.php';

$mongoUri = "mongodb://localhost:27017";
$dbName = "MEDIX";
$collectionName = "ContactUsMassage";

try {
    $mongoClient = new MongoDB\Client($mongoUri);
    $db = $mongoClient->$dbName;
    $collection = $db->$collectionName;

    $document = array(
        'Name' => $_POST['name'],
        'Email' => $_POST['email'],
        'Message' => $_POST['message']
    );

    $collection->insertOne($document);
    echo "Massage Sent Successfully.";
} catch (MongoDB\Driver\Exception\Exception $e) {
    echo "Error: " . $e->getMessage();
}
?>
<?php
session_name('session1');
session_start();
require '../../../../vendor/autoload.php';

$mongoClient = new MongoDB\Client("mongodb://localhost:27017");
$collection = $mongoClient->MEDIX->users;

$response = [];

// Check if session is set
if (!isset($_SESSION['_id'])) {
    echo json_encode(['status' => 'error', 'message' => 'Session ID not set']);
    exit;
}

$userId = new MongoDB\BSON\ObjectId($_SESSION['_id']);

// Update user text data
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $updateData = [];
    if (isset($_POST['FName'])) $updateData['UserFirstName'] = $_POST['FName'];
    if (isset($_POST['LName'])) $updateData['UserLastName'] = $_POST['LName'];
    if (isset($_POST['Bdate'])) $updateData['UserDOB'] = $_POST['Bdate'];
    if (isset($_POST['phone'])) $updateData['UserPhoneNo'] = $_POST['phone'];
    if (isset($_POST['address'])) $updateData['UserAddress'] = $_POST['address'];

    if (!empty($updateData)) {
        $result = $collection->updateOne(
            ['_id' => $userId],
            ['$set' => $updateData]
        );

        if ($result->getMatchedCount() === 1) {
            $response['textDataStatus'] = 'success';
        } else {
            $response['textDataStatus'] = 'error';
            $response['message'] = 'User not found';
        }
    }
}

// Handle image upload
if (isset($_FILES['image'])) {
    $image = $_FILES['image'];
    $imageData = file_get_contents($image['tmp_name']);
    $base64Image = base64_encode($imageData);

    $updateResult = $collection->updateOne(
        ['_id' => $userId],
        ['$set' => ['UserProfileImage' => $base64Image]]
    );

    if ($updateResult->getModifiedCount() === 1) {
        $response['imageUploadStatus'] = 'success';
    } else {
        $response['imageUploadStatus'] = 'error';
        $response['message'] = 'Failed to update image';
    }
}

echo json_encode($response);
?>
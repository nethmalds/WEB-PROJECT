<?php
session_name('session1');
session_start();
require '../../../../vendor/autoload.php';

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->MEDIX->users;

$userId = new MongoDB\BSON\ObjectId($_SESSION['_id']);

$user = $collection->findOne(['_id' => $userId]);

if ($user) {
    echo json_encode([
        'UserFirstName' => $user['UserFirstName'],
        'UserLastName' => $user['UserLastName'],
        'UserDOB' => $user['UserDOB'],
        'UserAddress' => $user['UserAddress'],
        'UserPhoneNo' => $user['UserPhoneNo'],
        'UserEmail' => $user['UserEmail'],
        'UserPassword' => $user['UserPassword'],
        'UserProfileImage' => isset($user['UserProfileImage']) ? $user['UserProfileImage'] : null
    ]);
} else {
    echo json_encode(['error' => 'User not found']);
}
?>

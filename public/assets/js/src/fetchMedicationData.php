<?php
require '../../../../vendor/autoload.php';

$client = new MongoDB\Client("mongodb://localhost:27017");
$collection = $client->MEDIX->Medications;

$cursor = $collection->aggregate([ ['$sample' => ['size' => 4]] ]);
$medications = iterator_to_array($cursor);

header('Content-Type: application/json');
echo json_encode($medications);
?>

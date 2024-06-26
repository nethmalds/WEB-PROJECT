<?php
// Define the path to the public directory
$publicDir = __DIR__;

// Get the requested URI
$uri = urldecode(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));

// Construct the full file path
$file = $publicDir . $uri;

// If the request is for a file that exists in the public directory, serve it
if ($uri !== '/' && file_exists($file)) {
    return false;
}

// Otherwise, serve the LandingPage.html file from the public directory
require $publicDir . '/LandingPage.html';


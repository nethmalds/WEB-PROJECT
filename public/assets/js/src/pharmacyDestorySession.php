<?php
session_name('session2');
session_start();
$_SESSION = array();
session_destroy();
echo "Session destroyed successfully!";
?>
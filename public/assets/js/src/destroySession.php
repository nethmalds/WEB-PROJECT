<?php
session_name('session1');
session_start();
$_SESSION = array();
session_destroy();
echo "Session destroyed successfully!";
?>
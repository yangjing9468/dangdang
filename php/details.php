<?php  
	
	include "conn.php";

	$sid=$_GET["sid"];

	$result=$conn->query("select * from suibian where id=$sid");
	
	echo json_encode($result->fetch_assoc());
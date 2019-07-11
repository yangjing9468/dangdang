<?php  
	
	include "conn.php";

	$result=$conn->query("select * from zbtj");
	

	echo json_encode($result->fetch_assoc());
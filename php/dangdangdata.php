<?php  
	
	include "conn.php";

	$result=$conn->query("select * from suibian");
	
	$wronglist=array();
	for ($i=0; $i < $result->num_rows; $i++) { 
		$wronglist[$i]=$result->fetch_assoc();
	}

	echo json_encode($wronglist);



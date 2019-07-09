<?php
	require "conn.php";//引入数据库连接的文件
	
	if(isset($_POST['name'])){
		$username=$_POST['name'];
		// echo $username;
	}else{
		exit('非法操作');
	}
	

	$result=$conn->query("select * from login where username='$username'");
	
    if($result->fetch_assoc()){
        echo true;
    }else{
        echo false;
    }
	
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加的数据库.
	// if(isset($_POST['submit']) && $_POST['submit']=="注册"){
	// 	$username=$_POST['name'];
	// 	$pass=md5($_POST['txt_password']);
	
	// 	$query="insert user(id,username,password,date) values(null,'$username','$pass',NOW())";
	// 	mysql_query($query);
	// 	header('location:http://10.31.158.62/dangdang/dd/src/css/registor/login.css');//页面的跳转
	// }
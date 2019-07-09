<?php

include('conn.php');

$name = $_POST['name'];
$pass = $_POST['password'];
$email = $_POST['email'];
// print_r ($name);
$mysql = "select * from users where username='$name'";

$result = $conn->query($mysql);

if($result->num_rows>0){
   die('用户名已存在');
}

$insMyspl = "insert users values(null,'$name','$pass','$email')";

$res = $conn->query($insMyspl);

if($res){
    echo'<script>alert("注册成功");location.href="login.html";</script>';
}

$conn->close();

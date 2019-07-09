! function($) {
    const username = $('#txt_username');
    // console.log(username);
    const password = $('#txt_password');
    // console.log(password);
    const repassword = $('#txt_repassword');
    // console.log(repassword);
    const txt_vcode = $('#txt_vcode');

    const span1 = $('#J_tipUsername');
    const span2 = $('#J_tipPassword');
    const span3 = $('#J_tipSurePassword');
    const span4 = $('#J_tipVcode');

    // console.log(span.html("22"));
    const submit = $('#J_submitRegister');
    // console.log(submit);
    let usernameflag = true;

    //1.得到焦点显示span的内容
    username.focus(function() {
        span1.html("手机号可用于登录、找回密码、接收订单通知等服务");
        // $("#select_emaildomain").hide();
    });

    password.focus(function() {
        span2.html("密码为6-20个字符，可由英文、数字及符号组成");

    });
    repassword.focus(function() {
        span3.html("请再次输入密码");

    });

    txt_vcode.focus(function() {
        span4.html("请填写图片中的字符，不区分大小写");

    });
    //2.失去焦点将用户名传给后端。
    const phpurl = 'http://10.31.158.62/dangdang/dd/php/';

    username.blur(function() {
        $.ajax({
                type: 'post',
                url: phpurl + 'registor.php',
                data: {
                    name: username.val()
                }
            })
            .done(function(d) {
                if (!d) { //没有重复
                    span1.html('√');
                    span1.css('color', 'green');
                    usernameflag = true;
                } else {
                    span1.html('该用户名已经存在');
                    span1.css('color', 'red');
                    usernameflag = false;
                }
            });
    })

    //3.点击提交注册按钮将数据提交到数据库

    submit.on('click', function() {
        if (!usernameflag) {
            username.focus();
            return false;
        }
    })



}(jQuery);
! function($) {
    var username = $('#txt_username');
    // console.log(username);
    var password = $('#txt_password');
    // console.log(password);
    var repassword = $('#txt_repassword');
    // console.log(repassword);
    var txt_vcode = $('#txt_vcode');


    var vcodeReg = /^[a-zA-Z0-9]*$/;

    var span1 = $('#J_tipUsername');
    var span2 = $('#J_tipPassword');
    var span3 = $('#J_tipSurePassword');
    var span4 = $('#J_tipVcode');

    // console.log(span.html("22"));
    var submit = $('#J_submitRegister');
    // console.log(submit);
    var usernameflag = true;

    //1.得到焦点显示span的内容
    username.focus(function() {
        span1.html("手机号可用于登录、找回密码、接收订单通知等服务");
        // $("#select_emaildomain").hide();
    });

    password.focus(function() {
        span2.html("密码为6-20个字符，可由英文、数字及符号组成");
        spnPwdStrong1.hide();
        spnPwdStrong2.hide();
        spnPwdStrong3.hide();
        spn_password_ok.hide();
        J_tipPassword.html("");

    });
    repassword.focus(function() {
        span3.html("请再次输入密码");

    });

    txt_vcode.focus(function() {
        span4.html("请填写图片中的字符，不区分大小写");

    });

    //2.失去焦点将用户名传给后端。
    var phpurl = 'http://10.31.158.62/dangdang/dd/php/';

    var mobileReg = /^1[3,4,5,6,7,8,9][0-9]{9}$/;

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
                    if (!username.val() == "") {
                        if (mobileReg.test(username.val())) {
                            span1.html('√');
                            span1.css('color', 'green');
                            usernameflag = true;
                        } else {
                            span1.html('该用户名格式不正确');
                            span1.css('color', 'red');
                            usernameflag = false;
                        }
                    } else {
                        span1.html('');
                    }

                } else {
                    span1.html('该用户名已经存在');
                    span1.css('color', 'red');
                    usernameflag = false;
                }
            });
    });

    var spnPwdStrong1 = $("#spnPwdStrong1");
    var spnPwdStrong2 = $("#spnPwdStrong2");
    var spnPwdStrong3 = $("#spnPwdStrong3");
    var J_tipPassword = $("#J_tipPassword");
    var spn_password_ok = $("#spn_password_ok");



    var reg5 = /[a-zA-Z]+/; //大小写字母
    var reg6 = /([a-z!@#$%^&*()?<>{}]){6,20}/; //字母特殊字符
    var reg7 = /\w{6,20}/; //字母数字
    var reg8 = /(!@#$%^&*()_?<>{}\d){6,20}/; //特殊字符数字

    var passwordflag = true;

    //3.失去焦点对密码与确认密码进行判断
    password.blur(function() {
        if (password.val().length >= 6 && password.val().length <= 20) {
            var reg1 = /[!@#$%^&*()_?<>{}]/; //特殊字符
            var reg2 = /[0-9]+/; //数字
            var reg3 = /[a-z]+/; //小写字母
            var reg4 = /[A-Z]+/; //大写字母
            var num = 0;

            if (reg1.test(password.val())) {
                num++;
            }

            if (reg2.test(password.val())) {
                num++;
            }

            if (reg3.test(password.val())) {
                num++;
            }

            if (reg4.test(password.val())) {
                num++;
            }
            switch (num) {
                case 1:
                    spnPwdStrong1.show().siblings().hide();
                    spn_password_ok.addClass("icon_yes").show().removeClass("icon_wrong");
                    span2.html("");
                    passwordflag = false;
                    break;
                case 2:
                    spnPwdStrong2.show().siblings().hide();
                    spn_password_ok.addClass("icon_yes").show().removeClass("icon_wrong");
                    span2.html("");
                    passwordflag = true;
                    break;
                case 3:
                case 4:
                    spnPwdStrong3.show().siblings().hide();
                    spn_password_ok.addClass("icon_yes").show().removeClass("icon_wrong");
                    span2.html("");
                    passwordflag = true;
                    break;
            }
        }
    });

    var spn_repassword_ok = $("#spn_repassword_ok");
    var repasswordflag = true;

    repassword.blur(function() {
        if (password.val() == repassword.val()) {
            spn_repassword_ok.addClass("icon_yes").show().removeClass("icon_wrong");
            span3.html("");
            repasswordflag = true;
        } else {
            spn_repassword_ok.addClass("icon_wrong").show().removeClass("icon_yes");
            span3.html("");
            repasswordflag = false;
        }
    });

    //3.验证码
    // function yzm() {
    //     var arr = [];
    //     var codelength = 4;
    //     var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');

    //     $.each(function(index, element) {
    //         var i = 0,
    //             i < codelength,
    //             i++;
    //         var index = Math.floor(Math.random() * 36);
    //         code += random[index];

    //     })
    //     return yzmstr
    // };

    // var code = $("#vcodeImgWrap");
    // var changecode = $("#vcodeImgBtn");

    // let txt_vcodeflag = true;

    // code.innerHTML = yzm();
    // changecode.onclick = function() {
    //     code.innerHTML = yzm();
    // }

    // txt_vcode.blur(function() {
    //         if (txt_vcode.val() !== "") {
    //             if (code.html() == txt_vcode.val()) {
    //                 txt_vcodeflag = true;

    //             } else {
    //                 span4.html("验证码不能为空");
    //                 span4.css("color", "red")
    //                 txt_vcodeflag = false;
    //                 span4.html("");
    //             }
    //         })

    //4.点击提交注册按钮将数据提交到数据库
    var loginfrom = $("#loginfrom").find("form");
    console.log(loginfrom)

    loginfrom.on('submit', function() {
        if (!usernameflag || !passwordflag || !repasswordflag) {
            return false;
        }
    })



}(jQuery);
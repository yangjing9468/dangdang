! function() {
    //1.获取sid
    // var picid = location.search.substring(1).split('=')[1];

    var picid = location.search.substring(1).split('=')[1];

    //2.将当前的id传给后端获取对应的数据
    $.ajax({
        url: 'http://10.31.158.62/dangdang/dd/php/details.php',
        data: {
            sid: picid
        },
        dataType: 'json'
    }).done(function(data) { //data:后端返回的和id对应的数据
        console.log(data);

        $('#largePic').attr('src', data.img1);
        $('#big_pic').attr('src', data.url);
        $('#largePic').attr('sid', data.sid);
        $('.head_title_name').html(data.title);
        $('#dd-price').html(data.num);
        $('#detailtitle').html(data.title);
        $("#big_pic").attr("src", data.img1)
        var arr = data.spic.split(',');
        console.log(arr);


        var str = '';
        $.each(arr, function(index, value) {

            str += '<li><img src="' + value + '"/></li>';
        });

        // console.log(str)
        $('#main-img-slider').html(str);
    });

}();


! function() {

    $('#sf').width($('.spic').width() * $('#bf').width() / $('.bpic').width());
    $('#sf').height($('.spic').height() * $('#bf').height() / $('.bpic').height());
    var bili = $('.bpic').width() / $('.spic').width();
    $('.spic').hover(function() {
        $('#sf').css('display', 'block');
        $('#bf').css('display', 'block');
        $(this).on('mouseenter', function(ev) {
            var $left = ev.pageX - $('.pic').offset().left - $('#sf').width() / 2;
            var $top = ev.pageY - $('.pic').offset().top - $('#sf').height() / 2;
            if ($left < 0) {
                $left = 0;
            } else if ($left >= $('.spic').width() - $('#sf').width()) {
                $left = $('.spic').width() - $('#sf').width();
            }
            if ($top < 0) {
                $top = 0;
            } else if ($top >= $('.spic').height() - $('#sf').height()) {
                $top = $('.spic').height() - $('#sf').height();
            }
            $('#sf').css('left', $left);
            $('#sf').css('top', $top);
            $('.bpic').css('left', -$left * bili);
            $('.bpic').css('top', -$top * bili);
        });
    }, function() {
        $('#sf').css('display', 'none');
        $('#bf').css('display', 'none');
    });

    //点击小图切换
    $('.dp_slide_box ul').on('click', 'li', function() {
        var $imgurl = $(this).find('img').attr('src');
        $('#smallpic').attr('src', $imgurl);
        $('.bpic').attr('src', $imgurl);
    });

    //点击箭头进行切换
    var $num = 5; //放大镜显示6张。
    $('#next_slide').on('click', function() {
        var $list = $('.dp_slide_box ul li'); //8
        if ($list.length > $num) {
            $num++;
            $('#pre_slide').css('color', '#333');
            if ($list.length == $num) {
                $('#next_slide').css('color', '#fff');
            }
            $('.dp_slide_box ul').animate({
                left: -($num - 5) * $list.eq(0).innerWidth()
            })
        }
    });

    $('#pre_slide').on('click', function() {
        var $list = $('.dp_slide_box ul li'); //8
        if ($num > 5) {
            $num--;
            $('#next_slide').css('color', '#333');
            if ($num <= 5) {
                $('#pre_slide').css('color', '#fff');
            }
            $('.dp_slide_box ul').animate({
                left: -($num - 5) * $list.eq(0).innerWidth()
            })
        }
    });
}();


var arrsid = []; //商品的sid
var arrnum = []; //商品的数量
function cookietoarray() {
    if (getcookie('cookiesid') && getcookie('cookienum')) { //判断商品是第一次存还是多次存储
        arrsid = getcookie('cookiesid').split(','); //cookie商品的sid  
        arrnum = getcookie('cookienum').split(','); //cookie商品的num
    }
}



$('.p-btn a').on('click', function() {


    //获取当前的按钮对应的商品的sid
    var $sid = $(this).parents('.goodsinfo').find('#smallpic').attr('sid');
    cookietoarray(); //获取已经存在的cookie值。

    if ($.inArray($sid, arrsid) != -1) { //商品存在，数量叠加 
        //先取出cookie中的对应的数量值+当前添加的数量值，添加到对应的cookie中。
        var num = parseInt(arrnum[$.inArray($sid, arrsid)]) + parseInt($('#count').val());
        arrnum[$.inArray($sid, arrsid)] = num;
        addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie

    } else { //不存在，第一次添加。将商品的id和数量存入数组，再存入cookie.
        arrsid.push($sid); //将当前的id存入数组
        addcookie('cookiesid', arrsid.toString(), 10); //数组存入cookie
        arrnum.push($('#count').val());
        addcookie('cookienum', arrnum.toString(), 10); //数组存入cookie
    }
});
;
! function($) {
    //banner数据
    $.ajax({
        url: 'php/banner.php',
        dataType: 'json'
    }).done(function(bannerdata) {
        $.each(bannerdata, function(index, value) {
            var $bannerstr = '<ul>';

        });
    });

    //lunbo数据
    $.ajax({
        url: 'php/banner.php',
        dataType: 'json'
    }).done(function(bannerdata) {
        $.each(bannerdata, function(index, value) {
            var $bannerstr = '<ul>';

        });
    });


    //tab切换数据
    $.ajax({
        url: 'php/banner.php',
        dataType: 'json'
    }).done(function(bannerdata) {
        $.each(bannerdata, function(index, value) {



        });
    });

    //独家特供
    $.ajax({
        url: 'http://10.31.158.62/dangdang/dd/php/dangdangdata.php',
        dataType: 'json'
    }).done(function(data) { //data:后端返回的和id对应的数据
        console.log(data);

        var $html = '<ul>';
        $.each(data, function(index, value) {
            $html += `
			<li>
                <a title="${value.title}" class="img" href="details.html?sid=${value.id}" target="_blank">
                    <img src="${value.img1}" alt="details.html?sid=${value.title}">
                </a>
                <p class="name" ddt-src="24198400">
                    <a title="${value.title}" href="details.html?sid=${value.id}" target="_blank" style=" ">${value.title}</a>
                </p>
                <span class="num_logo">当当独家特供</span>
                <p class="price">
                <span class="rob">
                    <span class="sign">¥</span>
                    <span class="num">${value.num}</span>
                    <span class="tail">${value.tail}</span>
                </span>
                <span class="price_r">
                    <span class="sign">¥</span>
                    <span class="num">${value.num1}</span>
                    <span class="tail">${value.tail1}</span>
                </span>
                </p><div class="icon_pop"></div>            
            </li>
			`;
        });
        $html += '</ul>';
        $('#component_403758__5206_5185__5185').html($html);

        console.log($html)
            // console.log(data.id)
    });




}(jQuery);


! function($) {
    //lunbo效果与tab切换

    // console.log($('.tab_aa').eq(2).find("li"))
    $('.tab_aa').eq(0).find("li").hover(function() {
        $(this).addClass('on').siblings().removeClass('on');
        $('#component_map_id_403753_part_id_5221').find('div.content').eq($(this).index()).show();
    }, function() {
        $(this).addClass('on').siblings().removeClass('on');

    })


    $('.tab_aa').eq(1).find("li").hover(function() {
        $(this).addClass('on').siblings().removeClass('on');

        $('.book_new .tab_box_aa').find('div.content').eq($(this).index()).show().siblings().hide();
        $('.book_new .tab_box_aa').find('textarea').show();
    }, function() {
        $(this).addClass('on').siblings().removeClass('on');

    })



    //(1)新书预售
    var pro_li = $(".book_presell .list_aa").find("li");
    var right = $(".book_presell .btn_brand_next");
    var left = $(".book_presell .btn_brand_prev");
    var btns = $("#mapid_403756_parent_5304_part_ .mix_marquee_tab li");
    var pro_li_width = pro_li.outerWidth();
    let $num = 0;

    $(".book_presell .over .list_aa").each(function(index, element) {
        right.on("click", function() {
            $num++;
            if ($num > btns.length - 1) {
                $num = 0;
            };
            tabswitch();
            btns.eq($num).addClass("current").siblings().removeClass("current");

        });

        left.on("click", function() {
            $num--;
            if ($num < 0) {
                $num = btns.length - 1;
            }
            tabswitch();
            btns.eq($num).addClass("current").siblings().removeClass("current");
        });

        btns.on("mousemove", function() {
            $num = $(this).index();
            tabswitch();
            btns.eq($num).addClass("current").siblings().removeClass("current");
        })

        function tabswitch() {
            $(".book_presell .over .list_aa").css({
                "left": -(pro_li_width) * $num + "px"
            });
        }
    })


}(jQuery);

! function($) {
    //lunbo效果
    //(2)新书上架
    var pro_li = $(".book_online .list_aa").find("li");
    var right = $(".book_online .btn_brand_next");
    var left = $(".book_online .btn_brand_prev");
    var btns = $("#mapid_403754_parent_5298_part_ .mix_marquee_tab li");
    var pro_li_width = pro_li.outerWidth();
    let $num = 0;

    $(".book_online .over .list_aa").each(function(index, element) {
        right.on("click", function() {
            $num++;
            if ($num > btns.length - 1) {
                $num = 0;
            };
            tabswitch();
            btns.eq($num).addClass("current").siblings().removeClass("current");

        });

        left.on("click", function() {
            $num--;
            if ($num < 0) {
                $num = btns.length - 1;
            }
            tabswitch();
            btns.eq($num).addClass("current").siblings().removeClass("current");
        });

        btns.on("mousemove", function() {
            $num = $(this).index();
            tabswitch();
            btns.eq($num).addClass("current").siblings().removeClass("current");
        })

        function tabswitch() {
            $(".book_online .over .list_aa").css({
                "left": -(pro_li_width) * $num + "px"
            });
        }
    })

}(jQuery);




! function($) {
    //楼梯效果
    let $lc = $('.bd_auto').find('.storey_two,.storey_four,.storey_five,.storey_six');

    $(window).on('scroll', function() {
        let $scrollTop = $(window).scrollTop();
        if ($scrollTop >= 500) {
            $('.book_returntop').css("display", "block");
            // $('.book_returntop').show();
        } else {
            $('.book_returntop').css("display", "none");
            // $('.book_returntop').hide();

        };

        $lc.each(function(index, element) {
            let $lctop = $lc.eq(index).offset().top;
            // console.log($lctop);

            if ($lctop >= $scrollTop - 500) {
                $('.toge').removeClass('active');
                $('.toge').eq(index).addClass('active');
                return false;
            }

        });
    });

    // console.log($('.storey_two').offset().top)
    // console.log($('.storey_four').offset().top)
    // console.log($('.storey_five').offset().top)
    // console.log($('.storey_six').offset().top)
    // console.log($lc);

    $('.toge').on('click', function() {
        $(this).addClass('active').siblings().removeClass('active');
        let $lcenttop = $lc.eq($(this).index() - 2).offset().top;
        // console.log($lcenttop);

        $('html,body').animate({
            scrollTop: $lcenttop
        }, 10)
    });

    $('.book_returntop').on('click', function() {
        $('html,body').animate({
            scrollTop: 0
        }, 200);
    });

}(jQuery);

! function($) {
    //左边侧边栏
    $('.level_one').each(function() {

        $(this).hover(function() {
            var $submenu = $(this).find('.submenu');
            var thisTop = -1;
            var thisBodyT = $('.flq_body').offset().top,
                thisOffsetT = $(this).offset().top, //鼠标经过该level_one自身距离顶部的top值
                thisH = $(this).outerHeight(), //鼠标经过该level_one自身的高
                thisSubmenuT = $submenu.offset().top, //鼠标经过该level_one显示出来的submenu距离顶部的top值				
                thisSubmenuH = $submenu.outerHeight(),
                winScrollT = $(window).scrollTop(); ////window的scrollTop的高

            $submenu.hide();
            $(this).addClass('on');
            $submenu.css('display', 'block');

            if (thisOffsetT > winScrollT) {
                if (winScrollT - thisBodyT < thisOffsetT + thisH - thisSubmenuH - thisBodyT - 2) {
                    thisTop = thisOffsetT + thisH - thisSubmenuH - thisBodyT - 2;
                }

            }

            if (thisTop < -1) {
                thisTop = -1
            }
            $submenu.css({
                'top': thisTop + "px"
            })

        }, function() {
            var $submenu = $(this).find('.submenu');
            $(this).removeClass('on');
            $submenu.css('display', 'none');
        })
    })
}(jQuery);

! function($) {
    //小效果
    if ($('.book_1ad .pic').length == 0) {
        $('.book_1ad').hide();
    };
    if ($('.book_3ad .pic').length == 0) {
        $('.book_3ad').hide();
    };


    $('.book_vip .list_aa li .price').parent().addClass('small_img'); //因为.book_vip .list_aa下的所有li标签并不是都有p.price标签和p.name标签,所以是只有.book_vip .list_aa下带有price标签的（唯一）父元素才能添加small_img类

    //对二维码图标设置移入移出效果
    $('.fix_box .fix_erweima').hover(function() {
        $('.big').css('display', 'block');
    }, function() {
        $('.big').css('display', 'none');
    })

    //鼠标经过所有的img图片，找到它的父元素下面的.name a,设置属性下划线和字体颜色
    $('.img').on('mouseenter', function() {
        $(this).parent('li').find('.name a').attr("style", "text-decoration:underline;color:blue")
    });
    $('.img').on('mouseleave', function() {
        $(this).parent('li').find('.name a').attr("style", "")
    });

    $('.name a').on('mouseenter', function() {
        $(this).attr("style", "ext-decoration:underline;color:blue")
    });
    $('.name a').on('mouseleave', function() {
        $(this).attr("style", "")
    });


    // console.log("level_one".length)


}(jQuery);

// ! function($) {
//     //lunbo效果
//     //(3)换一批
//     var pro= $(".book_reco_content .list_aa");
//     var proli= $(".book_reco_content .list_aa").find("li");

//     var proliheight = proli.outerHeight();
//     // console.log(parseInt(proli.length)/10)
//     $(".book_reco_content .list_aa").each(function(index, element) {
//         $('#changeone').on("click", function() {
//             if (parseInt(proli.length)/10==3) {
//                 let $num=2;        
//                 pro.css({
//                     "top": -(proliheight+18)*$num+"px"
//                 });

//             };

//         });

//     });

// }(jQuery);
;
(function($) {

    $.fn.lunbo = function(options) {

        let settings = {
            btns: 'ol li',
            pics: 'ul li',
            activeclass: 'active',
            showclass: 'showpic',
            etype: 'click',
            effict: 'display',
            arrow: 'true',
            autoplay: true
        }
        $.extend(true, settings, options);
        $(this).each(function(index, element) {
            let $num = 0;
            let timer = null;
            //图片轮播的动作
            let $btns = $(element).find(settings.btns);
            if (settings.etype === 'click' || settings.etype !== 'mouseover') {
                $btns.on('click', function() {
                    $num = $(this).index();
                    tabswitch();
                });
            } else {
                $btns.on(settings.etype, function() {
                    $num = $(this).index();
                    tabswitch();
                });
            }

            if (settings.arrow) {
                $(this).hover(function() {
                    $(element).find('.left').show();
                    $(element).find('.right').show();
                }, function() {
                    $(element).find('.left').hide();
                    $(element).find('.right').hide();
                });
            }

            if (settings.autoplay) {
                $(this).hover(function() {
                    clearInterval(timer);
                }, function() {
                    timer = setInterval(function() {
                        $(element).find('.right').click();
                    }, $.type(settings.autoplay) === 'number' ? settings.autoplay : 3000)
                });
            }

            $(element).find('.right').on('click', function() {
                $num++;
                if ($num > $btns.length - 1) {
                    $num = 0;
                }
                tabswitch();
            });

            $(element).find('.left').on('click', function() {
                $num--;
                if ($num < 0) {
                    $num = $btns.length - 1;
                }
                tabswitch();
            });

            if (settings.autoplay === 'true' || settings.autoplay === true || ($.type(settings.autoplay) === 'number' && settings.autoplay >= 3000)) {

                timer = setInterval(function() {
                    $(element).find('.right').click();
                }, $.type(settings.autoplay) === 'number' ? settings.autoplay : 3000)

            }

            function tabswitch() {

                $btns.eq($num).addClass(settings.activeclass).siblings().removeClass(settings.activeclass);

                if (settings.effict === 'display' || settings.effict !== 'opacity') { //display
                    $(element).find(settings.pics).eq($num).addClass(settings.showclass).siblings().removeClass(settings.showclass);
                } else { //opacity
                    $(element).find(settings.pics).css('transition', 'all 0.5s');
                    $(element).find(settings.pics).eq($num).addClass(settings.showclass).siblings().removeClass(settings.showclass);
                }
            }
        });
    }

})(jQuery);
;!function($){
	//banner数据
	$.ajax({
		url:'php/banner.php',
		dataType:'json'
	}).done(function(bannerdata){
		$.each(bannerdata,function(index,value){
			var $bannerstr='<ul>';
			
		});
	});
	
	//lunbo数据
	$.ajax({
		url:'php/banner.php',
		dataType:'json'
	}).done(function(bannerdata){
		$.each(bannerdata,function(index,value){
			var $bannerstr='<ul>';
			
		});
	});
	//tab切换数据
	$.ajax({
		url:'php/banner.php',
		dataType:'json'
	}).done(function(bannerdata){
		$.each(bannerdata,function(index,value){
			var $bannerstr='<ul>';
			
		});
	});
}(jQuery);

!function($){
	//banner效果
	
}(jQuery);

!function($){
	//lunbo效果
	
}(jQuery);

!function($){
	//楼梯效果
	  let $lc=$('.bd_auto').children('.storey_two,.storey_four,.storey_five,.storey_six');  
        
        $(window).on('scroll',function(){
            let $scrollTop=$(window).scrollTop();
            if($scrollTop>=500){
                // $('.book_returntop').css("display","block");
                $('.book_returntop').show();
            }else{
                // $('.book_returntop').css("display","none");
                $('.book_returntop').hide();

            };     
            
            $lc.each(function (index,element) {
                let $lctop=$lc.eq(index).offset().top;
                // console.log($lctop);

                if($lctop>=$scrollTop-500){
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
        // console.log($lc.length);
        
        $('.toge').on('click',function(){
                $(this).addClass('active').siblings().removeClass('active');
                let $lcenttop=$lc.eq($(this).index()-2).offset().top;
                // console.log($lcenttop);

                $('html,body').animate({
                    scrollTop:$lcenttop
                },10)
        });
        
        $('.book_returntop').on('click',function(){
                $('html,body').animate({
                    scrollTop:0
                },200);
        });
	
}(jQuery);

!function($){
	//左边侧边栏
	$('.level_one').each(function(){
		
		$(this).hover(function(){
			var $submenu=$(this).find('.submenu');
			var thisTop=-1;
			var	thisBodyT=$('.flq_body').offset().top,
				thisOffsetT=$(this).offset().top,//鼠标经过该level_one自身距离顶部的top值
				thisH=$(this).outerHeight(),//鼠标经过该level_one自身的高
				thisSubmenuT=$submenu.offset().top,//鼠标经过该level_one显示出来的submenu距离顶部的top值				
				thisSubmenuH=$submenu.outerHeight(),
				winScrollT=$(window).scrollTop();////window的scrollTop的高

			$submenu.hide();
			$(this).addClass('on');
			$submenu.css('display','block');

			if(thisOffsetT>winScrollT){
				if(winScrollT - thisBodyT<thisOffsetT+thisH-thisSubmenuH-thisBodyT-2){
					thisTop=thisOffsetT+thisH-thisSubmenuH-thisBodyT-2;
				}
			
			}
	
			if(thisTop<-1){
				thisTop=-1
			}
			$submenu.css({
				'top':thisTop+"px"
			})

		},function(){
			var $submenu=$(this).find('.submenu');
			$(this).removeClass('on');
			$submenu.css('display','none');
		})
	})
}(jQuery);

!function($){
	//小效果
	 if($('.book_1ad .pic').length==0){
            $('.book_1ad').hide();
        };
        if($('.book_3ad .pic').length==0){
            $('.book_3ad').hide();
        };
	
	  $(function(){
            $('.book_vip .list_aa li .price').parent().addClass('small_img'); //因为.book_vip .list_aa下的所有li标签并不是都有p.price标签和p.name标签,所以是只有.book_vip .list_aa下带有price标签的（唯一）父元素才能添加small_img类
        });

	 $('.fix_box .fix_erweima').hover(function(){
		 $('.big').css('display','block');
	 },function(){
		 $('.big').css('display','none');
	 })
		
}(jQuery);

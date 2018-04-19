$(function(){

 
    //商品规格
    var smalltip = new DialogFx('#smalltip');
     $('.smalltip').on('click',function(){
        smalltip.toggle();
    });

    //login password show and hide;
    $(".pass-hide").on("click",function(){
        $(this).toggleClass("pass-show");
		var fale = $(this).is(".pass-show");
		if(fale){
			$(this).parent().parent().find(".small-pass").attr("type","text");
		}else{
			$(this).parent().parent().find(".small-pass").attr("type","password");
		}
		
        // fale ? $(".small-pass") : $(".small-pass").attr("type","password");
    })

      //首页轮播
  	var ua = navigator.userAgent.toLowerCase();
	if (/iphone|ipad|ipod/.test(ua)) {
		var swiper = new Swiper('.swiper-container', {
            //effect: 'cube',
			grabCursor: true,
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			autoplay: 4000,
			cube: {
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94
			}
		});

	} else /*if (/android/.test(ua))*/ {
		var swiper = new Swiper('.swiper-container', {
            autoplay: 4000,
            pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            cube: {
				shadow: true,
				slideShadows: true,
				shadowOffset: 20,
				shadowScale: 0.94
			}
		});
	}
	//购物车
	$(".btn-toggle").on("click",function(){
		$(this).parent().find(".small-cat").hide().eq(1).show();
		$(this).hide();
	})
	$(".completes").on("click",function(){
		$(this).parent().parent().parent().siblings().show();
		$(this).parent().parent().parent().hide()
	})

	//订单状态切换
	$(".tab-box").eq(0).show();
	$(".flex-tab-btn").on("click",".weui-flex__item",function(){
		var num = $(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".tab-box").hide().eq(num).show();
	})
})
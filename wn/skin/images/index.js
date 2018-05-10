$(function(){
  //微信二维码显示
  $('.weixinPositon').hover(function() {
  	$(this).parents('.header').siblings('.navCon').find('.weixin').stop().slideDown();
  		$(this).parents('.header').siblings('.navCon2').find('.weixin').stop().slideDown();
  }, function() {
//       $(this).parents('.header').siblings('.navCon').find('.weixin').stop().slideUp();
  });
    $('.weixin').hover(function() {
  	$(this).show();
  }, function() {
         $(this).hide();
  });

$('.newsMoer').hover(function(){
$(this).find('.newsMoeraH').show();
$(this).find('.newsMoera').hide();
},function(){
	$(this).find('.newsMoera').show();
  $(this).find('.newsMoeraH').hide();
	
});
//导航固定
$(".fixedNavCon").hide();
$(".navCon").show();
$(".abountNav").show();
  $(window).scroll(function() {
	//$("body").css({"background-position":"center "+$(window).scrollTop()+""});
	if($(window).scrollTop()>=50){
		$(".fixedNavCon").show();
    $(".navCon").hide();
    $(".abountNav").hide();
	}else{
    $(".fixedNavCon").hide();
		$(".navCon").show();
    $(".abountNav").show();
	}
  });

$('.eleven ul li').hover(function() {
  $(this).css({
    background:"#fff",
    color:"#888"
  });
}, function() {
  $(this).css({
    background:"none",
    color:"#fff"
  });
});

$('.productSvice >ul >li').each(function() {
  $(this).hover(function() {
    $(this).find('.productHide').show();
  }, function() {
     $(this).find('.productHide').hide();
  });
});



});

//回到顶部
function gotoTop(acceleration,stime) {
   acceleration = acceleration || 0.1;
   stime = stime || 10;
   var x1 = 0;
   var y1 = 0;
   var x2 = 0;
   var y2 = 0;
   var x3 = 0;
   var y3 = 0;
   if (document.documentElement) {
       x1 = document.documentElement.scrollLeft || 0;
       y1 = document.documentElement.scrollTop || 0;
   }
   if (document.body) {
       x2 = document.body.scrollLeft || 0;
       y2 = document.body.scrollTop || 0;
   }
   var x3 = window.scrollX || 0;
   var y3 = window.scrollY || 0;

   // 滚动条到页面顶部的水平距离
   var x = Math.max(x1, Math.max(x2, x3));
   // 滚动条到页面顶部的垂直距离
   var y = Math.max(y1, Math.max(y2, y3));

   // 滚动距离 = 目前距离 / 速度, 因为距离原来越小, 速度是大于 1 的数, 所以滚动距离会越来越小
   var speeding = 1 + acceleration;
   window.scrollTo(Math.floor(x / speeding), Math.floor(y / speeding));

   // 如果距离不为零, 继续调用函数
   if(x > 0 || y > 0) {
       var run = "gotoTop(" + acceleration + ", " + stime + ")";
       window.setTimeout(run, stime);
   }
}

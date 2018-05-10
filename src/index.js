$(function(){
	
	//等待弹窗
	function cantwaiting(){
		$("#LoadingBar").fadeOut(100);
		$("#LoadingBar").children()
	}
	function loadcomplete(){
		setTimeout(function(){
			$("#LoadingBar").fadeOut(500);
		},5000)
	}
	window.onload=function(){
		$("#LoadingBar p").html("正在进入绿闪电");
		loadcomplete();
	}
	
	//电话弹窗
	function tanchutel(){
		var tel = layer.open({
			type:1,
			title:false,
			closeBtn:false,
			area:['440px', 'auto'],
			shade: 0,
			skin:'layui-layer-custom',
			shadeClose: true,
			scrollbar: true,
			shift:1,
			move:'.tanchubox',
			moveType:1,
			content:$('#tc-tel'),
			zIndex:9999
		});
		$('.tc-closebtn').on('click',function(){
			layer.close(tel);
		});
	}
	
	//tanchuang
	var showi=0;
	$(window).load(function shows(){  
	//	setTimeout(function(){
	//	   tanchutel();
	//	},10000);
		$(function closee(){
			$(".noneyin").click(function(){
				layer.closeAll();
				if(showi<2){
					shows();
					showi++;
				}else{
					$(".noneyin").html('<i class="mr5 iconfont">&#xe601;</i>不再提醒');
					showi++;
				}
			})
		})
	});
	//无微牛
	$('#weiniu').click(function(){
		window.location.href = 'wn/index.htm';
	})
	
	//全屏滚动
	$('#fullpage').fullpage({
		anchors: [ 'banner', 'service', 'cases','advantage','news','contact'],
		sectionsColor: ['#0d9a84', '#333', '#333', '#fff', '#f8f8f8', '#333', '#111'],
		css3: false,
		menu: '.clearfix',
		verticalCentered:false,
		navigation:true,
		navigationPosition:'left',
		navigationColor:'#333',
		navigationTooltips:['',''],
		scrollOverflow:false,
		autoScrolling:true,
		afterLoad:function(anchorLink,index){
			if (index==1) {
				$('.logo img').attr('src','img/logo.png');
			} else{
				$('.logo img').attr('src','img/logo2.png');
			}
			if(index==1){
				$('.head').removeClass('head_fixed');
				$('#fp-nav').hide();
				$('#fp-nav').removeClass('white');
				
//				$('.weiniuCon div').addClass('hhhh');
				$(".item_top").slideUp();
				
			};
			if(index==2){
				$('.head').addClass('head_fixed');
				$('#fp-nav').show(300);
				$('#fp-nav').addClass('white');
				$(".item_top").slideDown();				
			};
			if(index==3){
				$('.head').addClass('head_fixed');
				$('#fp-nav').show(300);
				$('#fp-nav').addClass('white');
				$(".item_top").slideDown();
			};
			if(index==4){
				$('.head').addClass('head_fixed');
				$('#fp-nav').show(300);
				$('#fp-nav').removeClass('white');
				$(".item_top").slideDown();
			};
			if(index==5){
				$('.head').addClass('head_fixed');
				$('#fp-nav').show(300);
				$('#fp-nav').removeClass('white');
				$(".item_top").slideDown();
				$("#process_list").slide({
					titCell: ".hd li",
					autoPage: false,  //是否使用自动显示分页
					mainCell:".bd",
					autoPlay:true,
					defaultIndex:0,
					effect:"fade",   //特效left,leftLoop,topLoop,top,fade（支持响应窗口大小）,
					easing:"easeOutCirc",  //缓动效果 easeInQuint,easeInBack,easeOutBounce,easeOutElastic
					trigger:"mouseover",   //触发方式  mouseover,click
					delayTime:0,  //延迟时间
					interTime:3000,  //间隔时间
					pnLoop:true,   //前后按钮循环，默认true
					mouseOverStop:true   //鼠标经过停止播放，默认true
				});
				$('.select').select2().select2("close");
				$('.select').val("IOS、安卓APP原生开发").trigger("change");
			};
			if(index==6){
				$('.head').addClass('head_fixed');
				$('#fp-nav').show(300);
				$('#fp-nav').addClass('white');
				$(".item_top").slideDown();
			};
			if(index==7){
				$('.head').addClass('head_fixed');
				$('#fp-nav').show(300);
				$('#fp-nav').addClass('white');
				$(".item_top").slideDown();
				$('.select').select2({
					placeholder: "请选择",
					//allowClear: true,
					minimumResultsForSearch: Infinity
				});
				$('.validform').Validform({
					tiptype:3
				}).tipmsg.r=" ";
			};
		}
	});
	$("#indexslider").mouseover(function(){
		$(this).find('.arrow').addClass('arrow_show');
		$(this).find('.hd').addClass('hd_show');
	});
	//轮播图
	$("#indexslider").slide({
		titCell: ".hd ul",
		autoPage: true,  
		mainCell:".swiper-wrapper",
		autoPlay:true,	
		effect:"fold",   //特效left,leftLoop,topLoop,top,fade（支持响应窗口大小）,
		easing:"easeOutCirc",  //缓动效果 easeInQuint,easeInBack,easeOutBounce,easeOutElastic
		trigger:"mouseover",   //触发方式  mouseover,click
		delayTime:2000,  
		interTime:2000,  
		triggerTime:0,
		pnLoop:true,   //前后按钮循环，默认true
		mouseOverStop:true   //鼠标经过停止播放，默认true
	});
	$('.nav-menu').mousewheel(function(event, delta) {
	return false;
})
$('#LoadingBar').mousewheel(function(event, delta) {
	return false;
})
$("#process_list").slide({
	titCell: ".hd li",
	autoPage: false,  //是否使用自动显示分页
	mainCell:".bd",
	autoPlay:true,
	defaultIndex:0,
	effect:"fade",   //特效left,leftLoop,topLoop,top,fade（支持响应窗口大小）,
	easing:"easeOutCirc",  //缓动效果 easeInQuint,easeInBack,easeOutBounce,easeOutElastic
	trigger:"mouseover",   //触发方式  mouseover,click
	delayTime:0,  //延迟时间
	interTime:3000,  //间隔时间
	pnLoop:true,   //前后按钮循环，默认true
	mouseOverStop:true   //鼠标经过停止播放，默认true
});

//手风琴 我们的服务
$(function() {
	$('.kwicks').kwicks({
		maxSize: '40%',
		spacing:0,
		behavior: 'menu',
		duration:300,
		delayMouseIn:10,
		selectOnClick:false
	});
});
//下拉菜单美化js
$(function(){
	$('.select').select2({
		placeholder: "请选择",
		//allowClear: true,
		minimumResultsForSearch: Infinity
	});
	$('.select').on("change",function(){
		if($('.select').val() == "其他"){
			$('#extra').show();
			$('#backtoselect').show();
			$('.select').next().hide();
		}else{
			$('#extra').hide();
			$('#backtoselect').hide();
			$('.select').next().show();
		}
	});
	$('#backtoselect').click(function(){ $('.select').val("企业宣传、营销网站定制").trigger("change");})
})
/*单选js*/
$(function(){
	$('.radio_box input').each(function(){
		if($(this).attr('checked')){
			$(this).next().addClass('current');
		}
	})
	$('.radio_box .radio_item').click(function(){
		if($(this).hasClass('open')){
			$('#'+$(this).attr('open1')).show();
			$('#'+$(this).attr('open2')).show();
		}else{
			$('#'+$(this).attr('open1')).hide();
			$('#'+$(this).attr('open2')).hide();
		}
		$(this).prev().trigger('click');
		$(this).parent().parent().find('.radio_item').removeClass('current');
		$(this).addClass('current');
		return false;
	});		
});
	
	
	
	
	
	//联系我们
	function check_mes(){
			var name=$("input[name=name]").val();
			var phone=$("input[name=phone]").val();
			var sex=$("input[name=sex]:checked").val();
			var demand=$("select[name=demand]").val();
			var extra=$("textarea[name=extra]").val();
			if(!name){
				//alert("请填写姓名！");
				return false;
			}
			if(!phone){
				//alert("请填写手机号！");
				return false;
			}
			var tag=/^1[0-9]{10}/;
			if(!tag.test(phone)){
				//alert("请填写正确的手机号！");
				return false;
			}
			/*if(!sex){
				alert("请选择性别！");
				return false;
			}*/
			var dataStr="name="+name+"&phone="+phone+"&sex="+sex;
			if(demand){
				dataStr+="&demand="+demand;
			}
			if(extra){
				dataStr+="&extra="+extra;
			}
			$.ajax({
				url:"/Message/insertMes",
				type:"post",
				data:dataStr,
				dataType:"json",
				async:false,
				success:function(msg){
					if(msg=="1"){
						layer.msg("提交成功！<br>我们会尽快与您取得联系~",{time:4000});
						//$('.validform input').val('');
					}
					if(msg=="2"){
						layer.msg("提交失败，请稍后重试！");
					}
					if(msg=="3"){
						layer.msg("您已经提交过了！<br />（24小时内只能提交一次）");
					}
				}
			})
			return false;
		}
});
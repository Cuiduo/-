//寮曞叆鎼滅储鏍忛〉闈�
//<div id="searchDiv"></div>
//缁濆璺緞
var url = window.location.href;
url = url.substring(0,url.indexOf("/new"));
var path = url+"/new/public/search";
// var path = url+"../../../../public/search";
$(function(){
	
	loadJsCss(path+"/css/menu.css", "css");
	loadJsCss(path+"/css/ionicons.min.css", "css");

	loadJsCss(path+"/css/css.css", "css");

	loadJsCss(path+"/css/applyBTN.css", "css");
	loadJsCss(path+"/css/theme-popover.css", "css");

	// loadJsCss(path+"/css/gmu/widget/panel/panel.css", "css");
	loadJsCss(path+"/css/jq22.css", "css");
	loadJsCss(path+"/css/style.css", "css");

	//鏍规嵁class缁欏ご閮ㄥ紩鍏ュご閮ㄩ〉闈�
	$("#searchDiv").load(path+"/search.html",function(){
		loadJsCss(path+"/js/modernizr.js", "js");
		setTimeout(function(){

			loadJsCss(path+"/js/scrolltopcontrol.js", "js");
			loadJsCss(path+"/js/theme-popover.js", "js");
			loadJsCss(path+"/js/apply.js", "js");

			loadJsCss(path+"/js/main.js", "js");
			loadJsCss(path+"/js/megamenu.js", "js");
			// loadJsCss(path+"/js/gmu/widget/panel/panel.js", "js");
			if($("body").width() > 768){
				jQuery("#search").show();
			}
		},200);
		
		$('#menu').on('click', function () {
			$("#panel").animate({
			   right: 0
			}, 500);
		});
		$('.closemenu').on('click', function(event) {
			$("#panel").animate({
			   right: "-100%"
			}, 500);
		});	

		$("#panel .panel-scroller").append(
				"<div style='padding-top: 22px; padding-left: 15px;'>"
                +"	<div style='line-height: 1.8em; margin-bottom: 10px;'>"
                +"    <span style='font-size: .8em; color:#666666;'>鏈嶅姟鐑嚎锛�</span><br>"
                +"    <span style='font-size: 1.2em; color:#0052a3;'>400-820-2126</span>"
                +"	</div>"
                +"</div>");
	});
});
$(function(){
	if($("body").width() > 768){

		$("#bottom").load(path+"/footer.html",function(){
			

			$("#chat").click(function(){
				if(msgstatus==0){
					showMsg();
				}else{
					hideMsg();
				}
			});

			//applyfloat  鐐瑰嚮閾炬帴

			$(document).ready(function(){
				$(".applyfloat").click(function(){
						if(ismobile()){
							window.open ('http://e8.weaver.com.cn/mobilemode/apps/site/web.jsp') 
						}else{
							window.open ('http://www.weaver.com.cn/e8/index.html') 
						}
				});
			});
			function ismobile() {
			    try {
			        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
			            return true;
			        }
			    } catch(d) {}
			    	
			   	return false;
			}

			//applyfloat  鐐瑰嚮閾炬帴   end
			
			//鐣欒█妗嗚緭鍏ユ晥鏋�
			$(".msginput").val(msgword).bind("focus",function(){
				if(this.value == msgword){
					this.value = "";
					$(this).removeClass("msg_blur").addClass("msg_focus");
				}
			}).bind("blur",function(){
				if(this.value == ""){
					this.value = msgword;
					$(this).removeClass("msg_focus").addClass("msg_blur");
				}
			});
			$(".msgarea").val(msgword2).bind("focus",function(){
				if(this.value == msgword2){
					this.value = "";
					$(this).removeClass("msg_blur").addClass("msg_focus");
				}
			}).bind("blur",function(){
				if(this.value == ""){
					this.value = msgword2;
					$(this).removeClass("msg_focus").addClass("msg_blur");
				}
			});
			
			document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);

			$(".qcode").bind('click',function(event){
				$(".wcode").css("display","block");
		        event.stopPropagation();
			    
		     });
		     
		     $(".wcode").mouseleave(function(){
			    $(".wcode").css("display","none");
			 });
		     

			 $(document).bind('click',function(ev){
		         $(".wcode").css("display","none");
		     });
		});

		$("#bottom2").load(path+"/footer3.html",function(){
			$("#chat").click(function(){
				if(msgstatus==0){
					showMsg();
				}else{
					hideMsg();
				}
			});
			
			//鐣欒█妗嗚緭鍏ユ晥鏋�
			$(".msginput").val(msgword).bind("focus",function(){
				if(this.value == msgword){
					this.value = "";
					$(this).removeClass("msg_blur").addClass("msg_focus");
				}
			}).bind("blur",function(){
				if(this.value == ""){
					this.value = msgword;
					$(this).removeClass("msg_focus").addClass("msg_blur");
				}
			});
			$(".msgarea").val(msgword2).bind("focus",function(){
				if(this.value == msgword2){
					this.value = "";
					$(this).removeClass("msg_blur").addClass("msg_focus");
				}
			}).bind("blur",function(){
				if(this.value == ""){
					this.value = msgword2;
					$(this).removeClass("msg_focus").addClass("msg_blur");
				}
			});
			
			document.getElementById("bdshell_js").src = "http://bdimg.share.baidu.com/static/js/shell_v2.js?cdnversion=" + Math.ceil(new Date()/3600000);

			$(".qcode").bind('click',function(event){
				$(".wcode").css("display","block");
		        event.stopPropagation();
			    
		     });
		     
		     $(".wcode").mouseleave(function(){
			    $(".wcode").css("display","none");
			 });
		     

			 $(document).bind('click',function(ev){
		         $(".wcode").css("display","none");
		     });
		
		});

	}

	if($("body").width() < 768){

		$("#bottom").load(path+"/footer2.html",function(){

			//applyfloat  鐐瑰嚮閾炬帴

			$(document).ready(function(){
				$(".applyfloat").click(function(){
						if(ismobile()){
							window.open ('http://e8.weaver.com.cn/mobilemode/apps/site/web.jsp') 
						}else{
							window.open ('http://www.weaver.com.cn/e8/index.html') 
						}
				});
			});
			function ismobile() {
			    try {
			        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) {
			            return true;
			        }
			    } catch(d) {}
			    	
			   	return false;
			}

			//applyfloat  鐐瑰嚮閾炬帴   end

		});
	}
});


$(window).load(function(){
	loadJsCss("http://bdimg.share.baidu.com/static/css/bdsstyle.css?cdnversion=20131219", "css");
	loadJsCss("http://bdimg.share.baidu.com/static/js/logger.js?cdnversion=405228", "js");
});

function loadJsCss(filename, filetype) {
	if (filetype == "js") {
		var fileref = document.createElement('script');
		fileref.setAttribute("type", "text/javascript");
		fileref.setAttribute("src", filename);
	} else if (filetype == "css") {
		var fileref = document.createElement("link");
		fileref.setAttribute("rel", "stylesheet");
		fileref.setAttribute("type", "text/css");
		fileref.setAttribute("href", filename);
	}
	if (typeof fileref != "undefined") {
		document.getElementsByTagName("head")[0].appendChild(fileref);
	}
}

/**瀵艰埅鐩稿叧js**/
var isSearch = false;
//鎵撳紑鎼滅储
function openSearch(){
	$("#mapInput").hide();
	$("#searchInput").show().val("").attr("placeholder","鎼滅储鎮ㄦ兂浜嗚В鐨勫唴瀹�");
	setTimeout(function(){$("#searchInput").focus();},600);
	$("#navMenu,#mapDiv,#mapNav,#mapSelect,#mapSelect2").hide();
	$("#searchHeader,#searchInfoDiv,#searchNav,#searchSelect").show();
	$("#searchA").click();
	isSearch = false;
}

//鎵撳紑鍦板浘
function openMap(){
	$("#searchInput").hide();
	$("#mapInput").show().val("").attr("placeholder","鎼滅储鎮ㄦ兂浜嗚В鐨勫煄甯傝仈绯绘柟寮�");;
	setTimeout(function(){$("#mapInput").focus();},600);
	$("#moreDiv,#otherCity").hide();
	$(".mapUl li").removeClass("liShow");
	$("#searchInfoDiv,#navMenu,#searchNav,#searchSelect").hide();
	$("#searchHeader,#mapDiv,#mapNav,#mapSelect,#mapSelect2").show();
	$("#searchA").click();
	isSearch = true;
}

//鍖哄煙鍚嶇О锛屾悳绱㈠叧閿瓧涓鸿鍊兼椂鍒欐樉绀哄搴旂殑鍩庡競鍚�
var areas = "鍗庝笢,鍗庡寳,涓滃寳,鍗庡崡,鍗庝腑,瑗块儴";

function searchKey(_this){
	if(!isSearch){
		return;
	}
	var val = $(_this).val();
	console.log(val);
	$("#moreDiv,#otherCity").hide();
	$(".mapUl li").removeClass("liShow");
	if(val == ""){
		return;
	}
	
	var i = 0;
	var area = "";
	//鏄惁涓嶅悓鍖哄煙锛屼緥濡傝緭鍏ヤ含锛屽彲鑳界粨鏋滀负鍖椾含锛屽崡浜紝鍒欎笉鎺ㄨ崘鍩庡競
	var isDifArea = true;
	$(".mapUl .city").each(function(){
		if(i >= 3){
			$("#moreDiv").show();
			return false;
		}
		var _parent = $(this).parent();
		if($(this).text().indexOf(val) > -1 || ( _parent.attr("area") == val)){
			_parent.addClass("liShow liShowDefault");
			area = area == ""?_parent.attr("area"):area;
			if(area != _parent.attr("area")){
				isDifArea = false;
			}
			i++;
		}
	});
	if(i> 0 && i < 3 && (areas.indexOf(val) == -1) && isDifArea){
		if($("li[area*='"+area+"']").length > 0){
			$(".liShow:last").after($("#otherCity").addClass("liShow").show());
		}
		$("li[area*='"+area+"']").each(function(){
			if($(this).find(".city").text().indexOf(val) == -1){
				if(i >= 3){
				$("#moreDiv").show();
					return false;
				}
				$(".liShow:last").after($(this).addClass("liShow"));
				i++;
			}
		});
	}
}
/**瀵艰埅鐩稿叧js**/

//鏄剧ず鐣欒█妗�
var msgstatus = 0;
var msgword = "鏈€澶�100涓瓧绗�";
var msgword2 = "璇峰湪姝よ緭鍏ュ唴瀹癸紝鎴戜滑浼氬敖蹇笌鎮ㄨ仈绯汇€�";
function showMsg(){
	$("#msg").animate({height:299},300,null,function(){msgstatus = 1;});
}
//闅愯棌鐣欒█妗�
function hideMsg(){
	$("#msg").animate({height:0},300,null,function(){msgstatus = 0;});
}
//鍙戦€佺暀瑷€
function doSend(){
	if($(".msgarea").val()==""||$(".msgarea").val()==msgword2){
			alert("鎵€鏈変俊鎭渶濉啓瀹屾暣锛�");
			return;
	}
	var inputs = $(".msginput");
	for(var i=0;i<inputs.length;i++){
		if($(inputs[i]).val()==""||$(inputs[i]).val()==msgword){
			alert("鎵€鏈変俊鎭渶濉啓瀹屾暣锛�");
			return;
		}
	}
	$("#msgform").submit();
	$(".msginput").val(msgword).removeClass("msg_focus").addClass("msg_blur");
	$(".msgarea").val(msgword2).removeClass("msg_focus").addClass("msg_blur");
	$("#msg").height(0);
	msgstatus = 0;
}

function htmlScroll(id){
	jQuery("body").animate({
		scrollTop : (jQuery("#"+id).offset().top-120)+"px"
	},500);
}
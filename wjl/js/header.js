//引入该js,即可引入二级顶部菜单
$(function(){
	var url = window.location.href;
	$("#topnav_secondDiv").load("public/header.html",function(){
		if(url.indexOf("function.html") > -1){
			$(".gongneng a").addClass("active_a");
		}else if(url.indexOf("scenario.html") > -1){
			$(".changjing a").addClass("active_a");
		}else if(url.indexOf("portal.html") > -1){
		$(".menhu a").addClass("active_a");
		}else if(url.indexOf("case.html") > -1){
			$(".anli a").addClass("active_a");
		}else if(url.indexOf("experience.html") > -1){
			$(".tiyan a").addClass("active_a");
		}else{
			$(".gaishu a").addClass("active_a");
		}
	});
	
	jQuery(document).scroll(function(){
	    if(jQuery(this).scrollTop() >= 50){
	        jQuery("#navbar2").show();
	        if($("body").width() <= 768){
	        	jQuery("#navbar1").addClass("navbarFix");
	        }	
	    }else{
	        jQuery("#navbar2").hide();
	        if($("body").width() <= 768){
	        	jQuery("#navbar1").removeClass("navbarFix");
	        }
	    }
	});
});

$(window).load(function(){
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

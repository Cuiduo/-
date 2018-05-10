$(function(){
	
		exeAnimate($(".pt-page").eq(0));
		
	});
	
	function exeAnimate(_page){
		if(_page.hasClass("slide-horizontal")){
			_page.parents(".pt-page-current").find(".slide-horizontal").each(function(){
				$(this).find("*[_moveclass]").each(function(){
					$(this).removeClass($(this).attr("_moveclass"));
					$(this).removeClass($(this).attr("_outclass"));
				});
			});
		}else{
			$("*[_moveclass]").each(function(){
				$(this).removeClass($(this).attr("_moveclass"));
				$(this).removeClass($(this).attr("_outclass"));
			});			
		}
		
		_page.find("*[_moveclass]").each(function(){
			var obj = $(this);
			var moveclass = obj.attr("_moveclass")
			var outtime = obj.attr("_outtime");
			if(outtime && !isNaN(outtime)){
				outtime = Number(outtime);
				setTimeout(function(){
					obj.removeClass(moveclass);
					obj.addClass(obj.attr("_outclass"));
				},outtime*1000);
			}
			var intime = obj.attr("_intime");
			if(intime && !isNaN(intime)){
				intime = Number(intime);
				setTimeout(function(){
					obj.addClass(moveclass);
				},intime*1000);
			}else{
				obj.addClass(moveclass);
			}
		});
		//removeAnimate(pageindex);
	}
	
	function removeAnimate(pageindex){
		if(pageindex!=0){
		}
	}
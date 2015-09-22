$(function(){
	//语言
	$('.language .l2').click(function(){
		$(this).css('background-color','#1199E3');
		alert('电脑不支持该版本');
	});
	//导航
	$(".common-nav").each(function(index,elements){
		$(this).mouseover(function(){
			$(".nav-child").eq(index).show().parent().siblings().children(".nav-child").hide();
			$(".common-nav img").eq(index).show().parent().siblings().children("img").hide();
			$(".common-nav").removeClass('hover').eq(index).addClass('hover');
		})
	});
	//搜索
	$('.text').focus(function(){
		if($('.text')[0].value =="输入关键字"){
			$('.text')[0].value = "";
		}
	}).blur(function(){
		if($('.text')[0].value ==""){
			$('.text')[0].value ="输入关键字"
		}
	});
})
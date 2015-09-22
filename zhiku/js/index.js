$(function(){
	//广告
	$(".banner-top").slide({titCell:".hd ul",mainCell:".ban-img ul",autoPage:true,effect:"left",autoPlay:true,trigger:"click"});
	//广告center
	$('.content-left-1 li div').mouseover(function(){
		$(this).addClass('content-left-alpha1').removeClass('content-left-alpha2');
		$(this).children('ul').show();
	}).mouseout(function(){
		$(this).addClass('content-left-alpha2').removeClass('content-left-alpha1');
		$(this).children('ul').hide();
	});

	//大市走势
	$("#one li").each(function(index,elements){
		$(this).mouseover(function(){
			$(".dashi").eq(index).show().siblings('.dashi').hide();
			$("#one img").eq(index).show().parent().siblings().children("img").hide();
			$("#one li").removeClass('gushi-now').eq(index).addClass('gushi-now');
			$(".dashi1").eq(index).show().slide({mainCell:".bd1 .dashi",autoPlay:true,effect:"topMarquee",vis:5,interTime:300}).siblings('.dashi1').hide();
		})
	});
	//大市走势pause
	$(".pause").slide({mainCell:"ul",autoPlay:true,effect:"leftMarquee",vis:2,interTime:50});
	//新闻公告
	$("#two li").each(function(index,elements){
		$(this).mouseover(function(){
			$(".new2").eq(index).show().siblings('.new2').hide();
			$("#two img").eq(index).show().parent().parent().siblings().children().children("img").hide();
			$("#two li").removeClass('gushi-now').eq(index).addClass('gushi-now');
		})
	});
	
	//市场情报
	$("#three li").each(function(index,elements){
		$(this).mouseover(function(){
			$(".new-cont").eq(index).show().siblings('.new-cont').hide();
			$("#three .newsj").eq(index).show().parent().siblings().children(".newsj").hide();
			$("#three li").removeClass('new-now').eq(index).addClass('new-now');
		})
	});
	//公告
	$(".banner-center").slide({ 
				type:"menu",// 效果类型，针对菜单/导航而引入的参数（默认slide）
				titCell:".nLi", //鼠标触发对象
				targetCell:".sub", //titCell里面包含的要显示/消失的对象
				effect:"slideDown", //targetCell下拉效果//slideUp
				delayTime:300 , //效果时间
				triggerTime:0, //鼠标延迟触发时间（默认150）
				returnDefault:true //鼠标移走后返回默认状态
	});
	
});
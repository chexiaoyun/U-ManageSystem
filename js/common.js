$(function(){
	$('#btnSendCode').click(function(){
		sendMessage();
	});
	$('.u-choice-left .u-span').click(function(){
		$(this).find('img').fadeToggle();
	});
	//上传入库确认图片
	$('.u-public-btn .u-orgin').click(function(){
		$('.u-mask.u-mask-up').hide();
	});
	$('.u-public-btn .u-bgcolor').click(function(){
		$('.u-mask.u-mask-up').hide();
	});
	$('.u-agreement-head i').click(function(){
		$('.u-mask.u-mask-up').hide();
	});
	$('.u-goods-upload .u-bgcolor').click(function(){
		$('.u-mask.u-mask-up').show();
	});
	//查看入库确认
	$('.u-goods-upload .u-blue').click(function(){
		$('.u-mask.u-masks').show();
	});
	$('.u-agreement-head i').click(function(){
		$('.u-mask.u-masks').hide();
	});
	//取消交易
	$('.u-public-btn .u-orgin').click(function(){
		$('.u-mask.u-mask-cancel').hide();
	});
	$('.u-public-btn .u-bgcolor').click(function(){
		$('.u-mask.u-mask-cancel').hide();
		$('.u-tag .u-remove').parents('ul').remove();
	});
	$('.u-agreement-head i').click(function(){
		$('.u-mask.u-mask-cancel').hide();
	});
	$('.u-tag .u-remove').click(function(){
		$('.u-mask.u-mask-cancel').show();
	});
	//物流跟踪
	$('.u-public-btn .u-orgin').click(function(){
		$('.u-mask.u-mask-logistics').hide();
	});
	$('.u-public-btn .u-bgcolor').click(function(){
		$('.u-mask.u-mask-logistics').hide();
	});
	$('.u-agreement-head i').click(function(){
		$('.u-mask.u-mask-logistics').hide();
	});
	$('.u-tag .u-blue').click(function(){
		$('.u-mask.u-mask-logistics').show();
	});
	//页数切换
	$('.u-goods-page li').click(function(){
		$(this).addClass('u-active').siblings('li').removeClass('u-active');
	});
});

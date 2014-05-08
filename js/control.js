/**
 * Created by tomson on 14-3-24.
 */
//if(navigator.userAgent.match(/iPhone/i))
jQuery(function($){
	var scroll_game_index=1;
	var scroll_game_count=$('.popup-box .scroll-item').length;

	var browser_height=document.documentElement.clientHeight;
	function resetStyle(){
		$('.popup-box .scroll-items').css('width',100*scroll_game_count+'%');
		$('.popup-box .scroll-item').css('width',100/scroll_game_count+'%');

		$('.popup-container').css('height',browser_height+100+'px');
		$('.popup-container .popup-box').css('height',browser_height-100+'px');
		$('.popup-box .scroll-box').css('height',browser_height-100+'px');
		$('.scroll-items').css('height',browser_height-100+'px');
		$('.scroll-item').css('height',browser_height-100+'px');
//		for(var iScrollItem in myScrollers){
//			myScrollers[iScrollItem].refresh();
//		}
	}
	//window.moveTo(0,100);
	resetStyle();
	$(window).resize(resetStyle);
	$('li>a').on('click',function(){
		var scroll_path=$(this).data('path');
		if(scroll_path!=''){
			$(document).stop().scrollTo($('.'+scroll_path),800,{offset:{top:-120,left:0}});
		}

	});
//	$('.banner-list img').on('click',function(){
//		$('.popup-container').show();
//		locker=false;
//	});
//	$('.popup-container .popup-close').on('click',function(){
//		$('.popup-container').hide();
//		locker=true;
//	});
//	$('.popup-box .next-button').on('click',function(){
//		if(scroll_game_index>=scroll_game_count){
//			scroll_game_index=scroll_game_count;
//			return;
//		}
//		var $parent = $('.scroll-box');
//
//		$parent.stop().scrollTo($parent.find('.scroll-item').eq(scroll_game_index),500,{offset:function(){scroll_game_index++;return{top:0,left:0} }});
//
//		if(scroll_game_index==scroll_game_count){
//			$(this).hide();
//		}
//		$('.popup-box .prev-button').show();
//	});
//	$('.popup-box .prev-button').on('click',function(){
//
//		scroll_game_index--;
//		if(scroll_game_index<=0){
//			scroll_game_index=1;
//			return;
//		}
//		var $parent = $('.scroll-box');
//
//		$parent.stop().scrollTo($parent.find('.scroll-item').eq(scroll_game_index-1),500,{offset:function(){scroll_game_index--;return {top:0,left:0}}});
//		if(scroll_game_index<=1){
//			$(this).hide();
//		}
//		$('.popup-box .next-button').show();
//	});
});
/**
 * Created by tomson on 14-3-24.
 */
jQuery(function($){
	var scroll_game_index=1;
	var scroll_game_count=$('.popup-box .scroll-item').length;
	var browser_height= window.screen.availHeight;
	$('.popup-box .scroll-items').css('width',100*scroll_game_count+'%');
	$('.popup-box .scroll-item').css('width',100/scroll_game_count+'%');

	$('.popup-container').css('height',browser_height+'px');
	$('.popup-container .popup-box').css('height',browser_height-50+'px');
	$('.popup-box .scroll-box').css('height',browser_height-100+'px');
	$('li>a').on('click',function(){
		var scroll_path=$(this).data('path');
		if(scroll_path!=''){
			$(document).stop().scrollTo($('.'+scroll_path),800,{offset:{top:-120,left:0}});
		}

	});
	$('.banner-list img').on('click',function(){
		$('.popup-container').show();
	});
	$('.popup-container .popup-close').on('click',function(){
		$('.popup-container').hide();
	});
	$('.popup-box .next-button').on('click',function(){
		if(scroll_game_index>=scroll_game_count){
			scroll_game_index=scroll_game_count;
			return;
		}
		var $parent = $('.scroll-box');

		$parent.stop().scrollTo($parent.find('.scroll-item').eq(scroll_game_index),500,{offset:function(){scroll_game_index++;return{top:0,left:0} }});

		if(scroll_game_index==scroll_game_count){
			$(this).hide();
		}
		$('.popup-box .prev-button').show();
	});
	$('.popup-box .prev-button').on('click',function(){

		scroll_game_index--;
		if(scroll_game_index<=0){
			scroll_game_index=1;
			return;
		}
		var $parent = $('.scroll-box');

		$parent.stop().scrollTo($parent.find('.scroll-item').eq(scroll_game_index-1),500,{offset:function(){scroll_game_index--;return {top:0,left:0}}});
		if(scroll_game_index<=1){
			$(this).hide();
		}
		$('.popup-box .next-button').show();
	});
});
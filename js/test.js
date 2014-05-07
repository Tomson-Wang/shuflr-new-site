/**
 * Created by tomson on 14-5-6.
 */
var myScrollers=[],locker=true;

//            myScroller=new IScroll('.scroll-item', { mouseWheel: true, click: true });
function initMyScroller(){
	var allScrollers =document.querySelectorAll('.scroll-item');
	for(var i=0; i <allScrollers.length;i++){
		var scrollId=allScrollers[i].id;
		var newScroller = new IScroll('#'+scrollId);
		myScrollers[scrollId]=newScroller;
	}
//	myScroller=new IScroll('#wrapper');
}
window.addEventListener('load', initMyScroller, false);

document.addEventListener('touchmove', function (e) { if(!locker)e.preventDefault(); }, false);
//        document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
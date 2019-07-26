/*-------------------------------------------
default
--------------------------------------------*/
$(window).load(function(){
    $('html,body').animate({ scrollTop: 0 }, '1');
});

/*-------------------------------------------
scroll
--------------------------------------------*/
$(function(){
	var interval = 200;
	var last_time = 0;
    var secnum = '1'; //この値今の場所を制御
	var w = $(window).width();

	var sec1 = $('#sec1');
	var sec2 = $('#sec2');
	var sec3 = $('#sec3');
	var sec4 = $('#sec4');
	var sec5 = $('#sec5');
	var ft = $('#footer');

    //pagetopクリック時にsenumの値を制御
    /*
	$('.c-pagetop a').click(function(){secnum = '1';});
    */

	//ホイールイベントを検知
	if(w > 800){ //for pc
		var mousewheel = 'onwheel' in document ? 'wheel' : 'onmousewheel' in document ? 'mousewheel' : 'DOMMouseScroll';
		document.addEventListener(mousewheel, function(eo){
			event.preventDefault();
			var now = new Date().getTime();
			var delta = 0;
			if (now - last_time > interval){
				if(event.deltaY < 0 || event.wheelDelta > 0){ //edgeだとdeltaYで取得できなかったのでwheelDeltaも使用。
					delta = -1;
				}else{
					delta = 1;
				}
                secscroll(eo, delta);
			}else{
				
			}
			last_time = now;
		}, {passive: false});
	}


  function secscroll(eo, delta){
      
	if (delta === 1){ //下ホイール
      if(secnum == '1'){
        var target = sec2;
        var position = target.offset().top;
        secnum = '2';
        $('body,html').animate({scrollTop:position - 120},400);
        
      }else if(secnum == '2'){
        var target = sec3;
        var position = target.offset().top;
        secnum = '3';
        $('body,html').animate({scrollTop:position - 120},400);
        
      }else if(secnum == '3'){
        var target = sec4;
        var position = target.offset().top;
        secnum = '4';
        $('body,html').animate({scrollTop:position - 120},400);
        
      }else if(secnum == '4'){
        var target = sec5;
        var position = target.offset().top;
        secnum = '5';
        $('body,html').animate({scrollTop:position - 120},400);
        
      }else if(secnum == '5'){
        var target = ft;
        var position = target.offset().top;
        secnum = '6';
        $('body,html').animate({scrollTop:position - 120},400);
        
      }else{}

    }
    
    if (delta === -1){ //上ホイール

      if(secnum == '1'){

      }else if(secnum == '2'){
        var target = sec1;
        var position = target.offset().top;
        secnum = '1';
        $('body,html').animate({scrollTop:position - 120},400);
        

      }else if(secnum == '3'){
        var target = sec2;
        var position = target.offset().top;
        secnum = '2';
        $('body,html').animate({scrollTop:position - 120},400);
        

      }else if(secnum == '4'){
        var target = sec3;
        var position = target.offset().top;
        secnum = '3';
        $('body,html').animate({scrollTop:position - 120},400);
        

      }else if(secnum == '5'){
        var target = sec4;
        var position = target.offset().top;
        secnum = '4';
        $('body,html').animate({scrollTop:position - 120},400);
        

      }else if(secnum == '6'){
        var target = sec5;
        var position = target.offset().top;
        secnum = '5';
        $('body,html').animate({scrollTop:position - 120},400);

      }else{}

    }
}

});

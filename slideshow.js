(function($){

  $(document).ready(function(){
    var slides = $("#slideshow > li");
    var count = 0;

    function toggle_slide(){
      count = (count + 1) % 4;
      slides.removeClass("current").eq(count).addClass("current");
    }
    
    setInterval(toggle_slide, 7000);

  });
  
  $(function() {
  	var one = $("#para1");
  	var two = $("#para2");
  	var three = $("#para3");
  	var four = $("#para4");
  	var w = $(window);

  	w.scroll(function(){
    	var h = w.scrollTop();
    	one.css("top", h / 30 + "px");
    	two.css("top", h / 30 + "px");
    	three.css("top", h / 30 + "px");
    	four.css("top", h / 30 + "px");
  	});
  });
  
	$(function() {
  	var appear = false;
  	var pagetop = $('#page-top');
  	$(window).scroll(function () {
    	if ($(this).scrollTop() > 1500) {  //100pxスクロールしたら
      	if (appear == false) {
        	appear = true;
        	pagetop.stop().animate({'right': '50px'}, 300); //0.3秒かけて現れる
      	}
    	}else{
      	if (appear) {
        	appear = false;
        	pagetop.stop().animate({'right': '-100px'}, 300); //0.3秒かけて隠れる
      	}
    	}
  	});
  	pagetop.click(function () {
    	$('body, html').animate({ scrollTop: 0 }, 500); //0.5秒かけてトップへ戻る
    		return false;
  		});
	});

})(jQuery);

	
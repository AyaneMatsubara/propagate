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

})(jQuery);
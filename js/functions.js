$(document).ready(function() {
  
  slidingTitle();
  work();
  scrollz();
    
  $('input[type="submit"]').click(function() {
    $('body,html').scrollTop(2000);
  });
  
});


$(window).scroll(function() {

    slidingTitle();
    
});


function slidingTitle() {
  windowScroll = $(this).scrollTop();
  $('.logo-big').css({
    'margin-top' : (windowScroll/2)+"px"
  });
  $('.scroll-header').css({
    'background-position' : 'center ' + (-windowScroll/8)+"px"
  });
}




function work() {
  $('.selections div').hover(function() {
    var $this = $(this),
        index = $this.index();
    $('.belt').css('margin-left', '-' + index * 455 + 'px');
    $this.addClass('seenit');
  });
}





function scrollz() {

  $('header .nav a').click(function(){
  
  	var el = $(this).attr('href'),
  	    elWrapped = $(el);
  	    
  	scrollToDiv(elWrapped,0);
  	return false;
  });
  
  function scrollToDiv(element,navheight){
  	var offset = element.offset(),
  	    offsetTop = offset.top,
  	    totalScroll = offsetTop-navheight;
  	
  	$('body,html').animate({
  			scrollTop: totalScroll
  	}, 500);
  }

}
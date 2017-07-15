//Start Loading section //
function finishLoading(){
    $('.is-showing').css('visibility','visible');
	$('.loader-content').fadeOut();
}

//End Loading section //

//Start Top Menu section //
var ww = document.body.clientWidth;
$(document).ready(function() {		
	$('.toggleMenu').click(function(){
		$('nav ul.main').toggle();		
	});
	$('nav ul.main li a').click(function(){
		if (ww <= 768) {
			// $("nav ul ul").css("display", "block");
			$(this).next().toggle();
		}
	});
	
});

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	
});

$(document).ready(function() {	

if($(window).width() > 640){

// Hide all but first tab content on larger viewports
$('.tab-menu_content:not(:first)').hide();

// Activate first tab
$('.tab-menu_title:first-child').addClass('tab-active');

} else {
  
// Hide all content items on narrow viewports
$('.tab-menu_content').hide();
    $('.tab-selected').show();
    
};
//End Tab Menu section // 
   
//End Top Menu section // 
$('.tab-menu_title').on('click', function() {
$('.tab-menu_content').hide();
$(this).next().show().prev().addClass('tab-active').siblings().removeClass('tab-active');
});
});

//End Tab Menu section // 


//Accordionp Menu section // 

$(document).ready(function() {		
	
	$('.according-menu li a').click(function(){

    $(this).next().toggle();
		
	});
	
});

//Accordionp Menu section // 

//Video section // 

$(document).ready(function() {	
    try{
           
var vid = document.getElementById("bgvid"),
pauseButton = document.getElementById("vidpause");
function vidFade() {
vid.classList.add("stopfade");
}
vid.addEventListener('ended', function() {
// only functional if "loop" is removed 
vid.pause();
// to capture IE10
vidFade();
    
});

pauseButton.addEventListener("click", function() {

if (vid.paused) {
vid.play();
pauseButton.innerHTML = "Pause Video";
} else {
vid.pause();
pauseButton.innerHTML = "Play Video";
}
})
}catch(err) {
}
});


//Video section // 


//Bar Progress Section // 

$(document).ready(function(){
$('.skillbar').each(function(){
$(this).find('.skillbar-bar').animate({
width:$(this).attr('data-percent')
},5000);
});
});
//Bar Progress Section // 






//Accordion Section // 

$(document).ready(function() {
$(".accordion section h2").click(function(e) {
$(this).parents().siblings("section").addClass("ac_hidden");

$(this).parents("section").removeClass("ac_hidden");

e.preventDefault();
});
});

//Accordion Section // 

//Sticky nav Section // 
var offset = $('#sticky-nav').offset();
$(window).scroll(function(){
   //$('#mine').text($(document).scrollTop());
  $('#sticky-nav').addClass('fixed-nav');
  if($(document).scrollTop() < 90){
         $('#sticky-nav').removeClass('fixed-nav');
  }
});

var offset = $('#sticky-nav-black').offset();
$(window).scroll(function(){
   //$('#mine').text($(document).scrollTop());
  $('#sticky-nav-black').addClass('fixed-nav-black');
  if($(document).scrollTop() < 90){
         $('#sticky-nav-black').removeClass('fixed-nav-black');
  }
});

//Sticky nav Section // 

//Sticky Fullwidth // 
var pageSection = $(".home-section");
    pageSection.each(function(indx){
        
        if ($(this).attr("data-background")){
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
    
    // Function for block height 100%
    function height_line(height_object, height_donor){
        height_object.height(height_donor.height());
        height_object.css({
            "line-height": height_donor.height() + "px"
        });
    }
    
    // Function equal height
    !function(a){
        a.fn.equalHeights = function(){
            var b = 0, c = a(this);
            return c.each(function(){
                var c = a(this).innerHeight();
                c > b && (b = c)
            }), c.css("height", b)
        }, a("[data-equal]").each(function(){
            var b = a(this), c = b.data("equal");
            b.find(c).equalHeights()
        })
    }(jQuery);
    
//Sticky Fullwidth // 

(function(){
    
    
 
    
	$(document).ready(function() {
		$(".fancybox").fancybox();
	});
    
$(".iframe").fancybox({
    'width'         : '75%',
    'height'        : '75%',
    'autoScale'     : false,
    'transitionIn'  : 'none',
    'transitionOut' : 'none',
    'type'          : 'iframe'
});    
    
    
    
    $('document').ready(function(){  
 var controller = new ScrollMagic.Controller();
 var introTl = new TimelineMax();

	    introTl
	    	.to($('#intro'), 0.2, {autoAlpha: 0, ease:Power1.easeNone})
	    	.to($('#intro'), 1.4, {y: '20%', ease:Power1.easeOut}, '-=0.2')
	    	.to($('#intro'), 0.7, {autoAlpha: 0.5, ease:Power1.easeNone}, '-=1.4');

		var introScene = new ScrollMagic.Scene({
	        triggerElement: '#intro', 
	        triggerHook: 0,
	        duration: "100%"
	    })
	    .setTween(introTl)
	    .addTo(controller);
      // .addIndicators() // add indicators (requires plugin)

        
	    // change behaviour of controller to animate scroll instead of jump
		controller.scrollTo(function (newpos) {
			TweenMax.to(window, 1, {scrollTo: {y: newpos}, ease:Power1.easeInOut});
		});

		//  bind scroll to anchor links
		$(document).on("click", "a[href^='#']", function (e) {
			var id = $(this).attr("href");
			if ($(id).length > 0) {
				e.preventDefault();

				// trigger scroll
				controller.scrollTo(id);

					// if supported by the browser we can even update the URL.
				if (window.history && window.history.pushState) {
					history.pushState("", document.title, id);
				}
			}
		});
   
});
})();
    

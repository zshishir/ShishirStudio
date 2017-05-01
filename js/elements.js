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
    

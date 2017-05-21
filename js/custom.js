
function finishLoading(){
    $('.is-showing').css('visibility','visible');
	$('.loader-content').fadeOut();
}





jQuery('document').ready(function($){
 var controller = new ScrollMagic.Controller();
        
        


      
 //var gear = $(".card"),   
var skillAnimation = new TimelineMax()
    
    skillAnimation
        .from(".card", 1,{opacity:0,  })
        
 new ScrollMagic.Scene({
    triggerElement:'#shishir',
      // start this scene after scrolling for 50px
   //  duration:'100%',
     triggerHook:0.7,
        
        
    })

       

           
        
    .setTween(skillAnimation)
     .addIndicators()
     .addTo(controller)  
    
    
});
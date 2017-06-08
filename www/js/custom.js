
function finishLoading(){
    $('.is-showing').css('visibility','visible');
	$('.loader-content').fadeOut();
}





jQuery('document').ready(function($){
 var controller = new ScrollMagic.Controller();
        
        


      

var skillAnimation = new TimelineMax()
    
    skillAnimation
        .from('.headlinecon02', .5,{opacity:0, y:-50,  ease: Power2.easeOut})
        .from('.graphicDesign', .5,{opacity:0, x:-50,  ease: Power2.easeOut})
        .from('.fontend', .5,{opacity:0, y:-50,  ease: Power2.easeOut},"-=.5")
        .from('.uxui', .5,{opacity:0, x:50,  ease: Power2.easeOut},"-=.5")
        .from('.typography', .5,{opacity:0, y:50,  ease: Power2.easeOut},"-=.5")
    
        
 new ScrollMagic.Scene({
    triggerElement:'#shishir',
      // start this scene after scrolling for 50px
   //  duration:'100%',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(skillAnimation)
     .addIndicators()
     .addTo(controller) 
    
    
    
    var portfolio = new TimelineMax()
    
    portfolio.staggerFrom('.noMerginPadding', .5,{opacity:0, ease: Power2.easeOut},0.2)
       
    
        
 new ScrollMagic.Scene({
    triggerElement:'#portfolio',
      // start this scene after scrolling for 50px
   //  duration:'100%',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(portfolio)
     .addIndicators()
     .addTo(controller)  
    
    
    
    
    
    



    var semi = new TimelineMax()
     semi
   
     .from('.aboutUs', .5,{opacity:0, x:50,  ease: Power2.easeOut}) 
     .from('.aboutUs01', .5,{opacity:0, x:-50,  ease: Power2.easeOut},"-=.5") 
    
        
 new ScrollMagic.Scene({
    triggerElement:'#semi',
      // start this scene after scrolling for 50px
   //  duration:'100%',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(semi)
     .addIndicators()
     .addTo(controller)  
    
    
    
 
    var timeline = new TimelineMax()
     timeline
   
     .from('.secone', .5,{opacity:0, x:50,  ease: Power2.easeOut}) 
     .from('.sectwo', .5,{opacity:0, x:-50,  ease: Power2.easeOut},"-=.5") 
     
    
        
 new ScrollMagic.Scene({
    triggerElement:'#timeline',
      // start this scene after scrolling for 50px
   //  duration:'100%',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(timeline)
     .addIndicators()
     .addTo(controller)     
    
    
});


jQuery('document').ready(function($){
 var controller = new ScrollMagic.Controller();
        
        


      
 //var gear = $(".card"),   
var skillAnimation = new TimelineMax()
    
    skillAnimation
        .from(".card", 1,{opacity:0,  })
        
 new ScrollMagic.Scene({
    triggerElement:'#shishir',
   // triggerHook:1,
    duration:0,    // the scene should last for a scroll distance of 100px
    offset: 400        // start this scene after scrolling for 50px
        
        
    })

       

           
        
     .setTween(skillAnimation)
       .addTo(controller);  
    
    
});
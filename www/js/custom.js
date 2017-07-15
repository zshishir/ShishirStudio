jQuery('document').ready(function($){
    
    
 var controller = new ScrollMagic.Controller();
        
 new ScrollMagic.Scene({
    triggerElement:'.biography',
     triggerHook:0
 
        
        
    })
						.setPin(".biography")
						//.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
      

var skillAnimation = new TimelineMax()
    
    skillAnimation
        .from('.headlinecon02', .5,{opacity:0, y:-50,  ease: Power2.easeOut})
        .from('.graphicDesign', .5,{opacity:0, x:-50,  ease: Power2.easeOut})
        .from('.fontend', .5,{opacity:0, y:-50,  ease: Power2.easeOut},"-=.5")
        .from('.uxui', .5,{opacity:0, x:50,  ease: Power2.easeOut},"-=.5")
        .from('.typography', .5,{opacity:0, y:50,  ease: Power2.easeOut},"-=.5")
    
        
 new ScrollMagic.Scene({
    triggerElement:'#con02',
     triggerHook:0.8
 
        
        
    })

       

           
        
     .setTween(skillAnimation)
    // .addIndicators()
     .addTo(controller) 
    
    
    
    var portfolio = new TimelineMax()
    
    portfolio
    
    .from('.headlinecon03', .5,{opacity:0, y:100,  ease: Power2.easeOut})
    .staggerFrom('.noMerginPadding', .2,{opacity:0, y:50, ease: Power2.easeOut},0.2)
       
    
        
 new ScrollMagic.Scene({
    triggerElement:'#portfolio',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(portfolio)
    // .addIndicators()
     .addTo(controller)  
    
    
    
    
    
    



    var semi = new TimelineMax()
     semi
    .from('.headlinecon04', .5,{opacity:0, y:100,  ease: Power2.easeOut})
     .from('.aboutUs', .5,{opacity:0, x:50,  ease: Power2.easeOut}) 
     .from('.aboutUs01', .5,{opacity:0, x:-50,  ease: Power2.easeOut},"-=.5") 
    
        
 new ScrollMagic.Scene({
    triggerElement:'#semi',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(semi)
   //  .addIndicators()
     .addTo(controller)  
    
    
    
 
    var timeline = new TimelineMax()
     timeline
   .from('.headlinecon05', .5,{opacity:0, y:-50,  ease: Power2.easeOut})
     .from('.secone', .5,{opacity:0, x:50,  ease: Power2.easeOut}) 
     .from('.sectwo', .5,{opacity:0, x:-50,  ease: Power2.easeOut},"-=.5") 
     .from('.secthree', .5,{opacity:0, x:-50,  ease: Power2.easeOut},"-=.5") 
    
     
    
        
 new ScrollMagic.Scene({
    triggerElement:'#timeline',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(timeline)
     //.addIndicators()
     .addTo(controller)  
    
    
    
    var contactUs = new TimelineMax()
     contactUs
   
     .from('.startaprojectTitle', .5,{opacity:0, x:50,  ease: Power2.easeOut}) 
     .from('.phone', .5,{opacity:0, y:-50,  ease: Power2.easeOut},"-=.5") 
      .from('.email', .5,{opacity:0, y:-50,  ease: Power2.easeOut},"-=.5")  
    .from('.search-container', .5,{opacity:0, x:-50,  ease: Power2.easeOut},"-=.5") 
    
        
 new ScrollMagic.Scene({
     triggerElement:'.contact-col',
     triggerHook:0.7,
        
        
    })

       

           
        
     .setTween(contactUs)
   // .addIndicators()
     .addTo(controller)   
    


    
        var fromcon = new TimelineMax()
     fromcon
   
     
     
    .staggerFrom('.fromani', .5,{opacity:0, x:-10, ease: Power2.easeOut},0.2)
        
 new ScrollMagic.Scene({
    triggerElement:'#fromcon',
     triggerHook:0.9,
        
        
    })

       

           
        
     .setTween(fromcon)
     .addTo(controller) 
    
    
    
    
});





var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true, repeat:2, repeatDelay:2}),
               tl1 = new TimelineMax();

 

//Timeline animation...
tl1.set(banner, {visibility: "visible"})
   .from(".trolley", 1.3, {x:-500, rotation:0.02, ease:Sine.easeOut})
   .from(".product1", 1, {x:-350, rotation:0.02, ease:Quad.easeOut}, "-=1")
   .from(".discount1", 1, {alpha:0, ease:Quad.easeOut, delay:.2})
   .to(".product1", 1, {x:"+=320", rotation:0.02, ease:Quad.easeOut, delay:1.5}, "fade-out")
   .to(".discount1", .5, {alpha:0, ease:Power1.easeOut, delay:1.5}, "fade-out-=.25")


   .from(".product2", 1, {x:-450, rotation:0.02, ease:Quad.easeOut}, "-=.8")
   .from(".discount2", 1, {alpha:0, ease:Quad.easeOut, delay:.2})

   .to(".product2", 1, {x:"+=320", rotation:0.02, ease:Quad.easeOut, delay:1.5}, "fade-out1")
   .to(".discount2", .5, {alpha:0, ease:Power1.easeOut, delay:1.5}, "fade-out1-=.25")

   .from(".product3", 1, {x:-450, rotation:0.02, ease:Quad.easeOut}, "-=.8")
   .from(".discount3", 1, {alpha:0, ease:Quad.easeOut, delay:.2})

   .to(".product3", 1, {x:"+=320", rotation:0.02, ease:Quad.easeOut, delay:1.5}, "fade-out2")
   .to(".discount3", .5, {alpha:0, ease:Power1.easeOut, delay:1.5}, "fade-out2-=.25")  
   
   
   .from(".txt1", 1, {alpha:0, ease:Quad.easeOut}, "-=.5")
   .from(".date", .5, {alpha:0, y:10, rotation:0.02, ease:Quad.easeOut}, "-=.5")


   .from(".warehouse_white_logo, .final_frame_bg, .slogan", .5, {alpha:0, ease:Power2.easeOut, delay:1.5})

   ;




//Add all timelines to master timeline...
masterTimeline.add([tl1]);


//after window load...
window.onload = function()
{
    masterTimeline.play();
}


//count animation duration of a timeline...
var currentDuration = tl1.duration();
console.log(currentDuration); 
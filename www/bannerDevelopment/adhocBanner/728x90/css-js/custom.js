var banner = document.getElementById('banner');

var masterTimeline = new TimelineMax({paused:true, repeat:2, repeatDelay:2}),
               tl1 = new TimelineMax(),
               tl2 = new TimelineMax();
 

//Timeline animation...
tl1.set(banner, {visibility: "visible"})
   .from(".trolley", 3, {x:-100, ease: Power0.easeNone})
   .to(".christmas, .product1, .product2, .product3", 3, {x:728, ease: Power0.easeNone}, '-=3')
   .to(".trolley", 1, {x:'+=150', ease: Power0.easeNone})

   
   .to(".christmas, .product1, .product2, .product3", 1, {alpha:0, ease:Power2.easeOut, delay:2})
   .to(".slogan", .5, {alpha:1, ease:Power2.easeOut}, "-=.3");


// tl2.to(".mountains", 4, {x:"+=400", rotation:0.02, ease:Sine.easeOut});

//Add all timelines to master timeline...
masterTimeline.add([tl1, tl2]);


//after window load...
window.onload = function()
{
    masterTimeline.play();
}


//count animation duration of a timeline...
var currentDuration = tl1.duration();
console.log(currentDuration); 
var banner = document.getElementById('banner');
var legal = document.getElementById('legal');
var overlay = document.getElementById('overlay');


var tl1 = new TimelineMax(); 
var tl2 = new TimelineMax(); 


window.onload = function() {        
    tl1.set("#banner", { visibility: "visible" }) 
	   	.to(".blur", 0.4, {y:260, ease:Power1.easeOut, delay:.3})
       	.from(".ribon", 1, {left:99, ease:Power1.easeOut},"-=1.45")
       	.from(".frame1_text1", 1.2, {top:0, ease:Power1.easeOut}, "-=1.5")
	  
       	.from(".frame1_text2", .5, {top:250,  ease:Power1.easeOut},"-=.5")
	  
  	.fromTo(".frame1_offerts", 1, {css: {top: -118}}, {css:{top: 5}} )

       .from(".bg2", 0.4, {y:-260, ease:Power1.easeOut, delay:.3},'top1')
 	.from(".frame1_text3", .4, {top:-250, ease:Power1.easeOut},'top1+=.3')
 .to(".frame1_text3", 1, {top:0, ease:Power1.easeOut},"-=.8")
	.to(".blur2", 0.4, {y:-340, ease:Power1.easeOut, delay:.3})

.from(".bg3", 0.4, {y:-260, ease:Power1.easeOut, delay:1},'top2')
 	.from(".frame1_text4", .4, {top:-250, ease:Power1.easeOut},'top2+=1')
		.to(".frame1_text4", 1, {top:0, ease:Power1.easeOut},"-=.8")
	  .to(".blur3", 0.4, {y:-340, ease:Power1.easeOut, delay:.3})
	  	
 	.to(".frame1_offerts", 0.9, {css: {top: -60}}, "+=1.2" )

	  .to(".blur3", .4, {y:-600, ease:Power1.easeOut}, "-=.2")
	 .to(".ribon", .7, {top:-150, ease:Power1.easeOut},"-=.7")
.to(".mask", .7, {top:-2, alpha:0, ease:Power1.easeOut},"-=.6")
   .from(".logo", .7, {top:100, ease:Power1.easeOut},"-=.7")
	  
 .from(".frame3_text1", 1, {alpha:0, top:80, ease:Power1.easeOut}) 
 .from(".cta", .8, {top:50,alpha:0, ease:Power1.easeOut},"-=.4")      
   .from(".legal_sym", .8, {top:30, ease:Power1.easeOut},"-=.8")
  .to(".arrow", .3, {x:3, yoyo:true, repeat:7},"-=.4")
  .to("#legal", 0.01, {display:"block", ease:Power1.easeOut},"-=.45")
 
	  
	  legal.addEventListener("mouseover",legalHover);
	  function legalHover(){
      TweenMax.to(".legal_text", .5, {left:0, ease:Power1.easeOut})
	  
	  }
	 legal.addEventListener("mouseout",legalOut);
	  function legalOut(){
      TweenMax.to(".legal_text", .5, {left:600, ease:Power1.easeIn})
	  }
     

    var currentDuration = tl1.duration();
    console.log(currentDuration);
                  
};

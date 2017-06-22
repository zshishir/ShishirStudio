var cta = document.getElementById('cta');
var units = document.getElementById('units');
var units2 = document.getElementById('units2');
// var units3 = document.getElementById('units3');
var tens = document.getElementById('tens');
var jminus = document.getElementById('jminus');
var jplus = document.getElementById('jplus');
var dday = document.getElementById('dday');
var text01 = document.getElementById('text01');
var text02 = document.getElementById('text02');
var text03 = document.getElementById('text03');
var text04 = document.getElementById('text04');
var text05 = document.getElementById('text05');
var whiter = document.getElementById('whiter');
var hashtag = document.getElementById('hashtag');
var legals_cta = document.getElementById('legals_cta');
var legals_explained = document.getElementById('legals_explained');
var countdown = document.getElementById('countdown');
var branding02 = document.getElementById("branding02");
var branding = document.getElementById("branding");
var clickableArea = document.getElementById('clickableArea');

var isLegalOpen= false;




function init(){

  var startUnitPhase1 = 0;
  var startTensPhase1 = 5;

  var endUnitPhase1 = 5;
  var endTensPhase1 = 0;  

  var startUnitPhase2 = 0;
  var startUnit2Phase2 = 1;
 // var startUnit3Phase2 = 1;
  var startTensPhase2 = 0;  

  var endUnitPhase2 = 0;
  var endUnit2Phase2 = 0;
    // var endUnit3Phase2 = 0;
  var endTensPhase2 = 1; 
    

  var time = 0;
 
  //initial setup
  TweenLite.to(units,0,{delay:time, css:{'background-position': "0px " + -startUnitPhase1*62 + "px"}});

  TweenLite.to(tens,0,{delay:time, css:{'background-position': "0px " + -startTensPhase1*62 + "px"}});
   
    
    
  TweenLite.to(dday,0,{delay:time, css:{opacity:0}});

     TweenLite.to(units2,0,{delay:time, css:{opacity:0}});
     // TweenLite.to(units3,0,{delay:time, css:{opacity:0}});
  TweenLite.to(jplus,0,{delay:time, css:{'opacity':0}});
  // TweenLite.to(holderdays,0,{delay:time, css:{'left':300, 'opacity':0}});
  // TweenLite.to(holderdays,0,{delay:time, css:{'opacity':0}});
  TweenLite.to(text01,0,{delay:time, css:{'opacity':0}});
  TweenLite.to(text02,0,{delay:time, css:{'opacity':0}});
  TweenLite.to(text03,0,{delay:time, css:{'opacity':0}});

     TweenLite.to(branding02,0,{delay:time, css:{opacity:0}});
  time+=0.5;
     

  //scroll to the left the countdown
  TweenLite.to(holderdays,.5,{delay:time, css:{'left':0, 'opacity':1}});
 
  time+=0.1;
  //countdown to 1
  
    
    
  TweenLite.to(units,1,{delay:time, css:{'background-position': "0px " + (50-endUnitPhase1)*62 + "px"}, ease:Sine.easeInOut});
  TweenLite.to(tens,1,{delay:time, css:{'background-position': "0px " + -endTensPhase1*62 + "px"}, ease:Sine.easeInOut});  

  time+=3.0;
  //replace count down with Jour J
  // TweenLite.to(dday,.5,{delay:time, css:{'top':0}, ease:Linear.easeInOut});
  // TweenLite.to(jminus,.5,{delay:time, css:{'top':100}, ease:Linear.easeInOut});
  // TweenLite.to(jminus,.5,{delay:time, css:{'opacity':0}, ease:Linear.easeInOut});
  // TweenLite.to(countdown,.5,{delay:time, css:{'opacity':0}, ease:Linear.easeInOut});
  // TweenLite.to(countdown,.5,{delay:time, css:{'top':100}, ease:Linear.easeInOut});


  // time+=0.5;
  //first text fades in
  TweenLite.to(text01,.5,{delay:time-1.5 , css:{'opacity':1}});

  time+=2.0;
  //first text fades out
  TweenLite.to(text01,.5,{delay:time, css:{'opacity':0}});


  TweenLite.to(holderdays,.5,{delay:time, css:{'opacity':0}});

  time+=0.5;
  TweenLite.to(dday,.5,{delay:time, css:{opacity:1}});


  time+=1;
  // TweenLite.to(text01,.5,{delay:time, css:{'opacity':0}});
  TweenLite.to(text02,.5,{delay:time, css:{'opacity':1}});

  time+=2;
  TweenLite.to(text02,.5,{delay:time, css:{'opacity':0}});
  TweenLite.to(dday,.5,{delay:time, css:{'opacity':0}});
 

  time+=0.5;
TweenLite.to(units2,0,{delay:time, css:{opacity:1 }});
    // TweenLite.to(units3,0,{delay:time, css:{opacity:1}});

  TweenLite.to(countdown,0,{delay:time, css:{opacity:1, left:130}});  
  TweenLite.to(jplus,0,{delay:time, css:{'opacity':1}});
  TweenLite.to(jminus,0,{delay:time, css:{'opacity':0}});
  
    
    
     TweenLite.to(tens,0,{delay:time, css:{'background-position': "0px " + -startTensPhase2*62 + "px"}});
  TweenLite.to(units,0,{delay:time, css:{'background-position': "0px " + -startUnitPhase2*62 + "px"}}); 
    

TweenLite.to(units2,0,{delay:time, css:{'background-position': "0px " + -startUnit2Phase2*62 + "px"}});
// TweenLite.to(units3,0,{delay:time, css:{'background-position': "0px " + -startUnit3Phase2*62 + "px"}});

  TweenLite.to(holderdays,.5,{delay:time, css:{'opacity':1}});


  time+=0.1;
    

    
    
     TweenLite.to(units,1,{delay:time, css:{'background-position': "0px " + (endUnitPhase2-60)*62 + "px"}, ease:Sine.easeInOut}); 
     
      TweenLite.to(tens,1,{delay:time, css:{'background-position': "0px " + -endTensPhase2*62 + "px"}, ease:Sine.easeInOut});  
    
  TweenLite.to(units2,1,{delay:time, css:{'background-position': "0px " + (endUnit2Phase2-60)*62 + "px"}, ease:Sine.easeInOut}); 
      // TweenLite.to(units3,1,{delay:time, css:{'background-position': "0px " + (endUnit3Phase2-80)*62 + "px"}, ease:Sine.easeInOut});
    
  time+=3;

    
  TweenLite.to(text03,.5,{delay:time-1.5, css:{'opacity':1}});

  time+=2;

  TweenLite.to(text03,.5,{delay:time, css:{'opacity':0}});
  TweenLite.to(holderdays,.5,{delay:time, css:{'opacity':0}});
  time+=0.5;
     TweenLite.to(branding,0,{delay:time, css:{opacity:0}});
         TweenLite.to(branding02,0,{delay:time, css:{opacity:1}});
  TweenLite.to(whiter,1,{delay:time, css:{opacity:0.8},ease:Sine.easeInOut})
  time+=0.5;
  TweenLite.to(hashtag,0.65,{delay:time,css:{opacity:0.8},ease:Sine.easeInOut})


  time+=0.5;
  TweenLite.to(text04,0.65,{delay:time,css:{opacity:1},ease:Sine.easeInOut})

  time+=2.5;
  TweenLite.to(text04,0.65,{delay:time,css:{opacity:0},ease:Sine.easeInOut})

  time+=0.5;
  TweenLite.to(text05,0.65,{delay:time,css:{opacity:1},ease:Sine.easeInOut})

  time+=1;
  TweenLite.to(cta,0.65,{delay:time,css:{opacity:1},ease:Sine.easeInOut})

  time+=1;
  TweenLite.to(legals_cta,0.5,{delay:time,css:{autoAlpha:1},ease:Sine.easeInOut,onComplete:addAllEvents})

}


function addAllEvents(){
    legals_cta.addEventListener("mouseover", displayLegal);
    legals_cta.addEventListener("click", displayLegal);
}

function displayLegal(){
  console.log("OIIIIIIIIII")

  if (isLegalOpen == false){
    legals_cta.addEventListener("mouseout", hideLegal);
    TweenLite.to(legals_explained,0.2,{delay:0,css:{autoAlpha:1},ease:Power0.easeOut,overwrite:1})
    isLegalOpen = true;
  } else {
     legals_cta.removeEventListener("mouseout", hideLegal);
      hideLegal();
  }
    
}

function hideLegal(){
    TweenLite.to(legals_explained,0.2,{delay:0,css:{autoAlpha:0},ease:Power0.easeOut})
        isLegalOpen = false;



}

clickableArea.addEventListener("click", bannerClicked);

function bannerClicked(){
window.open(window.clickTag);
  hideLegal();
}

init();
/* OWN STUFF


  */
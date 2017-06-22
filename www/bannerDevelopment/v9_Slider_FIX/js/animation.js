//adDebug.info("animation.js has loaded");

var desktopTl = new TimelineMax({ paused:true});
var mobileTl = new TimelineMax({paused:true});

var disclaimer_txt = document.getElementById("disclaimer_txt");
var disclaimer = document.getElementById("disclaimer");
var close = document.getElementById("close");
var sliderObject = document.getElementById("slider");
var handBtn = document.getElementById("handBtn");
var replay = document.getElementById("replay");
var bgExit = document.getElementById('clickTag1');
var h1= document.getElementById('header1');
var h2= document.getElementById('header2');
var h3= document.getElementById('header3');
var h4= document.getElementById('header4');
var h5= document.getElementById('header5');
var source1= document.getElementById('source1');
var source2= document.getElementById('source2');
var wBlk= document.getElementById('wBlk');

var disclaimerState = true;
var debug = false;
var checked = false;
var checkedFirst = false;
var checkedSecond = false;
var checkedFourth = false;

var loopCount = 0;
var vdChk; 

//Stop animation from pausing when browser tab not visible
TweenLite.ticker.useRAF(false);
TweenMax.lagSmoothing(0);  

//Listeners
replay.addEventListener("click", replayFunction);
bgExit.addEventListener('click', bgExitHandler, false);
sliderTxt.addEventListener('click', speedUp);

function bgExitHandler (e) {
	//Call Exits
	Enabler.exit('HTML5_Background_Clickthrough');
	console.log("Clicked Through");

	pauseAll();
	myVideo.currentTime = 17;
	loopCount = 2

	//opacity out elements:
	TweenMax.to([sliderObject,sliderTxt, handBtn, h1, h2, h3, h4], .25, {opacity:0},0 );
	TweenMax.to([ctaMask, h5, replay], 0.25, {opacity:1},0);

}

clickTag1.addEventListener("mouseover", function (){
	TweenMax.fromTo(goBtn, 0.5, {scale:0.8, repeat:3, yoyo:true},{scale:0.6, repeat:3, yoyo:true});
});

//Buttons
$(handBtn).mouseover(function(){
	TweenMax.to(handBtn, 0.15,{opacity:0, display:"none"});
});
$(handBtn).mouseover(function(){
	TweenMax.to(handBtn, 0.15,{opacity:0, display:"none"});
});
$(replay).mouseover(function(){
	TweenMax.to(replayImg, 0.5,{rotation:"-360deg"});
});
$(replay).mouseover(function(){
	TweenMax.to(replayImg, 0.5,{rotation:"0deg"});
});


// Initiate Animation
function initAnimation() {
	adDebug.log("initAnimation");
	setAnimation();
}

//Timeline set
function setAnimation() {

	console.log("SET ANIMATION");

	checked = false;
	checkedFirst = false;
	checkedSecond = false;
	checkedFourth = false;

	pauseAll();
	myVideo.playbackRate = 1;
	myVideo.currentTime = 0;
	TweenMax.set(myVideo, {opacity:0});

	TweenMax.set(goBtn, {scale:0.5, opacity:0});
	TweenMax.set(ctaMask, {opacity:0});
	TweenMax.set(h1, {width:300, height:250, x:0, y:0, opacity:1});
	TweenMax.set(h2, {opacity:0});
	TweenMax.set(h3, {opacity:0});
	TweenMax.set(h4, {width:16990,  top:-3243, left: -8217, alpha:1});
	TweenMax.set(h5, {opacity:0});

	TweenMax.set(bg, {scale:1, x:0, y:0, opacity:0});

	mcDisplay(sliderObject, false);

	playAnimation();
}

function playAnimation() {

	console.log("PLAY ANIMATION");

	console.log(mobileDetected);

	if (mobileDetected == true) {

		initMobileTl();
		mobileTl.play();

	} else {

		initdesktopTl();
		desktopTl.play();
		myVideo.play();

	}	
} 

// Mobile Timeline
function initMobileTl() {

	//mobileTl.to(h1, 0.25, {opacity:1, ease:Quad.easeInOut},0);
	mobileTl.to(bg, .5, {opacity:1});

	TweenMax.to(bg, 9.75, {scale:1.5, delay:2.5, x:20, y:35, ease:Linear.easeNone});
	TweenMax.to(bg, 1, {scale:1, delay:11.25, x:0, y:0, ease:Quad.easeIn});
	
	mobileTl.to(h1, 1, {width:30000, height:12500, x:-13600, y:-3200, ease:Power4.easeIn, delay:2});

	mobileTl.to(h2, .5, {opacity:1, ease:Quad.easeInOut});
	mobileTl.to(h2, .25, {opacity:0, ease:Quad.easeInOut, delay:3.25});

	mobileTl.to(h3, .25, {opacity:1, ease:Quad.easeInOut, delay:.25});
	mobileTl.to(h3, .25, {opacity:0, ease:Quad.easeInOut, delay:3.25});

	mobileTl.to(h4, 0.25, {width:300, width:250, left:0, top:0, ease:Power4.easeOut, delay:-.25});
	mobileTl.to(h5, 0.5, {opacity:1, ease:Quad.easeInOut, delay:2});
	mobileTl.to(h4, 0.25, {opacity:0, ease:Quad.easeInOut});

	mobileTl.to([ctaMask, goBtn, replay], 0.5, {opacity:1, ease:Quad.easeInOut});
	mobileTl.fromTo(goBtn, 0.5, {scale:0.6, repeat:4, yoyo:true, ease:Quad.easeInOut},{scale:0.8, repeat:4, yoyo:true, ease:Quad.easeInOut},14.5);
	mobileTl.to([ctaMask, bg], .5, {opacity:0, ease:Quad.easeInOut, delay:4, onComplete:loopAd});

}

//Desktop timeline

function initdesktopTl() {

	console.log("DESKTOP");

	controlVid();
	//vdChk = setTimeout(videoLoop, 25);

	$('#slider').slider('value',  "50" );
	myVideo.addEventListener("timeupdate", controlSliderDisplay);

	//desktopTl.to(h1, 0.25, {opacity:1, ease:Quad.easeInOut},0);
	desktopTl.to(myVideo, .25, {opacity:1, scale:1,  ease:Quad.easeInOut}); //onComplete:playTheVideo,
	
	desktopTl.to(h1, 1, {width:30000, height:12500, x:-13600, y:-3200, ease:Power4.easeIn, delay:2, onStart:mcDisplay, onStartParams:[sliderObject, true]});

	desktopTl.to(h2, .5, {opacity:1, ease:Quad.easeInOut});
	desktopTl.to(h2, .25, {opacity:0, ease:Quad.easeInOut, delay:3.25});
	
	desktopTl.to(h3, .25, {opacity:1, ease:Quad.easeInOut, delay:.25});
	desktopTl.to(h3, .25, {opacity:0, ease:Quad.easeInOut, delay:3.25});

	desktopTl.to([sliderObject,sliderTxt], .25, {opacity:0, onComplete:mcDisplay, onCompleteParams:[sliderObject, false]});

	desktopTl.to(h4, 1, {width:300, left:0, top:0, ease:Power4.easeOut, delay:-.25});
	desktopTl.to(h5, 0.5, {opacity:1, ease:Quad.easeInOut, delay:2});
	desktopTl.to(h4, 0.25, {opacity:0, ease:Quad.easeInOut});

	desktopTl.to([ctaMask, goBtn, replay], 0.5, {opacity:1, ease:Quad.easeInOut});
	desktopTl.fromTo(goBtn, 0.5, {scale:0.6, repeat:4, yoyo:true, ease:Quad.easeInOut},{scale:0.8, repeat:4, yoyo:true, ease:Quad.easeInOut},14.5);
	desktopTl.to([ctaMask], .5, {opacity:0, ease:Quad.easeInOut, delay:4, onComplete:loopAd});
			
}

function mcDisplay(_mc, _bol){
	if(_bol){
		_mc.style.display = "block";
	} else {
		_mc.style.display = "none";
	}
}

//Control video
function playTheVideo() {
	myVideo.playbackRate = 1;
	myVideo.play();
}
function pauseVideo() {
	myVideo.pause();
}
function speedUp(){
	myVideo.playbackRate+=.1;
	myVideo.removeEventListener("timeupdate", controlSliderDisplay);

	TweenMax.killTweensOf(handBtn);
	handBtn.style.display = "none";

	$('#slider').slider('value',  myVideo.playbackRate*25, "animate", "slow" );
}


//Control the slider
//Automatic
function controlSliderDisplay(){

	if(myVideo.currentTime >= 3.5 && !checked){

		myVideo.playbackRate = 2;

		TweenMax.to([sliderObject,sliderTxt], .5, {opacity:1});
		TweenMax.to(handBtn, 0.5, {opacity:1, display:"block", repeatDelay:1.5, repeat:1, yoyo:true});
		TweenMax.to(source1, 0.5, {opacity:1});

		checked = true;

	} else if(myVideo.currentTime >= 9.5 && !checkedFirst){

		myVideo.playbackRate = 0.75;

		TweenMax.to(handBtn, 0.125, {display:"none"});
		TweenMax.to(source1, 0.5, {opacity:0});
		TweenMax.to(source2, 0.5, {opacity:1, delay:-0.5});

		$('#slider').slider('value',  myVideo.playbackRate*25 );

		checkedFirst = true;
		console.log(myVideo.playbackRate);	

	} else if(myVideo.currentTime >= 12 && !checkedFourth){

		myVideo.playbackRate = 2;

		$('#slider').slider('value',  myVideo.playbackRate*25, "animate", "slow" );

		TweenMax.to(source2, 0.5, {opacity:0});
		checkedFourth = true;

	} else if(myVideo.currentTime >= 13 && !checkedSecond){

		myVideo.playbackRate =1;

		checkedSecond = true;
		
	}
		
}

//User initiated
//Slider setup & control
function controlVid() {

	$('#slider').slider({
            range: "min",
            min: 0,
            max: 100,
            value:10,
            animate: "fast" });

	myVideo.addEventListener("canplaythrough", function () { 
		video = this;
	});

	$('#slider').on( "slide", function( event, ui ) {
		myVideo.removeEventListener("timeupdate", controlSliderDisplay);
		myVideo.playbackRate = ui.value/25;
	});

    // myVideo.addEventListener("timeupdate", function () {
    // 	//$('#slider').slider('value', myVideo.playbackRate);
    // });

};

//Replay Ad
function replayFunction(){

	loopCount = 1
	TweenMax.to([ctaMask, goBtn, myVideo, replay, handBtn, sliderObject, sliderTxt], 0, {opacity:0});
	TweenMax.delayedCall(.5, setAnimation);

	console.log("Replay");	
}

// LOOP AD

function loopAd() {

	loopCount++;
	pauseAll();
	TweenMax.delayedCall(1, setAnimation);

	adDebug.log('loopCount = ' + loopCount);
}

function pauseAll() {

	myVideo.pause();
	desktopTl.pause();

	desktopTl.clear();
	mobileTl.clear();
	
	desktopTl.eventCallback("onComplete", null);
	mobileTl.eventCallback("onComplete", null);

}

/*
function displayLegalTxt() {
	adDebug.log("Ligal display");

	if(disclaimerState == true) {
		//adDebug.log("display legal is true - displayLegal");
		TweenMax.to(disclaimer, 0.4, {opacity:0, display:'none'},0);
		TweenMax.to(close, 0.4, {opacity:1, display:'block'},0);		
		TweenMax.to(disclaimer_txt, 0.4, {opacity:1},0);
		disclaimerState = false;
	} else {
		TweenMax.to(disclaimer, 0.4, {opacity:1, display:'block'},0);
		TweenMax.to(close, 0.4, {opacity:0, display:'none'},0);	
		TweenMax.to(disclaimer_txt, 0.4, {opacity:0},0);
		disclaimerState = true;
	}
} 
*/
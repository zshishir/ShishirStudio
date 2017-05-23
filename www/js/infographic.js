// Selector
function Id(selector){
	return document.querySelector(selector);
}

function $$(selector){
	return document.querySelectorAll(selector);
}



var slideSelector = '.slide';
var slides = $$(slideSelector);
var totalSlide = slides.length;
var activeSlide = 1;
var autoPageTransition;
var transitionDuration = 1;
var slideDuration = 15000;
var slideWidth = 1024;
var nav = $$('.carouselnav li');
var tl1, tl2;
var allTimeLine;
var smoke = $("#smoke circle, #smoke path");
var gear = $("#gear1, #gear2, #gear3, #gear4, #gear5");
var transitionType = {
	1: 'fade-out',
	2: 'fade-out',
	3: 'scroll-left',
	4: 'fade-out',
	5: 'scroll-left',
	6: 'fade-out',
	7: 'scroll-left',
	8: 'fade-out',
	9: 'scroll-left',
	10: 'fade-out',
	11: 'fade-out',
}

var slideDurationArr = {
	1: 23000,
	2: 13000,
	3: slideDuration,
	4: 11000,
	5: 13000,
	6: 24000,
	7: 9000,
	8: 9000,
	9: 13000,
	10: 21000,
	11: slideDuration,
}


function pageLoadHandler(){
	// loader disable
	Id('.loader').style.display = 'none';
	// start slider
	sliderInit();
}

function sliderInit(){
	pageAnimationDefinition();


	TweenMax.set(slides, { opacity: 0});
	TweenMax.set(slides[activeSlide-1], { opacity: 1});

	runPageAnimation();

	autoPageTransition =  setInterval(function(){
	    slideTransition();
	}, slideDurationArr[activeSlide]);
}


function slideTransition(target){
	

	// get current & next slide
	var currentSlide = activeSlide;
	if(target === undefined){
		activeSlide = (activeSlide+1> totalSlide) ? 1: activeSlide+1;
	}else {
		activeSlide = target;
	}

	if(currentSlide == activeSlide){
		return false;
	}

	clearInterval(autoPageTransition);
	var CurrentWrapperWidth = $('.wrapper').offsetWidth;

	// prepare & transition
	if(transitionType[activeSlide]==='fade-out'){
		TweenMax.set(slides[activeSlide-1], { opacity: 0, x: 0});

		TweenMax.to(slides[activeSlide-1],  transitionDuration, { opacity: 1, onComplete: runPageAnimation});
		TweenMax.to(slides[currentSlide-1],  transitionDuration, { opacity: 0});

	}else {
		TweenMax.set(slides[activeSlide-1], { opacity: 1, x: CurrentWrapperWidth});

		TweenMax.to(slides[activeSlide-1],  transitionDuration, { x: 0, onComplete: runPageAnimation });
		TweenMax.to(slides[currentSlide-1],  transitionDuration, { x: -CurrentWrapperWidth});
	}

	TweenMax.set(slides, { 'z-index': 0});
	TweenMax.set(slides[currentSlide-1], { 'z-index': 1});
	TweenMax.set(slides[activeSlide-1], { 'z-index': 2});

	// set active navigation
	nav[currentSlide-1].classList.remove('is-active');
	nav[activeSlide-1].classList.add('is-active');


	autoPageTransition =  setInterval(function(){
	    slideTransition();
	}, slideDurationArr[activeSlide]);
}


// Page Animation Defination
function pageAnimationDefinition(){
	// slide1
	tl1 = new TimelineMax();
	tl1.pause();
    
     tl1.staggerFromTo(smoke, 1, {opacity:1,scale: 0}, {scale: 1}, 0.1, "begin")
    tl1.staggerFromTo(smoke, 1, {opacity: 0.6, y: 10}, {opacity: 0,y: -80,repeat: -1,repeatDelay: -2,ease: Circ.easeOut}, 0.1, "begin")
    tl1.to(gear, 1, {transformOrigin: "50% 50%",rotation: 360,repeat: -1,ease: Linear.easeNone}, 0.1, "begin") ;
    tl1.from('#slideTxt01', 2,{opacity:0, y:-50}, 0.1, "begin");
	//tl1.to('.slide1-jump', 3, { scale: 1, y: 100},'a');
	//tl1.to('.slide1-bg', 6, { scale: 2.1, ease: Bounce.easeOut});
	//tl1.add(slideTransition, 5.5); 
    
   // tl1.from('.cloud', 1, {alpha: 0});
	//tl1.to('.rocket-wrapper', 3, { y: -400, ease:Expo.easeIn });
	//tl1.to('.cloud', 3, { attr:{ cy: 185}, ease:Expo.easeIn }, "-=3");
	//tl1.set('.cloud', {clearProps:"all"});
	//tl1.set('.rocket-wrapper', { y: 450 });
	//tl1.to('.rocket-wrapper', 4, { y:0, ease:Elastic.easeOut.config(0.5, 0.4) });
	//tl1.to('.trail-wrapper', 2.5, { scaleX:0.5, scaleY:0, alpha:0, ease:Expo.easeOut }, "-=2.0");
//tl1.add(slideTransition, 2.5); 
	
    // Slide2
	tl2 = new TimelineMax();
	tl2.pause();
       tl2.to('.rocket', 20,{opacity:1, x:-800, y:-900, ease: Power1.easeIn});
	//tl2.fromTo('.slide2-selected-country',.5, { opacity: 0}, { opacity: 1, delay: .5});
	//tl2.fromTo(['.slide2-selected-country-name', '.slide2-selected-red'],1, { opacity: 0}, { opacity: 1});
	//tl2.from('#rocket', 3, { opacity: 1});
    //tl2.from('.rocket', 1,{opacity:0, y:-50});
	//tl2.from('.slide2-content', .5, { opacity: 0, x: 100, ease: Power2.easeOut});

	// Slide3
	//tl3 = new TimelineMax();
	//tl3.pause();
	//tl3.to('.slide3-bg-mask', .5, { opacity: 0, yoyo: true, repeat: -1, ease: Power0.easeNone}, 'slide3');
	//tl3.from('.slide3-pie-chart', .5, { scale: 0}, 'slide3+=1');
	//tl3.from('.slide3-pie-chart-heart', .5, { scale: 0}, 'slide3+=1.5');
	//tl3.from('.slide3-content1', .5, { opacity: 0}, 'slide3+=2')
	//tl3.to(['.slide3-pie-chart','.slide3-pie-chart-heart','.slide3-content1'],1, { opacity: 0}, 'slide3+=5');
	//tl3.to(['.slide3-bg-mask', '.slide3-bg'], 2, { scale: 1.65, x: '-25%', y: '-31%'}, 'slide3+=5');
	//tl3.from('.slide3-pie-chart2', .5, { scale: 0}, 'slide3+=7');
	//tl3.from('.slide3-content2 .content-title', .5, { scale: 0, x: 50}, 'slide3+=7.5');
	//tl3.from('.slide3-content2 .content-copy', .5, { scale: 0, x: 50}, 'slide3+=8');

	// Slide4
	//tl4 = new TimelineMax();
	//tl4.pause();
	//tl4.from('.slide4-pie-chart', 1, { opacity: 0, x: -50, delay: 0.5 });
	//tl4.from('.slide4-pie-chart-arrow', 1, { scale: 0, delay: 0.25});
	//tl4.staggerFrom(['.slide4-content .slide4-copy1', '.slide4-content .content-title'], 1, { opacity: 0, y: -100, ease: Power2.easeOut},1);
	//tl4.from('.slide4-content .slide4-copy2', 1, { opacity: 0, delay:.25});

	// Slide5
	//tl5 = new TimelineMax();
	//tl5.pause();
	//tl5.from('.slide5-content', .5, { opacity: 0, x: 100}, "slide5");
	//tl5.from('.slide5-pie-chart', .5, { scale: 0});
	//tl5.from(['.slide5-content .slide5-copy1', '.slide5-content .slide5-copy2', '.slide5-content .content-title'], .8, { opacity: 0});
	//tl5.staggerTo(['.slide5-leaf1','.slide5-leaf4','.slide5-leaf2','.slide5-leaf5','.slide5-leaf3'], 8, { top: '95%', rotation: 360, ease: Power1.easeIn},3, "slide5");

	// Slide6
	//tl6 = new TimelineMax();
	//tl6.pause();
	//tl6.from('.slide6-header', 1 , { opacity: 0});
	//tl6.staggerFrom(['.slide6-cloud1','.slide6-cloud2','.slide6-cloud3','.slide6-cloud4'], .8, { scale: 0}, 1.6);
	//tl6.staggerTo(['.slide6-cloud1','.slide6-cloud2','.slide6-cloud3','.slide6-cloud4'], .5, { scale: 0, delay: 2.8}, 0);
	//tl6.staggerFrom(['.slide6-cloud5','.slide6-cloud6','.slide6-cloud7','.slide6-cloud8'], .8, { scale: 0, delay: .5}, 1.6);
	//tl6.staggerTo(['.slide6-cloud5','.slide6-cloud6','.slide6-cloud7','.slide6-cloud8'], .5, { scale: 0, delay: 2.8}, 0);
	//tl6.to('.slide6-header', .5 , { opacity: 0});
	//tl6.from(['.slide6-pie-chart','.slide6-pie-chart-inner'], 1, { scale: 0}, 'slide6');
	//tl6.to('.slide6-pie-chart', 1, { rotation: 180}, 'slide6+=1');
	//tl6.from('.slide6-content', 1, { opacity: 0, x: 100}, 'slide6');

	// Slide7
	//tl7 = new TimelineMax();
	//tl7.pause();
	//tl7.from('.slide7-content', .5, { opacity: 0, x: -100, delay: .5});
	//tl7.from('.slide7-pie-chart', 1, { opacity: 0, x: -100, rotation: 360});
	//tl7.from(['.slide7-content .content-title', '.slide7-content .content-copy'], .5, { opacity: 0});

	// Slide8
	//tl8 = new TimelineMax();
	//tl8.pause();
	//tl8.from('.slide8-pie-chart', 1 , {scale: 0}, 'slide8');
	//tl8.from('.slide8-content', 1 , {y: -100, opacity: 0,  ease: Bounce.easeOut});
	//tl8.to('.slide8-bg-cloud', 15, { x: '-30%'}, 'slide8');

	// Slide9
	//tl9 = new TimelineMax();
	//tl9.pause();
	//tl9.staggerFrom(['.slide9-content','.slide9-pie-chart','.slide9-content .content-copy','.slide9-content .content-title'], .7,  {y: -100, opacity: 0,  ease: Bounce.easeOut, delay: .5},.7 );

	// Slide10
	//tl10 = new TimelineMax();
	//tl10.pause();
	//tl10.from('.content-header', 1, { opacity: 0});
	//tl10.staggerFrom($$('.slide10-list-item i'), .5, { opacity: 0, x: -50}, 2, 'slide10');
	//tl10.staggerTo($$('.slide10-list-item .mask'), 1.5, { width: 0}, 2, 'slide10+=.5');

	// Slide11
	//tl11 = new TimelineMax();
	//tl11.pause();
	//tl11.staggerFrom($$('.slide11-list-item'), 1, {opacity: 0}, 3, "slide11")
	//tl11.staggerFrom($$('.slide11-list-item i'), 1, { scale: 0, ease: Back.easeOut.config(3)}, 3, "slide11+=1");
	//tl11.staggerFrom($$('.slide11-list-item p'), 1, { opacity: 0}, 3, "slide11+=2");
	//tl11.staggerFrom($$('.slide11-list-item a'), 1, { opacity: 0}, 3, "slide11+=2");


	allTimeLine = [tl1, tl2];
}

// Run Page Animation
function runPageAnimation(){

	for(var i = 0; i< allTimeLine.length; i++){
		if( allTimeLine[i] &&  !allTimeLine[i].paused()){
			allTimeLine[i].pause();
			allTimeLine[i].seek(0);
		}
	}

	switch(activeSlide) {
	
	     case 1:
	        tl1.play();
	        break;
	    case 2:
	        tl2.play();
	        break;


	}
}


// nav bullet click bind
for(var i = 0; i< totalSlide; i++){
	(function(index){
        nav[i].addEventListener('click', function(i){
			slideTransition(index+1);
		});   
    })(i);
}

// nav next click bind 
Id('.go-after').addEventListener('click', function(){
	var nextSlide = (activeSlide+1> totalSlide) ? 1: activeSlide+1;
	slideTransition(nextSlide);
});

// nav previous click bind 
Id('.go-before').addEventListener('click', function(){
	var nextSlide = (activeSlide-1< 1) ? totalSlide: activeSlide-1;
	slideTransition(nextSlide);
});

// page load bind
window.addEventListener('load',pageLoadHandler);

window.onload = function() {   
    startAnimation();
};
function getElm(elmId){
    return document.getElementById(elmId);
}

function setAnimation(elm,anim,delay){
    setTimeout(function(){ getElm(elm).style.animation = anim;}, delay);
    setTimeout(function(){ getElm(elm).style.WebkitAnimation = anim;}, delay);
}

function startAnimation() {
	//	First Frame
    setAnimation("first-frame-img","first-frame-anim 0s ease both", 0);
	
    setAnimation("first-frame-img","rightBack 0.5s ease both", 2500);
	setAnimation("txt1","leftBack 0.5s ease both", 2500);
	
	//	Second Frame
    setAnimation("second-frame-img","fromRight 0.8s ease both", 2700);
	setAnimation("txt2","fromLeft 0.8s ease both", 2700);
	
	setAnimation("second-frame-img","rightBack 0.6s ease both", 5500);
	setAnimation("txt2","leftBack 0.6s ease both", 5500);
	
	//	Third Frame	
	setAnimation("txt3","fromLeft 0.8s ease both", 5700);
	setAnimation("txt3-3","fromLeft 0.8s ease both", 5700);
	setAnimation("third-frame-img","device-fromRight 0.8s ease both", 5700);
		
	setAnimation("txt3","leftBack 0.6s ease both", 9000);
	setAnimation("txt3-3","leftBack 0.6s ease both", 9000);
		
	// Last Frame 
	setAnimation("last-frame","fromLeft 0.8s ease both", 9200);
	setAnimation("last-frame-2","fromLeft 0.8s ease both", 9700);
	
	setAnimation("cta","fromRight 0.6s ease both", 10200);
}

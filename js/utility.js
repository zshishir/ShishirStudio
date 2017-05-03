
//
var isIE = false,
	IEversion;
if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
	isIE = true;
	IEversion = new Number(RegExp.$1);
}

var isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent);
var isAndroid = /Android/i.test(navigator.userAgent);

if(isMacLike){
    $('html').classList.add('is-mac-or-ios');
}

if(isAndroid){
    $('html').classList.add('is-android');
}



/*function adjustAndResize(){
	var sliderHeight, sliderWidth, windowHeight, windowWidth, heightRatio, widthRatio, scaleValue, calcValue, wrapper, wrapperMarginLeft, content, contentHeight;

	wrapper 	 = $('.wrapper');
	content = $('.content');
	contentHeight = 638;
	sliderHeight = 768;
    sliderWidth  = 1024;
    windowHeight = window.innerHeight;
    windowWidth  = window.innerWidth;
    scaleValue   = 1;

    if( (windowWidth >  sliderWidth) && (windowHeight > sliderHeight ) ){
    	
    	
    	var contentWidth = sliderWidth;
    	var headerFooterHeight = 130;
    	windowHeight = windowHeight - headerFooterHeight;

    	heightRatio  = windowHeight/contentHeight;
    	widthRatio   = windowWidth/contentWidth;

    	calcValue 	 = (heightRatio < widthRatio) ?  heightRatio : widthRatio;
    	if(typeof calcValue == 'number') {
	    	scaleValue = calcValue;
	    }

	    var contentHeightAdjust = parseInt( contentHeight * scaleValue);
		var mainHeightAdjust = contentHeightAdjust + headerFooterHeight;
		var mainWidthAdjust = parseInt( contentWidth * scaleValue);
		
		TweenMax.set(wrapper, { width: mainWidthAdjust, height: mainHeightAdjust, transform: 'initial'});
		TweenMax.set(content, { height: contentHeightAdjust});
		
		wrapperMarginLeft = Math.round( (window.innerWidth - $(".wrapper").offsetWidth)/2);
    	TweenMax.set(wrapper, { marginLeft: wrapperMarginLeft});
    }else {
    	heightRatio  = windowHeight/sliderHeight;
	    widthRatio   = windowWidth/sliderWidth;
	    scaleValue   = 1;
	    calcValue 	 = (heightRatio < widthRatio) ?  heightRatio : widthRatio;

	    if(typeof calcValue == 'number') {
	    	scaleValue = calcValue;
	    }

	    wrapperMarginLeft = Math.round( (windowWidth - sliderWidth*scaleValue)/2 );
	    TweenMax.set(content, { height: contentHeight});
		TweenMax.set(wrapper, {width:sliderWidth, height: sliderHeight, scale: scaleValue, marginLeft: wrapperMarginLeft});
    }

}


adjustAndResize();
window.addEventListener('resize',adjustAndResize);




*/














// SVG animation 
function SvgAnimation(settings){
    this.svg            = $(settings.elem);
    this.increaseBy     = settings.increaseBy !== undefined ? settings.increaseBy : 5;
    this.timeout        = settings.timeout !== undefined ? settings.timeout : 1;
    this.reverse        = settings.reverse !== undefined ? settings.reverse : false;

    this.currentPath    = 1;
    this.totalPath      = 0;

    this.init();
}

SvgAnimation.prototype.animate = function(callback) {
    ( typeof(callback) == 'function' ) ? this.runAnimation(callback) : this.runAnimation();
}

SvgAnimation.prototype.init = function(){
    var reseve = this.reverse;
    var allPath = this.svg.querySelectorAll('path');

    for(var i = 0; i< allPath.length; i++ ){
    	var path = allPath[i],
            // $path = allPath[i],
            pathLength = allPath[i].getTotalLength();

            path.setAttribute('stroke-dasharray', pathLength+' '+pathLength);
            path.setAttribute('stroke-dashoffset', ((reseve===true) ? -pathLength : pathLength));
    }
}

SvgAnimation.prototype.runAnimation = function(callback){
    this.totalPath = this.svg.find('path').length;

    var settings = {
        currentPath : this.currentPath,
        totalPath : this.totalPath,
        pathElem : this.svg.find('path:eq('+ (this.currentPath-1) +')')
    };

    this.pathAnimation(callback, settings);
}

SvgAnimation.prototype.pathAnimation = function(callback, settings){

    var _this       = this,
        self        = settings.pathElem,
        counter     = parseFloat(self.attr('stroke-dashoffset')),
        increaseBy  = this.increaseBy,
        timeout     = setInterval(function(){
            if ( counter >= 0 ) {
                clearInterval(timeout);
                if( typeof(callback) == 'function' ) callback.call( this, { obj: self, current: settings.currentPath, total: _this.totalPath } );

                settings.currentPath++;
                if( settings.currentPath <= _this.totalPath ) {
                    var nextSettings = {
                        currentPath : settings.currentPath,
                        pathElem : _this.svg.find('path:eq('+ (settings.currentPath-1) +')')
                    };
                    _this.pathAnimation(callback, nextSettings);
                }

            } 
            else self.attr('stroke-dashoffset', ((counter += increaseBy) >= 0) ? 0 : counter);
        }, this.timeout);

}

// var slide2SVG;
// // Reset SVG
// function resetSVG(){
// 	switch(activeSlide) {
// 	    case 2:
// 	        var svgAnimSettings = {
// 				"elem" : "#slide2-pie-chart",
// 				"increaseBy" : 3,
// 				"timeout" : 1,
// 				"reverse" : true
// 			};

// 			slide2SVG = new SvgAnimation(svgAnimSettings);
// 	        break;
// 	}
// }

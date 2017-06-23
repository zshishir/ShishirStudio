adDebug.info("detectBrowser.js has loaded");

var mobileCreativeContainer = document.getElementById("mobileCreativeContainer");
var mobileDetected = false;


function detectBrowser() {
	
	var userAgent = "User-agent userAgent sent: " + navigator.userAgent;
	var appCodeName = "appCodeName: " + navigator.appCodeName;
	var cookieEnabled = "cookieEnabled: " + navigator.cookieEnabled;
	adDebug.info([["userAgent ", userAgent],["appCodeName", appCodeName],["cookieEnabled", cookieEnabled]]);

	var isMobile = {
		Android: function() {
		return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
		return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
		return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
		return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());	
	  }
	};

	// ----------------------------------------------------------
	// A short snippet for detecting versions of IE in JavaScript
	// without resorting to user-agent sniffing
	// ----------------------------------------------------------
	// If you're not in IE (or IE version is less than 5) then:
	//     ie === undefined
	// If you're in IE (>=5) then you can determine which version:
	//     ie === 7; // IE7
	// Thus, to detect IE:
	//     if (ie) {}
	// And to detect the version:
	//     ie === 6 // IE6
	//     ie > 7 // IE8, IE9 ...
	//     ie < 9 // Anything less than IE9
	// ----------------------------------------------------------
	 
	// UPDATE: Now using Live NodeList idea from @jdalton
 
 /*
	var ie = (function(){
 
	    var undef,
	        v = 3,
	        div = document.createElement('div'),
	        all = div.getElementsByTagName('i');
	 
	    while (
	        div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
	        all[0]
	    );
 
	    return v > 4 ? v : undef;
	 
	}());
*/

	if(isMobile.any()){
		// Mobile!
		adDebug.log("it is mobile");
		mobileDetected = true;
		//initMobileAnimation();
		initAnimation();
	}
  
	else {
		// Desktop!
		adDebug.log("it is desktop");
		initAnimation();
	}
}
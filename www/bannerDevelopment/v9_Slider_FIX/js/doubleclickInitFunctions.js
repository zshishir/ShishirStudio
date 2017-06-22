adDebug.info("doubleclickInitFunctions.js has loaded");


/**
 * Window onload handler (doubleclick enabler)
 */
// If true, start function. If false, listen for INIT.
window.onload = function() {
	adDebug.log("init Enabler onload");

	if (Enabler.isInitialized()) {
	    checkForPageLoad();
	} else {
	    Enabler.addEventListener(studio.events.StudioEvent.INIT, checkForPageLoad);
	}
}

function checkForPageLoad() {
	adDebug.log("checkForPageLoad");

	if (Enabler.isPageLoaded()) {
	   loadFonts();
	} else {
	   Enabler.addEventListener(studio.events.StudioEvent.PAGE_LOADED, loadFonts);
	}
}


function loadFonts() {
	adDebug.log("loadFonts");
	// The following code ensures the web fonts are loaded politely
	var extCSS=document.createElement('link');
	extCSS.setAttribute("rel", "stylesheet");
	extCSS.setAttribute("type", "text/css");
	extCSS.setAttribute("href", Enabler.getUrl("https://fonts.googleapis.com/css?family=Montserrat")); 
	
	extCSS.onload = function () {
	    adDebug.log('tazWebFonts.css loaded');
	    checkForVisibility();
	    
	}

	document.getElementsByTagName("head")[0].appendChild(extCSS);
}



function checkForVisibility() {
	adDebug.log("checkForVisibility");

	

	if (Enabler.isVisible())
	{
		detectBrowser();
		adDebug.log("is visible.....");

	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, detectBrowser);
		adDebug.log("waiting for visibility,.......");

	}
}


var myVideo = document.getElementById('myVideo');

Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
  studio.video.Reporter.attach('myVideo', myVideo);
});
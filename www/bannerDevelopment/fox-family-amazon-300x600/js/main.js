"use strict";
var mainContainer;

var orange;
var green;
var blue;
var blue01;
var yellow;
var yellow02;
var purple;
var alvin;
var panda;
var copy;
var amazon;
var legals;
var clickBtn;
var birds;
var clickTag = "#";

//Timer vars
var tick = 0;
var factor = 10; // 1,10,100,1000 for loop of 1 milisecond to 1 second;
var interval = 1000 / factor;
var cycles = 5; //How many loops

var elements1 = 'elements-1 ';
var elements2 = 'elements-2 ';
var OpacElements1 = 'elements-1 transparency ';
var OpacElements2 = 'elements-2 transparency ';

function politeInit() {
	mainContainer = document.getElementById("main-container");

	orange = document.getElementById("orange");
	green = document.getElementById("green");
	blue = document.getElementById("blue");
    blue01 = document.getElementById("blue01");
	yellow = document.getElementById("yellow");
    purple = document.getElementById("purple");
    birds = document.getElementById("birds");
    yellow02 = document.getElementById("yellow02");
	alvin = document.getElementById("alvin");
	panda = document.getElementById("panda");
	copy = document.getElementById("copy");
	amazon = document.getElementById("amazon-logo");
	legals = document.getElementById("legals");
	clickBtn = document.getElementById("click-btn");

	mainContainer.style.display = 'block';

	addListeners();

	startLoop();
}

function addListeners() {
	clickBtn.addEventListener("click", clickthrough, false);
}

function clickthrough() {
	window.open(clickTag, "_blank");
}

function startLoop() {
	//console.log('loop', cycles );

	//start timeout
	setTimeout(function () {

		tick++;

		switch (tick) {

		case 0.1 * factor:
			green.className = elements1 + "animateGreen";
			break;
                
        case 0.2 * factor:
			blue.className = elements1 + "animateBlue";
			break;

		case 0.3 * factor:
			yellow.className = elements1 + "animateYellow";
			break;

		case 0.4 * factor:
			purple.className = elements1 + "animatePurple";
			break;

        case 0.5 * factor:
			yellow02.className = elements1 + "animateYellow02";
			break; 
                
        case 0.6 * factor:
			blue01.className = elements1 + "animateBlue01";
			break;
                
   
                
		case 0.8 * factor:
			orange.className = elements1 + "animateOrange";
			break;
                
        case 1 * factor:
			panda.className = elements2 + "animatePanda";
			break;
                
       
        case 1.1 * factor:
			alvin.className = elements2 + "animateAlvin";
			break;
			
        case 1.2 * factor:
			birds.className = elements2 + "animateBird";
			break;    
                
		case 1.3 * factor:
			copy.className = OpacElements2 + "animateCopy";
			
			break;
                
    
			
		case 1.4 * factor:
			legals.className = OpacElements2 + "fadeIn";
			amazon.className = OpacElements2 + "fadeIn";
			break;

		case 10 * factor:

			cycles--;

			if (cycles > 0) {
				console.log("loop");
				tick = 0;
			}

			break;
		}

		if (cycles > 0) {
			requestAnimationFrame(startLoop);
		}

	}, interval);
	//End timeout
}

//This function pauses banner when not in focus within browser
(function () {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame) {
		window.requestAnimationFrame = function (callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function () {
					callback(currTime + timeToCall);
				},
				timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	}

	if (!window.cancelAnimationFrame) {
		window.cancelAnimationFrame = function (id) {
			clearTimeout(id);
		};
	}
}());

window.onload = politeInit();
adDebug.info("videoEventListeners.js has loaded")

var myVideo = document.getElementById("myVideo");
var myVideoHasEnded = false;

//The following event listeners ensure that if the video pauses, the timeline also pauses, and
//when the video plays, the timeline plays

// myVideo.addEventListener("pause", pauseTimeline);
//myVideo.addEventListener("play", playTimeline);
// myVideo.addEventListener('ended', myVideoEndedFunction);


function playTimeline() {
	//adDebug.log("Play EventListener:  myVideo is playing");
	console.log("CT:", myVideo.currentTime);
	if(myVideo.currentTime >= myVideo.duration-3){
		console.log("LOOP IT");
		myVideo.currentTime = 5;
		myVideo.play();	
	}
	
}

function pauseTimeline() {
	if(myVideoHasEnded == false) {
		myVideo.pause();
		desktopTl.pause();
		adDebug.log("Pause EventListener: myVideo is paused");
	}
	else {
		desktopTl.play();
	}
}

// function myVideoEndedFunction () {
// 	adDebug.log("myVideoEndedFunction");
// 	myVideoHasEnded = true;
// 	myVideo.currentTime = 5;
// 	myVideo.play();	
// }
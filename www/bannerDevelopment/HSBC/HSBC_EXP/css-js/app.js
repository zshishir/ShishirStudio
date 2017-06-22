var banner;
var banner_nonexp;
var expand_content;


init = function(){

	if (Enabler.isInitialized()) {
		initial();
	}else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT, initial);
	}
				
}

function initial(){
	
	banner = document.getElementById('banner');
	banner_nonexp = document.getElementById('banner_nonexp');	
	// expandedBgExit = document.getElementById('expanded_background_exit_dc');	
    close_btn_dc = document.getElementById('close_btn_dc');
	expand_content =  document.getElementById('expand_content');

	//Show Ad
	banner.style.visibility = "visible";	
	
    
}


var expandTimer;
function expandStartHandler() {
    // Perform expand animation.
    // Optionally, should you want the direction to expand in call:
    // Enabler.getExpandDirection(); //
    // When animation finished must call

    Enabler.finishExpand(); 

}
 
function expandFinishHandler() {
    // Convenience callback for setting
    // final state when expanded.
}
 
function collapseStartHandler() {
    // Perform collapse animation.
    // When animation finished must call
    // banner_nonexp.style.display = "block";
    expand_content.style.display = "none";
    Enabler.finishCollapse();

}
 
function collapseFinishHandler() {
    // Convenience callback for setting
    // final state when collapsed.
}

function expandClickHandler() {
    
    if(mouseClick){
        return;
    }
	clearTimeout(expandTimer);
    expandTimer = setTimeout(function(){
    	// banner_nonexp.style.display = "none";
	    expand_content.style.display = "block";
	
	    Enabler.requestExpand();
    }, 1000);

}


function expandClickHandler01() {
		   clearTimeout(expandTimer);
        mouseClick = true;
   
    	// banner_nonexp.style.display = "none";
	    expand_content.style.display = "block";
	
	    Enabler.requestExpand();
  

}







function collapseClickHandler() {
    Enabler.requestCollapse();
  
}

 function clickTagHandler() {
 	
    Enabler.exit("ClickThrough");
     console.log("click1");
     Enabler.requestCollapse();
     
}



Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, expandStartHandler);
Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, expandFinishHandler);
Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, collapseStartHandler);
Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, collapseFinishHandler);
document.getElementById('banner_nonexp').addEventListener('click', expandClickHandler01, false);


document.getElementById('expand_content').addEventListener('mouseleave', collapseClickHandler, false);

document.getElementById('close_btn_dc').addEventListener('click', collapseClickHandler, false);

document.getElementById('clikTag_1').addEventListener('click', clickTagHandler, false);

/*$(window).resize(function(){
    
    if (window.matchMedia('(max-width: 320px)').matches)
    {
        // do functionality on screens smaller than 768px
        $('head').append('<link rel="stylesheet" href="style_320x480.css" type="text/css" />');
    }
    else
    {
        $('head').append('<link rel="stylesheet" href="style_480x320.css" type="text/css" />');
    }
});*/
//------------------------------------------------------------------------------
//      DC STUDIO BLOCK
//------------------------------------------------------------------------------

// Check for enabler init
if (!Enabler.isInitialized()) {
    Enabler.addEventListener(studio.events.StudioEvent.INIT,enablerInitialized);
} 
else {
    enablerInitialized();
}

// Enabler initialization
function enablerInitialized() {
    if (!Enabler.isVisible()) {
        Enabler.addEventListener(studio.events.StudioEvent.VISIBLE,adVisible);
    } else {
        adVisible();
    }
}

// Make the ad Visible
function adVisible() {
    showAd();
}

// Exit Handler
bgExitHandler = function(e) {
    Enabler.exit('Exit_Clickthrough');
    $("#frame4").hide();
    $("#frame3").show();
    var myvideo = document.getElementById("vid-player");
    myvideo.pause();
    myvideo.currentTime = 0; 
}

// Close Handler
closeHandler = function(e) {
    var myvideo = document.getElementById("vid-player");
    myvideo.pause();
    myvideo.currentTime = 0;     
    Enabler.close();
    Enabler.reportManualClose();
}

//------------------------------------------------------------------------------
//      CUSTOM BLOCK
//------------------------------------------------------------------------------

// start ad animation
function showAd(){
    $(".bg-exit").click(bgExitHandler);
    $(".close-btn").show();
    $(".close-btn").click(closeHandler);
/*    $(".close-btn").hover(function(){
        $(".close-btn").css("background-image","url(close_btn_hover.png)");    
    },function(){
        $(".close-btn").css("background-image","url(close_btn.png)");
    });*/
    console.log("Ad Started !");    
    animFrame1();
}

// Frame 1 Animation
//-------------------------------------------------------------
function animFrame1()
{
    console.log("Frame1 Started!!!");
    
    $(".logo").animate({opacity: 1},1000);
    
    $(".bg-pic").animate({opacity: 1},1000,function(){
        animFrame2();        
    }); 
}

// Frame 2 Animation
//-------------------------------------------------------------
function animFrame2()
{
    console.log("Frame2 Started!!!");
    
    var flag = $(".flag-lines");
    var delay = 0;
    for(var i=0;i<13;i++){
        flag.append('<div class="flag-line"></div>');
        var flagLine = flag.find(":last-child");
        if(i % 2 == 0)flagLine.addClass("red"); 
        flagLine.height = flag.height / 13;
        if(i >= 6)animateFlag(flagLine,delay,"50%");
        else animateFlag(flagLine,delay,"100%");
        delay += 250;
    }    
    $(".flag-back").delay(delay).animate({ "width": "100%" }, 1000, function(){
        animFrame3();        
    });    
}
// Helper to animate flag lines
function animateFlag(flagLine, delay, width){
    var duration = 1000;
    if(width === "50%")duration = 500;
    flagLine.delay(delay).animate({ "width": width }, duration );
}


// Frame 3 Animation
//-------------------------------------------------------------
function animFrame3(){
    console.log("Frame 3 Started !!");
    var delay = 0;
    //$(".logo").delay(delay).animate({opacity: 1},100);
    $(".subtitle").delay(delay+500).animate({opacity: 1},1000);
    $(".title").delay(delay+500).animate({opacity: 1},1000);
    $(".txt").delay(delay+1500).animate({opacity: 1},500);
    $(".cta1").delay(delay+1500).animate({opacity: 1},500);
    $(".cta2").delay(delay+1500).animate({opacity: 1},500);
    
/*    $(".cta1").hover(function(){
        $(".cta1").css("background-image","url(watch_trailer_btn_hover.png)");
    },function(){
        $(".cta1").css("background-image","url(watch_trailer_btn.png)");
    }); 
    $(".cta2").hover(function(){
        $(".cta2").css("background-image","url(watch_now_btn_hover.png)");
    },function(){
        $(".cta2").css("background-image","url(watch_now_btn.png)");
    });*/
    
    $(".cta1").click(function(){
        animFrame4();
    });
    $(".cta2").click(function(){
        Enabler.exit('Exit_Clickthrough');
    });    
}


// Frame 4 Video
//-------------------------------------------------------------
function animFrame4(){
    $("#frame3").hide();
    var myvideo = document.getElementById("vid-player");
    
    Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
       studio.video.Reporter.attach('video_1', myvideo);
    });
    
    $("#frame4").css("background","#000");
    $("#frame4").show();
    myvideo.play();
    makeFullScreen();
    
    $('#vid-player').on('ended', function() {
        
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            this.webkitExitFullScreen();
        } else {
            cancelFullScreen();
        }
        $("#frame4").hide();
        $("#frame3").show();
        myvideo.pause();
        myvideo.currentTime = 0; 
    });    
   
    $(".vid-close").click(function(){
        $("#frame4").hide();
        $("#frame3").show();
        myvideo.pause();
        myvideo.currentTime = 0;
    });    
}

function makeFullScreen()
{
    var myvideo = document.getElementById("vid-player"); 
    if (myvideo.requestFullscreen) {
        myvideo.requestFullscreen();
    } else if (myvideo.mozRequestFullScreen) {
        myvideo.mozRequestFullScreen();
    } else if (myvideo.webkitRequestFullscreen) {
        myvideo.webkitRequestFullscreen();
    }else if (myvideo.msRequestFullscreen) {
        myvideo.msRequestFullscreen();
    }else if(myvideo.webkitSupportsFullscreen){
        myvideo.webkitEnterFullscreen();
    }
}

function cancelFullScreen()
{
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullScreen();
    }  
}
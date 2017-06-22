var banner = document.getElementById('banner');
var tl = new TimelineMax({repeat:0});
var video = document.getElementById('video');


window.onload = initEB;
 
function initEB(){
    if (!EB.isInitialized()){
        EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
    } else {
        startAd();
    }
}

function startAd(){
    // your banner code here
    tl.set("#banner", {visibility: "visible"});
    video.play();
    bannerAnimation();
}

function handleBannerClick(){
    EB.clickthrough();
}

document.getElementById('banner').addEventListener('click', handleBannerClick);

var bannerAnimation = function(){
    
    tl.set("#banner", {visibility: "visible"}) 
    
    
    .to(".copy1", 3, {alpha:1, width:970, ease:Power1.easeOut, delay:1})
    .to(".current-account", 0.5, {alpha:1, ease:Power1.easeOut}, "-=3")
    .to(".frame1_copy1", .5, { alpha:0, ease:Power1.easeOut, delay:2.5})
    .to(".frame2_copy2", 0.5, {alpha:1, ease:Power1.easeOut, delay:2})    
    .to(".frame3_copy3", 0.5, {alpha:1, ease:Power1.easeOut, delay:3.5})
    /*.to(".whiteCircle", .5, {alpha:1, scale:1, ease: Power1.easeOut}, "sek")
    .to(".redArrow", .3, {alpha:1, left:"5px", ease: Power0.easeNone})
    .to(".redArrow", .3, {alpha:1, left:"16px", ease: Power0.easeNone})
    .to(".redArrow", .2, {alpha:0, left:"-18px", ease: Power0.easeNone})
    .to(".redArrow", .3, {alpha:1, left:"5px", ease: Power0.easeNone})*/
    
    .to(".whiteCircle", .5, {alpha:1, scale:1, ease: Power0.easeOut})
      .to(".redArrow", .3, {alpha:1, left:"5px", ease: Back.easeOut},"-=.5")
      .to(".redArrow", .3, {alpha:1, left:"16px", alpha:0, ease: Back.easeOut, delay:1.2})
      .to(".redArrow", .2, {alpha:0, left:"-18px", ease: Back.easeOut})
      .to(".redArrow", .3, {alpha:1, left:"5px", ease: Back.easeOut})
    .from(".red_ber", 0.5, { x:50, ease:Power1.easeNone},"-=2.5")
    .from(".logo", 0.5, { y:110, ease:Power1.easeNone},"-=2.5")
    
    //tl.seek("sek");
    
};

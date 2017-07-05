var startTime;

var bar = get(".bar");
var cta = get(".cta");
var svgBg = get(".svg-bg-1");
var replay = get("#replay");
var copy_1 = get(".copy_1");
var copy_2 = get(".copy_2");
var copy_3 = get(".copy_3");
var copy_4 = get(".copy_4");
var copy_5 = get(".copy_5");
var copy_6 = get(".copy_6");
var copy_7 = get(".copy_7");
var techLines = get("#techLines");
var final_logo = get(".final_logo");
var ad = document.getElementById("ad");
var svgContainer = get(".svg-container");
var white_foreground = get(".white_foreground");

var $copy_1_chars = $('.copy_1 span'),
    $copy_2_chars = $('.copy_2 span'),
    $copy_3_chars = $('.copy_3 span'),
    $copy_4_chars = $('.copy_4 span'),
    $copy_5_chars = $('.copy_5 span'),
    $copy_6_chars = $('.copy_6 span'),
    $copy_7_chars = $('.copy_7 span');

var tlDistort = new TimelineMax({paused:true});
var tlEngineFan = new TimelineMax({paused:true});
var tlBackground = new TimelineMax({paused:true});
var tlReplayButton = new TimelineMax({paused:true});
var tlMain = new TimelineMax({paused: true, onComplete:addHandlers});

initializeVariables();

// Setup timelines
setupTimelineMain();
setupTimelineDistort();
setupTimelineEngineFan();
setupTimelineBackground();
setupTimelineReplayButton();

window.onload = function () {
    startTime = new Date();
    tlMain.play("start");
    TweenMax.set("#ad_container", {autoAlpha: 1});
}

function get(id) {
    return document.querySelector(id);
}

function initializeVariables() {
    TweenMax.set(techLines, {attr:{x:0, y:50}});
    TweenMax.set([copy_1, copy_5], {x:-30});
     TweenMax.set(svgBg, {autoAlpha:1});
    TweenMax.set(final_logo, {y:-5, autoAlpha:0});
    TweenMax.set('#techDistortion', {attr:{scale:-60}});
    TweenMax.set('#engine_fan', {transformOrigin:"70px 72px", rotation:0});
    TweenMax.set([tlBackground, tlDistort, tlEngineFan], {timeScale:1});
    TweenMax.set('#pointLight', {attr:{x:3330, y:250, z:100}});
    TweenMax.set([white_foreground, final_logo, replay], {autoAlpha:0});
    TweenMax.set('#lightBurst', {attr:{specularExponent:128, specularConstant:1.4}});
    TweenMax.set([$copy_1_chars, $copy_2_chars, $copy_3_chars, $copy_4_chars, $copy_5_chars,$copy_6_chars,$copy_7_chars], {autoAlpha:0});
}

function playBurst() {
    TweenMax.delayedCall(0, function(){
        tlBackground.play("start");
//        tlDistort.play("start");
        tlEngineFan.play("start");
    });
}

function setupTimelineBackground() {
    tlBackground.add("start")
        .set(techLines, {attr:{x:5, y:40}})
        .to(techLines, 8.0, {attr:{x:-80, y:45}, ease:Sine.easeOut, repeat:-1, yoyo:true});
}

function setupTimelineDistort() {
    tlDistort.add("start")
        .set('#techDistortion', {attr:{scale:-60}})
        .to('#techDistortion', 8.0, {attr:{scale:0}, ease:Linear.easeNone});
}

function setupTimelineReplayButton() {
    tlReplayButton.to(replay, 0.75, {rotation: -360, repeat:-1, ease:Linear.easeNone});
}

function setupTimelineEngineFan() {
    tlEngineFan.add("start")
        .set('#engine_fan', {rotation:0})
        .to('#engine_fan', 3.5, {rotation: -360, repeat:-1, ease:Linear.easeNone});
}

function setupTimelineMain() {
    tlMain.add("start")
        .set(bar, {scaleY:0.0}, 'start')
        .set(cta, {autoAlpha:0}, 'start')
        .set([copy_1,copy_2,copy_3, copy_4], {autoAlpha:1}, 'start')
    .add("frame_1", "start+=0.05")
        .call(addListeners1, [], this, 'frame_1')
        
        .to(bar, 0.25,{x:0, y:-1,scaleY:1.0, ease:Sine.easeInOut}, 'frame_1+=0.35')
        .call(playBurst, [], this, "start+=0.0")
    .add("frame_2", "frame_1+=0.25")
        .to(copy_1, 0.2, {x:0, ease:Power2.easeOut}, "frame_2+=0.4")
    .add("frame_2a", "frame_2+=0.3");

    var time0 = 0.02;
    var timeW=0.03;

    tlMain.staggerTo($copy_1_chars, time0, {autoAlpha:1}, timeW, "frame_2a")
    .add("frame_2b", "frame_2a+="+(time0  + $copy_1_chars.length*timeW  ))
        .staggerTo($copy_2_chars, time0, {autoAlpha:1},0.028, "frame_2b")
        .add("frame_2c", "frame_2b+="+(time0  + $copy_2_chars.length*0.028  ))
        .staggerTo($copy_3_chars, time0, {autoAlpha:1}, 0.025, "frame_2c")
        .add("frame_2d", "frame_2c+="+(time0  + $copy_3_chars.length*0.025  ))
        .staggerTo($copy_4_chars, time0, {autoAlpha:1}, 0.025, "frame_2d");

    var timeW=0.02;
    var time0=0.13;

    tlMain.add("frame_5", "frame_2c+=2.25")
        .set('#pointLight', {attr:{x:330}}, "frame_5+=0.4")
        .to('#pointLight', 1.0, {attr:{x:-500, y:-500, z:20000}, ease:Expo.easeIn}, "frame_5+=0.4")
        .to(white_foreground, 0.2, {autoAlpha:1, ease:Expo.easeIn}, "frame_5+=0.9")
       .to(svgBg, 0.2, {autoAlpha:0, ease:Expo.easeIn}, "frame_5+=1.0")
        .to([copy_1,copy_2,copy_3,copy_4, bar], 0.2, {autoAlpha:0, ease:Expo.easeOut}, "frame_5+=0.9")
        .set(bar, {scaleY:0.0,y:0}, "frame_5+=1.1")
        .to('#pointLight', 1.5, {attr:{z:0}, ease:Linear.easeNone}, "frame_5+=0.95")
        .to(white_foreground, 0.5, {autoAlpha:0, ease:Sine.easeInOut}, "frame_5+=1.05")
        .to([bar],0.25 ,{autoAlpha:1, ease:Sine.easeOut}, "frame_5+=1.3");

    var time0 = 0.02;
    var timeW=0.035;

    tlMain.add("frame_5a", "frame_5+="+(1.55))
        .to(bar,  0.3, {scaleY:0.722,y:-14, ease:Power3.easeInOut}, "frame_5a-=0.25")
        .to(copy_5, 0.3, {x:0, ease:Power2.easeOut}, "frame_5a+=0.1")
        .staggerTo($copy_5_chars, time0, {autoAlpha:1}, timeW, "frame_5a+=0.1")
    .add("frame_5b", "frame_5a+="+(time0  + $copy_5_chars.length*timeW  ))
        .staggerTo($copy_6_chars, time0, {autoAlpha:1},timeW, "frame_5b+=0.15")
        .staggerTo($copy_7_chars, time0, {autoAlpha:1},0.0375, "frame_5b+=1.1")
        .to(final_logo, 2.0, {y:0, autoAlpha:1, ease:Expo.easeOut}, "frame_5b+=1.65")
    .add("end", "start+=8.0")
        .to([tlBackground, tlDistort, tlEngineFan], 4.0, {timeScale:0, ease:Power3.easeOut, onComplete:function() {
            tlBackground.stop();
            tlDistort.stop();
            tlEngineFan.stop();
        }}, "end")
    .to(cta, 0.1, {autoAlpha:1}, 'frame_5b+=3')
        .to(replay, 1, {autoAlpha:1.0, ease:Power3.easeInOut, onComplete:addListeners, onCompleteParams:[true]}, "end");
}

function addHandlers() {
    var seconds = (new Date() - startTime) / 1000 % 60;
    console.log('seconds', seconds);
}

function addListeners1(){

    ad.addEventListener("mouseenter", mouseEnterCta);
    ad.addEventListener("mouseleave", mouseLeaveCta);
}

function addListeners(listen) {
    TweenMax.killTweensOf(techLines);
    tlDistort.kill();

    if (listen){
        ad.addEventListener("mouseenter", mouseEnterCta);
        ad.addEventListener("mouseleave", mouseLeaveCta);
        replay.addEventListener("mouseenter", mouseEnterReplay);
        replay.addEventListener("mouseleave", mouseLeaveReplay);
        replay.addEventListener("click", mouseClickReplay);
    }else{
        ad.removeEventListener("mouseenter", mouseEnterCta);
        ad.removeEventListener("mouseleave", mouseLeaveCta);
        replay.removeEventListener("mouseenter", mouseEnterReplay);
        replay.removeEventListener("mouseleave", mouseLeaveReplay);
        replay.removeEventListener("click", mouseClickReplay);
    }
}

function mouseEnterCta() {
    TweenMax.to(cta, 0.3, {scale:1.08, ease:Back.easeOut.config(2.0)});
}

function mouseLeaveCta() {
    TweenMax.to(cta, 0.5, {scale:1.0, ease:Bounce.easeOut});
}

function mouseEnterReplay() {
    tlReplayButton.play();
}

function mouseLeaveReplay() {
    tlReplayButton.stop();
}

function mouseClickReplay() {
    addListeners(false);
    tlReplayButton.stop();
    TweenMax.to(replay, 0.25, {autoAlpha:0, ease:Power1.easeIn, onComplete:function(){
        tlMain.clear();
        tlDistort.clear();
        tlBackground.clear();
        tlEngineFan.clear();
        initializeVariables();
        setupTimelineMain();
        setupTimelineDistort();
        setupTimelineEngineFan();
        setupTimelineBackground();
        tlMain.play("start");
    }});
}

//carousel Section // 
$(document).ready(function() {
    try{
var owl = $("#owl-demo");
owl.owlCarousel({

autoPlay: 3000, //Set AutoPlay to 3 seconds
items : 4, //10 items above 1000px browser width
itemsDesktop : [1000,4], //5 items between 1000px and 901px
itemsDesktopSmall : [980,3], // betweem 900px and 601px
itemsTablet: [768,2], //2 items between 600 and 0
itemsMobile: [600,1], //2 items between 600 and 0
// itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
});


$(".next").click(function(){
owl.trigger('owl.next');
})
$(".prev").click(function(){
owl.trigger('owl.prev');
})
}catch(err) {
}
});

//carousel Section // 


$(document).ready(function() {
  
var owls = $("#owl-demo2");
owls.owlCarousel({
animateOut: 'fadeIn',
autoPlay: 5000, //Set AutoPlay to 3 seconds
items : 1, //10 items above 1000px browser width
itemsDesktop : [1000,1], //5 items between 1000px and 901px
itemsDesktopSmall : [900,1], // betweem 900px and 601px
itemsTablet: [600,1], //2 items between 600 and 0
addClassActive: true,
stopOnHover:true,
itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
afterMove: afterSlide,
beforeMove:beforeSlide
});
$(".owl-item.active h1").addClass('animated color_change');        
        
function afterSlide(){  
 
  $(".owl-item.active h1").addClass('animated color_change');
    $(".owl-item.active p").addClass('animated bounce');
     $(".owl-item.active button").addClass('animated-btn bounce');
   
}        
  
 function beforeSlide(){  

$(".owl-item h1").removeClass('animated color_change');
$(".owl-item p").removeClass('animated bounce');
 $(".owl-item.active button").removeClass('animated-btn bounce');
}        
         
        
        
$(".nexts").click(function(){
owls.trigger('owl.next');
})
$(".prevs").click(function(){
owls.trigger('owl.prev');
}) 

}); 





//carousel Section // 




$(document).ready(function() {
    try{
var owls = $("#owl-demo3");
owls.owlCarousel({
animateOut: 'fadeIn',
    
    
    
    
autoPlay: 5000, //Set AutoPlay to 3 seconds
items : 3, //10 items above 1000px browser width
itemsDesktop : [1000,3], //5 items between 1000px and 901px
itemsDesktopSmall : [900,3], // betweem 900px and 601px
itemsTablet: [600,1], //2 items between 600 and 0
//  transitionStyle : "fade",
itemsMobile : false,// itemsMobile disabled - inherit from itemsTablet option

       navigation: false,



});

$(".nexts").click(function(){
owls.trigger('owl.next');
})
$(".prevs").click(function(){
owls.trigger('owl.prev');
})
// First Slide

 

}catch(err) {
}
});

 $(document).ready(function() {
     
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");
     
      sync1.owlCarousel({
        singleItem : true,
        slideSpeed : 1000,
        navigation: true,
        pagination:false,
        afterAction : syncPosition,
        responsiveRefreshRate : 200,
      });
     
      sync2.owlCarousel({
        items : 10,
        itemsDesktop      : [1199,10],
        itemsDesktopSmall     : [979,10],
        itemsTablet       : [768,8],
        itemsMobile       : [479,4],
        pagination:false,
        responsiveRefreshRate : 100,
        afterInit : function(el){
          el.find(".owl-item").eq(0).addClass("synced");
        }
      });
     
      function syncPosition(el){
        var current = this.currentItem;
        $("#sync2")
          .find(".owl-item")
          .removeClass("synced")
          .eq(current)
          .addClass("synced")
        if($("#sync2").data("owlCarousel") !== undefined){
          center(current)
        }
      }
     
      $("#sync2").on("click", ".owl-item", function(e){
        e.preventDefault();
        var number = $(this).data("owlItem");
        sync1.trigger("owl.goTo",number);
      });
     
      function center(number){
        var sync2visible = sync2.data("owlCarousel").owl.visibleItems;
        var num = number;
        var found = false;
        for(var i in sync2visible){
          if(num === sync2visible[i]){
            var found = true;
          }
        }
     
        if(found===false){
          if(num>sync2visible[sync2visible.length-1]){
            sync2.trigger("owl.goTo", num - sync2visible.length+2)
          }else{
            if(num - 1 === -1){
              num = 0;
            }
            sync2.trigger("owl.goTo", num);
          }
        } else if(num === sync2visible[sync2visible.length-1]){
          sync2.trigger("owl.goTo", sync2visible[1])
        } else if(num === sync2visible[0]){
          sync2.trigger("owl.goTo", num-1)
        }
        
      }
     
    });

//Home Banner Section // 

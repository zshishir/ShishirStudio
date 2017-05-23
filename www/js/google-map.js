//Google Map section // 

function initMap() {
/*var map = new google.maps.Map(document.getElementById('map'), {
zoom: 17,
center: {lat: -33.8666, lng: 151.1958}
});*/
var mapOptions = {
// How zoomed in you want the map to start at (always required)
zoom: 17,
// The latitude and longitude to center the map (always required)

center: {lat:30.3694779 , lng: -91.1334699}, 
draggable: true, zoomControl: true, scrollwheel: false, disableDoubleClickZoom: true,
// How you would like to style the map. 
// This is where you would paste any style found on Snazzy Maps.
styles: [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}]
};
var map = new google.maps.Map(document.getElementById('map'), mapOptions);
}
//Google Map section // 
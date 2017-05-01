(function() {
var canvas = document.getElementById('canvas'),
circlesCreated = false;

function onScroll() {
if (!circlesCreated && elementInViewport(canvas)) {
circlesCreated = true;
createCircles();
}
}

function elementInViewport(el) {
var rect = el.getBoundingClientRect();

return (
rect.top  >= 0 &&
rect.left >= 0 &&
rect.top  <= (window.innerHeight || document.documentElement.clientHeight)
);
}

function createCircles() {
var colors = [
['#eaeaea', '#232122'], ['#eaeaea', '#232122'], ['#eaeaea', '#232122'],['#eaeaea', '#232122'],['#eaeaea', '#232122']
],
circles = [];

for (var i = 1; i <= colors.length; i++) {
var child = document.getElementById('circles-' + i),
percentage = 31.42 + (i * 9.84),

circle = Circles.create({
id:         child.id,
value:      percentage,
radius:     70,
width:      10,
colors:     colors[i - 1]
});

circles.push(circle);
}
}

window.onscroll = onScroll;

})();

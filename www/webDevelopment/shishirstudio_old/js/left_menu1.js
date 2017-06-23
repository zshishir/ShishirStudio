$(document).ready(function() {initMenu();});
function initMenu() {
  $('#left_nav ul').hide();
  $('#left_nav li a').click(
    function() {
        $(this).next().slideToggle('normal');	
      }
    );
  }
$(document).ready(function() {initMenu();});
$(function()
{
	var ticker = function()
	{
		setTimeout(function(){
			$('#ticker li:first').animate( {marginTop: '-220px'}, 300, function()
			{
				$(this).detach().appendTo('ul#ticker').removeAttr('style');	
			});
			ticker();
		}, 4000);
	};
	ticker();
});
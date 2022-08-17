define(function(){

	var externals = {};

	externals.show = function(data){
		var htmlStr = ''
		$('.container').empty();
		data.forEach(function(elem){
			htmlStr += '<p>' + elem + '</p>';
		});

		$('.container').append(htmlStr);
		$('.container').append('<button id="back">Go Back!</button>');
		addListener();
	}

	function addListener(){
		$('#back').click(function(){
			window.location.hash = 'home';
		})
	}

	return externals;
})
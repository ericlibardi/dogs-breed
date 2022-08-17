define(function(){

	var externals = {};

	externals.listBtn = function() {$('#btn').click(function(){
		console.log("test");
		window.location.hash = 'list';
	})};

	return externals;
})


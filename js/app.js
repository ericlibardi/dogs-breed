import { start } from './router.js';

(function () {
	console.log('APP FILE IS LOADED!')

	window.location.hash = '#home';
	start();

})()
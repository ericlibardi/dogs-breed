//import { init as homeInit} from './controllers/${route}.js';


let routes = {
	list: {
		hash: '#list',
		controller: 'film-controller'
	},
	home: {
		hash: '#home',
		controller: 'home-controller'
	}
}

function initController(route) {

	let path = `./controllers/${route.controller}.js`

	import(path)
	.then(resp => {
		console.log(resp);
		resp.init();
	})
	
}


function getRoute() {
	return Object.values(routes).find(function (route) {

		return route.hash === window.location.hash
	})
}


export function start() {

	try {
		initController(getRoute())
	} catch (err) {
		// default route if no valid route is found!
		window.location.hash = 'home'
	}

	/*window.onhashchange = function () {
		try {
			initController(getRoute())
		} catch (err) {
			// default route if no valid route is found!
			window.location.hash = 'home'
		}
	}*/

}
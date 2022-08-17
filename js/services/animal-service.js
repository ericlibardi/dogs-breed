export function getAnimals(cb, pageLoad) {

	fetch("https://api.thedogapi.com/v1/breeds?limit=9&page=" + pageLoad, {
		headers: {
			"x-api-key": "1fbb953e-2059-4803-9ae3-6589caa97a9a"
		}
	})
	.then(resp => resp.json())
	.then(cb)
	.catch(err => console.log(err))

}
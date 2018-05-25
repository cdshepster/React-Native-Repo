/*
 * A single location to obtain routes for the web API
 */


let ApiService = class ApiService {
	constructor() {
		this.apiProtocol = 'https:';
		this.apiHost = 'facebook.github.io/react-native';
	}

	/*
	* Utility methods/properties
	*/
	get apiLocation() {
		return `${this.apiProtocol}//${this.apiHost}`;
	}

	/*
	* API addresses
	*/
	getMovieList() {
		return `${this.apiLocation}/movies.json`;
	}

	getGenreList() {
		return `https://api.themoviedb.org/3/genre/movie/list?api_key=24a9420956fd6a98500716cf18d692f8`;
	}

	getMoviesByGenre(id){
		let url = 'https://api.themoviedb.org/3/genre/';
		url += id;
		url+= '/movies?api_key=24a9420956fd6a98500716cf18d692f8';
		return url
	}
};

// Create a Singleton
const apiService = new ApiService();
export default apiService;

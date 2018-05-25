//-------------------------------------------------------------------
//
// The purpose of this class is to provide a single location that the
// rest of the application can use to obtain URL routes for working with
// the backend API.
//
//-------------------------------------------------------------------
import apiService from './api.service';
import { Movie } from '../models/movie';
import { Genre } from '../models/genre';


let MovieService = class MovieService {
	constructor() {
	}
    
    getMovies() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getMovieList())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.movies.forEach(element => {
                    items.push(new Movie(element.title, element.yearReleased));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
    getGenres() {
        return new Promise((resolve, reject) => {
            fetch(apiService.getGenreList())
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.genres.forEach(element => {
                    items.push(new Genre(element.id, element.name));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }

    getGenresById(id){
        return new Promise((resolve, reject) => {
            fetch(apiService.getMoviesByGenre(id))
            .then((response) => response.json())
            .then((responseJson) => {
                let items = [];
                responseJson.results.forEach(element => {
                    items.push(new Movie(element.title));
                });
                resolve(items);
            })
            .catch((error) => {
                console.error(error);
                reject(error);
            });
        });
    }
};

// Create a Singleton
const movieService = new MovieService();
export default movieService;

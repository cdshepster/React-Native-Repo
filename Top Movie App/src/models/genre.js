/*
 * Class to describe a single Movie
 */

export class Genre {
    constructor(id, name) {
        this.genreId = id;
        this.genreName = name;
    }

    getId() {
        return this.genreId;
    }

    getGenre() {
        return this.genreName;
    }
}
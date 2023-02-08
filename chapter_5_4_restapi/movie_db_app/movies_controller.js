/*
Movie = {
  id: uuid,
  name: "Inception",
  rating: 8.0,
  tags: ["action", "fantasy"],
  viewCount: 150000,
  director: "Christopher Nolan",
} 
*/

const { uuid } = require("uuidv4");

class MoviesDB {
  db = [
    {
      id: uuid(),
      name: "Manifest",
      rating: 10,
      tags: ["action", "supernatural"],
      viewCount: 1_000_000,
      director: "Adan Pradana",
    },
    {
      id: uuid(),
      name: "Stranger's Thing",
      rating: 9,
      tags: ["supernatural", "magic", "action", "monster"],
      viewCount: 2_500_000,
      director: "Auda",
    },
    {
      id: uuid(),
      name: "Nope",
      rating: 8,
      tags: ["supernatural", "horror"],
      viewCount: 5_000_000,
      director: "Jordan Peele",
    },
    {
      id: uuid(),
      name: "Top Gun: Maverick",
      rating: 8,
      tags: ["action"],
      viewCount: 100_000_000,
      director: "Akmal",
    },
    {
      id: uuid(),
      name: "The Pale Blue Eye",
      rating: 7,
      tags: ["mystery", "thriller"],
      viewCount: 7_000_000,
      director: "Scot Cooper",
    },
  ];

  get getAllMovies() {
    return this.db;
  }

  // Tujuan: ngambil single move dari movies database
  getSingleMovie(requestedID) {
    return this.db.find((movie) => movie.id === requestedID);
  }

  // Tujuan: ngambil list of movies yang ratingnya sama dengan rating yang diminta.
  getMoviesByRating(requestedRating) {
    return this.db.filter((movie) => movie.rating === Number(requestedRating));
  }

  // Tujuan: ngambil list of movies yang tagnya matching dengan tag yang diminta.
  getMoviesByTag(requestedTag) {
    return this.db.filter((movie) => movie.tags.includes(requestedTag));
  }

  // Tujuan: mengurutkan 5 movie yang memiliki viewCount paling tinggi
  getTrendingMovies() {
    return this.db.sort((a, b) => {
      if (a.viewCount > b.viewCount) {
        return -1;
      }
      if (a.viewCount < b.viewCount) {
        return 1;
      }
      return 0;
    });
  }
}

const movieDb = new MoviesDB();

console.log(movieDb.getTrendingMovies());
console.log(movieDb.getMoviesByTag("thriller"));

module.exports = movieDb;

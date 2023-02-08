const express = require("express");
const movieDb = require("./movies_controller");

const app = express();

app.use(express.json());

app.get("/movie", (req, res) => {
  res.json(movieDb.getAllMovies);
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  res.json(movieDb.getSingleMovie(id));
});

app.get("/movie_rating/:rating", (req, res) => {
  const rating = req.params.rating;
  res.json(movieDb.getMoviesByRating(rating));
});

app.get("/movie_tag/:tag", (req, res) => {
  const tag = req.params.tag;
  res.json(movieDb.getMoviesByTag(tag));
});

app.get("/movie_trending", (req, res) => {
  res.json(movieDb.getTrendingMovies());
});

app.listen(9090, () => {
  console.log("Server Movie DB sudah menyala di http://localhost:9090");
});

// Untuk soal 1 & 2.
const arrayOfNumbers = [100, 20, 500, 70, 0, 4, 19, 70000, 2, 1, 19, 36];

// 1. Buat array baru tanpa bilangan di bawah 10. (n > 10)
// Tips: Gunakan Array.filter()
const arrayOfNumbersGreaterThanTen = arrayOfNumbers.filter(function (number) {
  if (number > 10) {
    return true;
  }
});

console.log(arrayOfNumbersGreaterThanTen);

// 2. Buat array baru tapi hanya untuk angka diantara 10 (exclusive) dan 100 (inclusive).
// logicnya: x > 10 dan x <= 100
// Tips: Gunakan Array.filter()
const arrayBetweenTenAndOneHundred = arrayOfNumbers.filter(function (number) {
  if (number > 10 && number <= 100) {
    return true;
  }
});
console.log(arrayBetweenTenAndOneHundred);

// Untuk soal 3 & 4.
const movies = [
  {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 3.2,
    bookmark: [],
  },
  {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 4.2,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
  {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 3.9,
    bookmark: [],
  },
  {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: 5.0,
    bookmark: [{ id: 432534, time: 65876586 }],
  },
];

// 3. Buat array baru tanpa movie yang ratingnya dibawah 4.0 (logicnya movie.rating > 4)
// Tips: Gunakan Array.filter()
const moviesWithRatingGreaterThanFour = movies.filter(function (movie) {
  if (movie.rating > 4) {
    return true;
  }
});
console.log(moviesWithRatingGreaterThanFour);

// 4. Buat array baru hanya dengan movie yang ratingnya 5, tapi object barunya
// hanya berisi { "title", "boxart" } saja.
// Tips: Gunakan Array.filter() lalu disambung Array.map()
const moviesWithRatingFiveTitleAndBoxartOnly = movies
  .filter(function (movie) {
    if (movie.rating === 5) {
      return true;
    }
  })
  .map(function (movie) {
    return {
      title: movie.title,
      boxart: movie.boxart,
    };
  });

console.log(moviesWithRatingFiveTitleAndBoxartOnly);

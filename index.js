const numberOfFilms = +prompt('Скільки фільмів ви вже подивилися?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один з останніх фільмів, який подивились?', ''),
        b = prompt('На скільки його оціните?', ''),
        c = prompt('Один з останніх фільмів, який подивились?', ''),
        d = prompt('На скільки його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);



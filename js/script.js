/* eslint-disable no-mixed-spaces-and-tabs */
const numberOfFilms = +prompt(" Сколько фильмов вы уже посмотрели?", "");
const personalMovieDB = {
	count:numberOfFilms,
	movies: {},
	actors: {},
	generes: [],
	privat: false
};
const a = prompt("Один из просмотренных фильмов?", ""),
	  b = prompt("На сколько оцените его?", ""),
	  c = prompt("Один из просмотренных фильмов?", ""),
	  d = prompt("На сколько оцените его?", "");
      
personalMovieDB.movies[a] = b; 
personalMovieDB.movies[c] = d; 

console.log(personalMovieDB);
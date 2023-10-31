import React from "react";
import FilmCard from "./FilmCard";
import { Link } from "react-router-dom";

export default function FilmListesi(props) {
  return (
    <div className="movie-list">
      {props.movies.map((movie) => (
        <FilmDetaylari key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function FilmDetaylari(props) {
  return (
    <Link to={`/filmler/${props.movie.id}`}>
      <FilmCard movie={props.movie} />
    </Link>
  );
}

import React from "react";

export default function FilmCard(props) {
  const { title, director, metascore, stars } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>

      {stars && (
        <>
          <h3>Actors</h3>
          {stars.map((star) => (
            <div key={star} className="movie-star">
              {star}
            </div>
          ))}
        </>
      )}
    </div>
  );
}

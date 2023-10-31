import React from "react";
import { useHistory, Link, NavLink } from "react-router-dom";

export default function KaydedilenlerListesi(props) {
  const history = useHistory();

  const toHome = () => {
    history.push("/");
  };

  return (
    <div className="saved-list">
      <h3>Kaydedilen Filmler:</h3>
      {props.list.map((movie) => (
        <NavLink to={`/filmler/${movie.id}`} className="saved-movie">
          {movie.title}
        </NavLink>
      ))}
      <div onClick={toHome} className="home-button">
        Anasayfa
      </div>
    </div>
  );
}

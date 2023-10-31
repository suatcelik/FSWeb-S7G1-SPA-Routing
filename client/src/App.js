import React, { useState, useEffect } from "react";
import axios from "axios";
import Film from "./Filmler/Film";
import FilmListesi from "./Filmler/FilmListesi";
import { Switch, Route } from "react-router-dom";
import KaydedilenlerListesi from "./Filmler/KaydedilenlerListesi";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const FilmleriAl = () => {
      axios
        .get("http://localhost:5001/api/filmler") // Burayı Postman'le çalışın
        .then((response) => {
          // Bu kısmı log statementlarıyla çalışın
          console.log("Filmler", response);
          // ve burdan gelen response'u 'movieList' e aktarın
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Sunucu Hatası", error);
        });
    };
    FilmleriAl();
  }, []);

  const KaydedilenlerListesineEkle = (id) => {
    console.log("saveMe AstalavistaBaby", id);
    // Burası esnek. Aynı filmin birden fazla kez "saved" e eklenmesini engelleyin
    if (!saved.includes(id)) {
      setSaved([...saved, id]);
    } else {
      setSaved(saved.filter((savedid) => savedid !== id));
    }
  };

  return (
    <div>
      <KaydedilenlerListesi
        list={movieList.filter((m) => saved.includes(m.id.toString()))}
      />

      <Switch>
        <Route path="/filmler/:id">
          <Film saveMovie={KaydedilenlerListesineEkle} />
        </Route>
        <Route path="/">
          <FilmListesi movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}

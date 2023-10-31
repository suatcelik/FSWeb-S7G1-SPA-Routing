import React, { useState, useEffect } from "react";
import axios from "axios";

import FilmCard from "./FilmCard";
import { useParams } from "react-router-dom";
import { set } from "express/lib/application";

export default function Film(props) {
  const [movie, setMovie] = useState();
  // let id = 1;
  // URL'den alınan :id parametresini bu değişkene aktarın
  const params = useParams();
  console.log("params", params);
  const { id } = params;

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/filmler/${id}`) // Bu uç noktayı Postman'le çalışın
      .then((response) => {
        // Bu kısmı log statementlarıyla çalışın
        console.log("Film", response);
        // ve burdan gelen response'u 'movie' e aktarın
        setMovie(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // Bu effect her `id ` değiştiğinde çalışmalı
    // Bunu nasıl gerçekleştirebiliriz?
  }, [id]);

  // Yalnızca esnek görevlere geçtiğinizde burdaki yorum etiketini kaldırın
  // const filmiKaydet = evt => { }

  if (!movie) {
    return <div>Film bilgisi yükleniyor...</div>;
  }

  return (
    <div className="save-wrapper">
      <FilmCard movie={movie} />
      <div onClick={() => props.saveMovie(id)} className="save-button">
        Kaydet
      </div>
    </div>
  );
}

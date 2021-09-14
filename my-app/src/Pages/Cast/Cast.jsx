import React from "react";
import { useState, useEffect } from "react";
import { Route, useRouteMatch, NavLink } from "react-router-dom";
import { ApiCast } from "../../Api/Api";
export default function Cast({ movieId }) {
  const [filmCast, setFilm] = useState(null);
  const { url } = useRouteMatch();

  useEffect(() => {
    ApiCast(movieId).then((res) => setFilm(res.cast));
  }, []);
  console.log(filmCast);
  return (
    <>
      <ul>
        {filmCast &&
          filmCast.map((item) => (
            <li key={item.id}>
              {item.name}
              <p>character: {item.character}</p>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt={item.name}
                width="100"
                height="150"
              />
            </li>
          ))}
      </ul>
    </>
  );
}

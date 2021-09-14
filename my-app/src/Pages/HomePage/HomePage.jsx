import React from "react";
import { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ApiPopularMovies } from "../../Api/Api";
import s from "./HomePage.module.css";
export default function HomePage() {
  const { url } = useRouteMatch();
  console.log(url);
  const [films, setFilms] = useState([]);
  useEffect(() => {
    ApiPopularMovies().then((res) => setFilms(res.results));
  }, []);

  return (
    <div className={s.wrap}>
      <h2>Trending today</h2>
      <ul>
        {films &&
          films.map((film) => (
            <li key={film.id}>
              <Link to={`movies/${film.id}`}>
                {film.title ? film.title : film.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}

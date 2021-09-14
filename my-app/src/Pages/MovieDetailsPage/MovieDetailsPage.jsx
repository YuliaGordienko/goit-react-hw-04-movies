import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Route, useRouteMatch, NavLink } from "react-router-dom";
import { ApiFilmById } from "../../Api/Api";
import Cast from "../Cast/Cast";
import Reviews from "../Reviews/Reviews";
import s from "./MovieDetailsPage.module.css";
import Button from "../../Button/Button";
export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState(null);
  const { url } = useRouteMatch();
  useEffect(() => {
    ApiFilmById(movieId).then((res) => setFilm(res));
  }, [movieId]);

  return (
    <>
      {film && (
        <>
          <Button />
          <div className={s.wrap}>
            <div className={s.wrapImg}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}
                alt={film.title}
                width="300"
                height="400"
              />
            </div>
            <div className={s.wrapDiscrip}>
              <h3>
                {film.title ? film.title : film.name}
                <span> ({film.release_date})</span>
              </h3>
              <p>User score: {film.vote_average}</p>
              <p>{film.overview}</p>
              <p>
                {film.genres ? (
                  film.genres.map((genre) => genre.name).join(" , ")
                ) : (
                  <p>not info</p>
                )}
              </p>
            </div>
            {/* <hr /> */}
          </div>
          <h3 className={s.title}>Additional information</h3>
          <ul>
            <li>
              <NavLink to={`${url}/cast`}>Cast</NavLink>
            </li>
            <li>
              <NavLink to={`${url}/reviews`}>Reviews</NavLink>
            </li>
          </ul>
        </>
      )}
      <Route path={`${url}/cast`}>{film && <Cast movieId={movieId} />}</Route>
      <Route path={`${url}/reviews`}>
        {film && <Reviews movieId={movieId} />}{" "}
      </Route>
    </>
  );
}

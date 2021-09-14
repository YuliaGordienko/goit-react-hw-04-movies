import React from "react";
import { useState, useEffect } from "react";
import { Route, useRouteMatch, NavLink } from "react-router-dom";
import { ApiReviews } from "../../Api/Api";
export default function Reviews({ movieId }) {
  const [filmReviews, setFilm] = useState([]);
  const { url } = useRouteMatch();

  useEffect(() => {
    ApiReviews(movieId).then((res) => setFilm(res.results));
  }, []);

  return (
    <>
      <ul>
        {filmReviews.length > 0 ? (
          filmReviews.map((item) => (
            <li key={item.id}>
              <p>author: {item.author}</p>
              {item.content}
            </li>
          ))
        ) : (
          <p>We don`t have any reviews for this movie</p>
        )}
      </ul>
    </>
  );
}

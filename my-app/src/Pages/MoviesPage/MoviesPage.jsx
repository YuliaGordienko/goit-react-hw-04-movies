import { Route, useRouteMatch, NavLink } from "react-router-dom";
import { useHistory, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import ListItem from "../ListItem/ListItem";
import { ApiKeyWord } from "../../Api/Api";
import s from "./MoviesPage.module.css";
export default function MoviesPage() {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState("");
  const [filmsRequest, setFilmRequest] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { url } = useRouteMatch();
  const query = new URLSearchParams(location.search).get("query") ?? "";
  const handleChange = (e) => {
    setValue(e.currentTarget.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("start search");
      return;
    }
    ApiKeyWord(value).then((res) => setFilmRequest(res.results));
    setValue("");
    history.push({
      ...location,
      search: `query=${value}`,
    });
  };
  useEffect(() => {
    if (query === "") {
      return;
    }

    ApiKeyWord(query).then((res) => setFilmRequest(res.results));
  }, [query]);
  return (
    <>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          className={s.input}
          value={value}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      {filmsRequest.length > 0 && <ListItem array={filmsRequest} />}
    </>
  );
}

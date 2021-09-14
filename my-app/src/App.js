import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navigation from "./Navigation/Navigation";
// import HomePage from "./Pages/HomePage/HomePage";
// import MoviesPage from "./Pages/MoviesPage/MoviesPage";
// import MovieDetailsPage from "./Pages/MovieDetailsPage/MovieDetailsPage";
import Spinner from "./Loader/Loader.jsx";
const HomePage = lazy(() =>
  import("./Pages/HomePage/HomePage" /* webpackChunkName: "HomePage"*/)
);
const MoviesPage = lazy(() =>
  import("./Pages/MoviesPage/MoviesPage" /* webpackChunkName: "MoviesPage"*/)
);
const MovieDetailsPage = lazy(() =>
  import(
    "./Pages/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "MovieDetailsPage" */
  )
);
function App() {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<Spinner />}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

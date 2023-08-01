import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

function Movies() {
  const { movie } = useGlobalContext();

  return (
    <>
      <section className="movie-page">
        <div className="grid  grid-4-col">
          {movie.map((currentitem) => {
            const { imdbID, Title, Poster } = currentitem;
            const moviename = Title.substring(0, 15);
            return (
              <NavLink to={`movie/${imdbID}`} key={imdbID}>
                <div className="card">
                  <div className="card-info">
                    <h2 className="cardtitle">
                      {moviename.length >= 15 ? `${moviename}...` : moviename}
                    </h2>
                    <img src={Poster} alt={imdbID} />
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Movies;

import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { API_URL, useGlobalContext } from "./context";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function SingleMovie() {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleBuyMovie = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let Timerout = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 800);

    return () => clearTimeout(Timerout);
  }, [id]);

  if (isLoading) {
    return (
      <div className="movie-section">
        <div className="loading">Loading...</div>
      </div>
    );
  }
  const grtSingileMove = (Singlemove) => {
    console.log(Singlemove);
  };
  return (
    <section id="movie-section">
      <div className="singlemovieshow">
        <div className="movie-card">
          <figure>
            <img src={movie.Poster} alt="" className="singlemovieimg" />
          </figure>
        </div>

        <div className="moviedesc">
          <h2 className="singlemmovieTitle">{movie.Title}</h2>
          <p className="card-text">{movie.Released}</p>
          <p className="card-text">{movie.Genre}</p>
          <p className="card-text">{movie.imdbRating}</p>
          <p className="card-text">{movie.Country}</p>
          <div className="Linksbutton">
            <NavLink to="/" className="btn-back">
              Go Back
            </NavLink>
            <button className="btn-back" onClick={handleBuyMovie}>
              Buy Movie
            </button>
          </div>
        </div>
        {showModal && <Modal onClose={handleCloseModal} />}
      </div>
    </section>
  );
}

export default SingleMovie;

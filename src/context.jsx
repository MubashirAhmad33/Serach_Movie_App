import React, { useContext, useEffect, useState } from "react";
import Loader from "./Loader";
export const API_URL = `http://www.omdbapi.com/?apikey=3def1928`;

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const [query, setQuery] = useState("");

  const [isError, setIsError] = useState({ show: "false", msg: "" });
  const getMovies = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      if (data.Response === "True") {
        setIsLoading(false);
        setMovie(data.Search);
        setIsError({
          show: false,
          msg: "",
        });
      } else {
        setIsError({
          show: true,
          msg: data.Error,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let Timerout = setTimeout(() => {
      getMovies(`${API_URL}&s=${query}`);
    }, 500);

    return () => clearTimeout(Timerout);
  }, [query]);

  return (
    <AppContext.Provider
      value={{ isLoading, isError, movie, query, setQuery, setIsError }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };

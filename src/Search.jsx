import React from "react";
import { useGlobalContext } from "./context";

function Search() {
  const { query, setQuery, isError, movie } = useGlobalContext();

  return (
    <section className="search-section">
      <h2 className="serachTitle">Search Your Favouite movie</h2>
      <form action="#" onSubmit={(e) => e.preventDefault()}>
        <div className="searchdiv">
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </form>
      <div className="card-error">
        <p>{isError.show && isError.msg}</p>
      </div>
    </section>
  );
}

export default Search;

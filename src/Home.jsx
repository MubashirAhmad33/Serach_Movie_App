import React, { useContext } from "react";
// import { AppContext } from "./context";
import { useGlobalContext } from "./context";
import Movies from "./Movies";
import Search from "./Search";
function Home() {
  // const name = useContext(AppContext);

  return (
    <>
      <Search />
      <Movies />
    </>
  );
}

export default Home;

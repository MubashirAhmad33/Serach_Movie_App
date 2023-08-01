import Home from "./Home";
import SingleMovie from "./SingleMovie";
import Error from "./Error";
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<SingleMovie />} />
        {/* <Route path="/form" element={<Form />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
}

export default App;

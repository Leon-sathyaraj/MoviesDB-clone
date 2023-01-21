import logo from './logo.svg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./components/home/Home";
import MovieDetail from "./components/movedetail/MovieDetail";

function App() {
  return (
      <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/movie" element={<MovieDetail />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;

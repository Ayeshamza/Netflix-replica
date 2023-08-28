
import './App.scss';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Components/Home';
import Header from './Components/Header/Header';
import Music from './Components/Music';
import Recent from './Components/Header/Recent';
import Favourite from './Components/Favourite';
import Movie from './MovieDetail';

function App() {
  return (
    <Router>

      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path="movie/:id" element={<Movie />}></Route>
        <Route path='/trending' element={<Recent />} />
        <Route path='/music' element={<Music />} />
        <Route path='/favourite' element={<Favourite />} />




      </Routes>
    </Router>


  );
}

export default App;

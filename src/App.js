import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BottomNav from './components/BottomNav';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import Movie from './pages/Movie';


function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      <Routes>
        <Route path="/cine-flix" element={ <HomePage /> }/>
        <Route path="/favorites" element={ <Favorites /> }/>
        <Route path="/profile" element={ <Profile /> }/> 
        <Route path="/:movie-id" element={ <Movie /> }/>
      </Routes>
      <BottomNav />
      </div>
    </BrowserRouter>
  );
}


export default App;

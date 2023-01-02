import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import BottomNav from './components/BottomNav';
import Profile from './pages/Profile';
import Movie from './pages/Movie';
import WatchList from './pages/WatchList';
import SignUp from './pages/SignUp';
import Login from './pages/Login';


function App() {
  const isAuth = Boolean(useSelector((state)=> state.token));
  
  return (
    <BrowserRouter>
      <Header />
      <div className="app">
      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/cine-flix" element={ <HomePage /> }/>
        <Route path="/watchlist" element={<WatchList /> }/>
        <Route path="/profile" element={<Profile /> }/>
        <Route path="/:movie-id" element={ <Movie /> }/>
        <Route path="/signup" element={ <SignUp /> }/>
        <Route path="/login" element={ <Login /> }/>
      </Routes>
      <BottomNav />
      </div>
    </BrowserRouter>
  );
}


export default App;

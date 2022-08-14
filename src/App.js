import { Routes, Route } from 'react-router-dom'
import Header from './layouts/Header';
import Favorites from './pages/Favorites';

import Home from "./pages/Home"
import Login from './pages/LoginPage';
import MovieInfo from './pages/MovieInfo';
import Register from './pages/RegisterPage';

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie-info' element={<MovieInfo />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </> 
  )
}

export default App;

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { ButtonGroup, Button } from '@mui/material';

import TopArtistPage from './components/spotifyTopComponents/TopArtistPage'
import Login from './components/Login'
import TopSongPage from './components/spotifyTopComponents/TopSongPage';
import LikedSongPage from './components/spotifyTopComponents/LikedSongPage';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<Login/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/top-artists" element={<TopArtistPage/>}/>
        <Route path="/top-song" element={<TopSongPage/>}/>
        <Route path="/liked-song" element={<LikedSongPage/>}/>
      </Routes>

      <nav>
          <ButtonGroup variant='text' aria-label="text button group">
            <Button><Link to="/home" style={{ textDecoration: 'none', color: '#dc7027' }}> Home </Link></Button>
            <Button><Link to="/top-artists" style={{ textDecoration: 'none', color: '#dc7027' }}> Top Artist </Link></Button>
            <Button><Link to="/top-song" style={{ textDecoration: 'none', color: '#dc7027' }}> Top Song </Link></Button>
            <Button><Link to="/liked-song" style={{ textDecoration: 'none', color: '#dc7027' }}> Liked Songs </Link></Button>
            <Button><Link to="/" style={{ textDecoration: 'none', color: '#dc7027' }}> Log In </Link></Button>
          </ButtonGroup>
        </nav>

    </div>
  );
}

export default App;

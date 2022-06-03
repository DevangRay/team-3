import './App.css';
import { Routes, Route } from 'react-router-dom';
import AccessTokenProvider from './Contexts/accessTokenContext';

import TopArtistPage from './components/spotifyTopComponents/TopArtistPage'
import Login from './components/Login'
import TopSongPage from './components/spotifyTopComponents/TopSongPage';
import LikedSongPage from './components/spotifyTopComponents/LikedSongPage';
import Error from './components/Error';
import Home from './components/Home';
import Nav from './components/SideNavbar';
import UserProfile from './components/UserProfile';
import Discover from './components/Discover';
// import UserProfile from './components/UserProfile';
import { useState } from 'react';

function App() {
  
  return (
    <div className="App">
      <AccessTokenProvider>
        <Routes>
          <Route path="/login" exact element={<Login/>} />
          <Route path="" exact element={<Login/>} />
        </Routes>
        <div className='navBar'>
          <Nav className="navBar"/>
        </div>

        <div className='body'>
          <Routes>
            <Route path="/home" element={<Home/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="/top-artists" element={<TopArtistPage/>}/>
            <Route path="/top-song" element={<TopSongPage/>}/>
            <Route path="/liked-song" element={<LikedSongPage/>}/>
            <Route path="/profile" element={<UserProfile/>}/>
            <Route path='/discover' element = {<Discover/>} />
            <Route path='/profile' element={<UserProfile/>} />
            <Route path="/*" element={<Error/>}/>
          </Routes>
        </div>
      </AccessTokenProvider>
    </div>
  );
}

export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile'
import Error from './pages/Error'
import User from './pages/User';
import Community from './pages/Community';
import Settings from './pages/Settings';
import Navigation from './components/Navigation';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/community' element={<Community />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
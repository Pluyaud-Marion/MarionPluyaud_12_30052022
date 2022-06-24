import React from 'react';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Profile from './pages/Profile'
import Error from './pages/Error'
import Community from './pages/Community';
import Settings from './pages/Settings';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import ErrorProfile from './pages/ErrorProfile';
import { ModeProvider } from './utils/context';

//Router
const App = () => {
  return (
    <HashRouter>
      {/* <BrowserRouter> */}
      <Navigation />
      <ModeProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<ErrorProfile />} />
          <Route path='/user/:id' element={<Profile />} />
          <Route path='/community' element={<Community />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/error' element={<Error />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </ModeProvider>
    </HashRouter>
    // </BrowserRouter>
  );
};

export default App;
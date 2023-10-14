import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import Preview from './pages/preview';
import Fitur from './pages/fitur';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/preview' element={<Preview/>}>
              <Route path='detail' element={<Preview/>}/>
          </Route>
          <Route path='features' element={<Fitur/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

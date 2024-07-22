import './App.css';
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home/HomeScreen';
import HeroSection from './Pages/Home/HeroSection';
import AboutMe from './Pages/Home/AboutMe';
import Resume from './Pages/Home/Resume';
import Projects from './Pages/Home/Projects';
import ContactMe from './Pages/Home/ContactMe';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path='/home' element={<HeroSection/>}/>
        <Route path='/aboutme' element={<AboutMe/>}/>
        <Route path='/resume' element={<Resume/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>

    </div>
    </Router>
  );
}

export default App;

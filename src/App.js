import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import MiddleHome from './components/MiddleHome';
import MidleSection from './components/MidleSection';
import ReadingBoy from './components/ReadingBoy';
import Footer from './components/Footer';
import Students from './components/Students';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MiddleHome />
      <Students />
      <MidleSection />
      <ReadingBoy />
      <Footer />
    </div>
  );
}

export default App;

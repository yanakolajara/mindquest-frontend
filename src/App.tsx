import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='app-content'>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

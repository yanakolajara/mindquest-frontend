import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from './routes/NotFound/NotFound';
import Home from './routes/Home/Home';
import Navbar from './components/Navbar/Navbar';
// import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import MemoryCards from './routes/Games/MemoryCards/MemoryCards';
import Community from './routes/Community/Community';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/community' element={<Community />} />
        <Route path='/memory-cards' element={<MemoryCards />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;

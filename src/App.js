import '../src/scss/app.scss';
import Header from './components/Header';
import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </>
      </div>
    </div>
  );
}

export default App;
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebHeader from './page/Header';
import WebFooter from './page/Footer';
import Home from './page/Home';
import BoHoa from './page/Bohoa';
import Orders from './page/MuaHang';
import GioHoa from './page/Giohoa';
import Detail from './page/Detail';
import ChauHoa from './page/ChauHoa';
import HoaSinhNhat from './page/HoaSinhNhat';
import HoaSap from './page/HoaSap';
function AppFlower() {
  // Load cartItems from localStorage on component mount
  const [cartItems, setCartItems] = useState(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    const initialCartItems = storedCartItems ? JSON.parse(storedCartItems) : [];
    return Array.isArray(initialCartItems) ? initialCartItems : [];
  });
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <Router>
      <div>
        <WebHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chauhoa" element={<ChauHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoasinhnhat" element={<HoaSinhNhat onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoa" element={<BoHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/orders" element={<Orders cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/giohoa" element={<GioHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/chitiet/:Name" element={<Detail onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoasap" element={<HoaSap onAddToCart={setCartItems} setCartItems={setCartItems} />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default AppFlower;

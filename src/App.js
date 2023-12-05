import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebHeader from './page/Header';
import WebFooter from './page/Footer';
import Home from './page/Home';
import BoHoa from './page/Bohoa';
import Orders from './page/MuaHang';
import GioHoa from './page/Giohoa';
import Detail from './page/Detail';
function AppFlower() {
  return (
    <Router>
      <div>
        <WebHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bohoa" element={<BoHoa />} />
          <Route path="/orders/:id" element={<Orders />} />
          <Route path="/giohoa" element={<GioHoa />} />
          <Route path="/chitiet/:Name" element={<Detail />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default AppFlower;

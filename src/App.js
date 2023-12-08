import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WebHeader from './page/Header';
import WebFooter from './page/Footer';
import Home from './page/Home';
import BoHoa from './page/Bohoa';
import Orders from './page/MuaHang';
import GioHoa from './page/Giohoa';
import Detail from './page/Detail';
import ChauHoaTuoi from './page/ChauHoaTuoi';
import HoaSinhNhat from './page/HoaSinhNhat';
import HoaSap from './page/HoaSap';
import HoaChucMung from './page/HoaChucMung';
import BoHoaBi from './page/BoHoaBi';
import HoaChiaBuon from './page/HoaChiaBuon';
import TraiCayKho from './page/TraiCayKho';
import TraiCayVanPhong from './page/TraiCayVanPhong';
import GioQuaTraiCay from './page/GioQuaTraiCay';
import TraiCayBanLe from './page/TraiCayBanLe';
import TraiCayBanSi from './page/TraiCayBanSi';
import LanHoDiep from './page/LanHoDiep';
import CayDeBan from './page/CayDeBan';
import CayChoPhongKhach from './page/CayChoPhongKhach';
import CayKhaiTruong from './page/CayKhaiTruong';
import HoaCuoi from './page/HoaCuoi';
import HoaDeBan from './page/HoaDeBan';
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
          <Route path="/chauhoatuoi" element={<ChauHoaTuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoasinhnhat" element={<HoaSinhNhat onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoa" element={<BoHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/orders" element={<Orders cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/giohoa" element={<GioHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/chitiet/:Name" element={<Detail onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoasap" element={<HoaSap onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoachucmung" element={<HoaChucMung onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoabi" element={<BoHoaBi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoachiabuon" element={<HoaChiaBuon onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicaykho" element={<TraiCayKho onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicayvanphong" element={<TraiCayVanPhong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/gioquatraicay" element={<GioQuaTraiCay onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicaybanle" element={<TraiCayBanLe onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicaybansi" element={<TraiCayBanSi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/lanhodiep" element={<LanHoDiep onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/caydeban" element={<CayDeBan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/caychophongkhach" element={<CayChoPhongKhach onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/caykhaitruong" element={<CayKhaiTruong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoacuoi" element={<HoaCuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoadeban" element={<HoaDeBan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default AppFlower;

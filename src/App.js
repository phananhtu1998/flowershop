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
import BoHoaCamChuong from './page/BoHoaCamChuong';
import BoHoaCatTuong from './page/BoHoaCatTuong';
import BoHoaCuc from './page/BoHoaCuc';
import BoHoaHong from './page/BoHoaHong';
import BoHoaHuongDuong from './page/BoHoaHuongDuong';
import HoaLanvender from './page/HoaLavender';
import BoHoaLan from './page/BoHoaLan';
import BoHoaLanHoDiep from './page/BoHoaHoDiep';
import BoHoaLy from './page/BoHoaLy';
import BoHoaDongTien from './page/BoHoaDongTien';
import HoaTulip from './page/HoaTulip';
import CacLoaiHoa from './page/CacLoaiHoa';
import CayXanhVanPhong from './page/CayXanhVanPhong';
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
          <Route path="/" element={<Home onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/chauhoatuoi/" element={<ChauHoaTuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoasinhnhat/" element={<HoaSinhNhat onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoa/" element={<BoHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/orders/" element={<Orders cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/giohoa/" element={<GioHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/chitiet/:Name" element={<Detail onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoasap/" element={<HoaSap onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoachucmung/" element={<HoaChucMung onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoabi/" element={<BoHoaBi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoachiabuon/" element={<HoaChiaBuon onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicaykho/" element={<TraiCayKho onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicayvanphong/" element={<TraiCayVanPhong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/gioquatraicay/" element={<GioQuaTraiCay onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicaybanle/" element={<TraiCayBanLe onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/traicaybansi/" element={<TraiCayBanSi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/lanhodiep/" element={<LanHoDiep onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/caydeban/" element={<CayDeBan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/caychophongkhach/" element={<CayChoPhongKhach onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/caykhaitruong/" element={<CayKhaiTruong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoacuoi/" element={<HoaCuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoadeban/" element={<HoaDeBan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoacamchuong/" element={<BoHoaCamChuong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoacattuong/" element={<BoHoaCatTuong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoacuc/" element={<BoHoaCuc onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoahong/" element={<BoHoaHong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoahuongduong/" element={<BoHoaHuongDuong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoalavender/" element={<HoaLanvender onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoalan" element={<BoHoaLan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoalanhodiep/" element={<BoHoaLanHoDiep onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bohoaly/" element={<BoHoaLy onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/BoHoaDongTien/" element={<BoHoaDongTien onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoatulip/" element={<HoaTulip onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cacloaihoa/" element={<CacLoaiHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cayxanhvanphong/" element={<CayXanhVanPhong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default AppFlower;

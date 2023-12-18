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
import GioHoaTuoi from './page/GioHoaTuoi';
import GioQuaTet from './page/GioQuaTet';
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
          <Route path="/chau-hoa-tuoi/" element={<ChauHoaTuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-sinh-nhat/" element={<HoaSinhNhat onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa/" element={<BoHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/orders/" element={<Orders cartItems={cartItems} setCartItems={setCartItems} />} />
          <Route path="/gio-hoa/" element={<GioHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/chi-tiet/:Name" element={<Detail onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-sap/" element={<HoaSap onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-chuc-mung/" element={<HoaChucMung onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-bi/" element={<BoHoaBi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-chia-buon/" element={<HoaChiaBuon onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/trai-cay-kho/" element={<TraiCayKho onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/trai-cay-van-phong/" element={<TraiCayVanPhong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/gio-qua-trai-cay/" element={<GioQuaTraiCay onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/trai-cay-ban-le/" element={<TraiCayBanLe onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/trai-cay-ban-si/" element={<TraiCayBanSi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/lan-ho-diep/" element={<LanHoDiep onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cay-de-ban/" element={<CayDeBan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cay-cho-phong-khach/" element={<CayChoPhongKhach onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cay-khai-truong/" element={<CayKhaiTruong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-cuoi/" element={<HoaCuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-de-ban/" element={<HoaDeBan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-cam-chuong/" element={<BoHoaCamChuong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-cat-tuong/" element={<BoHoaCatTuong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-cuc/" element={<BoHoaCuc onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-hong/" element={<BoHoaHong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-huong-duong/" element={<BoHoaHuongDuong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-lavender/" element={<HoaLanvender onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-lan" element={<BoHoaLan onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-lan-ho-diep/" element={<BoHoaLanHoDiep onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/bo-hoa-ly/" element={<BoHoaLy onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/BoHoaDongTien/" element={<BoHoaDongTien onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/hoa-tu-lip/" element={<HoaTulip onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cac-loai-hoa/" element={<CacLoaiHoa onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/cay-xanh-van-phong/" element={<CayXanhVanPhong onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/gio-hoa-tuoi/" element={<GioHoaTuoi onAddToCart={setCartItems} setCartItems={setCartItems} />} />
          <Route path="/gio-qua-tet/" element={<GioQuaTet onAddToCart={setCartItems} setCartItems={setCartItems} />} />
        </Routes>
        <WebFooter />
      </div>
    </Router>
  );
}

export default AppFlower;

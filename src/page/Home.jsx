import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Styles from '../style/homepage.module.css';
import React, { useEffect } from 'react';
export default function Home({ setCartItems }) {
    useEffect(() => {
        document.title = "Hoa Đẹp Toàn Quốc";
    });
    const BoHoaTuoi = [
        { Name: 'Love', Price: '300000', Images: '/BoHoaTuoi/love_300x300.jpg' },
        { Name: 'Bó hoa hồng trắng + Baby trắng', Price: '390000', Images: '/BoHoaTuoi/bo-hoa-hong-trang-baby-trang_300x300.jpg' },
        { Name: 'Baby girl', Price: '300000', Images: '/BoHoaTuoi/baby-girl_300x300.jpg' },
        { Name: 'Bó hoa cúc Tana', Price: '280000', Images: '/BoHoaTuoi/bo-hoa-cuc-tana_300x300.jpg' },
        { Name: 'Bó hoa hồng 7 bông kèm phụ kiện', Price: '300000', Images: '/BoHoaTuoi/bo-hoa-hong-7-bong-kem-phu-kien_300x300.jpg' },
        { Name: 'Tình hồng', Price: '300000', Images: '/BoHoaTuoi/tinh-hong_300x300.jpg' },
        { Name: 'Bó hoa hướng dương phối baby trắng', Price: '350000', Images: '/BoHoaTuoi/bo-hoa-huong-duong-phoi-baby-trang_300x300.jpg' },
        { Name: 'Bó hoa hồng kem phối bi trắng đẹp', Price: '280000', Images: '/BoHoaTuoi/bo-hoa-cuc-tana_300x300.jpg' },
        { Name: 'Cô bé mùa đông', Price: '250000', Images: '/BoHoaTuoi/co-be-mua-dong_300x300.jpg' },
        { Name: 'Bó hoa đỏ rạng ngời', Price: '660000', Images: '/BoHoaTuoi/bo-hoa-hong-do-rang-ngoi_300x300.jpg' },
        { Name: 'Màu tình yêu', Price: '2200000', Images: '/BoHoaTuoi/mau-tinh-yeu_300x300.jpg' },
        { Name: 'Bó hoa Pink', Price: '420000', Images: '/BoHoaTuoi/bo-hoa-pink_300x300.jpg' },
    ]
    const GioHoaTuoi = [
        { Name: 'Hộp hoa hồng đỏ', Images: '/GioHoaTuoi/hop-hoa-hong-do_300x300.jpg' },
        { Name: 'Sớm mai', Images: '/GioHoaTuoi/som-mai_300x300.jpg' },
        { Name: 'Giỏ hoa quý phái', Images: '/GioHoaTuoi/gio-hoa-quy-phai_300x300.jpg' },
        { Name: 'Vũ nữ hồng kem', Images: '/GioHoaTuoi/vu-nu-hong-kem_300x300.jpg' },
        { Name: 'Nắng Mai', Images: '/GioHoaTuoi/nang-mai_300x300.jpg' },
        { Name: 'Xuân Sang', Images: '/GioHoaTuoi/xuan-sang_300x300.jpg' },
        { Name: 'Thanh tao 3', Images: '/GioHoaTuoi/thanh-tao-3_300x300.jpg' },
        { Name: 'Thơ mộng', Images: '/GioHoaTuoi/tho-mong_300x300.jpg' },
        { Name: 'Ươm nắng', Images: '/GioHoaTuoi/uom-nang_300x300.jpg' },
        { Name: 'Điều kỳ diệu', Images: '/GioHoaTuoi/dieu-ky-dieu_300x300.jpg' },
        { Name: 'Ngọc ngà', Images: '/GioHoaTuoi/ngoc-nga_300x300.jpg' },
        { Name: 'Hộp hoa hồng tím dâu sang trọng', Images: '/GioHoaTuoi/hop-hoa-hong-tim-dau-sang-trong_300x300.jpg' },
    ]
    const HopHoaTuoi = [
        { Name: 'Hộp Hoa Chúc Mừng - Hướng Dương + Hồng Kem', Price: '600000', Images: '/HopHoaTuoi/hop-hoa-chuc-mung-huong-duong-hong-kem_300x300.jpg' },
        { Name: 'Hộp hoa thủy chung', Price: '420000', Images: '/HopHoaTuoi/hop-hoa-thuy-chung_300x300.jpg' },
        { Name: 'Hộp hoa hồng đỏ', Price: '1300000', Images: '/HopHoaTuoi/hop-hoa-hong-do_300x300.jpg' },
        { Name: 'Hộp hoa cẩm chướng đỏ - hồng kem', Price: '520000', Images: '/HopHoaTuoi/hop-hoa-cam-chuong-do-hong-kem_300x300.jpg' },
        { Name: 'Giản dị', Price: '415000', Images: '/HopHoaTuoi/gian-di_300x300.jpg' },
        { Name: 'Hộp hoa chúc mừng', Price: '510000', Images: '/HopHoaTuoi/hop-hoa-chuc-mung_300x300.jpg' },
        { Name: 'Hộp hoa hồng đỏ cúc Calimero trắng', Price: '540.000', Images: '/HopHoaTuoi/hop-hoa-hong-do-cuc-calimero-trang_300x300.jpg' },
        { Name: 'Hộp hoa khai trương', Price: '550000', Images: '/HopHoaTuoi/hop-hoa-khai-truong_300x300.jpg' },
        { Name: 'Hộp hoa hướng dương cúc', Price: '480000', Images: '/HopHoaTuoi/hop-hoa-huong-duong-cuc_300x300.jpg' },
        { Name: 'Sớm Mai', Price: '500000', Images: '/HopHoaTuoi/som-mai_300x300.jpg' },
        { Name: 'Hoa thương yêu', Price: '540000', Images: '/HopHoaTuoi/hoa-thuong-yeu_300x300.jpg' },
        { Name: 'Happy Life', Price: '550000', Images: '/HopHoaTuoi/happy-life_300x300.jpg' },
    ]
    const HoaLanHoDiep = [
        { Name: 'Chậu hoa lan hồ điệp tím 3 cành', Price: '750000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-tim-3-canh_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp 3 cành', Price: '750000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-3-canh_300x300.jpg' },
        { Name: 'Chậu hoa lan hồ điệp trắng 3 cành', Price: '750000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-trang-3-canh_300x300.jpg' },
        { Name: 'Chậu hoa lan hồ điệp trắng', Price: '1500000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-trang_300x300.jpg' },
        { Name: 'Chậu hoa cánh én sắc xuân', Price: '1250000', Images: '/HoaLanHoDiep/chau-hoa-canh-en-sac-xuan_300x300.jpg' },
        { Name: 'Chậu hoa lan hồ điệp vàng 3 cành', Price: '750000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-trang-3-canh_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 016', Price: '1250000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-016_300x300.jpg' },
        { Name: 'Chậu hoa phú quý lộc tài', Price: '3000000', Images: '/HoaLanHoDiep/chau-hoa-phu-quy-loc-tai_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 001', Price: '2250000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-001_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 015', Price: '1500000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-015_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 020', Price: '2500000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-020_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 019', Price: '1250000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-019_300x300.jpg' },
    ]
    const HoaKhaiTruong = [
        { Name: 'Hộp hoa hồng đỏ', Price: '1300000', Images: '/HoaKhaiTruong/hop-hoa-hong-do_300x300.jpg' },
        { Name: 'Kệ khai trương giá rẻ 01', Price: '650000', Images: '/HoaKhaiTruong/ke-khai-truong-gia-re-01_300x300.jpg' },
        { Name: 'Kệ khai trương giá rẻ', Price: '700000', Images: '/HoaKhaiTruong/ke-khai-truong-gia-re_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng may mắn 3', Price: '900000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-may-man-3_300x300.jpg' },
        { Name: 'Kệ chúc mừng vạn sự như ý 09', Price: '1020000', Images: '/HoaKhaiTruong/ke-chuc-mung-van-su-nhu-y-09_300x300.jpg' },
        { Name: 'Kệ hoa phát đạt 1', Price: '680000', Images: '/HoaKhaiTruong/ke-hoa-phat-dat-1_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng đồng tiền vàng đỏ', Price: '930000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-dong-tien-vang-do_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng thành công mới', Price: '1180000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-thanh-cong-moi_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng good luck 2', Price: '720000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-good-luck-2_300x300.jpg' },
        { Name: 'Kệ hoa khai trương hồng phát', Price: '930000', Images: '/HoaKhaiTruong/ke-hoa-khai-truong-hong-phat_300x300.jpg' },
        { Name: 'Kệ chúc mừng vạn sự như ý 08', Price: '1050000', Images: '/HoaKhaiTruong/ke-chuc-mung-van-su-nhu-y-08_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng đồng tiền vàng', Price: '810000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-dong-tien-vang_300x300.jpg' },
    ]
    const HoaChiaBuon = [
        { Name: 'Kệ chia buồn vĩnh biệt 401', Price: '790000', Images: '/HoaChiaBuon/ke-chia-buon-vinh-biet-401_300x300.jpg' },
        { Name: 'Kệ hoa chia buồn trắng', Price: '950000', Images: '/HoaChiaBuon/ke-hoa-chia-buon-trang_300x300.jpg' },
        { Name: 'Hoa chia buồn hư không', Price: '760000', Images: '/HoaChiaBuon/hoa-chia-buon-hu-khong_300x300.jpg' },
        { Name: 'Hoa chia buồn giã từ', Price: '740000', Images: '/HoaChiaBuon/hoa-chia-buon-gia-tu_300x300.jpg' },
        { Name: 'Kệ hoa chia buồn', Price: '1250000', Images: '/HoaChiaBuon/ke-hoa-chia-buon_300x300.jpg' },
        { Name: 'Hoa chia buồn giã biệt 1', Price: '600000', Images: '/HoaChiaBuon/hoa-chia-buon-gia-biet-1_300x300.jpg' },
        { Name: 'Hoa chia buồn hư không 1', Price: '850000', Images: '/HoaChiaBuon/hoa-chia-buon-hu-khong-1_300x300.jpg' },
        { Name: 'Hoa chia buồn hư không', Price: '690000', Images: '/HoaChiaBuon/hoa-chia-buon-hu-khong_300x300.jpg' },
        { Name: 'Hoa chia buồn phút biệt ly', Price: '790000', Images: '/HoaChiaBuon/hoa-chia-buon-phut-biet-ly_300x300.jpg' },
        { Name: 'Tiễn biệt', Price: '900000', Images: '/HoaChiaBuon/tien-biet_300x300.jpg' },
        { Name: 'Kệ hoa chia buồn 107', Price: '950000', Images: '/HoaChiaBuon/ke-hoa-chia-buon-107_300x300.jpg' },
        { Name: 'Kệ chia buồn hồng lan trắng', Price: '1120000', Images: '/HoaChiaBuon/ke-chia-buon-hong-lan-trang_300x300.jpg' },
    ]
    const GioTraiCayQuaTang = [
        { Name: 'Giỏ hoa chia buồn', Price: '850000', Images: '/GioTraiCayQuaTang/gio-hoa-chia-buon_300x300.jpg' },
        { Name: 'Giỏ trái cây 202', Price: '590000', Images: '/GioTraiCayQuaTang/gio-trai-cay-202_300x300.jpg' },
        { Name: 'Giỏ trái cây 208', Price: '800000', Images: '/GioTraiCayQuaTang/gio-trai-cay-208_300x300.jpg' },
        { Name: 'Giỏ trái cây 209', Price: '500000', Images: '/GioTraiCayQuaTang/gio-trai-cay-209_300x300.jpg' },
        { Name: 'Giỏ trái cây kính viếng', Price: '800000', Images: '/GioTraiCayQuaTang/gio-trai-cay-kinh-vieng_300x300.jpg' },
        { Name: 'Giỏ trái cây 102', Price: '1500000', Images: '/GioTraiCayQuaTang/gio-trai-cay-102_300x300.jpg' },
        { Name: 'Giỏ trái cây 350', Price: '700000', Images: '/GioTraiCayQuaTang/gio-trai-cay-350_300x300.jpg' },
        { Name: 'Giỏ trái cây tươi 003', Price: '1300000', Images: '/GioTraiCayQuaTang/gio-trai-cay-tuoi-003_300x300.jpg' },
        { Name: 'Giỏ trái cây T01', Price: '800000', Images: '/GioTraiCayQuaTang/gio-trai-cay-t01_300x300.jpg' },
        { Name: 'Giỏ trái cây tươi 009', Price: '1500000', Images: '/GioTraiCayQuaTang/gio-trai-cay-tuoi-009_300x300.jpg' },
        { Name: 'Giỏ hoa 310', Price: '1300000', Images: '/GioTraiCayQuaTang/gio-hoa-310_300x300.jpg' },
        { Name: 'Giỏ trái cây 351', Price: '700000', Images: '/GioTraiCayQuaTang/gio-trai-cay-351_300x300.jpg' },
    ]
    const HoaCuoi = [
        { Name: 'Will You Marry Me (kèm cài áo chú rể)', Price: '995000', Images: '/HoaCuoi/will-you-marry-me-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 77 (kèm cài áo chú rể)', Price: '520000', Images: '/HoaCuoi/bo-hoa-cuoi-77-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 84 (kèm cài áo chú rể)', Price: '480000', Images: '/HoaCuoi/bo-hoa-cuoi-84-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Miền cát trắng (kèm cài áo chú rể)', Price: '595000', Images: '/HoaCuoi/mien-cat-trang-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 43 (kèm cài áo chú rể)', Price: '690000', Images: '/HoaCuoi/bo-hoa-cuoi-43-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 60 (kèm cài áo chú rể)', Price: '550000', Images: '/HoaCuoi/bo-hoa-cuoi-60-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 122 (kèm cài áo chú rể)', Price: '550000', Images: '/HoaCuoi/bo-hoa-cuoi-122-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 95 (kèm cài áo chú rể)', Price: '480000', Images: '/HoaCuoi/bo-hoa-cuoi-95-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 115 (kèm cài áo chú rể)', Price: '550000', Images: '/HoaCuoi/bo-hoa-cuoi-115-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Đồi thông hạnh phúc (kèm cài áo chú rể)', Price: '799000', Images: '/HoaCuoi/doi-thong-hanh-phuc-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Vun đắp tình yêu (kèm cài áo chú rể)', Price: '671000', Images: '/HoaCuoi/vun-dap-tinh-yeu-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 99 (kèm cài áo chú rể)', Price: '500000', Images: '/HoaCuoi/bo-hoa-cuoi-99-kem-cai-ao-chu-re_300x300.jpg' },
    ]
    const CayXanhVP = [
        { Name: 'Cây văn phòng 02', Price: '900000', Images: '/CayXanhVp/cay-van-phong-02_300x300.jpg' },
        { Name: 'Cây trúc mây 02', Price: '850000', Images: '/CayXanhVp/cay-truc-may-02_300x300.jpg' },
        { Name: 'Cây ngũ gia bì 04', Price: '700000', Images: '/CayXanhVp/cay-ngu-gia-bi-04_300x300.jpg' },
        { Name: 'Cây trúc nhật 01', Price: '1300000', Images: '/CayXanhVp/cay-truc-nhat-01_300x300.jpg' },
        { Name: 'Cây kim tiền 01', Price: '1050000', Images: '/CayXanhVp/cay-kim-tien-01_300x300.jpg' },
        { Name: 'Cây bàng Singapore 3', Price: '1300000', Images: '/CayXanhVp/cay-bang-singapore-3_300x300.jpg' },
        { Name: 'Cây trầu bà nam mỹ 03', Price: '950000', Images: '/CayXanhVp/cay-trau-ba-nam-my-03_300x300.jpg' },
        { Name: 'Cây trầu bà nam mỹ 01', Price: '850000', Images: '/CayXanhVp/cay-trau-ba-nam-my-01_300x300.jpg' },
        { Name: 'Cây văn phòng', Price: '1200000', Images: '/CayXanhVp/cay-van-phong_300x300.jpg' },
        { Name: 'Cây kim tiền 06', Price: '1460000', Images: '/CayXanhVp/cay-kim-tien-06_300x300.jpg' },
        { Name: 'Cây cau Đài Loan 02', Price: '1200000', Images: '/CayXanhVp/cay-cau-dai-loan-02_300x300.jpg' },
        { Name: 'Cây kim tiền 04', Price: '650000', Images: '/CayXanhVp/cay-kim-tien-04_300x300.jpg' },
    ]
    const HoaDeBan = [
        { Name: 'Hoa để bàn 36', Price: '550000', Images: '/HoaDeBan/hoa-de-ban-36_300x300.jpg' },
        { Name: 'Hoa để bàn 35', Price: '500000', Images: '/HoaDeBan/hoa-de-ban-35_300x300.jpg' },
        { Name: 'Hoa để bàn 20', Price: '750000', Images: '/HoaDeBan/hoa-de-ban-20_300x300.jpg' },
        { Name: 'Hoa để bàn 08', Price: '550000', Images: '/HoaDeBan/hoa-de-ban-08_300x300.jpg' },
        { Name: 'Hoa để bàn 15', Price: '700000', Images: '/HoaDeBan/hoa-de-ban-15_300x300.jpg' },
        { Name: 'Hoa để bàn 05', Price: '1200000', Images: '/HoaDeBan/hoa-de-ban-05_300x300.jpg' },
        { Name: 'Hoa để bàn 03', Price: '1200000', Images: '/HoaDeBan/hoa-de-ban-03_300x300.jpg' },
        { Name: 'Hoa để bàn 43', Price: '600000', Images: '/HoaDeBan/hoa-de-ban-43_300x300.jpg' },
        { Name: 'Hoa để bàn 01', Price: '800000', Images: '/HoaDeBan/hoa-de-ban-01_300x300.jpg' },
        { Name: 'Hoa để bàn 42', Price: '700000', Images: '/HoaDeBan/hoa-de-ban-42_300x300.jpg' },
        { Name: 'Hoa để bàn 02', Price: '1200000', Images: '/HoaDeBan/hoa-de-ban-02_300x300.jpg' },
        { Name: 'Hoa để bàn 11', Price: '750000', Images: '/HoaDeBan/hoa-de-ban-11_300x300.jpg' },
    ]
    const navigate = useNavigate();
    const handleAddToCartAndNavigate = (item) => {
        // Tìm kiếm xem mục đã tồn tại trong localStorage hay chưa
        const storedCartItems = localStorage.getItem('cartItems');
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

        const existingItem = cartItems.find((cartItem) => cartItem.Name === item.Name);

        if (existingItem) {
            // Nếu mục đã tồn tại, tăng giá trị quantity lên 1
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        } else {
            // Nếu mục chưa tồn tại, thêm mục mới vào mảng cartItems với quantity là 1
            const newItem = {
                ...item,
                quantity: 1,
            };
            cartItems.push(newItem);
        }

        // Lưu mảng cartItems mới vào localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        // Navigate to the "/orders" route
        navigate(`/orders`);
    };
    return (
        <div>
            <div>
                <Container>
                    <div>
                        <div className={Styles.customdivider}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/bo-hoa/' className={Styles.customdanhmuchoatext}>BÓ HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {BoHoaTuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtexthoa1}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/bo-hoa/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdivider}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/gio-hoa-tuoi/' className={Styles.customdanhmuchoatext}>GIỎ HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {GioHoaTuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtexthoa1}>
                                            {/* <strong>{item.Price}</strong>
                                            <span> VNĐ</span> */}
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/gio-hoa-tuoi/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/gio-hoa/' className={Styles.customdanhmuchoatext}>HỘP HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HopHoaTuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/gio-hoa' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/lan-ho-diep/' className={Styles.customdanhmuchoatext}>HOA LAN HỒ ĐIỆP</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaLanHoDiep.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlink}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlink}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/lan-ho-diep/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-khai-truong/' className={Styles.customdanhmuchoatext}>HOA KHAI TRƯƠNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaKhaiTruong.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-khai-truong/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-chia-buon/' className={Styles.customdanhmuchoatext}>HOA CHIA BUỒN</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaChiaBuon.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-chia-buon/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/gio-qua-trai-cay/' className={Styles.customdanhmuchoatext}>GIỎ TRÁI CÂY QUÀ TẶNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {GioTraiCayQuaTang.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/gio-qua-trai-cay/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-cuoi/' className={Styles.customdanhmuchoatext}>Hoa cưới</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaCuoi.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-cuoi/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/cay-xanh-van-phong/' className={Styles.customdanhmuchoatext}>Cây xanh văn phòng</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {CayXanhVP.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/cay-xanh-van-phong/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div className={Styles.customdividerflower}>
                            <span className={Styles.customstylecontainers}>
                                <span>
                                    <a href='/hoa-de-ban/' className={Styles.customdanhmuchoatext}>Hoa để bàn</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div className={Styles.divnew}>
                        <ul className={Styles.customhoalist}>
                            {HoaDeBan.map((item, index) => (
                                <li key={index} className={Styles.customlishoabox}>
                                    <div className={Styles.customlisthoacontainer}>
                                        <div className={Styles.customdanhmuchoabox}>
                                            <span>New</span>
                                        </div>
                                        <div className={Styles.customhoaelement}>
                                            <a className={Styles.customlinkflowers}>
                                                <img onClick={() => navigate(`/chi-tiet/${item.Name}`, { state: { item } })} className={Styles.customimage} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" className={Styles.customlinkflowers}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 className={Styles.divmargin}>
                                            <a className={Styles.customtexthoa} title={item.Name}>{item.Name}</a>
                                        </h2>
                                        <div className={Styles.customtextflower}>
                                            <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div className={Styles.customonclickblock}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span className={Styles.custombuttonflowew} onClick={() => handleAddToCartAndNavigate(item, index + 1)}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div className={Styles.customcontainerflower}>
                            <a href='/hoa-de-ban/' className={Styles.customtextdebutton}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
            </div >
        </div >
    )
}

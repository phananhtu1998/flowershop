import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
    const BoHoaTuoi = [
        { Name: 'Love', Price: '300.000', Images: '/BoHoaTuoi/love_300x300.jpg' },
        { Name: 'Bó hoa hồng trắng + Baby trắng', Price: '390.000', Images: '/BoHoaTuoi/bo-hoa-hong-trang-baby-trang_300x300.jpg' },
        { Name: 'Baby girl', Price: '300.000', Images: '/BoHoaTuoi/baby-girl_300x300.jpg' },
        { Name: 'Bó hoa cúc Tana', Price: '280.000', Images: '/BoHoaTuoi/bo-hoa-cuc-tana_300x300.jpg' },
        { Name: 'Bó hoa hồng 7 bông kèm phụ kiện', Price: '300.000', Images: '/BoHoaTuoi/bo-hoa-hong-7-bong-kem-phu-kien_300x300.jpg' },
        { Name: 'Tình hồng', Price: '300.000', Images: '/BoHoaTuoi/tinh-hong_300x300.jpg' },
        { Name: 'Bó hoa hướng dương phối baby trắng', Price: '350.000', Images: '/BoHoaTuoi/bo-hoa-huong-duong-phoi-baby-trang_300x300.jpg' },
        { Name: 'Bó hoa hồng kem phối bi trắng đẹp', Price: '280.000', Images: '/BoHoaTuoi/bo-hoa-cuc-tana_300x300.jpg' },
        { Name: 'Cô bé mùa đông', Price: '250.000', Images: '/BoHoaTuoi/co-be-mua-dong_300x300.jpg' },
        { Name: 'Bó hoa đỏ rạng ngời', Price: '660.000', Images: '/BoHoaTuoi/bo-hoa-hong-do-rang-ngoi_300x300.jpg' },
        { Name: 'Màu tình yêu', Price: '2.200.000', Images: '/BoHoaTuoi/mau-tinh-yeu_300x300.jpg' },
        { Name: 'Bó hoa Pink', Price: '420.000', Images: '/BoHoaTuoi/bo-hoa-pink_300x300.jpg' },
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
        { Name: 'Hộp Hoa Chúc Mừng - Hướng Dương + Hồng Kem', Price: '600.000', Images: '/HopHoaTuoi/hop-hoa-chuc-mung-huong-duong-hong-kem_300x300.jpg' },
        { Name: 'Hộp hoa thủy chung', Price: '420.000', Images: '/HopHoaTuoi/hop-hoa-thuy-chung_300x300.jpg' },
        { Name: 'Hộp hoa hồng đỏ', Price: '1.300.000', Images: '/HopHoaTuoi/hop-hoa-hong-do_300x300.jpg' },
        { Name: 'Hộp hoa cẩm chướng đỏ - hồng kem', Price: '520.000', Images: '/HopHoaTuoi/hop-hoa-cam-chuong-do-hong-kem_300x300.jpg' },
        { Name: 'Giản dị', Price: '415.000', Images: '/HopHoaTuoi/gian-di_300x300.jpg' },
        { Name: 'Hộp hoa chúc mừng', Price: '510.000', Images: '/HopHoaTuoi/hop-hoa-chuc-mung_300x300.jpg' },
        { Name: 'Hộp hoa hồng đỏ cúc Calimero trắng', Price: '540.000', Images: '/HopHoaTuoi/hop-hoa-hong-do-cuc-calimero-trang_300x300.jpg' },
        { Name: 'Hộp hoa khai trương', Price: '550.000', Images: '/HopHoaTuoi/hop-hoa-khai-truong_300x300.jpg' },
        { Name: 'Hộp hoa hướng dương cúc', Price: '480.000', Images: '/HopHoaTuoi/hop-hoa-huong-duong-cuc_300x300.jpg' },
        { Name: 'Sớm Mai', Price: '500.000', Images: '/HopHoaTuoi/som-mai_300x300.jpg' },
        { Name: 'Hoa thương yêu', Price: '540.000', Images: '/HopHoaTuoi/hoa-thuong-yeu_300x300.jpg' },
        { Name: 'Happy Life', Price: '550.000', Images: '/HopHoaTuoi/happy-life_300x300.jpg' },
    ]
    const HoaLanHoDiep = [
        { Name: 'Chậu hoa lan hồ điệp tím 3 cành', Price: '750.000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-tim-3-canh_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp 3 cành', Price: '750.000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-3-canh_300x300.jpg' },
        { Name: 'Chậu hoa lan hồ điệp trắng 3 cành', Price: '750.000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-trang-3-canh_300x300.jpg' },
        { Name: 'Chậu hoa lan hồ điệp trắng', Price: '1.500.000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-trang_300x300.jpg' },
        { Name: 'Chậu hoa cánh én sắc xuân', Price: '1.250.000', Images: '/HoaLanHoDiep/chau-hoa-canh-en-sac-xuan_300x300.jpg' },
        { Name: 'Chậu hoa lan hồ điệp vàng 3 cành', Price: '750.000', Images: '/HoaLanHoDiep/chau-hoa-lan-ho-diep-trang-3-canh_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 016', Price: '1.250.000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-016_300x300.jpg' },
        { Name: 'Chậu hoa phú quý lộc tài', Price: '3.000.000', Images: '/HoaLanHoDiep/chau-hoa-phu-quy-loc-tai_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 001', Price: '2.250.000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-001_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 015', Price: '1.500.000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-015_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 020', Price: '2.500.000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-020_300x300.jpg' },
        { Name: 'Chậu lan hồ điệp - 019', Price: '1.250.000', Images: '/HoaLanHoDiep/chau-lan-ho-diep-019_300x300.jpg' },
    ]
    const HoaKhaiTruong = [
        { Name: 'Hộp hoa hồng đỏ', Price: '1.300.000', Images: '/HoaKhaiTruong/hop-hoa-hong-do_300x300.jpg' },
        { Name: 'Kệ khai trương giá rẻ 01', Price: '650.000', Images: '/HoaKhaiTruong/ke-khai-truong-gia-re-01_300x300.jpg' },
        { Name: 'Kệ khai trương giá rẻ', Price: '700.000', Images: '/HoaKhaiTruong/ke-khai-truong-gia-re_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng may mắn 3', Price: '900.000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-may-man-3_300x300.jpg' },
        { Name: 'Kệ chúc mừng vạn sự như ý 09', Price: '1.020.000', Images: '/HoaKhaiTruong/ke-chuc-mung-van-su-nhu-y-09_300x300.jpg' },
        { Name: 'Kệ hoa phát đạt 1', Price: '680.000', Images: '/HoaKhaiTruong/ke-hoa-phat-dat-1_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng đồng tiền vàng đỏ', Price: '930.000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-dong-tien-vang-do_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng thành công mới', Price: '1.180.000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-thanh-cong-moi_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng good luck 2', Price: '720.000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-good-luck-2_300x300.jpg' },
        { Name: 'Kệ hoa khai trương hồng phát', Price: '930.000', Images: '/HoaKhaiTruong/ke-hoa-khai-truong-hong-phat_300x300.jpg' },
        { Name: 'Kệ chúc mừng vạn sự như ý 08', Price: '1.050.000', Images: '/HoaKhaiTruong/ke-chuc-mung-van-su-nhu-y-08_300x300.jpg' },
        { Name: 'Kệ hoa chúc mừng đồng tiền vàng', Price: '810.000', Images: '/HoaKhaiTruong/ke-hoa-chuc-mung-dong-tien-vang_300x300.jpg' },
    ]
    const HoaChiaBuon = [
        { Name: 'Kệ chia buồn vĩnh biệt 401', Price: '790.000', Images: '/HoaChiaBuon/ke-chia-buon-vinh-biet-401_300x300.jpg' },
        { Name: 'Kệ hoa chia buồn trắng', Price: '950.000', Images: '/HoaChiaBuon/ke-hoa-chia-buon-trang_300x300.jpg' },
        { Name: 'Hoa chia buồn hư không', Price: '760.000', Images: '/HoaChiaBuon/hoa-chia-buon-hu-khong_300x300.jpg' },
        { Name: 'Hoa chia buồn giã từ', Price: '740.000', Images: '/HoaChiaBuon/hoa-chia-buon-gia-tu_300x300.jpg' },
        { Name: 'Kệ hoa chia buồn', Price: '1.250.000', Images: '/HoaChiaBuon/ke-hoa-chia-buon_300x300.jpg' },
        { Name: 'Hoa chia buồn giã biệt 1', Price: '600.000', Images: '/HoaChiaBuon/hoa-chia-buon-gia-biet-1_300x300.jpg' },
        { Name: 'Hoa chia buồn hư không 1', Price: '850.000', Images: '/HoaChiaBuon/hoa-chia-buon-hu-khong-1_300x300.jpg' },
        { Name: 'Hoa chia buồn hư không', Price: '690.000', Images: '/HoaChiaBuon/hoa-chia-buon-hu-khong_300x300.jpg' },
        { Name: 'Hoa chia buồn phút biệt ly', Price: '790.000', Images: '/HoaChiaBuon/hoa-chia-buon-phut-biet-ly_300x300.jpg' },
        { Name: 'Tiễn biệt', Price: '900.000', Images: '/HoaChiaBuon/tien-biet_300x300.jpg' },
        { Name: 'Kệ hoa chia buồn 107', Price: '950.000', Images: '/HoaChiaBuon/ke-hoa-chia-buon-107_300x300.jpg' },
        { Name: 'Kệ chia buồn hồng lan trắng', Price: '1.120.000', Images: '/HoaChiaBuon/ke-chia-buon-hong-lan-trang_300x300.jpg' },
    ]
    const GioTraiCayQuaTang = [
        { Name: 'Giỏ hoa chia buồn', Price: '850.000', Images: '/GioTraiCayQuaTang/gio-hoa-chia-buon_300x300.jpg' },
        { Name: 'Giỏ trái cây 202', Price: '590.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-202_300x300.jpg' },
        { Name: 'Giỏ trái cây 208', Price: '800.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-208_300x300.jpg' },
        { Name: 'Giỏ trái cây 209', Price: '500.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-209_300x300.jpg' },
        { Name: 'Giỏ trái cây kính viếng', Price: '800.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-kinh-vieng_300x300.jpg' },
        { Name: 'Giỏ trái cây 102', Price: '1.500.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-102_300x300.jpg' },
        { Name: 'Giỏ trái cây 350', Price: '700.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-350_300x300.jpg' },
        { Name: 'Giỏ trái cây tươi 003', Price: '1.300.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-tuoi-003_300x300.jpg' },
        { Name: 'Giỏ trái cây T01', Price: '800.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-t01_300x300.jpg' },
        { Name: 'Giỏ trái cây tươi 009', Price: '1.500.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-tuoi-009_300x300.jpg' },
        { Name: 'Giỏ hoa 310', Price: '1.300.000', Images: '/GioTraiCayQuaTang/gio-hoa-310_300x300.jpg' },
        { Name: 'Giỏ trái cây 351', Price: '700.000', Images: '/GioTraiCayQuaTang/gio-trai-cay-351_300x300.jpg' },
    ]
    const HoaCuoi = [
        { Name: 'Will You Marry Me (kèm cài áo chú rể)', Price: '995.000', Images: '/HoaCuoi/will-you-marry-me-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 77 (kèm cài áo chú rể)', Price: '520.000', Images: '/HoaCuoi/bo-hoa-cuoi-77-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 84 (kèm cài áo chú rể)', Price: '480.000', Images: '/HoaCuoi/bo-hoa-cuoi-84-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Miền cát trắng (kèm cài áo chú rể)', Price: '595.000', Images: '/HoaCuoi/mien-cat-trang-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 43 (kèm cài áo chú rể)', Price: '690.000', Images: '/HoaCuoi/bo-hoa-cuoi-43-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 60 (kèm cài áo chú rể)', Price: '550.000', Images: '/HoaCuoi/bo-hoa-cuoi-60-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 122 (kèm cài áo chú rể)', Price: '550.000', Images: '/HoaCuoi/bo-hoa-cuoi-122-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 95 (kèm cài áo chú rể)', Price: '480.000', Images: '/HoaCuoi/bo-hoa-cuoi-95-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 115 (kèm cài áo chú rể)', Price: '550.000', Images: '/HoaCuoi/bo-hoa-cuoi-115-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Đồi thông hạnh phúc (kèm cài áo chú rể)', Price: '799.000', Images: '/HoaCuoi/doi-thong-hanh-phuc-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Vun đắp tình yêu (kèm cài áo chú rể)', Price: '671.000', Images: '/HoaCuoi/vun-dap-tinh-yeu-kem-cai-ao-chu-re_300x300.jpg' },
        { Name: 'Bó hoa cưới 99 (kèm cài áo chú rể)', Price: '500.000', Images: '/HoaCuoi/bo-hoa-cuoi-99-kem-cai-ao-chu-re_300x300.jpg' },
    ]
    const CayXanhVP = [
        { Name: 'Cây văn phòng 02', Price: '900.000', Images: '/CayXanhVp/cay-van-phong-02_300x300.jpg' },
        { Name: 'Cây trúc mây 02', Price: '850.000', Images: '/CayXanhVp/cay-truc-may-02_300x300.jpg' },
        { Name: 'Cây ngũ gia bì 04', Price: '700.000', Images: '/CayXanhVp/cay-ngu-gia-bi-04_300x300.jpg' },
        { Name: 'Cây trúc nhật 01', Price: '1.300.000', Images: '/CayXanhVp/cay-truc-nhat-01_300x300.jpg' },
        { Name: 'Cây kim tiền 01', Price: '1.050.000', Images: '/CayXanhVp/cay-kim-tien-01_300x300.jpg' },
        { Name: 'Cây bàng Singapore 3', Price: '1.300.000', Images: '/CayXanhVp/cay-bang-singapore-3_300x300.jpg' },
        { Name: 'Cây trầu bà nam mỹ 03', Price: '950.000', Images: '/CayXanhVp/cay-trau-ba-nam-my-03_300x300.jpg' },
        { Name: 'Cây trầu bà nam mỹ 01', Price: '850.000', Images: '/CayXanhVp/cay-trau-ba-nam-my-01_300x300.jpg' },
        { Name: 'Cây văn phòng', Price: '1.200.000', Images: '/CayXanhVp/cay-van-phong_300x300.jpg' },
        { Name: 'Cây kim tiền 06', Price: '1.460.000', Images: '/CayXanhVp/cay-kim-tien-06_300x300.jpg' },
        { Name: 'Cây cau Đài Loan 02', Price: '1.200.000', Images: '/CayXanhVp/cay-cau-dai-loan-02_300x300.jpg' },
        { Name: 'Cây kim tiền 04', Price: '650.000', Images: '/CayXanhVp/cay-kim-tien-04_300x300.jpg' },
    ]
    const HoaDeBan = [
        { Name: 'Hoa để bàn 36', Price: '550.000', Images: '/HoaDeBan/hoa-de-ban-36_300x300.jpg' },
        { Name: 'Hoa để bàn 35', Price: '500.000', Images: '/HoaDeBan/hoa-de-ban-35_300x300.jpg' },
        { Name: 'Hoa để bàn 20', Price: '750.000', Images: '/HoaDeBan/hoa-de-ban-20_300x300.jpg' },
        { Name: 'Hoa để bàn 08', Price: '550.000', Images: '/HoaDeBan/hoa-de-ban-08_300x300.jpg' },
        { Name: 'Hoa để bàn 15', Price: '700.000', Images: '/HoaDeBan/hoa-de-ban-15_300x300.jpg' },
        { Name: 'Hoa để bàn 05', Price: '1.200.000', Images: '/HoaDeBan/hoa-de-ban-05_300x300.jpg' },
        { Name: 'Hoa để bàn 03', Price: '1.200.000', Images: '/HoaDeBan/hoa-de-ban-03_300x300.jpg' },
        { Name: 'Hoa để bàn 43', Price: '600.000', Images: '/HoaDeBan/hoa-de-ban-43_300x300.jpg' },
        { Name: 'Hoa để bàn 01', Price: '800.000', Images: '/HoaDeBan/hoa-de-ban-01_300x300.jpg' },
        { Name: 'Hoa để bàn 42', Price: '700.000', Images: '/HoaDeBan/hoa-de-ban-42_300x300.jpg' },
        { Name: 'Hoa để bàn 02', Price: '1.200.000', Images: '/HoaDeBan/hoa-de-ban-02_300x300.jpg' },
        { Name: 'Hoa để bàn 11', Price: '750.000', Images: '/HoaDeBan/hoa-de-ban-11_300x300.jpg' },
    ]
    return (
        <div>
            <div>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>BÓ HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {BoHoaTuoi.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>GIỎ HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {GioHoaTuoi.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ margin: '30px', fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            {/* <strong>{item.Price}</strong>
                                            <span> VNĐ</span> */}
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>HỘP HOA TƯƠI</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {HopHoaTuoi.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>HOA LAN HỒ ĐIỆP</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {HoaLanHoDiep.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>HOA KHAI TRƯƠNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {HoaKhaiTruong.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>HOA CHIA BUỒN</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {HoaChiaBuon.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>GIỎ TRÁI CÂY QUÀ TẶNG</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {GioTraiCayQuaTang.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>Hoa cưới</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {HoaCuoi.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>Cây xanh văn phòng</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {CayXanhVP.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #850132' }}>
                            <span style={{ background: '#850132', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
                                <span>
                                    <a href="/" style={{
                                        textDecoration: 'none', fontStyle: 'italic', color: 'inherit', fontSize: '22px', fontWeight: 'bolder'
                                    }}>Hoa để bàn</a>
                                </span>
                            </span>
                        </div>
                    </div>
                    <div style={{ padding: '20px 0 0' }}>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {HoaDeBan.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ position: 'relative', display: 'block', width: '290px', padding: '0', background: '#3498db', boxShadow: '0 5px 10px rgba(0,0,0,.1)', color: '#fff', textShadow: '0 1px 1px rgba(0,0,0,.2)', textTransform: 'uppercase', textAlign: 'center', zIndex: '1', fontSize: '13px', transform: 'rotate(45deg)', right: '-115px', top: '23px' }}>
                                            <span>New</span>
                                        </div>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

import style from '../style/homepage.module.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../asset/banner/banner_hty-vn.jpg';

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
    return (
        <div>
            <div className={style.divmain} >
                <Container>
                    <div>
                        <Navbar expand="lg" className="bg-body-tertiary">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Trang chủ</Nav.Link>
                                        <NavDropdown title="Kiểu dáng" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Bó hoa</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Giỏ hoa-hộp hoa
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#home">Hoa sáp</Nav.Link>
                                        <Nav.Link href="#home">Hoa chúc mừng</Nav.Link>
                                        <Nav.Link href="#home">Hoa chia buồn</Nav.Link>
                                        <NavDropdown title="Trái cây" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">
                                                Trái cây khô
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Trái cây văn phòng
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Giỏ quà trái cây
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Trái cây bán lẻ
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                trái cây bán sỉ
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#home">Lan hồ điệp</Nav.Link>
                                        <NavDropdown title="Loại hoa" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">
                                                Bó hoa bi
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa cẩm chướng
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa cát tường
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa cúc
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa hồng
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa hướng dương
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Hoa Lavender
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa lan
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa lan hồ điệp
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa ly
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Bó hoa đồng tiền
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Hoa tulip
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Các loài hoa
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <NavDropdown title="Cây xanh văn phòng" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">
                                                Cây để bàn
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Cây cho phòng khách
                                            </NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">
                                                Cây khai trương
                                            </NavDropdown.Item>
                                        </NavDropdown>
                                        <Nav.Link href="#home">Hoa cưới</Nav.Link>
                                        <Nav.Link href="#home">Hoa để bàn</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <div className={style.div134}>
                            <div>
                                <div className={style.divDescription}>
                                    <span>DV ĐIỆN HOA TOÀN QUỐC - 63 TỈNH - THÀNH PHỐ</span>
                                </div>
                                <div>
                                    <p>Hoadeptoanquoc cảm ơn quý khách đã tin tưởng và đồng hành cùng chúng tôi trong suốt thời gian qua. Hoadeptoanquoc
                                        <span>
                                            <strong style={{ color: '#ff0000' }}> nhận gửi điện hoa Toàn quốc</strong>
                                            . Quý khách có thể đặt hàng trên web hoặc chat với chúng tôi qua zalo hoặc khung chat góc phải website để được tư vấn cụ thể hơn.
                                        </span>
                                    </p>
                                    <p>Trân trọng và cảm ơn!</p>
                                </div>
                                <div className={style.divDescription1}>
                                    <span>DANH MỤC HOA TƯƠI</span>
                                </div>
                                <div>
                                    <p>
                                        <span>♦
                                            <a href='/'> BÓ HOA TƯƠI</a>
                                        </span>
                                    </p>
                                    <p>
                                        <span>♦
                                            <a href='/'> HỘP HOA TƯƠI</a>
                                        </span>
                                    </p>
                                    <p>
                                        <span>♦
                                            <a href='/'> GIỎ HOA TƯƠI</a>
                                        </span>
                                    </p>
                                    <p>
                                        <span>♦
                                            <a href='/'> KỆ HOA CHÚC MỪNG</a>
                                        </span>
                                    </p>
                                    <p>
                                        <span>♦
                                            <a href='/'> KỆ HOA CHIA BUỒN</a>
                                        </span>
                                    </p>
                                    <p>
                                        <span>♦
                                            <a href='/'> HOA LAN HỒ ĐIỆP</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                            <div>
                                <img src={banner}></img>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
            <div>
                <Container>
                    <div>
                        <div style={{ margin: '30px 0 0 0', borderBottom: '2px solid #E35454' }}>
                            <span style={{ background: '#E35454', color: '#fff', padding: '6px 20px', borderRadius: '5px 5px 0 0' }}>
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
            </div>
        </div>
    )
}

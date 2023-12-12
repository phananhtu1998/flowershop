import styles from '../style/header.module.css'
import Container from 'react-bootstrap/Container';
import logo from '../asset/Logo/logoo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
// import banner from '../asset/banner/banner_hty-vn.jpg';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import lstData from '../Data/data';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "../style/global.css"
const WebHeader = () => {
    //slider
    const images = [
        '/banner/banner_hty-vn.jpg',
        '/banner/Screenshot_1.png',
        '/banner/SpringFlowersBanner.png',
        '/banner/banner1.png',
        '/banner/434433_63-tinh-thanh.jpg',
        '/banner/434445_only-rose.jpg'
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 768, // Breakpoint cho tablet
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 480, // Breakpoint cho điện thoại
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    const navigate = useNavigate();
    const [datanew, setdatanew] = useState([]);
    const HandleSearch = (e) => {
        console.log(e)
        let filterData = lstData.filter(item => {
            const itemNameLowerCase = item.Name.toLowerCase();
            // Check if the Unicode characters in the Name field include the search term
            return itemNameLowerCase.includes(e.toLowerCase());
        })
        if (filterData.length > 0) {
            setdatanew([...filterData])
        }
        if (e == "") {
            setdatanew([])
        }
    }
    return (
        <>
            <div className={styles.divheader}>
                <div className={styles.divheaderchild}>
                    <div className={styles.divheaderchild1}>
                        <div>
                            <div>
                                <div>
                                    <div>
                                        <div className={styles.divtimeworking}>
                                            <p className={styles.ptimeworking}>
                                                <span className={styles.spantimeworking}>Thời gian làm việc 7:00 - 24:00</span>
                                            </p>
                                        </div>
                                        <div className={styles.divtimeworking}>
                                            <p className={styles.ptimeworking}>
                                                <span className={styles.spantimeworking}>Hệ thống shop: 3139 cửa hàng & đối tác ở tất cả các quận, huyện, thành phố trên 63 tỉnh thành</span>
                                            </p>
                                        </div>
                                        <div className={styles.divtimeworking}>
                                            <p className={styles.ptimeworking}>
                                                <span className={styles.spantimeworking}>
                                                    <strong style={{ fontWeight: 'bold' }}>
                                                        HOTLINE:
                                                        <a style={{ textDecoration: 'none', color: '#FFFFFF' }} href='tel:0979336771'> 0979336771</a>
                                                    </strong>
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
                <div className={styles.divorder}>
                    <Container>
                        <div className={styles.divlogo}>
                            <div>
                                <span className={styles.spanlogo}>
                                    <a href="/">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </span>
                            </div>
                            <div className={styles.customsearch}>
                                <div className={styles.divcontain}>
                                    <div className={styles.div1}>
                                        <div>
                                            <div className={styles.div2}>
                                                <input className={styles.inputext}
                                                    type="text"
                                                    placeholder='Tìm kiếm'
                                                    onChange={(e) => HandleSearch(e.target.value)}
                                                />
                                                <i className={styles.customflexcontainer}>
                                                    <SearchOutlined />
                                                </i>
                                                {datanew.length > 0 && (
                                                    <div className={styles.custompopup}>
                                                        <div>
                                                            <ul className={styles.ulstyle}>
                                                                {datanew.map((item, index) => (
                                                                    <li onClick={() => navigate(`/chitiet/${item.Name}`, { state: { item } })} className={styles.searchItem} style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }} title={item.Name} key={index}>
                                                                        <div className={styles.div3}>
                                                                            <div className={styles.div3child}>
                                                                                <img className={styles.customimage} src={item.Images} alt="" />
                                                                                <span className={styles.spandiv3}> {item.Name}</span>
                                                                            </div>
                                                                            <div>
                                                                                <span style={{ color: 'red' }}>{item.Price}</span>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </div>
                                                    </div>)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Container>
                </div >
                <div className={styles.divmain} >
                    <Container>
                        <div>
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav style={{ fontWeight: 'bold', fontSize: '13.5px' }} className="me-auto">
                                            <Nav.Link as={Link} to="/">TRANG CHỦ</Nav.Link>
                                            <NavDropdown title="KIỂU DÁNG" id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} to="/bohoa/">
                                                    Bó hoa
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/giohoa/">
                                                    Giỏ hoa-hộp hoa
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/chauhoatuoi/">
                                                    Chậu hoa tươi
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link as={Link} to="/hoasinhnhat/">HOA SINH NHẬT</Nav.Link>
                                            <Nav.Link as={Link} to="/hoasap/">HOA SÁP</Nav.Link>
                                            <Nav.Link as={Link} to="/hoachucmung/">HOA CHÚC MỪNG</Nav.Link>
                                            <Nav.Link as={Link} to="/hoachiabuon/">HOA CHIA BUỒN</Nav.Link>
                                            <NavDropdown title="TRÁI CÂY" id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} to="/traicaykho/">
                                                    Trái cây khô
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/traicayvanphong/">
                                                    Trái cây văn phòng
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/gioquatraicay/">
                                                    Giỏ quà trái cây
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/traicaybanle/">
                                                    Trái cây bán lẻ
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/traicaybansi/">
                                                    trái cây bán sỉ
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link as={Link} to="/lanhodiep/">LAN HỒ ĐIỆP</Nav.Link>
                                            <NavDropdown title="LOẠI HOA" id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} to="/bohoabi/">
                                                    Bó hoa bi
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoacamchuong/">
                                                    Bó hoa cẩm chướng
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoacattuong/">
                                                    Bó hoa cát tường
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoacuc/">
                                                    Bó hoa cúc
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoahong/">
                                                    Bó hoa hồng
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoahuongduong/">
                                                    Bó hoa hướng dương
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/hoalavender/">
                                                    Hoa Lavender
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoalan/">
                                                    Bó hoa lan
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoalanhodiep/">
                                                    Bó hoa lan hồ điệp
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoaly/">
                                                    Bó hoa ly
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/bohoadongtien/">
                                                    Bó hoa đồng tiền
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/hoatulip/">
                                                    Hoa tulip
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/cacloaihoa/">
                                                    Các loài hoa
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <NavDropdown title="CÂY VĂN PHÒNG" id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} to="/caydeban/">
                                                    Cây để bàn
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/caychophongkhach/">
                                                    Cây cho phòng khách
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/caykhaitruong/">
                                                    Cây khai trương
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link as={Link} to="/hoacuoi/">HOA CƯỚI</Nav.Link>
                                            <Nav.Link as={Link} to="/hoadeban/">HOA ĐỂ BÀN</Nav.Link>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                            <div className={styles.div134}>
                                <div>
                                    <div className={styles.divDescription}>
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
                                    <div className={styles.divDescription1}>
                                        <span>DANH MỤC HOA TƯƠI</span>
                                    </div>
                                    <div>
                                        <p>
                                            <span className={styles.danhmuc}>✿
                                                <a href='/'> BÓ HOA TƯƠI</a>
                                            </span>
                                        </p>
                                        <p>
                                            <span className={styles.danhmuc}>✿
                                                <a href='/'> HỘP HOA TƯƠI</a>
                                            </span>
                                        </p>
                                        <p>
                                            <span className={styles.danhmuc}>✿
                                                <a href='/'> GIỎ HOA TƯƠI</a>
                                            </span>
                                        </p>
                                        <p>
                                            <span className={styles.danhmuc}>✿
                                                <a href='/'> KỆ HOA CHÚC MỪNG</a>
                                            </span>
                                        </p>
                                        <p>
                                            <span className={styles.danhmuc}>✿
                                                <a href='/'> KỆ HOA CHIA BUỒN</a>
                                            </span>
                                        </p>
                                        <p>
                                            <span className={styles.danhmuc}>✿
                                                <a href='/'> HOA LAN HỒ ĐIỆP</a>
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className={styles.divslider}>
                                    <div className={styles.divchild} >
                                        <span>
                                            <Slider {...settings} >
                                                {images.map((image, index) => (
                                                    <div key={index}>
                                                        <img src={image} alt={`slide-${index}`} />
                                                    </div>
                                                ))}
                                            </Slider>
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </Container>
                </div>
            </div >
        </>
    )
}
export default WebHeader;
import styles from '../style/header.module.css'
import Container from 'react-bootstrap/Container';
import logo from '../asset/Logo/logoo.png';
import style from '../style/homepage.module.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner from '../asset/banner/banner_hty-vn.jpg';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';
import lstData from '../Data/data';
import { useState } from 'react';

const WebHeader = () => {
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
            <div style={{ backgroundColor: '#93D250' }}>
                <div style={{ display: 'block', verticalAlign: 'top', position: 'relative', boxSizing: 'border-box' }}>
                    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                        <div style={{ color: '#FFFFFF' }}>
                            <div>
                                <div>
                                    <div>
                                        <div style={{ display: 'inline-block', color: '#0D0E0F', padding: '0 20px' }}>
                                            <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                <span style={{ color: '#ffffff', fontSize: '12pt' }}>Thời gian làm việc 7:00 - 24:00</span>
                                            </p>
                                        </div>
                                        <div style={{ display: 'inline-block', color: '#0D0E0F', padding: '0 20px' }}>
                                            <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                <span style={{ color: '#ffffff', fontSize: '12pt' }}>Hệ thống shop: 3139 cửa hàng & đối tác ở tất cả các quận, huyện, thành phố trên 63 tỉnh thành</span>
                                            </p>
                                        </div>
                                        <div style={{ display: 'inline-block', color: '#0D0E0F', padding: '0 20px' }}>
                                            <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                <span style={{ color: '#c70a0a', fontSize: '12pt' }}>
                                                    <strong style={{ fontWeight: 'bold' }}>
                                                        HOTLINE:
                                                        <a style={{ textDecoration: 'none', color: '#c70a0a' }} href='tel:1900 3189'> 1900 3189</a>
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
                        <div style={{ position: 'relative' }}>
                            <div>
                                <span style={{ justifyContent: 'space-between' }}>
                                    <a href="/">
                                        <img src={logo} alt="Logo" />
                                    </a>
                                </span>
                            </div>
                            <div style={{ display: 'inline-block', width: '75%', verticalAlign: 'top', position: 'absolute', top: '10%', right: '0', boxSizing: 'border-box' }}>
                                <div style={{ textAlign: 'right', margin: '0px auto' }}>
                                    <div style={{ display: 'block' }}>
                                        <div>
                                            <div style={{ display: 'inline-block', position: 'relative', height: '40px' }}>
                                                <input style={{
                                                    boxSizing: 'border-box',
                                                    border: '1px solid #ccc',
                                                    color: 'fieldtext',
                                                    textRendering: 'auto',
                                                    letterSpacing: 'nomal',
                                                    wordSpacing: 'normal',
                                                    lineHeight: 'normal',
                                                    textTransform: 'none',
                                                    textIndent: '0px',
                                                    textShadow: 'none',
                                                    display: 'inline-block',
                                                    textAlign: 'start',
                                                    appearance: 'auto',
                                                    cursor: 'text',
                                                    backgroundColor: 'field',
                                                    margin: '0em',
                                                    padding: '1px 0px',
                                                    paddingBlock: '1px',
                                                    paddingInline: '2px'
                                                }}
                                                    type="text"
                                                    placeholder='Tìm kiếm'
                                                    onChange={(e) => HandleSearch(e.target.value)}
                                                />
                                                <i style={{
                                                    position: 'absolute',
                                                    height: 'inherit',
                                                    right: '0',
                                                    top: '0',
                                                    display: 'inline-flex',
                                                    alignItems: 'center',
                                                    marginRight: '10px',
                                                    height: '25px'
                                                }}>
                                                    <SearchOutlined />
                                                </i>
                                                {datanew.length > 0 && (
                                                    <div style={{
                                                        position: 'absolute',
                                                        padding: '8px',
                                                        zIndex: '999999999999',
                                                        color: '#333',
                                                        textAlign: 'left',
                                                        border: '1px dotted #333',
                                                        background: '#fff',
                                                        minWidth: '400px',
                                                        maxHeight: '500px',
                                                        overflowY: "scroll",
                                                    }}>
                                                        <div>
                                                            <ul style={{ paddingLeft: 0, fontSize: '13px' }}>
                                                                {datanew.map((item, index) => (
                                                                    <li onClick={() => navigate(`/chitiet/${item.Name}`, { state: { item } })} className={styles.searchItem} style={{ listStyle: 'none', marginBottom: '5px', cursor: 'pointer' }} title={item.Name} key={index}>
                                                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                                                            <div style={{ display: 'flex' }}>
                                                                                <img style={{ display: 'flex', width: "34px", height: "34px", maxWidth: '34px', maxHeight: '34px', objectFit: 'cover' }} src={item.Images} alt="" />
                                                                                <span style={{ marginLeft: '5px' }}> {item.Name}</span>
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
                <div className={style.divmain} >
                    <Container>
                        <div>
                            <Navbar expand="lg" className="bg-body-tertiary">
                                <Container>
                                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Nav style={{ fontWeight: 'bold', fontSize: '13.5px' }} className="me-auto">
                                            <Nav.Link as={Link} to="/">TRANG CHỦ</Nav.Link>
                                            <NavDropdown title="KIỂU DÁNG" id="basic-nav-dropdown">
                                                <NavDropdown.Item as={Link} to="/bohoa">
                                                    Bó hoa
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/giohoa">
                                                    Giỏ hoa-hộp hoa
                                                </NavDropdown.Item>
                                                <NavDropdown.Item as={Link} to="/chauhoa">
                                                    Chậu hoa tươi
                                                </NavDropdown.Item>
                                            </NavDropdown>
                                            <Nav.Link as={Link} to="/hoasinhnhat">HOA SINH NHẬT</Nav.Link>
                                            <Nav.Link as={Link} to="/hoasap">HOA SÁP</Nav.Link>
                                            <Nav.Link href="#home">HOA CHÚC MỪNG</Nav.Link>
                                            <Nav.Link href="#home">HOA CHIA BUỒN</Nav.Link>
                                            <NavDropdown title="TRÁI CÂY" id="basic-nav-dropdown">
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
                                            <Nav.Link href="#home">LAN HỒ ĐIỆP</Nav.Link>
                                            <NavDropdown title="LOẠI HOA" id="basic-nav-dropdown">
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
                                            <NavDropdown title="CÂY VĂN PHÒNG" id="basic-nav-dropdown">
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
                                            <Nav.Link href="#home">HOA CƯỚI</Nav.Link>
                                            <Nav.Link href="#home">HOA ĐỂ BÀN</Nav.Link>
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
            </div >
        </>
    )
}
export default WebHeader;
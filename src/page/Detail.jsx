import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import lstHoa from '../Data/data';
const Detail = ({ setCartItems }) => {
    const { Name } = useParams();
    const [item, setItem] = useState(null);
    const [LstSpLienQuan, setLstSpLienQuan] = useState([]);
    const [quantity, setQuantity] = useState(1);

    // Hàm để xử lý sự kiện tăng số lượng
    const handleIncrease = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Hàm để xử lý sự kiện giảm số lượng
    const handleDecrease = () => {
        // Đảm bảo số lượng không thể giảm dưới 1
        if (quantity > 1) {
            setQuantity(prevQuantity => prevQuantity - 1);
        }
    };
    const handleAddToCartAndNavigate = (item, quantity) => {
        console.log('Item:', item);
        console.log('Quantity:', quantity);
        // Tìm kiếm xem mục đã tồn tại trong localStorage hay chưa
        const storedCartItems = localStorage.getItem('cartItems');
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

        const existingItem = cartItems.find((cartItem) => cartItem.Name === item.Name);

        if (existingItem) {
            // Nếu mục đã tồn tại, tăng giá trị quantity lên 1
            existingItem.quantity = (existingItem.quantity || 0) + quantity;
        } else {
            // Nếu mục chưa tồn tại, thêm mục mới vào mảng cartItems với quantity là 1
            const newItem = {
                ...item,
                quantity: quantity,
            };
            cartItems.push(newItem);
        }

        // Lưu mảng cartItems mới vào localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        // Navigate to the "/orders" route
        navigate(`/orders`);
    };
    const navigate = useNavigate();
    useEffect(() => {
        let foundItem = lstHoa.find(item => item.Name === Name);
        console.log("foundItem", foundItem)
        setLstSpLienQuan(lstHoa.filter(item => item.Category === foundItem.Category))
        if (foundItem) {
            setItem(foundItem);
        }
    }, [Name]);
    if (!item) {
        return <div style={{ textAlign: "center" }}>Không có sản phẩm !</div>; // You might want to add a loading state or handle not found case
    }
    return (
        <div style={{ display: 'block', verticalAlign: 'top', position: 'relative', boxSizing: 'border-box' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <div style={{ padding: '10px 0' }}>
                    <div style={{ display: 'block', verticalAlign: 'top', position: 'relative', boxSizing: 'border-box' }}>
                        <div style={{ display: 'block', verticalAlign: 'top', position: 'relative', boxSizing: 'border-box', textAlign: 'left' }}>
                            <div style={{ padding: '10px 0', position: 'relative' }}>
                                <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}></p>
                                <div style={{ width: '50%', display: 'inline-block', verticalAlign: 'top' }}>
                                    <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                        <a style={{ textDecoration: 'none', color: 'indianred' }}>
                                            <img style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'contain', zIndex: '1', maxWidth: '100%' }} src={item.Images} alt="" />
                                        </a>
                                    </div>
                                    <div style={{ margin: '10px 0', display: 'block' }}>
                                        <img style={{ height: '50px', border: '1px solid #ccc', padding: '1px', cursor: 'pointer' }} src={item.Images} alt="" />
                                    </div>
                                </div>

                                <div style={{ width: '48%', display: 'inline-block', verticalAlign: 'top', marginLeft: '2%' }}>
                                    <h1 style={{ fontSize: '24px', margin: '10px 0 0', fontWeight: 'normal' }}>
                                        <span>{item.Name}</span>
                                    </h1>
                                    <p style={{ fontSize: '18px', marginBottom: '10px !important', fontWeight: 'bold', color: '#E13028' }}>
                                        <span>Giá: </span>
                                        <span>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')} VNĐ</span>
                                    </p>
                                    <div style={{ display: 'block', verticalAlign: 'top', fontSize: '14px', background: '#ECF7ED', position: 'relative', boxSizing: 'border-box', textAlign: 'left' }}>
                                        <div style={{ border: '1px solid #c4ddc8', borderRadius: '10px' }}>
                                            <div style={{ padding: '20px', position: 'relative', display: 'block' }}>
                                                <div style={{ textAlign: 'justify' }}>
                                                    <span style={{ color: '#008000' }}>
                                                        <strong style={{ fontWeight: 'bold' }}>Hệ thống cửa hàng của Hoa Thương Yêu gồm 3139 cửa hàng trên toàn quốc. Nhận đặt và giao hoa tại tất các xã, phường, thị trấn của các quận huyện trên toàn quốc.</strong>
                                                    </span>
                                                </div>
                                                <div style={{ textAlign: 'justify' }}>
                                                    &nbsp;
                                                </div>
                                                <div style={{ textAlign: 'justify' }}>
                                                    <span style={{ color: '#008000' }}>
                                                        <strong style={{ fontWeight: 'bold' }}>Chương trình giá khuyến mãi hiện áp dụng tại Hồ Chí Minh, các khu vực khác khách hàng vui lòng liên hệ bộ phận tư vấn để cập nhật ưu đãi tùy thời điểm</strong>
                                                    </span>
                                                </div>
                                                <div style={{ textAlign: 'justify' }}>
                                                    &nbsp;
                                                </div>
                                                <div style={{ textAlign: 'justify' }}>
                                                    <span style={{ color: '#008000' }}>
                                                        <strong style={{ fontWeight: 'bold' }}>Quý khách cần đặt hoa có thể bấm vào
                                                            <span style={{ color: '#ff0000', fontWeight: 'bold' }}> ĐẶT HÀNG NGAY </span>
                                                            bên dưới và đặt trực tiếp trên website hoặc liên hệ SĐT và zalo để được nhân viên tư vấn cụ thể:
                                                        </strong>
                                                    </span>
                                                </div>
                                                <div style={{ textAlign: 'justify' }}>
                                                    &nbsp;
                                                </div>
                                                <div style={{ display: 'block', fontSize: '14px' }}>
                                                    <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                        <strong style={{ fontWeight: 'bold', fontSize: '14px' }}>Hotline: </strong>
                                                        <span style={{ color: '#ff0000', fontSize: '14px' }}>
                                                            <strong style={{ fontWeight: 'bold' }}>
                                                                <a style={{ color: '#ff0000', textDecoration: 'none' }} href='tel:19003189'> 0979336771</a>
                                                            </strong>
                                                            &nbsp;
                                                        </span>
                                                    </p>
                                                </div>
                                                <div style={{ textAlign: 'justify' }}>
                                                    &nbsp;
                                                </div>
                                                <div style={{ display: 'block', fontWeight: 'bold' }}>
                                                    <a style={{ textDecoration: 'none', color: 'red' }} href="https://zalo.me/1664071818027683536">
                                                        <img src="/zalo.png" alt="" style={{ width: '20px', height: '20px', verticalAlign: 'middle', aspectRatio: 'auto 20/20', overflowClipMargin: 'content-box', overflow: 'clip', cursor: 'pointer' }} />
                                                        &nbsp; CHAT ĐỂ ĐƯỢC TƯ VẤN
                                                    </a>
                                                </div>
                                                <div style={{ display: 'block', fontWeight: 'bold', marginTop: '5px' }}>
                                                    <a style={{ textDecoration: 'none', color: 'red' }} href="https://zalo.me/1664071818027683536">
                                                        <img src="/fb.png" alt="" style={{ width: '20px', height: '20px', verticalAlign: 'middle', aspectRatio: 'auto 20/20', overflowClipMargin: 'content-box', overflow: 'clip', cursor: 'pointer' }} />
                                                        &nbsp; CHAT ĐỂ ĐƯỢC TƯ VẤN
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'block', verticalAlign: 'top', fontSize: '14px' }}>
                                        <div style={{ border: '1px solid #ccc', borderRadius: '10px' }}>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ MIỄN PHÍ BANNER, THIỆP trị giá 20.000đ
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Giảm 5% cho lần mua thứ 5 trở đi
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Giảm 7% cho lần mua thứ 7
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Giảm 10% cho lần mua thứ 10 trở đi
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Gửi hình trước khi giao, cam kết hài lòng 100%
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Cam kết hoa tươi trên 3 ngày
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Một số mẫu chỉ có tại TPHCM và Hà Nội, khách hàng ở các tỉnh vui lòng liên hệ trực tiếp để biết thêm chi tiết.
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                &nbsp;&nbsp;✅ Sản phẩm tại Tphcm & Hà Nội có thể đạt 95%-98%, sản phẩm tại các tỉnh thành khác có thể đạt 90%-95% (do sản phẩm được làm thủ công và đặc điểm theo mùa của hàng nông nghiệp)
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'block', verticalAlign: 'top', position: 'relative', boxSizing: 'border-box' }}>
                                        <div style={{ display: 'block' }}>
                                            <div style={{ position: 'relative' }}>
                                                <div style={{ background: '#ee3f862e', padding: '10px', marginBottom: '10px', border: 'solid 1px #ccc', borderRadius: '5px', fontSize: '15px' }}>
                                                    <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                        🌸Giá Hồ Điệp tại Thành phố Hồ Chí Minh 250,000vnd /1 cành,
                                                        <br />
                                                        🌸Giá Hồ Điệp tại Đà Nẵng và Hà Nội là 330,000vnd/ 1 cành
                                                        <br />
                                                        🌸Giá hồ điệp tại các tỉnh thành khu vực khác là 350,000vnd
                                                        <br />
                                                        🌸Giá hồ điệp dành cho các doanh nghiệp hàng tháng ít nhất 50 cành thì vui lòng liên hệ bộ phận tư vấn để biết thêm thông tin
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ margin: '10px 0', display: 'block' }}>
                                        <div style={{ display: 'inline-block', border: '1px solid #666', marginRight: '2px' }}>
                                            <label onClick={handleDecrease} style={{ borderRight: '1px solid #666', display: 'inline-block', padding: '5px 10px', cursor: 'pointer' }}>-</label>
                                            <input type="text" style={{ width: '50px', height: '20px', textAlign: 'center', border: '0px' }} value={quantity} placeholder='Số lượng' readOnly />
                                            <label onClick={handleIncrease} style={{ borderLeft: '1px solid #666', display: 'inline-block', padding: '5px 10px', cursor: 'pointer' }}>+</label>
                                        </div>
                                        <label htmlFor="" style={{
                                            padding: '20px 0px !important',
                                            borderRadius: '5px',
                                            width: '100%',
                                            marginTop: '15px',
                                            height: '70px',
                                            lineHeight: '1.2',
                                            textAlign: 'center',
                                            fontSize: '20px',
                                            textTransform: 'uppercase',
                                            background: '#E35454',
                                            color: '#FFF',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            alignItems: 'center',  // Căn giữa theo chiều dọc
                                            justifyContent: 'center',  // Căn giữa theo chiều ngang
                                        }} onClick={() => handleAddToCartAndNavigate(item, quantity)}>
                                            <span>
                                                Đặt hàng ngay
                                                <span style={{
                                                    display: 'block',
                                                    textTransform: 'none',
                                                    fontSize: '16px',
                                                    lineHeight: '1'
                                                }}>
                                                    Miễn phí giao hàng nội thành TPHCM
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'block' }}>
                            <span style={{ fontWeight: 'inherit' }}></span>
                        </div>
                        <div style={{ display: 'block', margin: '40px 0 0', verticalAlign: 'top' }}>
                            <div style={{ textAlign: 'center' }}>
                                <div style={{
                                    textTransform: 'uppercase',
                                    position: 'relative',
                                    marginBottom: '30px',
                                    padding: '0',
                                    fontSize: '28px',
                                    textAlign: 'center',
                                    color: '#E35454'
                                }}>
                                    <div style={{
                                        width: '27px',
                                        height: '27px',
                                        background: '#FFF',
                                        position: 'absolute',
                                        bottom: '-32px',
                                        left: '0',
                                        right: '0',
                                        margin: '0 auto',
                                        zIndex: '1',
                                        backgroundImage: 'url(/interface.png)',
                                        backgroundSize: '27px'
                                    }}>
                                    </div>
                                    <span style={{
                                        fontSize: '28px',
                                        textAlign: 'center',
                                        color: '#E35454'
                                    }}>Sản phẩm liên quan</span>
                                    <div style={{
                                        width: "170px",
                                        height: "1px",
                                        background: "#CCC",
                                        position: "absolute",
                                        bottom: "-18px",
                                        left: "0",
                                        right: "0",
                                        margin: "0 auto"
                                    }}></div>
                                </div>

                                <div style={{
                                    padding: '20px 0 0 ',
                                    position: 'relative',
                                    display: 'block',
                                    textAlign: 'center'
                                }}>
                                    <div style={{
                                        display: 'block',
                                        textAlign: 'center'
                                    }}>
                                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px', paddingInlineStart: '40px' }}>
                                            {LstSpLienQuan.length > 0 && LstSpLienQuan.slice(0, 20).map((item, index) => (
                                                < li key={index} style={{ width: '25%', display: 'inline-block', verticalAlign: 'top', clear: 'both', textAlign: 'center' }}>
                                                    <div style={{ margin: '10px', position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                                        <div style={{
                                                            position: 'absolute',
                                                            display: 'block',
                                                            width: '290px',
                                                            padding: '0',
                                                            backgroundColor: '#3498db',
                                                            boxShadow: '0 5px 10px rgba(0,0,0,.1)',
                                                            color: '#fff',
                                                            textShadow: '0 1px 1px rgba(0,0,0,.2)',
                                                            textAlign: 'center',
                                                            zIndex: '1',
                                                            fontSize: '13px',
                                                            transform: 'rotate(45deg)',
                                                            right: '-115px',
                                                            top: '23px'
                                                        }}>
                                                            <span>NEW</span>
                                                        </div>
                                                        <div style={{ margin: '10px', position: 'relative', paddingTop: '100%' }}>
                                                            <a style={{ textDecoration: 'none', color: 'inherit' }} href={`/chitiet/${item.Name}`}>
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
                                                        <div style={{ margin: '10px 0', display: 'block', textAlign: 'center' }}>
                                                            <label style={{ cursor: 'pointer' }}>
                                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div style={{
                                        display: 'block',
                                        textAlign: 'center'
                                    }}>
                                        <a href="" style={{
                                            padding: '8px 30px',
                                            color: '#fff',
                                            background: '#008CBA',
                                            display: 'inline-block',
                                            marginTop: '15px',
                                            textDecoration: 'none',
                                            cursor: 'pointer',
                                        }}>
                                            Xem thêm nhiều mẫu hơn
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Detail;

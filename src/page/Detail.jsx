import React from 'react';
import { useParams } from 'react-router-dom';
import LstDetailBoHoa from '../Data/DateDetailBoHoa'

const ItemDetail = () => {
    const { id } = useParams();
    const itemId = parseInt(id - 1, 10);
    const selectedItem = LstDetailBoHoa.find((item, index) => index === itemId);
    const { Name, Price, Images } = selectedItem;
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
                                        <a style={{ textDecoration: 'none', color: 'indianred' }} href="">
                                            <img style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', objectFit: 'contain', zIndex: '1', maxWidth: '100%' }} src={Images} alt="" />
                                        </a>
                                    </div>
                                    <div style={{ margin: '10px 0', display: 'block' }}>
                                        <img style={{ height: '50px', border: '1px solid #ccc', padding: '1px', cursor: 'pointer' }} src={Images} alt="" />
                                    </div>
                                </div>

                                <div style={{ width: '48%', display: 'inline-block', verticalAlign: 'top', marginLeft: '2%' }}>
                                    <h1 style={{ fontSize: '24px', margin: '10px 0 0', fontWeight: 'normal' }}>
                                        <span>{Name}</span>
                                    </h1>
                                    <p style={{ fontSize: '18px', marginBottom: '10px !important', fontWeight: 'bold', color: '#E13028' }}>
                                        <span>Giá: </span>
                                        <span>{Price}</span>
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
                                            <label style={{ borderRight: '1px solid #666', display: 'inline-block', padding: '5px 10px', cursor: 'pointer' }}>-</label>
                                            <input type="text" style={{ width: '50px', height: '20px', textAlign: 'center', border: '0px' }} value="1" placeholder='Số lượng' />
                                            <label htmlFor="" style={{ borderLeft: '1px solid #666', display: 'inline-block', padding: '5px 10px', cursor: 'pointer' }}>+</label>
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
                                        }}>
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
                            <div style={{ textAlign: 'center' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ItemDetail;

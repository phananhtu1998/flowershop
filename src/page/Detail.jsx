import React from 'react';
import { useParams } from 'react-router-dom';
import LstDetailBoHoa from '../Data/DateDetailBoHoa'

const ItemDetail = () => {
    const { id } = useParams();
    const itemId = parseInt(id - 1, 10);
    const selectedItem = LstDetailBoHoa.find((item, index) => index === itemId);
    const { Name, Price, PriceOld, Images } = selectedItem;
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
                                                                <a style={{ color: '#ff0000', textDecoration: 'none' }} href='tel:19003189'> 1900 3189</a>
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
                                                <div style={{ display: 'block', fontWeight: 'bold' }}>
                                                    <a style={{ textDecoration: 'none', color: 'red' }} href="https://zalo.me/1664071818027683536">
                                                        <img src="/fb.png" alt="" style={{ width: '20px', height: '20px', verticalAlign: 'middle', aspectRatio: 'auto 20/20', overflowClipMargin: 'content-box', overflow: 'clip', cursor: 'pointer' }} />
                                                        &nbsp; CHAT ĐỂ ĐƯỢC TƯ VẤN
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ItemDetail;

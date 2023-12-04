import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { format, addMonths } from 'date-fns';
const WebFooter = () => {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'MM-yyyy');
    return (
        <div>
            <div style={{ display: 'block', verticalAlign: 'top', background: '#155F8A' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <div style={{ padding: '20px 0 0' }}>
                        <div style={{ display: 'inline-block', width: '25%', verticalAlign: 'top' }}>
                            <div style={{ padding: '10px 0', color: '#fff' }}>
                                <div>
                                    <span style={{ fontSize: '20pt' }}>
                                        <strong>TƯ VẤN NHANH</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '25%', verticalAlign: 'top' }}>
                            <div style={{ position: 'relative' }}>
                                <form style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{ display: 'block' }}>
                                        <span></span>
                                        <span>
                                            <input style={{ width: '500px', height: '40px', boxSizing: 'border-box', paddingLeft: '20px', writingMode: 'horizontal-tb', paddingBlock: '1px', paddingInline: '2px', textRendering: 'auto', color: 'fieldtext', letterSpacing: 'normal', wordSpacing: 'normal', lineHeight: 'normal', textTransform: 'none', textIndent: '0px', textShadow: 'none', display: 'inline-block', textAlign: 'center', appearance: 'auto', cursor: 'text', backgroundColor: 'field', margin: '0em', padding: '1px 0px', borderWidth: '2px', borderRadius: '10px' }} placeholder="Nhập số điện thoại của bạn chúng tôi sẽ gọi lại tư vấn ngay" />
                                        </span>
                                    </div>
                                    <button style={{ height: '40px', color: 'white', padding: '0 20px', background: '#3399FF', fontSize: '18px', borderRadius: '3px' }}>Gửi</button>
                                </form>
                            </div>
                        </div>
                        <div style={{ display: 'inline-block', width: '50%', verticalAlign: 'top' }}>
                            <div style={{ textAlign: 'right', display: 'block' }}>
                                <div style={{ color: '#fff', position: 'relative' }}>
                                    <span style={{ width: '30px', height: '30px', fontSize: '18px', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                        <FontAwesomeIcon icon={faFacebookF} color='white' />
                                    </span>
                                    <span style={{ width: '30px', height: '30px', fontSize: '18px', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                        <FontAwesomeIcon icon={faTwitter} color='white' />
                                    </span>
                                    <span style={{ width: '30px', height: '30px', fontSize: '18px', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                        <FontAwesomeIcon icon={faGooglePlusG} color='white' />
                                    </span>
                                    <span style={{ width: '30px', height: '30px', fontSize: '18px', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                        <FontAwesomeIcon icon={faYoutube} color='white' />
                                    </span>
                                    <span style={{ width: '30px', height: '30px', fontSize: '18px', alignItems: 'center', justifyContent: 'center', margin: '5px' }}>
                                        <FontAwesomeIcon icon={faInstagram} color='white' />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{
                display: 'block',
                verticalAlign: 'top',
                background: '#9E9E9E',
                position: 'relative',
                boxSizing: 'border-box'
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: 'auto',
                    display: 'block'
                }}>
                    <div style={{
                        color: '#FFFFFF'
                    }}>
                        <div style={{
                            display: 'block',
                            verticalAlign: 'top',
                            borderBottom: '1px solid #fff',
                            position: 'relative',
                            boxSizing: 'border-box'
                        }}>
                            <div style={{
                                display: 'block',
                                color: '#FFFFFF'
                            }}>
                                <div style={{
                                    padding: '20px 0',
                                    position: 'relative',
                                    display: 'block',
                                    color: '#FFFFFF'
                                }}>
                                    <div style={{ display: 'inline-block', width: '25%', verticalAlign: 'top' }}>
                                        <div color='#FFFFFF'>
                                            <div style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', padding: '10px 0' }}>
                                                <span style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase' }}>VỀ HOADEPTOANQUOC.COM</span>
                                            </div>
                                            <div style={{ position: 'relative', display: 'block' }}>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '11pt', color: '#9c0808' }}>
                                                        <strong fontWeight="bold">Hỗ trợ tư vấn mua hàng 24/7</strong>
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px' }}>
                                                        <span style={{ color: '#9c0808' }}>
                                                            <strong style={{ fontWeight: 'bold' }}>XEM TOÀN BỘ ĐỊA CHỈ CỬA HÀNG</strong>
                                                        </span>
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '11pt' }}>
                                                        <strong>Hotline:
                                                            <a style={{ textDecoration: 'none', color: '#FFFFFF' }} href="tel:19003189"> 19003189</a>
                                                        </strong>
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '11pt' }}>
                                                        Email:&nbsp;hoathuongyeu.com@gmail.com
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '11pt' }}>
                                                        Dịch vụ giao hoa đến 63 tỉnh thành Việt Nam.
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '11pt' }}>
                                                        Chúng tôi giao hoa gần như hoàn toàn Miễn Phí đến các Quận nội thành Tp. Hồ Chí Minh. Và tính phí giao hàng có hỗ trợ đối với các tỉnh thành khác.
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '25%', verticalAlign: 'top' }}>
                                        <div style={{ display: 'block' }}>
                                            <div style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', padding: '10px 0 0 20px' }}>
                                                <span>MÃ QR OA ZALO</span>
                                            </div>
                                            <div style={{ padding: '0 10px 0 20px', position: 'relative', display: 'block', color: '#FFFFFF' }}>
                                                <div style={{ textAlign: 'center', display: 'block' }}>
                                                    <img style={{ width: '200px', height: 'auto', maxWidth: '100%', verticalAlign: 'middle', overflowClipMargin: 'content-box', overflow: 'clip' }} src="/qrzalo.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '25%', verticalAlign: 'top' }}>
                                        <div style={{ display: 'block', color: '#FFFFFF' }}>
                                            <div style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', padding: '10px 0 0 20px' }}>
                                                <span>HỖ TRỢ KHÁCH HÀNG</span>
                                            </div>
                                            <div style={{ position: 'relative', display: 'block', color: '#FFFFFF', padding: '0 10px 0 20px' }}>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '11pt', color: '#FFFFFF' }}>
                                                        Cam kết mua hàng online đảm bảo
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Cam kết bảo mật thông tin
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Cam kết bảo mật thanh toán
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Hướng dẫn thanh toán
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Quy định đổi trả
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Hệ thống cửa hàng trên toàn quốc
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'inline-block', width: '25%', verticalAlign: 'top' }}>
                                        <div style={{ display: 'block' }}>
                                            <div style={{ fontSize: '16px', fontWeight: 'bold', textTransform: 'uppercase', padding: '10px 0 0 20px' }}>
                                                <span>HỢP TÁC & LIÊN KẾT</span>
                                            </div>
                                            <div style={{ padding: '0 10px 0 20px', position: 'relative', display: 'block' }}>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Thông tin tuyển dụng
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Liên hệ hợp tác
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Chính sách và điều khoản
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Dạy cắm hoa
                                                    </span>
                                                </p>
                                                <p style={{ textAlign: 'justify', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ fontSize: '14.6667px', color: '#FFFFFF' }}>
                                                        Tư vấn mở shop
                                                    </span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: 'block', verticalAlign: 'top', position: 'relative', boxSizing: 'border-box' }}>
                <div style={{ textAlign: 'center', display: 'block' }}>
                    <div style={{ padding: '10px 0' }}>
                        <p style={{ textAlign: 'center', display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                            Bản quyền thuộc về Hoadeptoanquoc.com - Website được xây dựng từ 2023 - Cập nhật mới nhất {formattedDate}
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default WebFooter;

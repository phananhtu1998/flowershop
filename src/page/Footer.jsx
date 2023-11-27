import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faGooglePlusG, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';

const WebFooter = () => {
    return (
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
    );
}

export default WebFooter;

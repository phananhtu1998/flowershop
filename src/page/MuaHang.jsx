import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const location = useLocation();
    const { state } = location;
    const { Images, Name, Price } = state.item;
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [images, setImages] = useState(null);
    const [extraFee, setExtraFee] = useState(0); // Thêm state cho phụ phí
    // Khởi tạo giá trị cho các biến state khi component được render
    useEffect(() => {
        setName(Name);
        setPrice(Price);
        setImages(Images);
    }, [Name, Price, Images]);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleDelete = () => {
        console.log("Deleting...");
        console.log("Previous values:", name, price, images);
        setName('');
        setPrice(0);
        setImages(null);
        setQuantity(1);
        console.log("After deletion:", name, price, images);
    };

    const totalPrice = (price * quantity).toLocaleString('vi-VN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
        groupingSeparator: '.',
    });

    // Tính tổng cộng bao gồm phụ phí
    const totalAmount = (price * quantity + extraFee / 1000).toLocaleString('vi-VN', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
        useGrouping: true,
        groupingSeparator: '.',
    });

    const handleExtraFeeChange = (event) => {
        const fee = parseFloat(event.target.value);
        setExtraFee(isNaN(fee) ? 0 : fee);
    };

    return (
        <div style={{ display: 'block', verticalAlign: 'top' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'block' }}>
                <div style={{ padding: '10px 0', position: 'relative' }}>
                    <div style={{ boxSizing: 'border-box' }}>
                        <div>
                            <h1 style={{
                                display: 'block',
                                fontSize: '2em',
                                marginBlockStart: '0.76em',
                                marginBlockEnd: '0.76em',
                                marginInlineStart: '0px',
                                marginInlineEnd: '0px',
                                fontWeight: 'bold'
                            }}>
                                <span>Giỏ hàng của bạn</span>
                            </h1>
                            <div>
                                <div style={{ padding: '20px 0px 10px 0', marginBottom: '20px', borderBottom: '1px dotted #ccc', fontWeight: 'bold', fontSize: '18px' }}>
                                    <div style={{ width: '20%', display: 'inline-block' }}></div>
                                    <div style={{ width: '30%', display: 'inline-block' }}>Tên</div>
                                    <div style={{ width: '20%', textAlign: 'right', display: 'inline-block' }}>Đơn giá</div>
                                    <div style={{ width: '20%', textAlign: 'right', display: 'inline-block' }}>Số lượng</div>
                                    <div style={{ width: '10%', textAlign: 'right', display: 'inline-block' }}>Thành tiền</div>
                                </div>

                                <div style={{ fontSize: '16px', display: 'block' }}>
                                    <div>
                                        <div style={{ display: 'inline-block', width: '20%', verticalAlign: 'top', textAlign: 'center' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ width: '80px', maxWidth: '100%', height: 'auto' }} src={Images} alt="" width={200} />
                                            </a>
                                        </div>
                                        <div style={{ display: 'inline-block', width: '30%', verticalAlign: 'top', fontSize: '16px' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>1. {Name}</a>
                                            <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                <span style={{ width: '20%' }}>Ghi chú</span>
                                                <input style={{ width: '78%', marginLeft: '2%' }} type="text" />
                                            </p>
                                            <div style={{ display: 'block' }}></div>
                                        </div>
                                        <div style={{ display: 'inline-block', width: '20%', verticalAlign: 'top', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                            <strong style={{ fontWeight: 'bold', textAlign: 'right', whiteSpace: 'nowrap', fontSize: '16px' }}>
                                                <span>{Price} VNĐ</span>
                                            </strong>
                                        </div>
                                        {/* số lượng */}
                                        <div style={{ display: 'inline-block', width: '20%', verticalAlign: 'top', textAlign: 'right' }}>
                                            <div style={{ border: '1px solid #666', marginRight: '2px', display: 'inline-block' }}>
                                                <label style={{ display: 'inline-block', borderRight: '1px solid #666', padding: '5px 10px', cursor: 'pointer' }} onClick={handleDecrease}>-</label>
                                                <input style={{ width: '50px', textAlign: 'center', border: '0px', writingMode: 'horizontal-tb', paddingBlock: '1px', paddingInline: '2px', margin: '0' }} type="text" value={quantity} readOnly />
                                                <label style={{ borderLeft: '1px solid #666', display: 'inline-block', padding: '5px 10px', cursor: 'pointer' }} onClick={handleIncrease}>+</label>
                                            </div>
                                        </div>
                                        {/* Thành tiền */}
                                        <div style={{ display: 'inline-block', fontWeight: 'bold', width: '10%', textAlign: 'right' }}>
                                            {totalPrice}.000 VNĐ
                                        </div>
                                    </div>
                                </div>
                                {/* xóa bỏ */}
                                <div style={{
                                    textAlign: 'right',
                                    borderBottom: '1px dotted #ccc',
                                    padding: '10px 0',
                                    marginBottom: '20px'
                                }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} onClick={handleDelete}>
                                        <i>
                                            <FontAwesomeIcon icon={faTrashAlt} /> Xóa
                                        </i>
                                    </a>
                                </div>
                            </div>
                            {/* phụ phí khác */}
                            <div style={{ fontSize: '18px', textAlign: 'right', display: 'block' }}>
                                <span>Phụ phí khác</span>
                                <span style={{ fontSize: '16px', width: '140px', display: 'inline-block' }}>
                                    <input
                                        style={{
                                            width: '80px',
                                            textAlign: 'right',
                                            writingMode: 'horizontal-tb',
                                            paddingBlock: '1px',
                                            paddingInline: '2px'
                                        }}
                                        type="text"
                                        value={extraFee}
                                        onChange={handleExtraFeeChange}
                                    />
                                </span>
                                <br />
                                <span style={{ padding: '0px 0', display: 'inline-block' }}>
                                    Tổng cộng:
                                    <strong style={{ fontSize: '16px', width: '140px', display: 'inline-block', fontWeight: 'bold' }}>
                                        {totalAmount}.000 VNĐ
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* điền thông tin */}
                    <div style={{ textAlign: 'left', display: 'block' }}>
                        {/* H3 */}
                        <div style={{ padding: '5px 0px', display: 'block' }}>
                            <h3 style={{
                                fontSize: '25px',
                                margin: '0',
                                marginBlockStart: '1em',
                                marginBlockEnd: '1em',
                                marginInlineStart: '0px',
                                marginInlineEnd: '0px',
                                fontWeight: 'bold'
                            }}>
                                Quý khách vui lòng điền thông tin để đặt hàng
                            </h3>
                        </div>
                        {/* input */}
                        <div style={{ padding: '5px 0px', display: 'block', boxSizing: 'border-box' }}>
                            <span>
                                <input style={{
                                    verticalAlign: 'middle',
                                    width: '600px',
                                    height: '40px',
                                    paddingLeft: '10px',
                                    writingMode: 'horizontal-tb',
                                    paddingBlock: '1px',
                                    paddingInline: '2px',
                                    lineHeight: '1.5',
                                    fontSize: '14px'
                                }} type="text" placeholder='Tên người đặt' />
                            </span>
                        </div>
                        <div style={{ padding: '5px 0px', display: 'block', boxSizing: 'border-box' }}>
                            <span>
                                <input style={{
                                    verticalAlign: 'middle',
                                    width: '600px',
                                    height: '40px',
                                    paddingLeft: '10px',
                                    writingMode: 'horizontal-tb',
                                    paddingBlock: '1px',
                                    paddingInline: '2px',
                                    fontSize: '14px'
                                }} type="text" placeholder='SĐT người đặt' />
                            </span>
                        </div>
                        <div style={{ padding: '5px 0px', display: 'block', boxSizing: 'border-box' }}>
                            <span>
                                <input style={{
                                    verticalAlign: 'middle',
                                    width: '600px',
                                    height: '40px',
                                    paddingLeft: '10px',
                                    writingMode: 'horizontal-tb',
                                    paddingBlock: '1px',
                                    paddingInline: '2px',
                                    fontSize: '14px'
                                }} type="text" placeholder='Bạn muốn nhận hoa khi nào? (Ví dụ: 15h ngày 15/01/2021)' />
                            </span>
                        </div>
                        <div style={{ padding: '5px 0px', display: 'block', boxSizing: 'border-box' }}>
                            <span>
                                <textarea style={{
                                    verticalAlign: 'top',
                                    height: '88px',
                                    width: '600px',
                                    padding: '10px',
                                    fontFamily: 'monospace',
                                    textRendering: 'auto',
                                    color: 'fieldtext',
                                    letterSpacing: 'normal',
                                    wordSpacing: 'normal',
                                    lineHeight: 'normal',
                                    textTransform: 'none',
                                    textIndent: '0px',
                                    textShadow: 'none',
                                    display: 'inline-block',
                                    textAlign: 'start',
                                    appearance: 'auto',
                                    cursor: 'text',
                                    resize: 'auto',
                                    margin: '0em',
                                }} placeholder='Tên, SĐT và địa chỉ người nhận'>

                                </textarea>
                            </span>
                        </div>
                        <div style={{ padding: '5px 0px', display: 'block', boxSizing: 'border-box' }}>
                            <span>
                                <input style={{
                                    verticalAlign: 'middle',
                                    width: '600px',
                                    height: '40px',
                                    paddingLeft: '10px',
                                    writingMode: 'horizontal-tb',
                                    paddingBlock: '1px',
                                    paddingInline: '2px',
                                    fontSize: '14px'
                                }} type="text" placeholder='Nội dung thông điệp BANNER hoặc THIỆP (Ví dụ: Banner: Công ty ABC chúc mừng khai trương)' />
                            </span>
                        </div>
                    </div>
                    {/* botton tiếp tục và quay lại */}
                    <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                        <label style={{ verticalAlign: 'top', width: '25%', paddingRight: '10px', display: 'inline-block', textAlign: 'right' }}>
                        </label>
                        <button style={{
                            marginLeft: '0',
                            height: '40px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            width: '300px',
                            float: 'left',
                            background: '#4caf50',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '3px',
                            color: '#fff',
                        }}> « Quay lại chọn hàng </button>
                        <button style={{
                            marginRight: '0',
                            height: '40px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            width: '290px',
                            margin: '0 10px',
                            float: 'left',
                            background: '#df2f55',
                            padding: '10px 20px',
                            border: 'none',
                            borderRadius: '3px',
                            color: '#fff'
                        }}>
                            Tiếp tục
                        </button>
                    </p>
                </div>

            </div>
        </div >
    );
};

export default Orders;

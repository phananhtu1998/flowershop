import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const location = useLocation();
    const { state } = location;
    const { Images, Name, Price } = state.item;
    const [quantity, setQuantity] = useState(1);
    const [name, setName] = useState('');  // Thêm dòng này
    const [price, setPrice] = useState(0); // Thêm dòng này
    const [images, setImages] = useState(null); // Thêm dòng này

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
        setName('');  // Set giá trị cho biến name
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { DeleteOutlined } from '@ant-design/icons';
import style from '../style/muahang.module.css'

const Orders = ({ cartItems, setCartItems }) => {
    let totalorder = 0;
    let number = 0;
    const [quantityMap, setQuantityMap] = useState({});
    useEffect(() => {
        // Load stored quantityMap from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || {};
        console.log(storedCartItems);
        // Convert storedCartItems to quantityMap
        const newQuantityMap = storedCartItems.reduce((map, item) => {
            const key = `${item.Name}-${item.Price}`;
            map[key] = item.quantity || 0;
            return map;
        }, {});
        setQuantityMap(newQuantityMap);
    }, []);
    const handleIncrease = (item) => {
        const key = `${item.Name}-${item.Price}`;
        const updatedQuantityMap = {
            ...quantityMap,
            [key]: (quantityMap[key] || 0) + 1,
        };
        setQuantityMap(updatedQuantityMap);

        // Update cartItems based on the updated quantityMap
        const updatedCartItems = cartItems.map((cartItem) => {
            const cartItemKey = `${cartItem.Name}-${cartItem.Price}`;
            return {
                ...cartItem,
                quantity: updatedQuantityMap[cartItemKey] || 0,
            };
        });

        // Update localStorage with the modified array
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const handleDecrease = (item) => {
        const key = `${item.Name}-${item.Price}`;
        const updatedQuantityMap = {
            ...quantityMap,
            [key]: (quantityMap[key] || 0) - 1,
        };
        setQuantityMap(updatedQuantityMap);

        // Update cartItems based on the updated quantityMap
        const updatedCartItems = cartItems.map((cartItem) => {
            const cartItemKey = `${cartItem.Name}-${cartItem.Price}`;
            return {
                ...cartItem,
                quantity: updatedQuantityMap[cartItemKey] || 0,
            };
        });
        if (updatedQuantityMap[key] === 0) {
            const filteredCartItems = updatedCartItems.filter((cartItem) => {
                const cartItemKey = `${cartItem.Name}-${cartItem.Price}`
                return cartItemKey !== key;
            })
            localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
            setCartItems(filteredCartItems);
        } else {
            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
            setCartItems(updatedCartItems);
        }
    };
    const DeleteItem = (item) => {
        const key = `${item.Name}-${item.Price}`;
        const filteredCartItems = cartItems.filter((cartItem) => {
            const cartItemKey = `${cartItem.Name}-${cartItem.Price}`
            return cartItemKey !== key;
        })
        localStorage.setItem('cartItems', JSON.stringify(filteredCartItems));
        setCartItems(filteredCartItems);
    }
    return (
        <div className={style.customStyle}>
            <div className={style.containerStyle}>
                <div className={style.relativeContainer}>
                    <div className={style.divstyle}>
                        <div>
                            <h1 className={style.emphasisText}>
                                <span>Giỏ hàng của bạn</span>
                            </h1>
                            <div>
                                <div className={style.sectionHeader}>
                                    <div className={style.inlineBlock}></div>
                                    <div className={style.inlineBlock30}>Tên</div>
                                    <div className={style.rightAligned}>Đơn giá</div>
                                    <div className={style.rightAligned}>Số lượng</div>
                                    <div className={style.divrightAligned}>Thành tiền</div>
                                </div>

                                {cartItems.map((item, index) => (
                                    totalorder += (item.Price * item.quantity),
                                    number++,
                                    < div key={index} className={style.customStyleblock}>
                                        <div>
                                            <div className={style.customInlineBlock}>
                                                <a className={style.customTextStyle}>
                                                    <img className={style.imgResponsive} src={item.Images} alt="" width={200} />
                                                </a>
                                            </div>
                                            <div className={style.customdivInlineBlock}>
                                                <a className={style.customTextStyle}>{number}. {item.Name} </a>
                                                <p className={style.customBlock}>
                                                    <span className={style.spanstyle}>Ghi chú</span>
                                                    <input className={style.customWidth} type="text" />
                                                </p>
                                                <div className={style.displayblock}></div>
                                            </div>
                                            <div className={style.divcustomInlineBlock}>
                                                <strong className={style.customStylebold}>
                                                    <span>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')} VNĐ</span>
                                                </strong>
                                            </div>
                                            {/* số lượng */}
                                            <div className={style.divcustomInlineBlock}>
                                                <div className={style.borderStyle}>
                                                    <label className={style.inlineBlockWithBorder} onClick={() => handleDecrease(item)}>-</label>
                                                    <input className={style.horizontalText} type="text" value={item.quantity} readOnly />
                                                    <label className={style.borderLeftContainer} onClick={() => handleIncrease(item)}>+</label>
                                                </div>
                                            </div>
                                            {/* Thành tiền */}
                                            <div className={style.boldRightContainer}>
                                                {(item.Price * item.quantity).toLocaleString('vi-VN')} VNĐ
                                            </div>
                                            {/* xóa */}
                                            <div className={style.textAlignRightContainer}>
                                                <a className={style.customTextStyle} onClick={() => DeleteItem(item)} title='Xóa'>
                                                    <i className={style.iconContainer}>
                                                        <DeleteOutlined />
                                                    </i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <br />
                            <div className={style.borderBottomDotted}></div>
                            <div className={style.blockright}>
                                <span className={style.paddingInlineBlock}>
                                    Tổng cộng:
                                    <strong className={style.inlineBlockStyle}>
                                        {totalorder.toLocaleString('vi-VN')} VNĐ
                                    </strong>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/* điền thông tin */}
                    <div className={style.textLeftStyle}>
                        {/* H3 */}
                        <div className={style.customPaddingStyle}>
                            <h3 className={style.divcustomTextStyle}>
                                Quý khách vui lòng điền thông tin để đặt hàng
                            </h3>
                        </div>
                        {/* input */}
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.customInputStyle} type="text" placeholder='Tên người đặt' />
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.hktcustomInputStyle} type="text" placeholder='SĐT người đặt' />
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.hktcustomInputStyle} type="text" placeholder='Bạn muốn nhận hoa khi nào? (Ví dụ: 15h ngày 15/01/2021)' />
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <textarea className={style.customTextAreaStyle} placeholder='Tên, SĐT và địa chỉ người nhận'>

                                </textarea>
                            </span>
                        </div>
                        <div className={style.customBlockStyle}>
                            <span>
                                <input className={style.hktcustomInputStyle} type="text" placeholder='Nội dung thông điệp BANNER hoặc THIỆP (Ví dụ: Banner: Công ty ABC chúc mừng khai trương)' />
                            </span>
                        </div>
                    </div>
                    {/* botton tiếp tục và quay lại */}
                    <p className={style.customBlock}>
                        <label style={{ verticalAlign: 'top', width: '25%', paddingRight: '10px', display: 'inline-block', textAlign: 'right' }}>
                        </label>
                        <button className={style.customButtonStyle}> « Quay lại chọn hàng </button>
                        <button className={style.customButtonnextStyle}>
                            Tiếp tục
                        </button>
                    </p>
                </div>

            </div>
        </div >
    );
};

export default Orders;

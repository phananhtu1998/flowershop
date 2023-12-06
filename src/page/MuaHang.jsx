import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';


const Orders = ({ cartItems, setCartItems }) => {
    // console.log(cartItems);
    // const [cartItemsData, setCartItemsData] = useState([]);
    const quantityMap = [];
    let totalCost = 0;
    let totalPrice = 0;
    let Number = 1;
    var cartItemss = localStorage.getItem('cartItems')
    // Lặp qua giỏ hàng và cập nhật số lượng trong quantityMap
    useEffect(() => { handleChangeQuantity() }, [])

    // console.log(updatedCartItems);
    const handleChangeQuantity = () => {
        // Get the current cart items from localStorage
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

        // Clone the current cart items to avoid mutating the original array
        const updatedCartItems = [...storedCartItems];
        console.log(updatedCartItems);

        // Iterate over each item in cartItems
        updatedCartItems.forEach((cartItem) => {
            // Find the corresponding item in the new items data
            const correspondingItem = cartItems.find((item) => item.Name === cartItem.Name);

            if (correspondingItem) {
                // If the item exists, update the quantity
                cartItem.quantity += 1;

                let intValue = parseInt(correspondingItem.Price);
                totalCost += intValue;
                totalPrice = parseInt(totalCost * 1000, 10);
                totalPrice = totalPrice.toLocaleString('vi-VN');
            }
        });

        // Update localStorage with the modified array
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        // Update cartItems state with the modified array
        setCartItems(updatedCartItems);
    };


    // cartItems.forEach((item) => {
    //     const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.Name === item.Name);
    //     console.log(existingItemIndex);
    //     if (existingItemIndex !== -1) {
    //         // If the product already exists, increase the quantity
    //         updatedCartItems[existingItemIndex].quantity += 1;
    //     } else {
    //         // If the product doesn't exist, add a new item with quantity 1
    //         updatedCartItems.push({ ...item, quantity: 1 });
    //     }

    //     let intValue = parseInt(item.Price);
    //     totalCost += intValue;
    //     totalPrice = parseInt(totalCost * 1000, 10);
    //     totalPrice = totalPrice.toLocaleString('vi-VN');
    // });

    // // Update cartItems state with the modified array
    // setCartItems(updatedCartItems);

    // Calculate total price and format it
    totalPrice = parseInt(totalCost * 1000, 10).toLocaleString('vi-VN');


    const handleIncrease = (item) => {
        const updatedCartItems = cartItems.map((cartItem) =>
            cartItem.key === item.key ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
        setCartItems(updatedCartItems);
    };

    const handleDecrease = (item) => {
        const key = item.target.getAttribute("atr_item");
        quantityMap[key].quantity -= 1;

        // Parse the JSON string from localStorage to get the array
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
        // Find the index of the item to be removed
        const index = storedCartItems.findIndex((cartItem) => {
            return (
                cartItem.Name === quantityMap[key].Name &&
                cartItem.Price === quantityMap[key].Price &&
                cartItem.Images === quantityMap[key].Images
            );
        });

        // Remove the item from the array
        if (index !== -1) {
            storedCartItems.splice(index, 1);

            // Update localStorage with the modified array
            localStorage.setItem('cartItems', JSON.stringify(storedCartItems));
            setCartItems(storedCartItems);
        }


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

                                {cartItems.map((item, index) => (
                                    <div key={index} style={{ fontSize: '16px', display: 'block', padding: '2px' }}>
                                        <div>
                                            <div style={{ display: 'inline-block', width: '20%', verticalAlign: 'top', textAlign: 'center' }}>
                                                <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                    <img style={{ width: '80px', maxWidth: '100%', height: 'auto' }} src={item.Images} alt="" width={200} />
                                                </a>
                                            </div>
                                            <div style={{ display: 'inline-block', width: '30%', verticalAlign: 'top', fontSize: '16px' }}>
                                                <a style={{ textDecoration: 'none', color: 'inherit' }}>{Number++}. {item.Name} </a>
                                                <p style={{ display: 'block', marginBlockStart: '1em', marginBlockEnd: '1em', marginInlineStart: '0px', marginInlineEnd: '0px' }}>
                                                    <span style={{ width: '20%' }}>Ghi chú</span>
                                                    <input style={{ width: '78%', marginLeft: '2%' }} type="text" />
                                                </p>
                                                <div style={{ display: 'block' }}></div>
                                            </div>
                                            <div style={{ display: 'inline-block', width: '20%', verticalAlign: 'top', textAlign: 'right', whiteSpace: 'nowrap' }}>
                                                <strong style={{ fontWeight: 'bold', textAlign: 'right', whiteSpace: 'nowrap', fontSize: '16px' }}>
                                                    <span>{item.Price} VNĐ</span>
                                                </strong>
                                            </div>
                                            {/* số lượng */}
                                            <div style={{ display: 'inline-block', width: '20%', verticalAlign: 'top', textAlign: 'right' }}>
                                                <div style={{ border: '1px solid #666', marginRight: '2px', display: 'inline-block' }}>
                                                    <label style={{ display: 'inline-block', borderRight: '1px solid #666', padding: '5px 10px', cursor: 'pointer' }} atr_item={`${item.Name}-${item.Price}-${item.Images}`} onClick={(e) => handleDecrease(e)}>-</label>
                                                    <input style={{ width: '50px', textAlign: 'center', border: '0px', writingMode: 'horizontal-tb', paddingBlock: '1px', paddingInline: '2px', margin: '0' }} type="text" value={item.quantity} readOnly />
                                                    <label style={{ borderLeft: '1px solid #666', display: 'inline-block', padding: '5px 10px', cursor: 'pointer' }} onClick={handleIncrease}>+</label>
                                                </div>
                                            </div>
                                            {/* Thành tiền */}
                                            <div style={{ display: 'inline-block', fontWeight: 'bold', width: '10%', textAlign: 'right' }}>
                                                {item.Price * item.quantity}.000 VNĐ
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* xóa bỏ */}
                                <div style={{
                                    textAlign: 'right',
                                    borderBottom: '1px dotted #ccc',
                                    padding: '10px 0',
                                    marginBottom: '20px'
                                }}>
                                    <a style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }} >
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
                                        value="phí"
                                        onChange="xử lý phí"
                                    />
                                </span>
                                <br />
                                <span style={{ padding: '0px 0', display: 'inline-block' }}>
                                    Tổng cộng:
                                    <strong style={{ fontSize: '16px', width: '140px', display: 'inline-block', fontWeight: 'bold' }}>
                                        {totalPrice} VNĐ
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

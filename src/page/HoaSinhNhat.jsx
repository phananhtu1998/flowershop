// Trong component Bohoa
import React, { useState } from 'react';
import { Pagination } from 'antd';
import Container from 'react-bootstrap/Container';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Detail from './Detail';
import lstDataHoa from '../Data/data';

let sortedData = lstDataHoa.filter(item => item.Category === "bohoa");

const HoaSinhNhat = ({ setCartItems }) => {

    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    const [sortBy, setSortBy] = useState("1"); // Default sorting option
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    const sortData = () => {
        switch (sortBy) {
            case "2":
                sortedData.sort((a, b) => parseFloat(a.Price) - parseFloat(b.Price));
                break;
            case "3":
                sortedData.sort((a, b) => parseFloat(b.Price) - parseFloat(a.Price));
                break;
            default:
                break;
        }
        return sortedData;
    };

    const currentItems = sortData().slice(indexOfFirstItem, indexOfLastItem);
    const navigate = useNavigate();
    const totalItems = sortedData.length;
    const pageNumbers = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleAddToCartAndNavigate = (item, orderIndex) => {
        // Tìm kiếm xem mục đã tồn tại trong localStorage hay chưa
        const storedCartItems = localStorage.getItem('cartItems');
        const cartItems = storedCartItems ? JSON.parse(storedCartItems) : [];

        const existingItem = cartItems.find((cartItem) => cartItem.Name === item.Name);

        if (existingItem) {
            // Nếu mục đã tồn tại, tăng giá trị quantity lên 1
            existingItem.quantity = (existingItem.quantity || 0) + 1;
        } else {
            // Nếu mục chưa tồn tại, thêm mục mới vào mảng cartItems với quantity là 1
            const newItem = {
                ...item,
                quantity: 1,
            };
            cartItems.push(newItem);
        }

        // Lưu mảng cartItems mới vào localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        setCartItems(cartItems);
        // Navigate to the "/orders" route
        navigate(`/orders`);
    };



    return (
        <div style={{ display: 'block', fontSize: 'small', lineHeight: '1.5' }}>
            <Container>
                <h1 style={{ textAlign: 'center', display: 'block', fontSize: '2em', marginBlockStart: '0.67em', marginBlockEnd: '0.67em', marginInlineStart: '0px', marginInlineEnd: '0px', fontWeight: 'bold' }}>
                    <span style={{ textAlign: 'center' }}>HOA SINH NHẬT</span>
                </h1>
                <div style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <div style={{ display: 'block', textAlign: 'left', padding: '10px' }}>
                        <span>Sắp xếp </span>
                        <select value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)} style={{ maxWidth: '100%', textAlign: 'center', border: '2px solid #666', borderRadius: '5px' }}>
                            <option value="1">Mới nhất</option>
                            <option value="2">Giá tăng dần</option>
                            <option value="3">Giá giảm dần</option>
                        </select>
                    </div>
                    <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                        {currentItems.map((item, index) => (
                            < li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                    <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                        <img onClick={() => navigate(`/chitiet/${item.Name}`, { state: { item } })} style={{ padding: '10px', objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', cursor: 'pointer' }} src={item.Images} alt={item.Name} title={item.Name} />
                                    </div>
                                    <h2 style={{ margin: '10px 0 0', color: 'inherit', fontSize: 'medium', fontWeight: 'normal', lineHeight: '1.1', textDecoration: 'none' }}>
                                        <p style={{ cursor: 'pointer' }} onClick={() => navigate(`/chitiet/${item.Name}`, { state: { item } })} title={item.Name}>
                                            {item.Name}
                                        </p>
                                    </h2>
                                    <div style={{ display: 'inline-block', fontSize: 'medium', fontWeight: 'bold', color: '#E13028' }}>
                                        <strong>{(parseInt(item.Price, 10)).toLocaleString('vi-VN')}</strong>
                                        <span> VNĐ</span>
                                    </div>
                                    {item.PriceOld !== '' ? (
                                        <div style={{ padding: '10px', textDecoration: 'line-through', marginLeft: '10px', display: 'inline-block', margin: '0' }}>{(parseInt(item.PriceOld, 10)).toLocaleString('vi-VN')}</div>
                                    ) : (
                                        null
                                    )}
                                    <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                        <label style={{ cursor: 'pointer' }}>
                                            <span
                                                onClick={() => handleAddToCartAndNavigate(item, index + 1)}
                                                style={{ textDecoration: 'none', color: 'inherit' }}
                                            >
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </li>

                        ))
                        }
                    </ul>
                    <div style={{ margin: '10px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                        {pageNumbers > 1 && (
                            <Pagination
                                current={currentPage}
                                total={totalItems}
                                pageSize={itemsPerPage}
                                onChange={paginate}
                            />
                        )}
                    </div>
                </div>
            </Container >
            <Routes>
                {currentItems.map((index) => (
                    <Route
                        key={index}
                        path={`/hoasinhnhat/${index + 1}`}
                        element={<Detail index={index} />}
                    />
                ))}
            </Routes>

        </div >
    );
};

export default HoaSinhNhat;

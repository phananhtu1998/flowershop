// Trong component Bohoa
import React, { useState } from 'react';
import { Pagination } from 'antd';
import Container from 'react-bootstrap/Container';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import ItemDetail from './Detail';
import lstBoHoa from '../Data/DataBohoa';

const Bohoa = () => {
    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = lstBoHoa.slice(indexOfFirstItem, indexOfLastItem);
    const navigate = useNavigate();
    const totalItems = lstBoHoa.length;
    const pageNumbers = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div style={{ display: 'block', fontSize: 'small', lineHeight: '1.5' }}>
            <Container>
                <h1 style={{ textAlign: 'center', display: 'block', fontSize: '2em', marginBlockStart: '0.67em', marginBlockEnd: '0.67em', marginInlineStart: '0px', marginInlineEnd: '0px', fontWeight: 'bold' }}>
                    <span style={{ textAlign: 'center' }}>Bó hoa</span>
                </h1>
                <div style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                    <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                        {currentItems.map((item, index) => (
                            <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                    <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                        {/* Truyền thông tin mục qua URL */}
                                        <Link
                                            to={{
                                                pathname: `/bohoa/${index + 1}`,
                                                state: { item },
                                            }}
                                            style={{ textDecoration: 'none', color: 'inherit' }}
                                        >
                                            <img style={{ padding: '10px', objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name} />
                                        </Link>

                                    </div>
                                    <h2 style={{ margin: '10px 0 0' }}>
                                        <Link to={`/bohoa/${index + 1}`} style={{ color: 'inherit', fontSize: 'medium', fontWeight: 'normal', lineHeight: '1.1', textDecoration: 'none' }}>{item.Name}</Link>
                                    </h2>
                                    <div style={{ display: 'inline-block', fontSize: 'medium', fontWeight: 'bold', color: '#E13028' }}>
                                        <strong>{item.Price}</strong>
                                        <span> VNĐ</span>
                                    </div>
                                    {item.PriceOld !== '' ? (
                                        <div style={{ padding: '10px', textDecoration: 'line-through', marginLeft: '10px', display: 'inline-block', margin: '0' }}>{item.PriceOld}</div>
                                    ) : (
                                        null
                                    )}
                                    <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                        <label style={{ cursor: 'pointer' }}>
                                            {console.log('Item before passing:', item)}
                                            <span
                                                onClick={() => navigate(`/orders/${index + 1}`, { state: { item } })}
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
                        path={`/bohoa/${index + 1}`}
                        element={<ItemDetail index={index} />}
                    />
                ))}
            </Routes>

        </div >
    );
};

export default Bohoa;

import React, { useState } from 'react';
import { Pagination } from 'antd';
import Container from 'react-bootstrap/Container';

const Bohoa = () => {
    const itemsPerPage = 16;
    const [currentPage, setCurrentPage] = useState(1);
    const LstBoHoa = [
        { Name: 'Bó hoa đồng nghiệp 1 hoa hướng dương', Price: '99.000', PriceOld: '199.000', Images: '/BoHoa/bo-hoa-dong-nghiep-1-hoa-huong-duong_300x300.jpg' },
        { Name: 'Bó hoa đồng nghiệp 1 hoa hướng dương', Price: '99.000', PriceOld: '199.000', Images: '/BoHoa/bo-hoa-dong-nghiep-1-hoa-huong-duong_300x300 (1).jpg' },
        { Name: 'Bó hoa hồng đỏ 1 bông', Price: '99.000', PriceOld: '199.000', Images: '/BoHoa/bo-hoa-hong-do-1-bong_300x300.jpg' },
        { Name: 'Bó hoa hồng đỏ 1 bông', Price: '99.000', PriceOld: '199.000', Images: '/BoHoa/bo-hoa-hong-do-1-bong_300x300 (1).jpg' },
        { Name: 'Bó hồng 1 bông ohara hồng', Price: '99.000', PriceOld: '199.000', Images: '/BoHoa/bo-hong-1-bong-ohara-hong_300x300.jpg' },
        { Name: 'Bó hoa 082', Price: '99.000', PriceOld: '', Images: '/BoHoa/bo-hoa-082_300x300.jpg' },
        { Name: 'Bó hoa 065', Price: '190.000', PriceOld: '', Images: '/BoHoa/bo-hoa-065_300x300.jpg' },
        { Name: 'Bó hoa 066', Price: '220.000', PriceOld: '', Images: '/BoHoa/bo-hoa-066_300x300.jpg' },
        { Name: 'Bó hoa 078', Price: '220.000', PriceOld: '', Images: '/BoHoa/bo-hoa-078_300x300.jpg' },
        { Name: 'Cô bé mùa đông', Price: '250.000', PriceOld: '350.000', Images: '/BoHoa/co-be-mua-dong_300x300.jpg' },
        { Name: 'Hi vọng', Price: '250.000', PriceOld: '350.000', Images: '/BoHoa/hi-vong_300x300.jpg' },
        { Name: 'Bó hồng', Price: '250.000', PriceOld: '350.000', Images: '/BoHoa/bo-hong_300x300.jpg' },
        { Name: 'Bó baby', Price: '250.000', PriceOld: '350.000', Images: '/BoHoa/bo-baby_300x300.jpg' },
        { Name: 'Bó baby mini', Price: '250.000', PriceOld: '350.000', Images: '/BoHoa/bo-baby-mini_300x300.jpg' },
        { Name: 'Bó hoa cúc Tana', Price: '280.000', PriceOld: '380.000', Images: '/BoHoa/bo-hoa-cuc-tana_300x300.jpg' },
        { Name: 'Bó hoa 068', Price: '280.000', PriceOld: '', Images: '/BoHoa/bo-hoa-068_300x300.jpg' },
        { Name: 'Bó hoa 069', Price: '290.000', PriceOld: '', Images: '/BoHoa/bo-hoa-069_300x300.jpg' },
        { Name: 'Bó hoa 076', Price: '290.000', PriceOld: '', Images: '/BoHoa/bo-hoa-076_300x300.jpg' },
        { Name: 'Bó hoa hồng 7 bông kèm phụ kiện', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/bo-hoa-hong-7-bong-kem-phu-kien_300x300.jpg' },
        { Name: 'Bó hoa hồng kem phối bi trắng đẹp', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/bo-hoa-hong-kem-phoi-bi-trang-dep_300x300.jpg' },
        { Name: 'Love', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/love_300x300.jpg' },
        { Name: 'Tình hồng', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/tinh-hong_300x300.jpg' },
        { Name: 'Baby girl', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/baby-girl_300x300.jpg' },
        { Name: 'Trong xanh', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/trong-xanh_300x300.jpg' },
        { Name: 'Bó hoa 008', Price: '300.000', PriceOld: '400.000', Images: '/BoHoa/bo-hoa-008_300x300.jpg' },
        { Name: 'Bó hoa 047', Price: '300.000', PriceOld: '', Images: '/BoHoa/bo-hoa-047_300x300.jpg' },
        { Name: 'Only love 1', Price: '320.000', PriceOld: '420.000', Images: '/BoHoa/only-love-1_300x300.jpg' },
        { Name: 'Bó hoa cẩm chướng lộng lẫy', Price: '330.000', PriceOld: '430.000', Images: '/BoHoa/bo-hoa-cam-chuong-long-lay_300x300.jpg' },
        { Name: 'Yêu thương hạnh phúc', Price: '330.000', PriceOld: '430.000', Images: '/BoHoa/yeu-thuong-hanh-phuc_300x300.jpg' },
        { Name: 'Yêu xa', Price: '330.000', PriceOld: '430.000', Images: '/BoHoa/yeu-xa_300x300.jpg' },
        { Name: 'My everything', Price: '335.000', PriceOld: '435.000', Images: '/BoHoa/my-everything_300x300.jpg' },
        { Name: 'Bó hoa hướng dương phối baby trắng', Price: '330.000', PriceOld: '', Images: '/BoHoa/bo-hoa-huong-duong-phoi-baby-trang_300x300.jpg' },
        { Name: 'Rose', Price: '350.000', PriceOld: '', Images: '/BoHoa/rose_300x300.jpg' },
        { Name: 'Bó hoa thạch thảo', Price: '350.000', PriceOld: '450.000', Images: '/BoHoa/bo-hoa-thach-thao_300x300.jpg' },
        { Name: 'Ấm áp', Price: '365.000', PriceOld: '465.000', Images: '/BoHoa/am-ap_300x300.jpg' },
        { Name: 'Bó hoa trắng tinh khôi', Price: '380.000', PriceOld: '480.000', Images: '/BoHoa/bo-hoa-trang-tinh-khoi_300x300.jpg ' },
        { Name: 'Bó hoa hồng trắng + Baby trắng', Price: '390.000', PriceOld: '490.000', Images: '/BoHoa/bo-hoa-hong-trang-baby-trang_300x300.jpg' },
        { Name: 'Bó hoa cẩm chướng thanh xuân', Price: '390.000', PriceOld: '490.000', Images: '/BoHoa/bo-hoa-cam-chuong-thanh-xuan_300x300.jpg' },
        { Name: 'Bó hoa cẩm chương biết ơn', Price: '390.000', PriceOld: '490.000', Images: '/BoHoa/bo-hoa-cam-chuong-biet-on_300x300.jpg' },
        { Name: 'Bó hoa đồng tiền trắng', Price: '390.000', PriceOld: '490.000', Images: '/BoHoa/bo-hoa-dong-tien-trang_300x300.jpg' },
        { Name: 'Sự quan tâm', Price: '395.000', PriceOld: '495.000', Images: '/BoHoa/su-quan-tam_300x300.jpg' },
        { Name: 'Bó hoa 54', Price: '400.000', PriceOld: '500.000', Images: '/BoHoa/bo-hoa-54_300x300.jpg' },
        { Name: 'Bó hoa sáp Tulip 03', Price: '400.000', PriceOld: '500.000', Images: '/BoHoa/bo-hoa-sap-tulip-03_300x300.jpg' },
        { Name: 'Bó hoa 056', Price: '400.000', PriceOld: '', Images: '/BoHoa/bo-hoa-056_300x300.jpg' },
        { Name: 'Bó hoa 070', Price: '400.000', PriceOld: '', Images: '/BoHoa/bo-hoa-070_300x300.jpg' },
        { Name: 'Bó hoa 074', Price: '400.000', PriceOld: '', Images: '/BoHoa/bo-hoa-074_300x300.jpg' },
        { Name: 'Bó hoa 077', Price: '400.000', PriceOld: '', Images: '/BoHoa/bo-hoa-077_300x300.jpg' },
        { Name: 'Bó hoa 080', Price: '400.000', PriceOld: '', Images: '/BoHoa/bo-hoa-080_300x300.jpg' },
        { Name: 'Bó hoa 081', Price: '400.000', PriceOld: '', Images: '/BoHoa/bo-hoa-081_300x300.jpg' },
        { Name: 'Bó Hoa Pink', Price: '420.000', PriceOld: '520.000', Images: '/BoHoa/bo-hoa-pink_300x300.jpg' },
        { Name: 'Bó hoa tươi ấm áp 2', Price: '420.000', PriceOld: '520.000', Images: '/BoHoa/bo-hoa-tuoi-am-ap-2_300x300.jpg' },
        { Name: 'Bó hoa hồng kem + cành hoa baby', Price: '420.000', PriceOld: '520.000', Images: '/BoHoa/bo-hoa-hong-kem-canh-hoa-baby_300x300.jpg' },
        { Name: 'Ánh sao', Price: '420.000', PriceOld: '520.000', Images: '/BoHoa/lanh-sao_300x300.jpg' },
        { Name: 'Trong sáng', Price: '420.000', PriceOld: '', Images: '/BoHoa/trong-sang_300x300.jpg' },
        { Name: 'Bó hoa sáp Tulip 01', Price: '420.000', PriceOld: '520.000', Images: '/BoHoa/bo-hoa-sap-tulip-01_300x300.jpg' },
        { Name: 'Bó hoa sáp Tulip 02', Price: '420.000', PriceOld: '520.000', Images: '/BoHoa/bo-hoa-sap-tulip-02_300x300.jpg' },
        { Name: 'Bó hoa hồng tươi', Price: '450.000', PriceOld: '550.000', Images: '/BoHoa/bo-hoa-hong-tuoi_300x300.jpg' },
        { Name: 'Ánh nhìn đầu tiên', Price: '450.000', PriceOld: '550.000', Images: '/BoHoa/anh-nhin-dau-tien_300x300.jpg' },
        { Name: 'Vị ngọt tình yêu', Price: '450.000', PriceOld: '550.000', Images: '/BoHoa/vi-ngot-tinh-yeu_300x300.jpg' },
        { Name: 'Khoe sắc 001', Price: '450.000', PriceOld: '550.000', Images: '/BoHoa/khoe-sac-001_300x300.jpg' },
        { Name: 'Bó hoa hồng tươi', Price: '450.000', PriceOld: '550.000', Images: '/BoHoa/bo-hoa-hong-tuoi_300x300.jpg' },
        { Name: 'Bó hoa 058', Price: '450.000', PriceOld: '', Images: '/BoHoa/bo-hoa-058_300x300.jpg' },
        { Name: 'Giây phút yêu thương', Price: '460.000', PriceOld: '560.000', Images: '/BoHoa/giay-phut-yeu-thuong_300x300.jpg' },
        { Name: 'Bó hoa hồng tình yêu mãi mãi - 17 bông hồng kem', Price: '480.000', PriceOld: '580.000', Images: '/BoHoa/bo-hoa-hong-tinh-yeu-mai-mai-17-bong-hong-kem_300x300.jpg' },
    ]
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = LstBoHoa.slice(indexOfFirstItem, indexOfLastItem);

    const totalItems = LstBoHoa.length;
    const pageNumbers = Math.ceil(totalItems / itemsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    return (
        <div style={{ display: 'block', fontSize: 'small', lineHeight: '1.5' }}>
            <h1 style={{ textAlign: "center", display: 'block', fontSize: '2em', marginBlockStart: '0.67em', marginBlockEnd: '0.67em', marginInlineStart: '0px', marginInlineEnd: '0px', fontWeight: 'bold' }}>
                <span style={{ textAlign: 'center' }}>Bó hoa</span>
            </h1>
            <div>
                <Container>
                    <div style={{ padding: '5px', margin: '10px', borderRadius: '5px' }}>
                        <div style={{ padding: '10px' }}>
                            Sắp xếp
                        </div>
                        <ul style={{ padding: '0', margin: '0', listStyle: 'none', display: 'flex', flexWrap: 'wrap' }}>
                            {currentItems.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ padding: '10px', objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'medium', fontWeight: 'normal', lineHeight: '1.1' }}>{item.Name}</a>
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
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
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
                </Container>
            </div>
        </div>
    );
};
export default Bohoa;

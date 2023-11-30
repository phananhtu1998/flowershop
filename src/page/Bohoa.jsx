import Container from 'react-bootstrap/Container';
const Bohoa = () => {
    const LstBoHoa = [
        { Name: 'Hoa để bàn 36', Price: '550.000', Images: '/BoHoa/bo-hoa-dong-nghiep-1-hoa-huong-duong_300x300 (1).jpg' },
        { Name: 'Hoa để bàn 35', Price: '500.000', Images: '/BoHoa/bo-hoa-dong-nghiep-1-hoa-huong-duong_300x300.jpg' },
        { Name: 'Hoa để bàn 20', Price: '750.000', Images: '/BoHoa/bo-hoa-hong-do-1-bong_300x300 (1).jpg' },
        { Name: 'Hoa để bàn 08', Price: '550.000', Images: '/BoHoa/bo-hoa-hong-do-1-bong_300x300.jpg' },
        { Name: 'Hoa để bàn 15', Price: '700.000', Images: '/BoHoa/bo-hong-1-bong-ohara-hong_300x300.jpg' },
        { Name: 'Hoa để bàn 05', Price: '1.200.000', Images: '/BoHoa/hoa-de-ban-05_300x300.jpg' },
        { Name: 'Hoa để bàn 03', Price: '1.200.000', Images: '/BoHoa/hoa-de-ban-03_300x300.jpg' },
        { Name: 'Hoa để bàn 43', Price: '600.000', Images: '/BoHoa/hoa-de-ban-43_300x300.jpg' },
        { Name: 'Hoa để bàn 01', Price: '800.000', Images: '/BoHoa/hoa-de-ban-01_300x300.jpg' },
        { Name: 'Hoa để bàn 42', Price: '700.000', Images: '/BoHoa/hoa-de-ban-42_300x300.jpg' },
        { Name: 'Hoa để bàn 02', Price: '1.200.000', Images: '/BoHoa/hoa-de-ban-02_300x300.jpg' },
        { Name: 'Hoa để bàn 11', Price: '750.000', Images: '/BoHoa/hoa-de-ban-11_300x300.jpg' },
    ]
    return (
        <div style={{ display: 'block' }}>
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
                            {LstBoHoa.map((item, index) => (
                                <li key={index} style={{ flex: '0 0 25%', boxSizing: 'border-box', padding: '10px', textAlign: 'center' }}>
                                    <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '5px', border: 'solid 1px #df2f5538' }}>
                                        <div style={{ margin: '0', position: 'relative', paddingTop: '100%' }}>
                                            <a style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <img style={{ objectFit: 'contain', position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }} src={item.Images} alt={item.Name}></img>
                                            </a>
                                            <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <i></i>
                                                <span></span>
                                            </a>
                                        </div>
                                        <h2 style={{ margin: '10px 0 0' }}>
                                            <a style={{ color: 'inherit', fontSize: 'large', fontWeight: 'normal' }}>{item.Name}</a>
                                        </h2>
                                        <div style={{ fontSize: 'medium', fontWeight: 'normal', color: '#E13028' }}>
                                            <strong>{item.Price}</strong>
                                            <span> VNĐ</span>
                                        </div>
                                        <div style={{ margin: '10px', display: 'block', textAlign: 'center' }}>
                                            <label style={{ cursor: 'pointer' }}>
                                                <span style={{ background: '#E35454', color: '#FFF', padding: '5px 25px', borderRadius: '20px' }}>Mua hàng</span>
                                            </label>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                        <div style={{ margin: '15px', display: 'flex', justifyContent: 'center' }}>
                            <a href='' style={{ padding: '8px 30px', color: '#fff', background: '#008CBA', borderRadius: '10px', textDecoration: 'none' }}>
                                Xem thêm nhiều mẫu hơn
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
export default Bohoa
import style from '../style/header.module.css'
import Container from 'react-bootstrap/Container';
import logo from '../asset/Logo/logoo.png'
const WebHeader = () => {
    return (
        <>
            <div style={{ backgroundColor: '#464646' }}>
                <Container>
                    <div className={style.Headerdivstyle}>
                        <div>
                            <p>
                                <span className={style.spanheader}>Thời gian làm việc 7:00 - 24:00</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className={style.spanheader}>Hệ thống shop: 3139 cửa hàng & đối tác ở tất cả các quận, huyện, thành phố trên 63 tỉnh thành</span>
                            </p>
                        </div>
                        <div>
                            <p>
                                <span className={style.hotline}>HOTLINE: 19003189</span>
                            </p>
                        </div>
                    </div >
                </Container>
                <div className={style.divorder}>
                    <Container>
                        <div>
                            <div>
                                <span style={{
                                    justifyContent: 'space-between'
                                }}>
                                    <a href="/">
                                        <img src={logo}>
                                        </img>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </Container>
                </div >

            </div >
        </>
    )
}
export default WebHeader;
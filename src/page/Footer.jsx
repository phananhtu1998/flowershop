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
                                        <input style={{ width: '430px', height: '40px', boxSizing: 'border-box', paddingLeft: '20px', writingMode: 'horizontal-tb', paddingBlock: '1px', paddingInline: '2px', textRendering: 'auto', color: 'fieldtext', letterSpacing: 'normal', wordSpacing: 'normal', lineHeight: 'normal', textTransform: 'none', textIndent: '0px', textShadow: 'none', display: 'inline-block', textAlign: 'start', appearance: 'auto', cursor: 'text', backgroundColor: 'field', margin: '0em', padding: '1px 0px', borderWidth: '2px' }} placeholder="Nhập số điện thoại của bạn chúng tôi sẽ gọi lại tư vấn ngay" />
                                    </span>
                                </div>
                                <button style={{ height: '40px', color: 'white', padding: '0 20px', background: '#3399FF', fontSize: '18px', borderRadius: '3px' }}>Gửi</button>
                            </form>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}
export default WebFooter;
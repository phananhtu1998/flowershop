const flowerData =
    [
        //BÓ HOA//
        { Name: 'Bó hoa đồng nghiệp 1 hoa hướng dương', Category: 'bohoa', Price: '200000', PriceOld: '199000', Images: '/BoHoa/bo-hoa-dong-nghiep-1-hoa-huong-duong_300x300.jpg' },
        { Name: 'Bó hoa đồng nghiệp 1 hoa hướng dương', Category: 'bohoa', Price: '99000', PriceOld: '199000', Images: '/BoHoa/bo-hoa-dong-nghiep-1-hoa-huong-duong_300x300 (1).jpg' },
        { Name: 'Bó hoa hồng đỏ 1 bông', Category: 'bohoa', Price: '99000', PriceOld: '199000', Images: '/BoHoa/bo-hoa-hong-do-1-bong_300x300.jpg' },
        { Name: 'Bó hoa hồng đỏ 1 bông', Category: 'bohoa', Price: '99000', PriceOld: '199000', Images: '/BoHoa/bo-hoa-hong-do-1-bong_300x300 (1).jpg' },
        { Name: 'Bó hồng 1 bông ohara hồng', Category: 'bohoa', Price: '99000', PriceOld: '199000', Images: '/BoHoa/bo-hong-1-bong-ohara-hong_300x300.jpg' },
        { Name: 'Bó hoa 082', Category: 'bohoa', Price: '99000', PriceOld: '', Images: '/BoHoa/bo-hoa-082_300x300.jpg' },
        { Name: 'Bó hoa 065', Category: 'bohoa', Price: '190000', PriceOld: '', Images: '/BoHoa/bo-hoa-065_300x300.jpg' },
        { Name: 'Bó hoa 066', Category: 'bohoa', Price: '220000', PriceOld: '', Images: '/BoHoa/bo-hoa-066_300x300.jpg' },
        { Name: 'Bó hoa 078', Category: 'bohoa', Price: '220000', PriceOld: '', Images: '/BoHoa/bo-hoa-078_300x300.jpg' },
        { Name: 'Cô bé mùa đông', Category: 'bohoa', Price: '250000', PriceOld: '350000', Images: '/BoHoa/co-be-mua-dong_300x300.jpg' },
        { Name: 'Hi vọng', Category: 'bohoa', Price: '250000', PriceOld: '350000', Images: '/BoHoa/hi-vong_300x300.jpg' },
        { Name: 'Bó hồng', Category: 'bohoa', Price: '250000', PriceOld: '350000', Images: '/BoHoa/bo-hong_300x300.jpg' },
        { Name: 'Bó baby', Category: 'bohoa', Price: '250000', PriceOld: '350000', Images: '/BoHoa/bo-baby_300x300.jpg' },
        { Name: 'Bó baby mini', Category: 'bohoa', Price: '250000', PriceOld: '350000', Images: '/BoHoa/bo-baby-mini_300x300.jpg' },
        { Name: 'Bó hoa cúc Tana', Category: 'bohoa', Price: '280000', PriceOld: '380000', Images: '/BoHoa/bo-hoa-cuc-tana_300x300.jpg' },
        { Name: 'Bó hoa 068', Category: 'bohoa', Price: '280000', PriceOld: '', Images: '/BoHoa/bo-hoa-068_300x300.jpg' },
        { Name: 'Bó hoa 069', Category: 'bohoa', Price: '290000', PriceOld: '', Images: '/BoHoa/bo-hoa-069_300x300.jpg' },
        { Name: 'Bó hoa 076', Category: 'bohoa', Price: '290000', PriceOld: '', Images: '/BoHoa/bo-hoa-076_300x300.jpg' },
        { Name: 'Bó hoa hồng 7 bông kèm phụ kiện', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/bo-hoa-hong-7-bong-kem-phu-kien_300x300.jpg' },
        { Name: 'Bó hoa hồng kem phối bi trắng đẹp', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/bo-hoa-hong-kem-phoi-bi-trang-dep_300x300.jpg' },
        { Name: 'Love', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/love_300x300.jpg' },
        { Name: 'Tình hồng', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/tinh-hong_300x300.jpg' },
        { Name: 'Baby girl', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/baby-girl_300x300.jpg' },
        { Name: 'Trong xanh', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/trong-xanh_300x300.jpg' },
        { Name: 'Bó hoa 008', Category: 'bohoa', Price: '300000', PriceOld: '400000', Images: '/BoHoa/bo-hoa-008_300x300.jpg' },
        { Name: 'Bó hoa 047', Category: 'bohoa', Price: '300000', PriceOld: '', Images: '/BoHoa/bo-hoa-047_300x300.jpg' },
        { Name: 'Only love 1', Category: 'bohoa', Price: '320000', PriceOld: '420000', Images: '/BoHoa/only-love-1_300x300.jpg' },
        { Name: 'Bó hoa cẩm chướng lộng lẫy', Category: 'bohoa', Price: '330000', PriceOld: '430000', Images: '/BoHoa/bo-hoa-cam-chuong-long-lay_300x300.jpg' },
        { Name: 'Yêu thương hạnh phúc', Category: 'bohoa', Price: '330000', PriceOld: '430000', Images: '/BoHoa/yeu-thuong-hanh-phuc_300x300.jpg' },
        { Name: 'Yêu xa', Category: 'bohoa', Price: '330000', PriceOld: '430000', Images: '/BoHoa/yeu-xa_300x300.jpg' },
        { Name: 'My everything', Category: 'bohoa', Price: '335000', PriceOld: '435000', Images: '/BoHoa/my-everything_300x300.jpg' },
        { Name: 'Bó hoa hướng dương phối baby trắng', Category: 'bohoa', Price: '330000', PriceOld: '', Images: '/BoHoa/bo-hoa-huong-duong-phoi-baby-trang_300x300.jpg' },
        { Name: 'Rose', Category: 'bohoa', Price: '350000', PriceOld: '', Images: '/BoHoa/rose_300x300.jpg' },
        { Name: 'Bó hoa thạch thảo', Category: 'bohoa', Price: '350000', PriceOld: '450000', Images: '/BoHoa/bo-hoa-thach-thao_300x300.jpg' },
        { Name: 'Ấm áp', Category: 'bohoa', Price: '365000', PriceOld: '465000', Images: '/BoHoa/am-ap_300x300.jpg' },
        { Name: 'Bó hoa trắng tinh khôi', Category: 'bohoa', Price: '380000', PriceOld: '480000', Images: '/BoHoa/bo-hoa-trang-tinh-khoi_300x300.jpg ' },
        { Name: 'Bó hoa hồng trắng + Baby trắng', Category: 'bohoa', Price: '390000', PriceOld: '490000', Images: '/BoHoa/bo-hoa-hong-trang-baby-trang_300x300.jpg' },
        { Name: 'Bó hoa cẩm chướng thanh xuân', Category: 'bohoa', Price: '390000', PriceOld: '490000', Images: '/BoHoa/bo-hoa-cam-chuong-thanh-xuan_300x300.jpg' },
        { Name: 'Bó hoa cẩm chương biết ơn', Category: 'bohoa', Price: '390000', PriceOld: '490000', Images: '/BoHoa/bo-hoa-cam-chuong-biet-on_300x300.jpg' },
        { Name: 'Bó hoa đồng tiền trắng', Category: 'bohoa', Price: '390000', PriceOld: '490000', Images: '/BoHoa/bo-hoa-dong-tien-trang_300x300.jpg' },
        { Name: 'Sự quan tâm', Category: 'bohoa', Price: '395000', PriceOld: '495000', Images: '/BoHoa/su-quan-tam_300x300.jpg' },
        { Name: 'Bó hoa 54', Category: 'bohoa', Price: '400000', PriceOld: '500000', Images: '/BoHoa/bo-hoa-54_300x300.jpg' },
        { Name: 'Bó hoa sáp Tulip 03', Category: 'bohoa', Price: '400000', PriceOld: '500000', Images: '/BoHoa/bo-hoa-sap-tulip-03_300x300.jpg' },
        { Name: 'Bó hoa 056', Category: 'bohoa', Price: '400000', PriceOld: '', Images: '/BoHoa/bo-hoa-056_300x300.jpg' },
        { Name: 'Bó hoa 070', Category: 'bohoa', Price: '400000', PriceOld: '', Images: '/BoHoa/bo-hoa-070_300x300.jpg' },
        { Name: 'Bó hoa 074', Category: 'bohoa', Price: '400000', PriceOld: '', Images: '/BoHoa/bo-hoa-074_300x300.jpg' },
        { Name: 'Bó hoa 077', Category: 'bohoa', Price: '400000', PriceOld: '', Images: '/BoHoa/bo-hoa-077_300x300.jpg' },
        { Name: 'Bó hoa 080', Category: 'bohoa', Price: '400000', PriceOld: '', Images: '/BoHoa/bo-hoa-080_300x300.jpg' },
        { Name: 'Bó hoa 081', Category: 'bohoa', Price: '400000', PriceOld: '', Images: '/BoHoa/bo-hoa-081_300x300.jpg' },
        { Name: 'Bó Hoa Pink', Category: 'bohoa', Price: '420000', PriceOld: '520000', Images: '/BoHoa/bo-hoa-pink_300x300.jpg' },
        { Name: 'Bó hoa tươi ấm áp 2', Category: 'bohoa', Price: '420000', PriceOld: '520000', Images: '/BoHoa/bo-hoa-tuoi-am-ap-2_300x300.jpg' },
        { Name: 'Bó hoa hồng kem + cành hoa baby', Category: 'bohoa', Price: '420000', PriceOld: '520000', Images: '/BoHoa/bo-hoa-hong-kem-canh-hoa-baby_300x300.jpg' },
        { Name: 'Ánh sao', Category: 'bohoa', Price: '420000', PriceOld: '520000', Images: '/BoHoa/anh-sao_300x300.jpg' },
        { Name: 'Trong sáng', Category: 'bohoa', Price: '420000', PriceOld: '', Images: '/BoHoa/trong-sang_300x300.jpg' },
        { Name: 'Bó hoa sáp Tulip 01', Category: 'bohoa', Price: '420000', PriceOld: '520000', Images: '/BoHoa/bo-hoa-sap-tulip-01_300x300.jpg' },
        { Name: 'Bó hoa sáp Tulip 02', Category: 'bohoa', Price: '420000', PriceOld: '520000', Images: '/BoHoa/bo-hoa-sap-tulip-02_300x300.jpg' },
        { Name: 'Bó hoa hồng tươi', Category: 'bohoa', Price: '450000', PriceOld: '550000', Images: '/BoHoa/bo-hoa-hong-tuoi_300x300.jpg' },
        { Name: 'Ánh nhìn đầu tiên', Category: 'bohoa', Price: '450000', PriceOld: '550000', Images: '/BoHoa/anh-nhin-dau-tien_300x300.jpg' },
        { Name: 'Vị ngọt tình yêu', Category: 'bohoa', Price: '450000', PriceOld: '550000', Images: '/BoHoa/vi-ngot-tinh-yeu_300x300.jpg' },
        { Name: 'Khoe sắc 001', Category: 'bohoa', Price: '450000', PriceOld: '550000', Images: '/BoHoa/khoe-sac-001_300x300.jpg' },
        { Name: 'Bó hoa hồng tươi', Category: 'bohoa', Price: '450000', PriceOld: '550000', Images: '/BoHoa/bo-hoa-hong-tuoi_300x300.jpg' },
        { Name: 'Bó hoa 058', Category: 'bohoa', Price: '450000', PriceOld: '', Images: '/BoHoa/bo-hoa-058_300x300.jpg' },
        { Name: 'Giây phút yêu thương', Category: 'bohoa', Price: '460000', PriceOld: '560000', Images: '/BoHoa/giay-phut-yeu-thuong_300x300.jpg' },
        { Name: 'Bó hoa hồng tình yêu mãi mãi - 17 bông hồng kem', Category: 'bohoa', Price: '480000', PriceOld: '580000', Images: '/BoHoa/bo-hoa-hong-tinh-yeu-mai-mai-17-bong-hong-kem_300x300.jpg' },
        //GIỎ HOA
        { Name: 'Hộp hoa 925', Category: 'giohoa', Price: '390000', PriceOld: '490000', Images: '/GioHoaTuoi/hop-hoa-925_300x300.jpg' },
        { Name: 'Giỏ hoa quý phái', Category: 'giohoa', Price: '400000', PriceOld: '500000', Images: '/GioHoaTuoi/gio-hoa-quy-phai_300x300.jpg' },
        { Name: 'Giỏ hoa 02', Category: 'giohoa', Price: '400000', PriceOld: '500000', Images: '/GioHoaTuoi/gio-hoa-02_300x300.jpg' },
        { Name: 'Hộp hoa thủy chung', Category: 'giohoa', Price: '420000', PriceOld: '520000', Images: '/GioHoaTuoi/hop-hoa-thuy-chung_300x300.jpg' },
        { Name: 'Điều kỳ diệu', Category: 'giohoa', Price: '445000', PriceOld: '545000', Images: '/GioHoaTuoi/dieu-ky-dieu_300x300.jpg' },
        { Name: 'Giỏ hoa 03', Category: 'giohoa', Price: '400000', PriceOld: '500000', Images: '/GioHoaTuoi/gio-hoa-03_300x300.jpg' },
        { Name: 'Giỏ hoa 04', Category: 'giohoa', Price: '400000', PriceOld: '500000', Images: '/GioHoaTuoi/gio-hoa-04_300x300.jpg' },
        { Name: 'Giản dị', Category: 'giohoa', Price: '415000', PriceOld: '515000', Images: '/GioHoaTuoi/gian-di_300x300.jpg' },
        { Name: 'Giỏ hoa giản dị', Category: 'giohoa', Price: '460000', PriceOld: '560000', Images: '/GioHoaTuoi/gio-hoa-gian-di_300x300.jpg' },
        { Name: 'Giỏ hoa hướng dương đam mê', Category: 'giohoa', Price: '470000', PriceOld: '570000', Images: '/GioHoaTuoi/gio-hoa-huong-duong-dam-me_300x300.jpg' },
        { Name: 'Giỏ hoa hồng vàng vươn xa', Category: 'giohoa', Price: '480000', PriceOld: '580000', Images: '/GioHoaTuoi/gio-hoa-hong-vang-vuon-xa_300x300.jpg' },
        { Name: 'Hộp hoa hướng dương cúc', Category: 'giohoa', Price: '460000', PriceOld: '560000', Images: '/GioHoaTuoi/gio-hoa-gian-di_300x300.jpg' },
        { Name: 'khoe sắc 005', Category: 'giohoa', Price: '480000', PriceOld: '580000', Images: '/GioHoaTuoi/khoe-sac-005_300x300.jpg' },
        { Name: 'Sức sống mới', Category: 'giohoa', Price: '490000', PriceOld: '590000', Images: '/GioHoaTuoi/suc-song-moi_300x300.jpg' },
        { Name: 'Hoa vàng cỏ xanh', Category: 'giohoa', Price: '490000', PriceOld: '590000', Images: '/GioHoaTuoi/hoa-vang-co-xanh_300x300.jpg' },
        { Name: 'Giỏ hoa hồng bình an', Category: 'giohoa', Price: '500000', PriceOld: '', Images: '/GioHoaTuoi/gio-hoa-hong-binh-an_300x300.jpg' },
        { Name: 'Sớm Mai', Category: 'giohoa', Price: '500000', PriceOld: '', Images: '/GioHoaTuoi/som-mai_300x300.jpg' },
        { Name: 'Xuân Sang', Category: 'giohoa', Price: '500000', PriceOld: '', Images: '/GioHoaTuoi/xuan-sang_300x300.jpg' },
        { Name: 'Nhẹ nhàng', Category: 'giohoa', Price: '500000', PriceOld: '', Images: '/GioHoaTuoi/nhe-nhang_300x300.jpg' },
        { Name: 'Giỏ hoa hồng bình an 2', Category: 'giohoa', Price: '500000', PriceOld: '', Images: '/GioHoaTuoi/gio-hoa-hong-binh-an-2_300x300.jpg' },
        { Name: 'Hộp hoa 934', Price: '600000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/hop-hoa-934_300x300.jpg' },
        { Name: 'Bó hoa 082', Price: '150000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-082_300x300.jpg' },
        { Name: 'Hộp hoa 933', Price: '1500000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/hop-hoa-933_300x300.jpg' },
        { Name: 'Bó hoa 081', Price: '400000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-081_300x300.jpg' },
        { Name: 'Bó hoa 080', Price: '400000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-080_300x300.jpg' },
        { Name: 'Hộp hoa 932', Price: '1800000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/hop-hoa-932_300x300.jpg' },
        { Name: 'Bó hoa 079', Price: '750000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-079_300x300.jpg' },
        { Name: 'Hộp hoa 078', Price: '220000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-078_300x300.jpg' },
        { Name: 'Bó hoa 077', Price: '400000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-077_300x300.jpg' },
        { Name: 'Bó hoa 076', Price: '290000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-076_300x300.jpg' },
        { Name: 'Hộp hoa 931', Price: '600000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/hop-hoa-931_300x300.jpg' },
        { Name: 'Bó hoa 075', Price: '650000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-075_300x300.jpg' },
        { Name: 'Bó hoa 074', Price: '400000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-074_300x300.jpg' },
        { Name: 'Giỏ hoa 13', Price: '700000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/gio-hoa-13_300x300.jpg' },
        { Name: 'Giỏ hoa 12', Price: '750000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/gio-hoa-12_300x300.jpg' },
        { Name: 'Giỏ hoa 11', Price: '790000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/gio-hoa-11_300x300.jpg' },
        { Name: 'Bó hoa 073', Price: '600000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-073_300x300.jpg' },
        { Name: 'Bó hoa 072', Price: '480000', Category: 'bohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/bo-hoa-072_300x300.jpg' },
        { Name: 'Giỏ hoa 10', Price: '700000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/gio-hoa-10_300x300.jpg' },
        { Name: 'Giỏ hoa 09', Price: '680000', Category: 'giohoa', PriceOld: '', Images: '/SpLienQuanBoHoa/gio-hoa-09_300x300.jpg' },
        //CHẬU HOA
        { Name: 'Chậu cúc Nhật', Price: '350000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cuc-nhat_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 09', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-09_300x300.jpg' },
        { Name: 'Chậu đồng tiền 01', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-dong-tien-01_300x300.jpg' },
        { Name: 'Chậu đồng tiền 02', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-dong-tien-02_300x300.jpg' },
        { Name: 'Chậu đồng tiền 03', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-dong-tien-03_300x300.jpg' },
        { Name: 'Chậu đồng tiền 04', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-dong-tien-04_300x300.png' },
        { Name: 'Chậu đồng tiền 05', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-dong-tien-05_300x300.png' },
        { Name: 'Chậu cây oải hương 03', Price: '390000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-oai-huong-03_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 03', Price: '380000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-03_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 04', Price: '400000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-04_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 06', Price: '400000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-06_300x300.jpg' },
        { Name: 'Cây trạng nguyên 09', Price: '420000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-09_300x300.jpg' },
        { Name: 'Chậu cây oải hương 01', Price: '450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-oai-huong-01_300x300.jpg' },
        { Name: 'Chậu cây oải hương 02', Price: '450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-oai-huong-02_300x300.jpg' },
        { Name: 'Chậu cúc calimero 01', Price: '450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cuc-calimero-01_300x300.jpg' },
        { Name: 'Cây trạng nguyên 01', Price: '450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-01_300x300.jpg' },
        { Name: 'Cây trạng nguyên 05', Price: '450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-05_300x300.jpg' },
        { Name: 'Cây trạng nguyên 02', Price: '460000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-02_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 01', Price: '480000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-01_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 07', Price: '480000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-07_300x300.jpg' },
        { Name: 'Chậu cúc thân gỗ', Price: '480000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cuc-than-go_300x300.jpg' },
        { Name: 'Cây trạng nguyên 03', Price: '480000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-03_300x300.jpg' },
        { Name: 'Cây trạng nguyên 06', Price: '480000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-06_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 05', Price: '500000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-05_300x300.jpg' },
        { Name: 'Chậu hồng môn 02', Price: '500000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-hong-mon-02_300x300.jpg' },
        { Name: 'Cây trạng nguyên 10', Price: '500000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-hong-mon-02_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 03', Price: '550000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-03_300x300.jpg' },
        { Name: 'Cây trạng nguyên 08', Price: '550000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-08_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 01', Price: '600000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-01_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 04', Price: '600000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-04_300x300.jpg' },
        { Name: 'Cây trạng nguyên 07', Price: '600000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-07_300x300.jpg' },
        { Name: 'Cây trạng nguyên 13', Price: '600000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-13_300x300.jpg' },
        { Name: 'Cây trạng nguyên 14', Price: '600000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-14_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 02', Price: '650000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-02_300x300.jpg' },
        { Name: 'Chậu hồng môn 01', Price: '650000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-hong-mon-01_300x300.jpg' },
        { Name: 'Cây trạng nguyên 04', Price: '650000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-04_300x300.jpg' },
        { Name: 'Cây trạng nguyên 16', Price: '650000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-16_300x300.jpg' },
        { Name: 'Cây trạng nguyên 19', Price: '650000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-19_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 07', Price: '680000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-07_300x300.jpg' },
        { Name: 'Cây trạng nguyên 15', Price: '700000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-15_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 05', Price: '750000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-05_300x300.jpg' },
        { Name: 'Cây trạng nguyên 17', Price: '750000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-17_300x300.jpg' },
        { Name: 'Chậu cây cẩm tú cầu 06', Price: '800000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-cam-tu-cau-06_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 08', Price: '800000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-08_300x300.jpg' },
        { Name: 'Cây trạng nguyên 11', Price: '800000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-11_300x300.jpg' },
        { Name: 'Chậu cây hoa hồng 02', Price: '850000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-hoa-hong-02_300x300.jpg' },
        { Name: 'Cây trạng nguyên 12', Price: '950000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-12_300x300.jpg' },
        { Name: 'Chậu cây tulip 01', Price: '1200000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-tulip-01_300x300.jpg' },
        { Name: 'Chậu cây tulip 02', Price: '1450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-tulip-02_300x300.jpg' },
        { Name: 'Cây trạng nguyên 18', Price: '1450000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/cay-trang-nguyen-18_300x300.jpg' },
        { Name: 'Chậu cây tulip 03', Price: '1800000', Category: 'chauhoa', PriceOld: '', Images: '/ChauHoa/chau-cay-tulip-03_300x300.jpg' },
        //Hoa Sáp
        { Name: 'Bó hoa sáp 55', Price: '180000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-55_300x300.jpg' },
        { Name: 'Bó hoa sáp 28', Price: '220000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-28_300x300.jpg' },
        { Name: 'Bó hoa sáp 40', Price: '220000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-40_300x300.jpg' },
        { Name: 'Bó hoa sáp 17', Price: '250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-17_300x300.jpg' },
        { Name: 'Bó hoa sáp 26', Price: '250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-26_300x300.jpg' },
        { Name: 'Bó hoa sáp 27', Price: '250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-27_300x300.jpg' },
        { Name: 'Bó hoa sáp 16', Price: '300000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-16_300x300.jpg' },
        { Name: 'Bó hoa sáp 47', Price: '300000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-47_300x300.jpg' },
        { Name: 'Bó hoa sáp 18', Price: '350000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-18_300x300.jpg' },
        { Name: 'Bó hoa sáp 38', Price: '350000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-38_300x300.jpg' },
        { Name: 'Bó hoa sáp 56', Price: '350000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-56_300x300.jpg' },
        { Name: 'Bó hoa sáp 53', Price: '380000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-53_300x300.jpg' },
        { Name: 'Bó hoa sáp 29', Price: '390000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-29_300x300.jpg' },
        { Name: 'Bó hoa sáp 43', Price: '400000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-43_300x300.jpg' },
        { Name: 'Bó hoa sáp 51', Price: '400000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-51_300x300.jpg' },
        { Name: 'Bó hoa sáp 21', Price: '460000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-21_300x300.jpg' },
        { Name: 'Bó hoa sáp 35', Price: '480000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-35_300x300.jpg' },
        { Name: 'Bó hoa sáp 34', Price: '490000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-34_300x300.jpg' },
        { Name: 'Bó hoa sáp 20', Price: '500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-20_300x300.jpg' },
        { Name: 'Bó hoa sáp 23', Price: '500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-23_300x300.jpg' },
        { Name: 'Bó hoa sáp 25', Price: '500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-25_300x300.jpg' },
        { Name: 'Bó hoa sáp 46', Price: '500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-46_300x300.jpg' },
        { Name: 'Bó hoa sáp 19', Price: '550000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-19_300x300.jpg' },
        { Name: 'Bó hoa sáp 24', Price: '550000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-24_300x300.jpg' },
        { Name: 'Bó hoa sáp 30', Price: '550000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-30_300x300.jpg' },
        { Name: 'Bó hoa sáp 32', Price: '550000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-32_300x300.jpg' },
        { Name: 'Bó hoa sáp 44', Price: '550000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-44_300x300.jpg' },
        { Name: 'Bó hoa sáp 50', Price: '550000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-50_300x300.jpg' },
        { Name: 'Bó hoa tình yêu lãng mạn T-03', Price: '600000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-tinh-yeu-lang-man-t-03_300x300.jpg' },
        { Name: 'Bó hoa sáp 22', Price: '600000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-22_300x300.jpg' },
        { Name: 'Bó hoa sáp 31', Price: '600000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-31_300x300.jpg' },
        { Name: 'Bó hoa sáp 49', Price: '600000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-49_300x300.jpg' },
        { Name: 'Bó hoa sáp 52', Price: '600000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-52_300x300.jpg' },
        { Name: 'Hộp hoa sáp I Love You S01', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hop-hoa-sap-i-love-you-s01_300x300.jpg' },
        { Name: 'Hộp hoa sáp I Love You S02', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hop-hoa-sap-i-love-you-s02_300x300.jpg' },
        { Name: 'Bó hoa tình yêu lãng mạn T-02', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-tinh-yeu-lang-man-t-02_300x300.jpg' },
        { Name: 'Bó hoa sáp 13', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-13_300x300.jpg' },
        { Name: 'Bó hoa sáp 14', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-14_300x300.jpg' },
        { Name: 'Bó hoa sáp 15', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-15_300x300.jpg' },
        { Name: 'Bó hoa sáp 33', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-33_300x300.jpg' },
        { Name: 'Bó hoa sáp 36', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-36_300x300.jpg' },
        { Name: 'Bó hoa sáp 45', Price: '650000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-45_300x300.jpg' },
        { Name: 'Bó hoa sáp 42', Price: '680000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-42_300x300.jpg' },
        { Name: 'Hoa sáp – an01', Price: '700000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-an01_300x300.jpg' },
        { Name: 'Bó hoa sáp 39', Price: '700000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-39_300x300.jpg' },
        { Name: 'Bó hoa sáp 41', Price: '700000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-41_300x300.jpg' },
        { Name: 'Bó hoa sáp 48', Price: '700000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-48_300x300.jpg' },
        { Name: 'Hoa sáp – an02', Price: '750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/02_300x300.jpg' },
        { Name: 'Bó hoa tình yêu lãng mạn T-01', Price: '750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-tinh-yeu-lang-man-t-01_300x300.jpg' },
        { Name: 'Hoa hồng sáp AT02', Price: '750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-hong-sap-at02_300x300.jpg' },
        { Name: 'Bó hoa sáp 01', Price: '750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-01_300x300.jpg' },
        { Name: 'Bó hoa sáp 03', Price: '750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-03_300x300.jpg' },
        { Name: 'Bó hoa sáp 37', Price: '750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-37_300x300.jpg' },
        { Name: 'Hoa hồng sáp AT03', Price: '790000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-hong-sap-at03_300x300.jpg' },
        { Name: 'Hoa sáp – T50', Price: '800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-t50_300x300.jpg' },
        { Name: 'Hộp hoa hồng sáp AT04', Price: '800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hop-hoa-hong-sap-at04_300x300.jpg' },
        { Name: 'Bó hoa sáp 02', Price: '800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-02_300x300.jpg' },
        { Name: 'Bó hoa sáp 12', Price: '800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-12_300x300.jpg' },
        { Name: 'Hoa sáp – Phong 50-03', Price: '850000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-phong-50-03_300x300.jpg' },
        { Name: 'Bó hoa sáp 04', Price: '900.000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-04_300x300.jpg' },
        { Name: 'Hoa sáp – T80-05', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-t80-05_300x300.jpg' },
        { Name: 'Hoa sáp – an04_50 bông', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/04-50-bong_300x300.jpg' },
        { Name: 'Hoa sáp – TR-02- 50 bông', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-tr-02-50bong_300x300.jpg' },
        { Name: 'Hoa sáp – an01', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/01_300x300.jpg' },
        { Name: 'Hoa sáp – T50', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-t50_300x300.jpg' },
        { Name: 'Hoa hồng sáp AT05', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-hong-sap-at05_300x300.jpg' },
        { Name: 'Bó hoa sáp 11', Price: '950000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-11_300x300.jpg' },
        { Name: 'Hoa sáp – N50-03', Price: '1000000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-n50-03_300x300.jpg' },
        { Name: 'Hoa sáp – HT-60-04', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-ht-60-04_300x300.jpg' },
        { Name: 'Hoa sáp – Phong50-02', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-phong50-02_300x300.jpg' },
        { Name: 'Hoa sáp – N100-07', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-n100-07_300x300.jpg' },
        { Name: 'Bó hoa sáp 04', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-04_300x300.jpg' },
        { Name: 'Hoa sáp – N60-06', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-n60-06_300x300.jpg' },
        { Name: 'Hoa sáp – N99-05', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-n99-05_300x300.jpg' },
        { Name: 'Hoa sáp – Ms55-1', Price: '1.250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-ms55-1_300x300.jpg' },
        { Name: 'Hoa sáp – N50 bông', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-n50-bong_300x300.jpg' },
        { Name: 'Bó hoa sáp 06', Price: '1250000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-06_300x300.jpg' },
        { Name: 'Hoa sáp – Ms8502', Price: '1400000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/02_300x300.jpg' },
        { Name: 'Hoa hồng sáp AT01', Price: '1400000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-hong-sap-at01_300x300.jpg' },
        { Name: 'Hoa sáp – Ms-120b 04', Price: '1500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-ms-120b-04_300x300.jpg' },
        { Name: 'Hoa sáp – An 05130b', Price: '1500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/130b_300x300.jpg' },
        { Name: 'Hoa sáp – Phong100-02', Price: '1500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-phong100-02_300x300.jpg' },
        { Name: 'Hộp Hoa Say Đắm T-04', Price: '1500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hop-hoa-say-dam-t-04_300x300.jpg' },
        { Name: 'Bó hoa sáp 07', Price: '1500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-07_300x300.jpg' },
        { Name: 'Bó hoa sáp 09', Price: '1500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-09_300x300.jpg' },
        { Name: 'Bó hoa sáp 10', Price: '1750000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-10_300x300.jpg' },
        { Name: 'Hoa sáp – HT-100-03', Price: '1800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-ht-100-03_300x300.jpg' },
        { Name: 'Hoa sáp – Ms 71 -3', Price: '1800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-ms-71-3_300x300.jpg' },
        { Name: 'Hoa sáp – Phong 99-01', Price: '1800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-sap-phong-99-01_300x300.jpg' },
        { Name: 'Hoa sáp – Ms85021', Price: '1800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/02_300x300_1.jpg' },
        { Name: 'Hoa hồng sáp AT06', Price: '1800000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-hong-sap-at06_300x300.jpg' },
        { Name: 'Hoa hồng sáp AT07', Price: '1850000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/hoa-hong-sap-at07_300x300.jpg' },
        { Name: 'Bó hoa sáp 08', Price: '2050000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-08_300x300.jpg' },
        { Name: 'Hoa sáp – An 06 190 bông', Price: '2500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/-190-bong_300x300.jpg' },
        { Name: 'Bó hoa sáp 05', Price: '2500000', Category: 'hoasap', PriceOld: '', Images: '/HoaSap/bo-hoa-sap-05_300x300.jpg' },
    ]
export default flowerData
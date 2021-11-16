import React from "react";

function Footer() {
    return (
        <div className="footer">
            <div></div>

            <div>

                <div className='footerList'>
                    <span>Sắt</span>
                    <span>Nhôm</span>
                    <span>Trọn gói nhà ở</span>
                    <span>Thi công công trình</span>
                </div>

                <div className='footerAddress'>
                    <h1>Anh Vũ Window</h1>
                    <div className='footerAddress-Left'>
                        <div className='footerAddress-Left-Left'>
                            <span className='fas fa-phone-square-alt' />
                            <span className="fab fa-facebook-f" />
                        </div>
                        <div className='footerAddress-Left-Right'>
                            <span>  0793 302 333</span>
                            <a href='https://www.facebook.com/truongtuanphong.vuhue'>Quốc Vũ</a>
                        </div>
                    </div>
                    <div className='footerAddress-Right'>
                        <address>Địa chỉ: 364 Lê Thạch, Phường Hòa An, Quận Cẩm Lệ, Đà Nẵng.</address>
                        <p>Từ 7:00 đến 17:00 tất cả các ngày trong tuần.</p>
                    </div>
                </div>

                <div className='footerCopyright'>
                    <p>©2021 - Anh Vũ WinDow</p>
                </div>
            </div>


            <div></div>

        </div>
    )
};
export default Footer;

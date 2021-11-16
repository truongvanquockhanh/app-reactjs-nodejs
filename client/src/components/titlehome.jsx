import React from "react";

function TitleHome () {
    return (
        <div>
            <div className='introductionBottom'>
                <div className='introductionBottomRight'>
                    <h3>Cam kết mang đến cho khách hàng những sản phẩm,
                        dịch vụ tốt nhất với thái độ phục vụ tận tụy,
                        nhiệt tình nhất. <b>Với:</b> </h3>
                    <ul>
                        <li><b>Chất lượng:</b> An toàn, bền đẹp, tiện lợi, thoải mái khi sử dụng với
                            chế độ bảo hành riêng với từng loại sản phẩm</li>
                        <li><b>Uy tín:</b> Luôn đảm bảo với khách hàng về chất lượng sản phẩm và
                            tiến độ thi công đúng với hợp đồng đã ký kết</li>
                        <li><b>Giá cả tốt nhất:</b> Luôn cung cấp cho quý khách những sản phẩm tốt nhất với giá cả tốt nhất, cạnh tranh nhất</li>
                    </ul>
                </div>
                <div className='introductionBottomLeft'> 
                    <p>LIÊN HỆ NGAY: <i>0793 302 333</i></p>
                    {/* <br /> */}
                    <p>ĐỊA CHỈ: <i>364 Lê Thạch, phường Hòa An, quận Cẩm Lệ, Thành Phố Đà Nẵng</i></p>
                </div>
            </div>
            <div className='specialProduct'>
                <h2>SẢN PHẨM NỔI BẬT <i class='fas fa-angle-double-down' style={{fontSize: '18px', color: 'white'}}></i></h2>
            </div>
        </div>
    )
};
export default TitleHome;
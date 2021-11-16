import React from "react";

function Introduction() {
    return (
        <div className='introduction'>
            <div className='introductionLeft'>
                <img src='/logo.jpg' alt="logo" />
            </div>
            <div className="introductionRight">
                <h1>CÔNG TY TNHH NHÔM KÍNH VÀ CƠ KHÍ PHƯƠNG ANH VŨ</h1>
                <p>Chuyên sản xuất và lắp đặt các sản phẩm nhôm, kính, sắt:</p>
                <ul>
                    <li>Cửa nhôm xingfa</li>
                    <li>Lan can cầu thang</li>
                    <li>Cửa sắt</li>
                    <li>Kính cường lực, cửa lề san</li>
                    <li>Bạc quay, bạc kéo ...</li>
                    <li>Cửa kéo</li>
                    <li>Và tất cả các sản phẩm <b>nhôm</b>, <b>sắt</b> khác</li>
                </ul>
            </div>
        </div>
    )
};
export default Introduction;
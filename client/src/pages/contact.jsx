import React from "react";

function Contact(){
    return (
        <div className='contact'>
            <h1>LIÊN HỆ</h1>
            <div className='contact-Left'>
            <h2>CÔNG TY TNHH NHÔM KÍNH VÀ CƠ KHÍ PHƯƠNG ANH VŨ </h2>
            <p>Chuyên: Thiết kế, thi công các sản phẩm về nhôm, sắt, kính cường lực, lang cang, cầu thang, ...</p>
            <p><b>PHƯƠNG ANH VŨ</b> – Tỏa sáng mọi không gian.<br />
<b>Trụ sở:</b> 364 Lê Thạch, Phường Hoà An, Quận Cẩm Lệ, Thành phố Đà Nẵng, Việt Nam<br />
<b>Liên hệ:</b> 0793 302 333</p>
            </div>
            <div className="contact-Right">
                <div>
                    <label>Họ và tên</label>
                    <label>Số điện thoại</label>
                    <label>Email</label>
                    <label>Chủ đề</label>
                    <label>Nội dung</label>
                </div>
                <form>
                    <input type={Text}></input>
                    <input type={Text}></input>
                    <input type={Text}></input>
                    <input type={Text}></input>
                    <textarea></textarea>
                    <button type='submit'>Gửi</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;
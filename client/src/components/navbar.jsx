import React from "react";
import { Link } from "react-router-dom";
import ListProduct from "../components/listProduct";

function Navbar() {
    return (
        <div className="navbar">
            {/* <img className='col-sm-2' src='' title='' />  */}
            <div></div>
            <img src='/logo.jpg' title='logo' alt="img" />
            <div></div>
            <div></div>
            <Link to='/'>Trang Chủ</Link>
            <Link to='/about'>Giới Thiệu</Link>
            <ListProduct />
            <Link to='/contact'>Liên Hệ</Link>
            <div></div>
        </div>
    )
};
export default Navbar;
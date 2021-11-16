import React from "react";
import AddListProduct from "../components/addListProduct";
import AddProduct from "../components/addProduct";
import AnhVu from "../components/AnhVu";
function Product() {
    return (
        <div>
        <AnhVu/>
            <AddListProduct />
            <AddProduct />
        </div>
    )
}

export default Product;
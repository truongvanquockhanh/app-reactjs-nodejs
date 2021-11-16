import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import List from "./listdropdown";
import { url } from "./url";

function ListProduct(props) {
    const [product, setProduct] = useState('');
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then((data) => setProduct(data));
    }, []);
    // { product !== '' && console.log("get: ", product[0].product) };

    function Create(props) {
        return (
            <List
                className="navbar-List"
                key={props._id}
                product={props.product}
            />
        )
    }

    return (
        <div className='dropDown'>
            <Link to='#'>Sản Phẩm <i class='fas fa-angle-down'></i></Link>
            <div className='drop-content '>
                {product !== "" && product.map(Create)}
            </div>
        </div>
    );
};
export default ListProduct;
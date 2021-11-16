import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CardProduct from "./cardproduct";
import List2 from "./list";
import { url } from "./url";

function OptionProduct() {
    const [product, setProduct] = useState('');
    let { id } = useParams();

    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then((data) => setProduct(data));
    }, []);

    function Create(props) {
        return (
            <List2
                key={props._id}
                product={props.product}
            />
        )
    }
    return (
        <div className='optionProduct'>
            <div className='optionProduct-left'>
                <br />
                <h2><b>Sản Phẩm</b></h2>
                <div className='optionList'>
                    {product !== "" && product.map(Create)}
                </div>
                <h2>LIÊN HỆ</h2>
                <div className='optionList'>
                    <br />
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
                    <br />
                </div>

            </div>
            <div className='optionProduct-right'>
                <h2>{id}</h2>
                <CardProduct id={id} />
            </div>
        </div>
    )
};
export default OptionProduct;
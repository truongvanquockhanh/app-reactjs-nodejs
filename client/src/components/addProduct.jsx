import React, { useEffect, useState } from "react";
import Upload from "./upload";
import { url } from "./url";

function AddProduct() {
    const [product, setProduct] = useState(
        {
            product: '',
            nameProduct: '',
            imgUrl: '',
            price: ''
        }
    );
    const [reload, setReload] = useState(null);
    useEffect(() => {
        if (reload) {
            window.location.reload();
        }
    }, [reload]);
    function handleSubmitAdd(event) {
        event.preventDefault();
        console.log('submit value:', event.target.imgUrl.value);
        setProduct({
            product: event.target.product.value,
            nameProduct: event.target.nameProduct.value,
            imgUrl: event.target.imgUrl.value,
            price: event.target.price.value
        })
    };

    useEffect(() => {
        if (product.nameProduct !== '') {
            console.log('post data', product);
            fetch(`${url}/addproduct`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('post successfully', data);
                    setReload(data);
                })
                .catch(err => console.log(err));
        }
    }, [product]);

    return (
        <div className='addProduct adminModify'>
            <div>
                <h1>Thêm danh mục sản phẩm</h1>
            </div>
            <form onSubmit={handleSubmitAdd}>
                <label>Danh mục sản phẩm: </label>
                <input type='text' name="product" placeholder='Thêm sản phẩm mới' required></input>
                <label>Tên sản phẩm</label>
                <input type='text'  name="nameProduct" required></input>
                <label>Giá</label>
                <input type='text'name='price' placeholder='please fill number' required></input>
                <Upload />
                <button type='submit'>Thêm sản phẩm</button>
            </form>
        </div>
    )
}
export default AddProduct;
import React, { useEffect, useState } from "react";
import Upload from "./upload";
import Select from "./select";
import { url } from "./url";

function AddListProduct() {
    const [select, setSelect] = useState('');
    const [product, setProduct] = useState("");
    const [reload, setReload] = useState(null);
    useEffect(() => {
        if (reload) {
            window.location.reload();
        }
    }, [reload]);
    function handleSubmitAdd(event) {
        event.preventDefault();
        setProduct({
            product: event.target.product.value,
            nameProduct: event.target.nameProduct.value,
            imgUrl: event.target.imgUrl.value,
            price: event.target.price.value
        })
    };

    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then((data) => setSelect(data));
    }, []);

    function Create(props) {
        return (
            <Select
                key={props._id}
                product={props.product}
            />
        )
    }

    useEffect(() => {
        if (product !== '') {
            console.log('post data', product);
            fetch(`${url}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('submit modify data:', data);
                    setReload(data);
                })
                .catch(err => console.log(err));
        }
    }, [product]);

    

    return (
        <div className='addProduct adminModify'>
            <div>
                <h1>Thêm sản phẩm</h1>
            </div>
            <form onSubmit={handleSubmitAdd}>
                <label>Danh mục sản phẩm: </label>
                <br />
                <select name="product">
                    {select !== "" && select.map(Create)}
                </select>
                <br />
                {/* <input type='text' name="product" placeholder='Thêm sản phẩm mới'></input> */}
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
export default AddListProduct;
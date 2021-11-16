import React, { useState, useEffect } from "react";
import Select from "./select";
import { url } from "./url";

function DeleteProduct() {

    const [select, setSelect] = useState('');
    const [find, setFind] = useState('');
    const [reload, setReload] = useState(null);
    useEffect(() => {
        if (reload) {
            window.location.reload();
        }
    }, [reload]);
    useEffect(() => {
        if (find !== '') {
            fetch(`${url}/${find}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(response => response.json())
            .then(data => {
                console.log('delete data', data);
                setReload(data);
            })
            .catch(err => console.log('err:', err));
        }
    }, [find]);

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
    };
    function handleFind(e) {
        const result = window.confirm("Nếu bạn xóa danh mục sản phẩm này, tất cả các sản phẩm bên trong sẽ bị xóa hết ??")
        if (result) {
            console.log("delete product :", e.target.value);
            setFind(e.target.value);
        }

    }
    return (
        <div className='adminModify'>
            <h1>Chọn danh mục sản phẩm cần xóa</h1>
            <select name="product" onChange={handleFind}>
                <option value="">Chọn danh mục sản phẩm cần xóa</option>
                {select !== "" && select.map(Create)}
            </select>
        </div>
    )
};
export default DeleteProduct;
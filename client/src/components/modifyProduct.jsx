import React, { useState, useEffect } from "react";
import Select from "./select";
import { storage } from "../firebase1";
import { url } from "./url";

function Modify() {
    const [select, setSelect] = useState('');
    const [find, setFind] = useState('');
    const [data, setData] = useState('');
    const [deleteProduct, setDeleteProduct] = useState('');
    const [modifyProduct, setModifyProduct] = useState('');
    const [modifyForm, setModifyForm] = useState('');
    const [reload, setReload] = useState(null);
    // const [imgUrl, setImgUrl] =useState('');
    useEffect(() => {
        if (reload) {
            window.location.reload();
        }
    }, [reload]);
    useEffect(() => {
        fetch(`${url}`)
            .then(response => response.json())
            .then((data) => setSelect(data));
    }, []);
    useEffect(() => {
        if (find !== '') {
            fetch(`${url}/${find}`)
                .then(response => response.json())
                .then((data) => setData(data));
        };
    }, [find]);
    useEffect(() => {
        if (deleteProduct !== '') {
            fetch(`${url}/${deleteProduct}-${find}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => response.json())
                .then(data => console.log(data))
                .then(() => {
                    console.log('get data after delete:')
                    return (
                        fetch(`${url}/${find}`)
                            .then(response => response.json())
                            .then((data) => {
                                setData(data)
                                console.log("data after delete: ", data);
                            })
                    )
                }
                )
                .catch(err => console.log('err:', err));
        }
    }, [deleteProduct, find]);

    useEffect(() => {
        if (modifyProduct !== '') {
            fetch(`${url}/modify/${modifyProduct}-${find}`)
                .then(response => response.json())
                .then((data) => {
                    console.log("data modify:", data);
                    setModifyForm(data);
                })
        };
    }, [modifyProduct, find]);

    function Create(props) {
        return (
            <Select
                key={props._id}
                product={props.product}
            />
        )
    };

    function handleFind(e) {
        console.log("find", e.target.value);
        setFind(e.target.value);
    }


    function handleModify(e) {
        console.log("sua : ", e.target.value);
        setModifyProduct(e.target.value);
    }

    function handleDelete(e) {
        let result = window.confirm("B???n ch???c ch???n mu???n x??a s???n ph???m n??y ?");
        if (result) {
            setDeleteProduct(e.target.value);
        }
    }

    function handleChangeProduct(e) {
        console.log(e.target.value);
        setModifyForm(prevValue => {
            return {
                ...prevValue,
                nameProduct: e.target.value
            };
        });
    };

    function handleChangePrice(e) {
        console.log(e.target.value);
        setModifyForm(prevValue => {
            return {
                ...prevValue,
                price: e.target.value
            };
        });
    };

    const handleChange = e => {
        if (e.target.files[0]) {
            const uploadTask = storage.ref(`images/${e.target.files[0].name}`).put(e.target.files[0]);
            uploadTask.on(
                "state_changed",
                snapshot => { },
                error => {
                    console.log(error);
                },
                () => {
                    storage
                        .ref("images")
                        .child(e.target.files[0].name)
                        .getDownloadURL()
                        .then(url => {
                            console.log('img modify:', url);
                            setModifyForm(prevValue => {
                                return {
                                    ...prevValue,
                                    imgUrl: url
                                };
                            });
                        })
                }
            );
        }
    };

    function handleSubmitModify(e) {
        e.preventDefault();

        console.log("data modify submit:", modifyForm);

        fetch(`${url}/${find}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(modifyForm),
        })
            .then(response => response.json())
            .then(data => {
                console.log('submit modify data:', data);
                setReload(data);
            })
            .catch(err => console.log(err))


    }

    function Creates(props) {
        let a = props.price;
        return (
            <div className='card' key={props._id}>
                <img src={props.imgUrl} alt="img" style={{ width: '100%' }} className='card-Top' />
                <div className="card-bottom">
                    <h1>{props.nameProduct}</h1>
                    <span>Gi??: {a.toLocaleString(undefined, { maximumFractionDigits: 2 })} ??</span>
                    <br />
                    <a href='#tt'><button name="id" value={props._id} onClick={handleModify}>S???a</button></a>
                    <button name="id" value={props._id} onClick={handleDelete}>Xoa</button>
                </div>

            </div>
        )
    }

    return (
        <div className='adminModify'>
            <div>
                <h1>S???a s???n ph???m</h1>
            </div>
            <form >
                <label>Danh m???c s???n ph???m: </label>
                <br />
                <select name="product" onChange={handleFind}>
                    <option value="">Ch???n danh s??ch s???n ph???m</option>
                    {select !== "" && select.map(Create)}
                </select>
                <br />
                {modifyForm !== '' &&
                    <div id="tt">
                        <h2>Vui l??ng ??i???n th??ng tin c???n s???a</h2>
                        <label>T??n s???n ph???m</label>
                        <br />
                        <input
                            type='text'
                            onChange={handleChangeProduct}
                            name="nameProduct"
                            value={modifyForm.nameProduct}
                        ></input>
                        <br />
                        <label>Gi??</label>
                        <br />
                        <input
                            onChange={handleChangePrice}
                            type='number'
                            name='price'
                            value={modifyForm.price}
                        ></input>
                        <div>
                            <input type='file' onChange={handleChange}></input>
                            <br />
                            <img style={{ width: '100px' }} src={modifyForm.imgUrl} alt="firebase" />
                            <input type='hidden' name='imgUrl' value={modifyForm.imgUrl} />
                        </div>
                        <button type='submit' onClick={handleSubmitModify}>Th??m s???n ph???m</button>
                    </div>}
            </form>
            <div>
                {data !== '' && data.map(Creates)}
            </div>
        </div>
    )
};
export default Modify;
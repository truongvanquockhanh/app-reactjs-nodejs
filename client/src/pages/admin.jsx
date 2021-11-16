import React, { useEffect, useState } from "react";
import Login from "../components/login";
import Modify from "../components/modifyProduct";
import AddProduct from "../components/addProduct";
import AddListProduct from "../components/addListProduct";
import DeleteProduct from "../components/deleteProduct";
import { url } from "../components/url";

function Admin() {
    const [token, setToken] = useState({
        isLogin: ''
    });
    const [auth, setAuth] = useState('')
    useEffect(() => {
        // const sessionData = JSON.parse(sessionStorage.getItem('token'.isLogin))
        if (token.isLogin!=='') {
            console.log('useEffect token:', token);
        let a = new Promise((resolve, reject) =>
            resolve('niu')
        );
        a
            .then(sessionStorage.setItem('token', JSON.stringify(token)))
            .then(setAuth(JSON.parse(sessionStorage.getItem('token')).isLogin));
        }
        if (JSON.parse(sessionStorage.getItem('token'))) {
            setAuth(JSON.parse(sessionStorage.getItem('token')).isLogin);
        };
      }, [token]);
      
    function handleLogout() {
        fetch(`${url}/logout`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ status: "logout" }),
        })
            .then(response => response.json())
            .then(data => {
                setToken(data)
            })
            .catch(err => console.log(err));
    }
    if (auth==='true') {
        return (
            <div>
                <div className='logOut'>
                    <button type='button' onClick={handleLogout}>Logout</button>
                </div>
                <div className='admin'>
                    <AddListProduct className='adminModify'/>
                    <AddProduct className='adminModify'/>
                    <Modify className='adminModify'/>
                    <DeleteProduct className='adminModify'/>
                </div>
            </div>)
    }


    return (
        <Login setToken={setToken} />
    )
};
export default Admin;
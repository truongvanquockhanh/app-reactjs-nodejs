import React, { useEffect, useState } from "react";
import { url } from "./url";

function Login( {setToken} ) {
    const [data, setData] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        console.log(e.target.username.value);
        setData({
            username: e.target.username.value,
            password: e.target.password.value
        })
    }
    

    useEffect(() => {
        if (data !== '') {
            console.log(setToken);
            fetch(`${url}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    setToken(data)
                })
                .catch(err => console.log(err));
        }
    }, [data, setToken]);
    return (
        <div className='loginPage'>
            <h1>Login with admin</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' name='username' placeholder='Tên đăng nhập'></input>
                <br />
                <input type='password' name='password' placeholder='Mật khẩu'></input>
                <br />
                <button type='submit'>Đăng nhập</button>
                <br />
                <span>(username: anhvu, password: siro)</span>
            </form>
        </div>
    )
}
export default Login;
import React from "react";
import { url } from "./url";

function Logout(){
    function handleLogout(e){
        fetch(`${url}/logout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({status: "logout"}),
            })
                .then(response => response.json())
                .then(data => {
                    setAuth(data)
                    console.log(data)
                })
                .catch(err => console.log(err));
    }
    return (
        <div>
            <button type='' onClick='handleLogout'>Logout</button>
        </div>
    )
};
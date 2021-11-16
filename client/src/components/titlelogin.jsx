import React from "react";
import { Link } from 'react-router-dom'

function TitleLogin(){
    return (
        <div className='loginAdmin'>
            <Link to='/admin' ><button>Login with admin(CRUD)</button></Link>
        </div>
    )
};
export default TitleLogin;
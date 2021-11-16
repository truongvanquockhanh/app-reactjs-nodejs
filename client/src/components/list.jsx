import React from "react";
import { Link } from "react-router-dom";

function List2(props) {
    return (
        <div className='list2'>
            <Link to={`/${props.product}`} ><i class='fas fa-caret-right'> </i> {props.product}</Link>
        </div>
    )
};

export default List2;
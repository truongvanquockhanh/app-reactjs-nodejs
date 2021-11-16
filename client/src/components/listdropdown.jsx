import React from "react";
import { Link } from "react-router-dom";

function List(props) {

    return (
        <div className="navbar-List">
            <Link to={`/${props.product}`} ><i class='fas fa-caret-right'> </i> {props.product}</Link>
        </div>
    )
};

export default List;
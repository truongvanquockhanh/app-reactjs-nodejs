import React from "react";

function Card(data){
    let a=data.price;
    // console.log("number tring", a.toLocaleString(undefined, {maximumFractionDigits:2}));
    return (
        <div className='card'>
            <img src={data.imgUrl} alt="img" style={{maxWidth: '100%'}} className='card-Top'/>
            <div className="card-bottom">
            <h1>{data.nameProduct}</h1>
            <span>Giá: {a.toLocaleString(undefined, {maximumFractionDigits:2})} đ</span>
            </div>
            
        </div>
    )
};
export default Card;
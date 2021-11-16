import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import { url } from "./url";

function CauThangSat() {
    const [card, setCard] = useState('');
    const row = [];

    useEffect(() => {
        console.log("get data");
        fetch(`${url}/CẦU THANG SẮT`)
            .then(response => response.json())
            .then((data) => setCard(data));
    }, []);

    function Create(e) {
        return (
            <Card
                key={e._id}
                imgUrl={e.imgUrl}
                nameProduct={e.nameProduct}
                price={e.price}
            />
        )
    }
    (function Loop() {
        for (let index = 0; index < 5; index++) {
            row.push(card[index]);
            console.log("after push:", row);
        }
    })();
    return (
        <div className='homePart'>
            <div className='homeProduct'>
                <Link to='/CẦU THANG SẮT'><h2>CẦU THANG SẮT</h2></Link>
                <Link to='/CẦU THANG SẮT'><i>Chi tiết</i></Link>
            </div>
            {card !== '' && row.map(Create)}
        </div>
    )
}
export default CauThangSat;
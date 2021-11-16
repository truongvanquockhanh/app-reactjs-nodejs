import React, { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";
import { url } from "./url";

function KinhBep() {
    const [card, setCard] = useState('');
    const row = [];

    useEffect(() => {
        console.log("get data");
        fetch(`${url}/KÍNH BẾP SƠN MÀU`)
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
            <Link to='/KÍNH BẾP SƠN MÀU'> <h2>KÍNH BẾP SƠN MÀU</h2></Link>
            <Link to='/KÍNH BẾP SƠN MÀU'><span>Chi tiết</span></Link>
            </div>
            {card !== '' && row.map(Create)}
        </div>
    )
}
export default KinhBep;

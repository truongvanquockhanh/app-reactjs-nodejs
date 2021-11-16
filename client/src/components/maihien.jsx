import React, { useEffect, useState } from "react";
import Card from "./card";
import { Link } from "react-router-dom";
import { url } from "./url";

function Maihien() {
    const [card, setCard] = useState('');
    const row = [];

    useEffect(() => {
        console.log("get data");
        fetch(`${url}/MÁI HIÊN DI ĐỘNG`)
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
            <Link to='/MÁI HIÊN DI ĐỘNG'><h2>MÁI HIÊN DI ĐỘNG</h2></Link>
            <Link to='/MÁI HIÊN DI ĐỘNG'><span>Chi tiết</span></Link>
            </div>
            {card !== '' && row.map(Create)}
        </div>
    )
}
export default Maihien;
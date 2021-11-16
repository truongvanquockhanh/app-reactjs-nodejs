import React, { useState , useEffect} from "react";
import Card from "./card";
import { url } from "./url";

function CardProduct(props){
    const [card, setCard] = useState('');
    
    useEffect(() => {
        console.log("get data");
        fetch(`${url}/${props.id}`)
            .then(response => response.json())
            .then((data) => setCard(data));
    }, [props.id]);
    card !== '' && console.log("data is:", card);

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

    return (
        <div>
            {card !== '' && card.map(Create)}
        </div>
    )
};
export default CardProduct;
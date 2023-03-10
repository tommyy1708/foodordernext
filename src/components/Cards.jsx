import React from 'react';
import Image from "next/image";

const Cards = ({item,handleAddToCart}) => {
    const { key, name, prices, category} = item;

    return (
        <div>
            <div key={key} onClick={()=>handleAddToCart(item)} className='products-box' >
                <Image  className='products-images' src='/test.webp' width={80} height={80} />
                <h5  className="products-name">{name}</h5>
                <p  className="products-text">{category}</p>
                <p  className="products-text">Price: ${prices.toFixed(2)}</p>
            </div>
        </div>
    );
}

export default Cards;

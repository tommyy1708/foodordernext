import React from 'react';
import Image from "next/image";

const Cards = ({item,handleAddToCart}) => {
    const { key, name, prices, category} = item;

    return (
        <div>
            <div className='products-box' >
                <Image  className='products-images' src='/test.webp' width={80} height={80} />
                <h5  className="products-name">{name}</h5>
                <p  className="products-text">{category}</p>
                <p  className="products-text">Price: ${prices}</p>
                <button onClick={()=>handleAddToCart(item)} className="products-btn">Add</button>
            </div>
        </div>
    );
}

export default Cards;
